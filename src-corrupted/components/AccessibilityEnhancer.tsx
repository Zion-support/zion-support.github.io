import { AnimatePresence, motion } from 'framer-motion';
import {
    Accessibility,
    Contrast,
    Eye,
    Keyboard,
    Minus,
    MousePointer,
    Plus,
    Settings,
    Volume2,
    X
} from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  focusIndicator: boolean;
}

interface AccessibilityEnhancerProps {
  className?: string;
  showPanel?: boolean;
  onSettingsChange?: (settings: AccessibilitySettings) => void;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 16,
  highContrast: false,
  reducedMotion: false,
  screenReader: false,
  keyboardNavigation: false,
  focusIndicator: true
};

export const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  className = '',
  showPanel = false,
  onSettingsChange
}) => {
  const [isOpen, setIsOpen] = useState(showPanel);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  const [activeTab, setActiveTab] = useState<'general' | 'visual' | 'navigation'>('general');

  useEffect(() => {
    const savedSettings = localStorage.getItem('zion-accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...DEFAULT_SETTINGS, ...parsed });
        applySettings({ ...DEFAULT_SETTINGS, ...parsed });
      } catch (error) {
        console.warn('Failed to parse accessibility settings:', error);
      }
    }
  }, []);

  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--zion-font-size-base', `${newSettings.fontSize}px`);
    root.style.setProperty('--zion-font-size-sm', `${newSettings.fontSize * 0.875}px`);
    root.style.setProperty('--zion-font-size-lg', `${newSettings.fontSize * 1.125}px`);
    root.style.setProperty('--zion-font-size-xl', `${newSettings.fontSize * 1.25}px`);
    
    // Apply high contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast');
      root.style.setProperty('--zion-bg-primary', '#000000');
      root.style.setProperty('--zion-bg-secondary', '#1a1a1a');
      root.style.setProperty('--zion-text-primary', '#ffffff');
      root.style.setProperty('--zion-text-secondary', '#e5e5e5');
      root.style.setProperty('--zion-border-color', '#ffffff');
    } else {
      root.classList.remove('high-contrast');
      root.style.removeProperty('--zion-bg-primary');
      root.style.removeProperty('--zion-bg-secondary');
      root.style.removeProperty('--zion-text-primary');
      root.style.removeProperty('--zion-text-secondary');
      root.style.removeProperty('--zion-border-color');
    }
    
    // Apply reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply focus indicator
    if (newSettings.focusIndicator) {
      root.classList.add('focus-visible');
    } else {
      root.classList.remove('focus-visible');
    }
    
    // Apply keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  }, []);

  const updateSetting = useCallback((key: keyof AccessibilitySettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('zion-accessibility-settings', JSON.stringify(newSettings));
    onSettingsChange?.(newSettings);
  }, [settings, applySettings, onSettingsChange]);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    localStorage.removeItem('zion-accessibility-settings');
    onSettingsChange?.(DEFAULT_SETTINGS);
  }, [applySettings, onSettingsChange]);

  const increaseFontSize = useCallback(() => {
    const newSize = Math.min(settings.fontSize + 2, 24);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  const decreaseFontSize = useCallback(() => {
    const newSize = Math.max(settings.fontSize - 2, 12);
    updateSetting('fontSize', newSize);
  }, [settings.fontSize, updateSetting]);

  const toggleHighContrast = useCallback(() => {
    updateSetting('highContrast', !settings.highContrast);
  }, [settings.highContrast, updateSetting]);

  const toggleReducedMotion = useCallback(() => {
    updateSetting('reducedMotion', !settings.reducedMotion);
  }, [settings.reducedMotion, updateSetting]);

  const toggleScreenReader = useCallback(() => {
    updateSetting('screenReader', !settings.screenReader);
  }, [settings.screenReader, updateSetting]);

  const toggleKeyboardNavigation = useCallback(() => {
    updateSetting('keyboardNavigation', !settings.keyboardNavigation);
  }, [settings.keyboardNavigation, updateSetting]);

  const toggleFocusIndicator = useCallback(() => {
    updateSetting('focusIndicator', !settings.focusIndicator);
  }, [settings.focusIndicator, updateSetting]);

  const tabs = [
    { id: 'general', label: 'General', icon: Settings },
    { id: 'visual', label: 'Visual', icon: Eye },
    { id: 'navigation', label: 'Navigation', icon: Keyboard }
  ] as const;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AccessibilityEnhancer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AccessibilityEnhancer;
