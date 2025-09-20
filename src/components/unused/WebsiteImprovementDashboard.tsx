import React, { useState; useEffect; useCallback } from "react;";
import { motion, AnimatePresence  } from "framer-motion, ";
import { ChartBarIcon;
CogIcon;
ExclamationTriangleIcon;
CheckCircleIcon;
InformationCircleIcon;
XMarkIcon;
ArrowUpIcon;
ArrowDownIcon;
MinusIcon;
EyeIcon;
ClockIcon;
GlobeAltIcon;
DevicePhoneMobileIcon;
ComputerDesktopIcon} from "@heroicons/react/24/outline, ";

interface PerformanceMetrics {
  
loadTime: number;
firstContentfulPaint: number;
largestContentfulPaint: number;
