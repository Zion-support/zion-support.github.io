
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, User;
  Settings, LogOut, Bell, Globe, Zap
 } from 'lucide-react';
import Link from 'next/link';

interface EnhancedNavigationProps {
  className?: string;
}


const EnhancedNavigation: React.FC<EnhancedNavigationProps> = ({ className;

