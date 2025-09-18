<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite,
  Search, Bell, User, Settings, LogOut, SparklesIcon,
  Home, Briefcase, BookOpen, Users as Team, MessageCircle,
  DollarSign, Grid, List, ArrowRight
} from 'lucide-react';

// Import all the new service data
import { revolutionary2026AIAutomationServices } from '../../data/revolutionary-2026-ai-automation-services';
import { revolutionary2026EmergingTechServices } from '../../data/revolutionary-2026-emerging-tech-services';
import { revolutionary2026HealthcareBiotechServices } from '../../data/revolutionary-2026-healthcare-biotech-services';
import { revolutionary2026FintechBlockchainServices } from '../../data/revolutionary-2026-fintech-blockchain-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Consciousness 2026',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Next-generation AI consciousness solutions',
    services: revolutionary2026AIAutomationServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  },
  {
    title: 'Emerging Technologies 2026',
    icon: Rocket,
    color: 'from-green-600 to-emerald-600',
    description: 'Cutting-edge emerging tech solutions',
    services: revolutionary2026EmergingTechServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  },
  {
    title: 'Healthcare & Biotech 2026',
    icon: Shield,
    color: 'from-teal-600 to-cyan-600',
    description: 'Revolutionary healthcare innovations',
    services: revolutionary2026HealthcareBiotechServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  },
  {
    title: 'Fintech & Blockchain 2026',
    icon: DollarSign,
    color: 'from-yellow-600 to-orange-600',
    description: 'Next-generation financial technology',
    services: revolutionary2026FintechBlockchainServices.slice(0, 4).map(service => ({
      name: service.name,
      href: service.link,
      description: service.tagline,
      price: service.price + service.period,
      icon: service.icon,
      color: service.color
    }))
  }
];

const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/revolutionary-2026-services', icon: Rocket },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const Revolutionary2026UltimateNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const Revolutionary2026UltimateNavigation: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Revolutionary2026UltimateNavigation</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default Revolutionary2026UltimateNavigation;
