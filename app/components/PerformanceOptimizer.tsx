import React, { useEffect } from "react";

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement("link");
      fontLink.rel = "preload";
      fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
      fontLink.as = "style";
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        "/images/hero-bg.jpg",
        "/images/logo.png"
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      // Throttled scroll handling
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize logic here
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;
