import React, { useEffect, useState } from "react";

const EnhancedAccessibility: React.FC = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Load saved preferences
    const savedContrast = localStorage.getItem("highContrast");
    const savedFontSize = localStorage.getItem("fontSize");
    
    if (savedContrast === "true") {
      setIsHighContrast(true);
    }
    if (savedFontSize) {
      setFontSize(parseInt(savedFontSize));
    }
  }, []);

  useEffect(() => {
    // Apply high contrast mode
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const toggleHighContrast = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    localStorage.setItem("highContrast", newContrast.toString());
  };

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    localStorage.setItem("fontSize", newSize.toString());
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    localStorage.setItem("fontSize", newSize.toString());
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-slate-800 text-white p-3 rounded-lg shadow-lg">
        <h3 className="text-sm font-semibold mb-2">Accessibility</h3>
        <div className="space-y-2">
          <button
            onClick={toggleHighContrast}
            className="block w-full text-left px-2 py-1 text-xs hover:bg-slate-700 rounded"
          >
            {isHighContrast ? "Disable" : "Enable"} High Contrast
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={decreaseFontSize}
              className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
            >
              A-
            </button>
            <span className="text-xs">{fontSize}px</span>
            <button
              onClick={increaseFontSize}
              className="px-2 py-1 text-xs bg-slate-700 hover:bg-slate-600 rounded"
            >
              A+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedAccessibility;
