'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Sidebar from './Sidebar';
import MobileNavigation from './MobileNavigation';
=======
import Search from './Search';
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-04b6
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
  Search as SearchIcon,
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
  Scale,
  Mic,
  FlaskConical
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

<<<<<<< HEAD
  const closeAllMenus = () => {
    setServicesOpen(false);
    setIsOpen(false);
    setSidebarOpen(false);
  };

  const serviceCategories = [
    {
<<<<<<< HEAD
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
<<<<<<< HEAD
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial predictions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced cognitive enhancement', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: '3D workspace with holographic UI', icon: '🥽', popular: true },
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Financial Advisor', path: '/ai-financial-advisor', description: 'Personalized financial planning', icon: '💰', popular: false },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Visual workflow builder', icon: '⚡', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        { name: 'AI Voice Assistant Pro', path: '/ai-voice-assistant', description: 'Advanced voice AI with NLP', icon: '🎤', popular: true },
        { name: 'AI Document Scanner Pro', path: '/ai-document-scanner', description: 'Intelligent document processing', icon: '📄', popular: true },
        { name: 'AI Meeting Transcriber Pro', path: '/ai-meeting-transcriber', description: 'Real-time meeting transcription', icon: '📝', popular: true },
        { name: 'AI Website Builder Pro', path: '/ai-website-builder', description: 'AI-powered website creation', icon: '🌐', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-deac
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d0c2
=======
        { name: 'AI Smart Calendar', path: '/ai-smart-calendar', description: 'Intelligent scheduling and time management', icon: '📅', popular: true },
        { name: 'AI Content Writer', path: '/ai-content-writer', description: 'Advanced content generation', icon: '✍️', popular: true },
        { name: 'AI Video Generator', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: true },
        { name: 'AI CRM Assistant', path: '/ai-crm-assistant', description: 'Intelligent customer relationship management', icon: '👥', popular: true },
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum-powered financial analysis', icon: '⚛️', popular: true },
        { name: 'AI 3D Generation Studio', path: '/ai-3d-generation', description: 'AI-powered 3D model generation', icon: '🎨', popular: true },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-powered mobile app development', icon: '📱', popular: true },
        { name: 'AI Logo Designer Pro', path: '/ai-logo-designer', description: 'AI-powered logo design', icon: '🎨', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Next-gen financial intelligence', icon: '💰', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Revolutionary drug discovery', icon: '💊', popular: true },
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', description: 'Quantum computing cloud', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Personal AI memory', icon: '🧠', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
=======
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project planning with predictive analytics', icon: '📊', popular: true },
        { name: 'AI Smart Calendar Pro', path: '/ai-smart-calendar', description: 'AI-powered calendar management', icon: '📅', popular: true },
        { name: 'AI Video Generator Pro', path: '/ai-video-generator', description: 'Create professional videos with AI', icon: '🎥', popular: true },
        { name: 'AI Password Manager Pro', path: '/ai-password-manager', description: 'Ultra-secure password management', icon: '🔒', popular: true },
        { name: 'AI Expense Tracker Pro', path: '/ai-expense-tracker', description: 'Smart expense tracking with AI', icon: '💰', popular: true },
        { name: 'AI Invoice Generator Pro', path: '/ai-invoice-generator', description: 'Automated invoice creation', icon: '📄', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
<<<<<<< HEAD
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
        { name: 'AI Workflow Automation Platform', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support Suite', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Data Analytics Platform', path: '/ai-data-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Content Generation Studio', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
<<<<<<< HEAD
=======
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'AI Quantum Computing Platform', path: '/ai-quantum-computing', description: 'Revolutionary quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced AI with persistent memory', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'AI-powered climate monitoring', icon: '🌍', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical AI research', icon: '💊', popular: false },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true }
=======
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
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d0c2
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Advanced pharmaceutical AI', icon: '💊', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true }
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical research acceleration', icon: '🧬', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental monitoring & optimization', icon: '🌍', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration & satellite management', icon: '🚀', popular: true },
        { name: 'AI Financial Crime Detection', path: '/ai-financial-crime-detection-pro', description: 'Real-time fraud detection', icon: '🛡️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnostics', icon: '🏥', popular: true },
        { name: 'AI Computer Vision', path: '/ai-computer-vision', description: 'Image recognition & analysis', icon: '👁️', popular: true },
        { name: 'AI Machine Learning', path: '/ai-ml-platform', description: 'ML model development & deployment', icon: '🤖', popular: true },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Quantum algorithms & computing', icon: '⚛️', popular: false },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-deac
=======
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Pharmaceutical AI research', icon: '💊', popular: true },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Advanced AI with persistent memory', icon: '🧠', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true }
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d0c2
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
        { name: 'AI Fashion Design Studio', path: '/ai-fashion-design', description: 'AI-powered fashion design', icon: '👗', popular: true },
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: true },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration AI', icon: '🚀', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
        { name: 'AI Computer Vision Platform', path: '/ai-computer-vision', description: 'Advanced image recognition', icon: '👁️', popular: false },
        { name: 'AI Machine Learning Platform', path: '/ai-ml-platform', description: 'Complete ML platform', icon: '🧠', popular: false },
        { name: 'AI Quantum Computing', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: false },
<<<<<<< HEAD
        { name: 'AI Quantum Financial Oracle', path: '/ai-quantum-financial-oracle', description: 'Quantum financial intelligence', icon: '💰', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Environmental AI solutions', icon: '🌱', popular: true },
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Revolutionary drug discovery', icon: '💊', popular: true },
        { name: 'AI Neural Memory Assistant', path: '/ai-neural-memory-assistant', description: 'Personal AI memory', icon: '🧠', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
=======
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Revolutionary drug discovery platform', icon: '🧬', popular: true },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Advanced climate modeling', icon: '🌍', popular: true },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Space exploration & satellite analysis', icon: '🚀', popular: false },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🛡️', popular: true },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain management', icon: '📦', popular: true },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy grid optimization', icon: '⚡', popular: false },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Precision agriculture solutions', icon: '🌱', popular: true },
        { name: 'AI Legal Research Pro', path: '/ai-legal-research-pro', description: 'Advanced legal research & analysis', icon: '⚖️', popular: false }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
        { name: 'AI Analytics Platform', path: '/ai-analytics', description: 'Advanced analytics with ML predictions', icon: '📊', popular: true },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'End-to-end business process automation', icon: '⚡', popular: true },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'Advanced 24/7 customer support', icon: '🤖', popular: true },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Complete content creation suite', icon: '✍️', popular: true },
        { name: 'AI Healthcare Solutions', path: '/ai-healthcare', description: 'Medical AI and diagnosis support', icon: '🏥', popular: true },
        { name: 'AI Fintech Platform', path: '/ai-fintech', description: 'Financial AI and fraud detection', icon: '💳', popular: true },
        { name: 'AI Security Solutions', path: '/ai-cybersecurity', description: 'Advanced AI security solutions', icon: '🛡️', popular: true },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing', icon: '📄', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🛡️', popular: true },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain management', icon: '🚚', popular: true },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy grid optimization', icon: '⚡', popular: true },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Precision farming solutions', icon: '🌱', popular: true },
        { name: 'AI Legal Research Pro', path: '/ai-legal-research-pro', description: 'Advanced legal research AI', icon: '⚖️', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d464
      ]
