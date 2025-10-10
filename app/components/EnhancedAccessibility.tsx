import React, { useState, useEffect, useCallback } from 'react';
const EnhancedAccessibility: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
  const [isVisible, setIsVisible] = useState(false);
    const savedSettings = localStorage.getItem('accessibility-settings');
        const parsed = JSON.parse(savedSettings);
    const detectScreenReader = () => {
      const hasScreenReader = 
  const applySettings = useCallback(() => {
    const root = document.documentElement;
    const fontSizeMap = {
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | string) => {
  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement('div');
  const handleKeyDown = (event: React.KeyboardEvent) => {
export default EnhancedAccessibility;