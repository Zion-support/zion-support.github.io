<<<<<<< HEAD
=======
import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Volume2, VolumeX, Keyboard, Accessibility, X } from 'lucide-react';
import { Button } from '../ui/button';
const AccessibilityContext = createContext(undefined);
export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within an AccessibilityProvider');
    }
    return context;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
};
export default Accessibility;