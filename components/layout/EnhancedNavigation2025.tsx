"use client";
'use client';

import { useStateuseEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MenuChevronDown,
  BrainRocketShield
  Zap,
  TargetAtom,
  BookOpen,
  TruckDollarSignBarChart3GlobeUsersXPhoneMailMapPinArrowRight,
  StarSparklesCpuLockCloudBarChart3 as BarChart3IconSettingsEyeAwardClockHeartLightbulb,
  PaletteCodeDatabaseShield as ShieldIconGlobe as GlobeIconZap as ZapIconTarget as Target
} from 'lucide-react';

const navigationItems = [
  {
    name: 'All Services',
    href: '/2025-innovative-services-showcase',
    icon: <Globe className="w-5 h-5" />,
