'use client';
import React, { useEffect } from 'react'
interface AccessibilityEnhancerProps {
  children: React.ReactNode
  enableKeyboardNavigation?: boolean
  enableScreenReaderSupport?: boolean
  enableHighContrast?: boolean
  enableFocusManagement?: boolean
}
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({
  children,
  enableKeyboardNavigation;

export default AccessibilityEnhancer