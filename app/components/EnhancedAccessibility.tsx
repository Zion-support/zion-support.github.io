import React, { useState, useEffect } from "react";

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: "small" | "normal" | "large" | "extra-large";
  reducedMotion: boolean;
  screenReader: boolean;
}

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: "normal",
    reducedMotion: false,
    screenReader: false
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enhanced accessibility features
    const addSkipLinks = () => {
      const skipLink = document.createElement("a");
      skipLink.href = "#main-content";
      skipLink.textContent = "Skip to main content";
      skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50";
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #8b5cf6;
        color: white;
        padding: 8px;
        border-radius: 4px;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener("focus", () => {
        skipLink.style.top = "6px";
      });
      
      skipLink.addEventListener("blur", () => {
        skipLink.style.top = "-40px";
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Apply accessibility settings
    const applySettings = () => {
      const root = document.documentElement;
      
      // High contrast mode
      if (settings.highContrast) {
        root.classList.add("high-contrast");
      } else {
        root.classList.remove("high-contrast");
      }

      // Reduced motion mode
      if (settings.reducedMotion) {
        root.classList.add("reduced-motion");
      } else {
        root.classList.remove("reduced-motion");
      }

      // Font size adjustment
      root.style.setProperty("--font-size-multiplier",
        settings.fontSize === "large" ? "1.2" :
        settings.fontSize === "extra-large" ? "1.4" :
        settings.fontSize === "small" ? "0.9" : "1"
      );
    };

    // Initialize
    addSkipLinks();
    applySettings();

    // Re-apply settings when they change
    applySettings();
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const updateFontSize = (size: AccessibilitySettings["fontSize"]) => {
    setSettings(prev => ({
      ...prev,
      fontSize: size
    }));
  };

  return (
    <>
      {children}
      
      {/* Accessibility Controls */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors"
          aria-label="Toggle accessibility settings"
        >
          ♿
        </button>
        
        {isVisible && (
          <div className="absolute bottom-16 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-80">
            <h3 className="font-bold text-gray-900 mb-4">Accessibility Settings</h3>
            
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={() => toggleSetting("highContrast")}
                  className="mr-2"
                />
                High Contrast Mode
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={() => toggleSetting("reducedMotion")}
                  className="mr-2"
                />
                Reduce Motion
              </label>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Font Size
                </label>
                <select
                  value={settings.fontSize}
                  onChange={(e) => updateFontSize(e.target.value as AccessibilitySettings["fontSize"])}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option value="small">Small</option>
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EnhancedAccessibility;