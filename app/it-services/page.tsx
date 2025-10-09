'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, 
  BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, 
  Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, 
  Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, 
  Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, 
  Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Monitor, Headphones, Mic, 
  Image, FileImage, Layers, GitBranch, Terminal, Wifi, HardDrive, Cpu as Processor,
  WifiOff, RefreshCw, Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  Maximize, Minimize, RotateCcw, RotateCw, Move, Grip, Filter, SortAsc, SortDesc,
  ChevronUp, ChevronDown, ChevronLeft, ChevronRight, X, Check as CheckIcon, AlertCircle, Info,
  ExternalLink, Link, Lock as LockIcon, Unlock, Eye as EyeIcon, EyeOff, Bell,
  BellOff, Volume2, VolumeX, Play, Pause, Stop, SkipForward, SkipBack, Repeat,
  Shuffle, Heart as HeartIcon, ThumbsUp, ThumbsDown, MessageCircle, Send,
  Paperclip, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Meh as MehIcon,
  Server, Network, Router, Switch, Firewall, Key, Certificate, Bug, AlertTriangle,
  Activity as ActivityIcon, Zap as ZapIcon, Globe as GlobeIcon, Shield as ShieldIcon,
  Database as DatabaseIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as SmartphoneIcon,
  Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon,
  Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon,
  Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon,
  CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon,
  GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon,
  BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon,
  Clock3 as Clock3Icon, Compass as CompassIcon, Globe2 as Globe2Icon, Map as MapIcon,
  Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon,
  Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon,
  Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon,
  ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'infrastructure',
      icon: Cloud,
      price: '$1,299/month',
      originalPrice: '$2,499/month',
      description: 'Comprehensive cloud infrastructure setup, management, and optimization for AWS, Azure, and GCP.',
      features: [
        'Multi-cloud strategy implementation',
        'Infrastructure as Code (IaC)',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security hardening',
        'Disaster recovery setup',
        '24/7 monitoring',
        'Performance optimization'
      ],
      benefits: [
        'Reduce cloud costs by 40%',
        'Improve uptime to 99.9%',
        'Automated scaling',
        'Enhanced security posture'
      ],
      marketPrice: '$2,499-4,999/month',
      rating: 4.9,
      reviews: 1247,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      demo: 'https://ziontechgroup.com/demo/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      category: 'security',
      icon: Shield,
      price: '$1,599/month',
      originalPrice: '$2,999/month',
      description: 'Comprehensive cybersecurity solution with threat detection, prevention, and incident response.',
      features: [
        '24/7 threat monitoring',
        'Advanced threat detection',
        'Vulnerability assessment',
        'Penetration testing',
        'Security awareness training',
        'Incident response',
        'Compliance management',
        'Security audits'
      ],
      benefits: [
        'Prevent 99.9% of cyber attacks',
        'Reduce security incidents by 95%',
        'Compliance assurance',
        'Peace of mind'
      ],
      marketPrice: '$2,999-5,999/month',
      rating: 4.8,
      reviews: 892,
      link: 'https://ziontechgroup.com/cybersecurity-suite',
      demo: 'https://ziontechgroup.com/demo/cybersecurity-suite'
    },
    {
      icon: Database,
      title: 'Database Services',
      price: '$899/month',
      description: 'Database design, optimization, and management with AI-powered tuning',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
    },
    {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    </div>
                    <div className="text-xs text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      Save {Math.round((1 - parseInt(service.price.replace('$', '').replace(',', '').replace('/month', '')) / parseInt(service.originalPrice.replace('$', '').replace(',', '').replace('/month', ''))) * 100)}%
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Market price: {service.marketPrice}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={service.demo}
                    className="bg-transparent border border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all"
                  >
                    Demo
                  </a>
                </div>
      </main>
      <Footer />
    </div>
  );
};

export default ITServicesPage;