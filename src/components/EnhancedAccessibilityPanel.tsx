import React, { useState, useEffect } from 'react';

const EnhancedAccessibilityPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Apply accessibility settings
    document.documentElement.style.fontSize = `${fontSize}px`;
    document.body.classList.toggle('high-contrast', highContrast);
  }, [fontSize, highContrast]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Open accessibility panel"
      >
        ♿
      </button>
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold mb-3">Accessibility Options</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Font Size</label>
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-xs text-gray-500">{fontSize}px</span>
            </div>
            
            <div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={highContrast}
                  onChange={(e) => setHighContrast(e.target.checked)}
                  className="mr-2"
                />
                High Contrast
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAccessibilityPanel;