<<<<<<< HEAD
import React from 'react';
=======
"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RotateCcw, Accessibility, CheckCircle, AlertCircle
} from 'lucide-react';

interface AccessibilitySettings {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  highSaturation: boolean;
  focusIndicator: boolean;
  screenReader: boolean;
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

const EnhancedAccessibilityEnhancer: React.FC = () => {
  // Temporarily simplified to avoid build issues
  return <div className="sr-only">Accessibility features temporarily disabled</div>;
};

<<<<<<< HEAD
export default EnhancedAccessibilityEnhancer;
=======
export default EnhancedAccessibilityEnhancer;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
