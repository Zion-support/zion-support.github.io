<<<<<<< HEAD
'use client';
import React from 'react';

const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default EnhancedAccessibility;
=======

interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}


const EnhancedAccessibility: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    }
  }, [])


>>>>>>> origin/main
