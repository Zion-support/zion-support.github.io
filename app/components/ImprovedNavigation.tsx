import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ChevronDown
  Menu } from 'lucide-react';
import { X
  Brain } from 'lucide-react';
import { Shield
  Zap } from 'lucide-react';
import { Globe
  BarChart3 } from 'lucide-react';
import { Cloud
  Sparkles } from 'lucide-react';
import { Search
  User } from 'lucide-react';
import { Settings
  HelpCircle } from 'lucide-react';
import { Phone
  Mail } from 'lucide-react';
import { MapPin
  ExternalLink } from 'lucide-react';
import { Star
  TrendingUp } from 'lucide-react';
import { Users
  Award } from 'lucide-react';
import { Clock
  CheckCircle } from 'lucide-react';
import { DollarSign
  Play } from 'lucide-react';
const ImprovedNavigation = () => {;
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  // Close mobile menu when route changes,
useEffect(() => {
  return null;
    setIsOpen(false);
    setIsSidebarOpen(false);
  }, [location]);
  const navigationItems = [
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
      description: 'Advanced AI Solutions',
      color: 'from-blue-500 to-cyan-500',
      dropdown: [,
        { 
          label: 'AI Analytics Dashboard Pro',
          href: '/ai-analytics-dashboard-pro',
          description: 'Real-time business intelligence',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'AI Cybersecurity Suite Pro',
          href: '/ai-cybersecurity-suite-pro',
          description: 'Advanced threat protection',
          icon: <Shield className="w-4 h-4" / /></Shield>
        }
        { 
          label: 'AI Content Generation Pro',
          href: '/ai-content-generation-pro',
          description: 'Automated content creation',
          icon: <Sparkles className="w-4 h-4" / /></Sparkles>
        }
        { 
          label: 'AI Customer Support Chatbot',
          href: '/ai-customer-support-chatbot',
          description: 'Intelligent customer service',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'AI Code Assistant Pro',
          href: '/ai-code-assistant-pro',
          description: 'AI-powered development',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'AI Business Intelligence Pro',
          href: '/ai-business-intelligence-pro',
          description: 'Data-driven insights',
          icon: <TrendingUp className="w-4 h-4" / /></TrendingUp>
        }
        { 
          label: 'AI Automation Platform',
          href: '/ai-automation-platform',
          description: 'Workflow automation',
          icon: <Zap className="w-4 h-4" / /></Zap>
        }
        { 
          label: 'AI Data Analytics Pro',
          href: '/ai-data-analytics-pro',
          description: 'Advanced data analysis',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'AI Marketing Automation',
          href: '/ai-marketing-automation',
          description: 'Smart marketing campaigns',
          icon: <TrendingUp className="w-4 h-4" / /></TrendingUp>
        }
        { 
          label: 'AI HR & Recruitment Pro',
          href: '/ai-hr-recruitment-pro',
          description: 'Intelligent talent management',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'AI Financial Analysis',
          href: '/ai-financial-analysis',
          description: 'Financial forecasting',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'AI Supply Chain Optimizer',
          href: '/ai-supply-chain-optimizer',
          description: 'Supply chain intelligence',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: 'AI Voice Assistant Pro',
          href: '/ai-voice-assistant-pro',
          description: 'Voice-activated AI',
          icon: <User className="w-4 h-4" / /></User>
        }
        { 
          label: 'AI Image Recognition Pro',
          href: '/ai-image-recognition-pro',
          description: 'Computer vision solutions',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'AI Predictive Maintenance',
          href: '/ai-predictive-maintenance',
          description: 'Predictive analytics',
          icon: <Clock className="w-4 h-4" / /></Clock>
        }
        { 
          label: 'AI Sentiment Analysis Pro',
          href: '/ai-sentiment-analysis-pro',
          description: 'Customer sentiment tracking',
          icon: <TrendingUp className="w-4 h-4" / /></TrendingUp>
        }
        { 
          label: 'AI Recommendation Engine',
          href: '/ai-recommendation-engine',
          description: 'Personalized recommendations',
          icon: <Star className="w-4 h-4" / /></Star>
        }
        { 
          label: 'AI Fraud Detection Pro',
          href: '/ai-fraud-detection-pro',
          description: 'Advanced fraud prevention',
          icon: <Shield className="w-4 h-4" / /></Shield>
        }
        { 
          label: 'AI Language Translation',
          href: '/ai-language-translation',
          description: 'Real-time translation',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: 'AI Chatbot Enterprise',
          href: '/ai-chatbot-enterprise',
          description: 'Enterprise chatbot solutions',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'AI Data Mining Pro',
          href: '/ai-data-mining-pro',
          description: 'Data extraction & analysis',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'AI Video Analysis',
          href: '/ai-video-analysis',
          description: 'Video content analysis',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'AI Time Series Forecasting',
          href: '/ai-time-series-forecasting',
          description: 'Time-based predictions',
          icon: <TrendingUp className="w-4 h-4" / /></TrendingUp>
        }
        { 
          label: 'AI NLP Text Analysis',
          href: '/ai-nlp-text-analysis',
          description: 'Natural language processing',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'View All AI Services',
          href: '/ai-services',
          description: 'Explore all AI solutions',
          icon: <ArrowRight className="w-4 h-4" / /></ArrowRight>
        }
      ]
    }
    {
      label: 'IT Services',
      href: '/services',
      icon: <Shield className="w-4 h-4" />,
      description: 'Comprehensive IT Solutions',
      color: 'from-green-500 to-emerald-500',
      dropdown: [,
        { 
          label: 'Cloud Infrastructure',
          href: '/cloud-infrastructure',
          description: 'Scalable cloud solutions',
          icon: <Cloud className="w-4 h-4" / /></Cloud>
        }
        { 
          label: 'Blockchain Development',
          href: '/blockchain-development',
          description: 'Blockchain technology',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'IoT Solutions',
          href: '/iot-solutions',
          description: 'Internet of Things',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: 'AR/VR Development',
          href: '/ar-vr-development',
          description: 'Immersive experiences',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'DevOps Solutions',
          href: '/devops-solutions',
          description: 'Development operations',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Mobile Development',
          href: '/mobile-development',
          description: 'Mobile applications',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Web Development',
          href: '/web-development',
          description: 'Web applications',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'IT Support',
          href: '/it-support',
          description: 'Technical support',
          icon: <HelpCircle className="w-4 h-4" / /></HelpCircle>
        }
        { 
          label: 'Network Infrastructure',
          href: '/network-infrastructure',
          description: 'Network solutions',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: 'IT Consulting',
          href: '/it-consulting',
          description: 'Technology consulting',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Cybersecurity Audit',
          href: '/cybersecurity-audit',
          description: 'Security assessments',
          icon: <Shield className="w-4 h-4" / /></Shield>
        }
        { 
          label: 'Data Center Services',
          href: '/data-center-services',
          description: 'Data center solutions',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Asset Management',
          href: '/asset-management',
          description: 'IT asset tracking',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'View All IT Services',
          href: '/services',
          description: 'Explore all IT solutions',
          icon: <ArrowRight className="w-4 h-4" / /></ArrowRight>
        }
      ]
    }
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
      description: 'Ready-to-Use Solutions',
      color: 'from-purple-500 to-pink-500',
      dropdown: [,
        { 
          label: 'Zion Analytics Pro',
          href: '/zion-analytics-pro',
          description: 'Business intelligence platform',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'Zion Security Shield',
          href: '/zion-security-shield',
          description: 'Advanced security protection',
          icon: <Shield className="w-4 h-4" / /></Shield>
        }
        { 
          label: 'Zion Cloud Vault',
          href: '/zion-cloud-vault',
          description: 'Secure cloud storage',
          icon: <Cloud className="w-4 h-4" / /></Cloud>
        }
        { 
          label: 'Zion AI Inventory Manager',
          href: '/zion-ai-inventory-manager',
          description: 'Smart inventory tracking',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'Zion HR Assistant Pro',
          href: '/zion-hr-assistant-pro',
          description: 'Human resources automation',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Zion AI Accounting Suite',
          href: '/zion-ai-accounting-suite',
          description: 'Automated accounting',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'Zion E-commerce Optimizer',
          href: '/zion-ecommerce-optimizer',
          description: 'E-commerce optimization',
          icon: <TrendingUp className="w-4 h-4" / /></TrendingUp>
        }
        { 
          label: 'Zion AI Customer Insights',
          href: '/zion-ai-customer-insights',
          description: 'Customer analytics',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Zion AI Lead Scoring',
          href: '/zion-ai-lead-scoring',
          description: 'Lead qualification',
          icon: <Star className="w-4 h-4" / /></Star>
        }
        { 
          label: 'Zion AI Document Processor',
          href: '/zion-ai-document-processor',
          description: 'Document automation',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Zion AI Social Listener',
          href: '/zion-ai-social-listener',
          description: 'Social media monitoring',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: 'Zion AI Email Optimizer',
          href: '/zion-ai-email-optimizer',
          description: 'Email marketing optimization',
          icon: <Mail className="w-4 h-4" / /></Mail>
        }
        { 
          label: 'Zion AI Meeting Assistant',
          href: '/zion-ai-meeting-assistant',
          description: 'Meeting automation',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Zion AI Expense Tracker',
          href: '/zion-ai-expense-tracker',
          description: 'Expense management',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: 'Zion AI Survey Builder',
          href: '/zion-ai-survey-builder',
          description: 'Survey creation tool',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Zion AI Chatbot Builder',
          href: '/zion-ai-chatbot-builder',
          description: 'No-code chatbot creation',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Zion AI Workflow Automation',
          href: '/zion-ai-workflow-automation',
          description: 'Process automation',
          icon: <Zap className="w-4 h-4" / /></Zap>
        }
        { 
          label: 'Zion AI SEO Optimizer',
          href: '/zion-ai-seo-optimizer',
          description: 'SEO optimization tool',
          icon: <TrendingUp className="w-4 h-4" / /></TrendingUp>
        }
        { 
          label: 'Zion AI Data Warehouse',
          href: '/zion-ai-data-warehouse',
          description: 'Data storage solution',
          icon: <Cloud className="w-4 h-4" / /></Cloud>
        }
        { 
          label: 'Zion AI Mobile App Builder',
          href: '/zion-ai-mobile-app-builder',
          description: 'Mobile app creation',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Zion AI API Manager',
          href: '/zion-ai-api-manager',
          description: 'API management platform',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Zion AI Backup Manager',
          href: '/zion-ai-backup-manager',
          description: 'Automated backup solution',
          icon: <Cloud className="w-4 h-4" / /></Cloud>
        }
        { 
          label: 'Zion AI Testing Automation',
          href: '/zion-ai-testing-automation',
          description: 'Automated testing',
          icon: <CheckCircle className="w-4 h-4" / /></CheckCircle>
        }
        { 
          label: 'View All Micro SAAS',
          href: '/micro-saas',
          description: 'Explore all micro SAAS',
          icon: <ArrowRight className="w-4 h-4" / /></ArrowRight>
        }
      ]
    }
    {
      label: '5 G Solutions',
      href: '/5 g-solutions',
      icon: <Globe className="w-4 h-4" />,
      description: 'Next-Gen Connectivity',
      color: 'from-orange-500 to-red-500',
      dropdown: [,
        { 
          label: '5 G Data Analytics',
          href: '/5 g-data-analytics',
          description: 'High-speed data analysis',
          icon: <BarChart3 className="w-4 h-4" / /></BarChart3>
        }
        { 
          label: '5 G Edge Computing',
          href: '/5 g-edge-computing',
          description: 'Edge computing solutions',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: '5 G Implementation',
          href: '/5 g-implementation',
          description: '5 G network deployment',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: '5 G Mobile Applications',
          href: '/5 g-mobile-applications',
          description: '5 G-enabled mobile apps',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: '5 G Network Infrastructure',
          href: '/5 g-network-infrastructure',
          description: '5 G network architecture',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: '5 G Private Networks',
          href: '/5 g-private-networks',
          description: 'Private 5 G networks',
          icon: <Shield className="w-4 h-4" / /></Shield>
        }
        { 
          label: '5 G Smart City Solutions',
          href: '/5 g-smart-city-solutions',
          description: 'Smart city infrastructure',
          icon: <Globe className="w-4 h-4" / /></Globe>
        }
        { 
          label: 'View All 5 G Solutions',
          href: '/5 g-solutions',
          description: 'Explore all 5 G solutions',
          icon: <ArrowRight className="w-4 h-4" / /></ArrowRight>
        }
      ]
    }
    {
      label: 'Company',
      href: '/about',
      icon: <BarChart3 className="w-4 h-4" />,
      description: 'About Zion Tech Group',
      color: 'from-cyan-500 to-blue-500',
      dropdown: [,
        { 
          label: 'About Us',
          href: '/about',
          description: 'Our story and mission',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Our Team',
          href: '/team',
          description: 'Meet our experts',
          icon: <Users className="w-4 h-4" / /></Users>
        }
        { 
          label: 'Careers',
          href: '/careers',
          description: 'Join our team',
          icon: <Award className="w-4 h-4" / /></Award>
        }
        { 
          label: 'Case Studies',
          href: '/case-studies',
          description: 'Success stories',
          icon: <Star className="w-4 h-4" / /></Star>
        }
        { 
          label: 'Blog',
          href: '/blog',
          description: 'Latest insights',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'News',
          href: '/news',
          description: 'Company news',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Press',
          href: '/press',
          description: 'Press releases',
          icon: <Settings className="w-4 h-4" / /></Settings>
        }
        { 
          label: 'Partners',
          href: '/partners',
          description: 'Our partners',
          icon: <Users className="w-4 h-4" / /></Users>
        }
      ];
    };
  ];
  const quickLinks = [
    { label: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> }
    { label: 'Demo', href: '/demo', icon: <Play className="w-4 h-4" /> }
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> };
    { label: 'Consultation', href: '/consultation', icon: <Users className="w-4 h-4" /> };
  ];
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',;
    address: '364 E Main St STE 1008, Middletown DE 19709';
  };
  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 lg: hidden ${isSidebarOpen ? 'block' : 'hidden'}""
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center"";