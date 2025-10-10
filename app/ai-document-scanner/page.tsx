'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import {
  Scan, 
  FileText, 
  Upload, 
  Download, 
  Search, 
  Filter, 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Database, 
  Cloud, 
  Eye, 
  Edit, 
  Trash2, 
  Share, 
  Lock, 
  Unlock, 
  Folder, 
  Image, 
  File, 
  Archive,
  BarChart,
  PieChart,
  TrendingUp,
  Target,
  Award,
  Sparkles,
  Bot,
  Cpu,
  Wifi,
  Battery,
  Signal,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Tag,
  Bookmark,
  Copy,
  Move,
  RotateCw,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  MoreHorizontal,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Link,
  Link2,
  Unlink,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Key,
  KeyRound,
  Fingerprint,
  ScanLine,
  QrCode,
  Barcode,
  Camera,
  Video,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Headphones,
  Speaker,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Desktop,
  Server,
  HardDrive,
  Cpu as CpuIcon,
  MemoryStick,
  Wifi as WifiIcon,
  Bluetooth,
  Usb,
  Plug,
  Power,
  Battery as BatteryIcon,
  Signal as SignalIcon,
  WifiOff,
  BluetoothOff,
  UsbOff,
  PlugOff,
  PowerOff,
  BatteryLow,
  SignalLow,
  WifiLow,
  BluetoothLow,
  UsbLow,
  PlugLow,
  PowerLow,
  BatteryEmpty,
  SignalEmpty,
  WifiEmpty,
  BluetoothEmpty,
  UsbEmpty,
  PlugEmpty,
  PowerEmpty,
  BatteryCharging,
  SignalCharging,
  WifiCharging,
  BluetoothCharging,
  UsbCharging,
  PlugCharging,
  PowerCharging,
  BatteryFull,
  SignalFull,
  WifiFull,
  BluetoothFull,
  UsbFull,
  PlugFull,
  PowerFull;
} from 'lucide-react';

