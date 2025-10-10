import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Shield, 
  Zap, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  Users, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Github, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  CheckCircle,
  Rocket,
  Sparkles,
  Settings,
  Target,
  Cpu,
  Database,
  Lock,
  FileText,
  Calendar,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Clock as ClockIcon,
  Award as AwardIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  ArrowRight as ArrowIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Code as CodeIcon,
  BarChart as BarChartIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  MessageSquare as MessageSquareIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckIcon,
  Rocket as RocketIcon,
  Sparkles as SparklesIcon,
  Settings as SettingsIcon,
  Target as TargetIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Lock as LockIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon
} from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Space Technology Pro', href: '/ai-space-technology-pro' },
        { name: 'AI Quantum Security Suite', href: '/ai-quantum-security-suite' }
=======
        { name: 'AI Quantum Financial Oracle', href: '/ai-quantum-financial-oracle' },
        { name: 'AI Climate Solutions Pro', href: '/ai-climate-solutions-pro' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' },
        { name: 'AI Neural Memory Assistant', href: '/ai-neural-memory-assistant' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support Suite', href: '/ai-customer-support' },
        { name: 'AI Data Analytics Platform', href: '/ai-data-analytics' },
        { name: 'AI Content Generation Studio', href: '/ai-content-generation' }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
=======
        { name: 'AI Analytics', href: '/ai-services' },
        { name: 'AI Automation', href: '/ai-services' },
        { name: 'AI Customer Support', href: '/ai-services' },
        { name: 'AI Document Processing', href: '/ai-services' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
=======
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Email Marketing', href: '/ai-email-marketing' },
        { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI E-commerce Optimization', href: '/ai-ecommerce-solutions' },
        { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Natural Language Processing', href: '/ai-nlp' },
        { name: 'AI Machine Learning Platform', href: '/ai-ml-platform' },
        { name: 'AI Quantum Computing', href: '/ai-quantum-computing' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
=======
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation' },
        { name: 'AI Customer Support Pro', href: '/ai-customer-support' },
        { name: 'AI Sales Automation Pro', href: '/ai-sales-automation' },
        { name: 'AI Cybersecurity Pro', href: '/ai-cybersecurity' },
        { name: 'AI Healthcare Pro', href: '/ai-healthcare' },
        { name: 'AI Fintech Pro', href: '/ai-fintech' },
        { name: 'AI Manufacturing Pro', href: '/ai-manufacturing' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'Custom Development', href: '/custom-development' },
<<<<<<< HEAD
        { name: 'AI IT Operations (AIOps)', href: '/ai-ops' },
        { name: 'Healthcare IT Solutions', href: '/healthcare-it' },
        { name: 'Financial Services IT', href: '/financial-it' },
        { name: 'Edge Computing Solutions', href: '/edge-computing' },
        { name: 'Blockchain Integration', href: '/blockchain-integration' },
=======
        { name: 'AI IT Operations', href: '/ai-ops' },
        { name: 'Healthcare IT Solutions', href: '/healthcare-it' },
        { name: 'Financial Services IT', href: '/financial-it' },
        { name: 'Edge Computing Solutions', href: '/edge-computing' },
        { name: '5G Network Implementation', href: '/5g-implementation' },
        { name: 'IoT Platform Development', href: '/iot-platform' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Network Design', href: '/network-design' },
        { name: 'AI Infrastructure Monitoring', href: '/ai-infrastructure-monitoring' },
        { name: 'Blockchain Integration', href: '/blockchain-integration-services' },
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-63f8
        { name: 'AI API Management', href: '/ai-api-management' },
        { name: 'Smart Contract Security', href: '/smart-contract-security-audit' },
        { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform' }
=======
        { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'Enterprise Cybersecurity Suite', href: '/cybersecurity' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: '24/7 IT Support & Monitoring', href: '/it-support' },
        { name: 'Custom Software Development', href: '/custom-development' },
        { name: 'DevOps & CI/CD Implementation', href: '/devops-cicd' },
        { name: 'Database Management & Optimization', href: '/database-management' }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-8798
=======
        { name: 'Cloud Migration', href: '/it-services' },
        { name: 'Cybersecurity', href: '/it-services' },
        { name: 'Infrastructure', href: '/it-services' },
        { name: 'Support', href: '/it-services' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
=======
        { name: 'Cloud Migration & Setup', href: '/cloud-migration' },
        { name: 'IT Infrastructure Design', href: '/it-infrastructure' },
        { name: 'Database Management', href: '/database-management' },
        { name: 'Cloud Cost Optimization', href: '/cloud-optimization' },
        { name: 'Enterprise Cybersecurity', href: '/cybersecurity' },
        { name: 'Compliance Management', href: '/compliance-management' },
        { name: 'Security Awareness Training', href: '/security-training' },
        { name: 'Zero Trust Security', href: '/zero-trust' },
        { name: '24/7 IT Support', href: '/it-support' },
        { name: 'System Administration', href: '/system-administration' },
        { name: 'IT Strategic Consulting', href: '/it-consulting' },
        { name: 'IT Asset Management', href: '/asset-management' },
        { name: 'Custom Software Development', href: '/custom-development' },
        { name: 'System Integration & APIs', href: '/system-integration' },
        { name: 'DevOps & CI/CD', href: '/devops-cicd' },
        { name: 'Legacy System Modernization', href: '/legacy-modernization' },
        { name: 'Network Design & Implementation', href: '/network-design' },
        { name: 'Disaster Recovery & Backup', href: '/disaster-recovery' },
        { name: 'IT Performance Monitoring', href: '/performance-monitoring' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
=======
        { name: 'Cloud Infrastructure Pro', href: '/cloud-infrastructure' },
        { name: 'Cybersecurity Pro', href: '/cybersecurity' },
        { name: 'Network Management Pro', href: '/network-management' },
        { name: 'Database Management Pro', href: '/database-management' },
        { name: 'DevOps Pro', href: '/devops' },
        { name: 'Hardware Support Pro', href: '/hardware-support' },
        { name: 'IT Consulting Pro', href: '/it-consulting' },
        { name: 'IT Training Pro', href: '/it-training' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI Smart Calendar Pro', href: '/ai-smart-calendar-pro' },
        { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
<<<<<<< HEAD
        { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
        { name: 'AI Content Studio', href: '/ai-content-studio' },
        { name: 'AI Financial Advisor', href: '/ai-financial-advisor' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Smart Calendar', href: '/ai-smart-calendar' },
        { name: 'AI Content Writer', href: '/ai-content-writer' },
        { name: 'AI Video Generator', href: '/ai-video-generator' },
<<<<<<< HEAD
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' }
=======
        { name: 'AI CRM Assistant Pro', href: '/ai-crm-assistant' },
        { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer' },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant' },
<<<<<<< HEAD
<<<<<<< HEAD
        { name: 'AI API Manager Pro', href: '/ai-api-manager' },
        { name: 'AI Cybersecurity Monitor Pro', href: '/ai-cybersecurity-monitor' },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager' },
<<<<<<< HEAD
        { name: 'AI Voice Assistant Pro', href: '/ai-voice-assistant' },
        { name: 'AI Document Scanner Pro', href: '/ai-document-scanner' },
        { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber' },
        { name: 'AI Website Builder Pro', href: '/ai-website-builder' }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-aeba
=======
        { name: 'AI CRM Assistant', href: '/ai-crm-assistant' },
        { name: 'AI Neural Interface Pro', href: '/ai-neural-interface-pro' },
        { name: 'AI Personal Finance Manager', href: '/ai-personal-finance-manager' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-aedf
=======
        { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning-studio' },
        { name: 'AI Financial Analyzer Pro', href: '/ai-financial-analyzer-pro' },
        { name: 'AI Infrastructure Monitoring Pro', href: '/ai-infrastructure-monitoring-pro' },
        { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
        { name: 'AI Project Manager Pro', href: '/ai-project-manager-pro' },
        { name: 'AI Social Media Manager Pro', href: '/ai-social-media-manager' },
        { name: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard' },
        { name: 'AI Email Marketing Suite Pro', href: '/ai-email-marketing-suite' },
        { name: 'AI Customer Support Bot Pro', href: '/ai-customer-support-bot' },
        { name: 'AI Lead Generation Engine Pro', href: '/ai-lead-generation-engine' },
        { name: 'AI Content Studio Pro', href: '/ai-content-studio' },
        { name: 'AI Video Generator Pro', href: '/ai-video-generator' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Zap,
      services: [
        { name: 'Quantum Computing Solutions', href: '/ai-quantum-computing' },
        { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems' },
        { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
        { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace' },
        { name: 'AI Energy Management', href: '/ai-energy' },
        { name: 'AI Music Composition', href: '/ai-music-composition' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Innovation Labs', href: '/innovation-labs' },
        { name: 'AI Financial Crime Detection Pro', href: '/ai-financial-crime-detection-pro' },
        { name: 'AI Supply Chain Optimization Pro', href: '/ai-supply-chain-optimization-pro' },
        { name: 'AI Energy Grid Management Pro', href: '/ai-energy-grid-management-pro' },
        { name: 'AI Agricultural Intelligence Pro', href: '/ai-agricultural-intelligence-pro' }
=======
        { name: 'AI Password Manager Pro', href: '/ai-password-manager' },
        { name: 'AI Invoice Generator Pro', href: '/ai-invoice-generator' },
        { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker' }
      ]
    },
    {
      title: 'Emerging Tech',
=======
        { name: 'AI Cybersecurity Monitor Pro', href: '/ai-cybersecurity-monitor' },
        { name: 'AI Password Manager Pro', href: '/ai-password-manager' },
        { name: 'AI Voice Cloning Studio Pro', href: '/ai-voice-cloning-studio' }
      ]
    },
    {
      title: 'Specialized Solutions',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
      icon: Zap,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        { name: 'Quantum Computing Solutions', href: '/quantum-computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems' },
        { name: 'AR/VR Solutions', href: '/ar-vr-solutions' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing' },
<<<<<<< HEAD
        { name: 'Blockchain & Web3', href: '/blockchain-web3' },
        { name: 'Smart Cities', href: '/smart-cities' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Innovation Labs', href: '/innovation-labs' }
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
=======
        { name: 'AI Project Manager', href: '/micro-saas' },
        { name: 'AI Smart Calendar', href: '/micro-saas' },
        { name: 'AI Content Writer', href: '/micro-saas' },
        { name: 'AI Analytics Pro', href: '/micro-saas' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
=======
        { name: 'Business Intelligence', href: '/business-intelligence' },
        { name: 'Robotics Solutions', href: '/robotics' },
        { name: 'Space Technology', href: '/space-technology' },
        { name: 'Climate Solutions', href: '/climate-solutions' },
        { name: 'Financial Crime Detection', href: '/financial-crime-detection' },
        { name: 'Supply Chain Optimization', href: '/supply-chain-optimization' },
        { name: 'Energy Grid Management', href: '/energy-grid-management' },
        { name: 'Agricultural Intelligence', href: '/agricultural-intelligence' },
        { name: 'Legal Research AI', href: '/legal-research-ai' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
      ]
    }
  ];

  const companyLinks = [
<<<<<<< HEAD
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
<<<<<<< HEAD
    { name: 'Status Page', href: '/status' },
    { name: 'System Health', href: '/health' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'Community Forum', href: '/community' }
=======
    { name: 'Status Page', href: '/status' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
<<<<<<< HEAD
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Data Processing Agreement', href: '/dpa' },
    { name: 'Service Level Agreement', href: '/sla' }
=======
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Pricing', href: '/pricing', icon: DollarSign }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact', icon: MessageSquare },
    { name: 'Support Center', href: '/support', icon: Settings },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api-docs', icon: Code },
    { name: 'Status Page', href: '/status', icon: Activity },
    { name: 'System Health', href: '/health', icon: Shield }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy', icon: Lock },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Cookie Policy', href: '/cookies', icon: Settings },
    { name: 'GDPR Compliance', href: '/gdpr', icon: Shield },
    { name: 'Security', href: '/security', icon: Lock },
    { name: 'Compliance', href: '/compliance', icon: CheckCircle }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/zion-tech-group', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden matrix-bg">
=======
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden">
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
<<<<<<< HEAD
<<<<<<< HEAD
      
<<<<<<< HEAD
<<<<<<< HEAD
      {/* Quantum Particles */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full quantum-particle" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full quantum-particle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full quantum-particle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-blue-400 rounded-full quantum-particle" style={{ animationDelay: '3s' }}></div>
=======
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden cyber-matrix">
      {/* Enhanced Futuristic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] neural-pulse-advanced" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] neural-pulse-advanced" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px]" />
      
      {/* Quantum Ripples */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 quantum-ripple"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 quantum-ripple" style={{ animationDelay: '2s' }}></div>
      
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
      {/* Main Footer Content */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
=======
=======
      {/* Main Footer Content */}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
          {/* Company Info */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 rotate-slow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl cyber-text">Zion Tech Group</span>
=======
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group quantum-ripple">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 cyber-pulse">
              <Zap className="w-5 h-5 text-white" />
=======
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6 group">
<<<<<<< HEAD
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25">
                <Zap className="w-5 h-5 text-white" />
              </div>
<<<<<<< HEAD
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Zion Tech Group</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2efa
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-6164
            </div>
            <span className="text-white font-bold text-xl cyber-text-ultra neon-text-advanced">Zion Tech Group</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-3064
=======
    { name: 'Security', href: '/security' }
  ];
=======
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-400/25 neon-glow">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group</span>
=======
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-d44d
=======
              <span className="text-white font-bold text-xl neon-text-advanced cyber-text">Zion Tech Group</span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. Transforming businesses 
              with cutting-edge technology and innovative solutions.
            </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm border-t border-cyan-400/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.05)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.05)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
<<<<<<< HEAD
              Leading provider of AI-powered enterprise solutions, quantum computing, 
              autonomous systems, and digital transformation services. We help businesses 
              achieve unprecedented levels of efficiency, innovation, and growth through 
              cutting-edge technology and intelligent automation.
=======
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
            </p>
            
            {/* Contact Info */}
<<<<<<< HEAD
            <div className="space-y-3 mb-6">
<<<<<<< HEAD
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Phone className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Mail className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">
=======
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300 group">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 group-hover:text-cyan-300 transition-colors" />
                <div>
                  <div className="font-medium">364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group">
                <Clock className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <div>
                  <div className="font-medium">Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  <div className="text-sm text-cyan-400">24/7 Emergency Support</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
<<<<<<< HEAD
              <a href="https://linkedin.com/company/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/zion-tech-group" className="text-gray-400 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
=======
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-6 neon-glow-cyan">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 mb-4">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    <h4 className="text-white font-medium">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.services.slice(0, 8).map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link 
                          to={service.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors text-sm hover:translate-x-1 transform duration-300"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                    {category.services.length > 8 && (
                      <li>
                        <Link 
                          to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                        >
                          View All {category.title} →
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
=======
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors duration-200">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors duration-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6 flex items-center">
                <category.icon className="w-5 h-5 text-cyan-400 mr-2" />
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link
                      to={service.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Secondary Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
              ))}
            </ul>
          </div>
<<<<<<< HEAD

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Users className="w-4 h-4 mr-2 text-cyan-400" />
                  Company
                </h4>
                <ul className="space-y-2">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center hover:translate-x-1 transform duration-300"
                      >
                        <link.icon className="w-3 h-3 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Settings className="w-4 h-4 mr-2 text-cyan-400" />
                  Support
                </h4>
                <ul className="space-y-2">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center hover:translate-x-1 transform duration-300"
                      >
                        <link.icon className="w-3 h-3 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                  Legal
                </h4>
                <ul className="space-y-2">
                  {legalLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center hover:translate-x-1 transform duration-300"
                      >
                        <link.icon className="w-3 h-3 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
<<<<<<< HEAD
            <h3 className="text-white font-semibold text-lg mb-4 neon-text cyber-text">
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, quantum computing advances, 
              technology updates, and industry insights delivered to your inbox.
=======
            <h3 className="text-white font-semibold text-lg mb-4 neon-text flex items-center justify-center">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              Stay Updated with Our Latest Innovations
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest news about AI breakthroughs, technology updates, and industry insights delivered to your inbox.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
<<<<<<< HEAD
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
<<<<<<< HEAD
              <button className="neon-button hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
=======
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 cyber-input"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center glow-button">
                <Rocket className="w-4 h-4 mr-2" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
=======
              <button className="cyber-button inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
=======
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="https://linkedin.com/company/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/zion-tech-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-cb01
            </div>
            
<<<<<<< HEAD
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Transforming businesses with AI-powered solutions
              </p>
=======
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart className="w-4 h-4 text-blue-400" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>GDPR Compliant</span>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e939
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;