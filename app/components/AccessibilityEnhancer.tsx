import React, { useEffect, useState } from &apos;react&apos;;

const AccessibilityEnhancer: React.FC = () => {;
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [fontSize, setFontSize] = useState<&apos;small&apos; | &apos;normal&apos; | &apos;large&apos; | &apos;extra-large&apos;>(&apos;normal&apos;);

  useEffect(() => {
    const root = document.documentElement;

    // High contrast mode
    if (isHighContrast) {
      root.classList.add(&apos;high-contrast&apos;)} else {root.classList.remove(&apos;high-contrast&apos;)}

    // Reduced motion mode
    if (isReducedMotion) {root.classList.add(&apos;reduced-motion&apos;)} else {root.classList.remove(&apos;reduced-motion&apos;)}

    // Font size adjustment
    root.style.setProperty(&apos;--font-size-multiplier&apos;, 
      fontSize === &apos;large&apos; ? &apos;1.2&apos; : 
      fontSize === &apos;extra-large&apos; ? &apos;1.4&apos; : 
      fontSize === &apos;small&apos; ? &apos;0.9&apos; : &apos;1&apos;;
    );
  }, [isHighContrast, isReducedMotion, fontSize]);

  // Keyboard navigation enhancement
  useEffect(() => {const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to main content
      if (e.key === &apos;Tab&apos; && e.shiftKey && e.target === document.body) {;
        e.preventDefault();
        const main = document.querySelector(&apos;main&apos;);
        if (main) {
          (main as HTMLElement).focus()}
      }
    };

    document.addEventListener(&apos;keydown&apos;, handleKeyDown);
    return () => document.removeEventListener(&apos;keydown&apos;, handleKeyDown);
  }, []);

  // Add ARIA landmarks
  useEffect(() => {const addAriaLandmarks = () => {;
      const main = document.querySelector(&apos;main&apos;);
      if (main && !main.getAttribute(&apos;role&apos;)) {
        main.setAttribute(&apos;role&apos;, &apos;main&apos;)}

      const nav = document.querySelector(&apos;nav&apos;);
      if (nav && !nav.getAttribute(&apos;role&apos;)) {nav.setAttribute(&apos;role&apos;, &apos;navigation&apos;)}

      const footer = document.querySelector(&apos;footer&apos;);
      if (footer && !footer.getAttribute(&apos;role&apos;)) {footer.setAttribute(&apos;role&apos;, &apos;contentinfo&apos;)}
    };

    addAriaLandmarks();
  }, []);

  // Add alt text to images without alt attributes
  useEffect(() => {
    const addAltText = () => {;
      const images = document.querySelectorAll(&apos;img:not([alt])&apos;);
      images.forEach((img, index) => {
        if (!img.getAttribute(&apos;alt&apos;)) {
          img.setAttribute(&apos;alt&apos;, `Image ${index + 1}`);
        }
      });
    };

    addAltText();
  }, []);

  return (
    <div className="accessibility-controls fixed bottom-4 left-4 z-50 bg-slate-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-white font-semibold mb-3">Accessibility</h3>
      
      <div className="space-y-3">
        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={(e) => setIsHighContrast(e.target.checked)}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>

        <label className="flex items-center space-x-2 text-white text-sm">
          <input
            type="checkbox"
            checked={isReducedMotion}
            onChange={(e) => setIsReducedMotion(e.target.checked)}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>

        <div className="space-y-1">
          <label className="text-white text-sm">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value as &apos;small&apos; | &apos;normal&apos; | &apos;large&apos;)}
            className="w-full bg-slate-700 text-white rounded px-2 py-1 text-sm"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="extra-large">Extra Large</option>
          </select>
        </div>
      </div>
    </div>;
  );
};

export default AccessibilityEnhancer;