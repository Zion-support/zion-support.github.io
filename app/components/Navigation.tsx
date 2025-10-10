'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Zap, 
  Sparkles, 
  Settings, 
  BarChart, 
  Phone, 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle, 
  Play, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  Quote, 
  User, 
  Building, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  Filter, 
  SortAsc, 
  SortDesc, 
  Calendar, 
  MapPin, 
  Mail, 
  PhoneCall, 
  Video, 
  Camera, 
  Mic, 
  Headphones, 
  Volume2, 
  VolumeX, 
  Wifi, 
  WifiOff, 
  Battery, 
  BatteryCharging, 
  Power, 
  PowerOff, 
  RefreshCw, 
  RotateCcw, 
  RotateCw, 
  Move, 
  Maximize, 
  Minimize, 
  Maximize2, 
  Minimize2, 
  Square, 
  Circle, 
  Triangle, 
  Hexagon, 
  Octagon, 
  Pentagon, 
  Diamond, 
  Heart as HeartIcon, 
  Smile, 
  Frown, 
  Meh, 
  Laugh, 
  Angry, 
  Sad, 
  Surprised, 
  Confused, 
  Wink, 
  Kiss, 
  Tongue, 
  ThumbsDown, 
  ThumbsUp as ThumbsUpIcon, 
  Hand, 
  Handshake, 
  Clap, 
  Wave, 
  Point, 
  Fingerprint, 
  Key, 
  Lock as LockIcon, 
  Unlock, 
  Eye as EyeIcon, 
  EyeOff, 
  Shield as ShieldIcon, 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX, 
  AlertTriangle, 
  AlertCircle, 
  AlertOctagon, 
  AlertSquare, 
  Info, 
  HelpCircle, 
  QuestionMarkCircle, 
  ExclamationTriangle, 
  ExclamationCircle, 
  ExclamationMarkCircle, 
  CheckCircle as CheckCircleIcon, 
  XCircle, 
  PlusCircle, 
  MinusCircle, 
  X as XIcon, 
  Plus, 
  Minus, 
  Divide, 
  Equal, 
  NotEqual, 
  LessThan, 
  GreaterThan, 
  LessThanOrEqual, 
  GreaterThanOrEqual, 
  Infinity, 
  Pi, 
  Sigma, 
  Alpha, 
  Beta, 
  Gamma, 
  Delta, 
  Epsilon, 
  Zeta, 
  Eta, 
  Theta, 
  Iota, 
  Kappa, 
  Lambda, 
  Mu, 
  Nu, 
  Xi, 
  Omicron, 
  Rho, 
  Tau, 
  Upsilon, 
  Phi, 
  Chi, 
  Psi, 
  Omega
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: BarChart
    },
    {
      name: 'Enterprise',
      href: '/enterprise',
      icon: Building
    },
    {
      name: 'Docs',
      href: '/docs',
      icon: Bookmark
    },
    {
      name: 'API Docs',
      href: '/api-docs',
      icon: Code
    },
    {
      name: 'Support',
      href: '/support',
      icon: HelpCircle
    },
    {
      name: 'Status',
      href: '/status',
      icon: CheckCircle
    },
    {
      name: 'Demo',
      href: '/demo',
      icon: Play
    },
    {
      name: 'Consultation',
      href: '/consultation',
      icon: MessageSquare
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;