=======
  const services = [
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      description: 'Advanced AI solutions for business automation and optimization'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Settings,
      description: 'Comprehensive IT infrastructure and support services'
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cloud,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
<<<<<<< HEAD
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support & Monitoring', path: '/it-support', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
<<<<<<< HEAD
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: true },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: true },
        { name: 'Edge Computing Solutions', path: '/edge-computing', description: 'Low-latency edge infrastructure', icon: '📡', popular: true },
        { name: '5G Network Implementation', path: '/5g-implementation', description: 'High-speed 5G networks', icon: '📶', popular: false },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Comprehensive IoT solutions', icon: '🌐', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d0c2
=======
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: true },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: true },
        { name: 'AI Infrastructure Monitoring', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services', path: '/blockchain-integration-services', description: 'Web3 and blockchain solutions', icon: '⛓️', popular: true },
        { name: 'AI API Management', path: '/ai-api-management', description: 'Intelligent API management', icon: '🔗', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: false }
=======
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true }
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'Cloud Migration & Setup', path: '/cloud-migration', description: 'Seamless cloud migration with zero downtime', icon: '☁️', popular: true },
        { name: 'Cybersecurity Suite', path: '/cybersecurity', description: 'Comprehensive security solutions', icon: '🔒', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support', path: '/it-support', description: 'Round-the-clock technical support', icon: '🛠️', popular: true },
        { name: 'Custom Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'Automated deployment pipelines', icon: '🔄', popular: true },
        { name: 'Database Management', path: '/database-management', description: 'Database optimization & maintenance', icon: '🗄️', popular: true },
        { name: 'Network Design', path: '/network-design', description: 'Secure network architecture', icon: '🌐', popular: false },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
=======
        { name: 'Custom Software Development', path: '/custom-development', description: 'Tailored software solutions', icon: '💻', popular: true },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-deac
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
        { name: 'Smart Contract Security Audit', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: true },
        { name: 'AI IT Operations (AIOps)', path: '/ai-ops', description: 'AI-powered IT operations', icon: '🤖', popular: true },
        { name: 'Healthcare IT Solutions', path: '/healthcare-it', description: 'HIPAA-compliant healthcare IT', icon: '🏥', popular: true },
        { name: 'Financial Services IT', path: '/financial-it', description: 'SOX-compliant financial IT', icon: '💳', popular: true },
        { name: 'Edge Computing Solutions', path: '/edge-computing', description: 'Low-latency edge infrastructure', icon: '📡', popular: true },
        { name: '5G Network Implementation', path: '/5g-implementation', description: 'High-speed 5G networks', icon: '📶', popular: false },
        { name: 'IoT Platform Development', path: '/iot-platform', description: 'Comprehensive IoT solutions', icon: '🌐', popular: true }
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d0c2
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
        { name: 'DevOps & CI/CD Implementation', path: '/devops-cicd', description: 'Streamlined development processes', icon: '⚙️', popular: false },
        { name: 'Database Management & Optimization', path: '/database-management', description: 'Performance tuning & security', icon: '🗄️', popular: false },
        { name: 'Network Design & Implementation', path: '/network-design', description: 'Secure network infrastructure', icon: '🌐', popular: false },
<<<<<<< HEAD
        { name: 'Quantum Cloud Infrastructure', path: '/quantum-cloud-infrastructure', description: 'Quantum computing cloud', icon: '⚛️', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
=======
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'AI Infrastructure Monitoring Pro', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services Pro', path: '/blockchain-integration-services', description: 'Enterprise blockchain solutions', icon: '⛓️', popular: true },
        { name: 'AI API Management Pro', path: '/ai-api-management', description: 'Intelligent API gateway', icon: '🔌', popular: false },
        { name: 'Intelligent Database Migration Pro', path: '/intelligent-database-migration', description: 'AI-powered database migration', icon: '🗄️', popular: false },
        { name: 'AI Load Testing Pro', path: '/ai-load-testing', description: 'Intelligent performance testing', icon: '⚡', popular: false },
        { name: 'Smart Contract Security Audit Pro', path: '/smart-contract-security-audit', description: 'Blockchain security auditing', icon: '🔒', popular: false },
        { name: 'AI Content Delivery Network Pro', path: '/ai-content-delivery-network', description: 'Intelligent CDN optimization', icon: '🌐', popular: false },
        { name: 'Intelligent Email Infrastructure Pro', path: '/intelligent-email-infrastructure', description: 'AI-powered email systems', icon: '📧', popular: false }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager Pro', path: '/ai-project-manager', description: 'Intelligent project management', icon: '📊', popular: true },
        { name: 'AI Smart Calendar Pro', path: '/ai-smart-calendar', description: 'AI-powered calendar management', icon: '📅', popular: true },
        { name: 'AI Content Writer Pro', path: '/ai-content-writer', description: 'Advanced AI content creation', icon: '✍️', popular: true },
        { name: 'AI Video Generator Pro', path: '/ai-video-generator', description: 'AI-powered video creation', icon: '🎥', popular: false },
        { name: 'AI Social Media Manager Pro', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Email Marketing Suite', path: '/ai-email-marketing', description: 'Intelligent email marketing', icon: '📧', popular: true },
        { name: 'AI Financial Analyzer Pro', path: '/ai-financial-analyzer', description: 'Advanced financial analysis', icon: '💰', popular: true },
        { name: 'AI Code Assistant Pro', path: '/ai-code-assistant', description: 'Intelligent coding assistant', icon: '💻', popular: true }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
        { name: 'Cloud Migration & Setup', path: '/it-services', description: 'Seamless cloud migration', icon: '☁️', popular: true },
        { name: 'Enterprise Cybersecurity', path: '/it-services', description: 'Comprehensive security solutions', icon: '🛡️', popular: true },
        { name: 'IT Infrastructure Design', path: '/it-services', description: 'Scalable infrastructure architecture', icon: '🏗️', popular: true },
        { name: '24/7 IT Support', path: '/it-services', description: 'Round-the-clock technical support', icon: '🔄', popular: true },
        { name: 'Custom Software Development', path: '/it-services', description: 'Tailored software solutions', icon: '💻', popular: true },
        { name: 'DevOps & CI/CD', path: '/it-services', description: 'Streamlined development processes', icon: '⚙️', popular: true },
        { name: 'Database Management', path: '/it-services', description: 'Performance tuning & security', icon: '🗄️', popular: false },
        { name: 'Network Design', path: '/it-services', description: 'Secure network infrastructure', icon: '🌐', popular: false }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-92bf
=======
        { name: 'AI Infrastructure Monitoring Pro', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring', icon: '📊', popular: true },
        { name: 'Blockchain Integration Services Pro', path: '/blockchain-integration-services', description: 'Complete blockchain integration', icon: '⛓️', popular: true },
        { name: 'AI API Management Pro', path: '/ai-api-management', description: 'Advanced API management platform', icon: '🔧', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-d464
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'AI-powered autonomous systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2202
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true },
=======
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-deac
=======
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Next-gen quantum solutions', icon: '⚛️', popular: true },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: true },
<<<<<<< HEAD
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: true }
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', description: 'AI-powered autonomous systems', icon: '🤖', popular: true },
        { name: 'AI Blockchain Solutions', path: '/ai-blockchain-solutions', description: 'AI-powered blockchain technology', icon: '⛓️', popular: true },
        { name: 'AI Holographic Workspace', path: '/ai-holographic-workspace', description: 'Immersive 3D collaboration', icon: '🥽', popular: false },
        { name: 'AI Energy Management', path: '/ai-energy', description: 'Smart energy optimization', icon: '⚡', popular: true },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI-powered music creation', icon: '🎵', popular: true },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
=======
        { name: 'Quantum Computing Solutions', path: '/quantum-computing', description: 'Quantum computing applications', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: false },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '📡', popular: false },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: false },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: false },
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization', icon: '🔄', popular: true },
<<<<<<< HEAD
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping', icon: '🧪', popular: true },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced fraud detection', icon: '🔍', popular: true },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain', icon: '📦', popular: true },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy solutions', icon: '⚡', popular: true },
        { name: 'AI Agricultural Intelligence Pro', path: '/ai-agricultural-intelligence-pro', description: 'Smart farming solutions', icon: '🌾', popular: true }
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
        { name: 'Quantum Computing Solutions', path: '/ai-quantum-computing', description: 'Quantum algorithms & computing', icon: '⚛️', popular: false },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-operating intelligent systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized applications & smart contracts', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices & edge processing', icon: '📡', popular: true },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive reality experiences', icon: '🥽', popular: true },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Intelligent urban infrastructure', icon: '🏙️', popular: false },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization & automation', icon: '🔄', popular: true },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and experimental technologies', icon: '🧪', popular: false },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
      ]
    }
  ];

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4ed2
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f294
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2202
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <MobileNavigation isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
      }`}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow-cyan' : 'bg-transparent'
=======
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20 neon-glow' : 'bg-transparent'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager', icon: BarChart, category: 'Productivity', price: '$199/mo' },
    { name: 'AI Smart Calendar Pro', href: '/ai-smart-calendar', icon: Calendar, category: 'Productivity', price: '$89/mo' },
    { name: 'AI Content Writer Pro', href: '/ai-content-writer', icon: FileText, category: 'Content', price: '$129/mo' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generator', icon: Video, category: 'Content', price: '$199/mo' },
    { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager', icon: Smartphone, category: 'Marketing', price: '$99/mo' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing', icon: Mail, category: 'Marketing', price: '$79/mo' },
    { name: 'AI CRM Assistant Pro', href: '/ai-crm-assistant', icon: Users, category: 'Business', price: '$149/mo' },
        { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer-pro', icon: DollarSign, category: 'Finance', price: '$299/mo' },
    { name: 'AI Code Assistant Pro', href: '/ai-code-assistant', icon: Code, category: 'Development', price: '$99/mo' },
    { name: 'AI API Manager Pro', href: '/ai-api-manager', icon: Settings, category: 'Development', price: '$179/mo' },
    { name: 'AI Cybersecurity Monitor Pro', href: '/ai-cybersecurity-monitor', icon: Shield, category: 'Security', price: '$249/mo' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock, category: 'Security', price: '$49/mo' },
    { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning-studio', icon: Mic, category: 'Creative', price: '$149/mo' },
    { name: 'AI Infrastructure Monitoring Pro', href: '/ai-infrastructure-monitoring-pro', icon: Activity, category: 'IT', price: '$499/mo' },
    { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', icon: FlaskConical, category: 'Healthcare', price: '$7,500/mo' }
=======
      description: 'Powerful, affordable AI-powered business tools'
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' }
  ];

<<<<<<< HEAD
  const itServices = [
    { name: 'AI-Powered Infrastructure Monitoring Pro', href: '/ai-infrastructure-monitoring', icon: Activity, price: '$1,800/mo' },
    { name: 'Blockchain Integration Services Pro', href: '/blockchain-integration-services', icon: Shield, price: '$2,500/mo' },
    { name: 'AI-Powered API Management Pro', href: '/ai-api-management', icon: Settings, price: '$1,400/mo' },
    { name: 'Intelligent Database Migration Pro', href: '/intelligent-database-migration', icon: Database, price: '$2,200/mo' },
    { name: 'AI-Powered Load Testing Pro', href: '/ai-load-testing', icon: BarChart, price: '$1,200/mo' },
    { name: 'Smart Contract Security Audit Pro', href: '/smart-contract-security-audit', icon: Shield, price: '$3,000/mo' },
    { name: 'AI-Powered Content Delivery Network Pro', href: '/ai-content-delivery-network', icon: Globe, price: '$1,600/mo' },
    { name: 'Intelligent Email Infrastructure Pro', href: '/intelligent-email-infrastructure', icon: Mail, price: '$1,000/mo' }
  ];

  const specializedServices = [
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu, price: '$5,000/mo' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, price: '$4,000/mo' },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock, price: '$2,500/mo' },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe, price: '$1,800/mo' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, price: '$1,500/mo' },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings, price: '$3,500/mo' }
  ];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 cyber-glow-advanced ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-400/20' : 'bg-transparent'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
    }`}>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2202
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-deac
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-6860
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-a369
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-db70
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold group quantum-ripple"
            onClick={closeAllMenus}
          >
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 rotate-slow">
=======
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white cyber-text font-bold">
<<<<<<< HEAD
=======
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold cyber-text">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
              Zion Tech Group
