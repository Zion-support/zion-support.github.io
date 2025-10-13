'use client';'import React, { useEffect, useState } from 'react';'
interface AccessibilitySettings {
  
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {;
const [settings, setSettings] = useState<AccessibilitySettings>({
  
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  });
const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  useEffect(() => {
  
  
  
    // Apply accessibility settings
    if (settings.highContrast) {
  
      document.documentElement.classList.add('high-contrast');''    } else {
  
      document.documentElement.classList.remove('high-contrast');''    }

    document.documentElement.style.fontSize = `${settings.fontSize}px`;

    if (settings.reducedMotion) {
  
      document.documentElement.classList.add('reduce-motion');''    } else {
  
      document.documentElement.classList.remove('reduce-motion');''    }
  }, [])

  return <>{children}</>;
}
export default EnhancedAccessibility;

}