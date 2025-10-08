import React, { useEffect } from "react";

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        "/fonts/inter-var.woff2",
        "/images/hero-bg.webp",
        "/images/logo.svg",
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.href = resource;
        link.as = resource.endsWith(".woff2") ? "font" : "image";
        if (resource.endsWith(".woff2")) {
          link.crossOrigin = "anonymous";
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Defer non-critical JavaScript
    const deferNonCriticalJS = () => {
      const scripts = document.querySelectorAll("script[data-defer]");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.src = script.getAttribute("src") || "";
        newScript.async = true;
        script.parentNode?.replaceChild(newScript, script);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalJS();

    // Performance monitoring
    if ("performance" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === "largest-contentful-paint") {
          }
          if (entry.entryType === "first-input") {
          }
        });
      });

      try {
        observer.observe({
          entryTypes: ["largest-contentful-paint", "first-input"],
        });
      } catch (e) {}
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
