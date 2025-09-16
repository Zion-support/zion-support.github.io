<<<<<<< HEAD
import React from 'react';
=======
'use client';
import React, { useState, useCallback, useEffect } from 'react';

import { Eye, Type, Volume2, Settings, X, Check, AlertTriangle, Info } from 'lucide-react';
const AccessibilityPanel = ({ enabled = true, defaultSettings = {}, onSettingsChange, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        largeText: false,
        fontSize: 16,
        colorBlindMode: 'none',
        reducedMotion: false,
        screenReader: false,
        focusIndicator: true,
        keyboardNavigation: true,
        ...defaultSettings
    });
    const [notifications, setNotifications] = useState([]);
    // Apply accessibility settings to the document
    useEffect(() => {
        if (!enabled)
            return;
        const root = document.documentElement;
        // High contrast mode
        if (settings.highContrast) {
            root.style.setProperty('--high-contrast', 'true');
            root.classList.add('high-contrast');
        }
        else {
            root.style.removeProperty('--high-contrast');
            root.classList.remove('high-contrast');
        }
        // Large text mode
        if (settings.largeText) {
            root.style.setProperty('--large-text', 'true');
            root.classList.add('large-text');
        }
        else {
            root.style.removeProperty('--large-text');
            root.classList.remove('large-text');
        }
        // Font size
        root.style.setProperty('--font-size', `${settings.fontSize}px`);
        // Color blind modes
        root.style.setProperty('--color-blind-mode', settings.colorBlindMode);
        // Reduced motion
        if (settings.reducedMotion) {
            root.style.setProperty('--reduced-motion', 'true');
            root.classList.add('reduced-motion');
        }
        else {
            root.style.removeProperty('--reduced-motion');
            root.classList.remove('reduced-motion');
        }
        // Focus indicator
        if (settings.focusIndicator) {
            root.style.setProperty('--focus-indicator', 'true');
            root.classList.add('focus-indicator');
        }
        else {
            root.style.removeProperty('--focus-indicator');
            root.classList.remove('focus-indicator');
        }
        // Keyboard navigation
        if (settings.keyboardNavigation) {
            root.style.setProperty('--keyboard-navigation', 'true');
            root.classList.add('keyboard-navigation');
        }
        else {
            root.style.removeProperty('--keyboard-navigation');
            root.classList.remove('keyboard-navigation');
        }
        // Notify parent component
        onSettingsChange?.(settings);
    }, [settings, enabled, onSettingsChange]);
    // Screen reader announcements
    useEffect(() => {
        if (!enabled || !settings.screenReader)
            return;
        const announce = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);
            setTimeout(() => {
                document.body.removeChild(announcement);
            }, 1000);
        };
        // Announce important changes
        if (settings.highContrast) {
            announce('High contrast mode enabled');
        }
        if (settings.largeText) {
            announce('Large text mode enabled');
        }
        if (settings.reducedMotion) {
            announce('Reduced motion enabled');
        }
    }, [settings.highContrast, settings.largeText, settings.reducedMotion, enabled, settings.screenReader]);
    const updateSetting = useCallback((key, value) => {
        setSettings(prev => {
            const newSettings = { ...prev, [key]: value };
            // Add notification
            const notification = {
                id: Date.now().toString(),
                message: `${key.replace(/([A-Z])/g, ' $1').toLowerCase()} ${value ? 'enabled' : 'disabled'}`,
                type: 'success',
                timestamp: Date.now()
            };
            setNotifications(prev => [notification, ...prev.slice(0, 2)]);
            return newSettings;
        });
    }, []);
    const resetToDefaults = useCallback(() => {
        const defaultSettings = {
            highContrast: false,
            largeText: false,
            fontSize: 16,
            colorBlindMode: 'none',
            reducedMotion: false,
            screenReader: false,
            focusIndicator: true,
            keyboardNavigation: true
        };
        setSettings(defaultSettings);
        const notification = {
            id: Date.now().toString(),
            message: 'Accessibility settings reset to defaults',
            type: 'info',
            timestamp: Date.now()
        };
        setNotifications(prev => [notification, ...prev.slice(0, 2)]);
    }, []);
    const increaseFontSize = useCallback(() => {
        updateSetting('fontSize', Math.min(settings.fontSize + 2, 24));
    }, [settings.fontSize, updateSetting]);
    const decreaseFontSize = useCallback(() => {
        updateSetting('fontSize', Math.max(settings.fontSize - 2, 12));
    }, [settings.fontSize, updateSetting]);
    // Keyboard shortcuts
    useEffect(() => {
        if (!enabled)
            return;
        const handleKeyDown = (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch (e.key) {
                    case 'h':
                        e.preventDefault();
                        updateSetting('highContrast', !settings.highContrast);
                        break;
                    case 'l':
                        e.preventDefault();
                        updateSetting('largeText', !settings.largeText);
                        break;
                    case 'r':
                        e.preventDefault();
                        updateSetting('reducedMotion', !settings.reducedMotion);
                        break;
                    case 'a':
                        e.preventDefault();
                        setIsOpen(!isOpen);
                        break;
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [enabled, settings.highContrast, settings.largeText, settings.reducedMotion, isOpen, updateSetting]);
    if (!enabled)
        return null;
    return (<>
      {/* Accessibility Toggle Button */}
      <motion.button onClick={() => setIsOpen(!isOpen)} className={`fixed bottom-6 right-6 z-50 p-4 bg-zion-blue-dark border-2 border-zion-cyan/50 rounded-full shadow-2xl hover:bg-zion-blue hover:border-zion-cyan transition-all duration-200 ${className}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Accessibility settings" aria-expanded={isOpen}>
        <Settings className="w-6 h-6 text-white"/>
      </motion.button>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const accessibility-panel: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">accessibility-panel</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default accessibility-panel;