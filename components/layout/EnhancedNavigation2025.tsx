import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers,
<<<<<<< HEAD
<<<<<<< HEAD
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
<<<<<<< HEAD
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, BookOpen, Building
=======
  DollarSign, Phone, ArrowRight, BarChart,
  PieChart, LineChart, Activity, TrendingUp,
  BarChart3 as BarChart3Icon, PieChart as PieChartIcon
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
=======
  Network, Server, ShieldCheck,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna,
  Heart, GraduationCap, Leaf, Pill, Coins,
  Building2
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
=======
  Network, Server, ShieldCheck,
  DollarSign, Phone, ArrowRight
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-e015
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
<<<<<<< HEAD
<<<<<<< HEAD
  title?: string;
=======
  color?: string;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
=======
  title?: string;
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: '🚀 All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
<<<<<<< HEAD
    isNew: true,
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    children: [
      { name: 'View All Services', href: '/innovative-micro-saas-showcase', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/innovative-micro-saas-showcase#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/innovative-micro-saas-showcase#search', description: 'Find specific services' }
    ]
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI automation and autonomous business processing',
    badge: 'New',
    color: 'from-violet-500 to-purple-600',
<<<<<<< HEAD
    isHot: true,
    children: [
<<<<<<< HEAD
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution', description: 'Emotional intelligence and self-awareness' },
=======
    children: [
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro', description: 'Enterprise AI content generation' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Medical AI diagnostics' },
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', description: 'Personalized AI learning' },
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform', description: 'AI robotics control' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' }
    ]
  },
  {
    name: 'Financial Technology',
    href: '/fintech-services',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Advanced AI-powered financial solutions',
    badge: 'Hot',
    color: 'from-green-500 to-emerald-600',
    children: [
      { name: 'Neural Finance AI', href: '/neural-finance-ai', description: 'AI-powered financial analysis' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
<<<<<<< HEAD
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
<<<<<<< HEAD
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Human-AI emotional collaboration' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Sales Automation', href: '/ai-sales-automation-platform', description: 'Intelligent sales process automation' },
      { name: 'AI Customer Service', href: '/ai-customer-service-platform', description: '24/7 automated support' },
      { name: 'AI HR & Recruitment', href: '/ai-hr-recruitment-platform', description: 'Intelligent talent acquisition' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-platform', description: 'Campaign optimization' },
      { name: 'AI Project Management', href: '/ai-project-management-suite', description: 'Intelligent project planning' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial forecasting' },
      { name: 'AI SEO Optimization', href: '/ai-seo-optimization-platform', description: 'Search engine optimization' },
      { name: 'AI Video Editing', href: '/ai-video-editing-platform', description: 'Automated video editing' },
      { name: 'AI Website Personalization', href: '/ai-website-personalization-platform', description: 'Dynamic content adaptation' },
      { name: 'AI Multimodal Fusion', href: '/ai-multimodal-fusion-platform', description: 'Unified AI processing' },
      { name: 'AI Quantum Hybrid', href: '/ai-quantum-hybrid-computing', description: 'Quantum-enhanced AI' },
      { name: 'AI Mental Health Companion', href: '/ai-mental-health-companion', description: 'Emotional support AI' },
      { name: 'AI Phone Agent', href: '/ai-phone-agent', description: 'Voice AI for calls' },
      { name: 'AI Meeting Transcriber', href: '/ai-meeting-transcriber-pro', description: 'Meeting transcription' },
      { name: 'AI IoT Platform', href: '/ai-iot-platform', description: 'Intelligent IoT management' },
      { name: 'AI Market Research', href: '/ai-market-research', description: 'Competitive intelligence' }
=======
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Autonomous Code Generation', href: '/ai-autonomous-code-generation', description: 'AI that writes code' },
      { name: 'AI Autonomous Marketing', href: '/ai-autonomous-marketing-platform', description: 'Autonomous marketing AI' },
      { name: 'AI Autonomous Sales', href: '/ai-autonomous-sales-platform', description: 'AI that closes deals' },
      { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', description: 'Autonomous support AI' },
      { name: 'AI Autonomous HR', href: '/ai-autonomous-hr-platform', description: 'Autonomous HR management' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
=======
      { name: 'Quantum Risk Financial Manager', href: '/quantum-risk-financial-manager', description: 'Quantum risk management' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
<<<<<<< HEAD
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    color: 'from-indigo-500 to-blue-600',
    isPremium: true,
=======
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-indigo-500 to-blue-600',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    children: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum logistics optimization' },
      { name: 'Quantum Cybersecurity Suite', href: '/quantum-cybersecurity-suite', description: 'Quantum security solutions' },
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Quantum energy management' },
=======
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Human-AI emotional collaboration' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    children: [
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
<<<<<<< HEAD
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics-platform', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Metaverse AI Development', href: '/metaverse-ai-development-platform', description: 'Intelligent virtual worlds' },
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Quantum ML algorithms' },
      { name: 'Quantum Neural Networks', href: '/quantum-neural-networks', description: 'Quantum AI processing' },
      { name: 'Quantum Cryptography', href: '/quantum-cryptography-platform', description: 'Unbreakable security' },
      { name: 'Quantum Sensors', href: '/quantum-sensors-platform', description: 'Ultra-sensitive detection' },
      { name: 'Quantum Communication', href: '/quantum-communication-platform', description: 'Secure quantum networks' },
      { name: 'Quantum Simulation', href: '/quantum-simulation-platform', description: 'Complex system modeling' },
      { name: 'Quantum Optimization', href: '/quantum-optimization-platform', description: 'Advanced problem solving' },
      { name: 'Quantum Chemistry', href: '/quantum-chemistry-platform', description: 'Molecular simulation' },
      { name: 'Quantum Finance', href: '/quantum-finance-platform', description: 'Financial modeling' },
      { name: 'Quantum Biology', href: '/quantum-biology-platform', description: 'Biological quantum effects' }
    ]
  },
  {
    name: '🏢 Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
<<<<<<< HEAD
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
=======
    description: 'Enterprise solutions and infrastructure',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    color: 'from-blue-500 to-cyan-600',
    children: [
<<<<<<< HEAD
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security', description: 'Advanced cybersecurity' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
=======
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-healing IT infrastructure' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent development automation' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform', description: 'Quantum-enhanced cloud computing' },
<<<<<<< HEAD
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-757c
=======
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture', description: 'Advanced cybersecurity' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
<<<<<<< HEAD
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud transitions' },
      { name: 'Quantum Security Platform', href: '/quantum-security-platform', description: 'Quantum encryption' },
      { name: 'Quantum Compliance', href: '/quantum-compliance-platform', description: 'Regulatory compliance' },
      { name: 'Quantum Monitoring', href: '/quantum-monitoring-platform', description: 'Advanced system monitoring' },
      { name: 'Quantum Backup', href: '/quantum-backup-platform', description: 'Secure data backup' },
      { name: 'Quantum Recovery', href: '/quantum-recovery-platform', description: 'Disaster recovery' },
      { name: 'Quantum Analytics', href: '/quantum-analytics-platform', description: 'Advanced data analytics' },
      { name: 'Quantum Integration', href: '/quantum-integration-platform', description: 'System integration' },
      { name: 'Quantum Automation', href: '/quantum-automation-platform', description: 'Intelligent automation' },
      { name: 'Quantum Governance', href: '/quantum-governance-platform', description: 'IT governance' },
      { name: 'Quantum Risk Management', href: '/quantum-risk-management', description: 'Risk assessment' }
=======
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-architecture-platform', description: 'Advanced cybersecurity' },
      { name: 'Quantum Networking', href: '/quantum-networking-infrastructure', description: 'Quantum communication protocols' },
      { name: 'Autonomous Data Center', href: '/autonomous-data-center-platform', description: 'AI-managed data centers' },
      { name: 'AI Infrastructure Management', href: '/ai-powered-infrastructure-management', description: 'Intelligent infrastructure' },
      { name: 'Hybrid Cloud Orchestration', href: '/hybrid-cloud-orchestration-platform', description: 'Multi-cloud management' },
      { name: 'Advanced IT Infrastructure', href: '/advanced-it-infrastructure-services', description: 'Quantum computing, edge computing, zero-trust security, and autonomous data centers' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
    ]
  },
  {
    name: '💻 Micro SAAS',
=======
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud migration' }
    ]
  },
  {
    name: 'Micro SAAS',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    children: [
<<<<<<< HEAD
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'Intelligent decision making' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform', description: 'AI content creation' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite', description: 'AI-enhanced CRM' },
<<<<<<< HEAD
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform', description: 'AI financial analysis' },
      { name: 'Project Management', href: '/intelligent-project-management-suite', description: 'AI project optimization' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence', description: 'Advanced analytics' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation', description: 'Intelligent marketing' },
      { name: 'Customer Service AI', href: '/ai-customer-service', description: 'Automated support' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment', description: 'AI talent management' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer', description: 'Legal document review' },
      { name: 'Sales Automation', href: '/ai-sales-automation-platform', description: 'Sales process automation' },
      { name: 'Customer Service Platform', href: '/ai-customer-service-platform', description: '24/7 support automation' },
      { name: 'HR & Recruitment Platform', href: '/ai-hr-recruitment-platform', description: 'Talent acquisition' },
      { name: 'Marketing Automation Platform', href: '/ai-marketing-automation-platform', description: 'Campaign optimization' },
      { name: 'Project Management Suite', href: '/ai-project-management-suite', description: 'Project automation' },
      { name: 'Financial Analytics Platform', href: '/ai-financial-analytics-platform', description: 'Financial insights' },
      { name: 'SEO Optimization Platform', href: '/ai-seo-optimization-platform', description: 'Search optimization' },
      { name: 'Video Editing Platform', href: '/ai-video-editing-platform', description: 'Automated editing' },
      { name: 'Website Personalization', href: '/ai-website-personalization-platform', description: 'Dynamic content' },
      { name: 'Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Data insights' },
      { name: 'Content Generation Platform', href: '/ai-content-generation-platform', description: 'AI content creation' }
=======
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-platform', description: 'Intelligent marketing' },
      { name: 'AI Customer Service', href: '/ai-customer-service-platform', description: 'Automated support' },
      { name: 'AI HR & Recruitment', href: '/ai-hr-recruitment-platform', description: 'AI talent management' },
      { name: 'AI Project Management', href: '/ai-project-management-suite', description: 'Intelligent project management' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial intelligence' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'AI-powered business intelligence, marketing, sales, customer service, and HR solutions' }
    ]
  },
  {
    name: 'AI Automation',
    href: '/advanced-ai-automation-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'AI automation for development and operations',
    badge: 'New',
    children: [
      { name: 'AI Code Review', href: '/ai-code-review-assistant', description: 'Intelligent code analysis' },
      { name: 'AI Testing Automation', href: '/ai-testing-automation-platform', description: 'Intelligent test automation' },
      { name: 'AI DevOps Intelligence', href: '/ai-devops-intelligence-platform', description: 'Intelligent DevOps' },
      { name: 'AI Security Automation', href: '/ai-security-automation-platform', description: 'Intelligent security' },
      { name: 'AI Data Pipeline', href: '/ai-data-pipeline-automation', description: 'Intelligent data management' },
      { name: 'AI Infrastructure', href: '/ai-infrastructure-automation', description: 'Intelligent infrastructure' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Healthcare & Biotech',
    href: '/healthcare-services',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Advanced healthcare and biotechnology solutions',
    badge: 'New',
    color: 'from-red-500 to-pink-600',
    children: [
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Medical AI diagnostics' },
      { name: 'Biotech AI Research Platform', href: '/biotech-ai-research-platform', description: 'AI-powered research' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'Biotech AI', href: '/biotech-ai', description: 'Biotechnology AI platform' }
    ]
  },
  {
    name: 'Education & Learning',
    href: '/education-services',
    icon: <Users className="w-5 h-5" />,
    description: 'AI-powered educational technology solutions',
    badge: 'New',
    color: 'from-yellow-500 to-orange-600',
    children: [
      { name: 'AI Education Platform Pro', href: '/ai-education-platform-pro', description: 'Personalized AI learning' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'AI-powered education' }
    ]
  },
  {
    name: 'Energy & Sustainability',
    href: '/energy-services',
    icon: <Zap className="w-5 h-5" />,
    description: 'Quantum energy and sustainability solutions',
    badge: 'New',
    color: 'from-orange-500 to-red-600',
    children: [
      { name: 'Quantum Energy Optimization', href: '/quantum-energy-optimization', description: 'Quantum energy management' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' }
    ]
  },
  {
    name: 'Robotics & Automation',
    href: '/robotics-services',
    icon: <Rocket className="w-5 h-5" />,
    description: 'AI-powered robotics and automation solutions',
    badge: 'New',
    color: 'from-pink-500 to-purple-600',
    children: [
      { name: 'AI Autonomous Robotics Platform', href: '/ai-autonomous-robotics-platform', description: 'AI robotics control' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' }
    ]
  },
  {
    name: 'Supply Chain & Logistics',
    href: '/supply-chain-services',
    icon: <Network className="w-5 h-5" />,
    description: 'Quantum-powered supply chain optimization',
    badge: 'New',
    color: 'from-teal-500 to-green-600',
    children: [
      { name: 'Quantum Supply Chain Optimizer', href: '/quantum-supply-chain-optimizer', description: 'Quantum logistics optimization' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-tech',
    icon: <Rocket className="w-5 h-5" />,
<<<<<<< HEAD
    description: 'Space technology and metaverse solutions',
    children: [
      { name: 'Space Mining Platform', href: '/space-resource-mining-platform', description: 'Asteroid mining operations' },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI space solutions' },
      { name: 'Metaverse Development', href: '/metaverse-ai-development-platform', description: 'Metaverse platforms' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Logistics', href: '/space-logistics-platform', description: 'Space transportation' },
      { name: 'Satellite Technology', href: '/satellite-technology-platform', description: 'Satellite solutions' },
      { name: 'Space Research', href: '/space-research-platform', description: 'Space exploration tools' },
      { name: 'Space Mining Analytics', href: '/space-mining-analytics', description: 'Mining data analysis' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8f08
=======
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'AI-powered business decisions' },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', description: 'Next-generation CRM' },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro', description: 'AI content generation' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial analytics platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental management' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', description: 'Emotional AI platform' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'Creative AI tools' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'Medical technology solutions' },
      { name: 'Financial Services', href: '/financial-solutions', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing', href: '/manufacturing-solutions', description: 'Industrial automation' },
      { name: 'Retail & E-commerce', href: '/retail-solutions', description: 'Digital commerce solutions' },
<<<<<<< HEAD
      { name: 'Education', href: '/education-solutions', description: 'EdTech solutions' },
=======
      { name: 'Education', href: '/education-solutions', description: 'Learning technology platforms' },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
      { name: 'Government', href: '/government-solutions', description: 'Public sector technology' }
    ]
  },
  {
<<<<<<< HEAD
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and tools',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'Developer APIs' },
      { name: 'Blog', href: '/blog', description: 'Industry insights' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Whitepapers', href: '/whitepapers', description: 'Research papers' },
      { name: 'Webinars', href: '/webinars', description: 'Educational content' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
=======
    name: 'Company',
    href: '/about',
    icon: <Building2 className="w-5 h-5" />,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Our mission and vision' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
<<<<<<< HEAD
      { name: 'News', href: '/news', description: 'Company updates' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'Partners', href: '/partners', description: 'Partnership opportunities' }
=======
    description: 'Space exploration and virtual worlds',
    color: 'from-purple-500 to-pink-600',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Space Technology AI Platform', href: '/space-technology-ai-platform', description: 'AI space technology' },
      { name: 'Metaverse Development Studio Pro', href: '/metaverse-development-studio-pro', description: 'Metaverse development' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Colonization Services', href: '/space-colonization-services', description: 'Space settlement solutions' },
      { name: 'Orbital Mechanics', href: '/orbital-mechanics', description: 'Orbital calculations' },
      { name: 'Satellite Operations', href: '/satellite-operations', description: 'Satellite management' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
=======
      { name: 'News & Updates', href: '/news', description: 'Latest company news' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
      { name: 'Blog', href: '/blog', description: 'Industry insights' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    ]
  }
];

<<<<<<< HEAD
<<<<<<< HEAD
=======
const quickLinks = [
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'Support', href: '/support', icon: Shield },
  { name: 'Documentation', href: '/docs', icon: Code }
];

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Close dropdowns when clicking outside
=======
const EnhancedNavigation2025: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
<<<<<<< HEAD

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
<<<<<<< HEAD
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-cyan-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-semibold">Revolutionary Technology Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
=======
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredServices = navigationItems.flatMap(item => 
    item.children?.filter(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/50' 
        : 'bg-transparent'
=======
      isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-cyan-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="text-cyan-300 hover:text-white transition-colors">
                Get Started Today
              </Link>
              <Link href="/support" className="text-cyan-300 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
<<<<<<< HEAD
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Star className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-400">Future Technology Solutions</p>
=======
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </div>
              <div className="text-xs text-cyan-400">Revolutionary Technology</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
            </div>
          </Link>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <div className="hidden lg:flex items-center space-x-1">
=======
          <div className="hidden lg:flex items-center gap-8">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
<<<<<<< HEAD
                  onClick={() => handleDropdownToggle(item.name)}
                  className={`group px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeDropdown === item.name
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
=======
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-2 px-4 py-2 text-white hover:text-cyan-400 transition-colors duration-200 group-hover:bg-white/5 rounded-lg"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
=======
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                      {item.badge}
                    </span>
                  )}
=======
                    <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                      item.badge === 'New' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                      item.badge === 'Hot' ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white' :
                      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
<<<<<<< HEAD
<<<<<<< HEAD
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
=======
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
=======
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                      onMouseLeave={closeDropdown}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        
                        <div className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                          {item.children?.map((child) => (
=======
                          {item.children?.map((child, index) => (
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
                            <Link
                              key={index}
                              href={child.href}
<<<<<<< HEAD
<<<<<<< HEAD
                              onClick={closeAllDropdowns}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                              <div className="flex-1">
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
=======
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                              onClick={closeDropdown}
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform" />
                              <div className="flex-1">
                                <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
=======
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                            >
                              <div className={`w-8 h-8 bg-gradient-to-r ${item.color || 'from-gray-500 to-gray-600'} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                                <Star className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                  {child.name}
                                </h4>
                                <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                  {child.description}
                                </p>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
=======
          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Quick Links */}
            <div className="flex items-center gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                Get Started
              </button>
            </Link>
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                View Services
              </button>
=======
          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
              />
              
              {/* Search Results Dropdown */}
              {searchQuery && filteredServices.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="p-4">
                    <div className="space-y-2">
                      {filteredServices.slice(0, 8).map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          onClick={() => setSearchQuery('')}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Star className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white">{service.name}</h4>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-1">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Contact Us
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
            </Link>

            {/* Mobile Menu Button */}
            <button
<<<<<<< HEAD
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
=======
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
=======
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
<<<<<<< HEAD
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
=======
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
<<<<<<< HEAD
                    onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                    className="w-full flex items-center justify-between px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>

                  {activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 mt-2 space-y-2"
                    >
                      {item.submenu?.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          onClick={closeMenu}
                          className="block p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                        >
                          <h4 className="text-white font-medium">{subitem.name}</h4>
                          <p className="text-sm text-gray-400 mt-1">{subitem.description}</p>
                        </Link>
                      ))}
                    </motion.div>
=======
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-white hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-sm text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                  )}
                </div>
              ))}

<<<<<<< HEAD
              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Get Started
=======
              <div className="pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-2 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
                
                <Link href="/contact" className="block w-full mt-4">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Get Started
                  </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
=======
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        )}
      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a3ef
    </nav>
  );
};

export default EnhancedNavigation2025;