"use client";
import { useEffect, useState } from "react";

export default function AccessibilityEnhancer() {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prefersHighContrast = window.matchMedia("(prefers-contrast: high)").matches;
    setReducedMotion(prefersReducedMotion);
    setHighContrast(prefersHighContrast);
    const savedFontSize = localStorage.getItem("fontSize");
    const savedHighContrast = localStorage.getItem("highContrast");
    if (savedFontSize) setFontSize(parseInt(savedFontSize));
    if (savedHighContrast) setHighContrast(savedHighContrast === "true");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.fontSize = `${fontSize}px`;
    if (highContrast) root.classList.add("high-contrast");
    else root.classList.remove("high-contrast");
    if (reducedMotion) root.classList.add("reduced-motion");
    else root.classList.remove("reduced-motion");
    localStorage.setItem("fontSize", fontSize.toString());
    localStorage.setItem("highContrast", highContrast.toString());
  }, [fontSize, highContrast, reducedMotion]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab" && e.shiftKey && e.target === document.body) {
        const mainContent = document.querySelector("main");
        if (mainContent) {
          if (typeof mainContent.focus === "function") mainContent.focus();
          if (typeof mainContent.scrollIntoView === "function") mainContent.scrollIntoView();
        }
      }
      if (e.key === "Escape") {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const element = modal;
          if (element && element.style && element.style.display !== "none") {
            element.style.display = "none";
            element.setAttribute("aria-hidden", "true");
          }
        });
      }
    };
    const handleFocusIn = (e) => {
      const target = e.target;
      if (target && target.matches && target.matches("a, button, input, textarea, select, [tabindex]")) {
        target.classList.add("focus-visible");
      }
    };
    const handleFocusOut = (e) => {
      if (e.target && e.target.classList) e.target.classList.remove("focus-visible");
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    skipLink.className = "skip-link sr-only focus:not-sr-only";
    skipLink.style.cssText = `position:absolute;top:-40px;left:6px;background:#000;color:#fff;padding:8px;text-decoration:none;z-index:1000;transition:top .3s;`;
    skipLink.addEventListener("focus", () => {
      skipLink.style.top = "6px";
    });
    skipLink.addEventListener("blur", () => {
      skipLink.style.top = "-40px";
    });
    document.body.insertBefore(skipLink, document.body.firstChild);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
      if (skipLink.parentNode) skipLink.parentNode.removeChild(skipLink);
    };
  }, []);

  return (
    <>
      <div className="accessibility-controls fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4 space-y-2">
        <h3 className="text-sm font-semibold">Accessibility</h3>
        <div className="flex items-center space-x-2">
          <label className="text-xs">Font Size:</label>
          <input
            type="range"
            min="12"
            max="20"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-20"
            aria-label="Font size adjustment"
          />
          <span className="text-xs">{fontSize}px</span>
        </div>
        <label className="flex items-center space-x-2 text-xs">
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            aria-label="High contrast mode"
          />
          <span>High Contrast</span>
        </label>
      </div>
      <style jsx global>{`
        .high-contrast {
          --text-color: #000;
          --bg-color: #fff;
          --border-color: #000;
          --primary-color: #0066cc;
        }
        .high-contrast * {
          color: var(--text-color) !important;
          background-color: var(--bg-color) !important;
          border-color: var(--border-color) !important;
        }
        .reduced-motion * {
          animation-duration: 1ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 1ms !important;
        }
        .focus-visible {
          outline: 2px solid #0066cc;
          outline-offset: 2px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
}