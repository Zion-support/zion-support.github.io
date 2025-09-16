import React, {useState, useEffect} from 'react';

import {Settings, FileText, Eye, Zap, Volume2, VolumeX} from 'lucide-react';
import {Button} from "button.tsx";
export function AccessibilityMenu(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        fontSize: 'medium',
        highContrast: false,
        reducedMotion: false,
        soundEnabled: true
    });
    useEffect(() => {
        // Load settings from localStorage
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {
            setSettings(JSON.parse(savedSettings))}
    }, []);
    useEffect(() => {// Apply settings to document
        applySettings(settings);
        // Save to localStorage
        localStorage.setItem('accessibility-settings', JSON.stringify(settings))}, [settings]);
    const applySettings = (props: any) => {
        const root = document.documentElement;
        // Font size
        root.style.setProperty('--font-size-multiplier', newSettings.fontSize === 'small' ? '0.875' :
            newSettings.fontSize === 'large' ? '1.125' : '1');
        // High contrast
        if (newSettings.highContrast) {
            root.classList.add('high-contrast')}
        else {root.classList.remove('high-contrast')}
        // Reduced motion
        if (newSettings.reducedMotion) {root.classList.add('reduced-motion')}
        else {root.classList.remove('reduced-motion')}
    };
    const toggleSetting = (props: any) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }))};
    const updateFontSize = (props: any) => {
        setSettings(prev => ({ ...prev, fontSize: size }))};
    const resetSettings = (props: any) => {
        const defaultSettings = {
  fontSize: 'medium',
            highContrast: false,
            reducedMotion: false,
