'use client';
<<<<<<< HEAD
import React from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAccessibility;
=======
import React, { useState, useEffect } from 'react';

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: 16,
    reducedMotion: false
  });

  useEffect(() => {
    // Apply accessibility settings
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    document.documentElement.style.fontSize = `${settings.fontSize}px`;

    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [settings]);

  return (
    <div className="accessibility-enhanced">
      {children}
    </div>
  );
};

export default EnhancedAccessibility;
>>>>>>> cursor/delete-records-30ea
