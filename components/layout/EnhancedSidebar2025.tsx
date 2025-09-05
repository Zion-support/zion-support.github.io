<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Globe, Cpu, Database, Lock, Zap,
  TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Search, Menu, X as CloseIcon,
  Target, BookOpen, Truck, BarChart3,
  Sparkles, Eye, Lightbulb, Palette, Code
} from 'lucide-react',

interface SidebarItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: SidebarItem[],
  badge?: string,
  isNew?: boolean,
  isHot?: boolean
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const sidebarItems: SidebarItem[] = [
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className=&quot;w-5 h-5&quot; />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className=&quot;w-5 h-5&quot; />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    isNew: true,
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className=&quot;w-5 h-5&quot; />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    isHot: true,
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className=&quot;w-5 h-5&quot; />,
    color: 'text-blue-400',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className=&quot;w-5 h-5&quot; />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' },
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' },
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' },
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ]
  },
  {
    name: 'Creative & Design',
    href: '/creative-services',
    icon: <Palette className=&quot;w-5 h-5&quot; />,
    description: 'AI-powered creative and design solutions',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <BookOpen className=&quot;w-5 h-5&quot; />,
    description: 'Cutting-edge research and development services',
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Truck className=&quot;w-5 h-5&quot; />,
    description: 'Specialized solutions for specific industries',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  },
  {
    name: 'Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className=&quot;w-5 h-5&quot; />,
    description: 'Flexible pricing options for all services',
    children: [
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className=&quot;w-5 h-5&quot; />,
    description: 'Educational resources and documentation',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <Settings className=&quot;w-5 h-5&quot; />,
    description: 'Technical support and customer service',
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }
=======
import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_X, _ChevronRight, _Home, _Star, _Users, _Settings, _HelpCircle, _Mail, _Phone, _MapPin, _Brain, _Atom, _Shield, _Rocket, _DollarSign, _Globe, _Cpu, _Database, _Lock, _Zap, _TrendingUp, _Award, _CheckCircle, _Clock, _ArrowRight, _Search, _Menu, _X as CloseIcon, _Target, _BookOpen, _Truck, _BarChart3, _Sparkles, _Eye, _Lightbulb, _Palette, _Code} from 'lucide-react';

