import React, { useState, useEffect, useCallback } from 'react';'''
import { motion, AnimatePresence } from 'framer-motion';'''
import { Eye, Volume2, VolumeX, Type, Contrast, ZoomIn, ZoomOut, Settings, Accessibility, X } from 'lucide-react';
import { Button } from "./button";""""
export function AccessibilityPanel({ enabled = true, className = "", onSettingsChange }) {}
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({}
        highContrast: false,
        largeText: false,
        reducedMotion: false,'
        screenReader: false,''
        fontSize: 16,'''
        colorBlindMode: 'normal'
    });
    // Apply accessibility settings to document;
    useEffect(() => {}
        if (!enabled)
            return;
        const root = document.documentElement;
        // High contrast;
        if (settings.highContrast) {}
'
''
'''
            root.classList.add('high-contrast')}
        else {}
'
''
'''
            root.classList.remove('high-contrast')}
        // Large text;
        if (settings.largeText) {}
'
''
'''
            root.style.fontSize = '18px'}
        else {}
'
''
'''
            root.style.fontSize = '16px'}
        // Reduced motion;
        if (settings.reducedMotion) {}
'
''
'''
            root.style.setProperty('--reduced-motion',reduce')}
        else {}
'
''
'''
            root.style.setProperty('--reduced-motion',no-preference')}'''
        // Font size''''
        root.style.setProperty('--font-size', `${settings.fontSize}px`);'''
        // Color blind mode''''
        root.setAttribute('data-color-blind', settings.colorBlindMode);
        // Notify parent component;
        onSettingsChange?.(settings)}, [settings, enabled, onSettingsChange]);
    // Load saved settings from localStorage;
    useEffect(() => {}
'
''
'''
        const saved = localStorage.getItem('accessibility-settings');
        if (saved) {}
            try {}
                const parsed = JSON.parse(saved);
                setSettings(prev => ({ ...prev, ...parsed }))}
            catch {}
                // Silently handle parsing errors;
    }, []);
    // Save settings to localStorage;
    const saveSettings = useCallback((newSettings) => {}
        setSettings(newSettings);'
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))}, []);
    // Toggle settings;
    const toggleSetting = useCallback((key, value) => {}
        const newSettings = {}
'"`
'"`'"`
