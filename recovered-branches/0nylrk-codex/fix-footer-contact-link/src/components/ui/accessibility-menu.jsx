<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, FileText, Eye, Zap, Volume2, VolumeX } from 'lucide-react';
import { Button } from './button';
export function AccessibilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 'medium',
        highContrast: false,
        reducedMotion: false,
        soundEnabled: true
    });
    useEffect(() => {
        // Load settings from localStorage
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings));
        }
    }, []);
    useEffect(() => {
        // Apply settings to document
        applySettings(settings);
        // Save to localStorage
        localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    }, [settings]);
    const applySettings = (newSettings) => {
        const root = document.documentElement;
        // Font size
        root.style.setProperty('--font-size-multiplier', newSettings.fontSize === 'small' ? '0.875' :
            newSettings.fontSize === 'large' ? '1.125' : '1');
        // High contrast
        if (newSettings.highContrast) {
            root.classList.add('high-contrast');
        }
        else {
            root.classList.remove('high-contrast');
        }
        // Reduced motion
        if (newSettings.reducedMotion) {
            root.classList.add('reduced-motion');
        }
        else {
            root.classList.remove('reduced-motion');
        }
    };
    const toggleSetting = (key) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };
    const updateFontSize = (size) => {
        setSettings(prev => ({ ...prev, fontSize: size }));
    };
    const resetSettings = () => {
        const defaultSettings = {
            fontSize: 'medium',
            highContrast: false,
            reducedMotion: false,
            soundEnabled: true
        };
        setSettings(defaultSettings);
    };
    return (<>
      {/* Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-zion-purple to-zion-cyan text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Accessibility settings" aria-expanded={isOpen}>
        <Settings className="h-5 w-5"/>
      </motion.button>
=======

const accessibility-menu: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">accessibility-menu</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

export default accessibility-menu;
