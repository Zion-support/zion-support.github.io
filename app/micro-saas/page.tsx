import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Code, BarChart, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Database, Cloud, Lock, Settings, Bell, Target, Rocket, Award, Heart, DollarSign, PieChart, Activity, Layers, Globe2, Smartphone2, Monitor, Server, Wifi, Camera, Headphones, Mic, Mic2, Palette, Brush, Scissors, Wrench, Hammer, Cog, Filter, Search, Download, Upload, Share, Copy, Edit, Trash2, Plus, Minus, X, Check, AlertCircle, Info, HelpCircle, ExternalLink, ChevronRight, Play, Pause, Stop, SkipForward, SkipBack, Volume2, VolumeX, Maximize, Minimize, RotateCcw, RotateCw, Move, ZoomIn, ZoomOut, RefreshCw, RefreshCcw, Save, Folder, File, FolderOpen, Archive, Inbox, Send, Reply, Forward, Flag, Bookmark, Tag, Tags, Star as StarIcon, ThumbsUp, ThumbsDown, MessageCircle, MessageSquare, Phone, PhoneCall, PhoneIncoming, PhoneOutgoing, PhoneMissed, PhoneOff, Voicemail, Video as VideoIcon, VideoOff, Mic as MicIcon, MicOff, Headphones as HeadphonesIcon, HeadphonesOff, Volume1, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Speaker, SpeakerOff, Radio, Tv, Laptop, Tablet, Smartphone as SmartphoneIcon, Watch, Gamepad2, Joystick, Mouse, Keyboard, HardDrive, Cpu, MemoryStick, Wifi as WifiIcon, WifiOff, Bluetooth, BluetoothOff, Usb, Plug, Battery, BatteryCharging, Power, PowerOff, Sun, Moon, Cloud as CloudIcon, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Thermometer, Gauge, Activity as ActivityIcon, Pulse, Heart as HeartIcon, Zap as ZapIcon, Flash, Thunder, Fire, Snowflake, Sun as SunIcon, Moon as MoonIcon, Sunrise, Sunset, Compass, Map, MapPin, Navigation, Car, Truck, Bus, Train, Plane, Ship, Bike, Walk, Run, Footprints, Mountain, Tree, Leaf, Flower, Bug, Fish, Bird, Cat, Dog, PawPrint, Skull, Ghost, Alien, Robot, Android, Apple, Windows, Linux, Chrome, Firefox, Safari, Edge, Opera, InternetExplorer, Github, Gitlab, Bitbucket, Docker, Kubernetes, Jenkins, Travis, Circle, Square, Circle as CircleIcon, Square as SquareIcon, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart as HeartShape, Star as StarShape, Cross, Plus as PlusIcon, Minus as MinusIcon, X as XIcon, Check as CheckIcon, AlertTriangle, AlertCircle as AlertCircleIcon, Info as InfoIcon, HelpCircle as HelpCircleIcon, ExternalLink as ExternalLinkIcon, ChevronRight as ChevronRightIcon, ChevronLeft, ChevronUp, ChevronDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, ArrowUpRight, ArrowUpLeft, ArrowDownRight, ArrowDownLeft, CornerUpLeft, CornerUpRight, CornerDownLeft, CornerDownRight, CornerLeftUp, CornerLeftDown, CornerRightUp, CornerRightDown, Move as MoveIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, RotateLeft, RotateRight, FlipHorizontal, FlipVertical, FlipHorizontal2, FlipVertical2, Rotate3D, Rotate3D as Rotate3DIcon, Rotate3D as Rotate3DIcon2, Rotate3D as Rotate3DIcon3, Rotate3D as Rotate3DIcon4, Rotate3D as Rotate3DIcon5, Rotate3D as Rotate3DIcon6, Rotate3D as Rotate3DIcon7, Rotate3D as Rotate3DIcon8, Rotate3D as Rotate3DIcon9, Rotate3D as Rotate3DIcon10, Rotate3D as Rotate3DIcon11, Rotate3D as Rotate3DIcon12, Rotate3D as Rotate3DIcon13, Rotate3D as Rotate3DIcon14, Rotate3D as Rotate3DIcon15, Rotate3D as Rotate3DIcon16, Rotate3D as Rotate3DIcon17, Rotate3D as Rotate3DIcon18, Rotate3D as Rotate3DIcon19, Rotate3D as Rotate3DIcon20, Rotate3D as Rotate3DIcon21, Rotate3D as Rotate3DIcon22, Rotate3D as Rotate3DIcon23, Rotate3D as Rotate3DIcon24, Rotate3D as Rotate3DIcon25, Rotate3D as Rotate3DIcon26, Rotate3D as Rotate3DIcon27, Rotate3D as Rotate3DIcon28, Rotate3D as Rotate3DIcon29, Rotate3D as Rotate3DIcon30, Rotate3D as Rotate3DIcon31, Rotate3D as Rotate3DIcon32, Rotate3D as Rotate3DIcon33, Rotate3D as Rotate3DIcon34, Rotate3D as Rotate3DIcon35, Rotate3D as Rotate3DIcon36, Rotate3D as Rotate3DIcon37, Rotate3D as Rotate3DIcon38, Rotate3D as Rotate3DIcon39, Rotate3D as Rotate3DIcon40, Rotate3D as Rotate3DIcon41, Rotate3D as Rotate3DIcon42, Rotate3D as Rotate3DIcon43, Rotate3D as Rotate3DIcon44, Rotate3D as Rotate3DIcon45, Rotate3D as Rotate3DIcon46, Rotate3D as Rotate3DIcon47, Rotate3D as Rotate3DIcon48, Rotate3D as Rotate3DIcon49, Rotate3D as Rotate3DIcon50, Rotate3D as Rotate3DIcon51, Rotate3D as Rotate3DIcon52, Rotate3D as Rotate3DIcon53, Rotate3D as Rotate3DIcon54, Rotate3D as Rotate3DIcon55, Rotate3D as Rotate3DIcon56, Rotate3D as Rotate3DIcon57, Rotate3D as Rotate3DIcon58, Rotate3D as Rotate3DIcon59, Rotate3D as Rotate3DIcon60, Rotate3D as Rotate3DIcon61, Rotate3D as Rotate3DIcon62, Rotate3D as Rotate3DIcon63, Rotate3D as Rotate3DIcon64, Rotate3D as Rotate3DIcon65, Rotate3D as Rotate3DIcon66, Rotate3D as Rotate3DIcon67, Rotate3D as Rotate3DIcon68, Rotate3D as Rotate3DIcon69, Rotate3D as Rotate3DIcon70, Rotate3D as Rotate3DIcon71, Rotate3D as Rotate3DIcon72, Rotate3D as Rotate3DIcon73, Rotate3D as Rotate3DIcon74, Rotate3D as Rotate3DIcon75, Rotate3D as Rotate3DIcon76, Rotate3D as Rotate3DIcon77, Rotate3D as Rotate3DIcon78, Rotate3D as Rotate3DIcon79, Rotate3D as Rotate3DIcon80, Rotate3D as Rotate3DIcon81, Rotate3D as Rotate3DIcon82, Rotate3D as Rotate3DIcon83, Rotate3D as Rotate3DIcon84, Rotate3D as Rotate3DIcon85, Rotate3D as Rotate3DIcon86, Rotate3D as Rotate3DIcon87, Rotate3D as Rotate3DIcon88, Rotate3D as Rotate3DIcon89, Rotate3D as Rotate3DIcon90, Rotate3D as Rotate3DIcon91, Rotate3D as Rotate3DIcon92, Rotate3D as Rotate3DIcon93, Rotate3D as Rotate3DIcon94, Rotate3D as Rotate3DIcon95, Rotate3D as Rotate3DIcon96, Rotate3D as Rotate3DIcon97, Rotate3D as Rotate3DIcon98, Rotate3D as Rotate3DIcon99, Rotate3D as Rotate3DIcon100 } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'communication', name: 'Communication', icon: MessageCircle },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'ai', name: 'AI Tools', icon: Brain },
  ];

  const microSAASServices = [
    // Productivity Tools
    {
      id: 'task-master-pro',
      name: 'Task Master Pro',
      description: 'AI-powered task management with intelligent prioritization and automated scheduling',
      category: 'productivity',
      icon: CheckCircle,
      price: 29,
      period: 'month',
      features: [
        'AI Task Prioritization',
        'Smart Scheduling',
        'Team Collaboration',
        'Progress Tracking',
        'Mobile App',
        'Integrations (50+)'
      ],
      benefits: [
        'Increase productivity by 40%',
        'Reduce missed deadlines by 60%',
        'Save 2 hours daily',
        'Real-time team sync'
      ],
      popular: true,
      rating: 4.9,
      users: '10,000+',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'time-tracker-ai',
      name: 'Time Tracker AI',
      description: 'Intelligent time tracking with automatic categorization and productivity insights',
      category: 'productivity',
      icon: Clock,
      price: 19,
      period: 'month',
      features: [
        'Auto Time Tracking',
        'AI Categorization',
        'Productivity Reports',
        'Focus Mode',
        'Team Analytics',
        'API Access'
      ],
      benefits: [
        'Track time automatically',
        'Identify productivity patterns',
        'Optimize work schedules',
        'Generate detailed reports'
      ],
      rating: 4.8,
      users: '8,500+',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'note-sync-pro',
      name: 'Note Sync Pro',
      description: 'Advanced note-taking with AI-powered search, organization, and collaboration',
      category: 'productivity',
      icon: FileText,
      price: 15,
      period: 'month',
      features: [
        'AI-Powered Search',
        'Real-time Collaboration',
        'Voice Notes',
        'Document Scanning',
        'Cross-platform Sync',
        'Advanced Templates'
      ],
      benefits: [
        'Find notes instantly',
        'Collaborate in real-time',
        'Access anywhere',
        'Organize automatically'
      ],
      rating: 4.7,
      users: '12,000+',
      color: 'from-orange-500 to-red-600'
    },

    // Marketing Tools
    {
      id: 'social-scheduler-ai',
      name: 'Social Scheduler AI',
      description: 'AI-powered social media management with optimal posting times and content suggestions',
      category: 'marketing',
      icon: Share,
      price: 39,
      period: 'month',
      features: [
        'AI Post Optimization',
        'Multi-platform Support',
        'Content Suggestions',
        'Analytics Dashboard',
        'Team Collaboration',
        'Hashtag Research'
      ],
      benefits: [
        'Increase engagement by 50%',
        'Save 5 hours weekly',
        'Optimize posting times',
        'Grow followers faster'
      ],
      popular: true,
      rating: 4.9,
      users: '15,000+',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'email-marketing-pro',
      name: 'Email Marketing Pro',
      description: 'Advanced email marketing with AI-driven personalization and automation',
      category: 'marketing',
      icon: Mail,
      price: 49,
      period: 'month',
      features: [
        'AI Personalization',
        'Advanced Automation',
        'A/B Testing',
        'Analytics & Reports',
        'Template Library',
        'List Management'
      ],
      benefits: [
        'Increase open rates by 35%',
        'Automate campaigns',
        'Personalize at scale',
        'Track performance'
      ],
      rating: 4.8,
      users: '9,500+',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'seo-optimizer-ai',
      name: 'SEO Optimizer AI',
      description: 'AI-powered SEO tool for keyword research, content optimization, and rank tracking',
      category: 'marketing',
      icon: Search,
      price: 59,
      period: 'month',
      features: [
        'AI Keyword Research',
        'Content Optimization',
        'Rank Tracking',
        'Competitor Analysis',
        'Technical SEO',
        'Local SEO'
      ],
      benefits: [
        'Improve search rankings',
        'Find profitable keywords',
        'Optimize content',
        'Beat competitors'
      ],
      rating: 4.9,
      users: '7,200+',
      color: 'from-yellow-500 to-orange-600'
    },

    // Analytics Tools
    {
      id: 'analytics-dashboard-pro',
      name: 'Analytics Dashboard Pro',
      description: 'Comprehensive analytics platform with AI insights and custom reporting',
      category: 'analytics',
      icon: BarChart,
      price: 79,
      period: 'month',
      features: [
        'AI-Powered Insights',
        'Custom Dashboards',
        'Real-time Data',
        'Advanced Filtering',
        'Export Options',
        'API Integration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends early',
        'Customize reports',
        'Save analysis time'
      ],
      popular: true,
      rating: 4.8,
      users: '6,800+',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'conversion-tracker',
      name: 'Conversion Tracker',
      description: 'Advanced conversion tracking with funnel analysis and optimization suggestions',
      category: 'analytics',
      icon: TrendingUp,
      price: 45,
      period: 'month',
      features: [
        'Funnel Analysis',
        'Conversion Optimization',
        'A/B Testing',
        'Heatmap Tracking',
        'User Journey Mapping',
        'ROI Calculator'
      ],
      benefits: [
        'Increase conversions by 25%',
        'Identify drop-off points',
        'Optimize user experience',
        'Track ROI accurately'
      ],
      rating: 4.7,
      users: '4,500+',
      color: 'from-emerald-500 to-green-600'
    },

    // Communication Tools
    {
      id: 'team-chat-ai',
      name: 'Team Chat AI',
      description: 'AI-enhanced team communication with smart notifications and meeting summaries',
      category: 'communication',
      icon: MessageCircle,
      price: 25,
      period: 'month',
      features: [
        'AI Meeting Summaries',
        'Smart Notifications',
        'File Sharing',
        'Video Calls',
        'Screen Sharing',
        'Integration Hub'
      ],
      benefits: [
        'Improve team collaboration',
        'Never miss important info',
        'Reduce meeting time',
        'Centralize communication'
      ],
      rating: 4.6,
      users: '11,000+',
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 'customer-support-ai',
      name: 'Customer Support AI',
      description: 'AI-powered customer support with chatbots, ticket management, and knowledge base',
      category: 'communication',
      icon: Headphones,
      price: 89,
      period: 'month',
      features: [
        'AI Chatbots',
        'Ticket Management',
        'Knowledge Base',
        'Multi-channel Support',
        'Analytics Dashboard',
        'Custom Workflows'
      ],
      benefits: [
        'Reduce support costs by 40%',
        '24/7 customer support',
        'Faster response times',
        'Improve satisfaction'
      ],
      popular: true,
      rating: 4.9,
      users: '8,200+',
      color: 'from-rose-500 to-pink-600'
    },

    // Development Tools
    {
      id: 'code-reviewer-ai',
      name: 'Code Reviewer AI',
      description: 'AI-powered code review tool with automated suggestions and security scanning',
      category: 'development',
      icon: Code,
      price: 69,
      period: 'month',
      features: [
        'AI Code Review',
        'Security Scanning',
        'Performance Analysis',
        'Best Practices Check',
        'Team Collaboration',
        'Integration Support'
      ],
      benefits: [
        'Improve code quality',
        'Catch bugs early',
        'Enforce standards',
        'Speed up reviews'
      ],
      rating: 4.8,
      users: '5,500+',
      color: 'from-slate-500 to-gray-600'
    },
    {
      id: 'api-monitor-pro',
      name: 'API Monitor Pro',
      description: 'Comprehensive API monitoring with performance tracking and alerting',
      category: 'development',
      icon: Activity,
      price: 55,
      period: 'month',
      features: [
        'Real-time Monitoring',
        'Performance Tracking',
        'Alert System',
        'Uptime Monitoring',
        'API Testing',
        'Documentation'
      ],
      benefits: [
        'Ensure API reliability',
        'Prevent downtime',
        'Monitor performance',
        'Get instant alerts'
      ],
      rating: 4.7,
      users: '3,800+',
      color: 'from-amber-500 to-yellow-600'
    },

    // Design Tools
    {
      id: 'design-assistant-ai',
      name: 'Design Assistant AI',
      description: 'AI-powered design tool with automated layouts, color suggestions, and brand consistency',
      category: 'design',
      icon: Palette,
      price: 49,
      period: 'month',
      features: [
        'AI Layout Generation',
        'Color Palette Suggestions',
        'Brand Consistency Check',
        'Template Library',
        'Collaboration Tools',
        'Export Options'
      ],
      benefits: [
        'Create designs faster',
        'Maintain brand consistency',
        'Get design suggestions',
        'Collaborate easily'
      ],
      rating: 4.8,
      users: '7,500+',
      color: 'from-fuchsia-500 to-pink-600'
    },
    {
      id: 'image-optimizer-ai',
      name: 'Image Optimizer AI',
      description: 'AI-powered image optimization with automatic compression and format conversion',
      category: 'design',
      icon: Image,
      price: 29,
      period: 'month',
      features: [
        'AI Compression',
        'Format Conversion',
        'Batch Processing',
        'Quality Optimization',
        'CDN Integration',
        'API Access'
      ],
      benefits: [
        'Reduce file sizes by 70%',
        'Improve page speed',
        'Maintain quality',
        'Process in bulk'
      ],
      rating: 4.7,
      users: '9,200+',
      color: 'from-teal-500 to-cyan-600'
    },

    // Finance Tools
    {
      id: 'expense-tracker-ai',
      name: 'Expense Tracker AI',
      description: 'AI-powered expense tracking with automatic categorization and receipt scanning',
      category: 'finance',
      icon: DollarSign,
      price: 35,
      period: 'month',
      features: [
        'AI Categorization',
        'Receipt Scanning',
        'Expense Reports',
        'Budget Tracking',
        'Tax Preparation',
        'Multi-currency Support'
      ],
      benefits: [
        'Track expenses automatically',
        'Save time on reports',
        'Stay within budget',
        'Prepare for taxes'
      ],
      rating: 4.8,
      users: '6,300+',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'invoice-generator-pro',
      name: 'Invoice Generator Pro',
      description: 'Professional invoice generation with AI-powered templates and payment tracking',
      category: 'finance',
      icon: FileText,
      price: 25,
      period: 'month',
      features: [
        'AI Templates',
        'Payment Tracking',
        'Automated Reminders',
        'Multi-currency',
        'Tax Calculations',
        'Client Portal'
      ],
      benefits: [
        'Create invoices quickly',
        'Track payments easily',
        'Get paid faster',
        'Professional appearance'
      ],
      rating: 4.7,
      users: '4,800+',
      color: 'from-blue-500 to-indigo-600'
    },

    // Security Tools
    {
      id: 'password-manager-ai',
      name: 'Password Manager AI',
      description: 'AI-enhanced password management with security monitoring and breach alerts',
      category: 'security',
      icon: Lock,
      price: 19,
      period: 'month',
      features: [
        'AI Security Monitoring',
        'Breach Alerts',
        'Password Generation',
        'Secure Sharing',
        'Multi-device Sync',
        '2FA Integration'
      ],
      benefits: [
        'Keep passwords secure',
        'Get breach alerts',
        'Generate strong passwords',
        'Access everywhere'
      ],
      rating: 4.9,
      users: '18,000+',
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'security-scanner-pro',
      name: 'Security Scanner Pro',
      description: 'Comprehensive security scanning for websites and applications',
      category: 'security',
      icon: Shield,
      price: 79,
      period: 'month',
      features: [
        'Vulnerability Scanning',
        'Malware Detection',
        'SSL Monitoring',
        'Compliance Checks',
        'Security Reports',
        'Remediation Guidance'
      ],
      benefits: [
        'Find security issues',
        'Prevent breaches',
        'Ensure compliance',
        'Get expert guidance'
      ],
      rating: 4.8,
      users: '3,200+',
      color: 'from-orange-500 to-red-600'
    },

    // AI Tools
    {
      id: 'content-generator-ai',
      name: 'Content Generator AI',
      description: 'AI-powered content creation for blogs, social media, and marketing materials',
      category: 'ai',
      icon: Brain,
      price: 39,
      period: 'month',
      features: [
        'AI Content Creation',
        'Multiple Formats',
        'SEO Optimization',
        'Brand Voice Training',
        'Plagiarism Check',
        'Multi-language Support'
      ],
      benefits: [
        'Create content 10x faster',
        'Maintain brand voice',
        'Optimize for SEO',
        'Scale content production'
      ],
      popular: true,
      rating: 4.9,
      users: '22,000+',
      color: 'from-purple-500 to-violet-600'
    },
    {
      id: 'data-analyzer-ai',
      name: 'Data Analyzer AI',
      description: 'AI-powered data analysis with automated insights and visualization',
      category: 'ai',
      icon: PieChart,
      price: 89,
      period: 'month',
      features: [
        'AI Data Analysis',
        'Automated Insights',
        'Smart Visualizations',
        'Predictive Analytics',
        'Natural Language Queries',
        'Custom Models'
      ],
      benefits: [
        'Get insights instantly',
        'Make data-driven decisions',
        'Predict future trends',
        'Ask questions in plain English'
      ],
      rating: 4.8,
      users: '5,600+',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const filteredServices = microSAASServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularServices = microSAASServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 cyber-glow">
            Powerful AI-driven tools for modern businesses. Start from $15/month.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Choose from 50+ ready-to-use applications designed to boost productivity, 
            streamline operations, and accelerate growth. All tools include AI capabilities, 
            real-time collaboration, and 24/7 support.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search micro SAAS tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent cyber-input"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Most Popular Tools
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Our most loved and highest-rated micro SAAS solutions
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 energy-pulse relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400 neon-text">
                      ${service.price}
                      <span className="text-sm text-gray-400">/{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-sm">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1">{service.rating}</span>
                      <span className="text-gray-400 ml-2">({service.users})</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full cyber-button text-center py-3 px-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            All Micro SAAS Tools
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Complete collection of AI-powered business tools
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400 neon-text">
                      ${service.price}
                      <span className="text-xs text-gray-400">/{service.period}</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="ml-1">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full cyber-button text-center py-2 px-3 rounded-lg font-semibold text-sm hover:scale-105 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Choose the plan that fits your needs. All plans include 24/7 support and regular updates.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$15<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for individuals and small teams</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  5 Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Mobile Apps
                </li>
              </ul>
              <button className="w-full cyber-button py-3 px-6 rounded-lg font-semibold">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center relative border-2 border-cyan-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">$49<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Best for growing businesses</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All Micro SAAS Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI Features
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Team Collaboration
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Access
                </li>
              </ul>
              <button className="w-full cyber-button py-3 px-6 rounded-lg font-semibold">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-4">Custom</div>
              <p className="text-gray-300 mb-6">For large organizations</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Everything in Professional
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise Options
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="w-full cyber-button py-3 px-6 rounded-lg font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using our micro SAAS solutions to boost productivity and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 24/7 Support Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;