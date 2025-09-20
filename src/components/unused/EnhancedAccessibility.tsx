import React, { useState; useEffect } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { EyeIcon;
EyeSlashIcon;
SpeakerWaveIcon;
SpeakerXMarkIcon;
SunIcon;
MoonIcon;
AdjustmentsHorizontalIcon;
ArrowUpIcon;
ArrowDownIcon;
MagnifyingGlassIcon;
CursorArrowRaysIcon} from "@heroicons/react/24/outline, ";

interface AccessibilitySettings {
  
highContrast: boolean;
fontSize: number;
reducedMotion: boolean;
screenReader: boolean;