const $1: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
      icon: Scan,
      title: 'Advanced OCR Technology',
      description: '99% accuracy OCR with support for 100+ languages and handwriting recognition',
      stats: '99% accuracy'},
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process 1000+ documents per hour with instant results and batch processing',
      stats: '1000+ docs/hour'},
    {
      icon: Brain,
      title: 'AI Data Extraction',
      description: 'Intelligent data extraction with smart field recognition and validation',
      stats: 'Smart extraction'},
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption with SOC 2 compliance and audit trails',
      stats: 'SOC 2 compliant'},
    {
      icon: Cloud,
      title: 'Cloud Storage',
      description: 'Secure cloud storage with automatic backup and version control',
      stats: 'Unlimited storage'},
    {
      icon: Globe,
      title: 'API Integration',
      description: 'RESTful API for seamless integration with existing workflows',
      stats: 'RESTful API'}
  ];

  const capabilities = [
    {
      category: 'Document Types',
      items: [,
        'Invoices and receipts',
        'Contracts and agreements',
        'Forms and applications',
        'Business cards',
        'Handwritten notes',
        'Technical drawings',
        'Medical records',
        'Legal documents'
      ]
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [,
        '1,000 scans/month',
        '5 languages',
        'Basic OCR',
        'Cloud storage (10 GB)',
        'Email support',
        'Mobile app access',
        'PDF export',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'},
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [,
        '10,000 scans/month',
        '25 languages',
        'Advanced OCR',
        'Cloud storage (100 GB)',
        'Priority support',
        'API access',
        'Multiple formats',
        'Advanced analytics',
        'Team collaboration',
        'Custom fields'
      ],
      popular: true,
      cta: 'Start Free Trial'},
    {
      name: 'Enterprise'
      price: '$399',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [,
        'Unlimited scans',
        '100+ languages',
        'AI-powered extraction',
        'Unlimited storage',
        '24/7 support',
        'Custom integrations',
        'On-premise deployment',
        'Advanced security',
        'White-label options',
        'Dedicated support'
      ],
      popular: false,
      cta: 'Contact Sales'}
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez'
      role: 'Office Manager',
      company: 'Legal Firm Inc',
      content: 'We process hundreds of legal documents daily. This AI scanner has reduced our processing time by 80% and improved accuracy significantly.',
      rating: 5,
      avatar: 'JM'},
    {
      name: 'David Kim'
      role: 'CFO',
      company: 'Retail Corp',
      content: 'The invoice processing automation has been a game-changer. We can now process thousands of invoices in minutes instead of hours.',
      rating: 5,
      avatar: 'DK'},
    {
      name: 'Lisa Thompson'
      role: 'Operations Director',
      company: 'Healthcare Group',
      content: 'HIPAA compliance was crucial for us. The security features and audit trails give us complete confidence in our document processing.',
      rating: 5,
      avatar: 'LT'}
  ];

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically extract data from invoices, validate information, and integrate with accounting systems',
      icon: FileText,
      benefits: ['90% time reduction', '99% accuracy', 'Auto-validation']
    },
    {
      title: 'Contract Management',
      description: 'Scan and analyze contracts, extract key terms, and track important dates and obligations',
      icon: Shield,
      benefits: ['Risk mitigation', 'Compliance tracking', 'Auto-alerts']
    },
    {
      title: 'Form Processing',
      description: 'Process application forms, surveys, and questionnaires with intelligent data extraction',
      icon: Edit,
      benefits: ['Instant processing', 'Data validation', 'Workflow automation']
    },
    {
      title: 'Receipt Management',
      description: 'Capture and categorize receipts for expense tracking and reimbursement processing',
      icon: Receipt,
      benefits: ['Auto-categorization', 'Expense tracking', 'Tax preparation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">{/* Animated Background */}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} >{/* Floating Particles */}</div>
      </div><div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}><div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}><div className="relative z-10">{/* Header */}</div>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">)
      {/* Animated Background */})</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      {/* Floating Particles */}</div>
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10">
        {/* Header */}</div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-blue-400/30"></div>
              <Scan className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Document Scanner Pro<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">AI Document Scanner Pro<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">Intelligent document scanning with 99% OCR accuracy, AI-powered data extraction, 
      </div><div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div><div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div><div className="relative z-10">{/* Header */}</div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-4 py-2 mb-6 border border-blue-400/30"></div>
              <Scan className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Document Scanner Pro</span><h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">AI Document Scanner Pro</h1><p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">Intelligent document scanning with 99% OCR accuracy, AI-powered data extraction, 
              and seamless integration. Transform your paper documents into digital assets </p>
              with advanced processing capabilities.</p>
              <span className="text-blue-400 font-medium">AI Document Scanner Pro</span>
            </div>
            
            <h1 className="text-5xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              AI Document Scanner Pro;</h1>
            </h1>,
            ,
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">,
              Intelligent document scanning with 99% OCR accuracy, AI-powered data extraction, 
              and seamless integration. Transform your paper documents into digital assets;
              with advanced processing capabilities.
            </p>

            {/* Interactive Demo */}
            <div className="max-w-2xl mx-auto mb-12"></div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"></div>
                <div className="flex items-center justify-center space-x-4 mb-6"></div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${}
                    isScanning ? 'bg-green-500 animate-pulse' : 'bg-blue-500'}
            <div className="max-w-2xl mx-auto mb-12"></div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"></div>
                <div className="flex items-center justify-center space-x-4 mb-6"></div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScanning ? 'bg-green-500 animate-pulse' : 'bg-blue-500'
                  }`}></div>
                    {isScanning ?</div> <Scan className="w-8 h-8 text-white" >: <Upload className="w-8 h-8 text-white" >}</Upload>
                  </Upload>
                  <div className="text-center"></div>
                    <h3 className="text-lg font-semibold mb-2">Try Document Scanning</h3><p className="text-gray-400 text-sm">Upload a document to see AI processing</p>
                  </div>
                </div>
                
                <div className="space-y-4"></div>
                  <div className="border-2 border-dashed border-blue-400/50 rounded-lg p-8 text-center hover: border-blue-400 transition-colors"></div>
                <div className="space-y-4"></div>
                  <div className="border-2 border-dashed border-blue-400/50 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"></div>
                    <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Drag and drop your document here</p><p className="text-sm text-gray-400">or click to browse</p>
                  </div>
                  
                  {isScanning && (
                    <div className="space-y-2"></div>
                      <div className="flex justify-between text-sm text-gray-300"></div>
                        <span>Processing...<span>{scanProgress}%</span>
                  ,
                  {isScanning && (,
                    <div className="space-y-2">,</div>
                      <div className="flex justify-between text-sm text-gray-300">,</div>
                        <span>Processing...</span>,
                        <span>{scanProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2"></div>
                        <div;
                    <div className="space-y-2"></div>
                      <div className="flex justify-between text-sm text-gray-300"></div>
                        <span>Processing...</span><span>{scanProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2"></div>
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        >)}</div>
                  </div>
                  </div><div className="flex space-x-2"></div>
                    <button 
                      onClick={() =>{
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex space-x-2"></div>
                    <button;
                      onClick={() => {
                        setIsScanning(!isScanning);
                        if (!isScanning) {
                          let progress = 0;
                          const interval = setInterval(() => {
                            progress += 10;
                            setScanProgress(progress);
                            if (progress >= 100) {
                              clearInterval(interval);}
                              setIsScanning(false);}
                            }
                          }, 200);
                        }
                      }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    ></button>
                      {isScanning ? 'Processing...' : 'Start Scan'}</button>
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300",
                    >,
                      {isScanning ? 'Processing...' : 'Start Scan'}
                    </button>
                    <button className="flex-1 bg-slate-700 hover: bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors">
                      <Settings className="w-4 h-4 mx-auto" />
                    </button>
                  </div>,
                </div>,
              </div>,
            </div>,
,
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">Start Free Trial</button>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"></butto>
                <Play className="w-5 h-5 mr-2" >Watch Demo</Pla>
              </Play>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <feature.icon className="w-6 h-6 text-white" />
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex items-center">
                Start Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo;
              </button>
            </div>,
          </div>,
,
          {/* Features Grid */}
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8 mb-20">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover: border-blue-400/40 transition-all duration-300 group">,</div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">,</div>
                  <feature.icon className="w-6 h-6 text-white" />,
                </div>,
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-3">{feature.description}</p><div className="text-blue-400 font-semibold text-sm">{feature.stats}</div>
              </div>
            ))}
          </div>

          {/* Use Cases */}
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Real-World Use Cases<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{useCases.map((useCase, index) => (</div>
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Real-World Use Cases</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{useCases.map((useCase, index) => (</div>
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                    <useCase.icon className="w-6 h-6 text-white" />
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Real-World Use Cases;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {useCases.map((useCase, index) => (</div>
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20 hover: border-purple-400/40 transition-all duration-300 group">,</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">,</div>
                    <useCase.icon className="w-6 h-6 text-white" />,
                  </div>,
                  <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p><div className="space-y-1">{useCase.benefits.map((benefit, benefitIndex) => (</div>
                      <div key={benefitIndex} className="flex items-center text-sm text-purple-400"></div>
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Powerful Capabilities<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{capabilities.map((category, index) => (</div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Powerful Capabilities;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {capabilities.map((category, index) => (</div>
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"></div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}<ul className="space-y-2">{category.items.map((item, itemIndex) => (</ul>
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Powerful Capabilities</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{capabilities.map((category, index) => (</div>
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"></div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3><ul className="space-y-2">{category.items.map((item, itemIndex) => (</ul>
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Simple, Transparent Pricing<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-blue-400 shadow-lg shadow-blue-400/25' : 'border-gray-600'
                }`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Simple, Transparent Pricing;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (</div>
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover: scale-105 ${}
                  plan.popular ? 'border-blue-400 shadow-lg shadow-blue-400/25' : 'border-gray-600'}
                }`}>
                  {plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular;</div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white' 
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}>{plan.cta}</button>
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover: from-blue-600 hover:to-purple-700 text-white' }
                      : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'}
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">What Our Users Say<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              What Our Users Say;
            </h2>
            
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {testimonials.map((testimonial, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"></div>
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center"></div>
          <div className="mb-20"></div>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">What Our Users Say</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20"></div>
                  <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">{testimonial.avatar}</div>
                    </div>
                    <div></div>
                      <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-12 border border-blue-400/30"></div>
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Digitize Your Documents?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of businesses that have transformed their document processing with AI Document Scanner Pro.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">Start Your Free Trial</button>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"></butto>
                <Phone className="w-5 h-5 mr-2" >Contact Sales</Phon>
              </Phone>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                Start Your Free Trial;
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
