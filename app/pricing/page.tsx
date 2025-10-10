<<<<<<< HEAD
'use client';
import { CheckCircle, X, Calendar, MessageSquare, ArrowRight, Zap, Brain, Cloud, Shield, Code, BarChart } from 'lucide-react';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'it', name: 'IT Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'security', name: 'Cybersecurity' }
  ];

  const pricingPlans = [
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: 2999, yearly: 29999 },
      description: 'Perfect for small businesses getting started with AI'
      icon: Zap;
      color: 'text-blue-400'
      bgColor: 'bg-blue-500/10',
      popular: false;
      features: [,
        'AI Content Generation (10,000 words/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        'Up to 5 users',
        'Basic Integrations',
        'Monthly Reports'
      ],
      limitations: [,
        'Limited AI models',
        'No custom training',
        'Basic support only'
      ]
      description: 'Perfect for small businesses getting started',
      price: { month: 999, year: 9999 },
      icon: Target,
      category: 'all',
      features: [
        'Basic AI consultation',
        'IT infrastructure assessment',
        'Email support',
        'Monthly reporting',
        'Basic security audit',
        'Cloud migration planning'
      ],
      popular: false,
      color: 'from-gray-400 to-gray-600'
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: { monthly: 7999, yearly: 79999 },
      description: 'Ideal for growing businesses with advanced AI needs'
      icon: Brain;
      color: 'text-purple-400'
      bgColor: 'bg-purple-500/10',
      popular: true;
      features: [,
        'AI Content Generation (50,000 words/month)',
        'Advanced Analytics Dashboard',
        'Priority Support',
        'Enhanced Security',
        'Up to 25 users',
        'Advanced Integrations',
        'Weekly Reports',
        'Custom AI Models',
        'API Access',
        'Training & Onboarding'
      ],
      limitations: [,
        'Limited custom development',
        'Standard SLA'],
      description: 'Ideal for growing businesses',
      price: { month: 2499, year: 24999 },
      icon: Star,
      category: 'all',
      features: [
        'Advanced AI solutions',
        'Full IT management',
        'Priority support',
        'Weekly reporting',
        'Comprehensive security',
        'Cloud optimization',
        'Custom development',
        'Training sessions'
      ],
      popular: true,
      color: 'from-cyan-400 to-blue-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: { monthly: 19999, yearly: 199999 },
      description: 'Complete AI solution for large organizations'
      icon: Cloud;
      color: 'text-cyan-400'
      bgColor: 'bg-cyan-500/10'
      popular: false;
      features: [,
        'Unlimited AI Content Generation',
        'Custom Analytics Dashboard',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited users',
        'Custom Integrations',
        'Real-time Reports',
        'Custom AI Development',
        'Full API Access',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantee',
        'White-label Options'
      ],
      limitations: [],
      description: 'For large organizations with complex needs',
      price: { month: 4999, year: 49999 },
      icon: Award,
      category: 'all',
      features: [
        'Custom AI development',
        'Dedicated IT team',
        '24/7 support',
        'Real-time monitoring',
        'Advanced security suite',
        'Multi-cloud strategy',
        'Legacy system integration',
        'Executive consulting',
        'Unlimited training',
        'SLA guarantees'
      ],
      popular: false,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const aiServices = [
    {
      name: 'AI Automation Suite',
      description: 'Advanced workflow automation and process optimization',
      price: { monthly: 2000, yearly: 20000 },
      icon: Zap;
    },
    {
      name: 'AI Analytics Pro',
      description: 'Advanced analytics and business intelligence',
      price: { monthly: 1500, yearly: 15000 },
      icon: BarChart;
    },
    {
      name: 'AI Security Suite',
      description: 'Enhanced security and compliance features',
      price: { monthly: 1000, yearly: 10000 },
      icon: Shield;
    },
    {
      name: 'Custom Development',
      description: 'Bespoke AI solutions and integrations',
      price: { monthly: 5000, yearly: 50000 },
      icon: Code;
      name: 'AI Marketing Automation',
      price: { month: 599, year: 5999 },
      description: 'Automate your marketing campaigns with AI',
      features: ['Campaign optimization', 'Customer segmentation', 'Content generation', 'Performance analytics']
    },
    {
      name: 'AI Data Analytics',
      price: { month: 799, year: 7999 },
      description: 'Transform data into actionable insights',
      features: ['Predictive modeling', 'Real-time dashboards', 'Custom reports', 'Data visualization']
    },
    {
      name: 'AI Customer Support',
      price: { month: 499, year: 4999 },
      description: 'AI-powered customer service solutions',
      features: ['Chatbot implementation', 'Ticket routing', 'Sentiment analysis', '24/7 availability']
        'Weekly Reports',
        'Up to 25 Users',
        'Enhanced Security',
        'Advanced Analytics',
        'Custom Integrations',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Cloud, Brain, Code, Users, Building, Crown, Rocket, DollarSign, Clock, Award, Target, BarChart, MessageSquare, Eye, Settings, FileText, Calendar, PieChart, TrendingUp, Activity, Globe, Database, Smartphone, Lock, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, Home, Heart, Stethoscope, GraduationCap, Briefcase, Car, Plane, Ship, Train, Factory, ShoppingCart, CreditCard, Gamepad2, Music, Video, Camera, Palette, Bot, Package, Truck, Box, Archive, Folder, File, Image, Film, Headphones, Mic, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv, Tablet, Watch, Headphones as Headset, Gamepad2 as Gamepad, Joystick, Mouse, Keyboard, Webcam, Wifi, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh, SignalFull, Send, Reply, Forward, Share, Copy, Paste, Cut, Save, Download, Upload, Refresh, RotateCcw, RotateCw, Maximize, Minimize, X, Plus, Minus, Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music as MusicIcon, Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon, Radio as RadioIcon, Tv as TvIcon, Monitor, Laptop, Printer, Key, AlertTriangle, Headphones as Headphone, MessageSquare as Message, Calendar as CalendarIcon, FileText as FileTextIcon, Download as DownloadIcon, Upload as UploadIcon, Refresh as RefreshIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, X as XIcon, Plus as PlusIcon, Minus as MinusIcon, Divide as DivideIcon, Equal as EqualIcon, Percent as PercentIcon, Hash as HashIcon, AtSign as AtSignIcon, Euro as EuroIcon, Pound as PoundIcon, Yen as YenIcon, Bitcoin as BitcoinIcon, Wallet as WalletIcon, Banknote as BanknoteIcon, Coins as CoinsIcon, Receipt as ReceiptIcon, Archive as ArchiveIcon2, Folder as FolderIcon2, File as FileIcon2, Image as ImageIcon2, Film as FilmIcon2, Music as MusicIcon2, Headphones as HeadphoneIcon2, Mic as MicrophoneIcon, Speaker as SpeakerIcon2, Volume2 as Volume2Icon2, VolumeX as VolumeXIcon2, Play as PlayIcon2, Pause as PauseIcon2, Stop as StopIcon2, SkipBack as SkipBackIcon2, SkipForward as SkipForwardIcon2, Repeat as RepeatIcon2, Shuffle as ShuffleIcon2, Radio as RadioIcon2, Tv as TvIcon2, Monitor as MonitorIcon, Laptop as LaptopIcon, Smartphone as PhoneIcon, Tablet as TabletIcon, Watch as WatchIcon, Headphones as HeadsetIcon, Gamepad2 as GamepadIcon, Joystick as JoystickIcon, Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon, Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon, Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon, SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon, Wifi as WifiIcon2, WifiOff as WifiOffIcon2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('ai-services');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const aiServicesPricing = [
    {
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 199, yearly: 1990 },
      icon: Brain,
      popular: false,
      features: [
        'Basic AI automation',
        'Email support',
        'Standard templates',
        'Up to 5 users',
        'Basic analytics',
        '1 AI model'
      ],
      limitations: [
        'Limited customizations',
        'Basic reporting',
        'Standard response time'
      ],
      cta: 'Start Free Trial',
      link: '/contact'
    },
    {
      name: 'AI Professional',
      description: 'Advanced AI solutions for growing businesses',
      price: { monthly: 499, yearly: 4990 },
      icon: Zap,
      popular: true,
      features: [
        'Advanced AI automation',
        'Priority support',
        'Custom templates',
        'Up to 25 users',
        'Advanced analytics',
        '5 AI models',
        'API access',
        'Custom integrations'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      cta: 'Get Started',
      link: '/contact'
>>>>>>> origin/resolve-merge-conflicts
    },
    {
      name: 'AI Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: { monthly: 1299, yearly: 12990 },
      icon: Crown,
      popular: false,
      features: [
<<<<<<< HEAD
        'Custom AI Development',
        '24/7 Support',
        'Real-time Reports',
        'Unlimited Users',
        'Enterprise Security',
        'Custom Analytics',
        'Full Integration Support',
        'Dedicated Team',
        'SLA Guarantee'
      ],
      popular: false,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const itServices = [
    {
      name: 'IT Infrastructure Management',
      price: { month: 1299, year: 12999 },
      description: 'Complete IT infrastructure oversight',
      features: ['Server management', 'Network monitoring', 'Backup solutions', 'Performance optimization']
    },
    {
      question: 'What happens if I exceed my usage limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can either upgrade your plan or purchase additional capacity as needed.',
      name: 'Cloud Migration & Setup',
      price: { month: 1999, year: 19999 },
      description: 'Seamless cloud migration services',
      features: ['AWS/Azure/GCP setup', 'Data migration', 'Security configuration', 'Cost optimization']
    },
    {
      name: 'Cybersecurity Suite',
      price: { month: 899, year: 8999 },
      description: 'Comprehensive security solutions',
      features: ['Threat monitoring', 'Vulnerability scanning', 'Incident response', 'Compliance management']
    }
  ];

  const filteredPlans = pricingPlans.filter(plan => 
    selectedCategory === 'all' || plan.category === selectedCategory
  );

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'pricing_phone_number'});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Pricing Plans</h1><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Choose the perfect plan for your business. All plans include our core AI services</p>
              with flexible options to scale as you grow.</p>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Pricing Plans;
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core AI services;
              with flexible options to scale as you grow.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <ArrowRight className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Cancel Anytime</span>
              </div>)
            </div>)
          </div>)
        </div>)
      </section>)),
      {/* Billing Toggle */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-slate-800/50 rounded-lg p-1 flex">
        <div className="container mx-auto px-4"></section>
          <div className="flex justify-center"></div>
            <div className="bg-slate-800/50 rounded-lg p-1 flex"></div>
              <button
                onClick={() =>setBillingCycle('monthly')}
              <button;
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-500 text-white'}
                    : 'text-gray-400 hover:text-white'}
                }`}
              ></button>
                Monthly<button
                onClick={() =>setBillingCycle('yearly')}
              >
                Monthly;
              </button>
              <button;
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-500 text-white'}
                    : 'text-gray-400 hover:text-white'}
                }`}
              ></button>
                Yearly<span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">Save 17%</span>
              >
                Yearly;
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">
                  Save 17%
                </span>
              </button>
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, cloud solutions pricing, cybersecurity pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
=======
        'Full AI suite',
        '24/7 dedicated support',
        'Unlimited customizations',
        'Unlimited users',
        'Enterprise analytics',
        'Unlimited AI models',
        'Full API access',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const microSaasPricing = [
    {
      name: 'Micro SaaS Basic',
      description: 'Essential tools for small teams',
      price: { monthly: 29, yearly: 290 },
      icon: Settings,
      popular: false,
      features: [
        '1 micro SaaS tool',
        'Basic support',
        'Standard templates',
        'Up to 3 users',
        'Basic analytics',
        'Email support'
      ],
      limitations: [
        'Limited integrations',
        'Basic customization'
      ],
      cta: 'Start Free',
      link: '/contact'
    },
    {
      name: 'Micro SaaS Pro',
      description: 'Powerful tools for growing businesses',
      price: { monthly: 79, yearly: 790 },
      icon: Rocket,
      popular: true,
      features: [
        'Up to 5 micro SaaS tools',
        'Priority support',
        'Custom templates',
        'Up to 15 users',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Phone support'
      ],
      limitations: [
        'Limited custom development'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Micro SaaS Enterprise',
      description: 'Complete micro SaaS suite for enterprises',
      price: { monthly: 199, yearly: 1990 },
      icon: Building,
      popular: false,
      features: [
        'Unlimited micro SaaS tools',
        '24/7 dedicated support',
        'Unlimited customizations',
        'Unlimited users',
        'Enterprise analytics',
        'Full API access',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const itServicesPricing = [
    {
      name: 'IT Support Basic',
      description: 'Essential IT support for small businesses',
      price: { monthly: 99, yearly: 990 },
      icon: Headphones,
      popular: false,
      features: [
        'Email support',
        'Basic monitoring',
        'Standard response time',
        'Up to 10 devices',
        'Basic security',
        'Monthly reports'
      ],
      limitations: [
        'Limited remote support',
        'Business hours only'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'IT Support Professional',
      description: 'Comprehensive IT support for growing businesses',
      price: { monthly: 199, yearly: 1990 },
      icon: Shield,
      popular: true,
      features: [
        '24/7 phone & email support',
        'Proactive monitoring',
        'Fast response time',
        'Up to 50 devices',
        'Advanced security',
        'Weekly reports',
        'Remote support',
        'Priority support'
      ],
      limitations: [
        'Limited on-site visits'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'IT Support Enterprise',
      description: 'Complete IT management for large organizations',
      price: { monthly: 399, yearly: 3990 },
      icon: Globe,
      popular: false,
      features: [
        '24/7 dedicated support',
        'Full monitoring suite',
        'Immediate response',
        'Unlimited devices',
        'Enterprise security',
        'Real-time reports',
        'On-site support',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const cloudServicesPricing = [
    {
      name: 'Cloud Starter',
      description: 'Basic cloud infrastructure for small businesses',
      price: { monthly: 149, yearly: 1490 },
      icon: Cloud,
      popular: false,
      features: [
        'Basic cloud setup',
        'Email support',
        'Standard monitoring',
        'Up to 5 servers',
        'Basic backup',
        'Monthly optimization'
      ],
      limitations: [
        'Limited customization',
        'Basic security'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Cloud Professional',
      description: 'Advanced cloud solutions for growing businesses',
      price: { monthly: 299, yearly: 2990 },
      icon: Zap,
      popular: true,
      features: [
        'Advanced cloud setup',
        'Priority support',
        'Advanced monitoring',
        'Up to 25 servers',
        'Advanced backup',
        'Weekly optimization',
        'Auto-scaling',
        'Load balancing'
      ],
      limitations: [
        'Limited custom development'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Cloud Enterprise',
      description: 'Complete cloud transformation for enterprises',
      price: { monthly: 599, yearly: 5990 },
      icon: Crown,
      popular: false,
      features: [
        'Full cloud transformation',
        '24/7 dedicated support',
        'Enterprise monitoring',
        'Unlimited servers',
        'Enterprise backup',
        'Real-time optimization',
        'Custom auto-scaling',
        'Advanced load balancing',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const cybersecurityPricing = [
    {
      name: 'Security Basic',
      description: 'Essential security for small businesses',
      price: { monthly: 79, yearly: 790 },
      icon: Shield,
      popular: false,
      features: [
        'Basic firewall',
        'Email security',
        'Standard monitoring',
        'Up to 10 devices',
        'Basic backup',
        'Monthly reports'
      ],
      limitations: [
        'Limited threat detection',
        'Basic compliance'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Security Professional',
      description: 'Advanced security for growing businesses',
      price: { monthly: 149, yearly: 1490 },
      icon: Lock,
      popular: true,
      features: [
        'Advanced firewall',
        'Comprehensive email security',
        'Advanced monitoring',
        'Up to 50 devices',
        'Advanced backup',
        'Weekly reports',
        'Threat detection',
        'Compliance monitoring'
      ],
      limitations: [
        'Limited custom policies'
      ],
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Security Enterprise',
      description: 'Complete security suite for enterprises',
      price: { monthly: 299, yearly: 2990 },
      icon: Globe,
      popular: false,
      features: [
        'Enterprise firewall',
        'Full email security suite',
        'Enterprise monitoring',
        'Unlimited devices',
        'Enterprise backup',
        'Real-time reports',
        'Advanced threat detection',
        'Full compliance suite',
        'Dedicated security manager',
        'SLA guarantees'
      ],
      limitations: [],
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  const getCurrentPricing = () => {
    switch (selectedPlan) {
      case 'ai-services':
        return aiServicesPricing;
      case 'micro-saas':
        return microSaasPricing;
      case 'it-services':
        return itServicesPricing;
      case 'cloud-services':
        return cloudServicesPricing;
      case 'cybersecurity':
        return cybersecurityPricing;
      default:
        return aiServicesPricing;
    }
  };

  const pricingPlans = [
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'micro-saas', name: 'Micro SaaS', icon: Settings },
    { id: 'it-services', name: 'IT Services', icon: Headphones },
    { id: 'cloud-services', name: 'Cloud Services', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI services, micro SaaS solutions, IT support, cloud infrastructure, and cybersecurity. Choose the perfect plan for your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, micro SaaS pricing, IT services pricing, cloud services pricing, cybersecurity pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
>>>>>>> origin/resolve-merge-conflicts
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business. All plans include our commitment to excellence and ongoing support.
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setBillingPeriod('month')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingPeriod === 'month'
                      ? 'bg-cyan-600 text-white'
=======
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our commitment to excellence and 24/7 support.
              </p>
            </div>
          </section>

          {/* Plan Selection */}
          <section className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <plan.icon className="w-5 h-5" />
                  <span>{plan.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Billing Toggle */}
          <section className="container mx-auto px-4 py-4">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 rounded-lg p-1 flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
>>>>>>> origin/resolve-merge-conflicts
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
<<<<<<< HEAD
                  onClick={() => setBillingPeriod('year')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingPeriod === 'year'
                      ? 'bg-cyan-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly <span className="text-cyan-400 text-sm">(Save 20%)</span>
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">{plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);</div>
              return (<div
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-7xl mx-auto">,
            {plans.map((plan, index) => {
              const savings = calculateSavings(plan.price.monthly, plan.price.yearly);
              return(<div;
                  key={index}
                  className={`relative bg-slate-800/50 rounded-lg p-8 ${}
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}
                  } hover:bg-slate-700/50 transition-all duration-300`}
                >{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
=======
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">Save 20%</span>
                </button>
              </div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {getCurrentPricing().map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
>>>>>>> origin/resolve-merge-conflicts
                    plan.popular
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
<<<<<<< HEAD
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">)
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">)
                        Most Popular;)
                      </div>)
                    </div>)
                  )}

                  <div className="text-center mb-8"></div>
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}></div>
                      <plan.icon className={`w-8 h-8 ${plan.color}`} /></p>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4"></div>
                      <span className="text-4xl font-bold text-white">${plan.price[billingCycle as keyof typeof plan.price].toLocaleString()}</span><span className="text-gray-400 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="text-green-400 text-sm font-medium">Save ${savings.savings.toLocaleString()} ({savings.percentage}% off)</div>
                      </div>
=======
                    <div className="flex justify-center mb-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                        <Star className="w-4 h-4 mr-2" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">
                        ${billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'yearly' ? 'year' : 'month'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-green-400 text-sm mt-2">Save ${(plan.price.monthly * 12) - plan.price.yearly} per year</p>
>>>>>>> origin/resolve-merge-conflicts
                    )}
                  </div>

                  <div className="space-y-4 mb-8">
<<<<<<< HEAD
                    <h4 className="text-lg font-semibold text-white mb-3">What's included: </h4>,
                  <div className="space-y-4 mb-8"></div>
                    <h4 className="text-lg font-semibold text-white mb-3">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3"></div>
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-start space-x-3"></div>
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{limitation}</span>
                      </div>
                    ))}
                  <button
                    onClick={() =>setSelectedPlan(plan.name.toLowerCase())}
                  </div>

                  <button;
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}
                  ></button>
                    {selectedPlan === plan.name.toLowerCase() ? 'Selected' : 'Choose Plan'}</button>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Add-on Services<p className="text-lg text-gray-300 max-w-3xl mx-auto">Enhance your plan with additional services and features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{addOns.map((addon, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Add-on Services</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Enhance your plan with additional services and features</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{addOns.map((addon, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <addon.icon className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p><div className="text-2xl font-bold text-white mb-4">${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}</div><span className="text-gray-400 text-sm ml-1">/{billingCycle === 'monthly' ? 'month' : 'year'}</span><button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-slate-600 transition-colors">Add to Plan</button>
                </button>
              </div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Add-on Services;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Enhance your plan with additional services and features;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {addOns.map((addon, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-700/50 transition-all duration-300">,
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">,
                  <addon.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  ${addon.price[billingCycle as keyof typeof addon.price].toLocaleString()}
                  <span className="text-gray-400 text-sm ml-1">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg font-medium hover: bg-slate-600 transition-colors">
                  Add to Plan;
                </button>,
              </div>))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions<p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our pricing and plans</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Common questions about our pricing and plans</p>
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Frequently Asked Questions;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Common questions about our pricing and plans;
            </p>
          </div>,
          <div className="max-w-4xl mx-auto">,
            <div className="space-y-6">,
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}<p className="text-gray-300">{faq.answer}</p>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300">{faq.answer}</p>
                </div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?<p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required, cancel anytime.</p>
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">,
            Ready to Get Started?,
          </h2>,
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">,
            Start your 14-day free trial today. No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a;
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Start your 14-day free trial today. No credit card required, cancel anytime.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" >Start Free Trial</MessageSquare>
            </MessageSquare>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></a>
              <Calendar className="w-5 h-5 mr-2" >Schedule Demo</Calenda>
            </Calendar>
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial;
            </a>
            <a;
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo;
            </a>
          </div>
        </div>
      </section>,
    </div>,
        {/* AI Services Pricing */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI solutions with transparent pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services with competitive pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-cyan-400">
                      ${service.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-300 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border-2 border-cyan-400 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We offer tailored solutions for unique business requirements. Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
        <meta name="description" content="Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI and IT solutions with no hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan later?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, bank transfers, and can accommodate enterprise payment terms.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What support is included?
                </h3>
                <p className="text-gray-300">
                  All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Quote
              </a>
            </div>
          </div>
=======
                    <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-2 mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Limitations:</h4>
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center text-gray-400">
                          <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href={plan.link}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom pricing?</h3>
                  <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team to discuss your needs.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What's included in support?</h3>
                  <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include phone support, and Enterprise includes 24/7 dedicated support.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-gray-300">Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">What payment methods do you accept?</h3>
                  <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise clients can also pay via invoice.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Tech Group for their AI and IT needs. 
                Start your free trial today or contact us for a custom solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
>>>>>>> origin/resolve-merge-conflicts
        </main>
        
        <Footer />
      </div>
    </>
  );
};
