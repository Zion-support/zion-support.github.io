'use client';
import { useContext } from 'react';
import { AccessibilityContext } from '../contexts/AccessibilityContext';
import { AccessibilityContextType } from '../types/accessibility';

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
