import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export const AccessibilityPanel = ({ isOpen, onToggle }) => {
    const [settings, setSettings] = useState({
        highContrast: false,
        fontSize: 100,
        colorBlindness: 'none',
        reducedMotion: false,
        screenReader: false,
        keyboardNavigation: false,
        focusIndicator: true,
        colorBlindness: 'none'
    });
    const [accessibilityScore, setAccessibilityScore] = useState(85);
    const [activeTab, setActiveTab] = useState('general');
    useEffect(() => {
        // Load saved settings from localStorage
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {
            try {
                const parsed = JSON.parse(savedSettings);
                // // // // // // // console.error('Failed to parse accessibility settings:', error);
            }
                setSettings(prev => ({ ...prev, ...parsed }))}
            catch (error) {
                console.error('Failed to parse accessibility settings:', error)}
        }
    }, []);
    useEffect(() => {
        // Apply settings to document
        applySettings(settings);
        // Save to localStorage
        localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);
    const applySettings = (newSettings) => {
        const root = document.documentElement;
        // High contrast
        if (newSettings.highContrast) {
            root.style.setProperty('--high-contrast', '1');
            root.classList.add('high-contrast')}
        else {
            root.style.setProperty('--high-contrast', '0');
            root.classList.remove('high-contrast')}
        // Font size
        root.style.setProperty('--font-size', `${newSettings.fontSize}%`);
        // Reduced motion
        if (newSettings.reducedMotion) {
            root.classList.add('reduced-motion')}
        else {
            root.style.setProperty('--reduced-motion', 'no-preference')}
        // Apply focus indicator
        if (settings.focusIndicator) {
            root.style.setProperty('--focus-visible', 'auto')}
        else {
            root.style.setProperty('--focus-visible', 'none')}
        // Color blindness
        root.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
        if (newSettings.colorBlindness !== 'none') {
            root.classList.add(newSettings.colorBlindness)}
        // Focus indicator
        if (newSettings.focusIndicator) {
            root.classList.add('focus-visible')}
        else {
            root.classList.remove('focus-visible')}
    };
    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }))};
    const resetSettings = () => {
        const defaultSettings = {
  highContrast: false,
            fontSize: 100,
            reducedMotion: false,
            screenReader: false,
            keyboardNavigation: false,
            focusIndicator: true,
