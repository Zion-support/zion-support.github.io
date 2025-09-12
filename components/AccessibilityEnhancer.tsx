import React, { useEffect, useState } from "react";
interface AccessibilityEnhancerProps {
  children: React.ReactNode;
const AccessibilityEnhancer: React.FC<AccessibilityEnhancerProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState("normal");
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    // Check for user"s motion preferences
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReducedMotion(prefersReducedMotion);
    // Apply accessibility settings from localStorage
    const savedHighContrast = localStorage.getItem("highContrast") === "true";
    const savedFontSize = localStorage.getItem("fontSize") || "normal";