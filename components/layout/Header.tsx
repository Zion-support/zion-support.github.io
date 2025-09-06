<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu;
  X;
  Home;
  Users;
  Briefcase;
  Phone;
  Mail;
  ChevronDown;
  Brain;
  Shield;
  Cloud;
  Database;
  Network;
  Zap;
  Target;
  DollarSign;
  BookOpen;
  Calendar;
  FileText;
  Award;
  Globe;
  Search;
} from 'lucide-react';

=======
import React from 'react',
import Link from 'next/link';
import Button from '../ui/Button';
>>>>>>> pr-11992
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = null;
  ];
=======
    { name: 'Resources', href: '/resources' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }],
>>>>>>> pr-11992

  return (
    <header className;
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> pr-11992
