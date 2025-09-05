<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, ChevronDown, X, Phone, Mail, MapPin, ArrowRight,
  Brain, Rocket, Shield, Zap, Target, Atom, BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, Star, Sparkles,
  Cpu, Lock, Cloud, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Search, Grid, List, TrendingUp, Shield as ShieldIcon, Globe as GlobeIcon,
  User, ShoppingCart, Bell, HelpCircle, FileText, Video, Headphones,
  Code, Database, Network, Server, Monitor, Smartphone,
  Camera, Gamepad2, Palette, Music, Film, BookOpenCheck,
  Building, MessageCircle
} from 'lucide-react',

interface NavigationItem {
  name: string,
  href: string,
  icon?: React.ReactNode,
  description?: string,
  children?: NavigationItem[],
  badge?: string,
  title?: string,
  featured?: boolean
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const navigationItems: NavigationItem[] = [
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className=&quot;w-5 h-5&quot; />,
    description: 'Plans and average market prices',
    children: [
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Compare market averages' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className=&quot;w-5 h-5&quot; />,
    description: 'Guides, reports and tools',
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className=&quot;w-5 h-5&quot; />,
    description: 'Talk to our team',
    featured: true,
    children: [
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' },
      { name: 'Support', href: '/support', description: 'Help center' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Grid className=&quot;w-5 h-5&quot; />,
    description: 'Browse by category',
    badge: 'New',
    children: [
      { name: 'AI & Data', href: '/services?filter=ai-consciousness', description: 'AI, data, ML services' },
      { name: 'Enterprise IT', href: '/services?filter=enterprise-it', description: 'Infra, security, platforms' },
      { name: 'Quantum & Emerging', href: '/services?filter=quantum-emerging', description: 'Quantum, space, frontier' },
      { name: 'Micro SAAS', href: '/services?filter=micro-saas', description: 'Business accelerators' },
      { name: 'Creative & Media', href: '/services?filter=creative-media', description: 'Content, media, design' }
    ]
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className=&quot;w-5 h-5&quot; />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology', featured: true },
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025#search', description: 'Find specific services' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', description: 'Enterprise-grade solutions' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'Business transformation services' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className=&quot;w-5 h-5&quot; />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial forecasting' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'AI Content Automation', href: '/intelligent-content-automation-platform', description: 'Automate content creation' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with AI insights' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2029', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business management' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className=&quot;w-5 h-5&quot; />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Customer Success Platform', href: '/ai-customer-success-platform', description: 'AI-powered customer retention', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered supply chain management' },
      { name: 'Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales automation' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Transform your CRM with AI' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'AI-powered content management' },
      { name: 'Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'Helpdesk & Support', href: '/helpdesk-automation', description: 'AI helpdesk, ticketing, KB, and chat' },
      { name: 'Learning Management (LMS)', href: '/lms-platform', description: 'Adaptive training and certifications' },
      { name: 'E‑commerce Returns', href: '/ecommerce-returns-management', description: 'Automated returns, labels, and RMAs' },
      { name: 'SEO Content Optimizer', href: '/seo-content-optimizer', description: 'On-page AI scoring and fixes' },
      { name: 'Keyword Research Engine', href: '/keyword-research-engine', description: 'Low-competition keywords discovery' },
      { name: 'Privacy Analytics Suite', href: '/analytics-suite', description: 'Cookie-less, privacy-friendly analytics' },
      { name: 'Invoice Studio', href: '/invoice-studio', description: 'Instant branded invoices and payments' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className=&quot;w-5 h-5&quot; />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Quantum-Secure Cloud Infrastructure', href: '/quantum-secure-cloud-infrastructure', description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Financial Trading Platform', href: '/quantum-financial-trading', description: 'Ultra-fast quantum trading' },
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', description: 'Future-proof internet security' },
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
      { name: 'AI-Powered Space Technology', href: '/ai-powered-space-technology', description: 'Revolutionary space AI' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className=&quot;w-5 h-5&quot; />,
    description: 'Advanced enterprise infrastructure and security',
    badge: 'Enterprise',
    featured: true,
    children: [
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform', description: 'Next-generation security architecture' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT infrastructure' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', description: 'Intelligent development operations' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-services', description: 'Next-gen quantum security' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity', description: 'Intelligent threat detection' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Building className=&quot;w-5 h-5&quot; />,
    description: 'Industry-specific technology solutions',
    badge: 'Industry',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'AI-powered healthcare' },
      { name: 'Financial Technology', href: '/fintech-solutions', description: 'Next-gen fintech' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing' },
      { name: 'Retail Technology', href: '/innovative-business-solutions', description: 'Digital retail transformation' },
      { name: 'Education Technology', href: '/training', description: 'AI-powered learning' },
      { name: 'Government Solutions', href: '/enterprise-solutions-showcase', description: 'Public sector innovation' },
      { name: 'Energy & Utilities', href: '/quantum-energy', description: 'Sustainable energy tech' },
      { name: 'Biotech AI Research', href: '/biotech-ai', description: 'AI-driven biotech' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className=&quot;w-5 h-5&quot; />,
    description: 'Documentation, support, and learning resources',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-documentation', description: 'API documentation' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog & News', href: '/blog', description: 'Latest insights' },
      { name: 'Support Center', href: '/support', description: 'Help and support' },
      { name: 'Training', href: '/training', description: 'Learning resources' },
      { name: 'Community', href: '/community', description: 'User community' }
=======
import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_Menu, _ChevronDown, _X, _Phone, _Mail, _MapPin, _ArrowRight, _Brain, _Rocket, _Shield, _Zap, _Target, _Atom, _BookOpen, _Truck, _DollarSign, _BarChart3, _Globe, _Users, _Star, _Sparkles, _Cpu, _Lock, _Cloud, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Search, _Grid, _List, _TrendingUp, _Shield as ShieldIcon, _Globe as GlobeIcon, _User, _ShoppingCart, _Bell, _HelpCircle, _FileText, _Video, _Headphones, _Code, _Database, _Network, _Server, _Monitor, _Smartphone, _Camera, _Gamepad2, _Palette, _Music, _Film, _BookOpenCheck, _Building, _MessageCircle} from 'lucide-react';

interface NavigationItem {_name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;}

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const navigationItems: NavigationItem[] = [
  {_name: 'Pricing', _href: '/pricing', _icon: <DollarSign className="w-5 h-5" />, _description: 'Plans and average market prices', _children: [
      { name: 'Standard Pricing', _href: '/pricing', _description: 'Our plans'},
      {_name: 'Market Pricing', _href: '/market-pricing', _description: 'Compare market averages'}
    ]
  },
  {_name: 'Resources', _href: '/resources', _icon: <BookOpen className="w-5 h-5" />, _description: 'Guides, _reports and tools', _children: [
      { name: 'Blog', _href: '/blog', _description: 'Insights and updates'},
      {_name: 'Case Studies', _href: '/case-studies', _description: 'Proven results'},
      {_name: 'Developer', _href: '/developer', _description: 'Docs and SDKs'},
      {_name: 'Services Advertising', _href: '/services-advertising', _description: 'Features, _benefits and market pricing links'}
    ]
  },
  {_name: 'Contact', _href: '/contact', _icon: <Phone className="w-5 h-5" />, _description: 'Talk to our team', _featured: true, _children: [
      { name: 'Contact Sales', _href: '/contact', _description: 'Get a quote'},
      {_name: 'Support', _href: '/support', _description: 'Help center'}
    ]
  },
  {_name: 'Services', _href: '/services', _icon: <Grid className="w-5 h-5" />, _description: 'Browse by category', _badge: 'New', _children: [
      { name: 'AI & Data', _href: '/services?filter=ai-consciousness', _description: 'AI, _data, _ML services'},
      {_name: 'Enterprise IT', _href: '/services?filter=enterprise-it', _description: 'Infra, _security, _platforms'},
      {_name: 'Quantum & Emerging', _href: '/services?filter=quantum-emerging', _description: 'Quantum, _space, _frontier'},
      {_name: 'Micro SAAS', _href: '/services?filter=micro-saas', _description: 'Business accelerators'},
      {_name: 'Creative & Media', _href: '/services?filter=creative-media', _description: 'Content, _media, _design'}
    ]
  },
  {_name: 'All Services', _href: '/comprehensive-services-showcase-2025', _icon: <Globe className="w-5 h-5" />, _description: 'Complete portfolio of all technology services', _badge: 'Showcase', _featured: true, _children: [
      { name: 'View All Services', _href: '/comprehensive-services-showcase-2025', _description: 'Complete services portfolio'},
      {_name: 'Ultimate 2035 Futuristic', _href: '/ultimate-2035-futuristic-services-showcase', _description: 'Revolutionary future technology', _featured: true},
      {_name: 'Ultimate 2025 Micro SAAS', _href: '/ultimate-2025-micro-saas-showcase', _description: 'Latest innovative services', _featured: true},
      {_name: 'Service Categories', _href: '/comprehensive-services-showcase-2025#categories', _description: 'Browse by category'},
      {_name: 'Pricing Comparison', _href: '/comprehensive-services-showcase-2025#pricing', _description: 'Compare service costs'},
      {_name: 'Service Search', _href: '/comprehensive-services-showcase-2025#search', _description: 'Find specific services'},
      {_name: 'Market Pricing', _href: '/market-pricing', _description: 'Average market prices & references'},
      {_name: 'Latest Innovations', _href: '/revolutionary-2025-services-showcase', _description: 'Cutting-edge solutions'},
      {_name: '2026 Services', _href: '/revolutionary-2026-services', _description: 'Next generation solutions'},
      {_name: '2027 Services', _href: '/revolutionary-2027-services-showcase', _description: 'Future-ready services'},
      {_name: 'Ultimate 2026', _href: '/ultimate-2026-services-showcase', _description: 'Premium service collection'},
      {_name: 'Enterprise Solutions', _href: '/enterprise-solutions-showcase', _description: 'Enterprise-grade solutions'},
      {_name: 'Innovative Business Solutions', _href: '/innovative-business-solutions', _description: 'Business transformation services'}
    ]
  },
  {_name: 'AI & Consciousness', _href: '/ai-services', _icon: <Brain className="w-5 h-5" />, _description: 'Revolutionary AI consciousness and emotional intelligence', _badge: 'New', _featured: true, _children: [
      { name: 'AI Customer Success Platform', _href: '/ai-customer-success-platform', _description: 'Predict and prevent churn with AI', _featured: true},
      {_name: 'AI Sales Intelligence', _href: '/ai-sales-intelligence-platform', _description: 'Supercharge sales with AI automation'},
      {_name: 'AI Financial Planning', _href: '/ai-financial-planning-platform', _description: 'Intelligent financial forecasting'},
      {_name: 'AI Decision Engine', _href: '/ai-powered-decision-engine', _description: 'AI-powered business decisions'},
      {_name: 'AI Content Automation', _href: '/intelligent-content-automation-platform', _description: 'Automate content creation'},
      {_name: 'AI HR Analytics', _href: '/ai-hr-analytics-platform', _description: 'Transform HR with AI insights'},
      {_name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029', _description: 'Emotional intelligence and self-awareness'},
      {_name: 'AI Quantum Neural Network', _href: '/ai-quantum-neural-network', _description: 'Hybrid AI-Quantum computing platform'},
      {_name: 'AI Autonomous Business Operations', _href: '/ai-autonomous-business-operations', _description: 'Fully autonomous business management'},
      {_name: 'AI Autonomous Research', _href: '/ai-autonomous-research-assistant', _description: 'Self-directed AI research'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-training', _description: 'EQ training platform'},
      {_name: 'AI Predictive Maintenance', _href: '/ai-predictive-maintenance-platform', _description: 'Equipment failure prediction'},
      {_name: 'AI Content Personalization', _href: '/ai-content-personalization-engine', _description: 'Personalized content delivery'},
      {_name: 'AI Autonomous Ecosystem', _href: '/ai-autonomous-ecosystem-manager', _description: 'Self-managing AI systems'},
      {_name: 'AI Ethics & Governance', _href: '/ai-ethics-governance-framework', _description: 'Ethical AI frameworks'},
      {_name: 'Advanced AI Automation', _href: '/advanced-ai-automation-services', _description: 'AI automation for development, _testing, _DevOps, _security, _and data'}
    ]
  },
  {_name: 'Micro SAAS Solutions', _href: '/micro-saas', _icon: <Rocket className="w-5 h-5" />, _description: 'Innovative business solutions for modern enterprises', _badge: 'Hot', _featured: true, _children: [
      { name: 'Customer Success Platform', _href: '/ai-customer-success-platform', _description: 'AI-powered customer retention', _featured: true},
      {_name: 'Supply Chain Optimization', _href: '/intelligent-supply-chain-optimization', _description: 'AI-powered supply chain management'},
      {_name: 'Financial Planning Platform', _href: '/ai-financial-planning-platform', _description: 'Intelligent financial planning'},
      {_name: 'HR Analytics Platform', _href: '/ai-hr-analytics-platform', _description: 'AI-powered HR insights'},
      {_name: 'Sales Intelligence Platform', _href: '/ai-sales-intelligence-platform', _description: 'AI-powered sales automation'},
      {_name: 'CRM Intelligence Suite', _href: '/smart-crm-intelligence-suite', _description: 'Transform your CRM with AI'},
      {_name: 'Content Automation Platform', _href: '/intelligent-content-automation-platform', _description: 'AI-powered content management'},
      {_name: 'Decision Engine', _href: '/ai-powered-decision-engine', _description: 'AI-powered business decisions'},
      {_name: 'Helpdesk & Support', _href: '/helpdesk-automation', _description: 'AI helpdesk, _ticketing, _KB, _and chat'},
      {_name: 'Learning Management (LMS)', _href: '/lms-platform', _description: 'Adaptive training and certifications'},
      {_name: 'E‑commerce Returns', _href: '/ecommerce-returns-management', _description: 'Automated returns, _labels, _and RMAs'},
      {_name: 'SEO Content Optimizer', _href: '/seo-content-optimizer', _description: 'On-page AI scoring and fixes'},
      {_name: 'Keyword Research Engine', _href: '/keyword-research-engine', _description: 'Low-competition keywords discovery'},
      {_name: 'Privacy Analytics Suite', _href: '/analytics-suite', _description: 'Cookie-less, _privacy-friendly analytics'},
      {_name: 'Invoice Studio', _href: '/invoice-studio', _description: 'Instant branded invoices and payments'}
    ]
  },
  {_name: 'Quantum & Emerging Tech', _href: '/quantum-services', _icon: <Atom className="w-5 h-5" />, _description: 'Quantum computing and breakthrough technologies', _badge: 'Hot', _featured: true, _children: [
      { name: 'Quantum-Secure Cloud Infrastructure', _href: '/quantum-secure-cloud-infrastructure', _description: 'Unbreakable quantum encryption'},
      {_name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading', _description: 'Ultra-fast quantum trading'},
      {_name: 'Quantum Internet Security Platform', _href: '/quantum-internet-security-platform', _description: 'Future-proof internet security'},
      {_name: 'Space Resource Mining', _href: '/space-resource-mining-platform', _description: 'Asteroid mining and space resources'},
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
      {_name: 'AI-Powered Space Technology', _href: '/ai-powered-space-technology', _description: 'Revolutionary space AI'}
    ]
  },
  {_name: 'Enterprise IT', _href: '/enterprise-it', _icon: <Shield className="w-5 h-5" />, _description: 'Advanced enterprise infrastructure and security', _badge: 'Enterprise', _featured: true, _children: [
      { name: 'Zero Trust Security', _href: '/zero-trust-security-platform', _description: 'Next-generation security architecture'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure', _description: 'Quantum-enhanced cloud computing'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center', _description: 'Self-managing IT infrastructure'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration', _description: 'Distributed edge computing'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform', _description: 'Enterprise blockchain solutions'},
      {_name: 'AI-Powered DevOps', _href: '/ai-powered-devops-platform', _description: 'Intelligent development operations'},
      {_name: 'Quantum Cybersecurity', _href: '/quantum-cybersecurity-services', _description: 'Next-gen quantum security'},
      {_name: 'AI-Powered Cybersecurity', _href: '/ai-powered-cybersecurity', _description: 'Intelligent threat detection'}
    ]
  },
  {_name: 'Industry Solutions', _href: '/industry-solutions', _icon: <Building className="w-5 h-5" />, _description: 'Industry-specific technology solutions', _badge: 'Industry', _children: [
      { name: 'Healthcare AI', _href: '/healthcare-ai-solutions', _description: 'AI-powered healthcare'},
      {_name: 'Financial Technology', _href: '/fintech-solutions', _description: 'Next-gen fintech'},
      {_name: 'Manufacturing AI', _href: '/manufacturing-ai-solutions', _description: 'Smart manufacturing'},
      {_name: 'Retail Technology', _href: '/innovative-business-solutions', _description: 'Digital retail transformation'},
      {_name: 'Education Technology', _href: '/training', _description: 'AI-powered learning'},
      {_name: 'Government Solutions', _href: '/enterprise-solutions-showcase', _description: 'Public sector innovation'},
      {_name: 'Energy & Utilities', _href: '/quantum-energy', _description: 'Sustainable energy tech'},
      {_name: 'Biotech AI Research', _href: '/biotech-ai', _description: 'AI-driven biotech'}
    ]
  },
  {_name: 'Resources', _href: '/resources', _icon: <BookOpen className="w-5 h-5" />, _description: 'Documentation, _support, _and learning resources', _children: [
      { name: 'Documentation', _href: '/docs', _description: 'Technical documentation'},
      {_name: 'API Reference', _href: '/api-documentation', _description: 'API documentation'},
      {_name: 'Case Studies', _href: '/case-studies', _description: 'Success stories'},
      {_name: 'Blog & News', _href: '/blog', _description: 'Latest insights'},
      {_name: 'Support Center', _href: '/support', _description: 'Help and support'},
      {_name: 'Training', _href: '/training', _description: 'Learning resources'},
      {_name: 'Community', _href: '/community', _description: 'User community'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ]
  }
],

<<<<<<< HEAD
const quickActions = [
<<<<<<< HEAD
  { name: 'Get Started', href: '/contact', icon: <ArrowRight className="w-4 h-4" />, primary: true },
  { name: 'Get a Quote', href: '/quote', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Book Demo', href: '/demo', icon: <Video className="w-4 h-4" /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <BarChart3 className="w-4 h-4" /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <Sparkles className="w-4 h-4" /> },
  { name: 'Documentation', href: '/docs', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
],
=======
  { name: 'Get Started', href: '/contact', icon: <ArrowRight className=&quot;w-4 h-4&quot; />, primary: true },
  { name: 'Get a Quote', href: '/quote', icon: <DollarSign className=&quot;w-4 h-4&quot; /> },
  { name: 'Book Demo', href: '/demo', icon: <Video className=&quot;w-4 h-4&quot; /> },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className=&quot;w-4 h-4&quot; /> },
  { name: 'View Pricing', href: '/pricing', icon: <DollarSign className=&quot;w-4 h-4&quot; /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <BarChart3 className=&quot;w-4 h-4&quot; /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <Sparkles className=&quot;w-4 h-4&quot; /> },
  { name: 'Documentation', href: '/docs', icon: <BookOpen className=&quot;w-4 h-4&quot; /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className=&quot;w-4 h-4&quot; /> }
=======
const _quickActions = [
  {_name: 'Get Started', _href: '/contact', _icon: <ArrowRight className="w-4 h-4" />, _primary: true},
  {_name: 'Get a Quote', _href: '/quote', _icon: <DollarSign className="w-4 h-4" />},
  {_name: 'Book Demo', _href: '/demo', _icon: <Video className="w-4 h-4" />},
  {_name: 'Live Chat', _href: '/chat', _icon: <MessageCircle className="w-4 h-4" />},
  {_name: 'View Pricing', _href: '/pricing', _icon: <DollarSign className="w-4 h-4" />},
  {_name: 'Market Pricing', _href: '/market-pricing', _icon: <BarChart3 className="w-4 h-4" />},
  {_name: 'Services Advertising', _href: '/services-advertising', _icon: <Sparkles className="w-4 h-4" />},
  {_name: 'Documentation', _href: '/docs', _icon: <BookOpen className="w-4 h-4" />},
  {_name: 'Support', _href: '/support', _icon: <HelpCircle className="w-4 h-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const UltraFuturisticNavigation2035: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    },
=======
const UltraFuturisticNavigation2035: React.FC = () => {_const [isOpen, _setIsOpen] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, _setIsScrolled] = useState(false);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 10);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

<<<<<<< HEAD
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  },

  const closeDropdowns = () => {
    setActiveDropdown(null)
  },

  const closeMobileMenu = () => {
    setIsOpen(false),
    closeDropdowns()
  },

  return (
    <nav aria-label=&quot;Primary&quot; className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Background Effects */}
      <div className=&quot;absolute inset-0&quot;>
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className=&quot;absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95&quot; />
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5&quot; />
        </div>
      </div>

      <div className=&quot;relative z-10&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <Link href=&quot;/&quot; className=&quot;flex items-center gap-3 group&quot;>
              <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Brain className=&quot;w-6 h-6 text-white&quot; />
=======
  const _toggleDropdown = (_name: string) => {_setActiveDropdown(activeDropdown === name ? null : name);};

  const _closeDropdowns = () => {_setActiveDropdown(null);};

  const _closeMobileMenu = () => {_setIsOpen(false);
    closeDropdowns();};

  return (_<nav aria-label="Primary" className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
        : 'bg-transparent'}`}>
      {_/* Background Effects */}
      <div className="absolute inset-0">
        <div className={_`absolute inset-0 transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {_/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div>
                <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-gray-400&quot;>Revolutionary Technology</div>
              </div>
            </a>

<<<<<<< HEAD
            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center gap-8&quot;>
              {navigationItems.map((item) => (
                <div key={item.name} className=&quot;relative group&quot;>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className=&quot;flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400&quot;
=======
            {_/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {_navigationItems.map((item) => (_<div key={item.name} className="relative group">
                  <button
                    onClick={_() => toggleDropdown(item.name)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    {_item.icon}
                    <span>{_item.name}</span>
                    {_item.badge && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        item.badge === 'Hot' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        item.badge === 'Future' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        item.badge === 'Enterprise' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.badge === 'Industry' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                        {_item.badge}
                      </span>
                    )}
                    <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>

                  {_/* Dropdown Menu */}
                  <AnimatePresence>
                    {_activeDropdown === item.name && (
                      <motion.div
<<<<<<< HEAD
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden&quot;
                        onMouseLeave={closeDropdowns}
                      >
                        <div className=&quot;p-6&quot;>
                          <div className=&quot;flex items-center gap-3 mb-4&quot;>
                            {item.icon}
                            <div>
                              <h3 className=&quot;font-semibold text-white&quot;>{item.title || item.name}</h3>
                              {item.description && (
                                <p className=&quot;text-sm text-gray-400&quot;>{item.description}</p>
=======
                        initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                        animate={_{ opacity: 1, _y: 0, _scale: 1}}
                        exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                        transition={_{ duration: 0.2}}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                        onMouseLeave={_closeDropdowns}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            {_item.icon}
                            <div>
                              <h3 className="font-semibold text-white">{_item.title || item.name}</h3>
                              {_item.description && (
                                <p className="text-sm text-gray-400">{item.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              )}
                            </div>
                          </div>
                          
<<<<<<< HEAD
                          <div className=&quot;space-y-2&quot;>
                            {item.children?.map((child) => (
=======
                          <div className="space-y-2">
                            {_item.children?.map(_(child) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              <Link
                                key={child.name}
                                href={_child.href}
                                className={_`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20' 
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
                                onClick={_closeDropdowns}
                              >
<<<<<<< HEAD
                                {child.featured && <Star className=&quot;w-4 h-4 text-cyan-400&quot; />}
                                <div className=&quot;flex-1&quot;>
                                  <div className=&quot;font-medium&quot;>{child.name}</div>
                                  {child.description && (
                                    <div className=&quot;text-sm opacity-75&quot;>{child.description}</div>
=======
                                {_child.featured && <Star className="w-4 h-4 text-cyan-400" />}
                                <div className="flex-1">
                                  <div className="font-medium">{_child.name}</div>
                                  {_child.description && (
                                    <div className="text-sm opacity-75">{child.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                  )}
                                </div>
                                <ArrowRight className=&quot;w-4 h-4 opacity-50&quot; />
                              </a>
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
            {/* Right Side Actions */}
            <div className=&quot;hidden lg:flex items-center gap-4&quot;>
              {/* Quick Actions */}
              <div className=&quot;flex items-center gap-2&quot;>
                {quickActions.map((action) => (
=======
            {_/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {_/* Quick Actions */}
              <div className="flex items-center gap-2">
                {_quickActions.map(_(action) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <Link
                    key={action.name}
                    href={_action.href}
                    className={_`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      action.primary
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/25'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
                  >
<<<<<<< HEAD
                    {action.icon}
                    <span>{action.name}</span>
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className=&quot;flex items-center gap-4 text-sm text-gray-400&quot;>
                <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200&quot;>
                  <Phone className=&quot;w-4 h-4&quot; />
                  <span className=&quot;hidden xl:inline&quot;>{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center gap-2 hover:text-purple-400 transition-colors duration-200&quot;>
                  <Mail className=&quot;w-4 h-4&quot; />
                  <span className=&quot;hidden xl:inline&quot;>{contactInfo.email}</span>
=======
                    {_action.icon}
                    <span>{_action.name}</span>
                  </Link>
                ))}
              </div>

              {_/* Contact Info */}
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <a href={_`tel:${contactInfo.mobile}`} className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{_contactInfo.mobile}</span>
                </a>
                <a href={_`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{_contactInfo.email}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </a>
              </div>
            </div>

            {_/* Mobile Menu Button */}
            <button
<<<<<<< HEAD
              onClick={() => setIsOpen(!isOpen)}
              className=&quot;lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200&quot;
              aria-label=&quot;Toggle mobile menu&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
=======
              onClick={_() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </button>
          </div>
        </div>

        {_/* Mobile Menu */}
        <AnimatePresence>
<<<<<<< HEAD
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className=&quot;lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50&quot;
            >
              <div className=&quot;container mx-auto px-4 py-6&quot;>
                <div className=&quot;space-y-6&quot;>
                  {/* Mobile Navigation Items */}
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className=&quot;flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200&quot;
                      >
                        <div className=&quot;flex items-center gap-3&quot;>
                          {item.icon}
                          <span>{item.name}</span>
                          {item.badge && (
=======
          {_isOpen && (_<motion.div
              initial={{ opacity: 0, _height: 0}}
              animate={_{ opacity: 1, _height: 'auto'}}
              exit={_{ opacity: 0, _height: 0}}
              transition={_{ duration: 0.3}}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-6">
                  {_/* Mobile Navigation Items */}
                  {_navigationItems.map((item) => (_<div key={item.name}>
                      <button
                        onClick={_() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          {_item.icon}
                          <span>{_item.name}</span>
                          {_item.badge && (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              item.badge === 'Showcase' ? 'bg-cyan-500/20 text-cyan-400' :
                              'bg-gray-500/20 text-gray-400'}`}>
                              {_item.badge}
                            </span>
                          )}
                        </div>
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>

                      {_/* Mobile Dropdown */}
                      <AnimatePresence>
<<<<<<< HEAD
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className=&quot;ml-6 mt-2 space-y-2&quot;
=======
                        {_activeDropdown === item.name && (_<motion.div
                            initial={{ opacity: 0, _height: 0}}
                            animate={_{ opacity: 1, _height: 'auto'}}
                            exit={_{ opacity: 0, _height: 0}}
                            transition={_{ duration: 0.2}}
                            className="ml-6 mt-2 space-y-2"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          >
                            {_item.children?.map((child) => (
                              <Link
                                key={child.name}
                                href={_child.href}
                                className={_`block p-3 rounded-lg transition-colors duration-200 ${
                                  child.featured 
                                    ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400' 
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'}`}
                                onClick={_closeMobileMenu}
                              >
<<<<<<< HEAD
                                <div className=&quot;font-medium&quot;>{child.name}</div>
                                {child.description && (
                                  <div className=&quot;text-sm opacity-75 mt-1&quot;>{child.description}</div>
=======
                                <div className="font-medium">{_child.name}</div>
                                {_child.description && (
                                  <div className="text-sm opacity-75 mt-1">{child.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                )}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

<<<<<<< HEAD
                  {/* Mobile Quick Actions */}
                  <div className=&quot;pt-4 border-t border-gray-800/50&quot;>
                    <div className=&quot;space-y-3&quot;>
                      {quickActions.map((action) => (
=======
                  {_/* Mobile Quick Actions */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3">
                      {_quickActions.map(_(action) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        <Link
                          key={action.name}
                          href={_action.href}
                          className={_`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                            action.primary
                              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'}`}
                          onClick={_closeMobileMenu}
                        >
<<<<<<< HEAD
                          {action.icon}
                          <span>{action.name}</span>
                        </a>
=======
                          {_action.icon}
                          <span>{_action.name}</span>
                        </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ))}
                    </div>
                  </div>

<<<<<<< HEAD
                  {/* Mobile Contact Info */}
                  <div className=&quot;pt-4 border-t border-gray-800/50&quot;>
                    <div className=&quot;space-y-3 text-sm text-gray-400&quot;>
                      <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200&quot;>
                        <Phone className=&quot;w-4 h-4&quot; />
                        <span>{contactInfo.mobile}</span>
                      </a>
                      <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200&quot;>
                        <Mail className=&quot;w-4 h-4&quot; />
                        <span>{contactInfo.email}</span>
                      </a>
                      <div className=&quot;flex items-center gap-3 p-3 rounded-lg&quot;>
                        <MapPin className=&quot;w-4 h-4&quot; />
                        <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
=======
                  {_/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-gray-800/50">
                    <div className="space-y-3 text-sm text-gray-400">
                      <a href={_`tel:${contactInfo.mobile}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Phone className="w-4 h-4" />
                        <span>{_contactInfo.mobile}</span>
                      </a>
                      <a href={_`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-200">
                        <Mail className="w-4 h-4" />
                        <span>{_contactInfo.email}</span>
                      </a>
                      <div className="flex items-center gap-3 p-3 rounded-lg">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
},

export default UltraFuturisticNavigation2035,