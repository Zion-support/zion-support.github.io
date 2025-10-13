<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
'use client;

import React, { useEffect, useState } from 'react;

import { Eye, EyeOff, Volume2, VolumeX, Type, Contrast } from lucide-react;

interface AccessibilitySettings {}
  highContrast: boolean;

  largeText: boolean;

  reducedMotion: boolean;

  screenReader: boolean;

  focusVisible: boolean;
>>>>>>> origin/cursor/ad-creation-and-management-f267

interface EnhancedAccessibilityProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedAccessibility({ className = '', children }: EnhancedAccessibilityProps) {
  return (
    <div className={`enhanced-accessibility ${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======

=======
import React from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({ children }) => {
=======
'use client';
import React, { useEffect } from 'react';

interface EnhancedAccessibilityProps {
  children: React.ReactNode;
  enableReducedMotion?: boolean;
  enableHighContrast?: boolean;
  enableFocusManagement?: boolean;
}

const EnhancedAccessibility: React.FC<EnhancedAccessibilityProps> = ({
  children,
  enableReducedMotion = true,
  enableHighContrast = false,
  enableFocusManagement = true
}) => {
  useEffect(() => {
    if (enableReducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    return () => {
      document.documentElement.classList.remove('reduce-motion', 'high-contrast');
    };
  }, [enableReducedMotion, enableHighContrast]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
  return <>{children}</>;
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

export default EnhancedAccessibility;
<<<<<<< HEAD
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
