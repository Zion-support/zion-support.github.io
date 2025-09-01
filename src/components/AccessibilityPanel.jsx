import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AccessibilityPanel = ({ isOpen, onToggle }) => {
    const [settings, setSettings] = useState({
        highContrast: false,
        fontSize: 100,
        colorBlindness: 'none',
        reducedMotion: false,
        screenReader: false,
        keyboardNavigation: false,
        focusIndicator: true
    });
    
    const [accessibilityScore, setAccessibilityScore] = useState(85);
    const [activeTab, setActiveTab] = useState('general');

    useEffect(() => {
        // Load saved settings from localStorage
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {
            try {
                const parsed = JSON.parse(savedSettings);
                setSettings(prev => ({ ...prev, ...parsed }));
            } catch (error) {
                console.error('Failed to parse accessibility settings:', error);
            }
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
        
        // High contrast
        if (newSettings.highContrast) {
            root.style.setProperty('--high-contrast', '1');
            root.classList.add('high-contrast');
        } else {
            root.style.setProperty('--high-contrast', '0');
            root.classList.remove('high-contrast');
        }
        
        // Font size
        root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
        
        // Reduced motion
        if (newSettings.reducedMotion) {
            root.classList.add('reduced-motion');
        } else {
            root.style.setProperty('--reduced-motion', 'no-preference');
        }
        
        // Apply focus indicator
        if (settings.focusIndicator) {
            root.style.setProperty('--focus-visible', 'auto');
        } else {
            root.style.setProperty('--focus-visible', 'none');
        }
        
        // Color blindness
        root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        if (newSettings.colorBlindness !== 'none') {
            root.classList.add(newSettings.colorBlindness);
        }
        
        // Focus indicator
        if (newSettings.focusIndicator) {
            root.classList.add('focus-visible');
        } else {
            root.classList.remove('focus-visible');
        }
    };

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const resetSettings = () => {
        const defaultSettings = {
            highContrast: false,
            fontSize: 100,
            reducedMotion: false,
            screenReader: false,
            keyboardNavigation: false,
            focusIndicator: true,
            colorBlindness: 'none'
        };
        setSettings(defaultSettings);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto"
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Accessibility Settings
                        </h2>
                        <button
                            onClick={onToggle}
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-4">
                        {/* High Contrast Toggle */}
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                High Contrast
                            </label>
                            <input
                                type="checkbox"
                                checked={settings.highContrast}
                                onChange={(e) => updateSetting('highContrast', e.target.checked)}
                                className="rounded"
                            />
                        </div>

                        {/* Font Size Control */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Font Size: {settings.fontSize}%
                            </label>
                            <input
                                type="range"
                                min="80"
                                max="200"
                                value={settings.fontSize}
                                onChange={(e) => updateSetting('fontSize', parseInt(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Reduced Motion Toggle */}
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Reduced Motion
                            </label>
                            <input
                                type="checkbox"
                                checked={settings.reducedMotion}
                                onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                                className="rounded"
                            />
                        </div>

                        {/* Focus Indicator Toggle */}
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Focus Indicators
                            </label>
                            <input
                                type="checkbox"
                                checked={settings.focusIndicator}
                                onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                                className="rounded"
                            />
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={resetSettings}
                            className="w-full mt-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
                        >
                            Reset to Defaults
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
