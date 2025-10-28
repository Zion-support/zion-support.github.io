'use client';

import React, { memo } from 'react';

interface AccessibilityControlsProps {
  isHighContrast: boolean;
  fontSize: string;
  reducedMotion: boolean;
  onHighContrastToggle: () => void;
  onFontSizeChange: (size: string) => void;
  onReducedMotionToggle: () => void;
}

const AccessibilityControls: React.FC<AccessibilityControlsProps> = memo(({
  isHighContrast,
  fontSize,
  reducedMotion,
  onHighContrastToggle,
  onFontSizeChange,
  onReducedMotionToggle
}) => {
  return (
    <div className="accessibility-controls fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-semibold mb-4">Accessibility Controls</h3>
      
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isHighContrast}
            onChange={onHighContrastToggle}
            className="rounded"
          />
          <span>High Contrast</span>
        </label>
        
        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <select
            value={fontSize}
            onChange={(e) => onFontSizeChange(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="small">Small</option>
            <option value="normal">Normal</option>
            <option value="large">Large</option>
            <option value="xl">Extra Large</option>
          </select>
        </div>
        
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={onReducedMotionToggle}
            className="rounded"
          />
          <span>Reduce Motion</span>
        </label>
      </div>
    </div>
  );
});

AccessibilityControls.displayName = 'AccessibilityControls';

export default AccessibilityControls;