import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Monitor,
  Smartphone,
  Server,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  Share2,
  Receipt,
  Package,
  Calendar,
  Headphones,
  Kanban,
  HardDrive,
  Bell,
  Home,
  BookOpen,
  Brain,
  Network,
  Cloud,
  Shield,
  Zap,
  Database,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';
import Layout from '../components/Layout';

const services = [
  {
    category: "AI Services",
    icon: Brain,
    href: "/ai-services",
    features: ["Machine Learning Models", "Computer Vision", "Natural Language Processing", "Predictive Analytics", "AI Chatbots", "Quantum AI"],
    pricing: "Starting at $2,500/month"
  },
  {
    title: "IT Services",
    description: "70+ comprehensive IT services from cloud infrastructure to cybersecurity, quantum computing, and zero-trust architecture",
    icon: Network,
    href: "/it-services",
    features: ["Cloud Migration", "DevOps Automation", "System Integration", "IT Consulting", "Infrastructure Management", "Technical Support"],
    pricing: "Starting at $1,800/month"
=======
import { innovativeAIServices } from '../data/innovative-ai-services';
import { quantumSpaceServices } from '../data/quantum-space-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newRealServices } from '../data/new-real-services';
import { industryRealServices } from '../data/industry-real-services';
import { professionalServices } from '../data/professional-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';
import { marketValidatedServices } from '../data/market-validated-services';
import { emergingTechnologyServices } from '../data/emerging-technology-services';
import { comprehensiveITSolutions } from '../data/comprehensive-it-solutions';
import { curatedMarketServices } from '../data/curated-market-services';
import { realMarketServices } from '../data/real-market-services';
import { new2025Services } from '../data/new-2025-services';
import { newRealInnovations } from '../data/new-real-innovations';
import { serviceExpansions2025 } from '../data/service-expansions-2025';
import { newOperationalServices2025 } from '../data/new-operational-services-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { innovative2025Services } from '../data/innovative-2025-services';
import { emergingTech2025Services } from '../data/emerging-tech-2025-services';
import { extraServices } from '../data/extra-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { moreRealServices2025 } from '../data/more-real-services-2025';
import { verified2025Additions } from '../data/verified-2025-additions';
import { realServicesQ12025 } from '../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../data/real-market-augmentations-2025';
import { innovative2026MicroSaasServicesV2 } from '../data/innovative-2026-micro-saas-v2';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV2 } from '../data/emerging-tech-2026-services-v2';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV2 } from '../data/enterprise-it-2026-services-v2';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { aiAutonomousServices2026 } from '../data/2026-ai-autonomous-services';
import { quantumSpaceTechServices2026 } from '../data/2026-quantum-space-tech-services';
import { metaverseDigitalRealityServices2026 } from '../data/2026-metaverse-digital-reality-services';
import { ultimate2026Services } from '../data/ultimate-2026-services';
import { revolutionary2026Innovations } from '../data/revolutionary-2026-innovations';
import { innovative2026MicroSaasServicesV4 } from '../data/innovative-2026-micro-saas-v4';
import { emergingTech2026ServicesV4 } from '../data/emerging-tech-2026-services-v4';
import { enterpriseIT2026ServicesV4 } from '../data/enterprise-it-2026-services-v4';
import { innovative2026AIServicesV4 } from '../data/innovative-2026-ai-services-v4';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all services
  const allServices = [
    ...innovativeMicroSaasServices,
    ...extraServices,
    ...additionalEnhancedServices,
    ...advancedAIServices,
    ...innovativeAIServices,
    ...quantumSpaceServices,
    ...enterpriseITServices,
    ...enhancedRealMicroSaasServices,
    ...additionalEnhancedServices,
    ...extraServices,
    ...newlyAddedServices,
    ...newRealServices,
    ...moreRealServices2025,
    ...industryRealServices,
    ...professionalServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,
    ...marketValidatedServices,
    ...emergingTechnologyServices,
    ...comprehensiveITSolutions,
    ...curatedMarketServices,
    ...realMarketServices,
    ...new2025Services,
    ...verified2025Additions,
    ...newRealInnovations,
    ...serviceExpansions2025,
    ...quantumAdvancedServices,
    ...emergingTechServices,
    ...spaceTechServices,
    ...innovativeAIServices,
    ...emergingTechAdvancedServices,
    ...itInfrastructureServices
=======
    ...newOperationalServices2025,
    ...realServicesQ12025,
    ...realEnterpriseServices2025,
    ...verifiedRealServices2025Batch2,
    ...innovative2025Services,
    ...emergingTech2025Services,
    ...realMarketAugmentations2025,
    ...innovative2026MicroSaasServicesV2,
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV2,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV2,
    ...enterpriseIT2026ServicesV4,
    ...aiAutonomousServices2026,
    ...quantumSpaceTechServices2026,
    ...metaverseDigitalRealityServices2026,
    ...ultimate2026Services,
    ...revolutionary2026Innovations,
    ...innovative2026MicroSaasServicesV4,
    ...emergingTech2026ServicesV4,
    ...enterpriseIT2026ServicesV4,
    ...innovative2026AIServicesV4
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services', icon: <Monitor className="w-5 h-5" />, count: allServices.length },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('AI') || s.category.includes('Machine Learning')).length },
    { id: 'quantum', name: 'Quantum Computing', icon: <Zap className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Quantum')).length },
    { id: 'space', name: 'Space Technology', icon: <Rocket className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Space')).length },
    { id: 'emerging', name: 'Emerging Tech', icon: <Star className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Emerging')).length },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: <Building2 className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Infrastructure') || s.category.includes('DevOps')).length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Security') || s.category.includes('Cybersecurity')).length },
    { id: 'robotics', name: 'Robotics & Automation', icon: <Bot className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: <Dna className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Biotech') || s.category.includes('Healthcare')).length },
    { id: 'finance', name: 'Financial Technology', icon: <DollarSign className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Trading')).length },
    { id: 'iot', name: 'IoT & Edge Computing', icon: <Wifi className="w-5 h-5" />, count: allServices.filter(s => s.category.includes('IoT') || s.category.includes('Edge')).length }
  ];
=======
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Search, Filter, Grid, List, Star, 
  TrendingUp, Zap, Brain, Shield, Globe,
  ArrowRight, ExternalLink, Check, Cpu
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { innovativeMicroSaasServices } from '../data/innovative-micro-saas-services';
import { advancedAIServices } from '../data/advanced-ai-services';
import { blockchainEmergingTechServices } from '../data/blockchain-emerging-tech-services';

// Import our new service data
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2026Q2Services } from '../data/real-2026-q2-services';

// Import existing service data
import { realMicroSaasServices2025 } from '../data/2025-real-micro-saas-services';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services';
import { innovativeITServices2025 } from '../data/2025-innovative-it-services';
import { emergingTechServices2025 } from '../data/2025-emerging-tech-services';
import { newRealServices2026 } from '../data/2025-2026-new-real-services';
import { additionalRealMicroSaas2026 } from '../data/2026-additional-real-micro-saas';

// Helper function to get service category
const getServiceCategory = (service: any) => {
  if (service.category) return service.category;
  if (service.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

// Helper function to get service launch date
const getServiceLaunchDate = (service: any) => {
  return service.launchDate || service.releasedAt || service.updatedAt || '2020-01-01';
};

// Helper function to get service rating
const getServiceRating = (service: any) => {
  return service.rating || 0;
};

// Create unified services array
const allServices = [
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices2025,
  ...innovativeAIServices2025,
  ...innovativeITServices2025,
  ...emergingTechServices2025,
  ...newRealServices2026,
  ...additionalRealMicroSaas2026
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
>>>>>>> origin/automation/changelog
  },
  {
    title: "Micro SaaS",
    description: "85+ innovative micro SaaS solutions for modern businesses across all industries with real-time pricing and market analysis",
    icon: Cloud,
    href: "/micro-saas",
    features: ["Workflow Automation", "API Integration", "Custom Dashboards", "Data Processing", "Business Intelligence", "Process Optimization"],
    pricing: "Starting at $1,500/month"
  },
  {
<<<<<<< HEAD
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection",
    icon: Shield,
    href: "/cybersecurity",
    features: ["Security Audits", "Penetration Testing", "Zero-Trust Architecture", "Compliance Management", "Threat Detection", "Incident Response"],
    pricing: "Starting at $2,000/month"
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and DevOps automation for modern applications",
    icon: Globe,
    href: "/cloud-solutions",
    features: ["AWS/Azure/GCP Migration", "Container Orchestration", "Serverless Architecture", "Cloud Security", "Auto-scaling", "Cost Optimization"],
    pricing: "Starting at $1,800/month"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design",
    icon: Smartphone,
    href: "/mobile-development",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps", "Mobile UI/UX", "App Store Optimization"],
    pricing: "Starting at $3,000/month"
=======
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'space-metaverse',
    name: 'Space & Metaverse',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space exploration and virtual worlds'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'creative-media',
    name: 'Creative & Media',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'AI-powered creative solutions'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Healthcare and biotech solutions'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Supply chain, logistics, and automation'
  },
  {
    id: 'education',
    name: 'Education & Training',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-yellow-500 to-amber-500',
    description: 'Education platforms and training'
>>>>>>> origin/automation/changelog
  }
];

const stats = [
  { number: '235+', label: 'Services Available' },
  { number: '1,200+', label: 'Projects Completed' },
  { number: '99.9%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' }
];
<<<<<<< HEAD
import {
  Brain,
  Cloud,
  Database,
  Shield,
  Code,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Cpu
} from 'lucide-react';
=======
import Layout from '../components/Layout';
import {;
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  Mail,
  Calendar,
  Settings,
  Eye,
  MessageSquare,
  Palette,
  Bot,
  Cpu,
  Link2,
  Wifi,
  HardDrive,
  Monitor,
  Activity,
  Terminal,
  CreditCard,
  Smartphone;
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';
export default function Services() {;
	const title = 'Services — Zion Tech Group';
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';
	return (;
		<Layout>;
			<PageTransition>;
			{/* Hero Section */}
			<section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-2xl text-center'>;
						<div className='flex items-center justify-center mb-4'>;
							<Award className='h-6 w-6 text-blue-600 mr-2' />;
							<span className='text-base font-semibold leading-7 text-blue-600'>Our Services</span>;
						</div>;
						<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>;
							Our Services;
						</h1>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.;
						</p>;
					</div>;
				</div>;
			</section>;
			{/* Services Grid */}
			<section className='py-16 sm:py-24'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='grid gap-6 lg:grid-cols-2'>;
						{/* AI Autonomous Systems */}
						<div id='ai' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors'>;
									<Brain className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>AI Autonomous Systems</h2>;
									<p className='text-sm text-blue-600 font-medium'>Intelligent Automation</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Transform your operations with intelligent automation and AI-powered decision making.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Sales/CS multi-agent copilots</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>RAG and workflow orchestration</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Observability and guardrails</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Intelligent process automation</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>2-4 weeks delivery</span>;
								</div>;
								<Link;
									href='/contact';
									className='inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group';
									aria-label='Get started with AI services';
								>;
									Get started with AI;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
						{/* Cloud Platforms */}
						<div id='cloud' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors'>;
									<Cloud className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>Cloud Platforms</h2>;
									<p className='text-sm text-green-600 font-medium'>Scalable Infrastructure</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Build scalable, resilient cloud infrastructure that grows with your business.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Serverless and Kubernetes</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Data pipelines and ML ops</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>FinOps and SRE practices</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Multi-cloud architecture</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>4-8 weeks delivery</span>;
								</div>;
								<Link;
									href='/contact';
									className='inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group';
									aria-label='Get started with cloud services';
								>;
									Get started with Cloud;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
						{/* Cybersecurity */}
						<div id='cybersecurity' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors'>;
									<Shield className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>Cybersecurity</h2>;
									<p className='text-sm text-purple-600 font-medium'>Zero-Trust Security</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Protect your business with enterprise-grade security frameworks and compliance automation.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Zero-trust architecture</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Compliance automation</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Incident response</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Security audits</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>3-6 weeks delivery</span>;
								</div>;
								<Link;
									href='/contact';
									className='inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group';
									aria-label='Get started with cybersecurity services';
								>;
									Get started with Security;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
						{/* Micro SaaS */}
						<div id='saas' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors'>;
									<Code className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>Micro SaaS</h2>;
									<p className='text-sm text-orange-600 font-medium'>Custom Solutions</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Custom software solutions tailored to your specific business needs and workflows.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Custom web applications</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>API development</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Integration services</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Maintenance & support</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>6-12 weeks delivery</span>;
								</div>;
								<Link;
									href='/contact';
									className='inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group';
									aria-label='Get started with custom software services';
								>;
									Get started with SaaS;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
					</div>;
				</div>;
			</section>;
			{/* Expanded Service Catalog */}
			<section className='py-16 sm:py-24 bg-white'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-4xl text-center mb-14'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Comprehensive Technology Solutions</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Zion Tech Group delivers cutting-edge, production-ready services across AI, IT infrastructure, and Micro SaaS platforms. ;
							Our solutions are designed for enterprise scalability with transparent pricing and measurable outcomes. ;
							Explore our full capabilities at{' '}
							<a href='https://ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline font-semibold' target='_blank' rel='noreferrer'>ziontechgroup.com</a>.{' '}
							Check our latest additions in the{' '}
							<Link href='/additional-services' className='text-blue-600 hover:text-blue-500 underline font-semibold'>Expanded Services Catalog</Link>.;
						</p>;
						<div className='mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6'>;
							<h3 className='text-lg font-semibold text-blue-900 mb-3'>Ready to Get Started?</h3>;
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
								<div>;
									<p className='text-blue-800 text-sm mb-2'>Contact us for a free consultation:</p>;
									<div className='space-y-1 text-sm'>;
										<p className='text-blue-700'><strong>Phone:</strong> <a href='tel:+13024640950' className='hover:underline'>+1 302 464 0950</a></p>;
										<p className='text-blue-700'><strong>Email:</strong> <a href='mailto:kleber@ziontechgroup.com' className='hover:underline'>kleber@ziontechgroup.com</a></p>;
									</div>;
								</div>;
								<div>;
									<p className='text-blue-800 text-sm mb-2'>Our office location:</p>;
									<p className='text-blue-700 text-sm'>364 E Main St STE 1008<br />Middletown DE 19709</p>;
								</div>;
							</div>;
						</div>;
						<div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>;
							<div className='bg-blue-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-blue-900 mb-2'>AI & Machine Learning</h3>;
								<p className='text-blue-700'>Advanced AI solutions from computer vision to generative content creation</p>;
							</div>;
							<div className='bg-green-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-green-900 mb-2'>IT Infrastructure</h3>;
								<p className='text-green-700'>Next-gen technologies including edge computing, blockchain, and quantum readiness</p>;
							</div>;
							<div className='bg-purple-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-purple-900 mb-2'>Micro SaaS Platforms</h3>;
								<p className='text-purple-700'>Scalable software solutions from real-time analytics to mobile development</p>;
							</div>;
						</div>;
						<p className='mt-6 text-sm text-gray-500'>;
							Pricing based on market research from leading technology consultancies and enterprise software vendors. ;
							For custom enterprise solutions and volume discounts, see our{' '}
							<Link href='/pricing' className='text-blue-600 hover:text-blue-500 underline'>Enterprise Pricing Guide</Link>.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* AI Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Revenue AI Agents (Sales/CS)</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Multi-agent copilots for SDR, AM, and Support with guardrails.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Integrates CRM, Helpdesk, and Knowledge Base</li>;
								<li>• Measurable pipeline lift and deflection</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>Starting $8k–$25k</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Talk to us →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Database className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Data Engineering as a Service</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Modern ELT, dbt, and warehouse modeling, with governance.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Snowflake/BigQuery/Redshift, Lakehouse setups</li>;
								<li>• Data quality SLAs and observability</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-indigo-600'>Starting $10k–$40k</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Get estimate →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Server className='h-5 w-5 text-emerald-600' />;
								<h3 className='font-semibold text-gray-900'>MLOps Platform Setup</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>CI/CD for models, feature stores, evals, and monitoring.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Vertex/SageMaker/Databricks integrations</li>;
								<li>• Reproducible pipelines and governance</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-emerald-600'>Starting $15k–$60k</span>;
								<Link href='/contact' className='text-emerald-600 hover:text-emerald-500'>Learn more →</Link>;
							</div>;
						</div>;
						{/* IT & Cloud */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Cloud className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>FinOps & Cloud Cost Optimization</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Rightsizing, savings plans, architectural refactors for cost.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Typical 20–45% monthly savings</li>;
								<li>• Automated policy enforcement</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>Assessments $4k–$12k</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Start now →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Shield className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>SOC-as-a-Service</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Managed detection & response with 24/7 coverage.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• SIEM, EDR, and threat intel</li>;
								<li>• Incident playbooks and compliance</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $3k/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Request details →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Globe className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Fractional CTO/Architecture Advisory</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Strategy, roadmap, and architecture leadership on-demand.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Platform modernization & product strategy</li>;
								<li>• Vendor selection and governance</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $4k/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Book intro →</Link>;
							</div>;
						</div>;
						{/* AI Services - Additional */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-violet-600' />;
								<h3 className='font-semibold text-gray-900'>AI-Powered Business Intelligence</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Automated insights, predictive analytics, and intelligent reporting.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Natural language query interface</li>;
								<li>• Automated anomaly detection and alerts</li>;
								<li>• Custom dashboard generation</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-violet-600'>From $399/mo</span>;
								<Link href='/contact' className='text-violet-600 hover:text-violet-500'>Schedule demo →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Database className='h-5 w-5 text-cyan-600' />;
								<h3 className='font-semibold text-gray-900'>Intelligent Document Processing</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Extract, classify, and process documents with AI accuracy.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• OCR with 99%+ accuracy</li>;
								<li>• Automated data extraction and validation</li>;
								<li>• Workflow automation and routing</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-cyan-600'>From $299/mo</span>;
								<Link href='/contact' className='text-cyan-600 hover:text-cyan-500'>Try free trial →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Zap className='h-5 w-5 text-yellow-600' />;
								<h3 className='font-semibold text-gray-900'>AI Test Automation Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Self-healing test scripts and intelligent test case generation.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Visual regression testing with AI</li>;
								<li>• Automated test maintenance</li>;
								<li>• Cross-browser and device testing</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-yellow-600'>From $199/mo</span>;
								<Link href='/contact' className='text-yellow-600 hover:text-yellow-500'>Start testing →</Link>;
							</div>;
						</div>;
						{/* Micro SaaS */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Code className='h-5 w-5 text-rose-600' />;
								<h3 className='font-semibold text-gray-900'>AI Content Localization SaaS</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Translate and culturally adapt content at scale.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Multi-market SEO and brand alignment</li>;
								<li>• Human-in-the-loop quality controls</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-rose-600'>From $199/mo</span>;
								<Link href='/contact' className='text-rose-600 hover:text-rose-500'>Request demo →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<BarChart3 className='h-5 w-5 text-sky-600' />;
								<h3 className='font-semibold text-gray-900'>Predictive Maintenance Toolkit</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Out-of-the-box anomaly detection for equipment and IoT.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Sensor ingestion, dashboards, and alerts</li>;
								<li>• Edge or cloud deployment options</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-sky-600'>From $299/mo</span>;
								<Link href='/contact' className='text-sky-600 hover:text-sky-500'>See live demo →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Lock className='h-5 w-5 text-teal-600' />;
								<h3 className='font-semibold text-gray-900'>Compliance Copilot (SOC2/HIPAA/GDPR)</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Automated evidence collection and continuous controls.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Policy templates and auditor-ready reports</li>;
								<li>• Ticketing and alerting integrations</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-teal-600'>From $249/mo</span>;
								<Link href='/contact' className='text-teal-600 hover:text-teal-500'>Book a walkthrough →</Link>;
							</div>;
						</div>;
						{/* Additional IT Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Server className='h-5 w-5 text-lime-600' />;
								<h3 className='font-semibold text-gray-900'>DevOps Automation Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Complete CI/CD pipelines with infrastructure as code.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• GitOps workflows and automated deployments</li>;
								<li>• Infrastructure monitoring and alerting</li>;
								<li>• Multi-cloud orchestration</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-lime-600'>From $599/mo</span>;
								<Link href='/contact' className='text-lime-600 hover:text-lime-500'>Get started →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Globe className='h-5 w-5 text-pink-600' />;
								<h3 className='font-semibold text-gray-900'>Digital Transformation Consulting</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>End-to-end modernization strategy and implementation.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Legacy system migration and modernization</li>;
								<li>• Cloud-native architecture design</li>;
								<li>• Change management and training</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-pink-600'>From $8k–$50k</span>;
								<Link href='/contact' className='text-pink-600 hover:text-pink-500'>Schedule consultation →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<BarChart3 className='h-5 w-5 text-amber-600' />;
								<h3 className='font-semibold text-gray-900'>Infrastructure Monitoring & Observability</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Real-time monitoring with AI-powered anomaly detection.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Application performance monitoring (APM)</li>;
								<li>• Log aggregation and analysis</li>;
								<li>• Predictive scaling and optimization</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-amber-600'>From $199/mo</span>;
								<Link href='/contact' className='text-amber-600 hover:text-amber-500'>Monitor now →</Link>;
							</div>;
						</div>;
						{/* Advanced AI Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Eye className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Computer Vision & Image Recognition</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Advanced image analysis, object detection, and visual content understanding.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Real-time object detection and classification</li>;
								<li>• Facial recognition and biometric authentication</li>;
								<li>• Medical imaging analysis and diagnostics</li>;
								<li>• Quality control and defect detection</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $2,500/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Schedule demo →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<MessageSquare className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Natural Language Processing (NLP) Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Advanced text analysis, sentiment detection, and language understanding.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Multi-language text classification and extraction</li>;
								<li>• Sentiment analysis and emotion detection</li>;
								<li>• Named entity recognition and knowledge graphs</li>;
								<li>• Automated content moderation and filtering</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $1,800/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Try API →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Palette className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Generative AI Content Studio</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered content creation for text, images, videos, and audio.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Custom GPT models for brand-specific content</li>;
								<li>• AI image generation and video synthesis</li>;
								<li>• Voice cloning and audio generation</li>;
								<li>• Multi-modal content orchestration</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $3,200/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Create content →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Bot className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Conversational AI & Chatbots</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Intelligent conversational agents with advanced reasoning capabilities.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Multi-turn conversation management</li>;
								<li>• Context-aware response generation</li>;
								<li>• Integration with business systems and APIs</li>;
								<li>• Voice and text conversation support</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $1,200/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Build chatbot →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<TrendingUp className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Predictive Analytics & Forecasting</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Advanced machine learning models for business forecasting and trend analysis.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Time series forecasting and anomaly detection</li>;
								<li>• Customer lifetime value prediction</li>;
								<li>• Demand forecasting and inventory optimization</li>;
								<li>• Risk assessment and fraud detection</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $2,800/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Predict trends →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Users className='h-5 w-5 text-emerald-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Project Management Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered project tracking with intelligent resource allocation.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Automated task prioritization and scheduling</li>;
								<li>• Team performance analytics and insights</li>;
								<li>• Integration with popular tools (Slack, Jira, etc.)</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-emerald-600'>From $149/mo</span>;
								<Link href='/contact' className='text-emerald-600 hover:text-emerald-500'>Start free trial →</Link>;
							</div>;
						</div>;
						{/* Advanced IT Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Cpu className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Edge Computing & IoT Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Distributed computing infrastructure for real-time data processing and IoT management.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Edge server deployment and management</li>;
								<li>• IoT device connectivity and data collection</li>;
								<li>• Real-time analytics and decision making</li>;
								<li>• Low-latency application deployment</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $4,500/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Deploy edge →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Link2 className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Blockchain & Web3 Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Decentralized applications, smart contracts, and blockchain infrastructure.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Smart contract development and auditing</li>;
								<li>• DeFi protocol integration and development</li>;
								<li>• NFT marketplace and tokenization</li>;
								<li>• Cross-chain interoperability solutions</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $8,000/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Build Web3 →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Wifi className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>5G & Network Infrastructure</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Next-generation network infrastructure and connectivity solutions.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• 5G network planning and optimization</li>;
								<li>• Software-defined networking (SDN)</li>;
								<li>• Network function virtualization (NFV)</li>;
								<li>• Private 5G network deployment</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $12,000/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Upgrade network →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<HardDrive className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Quantum Computing Readiness</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Prepare your infrastructure for quantum computing and post-quantum cryptography.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Quantum algorithm development and testing</li>;
								<li>• Post-quantum cryptography implementation</li>;
								<li>• Quantum simulation and optimization</li>;
								<li>• Hybrid classical-quantum workflows</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $15,000/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Go quantum →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Monitor className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Extended Reality (XR) Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Virtual, augmented, and mixed reality applications for enterprise and consumer use.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• VR/AR application development</li>;
								<li>• 3D modeling and spatial computing</li>;
								<li>• Metaverse platform development</li>;
								<li>• XR training and simulation systems</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $6,500/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Enter XR →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Star className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Customer Feedback Intelligence Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-driven sentiment analysis and actionable insights from customer feedback.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Multi-channel feedback aggregation</li>;
								<li>• Sentiment analysis and trend identification</li>;
								<li>• Automated response recommendations</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-indigo-600'>From $99/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Analyze feedback →</Link>;
							</div>;
						</div>;
						{/* Innovative Micro SaaS Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Activity className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Real-Time Analytics Dashboard</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Live business intelligence with instant insights and predictive alerts.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Real-time data streaming and visualization</li>;
								<li>• Custom KPI tracking and alerting</li>;
								<li>• Multi-source data integration</li>;
								<li>• Mobile-responsive dashboards</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $299/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>View demo →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Settings className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>API Management & Gateway</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Enterprise-grade API management with security, monitoring, and monetization.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• API gateway with rate limiting and authentication</li>;
								<li>• Developer portal and documentation</li>;
								<li>• Usage analytics and billing management</li>;
								<li>• API versioning and lifecycle management</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $499/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Manage APIs →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Terminal className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Developer Tools & IDE Extensions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Productivity tools and extensions for modern development workflows.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• VS Code extensions and plugins</li>;
								<li>• Code quality and security scanning</li>;
								<li>• Automated testing and deployment tools</li>;
								<li>• Team collaboration and code review tools</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $199/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Boost productivity →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<CreditCard className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Fintech & Payment Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Secure payment processing and financial technology integrations.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Multi-currency payment processing</li>;
								<li>• Cryptocurrency payment integration</li>;
								<li>• Fraud detection and risk management</li>;
								<li>• Financial reporting and compliance tools</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $799/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Process payments →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Smartphone className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Mobile App Development Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Cross-platform mobile app development with native performance.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• React Native and Flutter development</li>;
								<li>• Progressive Web App (PWA) creation</li>;
								<li>• App store optimization and deployment</li>;
								<li>• Push notifications and analytics</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $1,299/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Build apps →</Link>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Zap className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Workflow Automation Engine</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>No-code workflow builder with AI-powered optimization suggestions.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Visual workflow designer with drag-and-drop</li>;
								<li>• 500+ pre-built integrations</li>;
								<li>• AI-powered efficiency recommendations</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $79/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Automate workflows →</Link>;
							</div>;
						</div>;
					</div>;
					<div className='mt-10 text-center text-sm text-gray-500'>;
						Need something custom? Visit our website at{' '}
						<a href='https://ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup.com</a>{' '}
						or contact us directly: Email{' '}
						<a href='mailto:kleber@ziontechgroup.com' className='text-blue-600 hover:text-blue-500'>kleber@ziontechgroup.com</a>{' '}
						| Phone{' '}
						<a href='tel:+13024640950' className='text-blue-600 hover:text-blue-500'>+1 302 464 0950</a>{' '}
						| Address: 364 E Main St STE 1008, Middletown DE 19709;
					</div>;
				</div>;
			</section>;
			{/* New Innovative Services Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-3xl text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Innovative AI & Automation Services</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Cutting-edge AI solutions and automation tools that transform how businesses operate. ;
							Visit <a href='https://ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup.com</a> for live demos.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* AI Content Creation Tools */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>AI Content Creation Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Generate high-quality content at scale with AI-powered writing tools.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Blog posts, articles, and marketing copy</li>;
								<li>• SEO-optimized content with keyword research</li>;
								<li>• Multi-language support and brand voice consistency</li>;
								<li>• Content calendar and publishing automation</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $199/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Start free trial →</Link>;
							</div>;
						</div>;
						{/* Email Automation Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Mail className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Email Automation</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered email campaigns with personalized content and optimal send times.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Behavioral trigger automation</li>;
								<li>• A/B testing and performance optimization</li>;
								<li>• Lead scoring and segmentation</li>;
								<li>• Integration with CRM and marketing tools</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $149/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Automate now →</Link>;
							</div>;
						</div>;
						{/* AI Email Responder */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Zap className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>AI Email Assistant</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Intelligent email management with smart responses and priority detection.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Auto-respond to common inquiries</li>;
								<li>• Priority flagging and urgent email alerts</li>;
								<li>• Sentiment analysis and response suggestions</li>;
								<li>• Calendar integration and meeting scheduling</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $99/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Try demo →</Link>;
							</div>;
						</div>;
						{/* Customer Support Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Users className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>AI Customer Support Hub</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive support platform with AI chatbots and ticket management.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• 24/7 AI chatbot with human handoff</li>;
								<li>• Multi-channel support (chat, email, phone)</li>;
								<li>• Knowledge base and FAQ automation</li>;
								<li>• Customer satisfaction tracking</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $299/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Setup support →</Link>;
							</div>;
						</div>;
						{/* Event Management Dashboard */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Calendar className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Event Management</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Complete event planning and management with AI-powered insights.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Event registration and ticketing</li>;
								<li>• Automated email campaigns and reminders</li>;
								<li>• Real-time analytics and attendee insights</li>;
								<li>• Integration with payment and marketing tools</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $179/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Plan events →</Link>;
							</div>;
						</div>;
						{/* Workflow Automation Engine */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Settings className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Business Process Automation</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>No-code workflow automation with AI optimization recommendations.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Visual workflow designer</li>;
								<li>• 500+ pre-built integrations</li>;
								<li>• AI-powered efficiency suggestions</li>;
								<li>• Performance monitoring and optimization</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-indigo-600'>From $79/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Automate workflows →</Link>;
							</div>;
						</div>;
					</div>;
					<div className='mt-12 text-center'>;
						<p className='text-sm text-gray-600 mb-4'>;
							All services include 30-day free trial, setup assistance, and 24/7 support.;
						</p>;
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
							<Link;
								href='/contact';
								className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors';
							>;
								Get Started Today;
								<ArrowRight className='ml-2 h-4 w-4' />;
							</Link>;
							<Link;
								href='https://ziontechgroup.com';
								target='_blank';
								rel='noreferrer';
								className='inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors';
							>;
								Visit Live Demo;
								<Globe className='ml-2 h-4 w-4' />;
							</Link>;
						</div>;
					</div>;
				</div>;
			</section>;
			{/* Advanced IT Services Section */}
			<section className='py-24 sm:py-32 bg-white'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-3xl text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Advanced IT & Infrastructure Services</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Enterprise-grade IT solutions and infrastructure management services. ;
							Professional implementation with 99.9% uptime guarantee.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* DevOps Automation Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Server className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>DevOps Automation Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Complete CI/CD pipelines with infrastructure as code and automated deployments.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• GitOps workflows and automated deployments</li>;
								<li>• Infrastructure monitoring and alerting</li>;
								<li>• Multi-cloud orchestration (AWS, Azure, GCP)</li>;
								<li>• Security scanning and compliance automation</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $599/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Get started →</Link>;
							</div>;
						</div>;
						{/* Infrastructure Monitoring */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<BarChart3 className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Infrastructure Monitoring & Observability</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Real-time monitoring with AI-powered anomaly detection and predictive scaling.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Application performance monitoring (APM)</li>;
								<li>• Log aggregation and analysis</li>;
								<li>• Predictive scaling and optimization</li>;
								<li>• Custom dashboards and alerting</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $199/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Monitor now →</Link>;
							</div>;
						</div>;
						{/* API Management */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Globe className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>API Management & Gateway</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Enterprise API gateway with rate limiting, authentication, and analytics.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• API versioning and lifecycle management</li>;
								<li>• Rate limiting and throttling</li>;
								<li>• OAuth 2.0 and JWT authentication</li>;
								<li>• API analytics and usage insights</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $299/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Manage APIs →</Link>;
							</div>;
						</div>;
						{/* Database Optimization */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Database className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Database Performance Optimization</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Database tuning, optimization, and migration services for peak performance.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Query optimization and indexing</li>;
								<li>• Database migration and scaling</li>;
								<li>• Backup and disaster recovery</li>;
								<li>• Performance monitoring and tuning</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $399/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Optimize DB →</Link>;
							</div>;
						</div>;
						{/* Security Assessment */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Shield className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Security Assessment & Penetration Testing</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive security audits and penetration testing for applications and infrastructure.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Web application security testing</li>;
								<li>• Network penetration testing</li>;
								<li>• Vulnerability assessment and remediation</li>;
								<li>• Compliance audits (SOC2, HIPAA, GDPR)</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $2,500/project</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Secure now →</Link>;
							</div>;
						</div>;
						{/* Cloud Migration */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Cloud className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Cloud Migration & Modernization</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Seamless migration to cloud platforms with modernization and optimization.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Lift-and-shift and re-platforming</li>;
								<li>• Containerization and microservices</li>;
								<li>• Cost optimization and FinOps</li>;
								<li>• Training and knowledge transfer</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-indigo-600'>From $15k–$100k</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Migrate to cloud →</Link>;
							</div>;
						</div>;
					</div>;
					<div className='mt-12 text-center'>;
						<p className='text-sm text-gray-600 mb-4'>;
							All IT services include 24/7 monitoring, regular maintenance, and expert support.;
						</p>;
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
							<Link;
								href='/contact';
								className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors';
							>;
								Get IT Consultation;
								<ArrowRight className='ml-2 h-4 w-4' />;
							</Link>;
							<Link;
								href='https://ziontechgroup.com';
								target='_blank';
								rel='noreferrer';
								className='inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors';
							>;
								View Case Studies;
								<Globe className='ml-2 h-4 w-4' />;
							</Link>;
						</div>;
					</div>;
				</div>;
			</section>;
			{/* Micro SaaS Solutions Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-purple-50 to-pink-50'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-3xl text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Micro SaaS Solutions</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Specialized software solutions designed to solve specific business challenges. ;
							Ready-to-deploy tools with customizable features and integrations.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* Project Management Suite */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Users className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Project Management Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered project tracking with intelligent resource allocation and team collaboration.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Automated task prioritization and scheduling</li>;
								<li>• Team performance analytics and insights</li>;
								<li>• Integration with popular tools (Slack, Jira, etc.)</li>;
								<li>• Real-time collaboration and communication</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $149/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Start free trial →</Link>;
							</div>;
						</div>;
						{/* Analytics Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<BarChart3 className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Business Analytics Dashboard</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive analytics platform with customizable dashboards and automated reporting.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Real-time data visualization and insights</li>;
								<li>• Automated report generation and scheduling</li>;
								<li>• Custom KPI tracking and alerts</li>;
								<li>• Data integration from multiple sources</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $199/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Analyze data →</Link>;
							</div>;
						</div>;
						{/* Customer Feedback Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Star className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Customer Feedback Intelligence</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-driven sentiment analysis and actionable insights from customer feedback across channels.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Multi-channel feedback aggregation</li>;
								<li>• Sentiment analysis and trend identification</li>;
								<li>• Automated response recommendations</li>;
								<li>• Customer satisfaction tracking and NPS</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $99/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Analyze feedback →</Link>;
							</div>;
						</div>;
						{/* Inventory Management */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Database className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Inventory Management</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered inventory tracking with predictive analytics and automated reordering.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Real-time inventory tracking and alerts</li>;
								<li>• Predictive analytics for demand forecasting</li>;
								<li>• Automated reorder points and purchase orders</li>;
								<li>• Multi-location and warehouse management</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $179/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Manage inventory →</Link>;
							</div>;
						</div>;
						{/* HR Management System */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Users className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>HR Management Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Complete HR solution with employee management, payroll, and performance tracking.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Employee onboarding and offboarding</li>;
								<li>• Time tracking and attendance management</li>;
								<li>• Performance reviews and goal setting</li>;
								<li>• Payroll integration and benefits management</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $249/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Manage HR →</Link>;
							</div>;
						</div>;
						{/* Financial Management */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<TrendingUp className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Financial Management Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive financial tracking with invoicing, expense management, and reporting.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Automated invoicing and payment tracking</li>;
								<li>• Expense management and receipt scanning</li>;
								<li>• Financial reporting and tax preparation</li>;
								<li>• Integration with accounting software</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-indigo-600'>From $199/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Manage finances →</Link>;
							</div>;
						</div>;
					</div>;
					<div className='mt-12 text-center'>;
						<p className='text-sm text-gray-600 mb-4'>;
							All Micro SaaS solutions include free setup, training, and 30-day money-back guarantee.;
						</p>;
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
							<Link;
								href='/contact';
								className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors';
							>;
								Get Custom Solution;
								<ArrowRight className='ml-2 h-4 w-4' />;
							</Link>;
							<Link;
								href='https://ziontechgroup.com';
								target='_blank';
								rel='noreferrer';
								className='inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors';
							>;
								View Live Demos;
								<Globe className='ml-2 h-4 w-4' />;
							</Link>;
						</div>;
					</div>;
				</div>;
			</section>;
			{/* Process Section */}
			<section className='py-24 sm:py-32 bg-gray-50'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-2xl lg:text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>;
							Our Delivery Process;
						</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							We follow a proven methodology that ensures quality, speed, and successful outcomes.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>;
						<div className='text-center group'>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-blue-600'>1</span>;
							</div>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Discovery</h3>;
							<p className='text-gray-600'>Understand your needs and requirements</p>;
						</div>;
						<div className='text-center group'>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-green-600'>2</span>;
							</div>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Strategy</h3>;
							<p className='text-gray-600'>Plan the solution architecture</p>;
						</div>;
						<div className='text-center group'>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-purple-600'>3</span>;
							</div>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Development</h3>;
							<p className='text-gray-600'>Build and test the solution</p>;
						</div>;
						<div className='text-center group'>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-orange-600'>4</span>;
							</div>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Deployment</h3>;
							<p className='text-gray-600'>Launch and monitor performance</p>;
						</div>;
					</div>;
				</div>;
			</section>;
			{/* Pricing & Market Positioning Section */}
			<section className='py-24 sm:py-32 bg-gray-50'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-2xl text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>;
							Competitive Pricing & Market Leadership;
						</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Our pricing reflects the true value of cutting-edge technology solutions, with transparent costs and exceptional ROI.;
						</p>;
					</div>;
					{/* Pricing Tiers */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>;
						<div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300'>;
							<div className='text-center mb-6'>;
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>Micro SaaS Solutions</h3>;
								<div className='text-3xl font-bold text-blue-600 mb-2'>$300 - $8,000</div>;
								<div className='text-sm text-gray-500'>per month</div>;
							</div>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center text-sm text-gray-600'>;
									<CheckCircle className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />;
									Rapid deployment (1-8 weeks);
								</li>;
								<li className='flex items-center text-sm text-gray-600'>;
									<CheckCircle className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />;
									Industry-specific solutions;
								</li>;
								<li className='flex items-center text-sm text-gray-600'>;
									<CheckCircle className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />;
									AI-powered automation;
								</li>;
								<li className='flex items-center text-sm text-gray-600'>;
									<CheckCircle className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />;
									Scalable architecture;
								</li>;
							</ul>;
							<div className='text-center'>;
								<div className='text-xs text-gray-500 mb-2'>Market Average: $1,200 - $15,000/month</div>;
								<div className='text-sm font-medium text-green-600'>Save up to 60%</div>;
							</div>;
						</div>;
>>>>>>> origin/automation-fixes

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI, IT, automation, cybersecurity, web development, and mobile development." />
        <meta name="keywords" content="AI services, IT services, automation, cybersecurity, web development, mobile development" />
      </Head>
      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Comprehensive Technology Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Empowering businesses with cutting-edge technology solutions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional results for every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our technology services can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
<<<<<<< HEAD
          </div>
        </section>
      </Layout>
    </>
  );
}
=======
					{/* Market Positioning */}
					<div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-sm'>;
						<div className='text-center mb-8'>;
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>Why Choose Zion Tech Group?</h3>;
							<p className='text-lg text-gray-600 max-w-3xl mx-auto'>;
								We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.;
							</p>;
						</div>;
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>;
							<div className='text-center'>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4'>;
									<Award className='h-6 w-6 text-blue-600' />;
								</div>;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Industry Leaders</h4>;
								<p className='text-sm text-gray-600'>500+ successful projects across diverse industries</p>;
							</div>;
							<div className='text-center'>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4'>;
									<Zap className='h-6 w-6 text-green-600' />;
								</div>;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Rapid Delivery</h4>;
								<p className='text-sm text-gray-600'>50% faster deployment than industry average</p>;
							</div>;
							<div className='text-center'>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4'>;
									<Shield className='h-6 w-6 text-purple-600' />;
								</div>;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Enterprise Security</h4>;
								<p className='text-sm text-gray-600'>99.9% uptime with enterprise-grade security</p>;
							</div>;
							<div className='text-center'>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4'>;
									<TrendingUp className='h-6 w-6 text-orange-600' />;
								</div>;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Proven ROI</h4>;
								<p className='text-sm text-gray-600'>Average 300% ROI within first year</p>;
							</div>;
						</div>;
					</div>;
				</div>;
			</section>;

			{/* CTA Section */}
			<section className='bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-2xl text-center'>;
						<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>;
							Ready to get started?;
						</h2>;
						<p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100'>;
							Let&aposs discuss your project requirements and how we can help you achieve your goals.;
						</p>;
						<div className='mt-10 flex items-center justify-center gap-x-6'>;
							<Link;
								href='/contact';
								className='group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105';
								aria-label='Contact us to get started';
							>;
								Contact Us;
								<ArrowRight className='ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform' />;
							</Link>;
							<Link;
								href='/';
								className='text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group';
								aria-label='Back to homepage';
							>;
								Back to Home <span aria-hidden='true' className='group-hover:translate-x-1 transition-transform inline-block'>→</span>;
							</Link>;
						</div>;
					</div>;
				</div>;
			</section>;
		</PageTransition>;
		</Layout>;
	);
}
>>>>>>> origin/automation-fixes
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowRight,CheckCircle,Clock,Star,Zap,Shield,Users,Mail,FileText,BarChart3,ShoppingCart,Calendar,MessageSquare,Search,Eye,Target,TrendingUp,Globe,Lock,Cpu,Bot,Image,Video,Mic,Code,Settings,Monitor,Smartphone,Cloud,Server,Network,Car,Rocket,Heart,Building,Sprout,DollarSign,Award,Phone,MapPin,Database,Wrench,HardDrive,Wifi,Mobile,Laptop,Printer,Router,Key,AlertTriangle,RefreshCw,Download,Upload,Trash2,Copy,Edit,Save,Play,Pause,Stop,Brain,Package } from 'lucide-react'; import Navigation from '../components/Navigation'; import Footer from '../components/Footer'; export default function Services() { const title = 'Our Services — Zion Tech Group'; const description = 'Comprehensive technology services including AI solutions,IT services,micro SaaS applications,and digital transformation solutions.'; const serviceCategories = [ { title: 'AI Services',description: 'Cutting-edge artificial intelligence solutions for business automation and optimization',icon: Brain,href: '/ai-services',services: [ 'AI-Powered Email Responder','AI Content Creation Suite','Intelligent Document Processing','AI-Powered Talent Matching','Computer Vision Solutions','AI Chatbot & Virtual Assistant','Predictive Analytics Platform','AI-Powered Search Engine','AI Voice & Speech Processing','AI-Powered Fraud Detection' ],pricing: '$2,000 - $50,000/month',features: [ 'Machine Learning & Deep Learning','Natural Language Processing','Computer Vision & Image Recognition','Predictive Analytics & Forecasting','Automated Decision Making','Intelligent Process Automation' ] },{ title: 'IT Services',description: 'Comprehensive IT solutions including cloud migration,cybersecurity,and infrastructure management',icon: Server,href: '/it-services',services: [ 'Cloud Migration & Management','Cybersecurity Solutions','IT Infrastructure Management','Digital Transformation Consulting','Managed IT Support Services','Network Security & Monitoring','Data Backup & Recovery Solutions','IT Compliance & Audit Services','Mobile Device Management (MDM)','IT Project Management' ],pricing: '$1,500 - $50,000/month',features: [ 'Cloud Computing & Migration','Cybersecurity & Threat Protection','Network Infrastructure & Security','Data Management & Backup','IT Support & Maintenance','Compliance & Audit Services' ] },{ title: 'Micro SaaS Solutions',description: 'Innovative micro SaaS applications that solve specific business problems efficiently',icon: Package,href: '/micro-saas',services: [ 'AI-Powered Email Follow-Up Automation','E-Commerce Return Management System','AI Content Creation Suite','Smart Event Management Platform','AI-Powered Customer Support Platform','Intelligent Project Management Tool','AI-Powered Social Media Management','Smart Inventory Management System','AI-Powered Lead Scoring Platform','Automated Invoice Processing System' ],pricing: '$97 - $1,497/month',features: [ 'Business Process Automation','Customer Engagement Tools','Content Creation & Management','Project & Task Management','E-Commerce Solutions','Marketing & Sales Automation' ] },{ title: 'Blockchain Solutions',description: 'Advanced blockchain technology solutions for secure and transparent business operations',icon: Shield,href: '/blockchain-solutions',services: [ 'Smart Contract Development','DeFi Protocol Development','NFT Marketplace Creation','Blockchain Integration Services','Cryptocurrency Payment Solutions','Supply Chain Transparency','Digital Identity Management','Tokenization Services','Blockchain Consulting','Security Auditing' ],pricing: '$5,000 - $100,000/project',features: [ 'Smart Contract Development','DeFi & NFT Solutions','Blockchain Integration','Cryptocurrency Development','Security & Compliance','Consulting & Strategy' ] } ]; const stats = [ { number: '500+',label: 'Projects Completed' },{ number: '50+',label: 'Happy Clients' },{ number: '99.9%',label: 'Uptime Guarantee' },{ number: '24/7',label: 'Support Available' } ]; const whyChooseUs = [ { title: 'Expert Team',description: 'Certified professionals with years of experience in cutting-edge technologies',icon: Award },{ title: 'Proven Results',description: 'Track record of successful implementations and measurable business outcomes',icon: TrendingUp },{ title: '24/7 Support',description: 'Round-the-clock monitoring and support to ensure your systems run smoothly',icon: Clock },{ title: 'Security First',description: 'We prioritize security in every solution,ensuring your data is protected',icon: Shield } ]; return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <link rel="canonical" href="https: <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:url" content="https: <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> </Head> <Navigation /> <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> {} <section className="relative py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Our Technology Services </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Comprehensive technology solutions including AI services,IT solutions,micro SaaS applications,and digital transformation services to help your business thrive in the digital age. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get Started Today <ArrowRight className="ml-2 h-5 w-5" /> </Link> <Link href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200" > View Pricing </Link> </div> </div> </section> {} <section className="py-16 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> {stats.map((stat,index) => ( <div key={index} className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div> <div className="text-gray-600">{stat.label}</div> </div> ))} </div> </div> </section> {} <section className="py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Service Categories </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Choose from our comprehensive range of technology services designed to meet your specific business needs </p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> {serviceCategories.map((category,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100" > <div className="flex items-center mb-6"> <div className="p-4 bg-blue-100 rounded-lg mr-4"> <category.icon className="h-10 w-10 text-blue-600" /> </div> <div> <h3 className="text-2xl font-bold text-gray-900 mb-2"> {category.title} </h3> <p className="text-gray-600"> {category.description} </p> </div> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4> <div className="grid grid-cols-2 gap-2"> {category.features.map((feature,idx) => ( <div key={idx} className="flex items-center text-sm text-gray-600"> <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" /> {feature} </div> ))} </div> </div> <div className="mb-6"> <h4 className="font-semibold text-gray-900 mb-3">Popular Services:</h4> <div className="grid grid-cols-1 gap-1"> {category.services.slice(0,5).map((service,idx) => ( <div key={idx} className="text-sm text-gray-600 flex items-center"> <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" /> {service} </div> ))} {category.services.length > 5 && ( <div className="text-sm text-blue-600 font-medium"> +{category.services.length - 5} more services </div> )} </div> </div> <div className="border-t pt-4 mb-6"> <div className="flex justify-between items-center mb-2"> <span className="text-sm text-gray-600">Starting from:</span> <span className="text-lg font-bold text-blue-600"> {category.pricing} </span> </div> </div> <Link href={category.href} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Explore {category.title} <ArrowRight className="ml-2 h-4 w-4" /> </Link> </div> ))} </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We combine technical expertise with business acumen to deliver solutions that drive real results. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {whyChooseUs.map((item,index) => ( <div key={index} className="text-center"> <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <item.icon className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3> <p className="text-gray-600">{item.description}</p> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our Process </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We follow a proven methodology to ensure successful project delivery and maximum ROI. </p> </div> <div className="grid grid-cols-1 md:grid-cols-4 gap-8"> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 1 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3> <p className="text-gray-600"> We analyze your business needs and current technology landscape to understand your requirements. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 2 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy</h3> <p className="text-gray-600"> We develop a comprehensive strategy and roadmap tailored to your specific goals and budget. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 3 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Implementation</h3> <p className="text-gray-600"> Our expert team implements the solution with regular updates and transparent communication. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold"> 4 </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3> <p className="text-gray-600"> We provide ongoing support,monitoring,and optimization to ensure continued success. </p> </div> </div> </div> </section> {} <section className="py-20 bg-blue-600"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> Ready to Transform Your Business? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Contact us today to discuss your specific needs and get a customized solution that fits your business perfectly. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center" > <Phone className="mr-2 h-5 w-5" /> Call +1 302 464 0950 </Link> <Link href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > <Mail className="mr-2 h-5 w-5" /> Send Email </Link> </div> </div> </section> </main> <Footer /> </> )}
>>>>>>> origin/automation-improvements
=======
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today to discover how our revolutionary services can drive unprecedented growth and ROI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-black/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">{contactInfo.mobile}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">✉️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">{contactInfo.email}</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6">
                <div className="text-2xl mb-4">📍</div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/pricing"
                variant="secondary"
                size="lg"
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
>>>>>>> origin/automation/changelog
