'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  ArrowRight,
  Sparkles,
  Database,
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  BarChart3,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck,
  Smartphone,
  ChefHat,
  Rocket,
  Sprout,
  Scale
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
    setSidebarOpen(false);
  };

  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI', icon: '🥽', popular: true },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
<<<<<<< HEAD
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true }
=======
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true }
>>>>>>> cursor/website-audit-and-update-with-deployment-006d
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
<<<<<<< HEAD
        { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing', description: 'Revolutionary quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced AI with persistent memory', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'AI-powered climate monitoring', icon: '🌍', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical AI research', icon: '💊', popular: false },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true }
=======
        { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing', description: 'Revolutionary quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Autonomous Vehicle Systems', path: '/ai-autonomous-systems', description: 'Advanced autonomous technology', icon: '🚗', popular: true },
        { name: 'AI Space Exploration Platform', path: '/ai-space-technology-pro', description: 'Space mission optimization', icon: '🚀', popular: true },
        { name: 'AI Climate Intelligence', path: '/ai-climate-solutions-pro', description: 'Environmental monitoring', icon: '🌍', popular: true },
        { name: 'AI Drug Discovery Platform', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical research', icon: '💊', popular: true },
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'Business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 support', icon: '🤖', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'ML-powered analytics', icon: '📊', popular: true }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true }
>>>>>>> cursor/website-audit-and-update-with-deployment-006d
=======
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical research acceleration', icon: '🧬', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental monitoring & optimization', icon: '🌍', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration & satellite management', icon: '🚀', popular: true },
        { name: 'AI Financial Crime Detection', path: '/ai-financial-crime-detection-pro', description: 'Real-time fraud detection', icon: '🛡️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnostics', icon: '🏥', popular: true },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Image recognition & analysis', icon: '👁️', popular: true },
        { name: 'AI Machine Learning', path: '/ai-ml-platform', description: 'ML model development & deployment', icon: '🤖', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Quantum algorithms & computing', icon: '⚛️', popular: false },
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
<<<<<<< HEAD
        { name: 'AI-Powered Infrastructure Management', path: '/ai-infrastructure', description: 'Intelligent infrastructure optimization', icon: '🤖', popular: true },
        { name: 'Quantum-Safe Security Implementation', path: '/quantum-security', description: 'Future-proof security solutions', icon: '🔐', popular: true },
        { name: 'Edge Computing Infrastructure', path: '/edge-computing', description: 'Distributed computing for IoT', icon: '📡', popular: true },
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
<<<<<<< HEAD
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
<<<<<<< HEAD
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: true },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: true },
        { name: 'Edge Computing Solutions', path: '/edge-computing', description: 'Low-latency edge infrastructure', icon: '📡', popular: true },
        { name: '5G Network Implementation', path: '/5g-implementation', description: 'High-speed 5G networks', icon: '📶', popular: false },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Comprehensive IoT solutions', icon: '🌐', popular: true },
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: false }
=======
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: true },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: true },
        { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services', path: '/blockchain-integration-services', description: 'Web3 and blockchain solutions', icon: '⛓️', popular: true },
        { name: 'AI API Management', path: '/ai-api-management', description: 'Intelligent API management', icon: '🔗', popular: true },
        { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true }
>>>>>>> cursor/website-audit-and-update-with-deployment-006d
=======
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration with zero downtime', icon: '☁️', popular: true },
        { name: 'Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🔒', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support', path: '/it-support', description: 'Round-the-clock technical support', icon: '🛠️', popular: true },
        { name: 'Custom Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Automated deployment pipelines', icon: '🔄', popular: true },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization & maintenance', icon: '🗄️', popular: true },
        { name: 'Network Design', path: '/network-design', description: 'Secure network architecture', icon: '🌐', popular: false },
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', icon: '🔄', popular: true },
<<<<<<< HEAD
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', icon: '🧪', popular: false }
=======
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D holographic interfaces', icon: '🥽', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Cognitive enhancement AI', icon: '🧠', popular: true },
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum financial predictions', icon: '⚛️', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌍', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical AI research', icon: '💊', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: false },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: false }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', icon: '🧪', popular: true },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🔍', popular: true },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain', icon: '📦', popular: true },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy solutions', icon: '⚡', popular: true },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming solutions', icon: '🌾', popular: true }
>>>>>>> cursor/website-audit-and-update-with-deployment-006d
=======
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Quantum algorithms & computing', icon: '⚛️', popular: false },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating intelligent systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized applications & smart contracts', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices & edge processing', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive reality experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Intelligent urban infrastructure', icon: '🏙️', popular: false },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization & automation', icon: '🔄', popular: true },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and experimental technologies', icon: '🧪', popular: false },
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
      ]
    }
  ];

  const mainLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Pricing', path: '/pricing', icon: BarChart },
    { name: 'Case Studies', path: '/case-studies', icon: FileText },
    { name: 'Blog', path: '/blog', icon: MessageSquare },
    { name: 'Contact', path: '/contact', icon: Phone }
  ];

  return (
<<<<<<< HEAD
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
=======
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow' : 'bg-transparent'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
    }`}>
=======
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-006d
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold group"
            onClick={closeAllMenus}
          >
<<<<<<< HEAD
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 rotate-slow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white cyber-text font-bold">
=======
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold cyber-text">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
<<<<<<< HEAD
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow-cyan"
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-text"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Pricing
=======
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
                <span className="text-cyan-400 text-xs font-medium">AI & IT Solutions</span>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
            </Link>
            <Link 
              to="/team" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Team
            </Link>
            <Link 
              to="/careers" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
              onClick={closeAllMenus}
            >
              Careers
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Main Links */}
              <div className="flex items-center space-x-6">
                {mainLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
                    onClick={closeAllMenus}
                  >
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>

<<<<<<< HEAD
            <Link 
              to="/case-studies" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            
<<<<<<< HEAD
            {/* CTA Button */}
            <Link
              to="/contact"
<<<<<<< HEAD
              className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button neon-glow"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
              onClick={closeAllMenus}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
=======
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/demo"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Demo
              </Link>
              <Link
                to="/consultation"
                className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                onClick={closeAllMenus}
              >
                Consultation
              </Link>
              <Link
                to="/contact"
                className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
                onClick={closeAllMenus}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-006d
          </div>

          {/* Mobile Menu Buttons */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Open sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Services
              </Link>
              <Link 
                to="/pricing" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>
              <Link 
                to="/team" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Team
              </Link>
              <Link 
                to="/careers" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Careers
              </Link>

              {/* Mobile Services */}
              <div>
=======
              {/* Services Dropdown */}
              <div className="relative group">
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
                <button
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium flex items-center space-x-1"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Services Dropdown Menu */}
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceCategories.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="space-y-3">
                            <div className="flex items-center space-x-2 mb-3">
                              <category.icon className={`w-5 h-5 ${category.color}`} />
                              <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                            </div>
                            <div className="space-y-2">
                              {category.services.slice(0, 4).map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  to={service.path}
                                  className={`block p-2 rounded-lg transition-all duration-200 ${category.hoverColor} group`}
                                  onClick={closeAllMenus}
                                >
                                  <div className="flex items-start space-x-2">
                                    <span className="text-lg">{service.icon}</span>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-1">
                                        <span className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
                                          {service.name}
                                        </span>
                                        {service.popular && (
                                          <span className="px-1.5 py-0.5 bg-orange-500 text-white text-xs rounded-full">
                                            Popular
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            {category.services.length > 4 && (
                              <Link
                                to={`/services#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors flex items-center space-x-1"
                                onClick={closeAllMenus}
                              >
                                <span>View all {category.title}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/contact"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  onClick={closeAllMenus}
                >
                  Contact
                </Link>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                  onClick={closeAllMenus}
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-300 hover:text-white transition-colors p-2"
              >
<<<<<<< HEAD
                Case Studies
              </Link>
              <Link
                to="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="space-y-3 mt-4">
                <Link
                  to="/demo"
                  className="block border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                  onClick={closeAllMenus}
                >
                  View Demo
                </Link>
                <Link
                  to="/consultation"
                  className="block border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-6 py-3 rounded-lg font-medium transition-colors text-center"
                  onClick={closeAllMenus}
                >
                  Free Consultation
                </Link>
                <Link
                  to="/contact"
                  className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
=======
                <Menu className="w-6 h-6" />
              </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-f31a
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Navigation;