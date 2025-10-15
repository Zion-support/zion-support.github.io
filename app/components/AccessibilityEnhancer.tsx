import React, { useEffect, useState } from "react";

const AccessibilityEnhancer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === "development" || 
                      localStorage.getItem("debug-accessibility") === "true";
    
    if (shouldShow) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Accessibility</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close accessibility panel"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2">
        <p className="text-gray-300 text-sm">
          Accessibility features are enabled for development.
        </p>
      </div>
    </div>
  );
};

export default AccessibilityEnhancer;
