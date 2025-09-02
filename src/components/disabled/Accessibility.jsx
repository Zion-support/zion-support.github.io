import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility as AccessibilityIcon, X } from 'lucide-react';

const AccessibilityContext = createContext(null);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
    document.documentElement.classList.toggle('reduced-motion', reducedMotion);
    document.documentElement.classList.toggle('large-text', largeText);
  }, [highContrast, reducedMotion, largeText]);

  return (
    <AccessibilityContext.Provider value={{ highContrast, setHighContrast, reducedMotion, setReducedMotion, largeText, setLargeText }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const AccessibilityWidget = () => {
  const { highContrast, setHighContrast, reducedMotion, setReducedMotion, largeText, setLargeText } = useAccessibility();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={() => setOpen(!open)} className="p-3 rounded-full bg-blue-600 text-white shadow-lg">
        <AccessibilityIcon size={20} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-2 w-72 bg-white rounded-lg shadow-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span>High contrast</span>
              <button onClick={() => setHighContrast(!highContrast)} className="px-2 py-1 border rounded">{highContrast ? 'On' : 'Off'}</button>
            </div>
            <div className="flex items-center justify-between">
              <span>Reduce motion</span>
              <button onClick={() => setReducedMotion(!reducedMotion)} className="px-2 py-1 border rounded">{reducedMotion ? 'On' : 'Off'}</button>
            </div>
            <div className="flex items-center justify-between">
              <span>Large text</span>
              <button onClick={() => setLargeText(!largeText)} className="px-2 py-1 border rounded">{largeText ? 'On' : 'Off'}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};