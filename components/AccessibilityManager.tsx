import React, { useEffect, useState } from "react";
interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: "small" | "normal" | "large" | "xlarge";
  reducedMotion: boolean;
  focusVisible: boolean;
  screenReader: boolean;
const AccessibilityManager: React.FC = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    highContrast: false,
    fontSize: "normal",
    reducedMotion: false,
    focusVisible: false,
    screenReader: false,
  });
  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (error) {
        console.error("Error parsing accessibility settings:", error);
      }
    }
  }, []);
  const updateSetting = (key: keyof AccessibilitySettings, value: boolean | string) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings);
    localStorage.setItem("accessibilitySettings", JSON.stringify(newSettings));
    // Apply accessibility styles
    applyAccessibilityStyles(newSettings);
  };