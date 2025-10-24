'use client';
import { createContext, useContext } from 'react';
import { AccessibilityContextType } from '../types/accessibility';

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export { AccessibilityContext };