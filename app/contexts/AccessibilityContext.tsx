'use client';
import React, { createContext, useContext } from 'react';
import { AccessibilitySettings, AccessibilityContextType } from '../types/accessibility';

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export { AccessibilityContext };