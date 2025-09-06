import React, { Suspense, lazy, useState, useEffect } from 'react',
import Layout from './layout/Layout',
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star;
  Brain, Atom, Shield, Zap, TrendingUp, Globe;
  Rocket, Target, Users, Cpu, Eye, Network;
  Car, Search, TestTube, Globe as PlanetIcon, Lock, Palette;
  FileText, BarChart3, Heart, Truck, ShieldCheck;
  Sparkles, Infinity as InfinityIcon, Zap as Lightning
 } from 'lucide-react';
// Import new service data
import { innovativeMicroSaasServices2025V2  } from '../data/2025-innovative-micro-saas-expansion-v2';
import { emergingTechServices2025V2 } from '../data/2025-emerging-tech-services-v2';
// Lazy load heavy components for better performance
const LazyServiceCard = null;