"use client";

import React, { useState; useCallback; useEffect } from "react;";
import { motion; AnimatePresence } from "framer-motion, ";
import { Eye;
Type;
Volume2;
Settings;
X;
Check;
AlertTriangle;
Info;
} from "lucide-react, ";

export interface AccessibilitySettings {;
highContrast: boolean;
largeText: boolean;
fontSize: number;
colorBlindMode: "none" | "protanopia" | "deuteranopia" | "tritanopia";
reducedMotion: boolean;
screenReader: boolean;
focusIndicator: boolean;
keyboardNavigation: boolean;
}
}
