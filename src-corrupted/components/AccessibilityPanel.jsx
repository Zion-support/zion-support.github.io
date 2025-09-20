<<<<<<< HEAD
=======
import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export const AccessibilityPanel = (props: any) => {
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
            } catch (error) {console.error('Failed to parse accessibility settings:', error);}
        }
    }, []);

    useEffect(() => {// Apply settings to document
        applySettings(settings);
        // Save to localStorage
        localStorage.setItem('accessibility-settings', JSON.stringify(settings));}, [settings]);

    const applySettings = (props: any) => {
        const root = document.documentElement;
        
        // High contrast
        if (newSettings.highContrast) {
            root.style.setProperty('--high-contrast', '1');
            root.classList.add('high-contrast');
        } else {root.style.setProperty('--high-contrast', '0');
            root.classList.remove('high-contrast');}
        
        // Font size
        root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
        
        // Reduced motion
        if (newSettings.reducedMotion) {root.classList.add('reduced-motion');} else {root.style.setProperty('--reduced-motion', 'no-preference');}
        
        // Apply focus indicator
        if (settings.focusIndicator) {root.style.setProperty('--focus-visible', 'auto');} else {root.style.setProperty('--focus-visible', 'none');}
        
        // Color blindness
        root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        if (newSettings.colorBlindness !== 'none') {root.classList.add(newSettings.colorBlindness);}
        
        // Focus indicator
        if (newSettings.focusIndicator) {root.classList.add('focus-visible');} else {root.classList.remove('focus-visible');}
    };

    const updateSetting = (props: any) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const resetSettings = (props: any) => {
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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl z-50"
                >
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                Accessibility
                            </h2>
                            <button
                                onClick={onToggle}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Font Size */}
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

                            {/* High Contrast */}
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.highContrast}
                                        onChange={(e) => updateSetting('highContrast', e.target.checked)}
                                        className="mr-2"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">High Contrast</span>
                                </label>
                            </div>

                            {/* Reduced Motion */}
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.reducedMotion}
                                        onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                                        className="mr-2"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Reduced Motion</span>
                                </label>
                            </div>

                            {/* Focus Indicator */}
                            <div>
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={settings.focusIndicator}
                                        onChange={(e) => updateSetting('focusIndicator', e.target.checked)}
                                        className="mr-2"
                                    />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">Focus Indicators</span>
                                </label>
                            </div>

                            {/* Reset Button */}
                            <button
                                onClick={resetSettings}
                                className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                            >
                                Reset to Default
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
};
export default AccessibilityPanel;