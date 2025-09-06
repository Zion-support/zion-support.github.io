<<<<<<< HEAD
import _React,{ useState,useEffect,createContext,useContext } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X import { Button } from '../ui/button'; const AccessibilityContext = createContext(undefined); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider'); return context}; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X } from 'lucide-react'; import { Button } from "../ui/button"; const AccessibilityContext = createContext(null); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider')}; return context}}}
import _React,{ useState,useEffect,createContext,useContext } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X import { Button } from '../ui/button'; const AccessibilityContext = createContext(undefined); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider'); return context}; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X } from 'lucide-react'; import { Button } from "../ui/button"; const AccessibilityContext = createContext(null); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider')}; return context}}}
=======
import React from 'react';

const Accessibility = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Accessibility</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Accessibility;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
