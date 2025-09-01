import React, { useState, useEffect, createContext, useContext } from 'react';'
import { motion, AnimatePresence } from 'framer-motion';'
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X } from 'lucide-react';
import { Button } from "../ui/button";
const AccessibilityContext = createContext(null);
export const useAccessibility = () => {
"
import { Button } from "../ui / button";'
import { motion, AnimatePresence } from 'framer - motion';


const AccessibilityContext = createContext (null) ;
    const context = useContext (AccessibilityContext) ;
    if (!context) {
'
        throw new Error('useAccessibility must be used within an AccessibilityProvider')}
    return context};
// Accessibility Provider Component
export const AccessibilityProvider = ({ children }) => {

    const [highContrast, setHighContrast] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);'
    const [fontSize, setFontSize] = useState('medium');'
    const [colorBlindMode, setColorBlindMode] = useState('none');
    // Load settings from localStorage
    useEffect(() => {
'
        const savedSettings = localStorage.getItem('zion-accessibility-settings');
        if (savedSettings) {

            const settings = JSON.parse(savedSettings);
            setHighContrast(settings.highContrast || false);
            setReducedMotion(settings.reducedMotion || false);'
            setFontSize(settings.fontSize || 'medium');'
            setColorBlindMode(settings.colorBlindMode || 'none')}
    }, []);
    // Save settings to localStorage
    useEffect ( () => {
        const settings = {

  highContrast,
            reducedMotion,"
            fontSize,"'"