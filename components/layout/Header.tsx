import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Target,
  DollarSign,
  BookOpen,
  Calendar,
  FileText,
  Award,
  Globe,
  Search,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/solutions" className="text-gray-300 hover:text-white">Solutions</Link>
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