interface SidebarItem {_name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean;}

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const sidebarItems: SidebarItem[] = [
  {_name: 'All Services', _href: '/comprehensive-services-showcase-2025', _icon: <Globe className="w-5 h-5" />, _description: 'Complete portfolio of all technology services', _badge: 'Showcase', _children: [
      { name: 'View All Services', _href: '/comprehensive-services-showcase-2025', _description: 'Complete services portfolio'},
      {_name: 'Service Categories', _href: '/comprehensive-services-showcase-2025#categories', _description: 'Browse by category'},
      {_name: 'Pricing Comparison', _href: '/comprehensive-services-showcase-2025#pricing', _description: 'Compare service costs'},
      {_name: 'Service Search', _href: '/comprehensive-services-showcase-2025#search', _description: 'Find specific services'},
      {_name: 'Latest Innovations', _href: '/revolutionary-2025-services-showcase', _description: 'Cutting-edge solutions'},
      {_name: '2026 Services', _href: '/revolutionary-2026-services', _description: 'Next generation solutions'},
      {_name: '2027 Services', _href: '/revolutionary-2027-services-showcase', _description: 'Future-ready services'},
      {_name: 'Ultimate 2026', _href: '/ultimate-2026-services-showcase', _description: 'Premium service collection'}
    ]
  },
  {_name: 'AI & Consciousness', _href: '/ai-services', _icon: <Brain className="w-5 h-5" />, _description: 'Revolutionary AI consciousness and emotional intelligence', _badge: 'New', _isNew: true, _children: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2025', _description: 'Emotional intelligence and self-awareness'},
      {_name: 'AI Quantum Neural Network', _href: '/ai-quantum-neural-network', _description: 'Hybrid AI-Quantum computing platform'},
      {_name: 'AI Autonomous Research', _href: '/ai-autonomous-research-assistant', _description: 'Self-directed AI research'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-training', _description: 'EQ training platform'},
      {_name: 'AI Predictive Maintenance', _href: '/ai-predictive-maintenance-platform', _description: 'Equipment failure prediction'},
      {_name: 'AI Content Personalization', _href: '/ai-content-personalization-engine', _description: 'Personalized content delivery'},
      {_name: 'AI Autonomous Ecosystem', _href: '/ai-autonomous-ecosystem-manager', _description: 'Self-managing AI systems'},
      {_name: 'AI Ethics & Governance', _href: '/ai-ethics-governance-framework', _description: 'Ethical AI frameworks'},
      {_name: 'AI Creativity Studio', _href: '/ai-creativity-studio', _description: 'AI-powered creative content'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform', _description: 'Personalized AI learning'},
      {_name: 'AI Healthcare Diagnostics', _href: '/ai-healthcare-diagnostics', _description: 'Medical AI solutions'},
      {_name: 'AI Financial Intelligence', _href: '/ai-financial-intelligence', _description: 'Financial AI analytics'},
      {_name: 'AI Sustainability Platform', _href: '/ai-sustainability-platform', _description: 'Environmental AI solutions'},
      {_name: 'AI Legal Contract Analyzer', _href: '/ai-legal-contract-analyzer', _description: 'Legal document analysis'}
    ]
  },
  {_name: 'Quantum & Emerging Tech', _href: '/quantum-services', _icon: <Atom className="w-5 h-5" />, _description: 'Quantum computing and breakthrough technologies', _badge: 'Hot', _isHot: true, _children: [
      { name: 'Space Resource Mining', _href: '/space-resource-mining-platform', _description: 'Asteroid mining and space resources'},
      {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-platform', _description: 'Unbreakable encryption'},
      {_name: 'Brain-Computer Interface', _href: '/brain-computer-interface-platform', _description: 'Neural interface technology'},
      {_name: 'Quantum Materials Discovery', _href: '/quantum-materials-discovery-platform', _description: 'Materials science acceleration'},
      {_name: 'Autonomous Vehicle AI', _href: '/autonomous-vehicle-ai-platform', _description: 'Self-driving AI systems'},
      {_name: 'Quantum Bio-Computing', _href: '/quantum-bio-computing-platform', _description: 'Quantum-biological hybrid processing'},
      {_name: 'Quantum Energy Platform', _href: '/quantum-energy-platform', _description: 'Fusion power simulation'},
      {_name: 'Quantum Robotics', _href: '/quantum-robotics', _description: 'Quantum-enhanced robotics'},
      {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity-platform', _description: 'Next-gen security'},
      {_name: 'Quantum Logistics', _href: '/quantum-logistics-optimization', _description: 'Route optimization'},
      {_name: 'Quantum Metaverse', _href: '/quantum-metaverse', _description: 'Quantum-enhanced virtual worlds'},
      {_name: 'Quantum IoT Platform', _href: '/quantum-iot', _description: 'Quantum-secured IoT'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading', _description: 'Quantum trading algorithms'}
    ]
  },
  {_name: 'Enterprise IT', _href: '/enterprise-it', _icon: <Shield className="w-5 h-5" />, _color: 'text-blue-400', _items: [
      { name: 'Quantum-Secure Cloud', _href: '/quantum-secure-cloud-infrastructure', _badge: 'New'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center', _badge: 'New'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration', _badge: 'New'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform', _badge: 'New'},
      {_name: 'AI-Powered DevOps', _href: '/ai-powered-devops-platform', _badge: 'New'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure-platform'},
      {_name: 'Zero Trust Security', _href: '/zero-trust-security-platform'},
      {_name: 'Quantum Networking', _href: '/quantum-networking'},
      {_name: 'Quantum Data Center', _href: '/quantum-data-center'},
      {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity'},
      {_name: 'Quantum Cloud Migration', _href: '/quantum-cloud-migration'}
    ]
  },
  {_name: 'Micro SAAS', _href: '/micro-saas', _icon: <Rocket className="w-5 h-5" />, _description: 'Innovative business solutions for modern enterprises', _badge: 'Popular', _children: [
      { name: 'AI Business Intelligence', _href: '/ai-business-intelligence-suite', _description: 'Data-driven insights'},
      {_name: 'AI Content Generation', _href: '/ai-content-generation-platform', _description: 'Automated content creation'},
      {_name: 'AI Customer Service', _href: '/ai-customer-service-automation', _description: 'Intelligent support automation'},
      {_name: 'AI Sales Intelligence', _href: '/ai-sales-intelligence-platform', _description: 'Sales performance optimization'},
      {_name: 'AI Marketing Automation', _href: '/ai-marketing-automation-suite', _description: 'Campaign optimization'},
      {_name: 'AI Project Management', _href: '/ai-project-management-platform', _description: 'Intelligent project coordination'},
      {_name: 'AI Financial Analytics', _href: '/ai-financial-analytics-platform', _description: 'Financial insights and optimization'},
      {_name: 'AI HR Management', _href: '/ai-hr-management-platform', _description: 'HR operations automation'},
      {_name: 'AI Supply Chain', _href: '/ai-supply-chain-optimization', _description: 'Supply chain optimization'},
      {_name: 'AI Legal Analysis', _href: '/ai-legal-document-analysis', _description: 'Legal document processing'}
    ]
  },
  {_name: 'Creative & Design', _href: '/creative-services', _icon: <Palette className="w-5 h-5" />, _description: 'AI-powered creative and design solutions', _children: [
      { name: 'AI Creativity Studio', _href: '/ai-creativity-studio', _description: 'AI-powered creative content'},
      {_name: 'Metaverse Development', _href: '/metaverse-development-studio', _description: '3D world creation'},
      {_name: 'Quantum Metaverse', _href: '/quantum-metaverse-platform', _description: 'Quantum-enhanced experiences'},
      {_name: '3D Design & Modeling', _href: '/3d-design-platform', _description: 'Advanced 3D creation tools'},
      {_name: 'AI Video Generation', _href: '/ai-video-generation', _description: 'Automated video content'},
      {_name: 'AI Music Composition', _href: '/ai-music-composition', _description: 'AI-generated music'}
    ]
  },
  {_name: 'Research & Development', _href: '/research-development', _icon: <BookOpen className="w-5 h-5" />, _description: 'Cutting-edge research and development services', _children: [
      { name: 'AI Autonomous Research', _href: '/ai-autonomous-research-assistant', _description: 'Self-directed research'},
      {_name: 'Quantum Materials Discovery', _href: '/quantum-materials-discovery-platform', _description: 'Materials science acceleration'},
      {_name: 'Space Technology Research', _href: '/space-technology-research', _description: 'Space exploration solutions'},
      {_name: 'Biotech AI Research', _href: '/biotech-ai-research-platform', _description: 'Biological research automation'},
      {_name: 'Neuroscience Research', _href: '/neuroscience-research-platform', _description: 'Brain research tools'},
      {_name: 'Climate Research AI', _href: '/climate-research-ai', _description: 'Environmental research automation'}
    ]
  },
  {_name: 'Industry Solutions', _href: '/industry-solutions', _icon: <Truck className="w-5 h-5" />, _description: 'Specialized solutions for specific industries', _children: [
      { name: 'Healthcare AI', _href: '/healthcare-ai-solutions', _description: 'Medical AI applications'},
      {_name: 'Financial Services', _href: '/financial-ai-solutions', _description: 'Fintech AI solutions'},
      {_name: 'Manufacturing AI', _href: '/manufacturing-ai-solutions', _description: 'Industrial automation'},
      {_name: 'Retail AI', _href: '/retail-ai-solutions', _description: 'Retail optimization'},
      {_name: 'Education AI', _href: '/education-ai-solutions', _description: 'Educational technology'},
      {_name: 'Transportation AI', _href: '/transportation-ai-solutions', _description: 'Smart transportation'}
    ]
  },
  {_name: 'Pricing & Plans', _href: '/pricing', _icon: <DollarSign className="w-5 h-5" />, _description: 'Flexible pricing options for all services', _children: [
      { name: '2025 Pricing', _href: '/pricing-2025', _description: 'Current year pricing'},
      {_name: '2026 Pricing', _href: '/pricing-2026', _description: 'Next year pricing'},
      {_name: 'Enterprise Plans', _href: '/enterprise-pricing', _description: 'Large organization pricing'},
      {_name: 'Startup Plans', _href: '/startup-pricing', _description: 'Small business pricing'},
      {_name: 'Custom Solutions', _href: '/custom-pricing', _description: 'Tailored pricing'},
      {_name: 'ROI Calculator', _href: '/roi-calculator', _description: 'Calculate your return on investment'}
    ]
  },
  {_name: 'Resources', _href: '/resources', _icon: <BookOpen className="w-5 h-5" />, _description: 'Educational resources and documentation', _children: [
      { name: 'Documentation', _href: '/docs', _description: 'Technical documentation'},
      {_name: 'API Reference', _href: '/api-docs', _description: 'API documentation'},
      {_name: 'Tutorials', _href: '/tutorials', _description: 'Step-by-step guides'},
      {_name: 'Case Studies', _href: '/case-studies', _description: 'Success stories'},
      {_name: 'Blog', _href: '/blog', _description: 'Latest insights and news'},
      {_name: 'Research Papers', _href: '/research-papers', _description: 'Academic publications'}
    ]
  },
  {_name: 'Support', _href: '/support', _icon: <Settings className="w-5 h-5" />, _description: 'Technical support and customer service', _children: [
      { name: 'Help Center', _href: '/help', _description: 'Self-service support'},
      {_name: 'Contact Support', _href: '/contact', _description: 'Get in touch'},
      {_name: 'Live Chat', _href: '/live-chat', _description: 'Real-time assistance'},
      {_name: 'Training Programs', _href: '/training', _description: 'Skill development'},
      {_name: 'Community Forum', _href: '/community', _description: 'User community'},
      {_name: 'Status Page', _href: '/status', _description: 'Service status'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ]
  }
],

<<<<<<< HEAD
const resources = [
<<<<<<< HEAD
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
],
=======
  { name: 'Documentation', href: '/docs', icon: <FileText className=&quot;w-4 h-4&quot; /> },
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className=&quot;w-4 h-4&quot; /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className=&quot;w-4 h-4&quot; /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className=&quot;w-4 h-4&quot; /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className=&quot;w-4 h-4&quot; /> },
  { name: 'Community Forum', href: '/community', icon: <Users className=&quot;w-4 h-4&quot; /> }
=======
const _resources = [
  {_name: 'Documentation', _href: '/docs', _icon: <FileText className="w-4 h-4" />},
  {_name: 'API Reference', _href: '/api-documentation', _icon: <Settings className="w-4 h-4" />},
  {_name: 'Case Studies', _href: '/case-studies', _icon: <BookOpen className="w-4 h-4" />},
  {_name: 'Blog & News', _href: '/blog', _icon: <FileText className="w-4 h-4" />},
  {_name: 'Training & Certification', _href: '/training', _icon: <Award className="w-4 h-4" />},
  {_name: 'Community Forum', _href: '/community', _icon: <Users className="w-4 h-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7


<<<<<<< HEAD
const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
],

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections),
    if (newExpanded.has(title)) {
      newExpanded.delete(title)
    } else {
      newExpanded.add(title)
    }
    setExpandedSections(newExpanded)
  },
=======
const _supportLinks = [
  {_name: 'Contact Support', _href: '/support', _description: 'Get help from our team'},
  {_name: 'Documentation', _href: '/docs', _description: 'Technical guides'},
  {_name: 'API Reference', _href: '/api-documentation', _description: 'Developer documentation'},
  {_name: 'Status Page', _href: '/status', _description: 'Service status'},
  {_name: 'Training', _href: '/training', _description: 'Learn our platforms'},
  {_name: 'Community', _href: '/community', _description: 'Connect with users'}
];

  const _toggleSection = (_title: string) => {_const _newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);} else {_newExpanded.add(title);}
    setExpandedSections(newExpanded);
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  ),

<<<<<<< HEAD
  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: &quot;easeOut&quot; }}
      className=&quot;fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent&quot;
    >
      {/* Header */}
      <div className=&quot;sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4&quot;>
        <div className=&quot;flex items-center space-x-3 mb-4&quot;>
          <div className=&quot;relative&quot;>
            <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center&quot;>
              <Zap className=&quot;w-6 h-6 text-white&quot; />
=======
  return (_<motion.aside
      initial={_{ x: -300, _opacity: 0}}
      animate={_{ x: 0, _opacity: 1}}
      transition={_{ duration: 0.5, _ease: "easeOut"}}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
    >
      {_/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
            <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50&quot;></div>
          </div>
          <div>
            <h2 className=&quot;text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent&quot;>
              Zion Tech Group
            </h2>
            <p className=&quot;text-xs text-gray-400&quot;>Navigation</p>
          </div>
        </div>

<<<<<<< HEAD
        {/* Contact Info */}
        <div className=&quot;space-y-2 text-xs text-gray-300&quot;>
          <div className=&quot;flex items-center space-x-2&quot;>
            <Phone className=&quot;w-3 h-3 text-cyan-400&quot; />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className=&quot;flex items-center space-x-2&quot;>
            <Mail className=&quot;w-3 h-3 text-cyan-400&quot; />
            <span>{contactInfo.email}</span>
          </div>
          <div className=&quot;flex items-center space-x-2&quot;>
            <Globe className=&quot;w-3 h-3 text-cyan-400&quot; />
            <span>{contactInfo.website}</span>
=======
        {_/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>{_contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>{_contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{_contactInfo.website}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Navigation Sections */}
      <div className=&quot;p-4 space-y-2&quot;>
        {sidebarSections.map((section) => (
          <div key={section.title} className=&quot;space-y-1&quot;>
            <button
              onClick={() => toggleSection(section.title)}
              className=&quot;w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group&quot;
            >
              <div className=&quot;flex items-center space-x-3&quot;>
                <div className=&quot;text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200&quot;>
                  {section.icon}
                </div>
                <span className=&quot;font-medium&quot;>{section.title}</span>
                {section.badge && (
                  <span className=&quot;px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full&quot;>
=======
      {_/* Navigation Sections */}
      <div className="p-4 space-y-2">
        {_sidebarSections.map((section) => (_<div key={section.title} className="space-y-1">
            <button
              onClick={_() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {_section.icon}
                </div>
                <span className="font-medium">{_section.title}</span>
                {_section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    {section.badge}
                  </span>
                )}
              </div>
<<<<<<< HEAD
              {expandedSections.has(section.title) ? (
                <ChevronDown className=&quot;w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200&quot; />
=======
              {_expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ) : (
                <ChevronRight className=&quot;w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200&quot; />
              )}
            </button>

            <AnimatePresence>
<<<<<<< HEAD
              {expandedSections.has(section.title) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className=&quot;ml-8 space-y-1&quot;
=======
              {_expandedSections.has(section.title) && (_<motion.div
                  initial={{ opacity: 0, _height: 0}}
                  animate={_{ opacity: 1, _height: 'auto'}}
                  exit={_{ opacity: 0, _height: 0}}
                  transition={_{ duration: 0.2}}
                  className="ml-8 space-y-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <CloseIcon className=&quot;w-5 h-5&quot; />
                </button>
              </div>

<<<<<<< HEAD
              {/* Search Bar */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50&quot;
                />
              </div>
              
              {/* Search Results */}
              {searchQuery && (
                <div className=&quot;mt-4 space-y-2&quot;>
                  <h4 className=&quot;text-sm font-medium text-gray-300&quot;>Search Results</h4>
                  {filteredServices.length > 0 ? (
                    <div className=&quot;space-y-1&quot;>
                      {filteredServices.slice(0, 5).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={onClose}
                          className=&quot;block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group&quot;
                        >
                          <div className=&quot;text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                            {service.name}
                          </div>
                          <div className=&quot;text-xs text-gray-500&quot;>
                            {service.description}
=======
              {_/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={_searchQuery}
                  onChange={_(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
              
              {_/* Search Results */}
              {_searchQuery && (
                <div className="mt-4 space-y-2">
                  <h4 className="text-sm font-medium text-gray-300">Search Results</h4>
                  {filteredServices.length > 0 ? (
                    <div className="space-y-1">
                      {filteredServices.slice(0, _5).map(_(service) => (
                        <Link
                          key={service.name}
                          href={_service.href}
                          onClick={_onClose}
                          className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                        >
                          <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                            {_service.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {_service.description}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </a>
                      ))}
<<<<<<< HEAD
                      {filteredServices.length > 5 && (
                        <div className=&quot;text-xs text-cyan-400 text-center&quot;>
=======
                      {_filteredServices.length > 5 && (
                        <div className="text-xs text-cyan-400 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          +{filteredServices.length - 5} more results
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className=&quot;text-sm text-gray-500 text-center py-2&quot;>
                      No services found
                    </div>
                  )}
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* Contact Information */}
            <div className=&quot;p-6 border-b border-cyan-500/30&quot;>
              <h3 className=&quot;text-lg font-semibold text-white mb-4 flex items-center space-x-2&quot;>
                <Mail className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span>Contact Information</span>
              </h3>
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                  <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-cyan-400 transition-colors duration-200&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex items-start space-x-3 text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-cyan-400 mt-1&quot; />
                  <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
=======
            {_/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={_`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {_contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={_`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {_contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </div>

<<<<<<< HEAD
            {/* Quick Stats */}
            <div className=&quot;p-6 border-b border-cyan-500/30&quot;>
              <h3 className=&quot;text-lg font-semibold text-white mb-4 flex items-center space-x-2&quot;>
                <TrendingUp className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span>Company Stats</span>
              </h3>
              <div className=&quot;grid grid-cols-2 gap-4&quot;>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className=&quot;text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30&quot;
                  >
                    <div className=&quot;text-2xl font-bold text-white mb-1&quot;>{stat.value}</div>
                    <div className=&quot;text-xs text-gray-400&quot;>{stat.label}</div>
=======
            {_/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {_stats.map(_(stat, _index) => (
                  <motion.div
                    key={stat.label}
                    initial={_{ opacity: 0, _scale: 0.8}}
                    animate={_{ opacity: 1, _scale: 1}}
                    transition={_{ duration: 0.3, _delay: index * 0.1}}
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{_stat.value}</div>
                    <div className="text-xs text-gray-400">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </motion.div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Quick Links */}
            <div className=&quot;p-6 border-b border-cyan-500/30&quot;>
              <h3 className=&quot;text-lg font-semibold text-white mb-4 flex items-center space-x-2&quot;>
                <Star className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span>Quick Links</span>
              </h3>
              <div className=&quot;space-y-2&quot;>
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className=&quot;flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group&quot;
                  >
                    <div className=&quot;text-gray-400 group-hover:text-cyan-400 transition-colors duration-200&quot;>
                      {link.icon}
                    </div>
                    <span className=&quot;text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                      {link.name}
=======
            {_/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                {_quickLinks.map(_(link) => (
                  <Link
                    key={link.name}
                    href={_link.href}
                    onClick={_onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {_link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {_link.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </span>
                  </a>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Service Categories */}
            <div className=&quot;p-6 border-b border-cyan-500/30&quot;>
              <h3 className=&quot;text-lg font-semibold text-white mb-4 flex items-center space-x-2&quot;>
                <Rocket className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span>Service Categories</span>
              </h3>
              <div className=&quot;space-y-2&quot;>
                {sidebarItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className=&quot;w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group&quot;
                    >
                      <div className=&quot;flex items-center space-x-3&quot;>
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <span className=&quot;text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                          {item.name}
=======
            {_/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {_sidebarItems.map(_(item) => (_<div key={item.name}>
                    <button
                      onClick={_() => toggleCategory(item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={_`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {_item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {_item.name}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </span>
                      </div>
                      <ChevronRight 
                        className={_`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item.name ? 'rotate-90' : ''}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
<<<<<<< HEAD
                      {expandedCategory === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className=&quot;ml-8 mt-2 space-y-1&quot;
=======
                      {_expandedCategory === item.name && (_<motion.div
                          initial={{ opacity: 0, _height: 0}}
                          animate={_{ opacity: 1, _height: 'auto'}}
                          exit={_{ opacity: 0, _height: 0}}
                          transition={_{ duration: 0.2}}
                          className="ml-8 mt-2 space-y-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          {_item.children?.map((child) => (
                            <Link
                              key={child.name}
<<<<<<< HEAD
                              href={child.href}
                              onClick={onClose}
                              className=&quot;flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group&quot;
                            >
                              <span className=&quot;text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200&quot;>
                                {child.name}
                              </span>
                              {child.badge && (
                                <span className=&quot;px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full&quot;>
=======
                              href={_child.href}
                              onClick={_onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                {_child.name}
                              </span>
                              {_child.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  {child.badge}
                                </span>
                              )}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

<<<<<<< HEAD
            {/* Quick Links */}
            <div className=&quot;p-6 border-b border-cyan-500/30&quot;>
              <h3 className=&quot;text-lg font-semibold text-white mb-4 flex items-center space-x-2&quot;>
                <Zap className=&quot;w-5 h-5 text-cyan-400&quot; />
=======
            {_/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <span>Quick Links</span>
              </h3>
              <div className=&quot;space-y-2&quot;>
                <Link
<<<<<<< HEAD
                  href=&quot;/contact&quot;
                  onClick={onClose}
                  className=&quot;block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group&quot;
=======
                  href="/contact"
                  onClick={_onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;font-medium text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                    Contact Us
                  </div>
                  <div className=&quot;text-xs text-gray-500&quot;>Get in touch with our team</div>
                </a>
                <Link
<<<<<<< HEAD
                  href=&quot;/pricing&quot;
                  onClick={onClose}
                  className=&quot;block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group&quot;
=======
                  href="/pricing"
                  onClick={_onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;font-medium text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                    View Pricing
                  </div>
                  <div className=&quot;text-xs text-gray-500&quot;>Explore our pricing plans</div>
                </a>
                <Link
<<<<<<< HEAD
                  href=&quot;/about&quot;
                  onClick={onClose}
                  className=&quot;block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group&quot;
=======
                  href="/about"
                  onClick={_onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;font-medium text-gray-300 group-hover:text-white transition-colors duration-200&quot;>
                    About Us
                  </div>
                  <div className=&quot;text-xs text-gray-500&quot;>Learn about Zion Tech Group</div>
                </a>
              </div>
            </div>
            <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
              <div className=&quot;text-lg font-bold text-blue-400&quot;>1000+</div>
              <div className=&quot;text-xs text-gray-400&quot;>Clients</div>
            </div>
            <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
              <div className=&quot;text-lg font-bold text-purple-400&quot;>24/7</div>
              <div className=&quot;text-xs text-gray-400&quot;>Support</div>
            </div>
            <div className=&quot;text-center p-3 bg-gray-800/50 rounded-lg&quot;>
              <div className=&quot;text-lg font-bold text-green-400&quot;>99.9%</div>
              <div className=&quot;text-xs text-gray-400&quot;>Uptime</div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <div className=&quot;pt-4 border-t border-gray-800 px-3&quot;>
=======
        {_/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <Link
            href=&quot;/contact&quot;
            className=&quot;block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25&quot;
          >
            <span>Get Started Today</span>
            <ArrowRight className=&quot;w-4 h-4 ml-2 inline&quot; />
          </a>
        </div>
      </div>

<<<<<<< HEAD
      {/* Floating Elements */}
      <div className=&quot;absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse&quot;></div>
      <div className=&quot;absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000&quot;></div>
      <div className=&quot;absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000&quot;></div>
=======
      {_/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </motion.aside>
  )
},

export default EnhancedSidebar2025,
