import React from 'react';
'use client';
import {_createContext} from 'react';
import {_AccessibilityContextType} from '../types/accessibility';

const AccessibilityContext = createContext<AccessibilityContextType | null>(null);

export { AccessibilityContext };