}
}
import _React,{ useState,useEffect,createContext,useContext } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X import { Button } from '../ui/button'; const AccessibilityContext = createContext(undefined)export const useAccessibility = () => {const context = useContext(AccessibilityContext)if(!context) {throw new Error('useAccessibility must be used within an AccessibilityProvider')return context}import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X } from 'lucide-react'; import { Button } from "../ui/button"; const AccessibilityContext = createContext(null)export const useAccessibility = () => {const context = useContext(AccessibilityContext)if(!context) {throw new Error('useAccessibility must be used within an AccessibilityProvider')}return context}}}
import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Accessibility</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
}
}
}
import _React,{ useState,useEffect,createContext,useContext } from 'react'; import { motion,AnimatePresence } from 'framer-motion'; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X import { Button } from '../ui/button'; const AccessibilityContext = createContext(undefined); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider'); return context}; import { Eye,EyeOff,Volume2,VolumeX,Keyboard,Accessibility,X } from 'lucide-react'; import { Button } from "../ui/button"; const AccessibilityContext = createContext(null); export const useAccessibility = () => {; const context = useContext(AccessibilityContext); if(!context) {; throw new Error('useAccessibility must be used within an AccessibilityProvider')}; return context}}}
