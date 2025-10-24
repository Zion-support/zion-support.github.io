'use client';
import React, { createContext } from 'react';
import { AccessibilitySettings, AccessibilityContextType } from '../types/accessibility';

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export { AccessibilityContext };