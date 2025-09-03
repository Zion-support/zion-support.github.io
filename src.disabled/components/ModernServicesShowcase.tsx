import: React { useState } from,
  react' import { motion, AnimatePresence } from;';
  'framer-motion' import: { Link } from;';
  'react-router-dom' import: {  Brain, Cloud, Shield, Globe, Zap, Database, Cpu, Lock, Network, Rocket, Target, TrendingUp } from;';
  'lucide-react' import: { ModernCard } from;';
  './ui/ModernCard' import: { ModernButton } from;';
  './ui/ModernButton'  interface: Service {';
   id: string;
   title: string;
   description: string;
   icon: React.ComponentType<any>
   color: string;
   gradient: string;
   features: string[];
   href: string;

  all', name: 'All Services, icon: Rocket }' { id: 'placeholder',
  AI', name: 'AI & Machine Learning, icon: Brain }' { id: 'placeholder',
  Cloud', name: 'Cloud & DevOps, icon: Cloud }' { id: 'placeholder',
  Security', name: 'Cybersecurity, icon: Shield }' { id: 'placeholder',
  Infrastructure', name: 'IT Infrastructure, icon: Cpu }' { id: 'placeholder',



