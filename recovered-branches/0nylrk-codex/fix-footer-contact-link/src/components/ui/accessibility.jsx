<<<<<<< HEAD

export default accessibility;
=======
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut, Settings, Accessibility, X } from 'lucide-react';
import { Button } from './button';
export function AccessibilityPanel({ enabled = true, className = "", onSettingsChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        screenReader: false,
        fontSize: 16,
        colorBlindMode: 'normal'
    });
    // Apply accessibility settings to document
    useEffect(() => {
        if (!enabled)
            return;
        const root = document.documentElement;
        // High contrast
        if (settings.highContrast) {
            root.classList.add('high-contrast');
        }
        else {
            root.classList.remove('high-contrast');
        }
        // Large text
        if (settings.largeText) {
            root.style.fontSize = '18px';
        }
        else {
            root.style.fontSize = '16px';
        }
        // Reduced motion
        if (settings.reducedMotion) {
            root.style.setProperty('--reduced-motion', 'reduce');
        }
        else {
            root.style.setProperty('--reduced-motion', 'no-preference');
        }
        // Font size
        root.style.setProperty('--font-size', `${settings.fontSize}px`);
        // Color blind mode
        root.setAttribute('data-color-blind', settings.colorBlindMode);
        // Notify parent component
        onSettingsChange?.(settings);
    }, [settings, enabled, onSettingsChange]);
    // Load saved settings from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('accessibility-settings');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setSettings(prev => ({ ...prev, ...parsed }));
            }
            catch {
                // Silently handle parsing errors
            }
        }
    }, []);
    // Save settings to localStorage
    const saveSettings = useCallback((newSettings) => {
        setSettings(newSettings);
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    }, []);
    // Toggle settings
    const toggleSetting = useCallback((key, value) => {
        const newSettings = {
            ...settings,
            [key]: value !== undefined ? value : !settings[key]
        };
        saveSettings(newSettings);
    }, [settings, saveSettings]);
    // Reset to defaults
    const resetSettings = useCallback(() => {
        const defaults = {
            highContrast: false,
            largeText: false,
            reducedMotion: false,
            screenReader: false,
            fontSize: 16,
            colorBlindMode: 'normal'
        };
        saveSettings(defaults);
    }, [saveSettings]);
    // Font size controls
    const increaseFontSize = useCallback(() => {
        toggleSetting('fontSize', Math.min(settings.fontSize + 2, 24));
    }, [settings.fontSize, toggleSetting]);
    const decreaseFontSize = useCallback(() => {
        toggleSetting('fontSize', Math.max(settings.fontSize - 2, 12));
    }, [settings.fontSize, toggleSetting]);
    // Screen reader announcement
    const announceToScreenReader = useCallback((message) => {
        if (settings.screenReader) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        }
    }, [settings.screenReader]);
    if (!enabled)
        return null;
    return (<>
      {/* Accessibility Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className={`fixed top-4 right-4 z-50 p-3 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-full shadow-lg transition-all duration-300 ${className}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Accessibility settings">
        <Accessibility className="w-6 h-6"/>
      </motion.button>

export default accessibility;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
