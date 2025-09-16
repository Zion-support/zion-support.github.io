<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from 'react';

export const AccessibilityPanel = ({ isOpen, onToggle }) => {
    const [settings, setSettings] = useState({
        highContrast: false,
        fontSize: 100,
        colorBlindness: 'none',
        reducedMotion: false,
        screenReader: false,
        keyboardNavigation: false,
        focusIndicator: true,
        colorBlindness: 'none'
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
            }
            catch (error) {
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
        }
        else {
            root.style.setProperty('--high-contrast', '0');
            root.classList.remove('high-contrast');
        }
        // Font size
        root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
        // Reduced motion
        if (newSettings.reducedMotion) {
            root.classList.add('reduced-motion');
        }
        else {
            root.style.setProperty('--reduced-motion', 'no-preference');
        }
        // Apply focus indicator
        if (settings.focusIndicator) {
            root.style.setProperty('--focus-visible', 'auto');
        }
        else {
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
        }
        else {
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
    const tabs = [
        { id: 'general', label: 'General', icon: '⚙️' },
        { id: 'visual', label: 'Visual', icon: '👁️' },
        { id: 'audio', label: 'Audio', icon: '🔊' },
        { id: 'navigation', label: 'Navigation', icon: '⌨️' }
    ];
    const getScoreColor = (score) => {
        if (score >= 90)
            return 'text-green-400';
        if (score >= 70)
            return 'text-yellow-400';
        return 'text-red-400';
    };
    const getScoreLabel = (score) => {
        if (score >= 90)
            return 'Excellent';
        if (score >= 70)
            return 'Good';
        if (score >= 50)
            return 'Needs Improvement';
        return 'Poor';
    };
    if (!isVisible)
        return null;
    return (<>
      {/* Toggle Button */}
      <button onClick={onToggle} className="fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300" aria-label="Toggle accessibility panel" title="Accessibility Settings">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
        </svg>
      </button>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AccessibilityPanel: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AccessibilityPanel</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AccessibilityPanel;