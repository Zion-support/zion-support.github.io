import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Eye, Type, Volume2, MousePointer } from 'lucide-react';

interface EnhancedAccessibilityProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  enabled?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ 
  position = 'bottom-right',
  enabled = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 'normal',
    contrast: 'normal',
    animations: true,
    sound: false,
    cursor: 'normal'
  });

  if (!enabled) return null;

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-4 mb-2 w-64"
          >
            <h3 className="text-lg font-semibold mb-3">Accessibility Settings</h3>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Font Size</label>
                <select 
                  value={settings.fontSize}
                  onChange={(e) => setSettings({...settings, fontSize: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="small">Small</option>
                  <option value="normal">Normal</option>
                  <option value="large">Large</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Contrast</label>
                <select 
                  value={settings.contrast}
                  onChange={(e) => setSettings({...settings, contrast: e.target.value})}
                  className="w-full p-2 border rounded"
                >
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="animations"
                  checked={settings.animations}
                  onChange={(e) => setSettings({...settings, animations: e.target.checked})}
                />
                <label htmlFor="animations" className="text-sm">Reduce Animations</label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="sound"
                  checked={settings.sound}
                  onChange={(e) => setSettings({...settings, sound: e.target.checked})}
                />
                <label htmlFor="sound" className="text-sm">Sound Effects</label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Accessibility Settings"
      >
        <Settings className="w-5 h-5" />
      </button>
    </div>
  );
};

export default EnhancedAccessibility;