<<<<<<< HEAD
=======
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 cyber-pulse">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-white cyber-text-ultra font-bold neon-text-advanced">
            Zion Tech Group
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
            </span>
=======
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
<<<<<<< HEAD
            <Link
              to="/"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow-cyan"
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-text"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow-cyan"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow cyber-scan-effect"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              to="/about" 
<<<<<<< HEAD
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow cyber-scan-effect"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link 
              to="/services" 
<<<<<<< HEAD
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium neon-glow cyber-scan-effect"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
              onClick={closeAllMenus}
            >
              Services
            </Link>
            <Link 
              to="/pricing" 
<<<<<<< HEAD
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium hover:neon-glow-cyan"
=======
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
<<<<<<< HEAD
            
            {/* Search */}
            <div className="w-64">
              <Search />
            </div>
=======
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29

=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setServicesOpen(false)}
                      >
                        <service.icon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Links */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-900 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Links */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="space-y-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-900 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/pricing"
              className="text-white hover:text-cyan-400 transition-colors duration-200"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (302) 464-0950</span>
            </a>
            <Link
              to="/contact"
<<<<<<< HEAD
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button neon-glow"
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-32a7
=======
              className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center cyber-button quantum-ripple"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
              onClick={closeAllMenus}
=======
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
            >
              Get Started
            </Link>
          </div>

