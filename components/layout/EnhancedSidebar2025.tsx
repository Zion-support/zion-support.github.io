import React, { useState, useEffect } from 'react',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Home, Star, Users;
  Settings, HelpCircle, Mail, Phone, MapPin;
  Brain, Atom, Shield, Rocket, DollarSign;
  Globe, Cpu, Database, Lock, Zap;
  TrendingUp, Award, CheckCircle, Clock;
  ArrowRight, Search, Menu, X as CloseIcon;
  Target, BookOpen, Truck, BarChart3;
  Sparkles, Eye, Lightbulb, Palette, Code
 } from 'lucide-react';
interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean
}

const contactInfo = null;