<<<<<<< HEAD
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
=======
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
        </div>

        {/* Mobile Menu */}
        {isOpen && (
<<<<<<< HEAD
          <div className="lg:hidden cyber-card-ultra mt-2 p-4">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <Search />
              </div>
              
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 neon-glow cyber-scan-effect"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 neon-glow cyber-scan-effect"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2 neon-glow cyber-scan-effect"
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

              {/* Mobile Services */}
=======
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {/* Services */}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
              <div>
                <h3 className="text-white font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-5 h-5 text-cyan-400" />
                      <div>
                        <h4 className="text-white font-medium">{service.name}</h4>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
<<<<<<< HEAD
                    ))}
=======
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
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
          : 'bg-transparent'
      }`}>
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

              {/* Services Dropdown */}
              <div className="relative group">
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
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
                  </div>
                )}
=======
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-white font-semibold mb-3">Company</h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold mb-3">Resources</h3>
                <div className="space-y-2">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
              </div>

<<<<<<< HEAD
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>

              {/* Mobile CTA */}
<<<<<<< HEAD
              <Link
                to="/contact"
                className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center mt-4 cyber-button quantum-ripple"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
=======
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors duration-200 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </a>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
            </div>
          </div>
        )}
      </div>
    </nav>
=======
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
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Navigation;
>>>>>>> cursor/analyze-improve-and-deploy-application-58b3
=======
export default Navigation;
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f31a
=======
export default Navigation;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
