import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Server,
  Shield,
  Cloud,
  Database,
  Network,
  Monitor,
  Smartphone,
  Laptop,
  Settings,
  Lock,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Users,
  BarChart3,
  Code,
  FileText,
  Mail,
  Phone,
  Building,
  Car,
  Heart,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  Truck,
  Factory,
  Banknote,
  Target,
  TrendingUp,
  Eye,
  Bot,
  MessageSquare,
  Search,
  Video,
  Image,
  Mic,
  Calendar,
  MapPin,
  PhoneCall,
  MessageCircle,
  Headphones,
  HelpCircle,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Plus,
  Minus,
  DollarSign,
  CreditCard,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Wifi as WifiIcon,
  WifiOff,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalZero,
  Brain,
  Rocket,
  Sprout,
  Database as DatabaseIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon2,
  Zap as ZapIcon,
  Users as UsersIcon,
  BarChart3 as BarChart3Icon,
  Code as CodeIcon,
  FileText as FileTextIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Building as BuildingIcon,
  Car as CarIcon,
  Heart as HeartIcon,
  ShoppingCart as ShoppingCartIcon,
  BookOpen as BookOpenIcon,
  Home as HomeIcon,
  Gamepad2 as Gamepad2Icon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Banknote as BanknoteIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Eye as EyeIcon,
  Bot as BotIcon,
  MessageSquare as MessageSquareIcon,
  Search as SearchIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Mic as MicIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  PhoneCall as PhoneCallIcon,
  MessageCircle as MessageCircleIcon,
  Headphones as HeadphonesIcon,
  HelpCircle as HelpCircleIcon,
  Wrench as WrenchIcon,
  Cog as CogIcon,
  Layers as LayersIcon,
  GitBranch as GitBranchIcon,
  Terminal as TerminalIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  DollarSign as DollarSignIcon,
  CreditCard as CreditCardIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw as RefreshCwIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipForward as SkipForwardIcon,
  SkipBack as SkipBackIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Wifi as WifiIcon3,
  WifiOff as WifiOffIcon2,
  Battery as BatteryIcon,
  BatteryLow as BatteryLowIcon,
  Signal as SignalIcon,
  SignalHigh as SignalHighIcon,
  SignalLow as SignalLowIcon,
  SignalZero as SignalZeroIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const innovativeItServices = [
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations with AI-driven monitoring, predictive analytics, and automated incident response.',
    icon: Bot,
    features: ['AI Monitoring', 'Predictive Analytics', 'Automated Remediation', 'Performance Optimization', 'Self-Healing Systems'],
    pricing: '$8,000 - $50,000/month',
    category: 'AI Operations',
    popular: true,
    benefits: ['99.9% Uptime', 'Proactive Issue Resolution', 'Reduced Downtime', 'Cost Savings'],
    marketPrice: '$12,000 - $75,000/month',
    link: 'https://ziontechgroup.com/ai-it-operations',
    description: 'Revolutionary IT operations center powered by artificial intelligence that provides 24/7 monitoring, predictive analytics, and automated incident response. Reduces downtime by up to 80% and operational costs by 40%.',
    useCases: ['Enterprise IT Operations', 'Cloud Infrastructure', 'Data Centers', 'Mission-Critical Systems'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'VMware', 'ServiceNow'],
    pricingTiers: [
      { name: 'Starter', price: '$8,000/month', features: ['Up to 100 servers', 'Basic AI monitoring', 'Email support'] },
      { name: 'Professional', price: '$25,000/month', features: ['Up to 500 servers', 'Advanced AI analytics', 'Priority support', 'Custom integrations'] },
      { name: 'Enterprise', price: '$50,000/month', features: ['Unlimited servers', 'Full AI operations', '24/7 support', 'Custom development'] }
    ]
  },
  {
    title: 'Quantum-Safe Cybersecurity Solutions',
    description: 'Next-generation cybersecurity solutions designed to protect against quantum computing threats.',
    icon: Shield,
    features: ['Quantum Key Distribution', 'Post-Quantum Cryptography', 'Quantum Random Number Generation', 'Advanced Threat Detection'],
    pricing: '$15,000 - $100,000/setup',
    category: 'Quantum Security',
    popular: true,
    benefits: ['Future-Proof Security', 'Quantum Threat Protection', 'Advanced Encryption', 'Compliance Ready'],
    marketPrice: '$25,000 - $150,000/setup',
    link: 'https://ziontechgroup.com/quantum-safe-cybersecurity',
    description: 'Cutting-edge cybersecurity solutions that protect against quantum computing threats using quantum key distribution and post-quantum cryptography. Ensures your data remains secure even as quantum computers become more powerful.',
    useCases: ['Government Agencies', 'Financial Institutions', 'Healthcare Organizations', 'Critical Infrastructure'],
    integrations: ['PKI Systems', 'VPN Solutions', 'Email Encryption', 'Database Security', 'API Protection'],
    pricingTiers: [
      { name: 'Standard', price: '$15,000/setup', features: ['Basic quantum protection', 'Standard encryption', 'Email support'] },
      { name: 'Advanced', price: '$50,000/setup', features: ['Advanced quantum protection', 'Custom encryption', 'Priority support', 'Compliance tools'] },
      { name: 'Enterprise', price: '$100,000/setup', features: ['Full quantum protection', 'Custom solutions', '24/7 support', 'Dedicated team'] }
    ]
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing infrastructure for ultra-low latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Data Centers', '5G Integration', 'IoT Connectivity', 'Real-time Processing', 'Distributed Storage'],
    pricing: '$5,000 - $30,000/month',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Ultra-Low Latency', 'Improved Performance', 'Cost Optimization', 'Scalability'],
    marketPrice: '$8,000 - $50,000/month',
    link: 'https://ziontechgroup.com/edge-computing-infrastructure',
    description: 'Comprehensive edge computing infrastructure that brings processing power closer to data sources, reducing latency and improving performance for real-time applications and IoT deployments.',
    useCases: ['Autonomous Vehicles', 'Smart Cities', 'Industrial IoT', 'Real-time Analytics'],
    integrations: ['AWS Wavelength', 'Azure Edge Zones', 'Google Cloud Edge', 'Kubernetes', 'Docker'],
    pricingTiers: [
      { name: 'Basic', price: '$5,000/month', features: ['Up to 5 edge locations', 'Basic processing', 'Email support'] },
      { name: 'Professional', price: '$15,000/month', features: ['Up to 20 edge locations', 'Advanced processing', 'Priority support', 'Custom configurations'] },
      { name: 'Enterprise', price: '$30,000/month', features: ['Unlimited locations', 'Full edge computing', '24/7 support', 'Custom development'] }
    ]
  },
  {
    title: 'AI-Powered Cloud Migration Platform',
    description: 'Intelligent cloud migration platform with automated assessment, planning, and execution.',
    icon: Cloud,
    features: ['Automated Assessment', 'Migration Planning', 'Risk Analysis', 'Automated Execution', 'Cost Optimization'],
    pricing: '$10,000 - $75,000/project',
    category: 'Cloud Migration',
    popular: true,
    benefits: ['Faster Migration', 'Risk Reduction', 'Cost Optimization', 'Minimal Downtime'],
    marketPrice: '$15,000 - $100,000/project',
    link: 'https://ziontechgroup.com/ai-cloud-migration',
    description: 'Advanced cloud migration platform that uses AI to automatically assess, plan, and execute cloud migrations with minimal risk and downtime. Reduces migration time by up to 70% and costs by 40%.',
    useCases: ['Legacy System Migration', 'Multi-Cloud Strategy', 'Hybrid Cloud Setup', 'Disaster Recovery'],
    integrations: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Hyper-V', 'OpenStack', 'Kubernetes'],
    pricingTiers: [
      { name: 'Small', price: '$10,000/project', features: ['Up to 50 servers', 'Basic migration', 'Email support'] },
      { name: 'Medium', price: '$35,000/project', features: ['Up to 200 servers', 'Advanced migration', 'Priority support', 'Custom planning'] },
      { name: 'Large', price: '$75,000/project', features: ['Unlimited servers', 'Full AI migration', '24/7 support', 'Custom development'] }
    ]
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain infrastructure with smart contract development and decentralized application support.',
    icon: Layers,
    features: ['Blockchain Setup', 'Smart Contract Development', 'DApp Support', 'Consensus Mechanisms', 'Security Auditing'],
    pricing: '$20,000 - $150,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Decentralized Security', 'Transparency', 'Cost Reduction', 'Innovation'],
    marketPrice: '$30,000 - $200,000/project',
    link: 'https://ziontechgroup.com/blockchain-infrastructure',
    description: 'Comprehensive blockchain infrastructure services that help enterprises implement and manage blockchain solutions for supply chain, finance, healthcare, and other industries.',
    useCases: ['Supply Chain Management', 'Financial Services', 'Healthcare Records', 'Digital Identity'],
    integrations: ['Ethereum', 'Hyperledger', 'Corda', 'Quorum', 'AWS Blockchain', 'Azure Blockchain'],
    pricingTiers: [
      { name: 'Starter', price: '$20,000/project', features: ['Basic blockchain setup', 'Standard smart contracts', 'Email support'] },
      { name: 'Professional', price: '$75,000/project', features: ['Advanced blockchain setup', 'Custom smart contracts', 'Priority support', 'Security auditing'] },
      { name: 'Enterprise', price: '$150,000/project', features: ['Full blockchain infrastructure', 'Custom development', '24/7 support', 'Dedicated team'] }
    ]
  },
  {
    title: 'AI-Powered Data Center Automation',
    description: 'Intelligent data center automation with AI-driven optimization and predictive maintenance.',
    icon: Server,
    features: ['AI Optimization', 'Predictive Maintenance', 'Energy Efficiency', 'Automated Scaling', 'Performance Monitoring'],
    pricing: '$12,000 - $80,000/month',
    category: 'Data Center',
    popular: true,
    benefits: ['Energy Savings', 'Improved Performance', 'Reduced Downtime', 'Cost Optimization'],
    marketPrice: '$18,000 - $120,000/month',
    link: 'https://ziontechgroup.com/ai-data-center-automation',
    description: 'Revolutionary data center automation platform that uses AI to optimize performance, reduce energy consumption, and predict maintenance needs. Reduces energy costs by up to 35% and improves performance by 25%.',
    useCases: ['Enterprise Data Centers', 'Cloud Providers', 'Colocation Facilities', 'Edge Computing'],
    integrations: ['VMware', 'OpenStack', 'Kubernetes', 'Docker', 'Ansible', 'Terraform', 'Prometheus'],
    pricingTiers: [
      { name: 'Standard', price: '$12,000/month', features: ['Up to 100 servers', 'Basic AI optimization', 'Email support'] },
      { name: 'Advanced', price: '$40,000/month', features: ['Up to 500 servers', 'Advanced AI optimization', 'Priority support', 'Custom configurations'] },
      { name: 'Enterprise', price: '$80,000/month', features: ['Unlimited servers', 'Full AI automation', '24/7 support', 'Custom development'] }
    ]
  },
  {
    title: 'Zero Trust Network Architecture',
    description: 'Comprehensive zero trust security architecture implementation with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement', 'Threat Detection'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Security Architecture',
    popular: true,
    benefits: ['Enhanced Security', 'Reduced Attack Surface', 'Compliance', 'Visibility'],
    marketPrice: '$40,000 - $200,000/setup',
    link: 'https://ziontechgroup.com/zero-trust-architecture',
    description: 'Comprehensive zero trust security architecture that implements continuous verification, micro-segmentation, and least privilege access principles to protect against modern cyber threats.',
    useCases: ['Enterprise Networks', 'Government Agencies', 'Financial Institutions', 'Healthcare Organizations'],
    integrations: ['Cisco', 'Palo Alto', 'Fortinet', 'Microsoft', 'Google', 'AWS', 'Azure'],
    pricingTiers: [
      { name: 'Standard', price: '$25,000/setup', features: ['Basic zero trust setup', 'Standard policies', 'Email support'] },
      { name: 'Advanced', price: '$75,000/setup', features: ['Advanced zero trust setup', 'Custom policies', 'Priority support', 'Compliance tools'] },
      { name: 'Enterprise', price: '$150,000/setup', features: ['Full zero trust architecture', 'Custom solutions', '24/7 support', 'Dedicated team'] }
    ]
  },
  {
    title: 'AI-Powered Network Optimization',
    description: 'Intelligent network optimization with AI-driven traffic analysis, routing optimization, and performance enhancement.',
    icon: Wifi,
    features: ['Traffic Analysis', 'Routing Optimization', 'Performance Enhancement', 'Bandwidth Management', 'Quality of Service'],
    pricing: '$8,000 - $50,000/month',
    category: 'Network Optimization',
    popular: true,
    benefits: ['Improved Performance', 'Cost Reduction', 'Better Reliability', 'Optimized Traffic'],
    marketPrice: '$12,000 - $75,000/month',
    link: 'https://ziontechgroup.com/ai-network-optimization',
    description: 'Advanced network optimization platform that uses AI to analyze traffic patterns, optimize routing, and enhance network performance. Reduces latency by up to 40% and improves throughput by 30%.',
    useCases: ['Enterprise Networks', 'Service Providers', 'Data Centers', 'Cloud Infrastructure'],
    integrations: ['Cisco', 'Juniper', 'Arista', 'HPE', 'Dell', 'VMware', 'OpenStack'],
    pricingTiers: [
      { name: 'Basic', price: '$8,000/month', features: ['Up to 100 network devices', 'Basic optimization', 'Email support'] },
      { name: 'Professional', price: '$25,000/month', features: ['Up to 500 network devices', 'Advanced optimization', 'Priority support', 'Custom configurations'] },
      { name: 'Enterprise', price: '$50,000/month', features: ['Unlimited devices', 'Full AI optimization', '24/7 support', 'Custom development'] }
    ]
  },
  {
    title: 'Quantum Computing Integration Services',
    description: 'Integration services for quantum computing solutions with hybrid classical-quantum systems.',
    icon: Cpu,
    features: ['Quantum System Integration', 'Hybrid Computing', 'Quantum Algorithm Development', 'Performance Optimization', 'Security Implementation'],
    pricing: '$50,000 - $300,000/project',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Quantum Advantage', 'Hybrid Computing', 'Advanced Algorithms', 'Future-Proof Technology'],
    marketPrice: '$75,000 - $500,000/project',
    link: 'https://ziontechgroup.com/quantum-computing-integration',
    description: 'Cutting-edge quantum computing integration services that help enterprises leverage quantum computing for optimization, cryptography, and machine learning applications.',
    useCases: ['Financial Modeling', 'Drug Discovery', 'Cryptography', 'Machine Learning'],
    integrations: ['IBM Quantum', 'Google Quantum', 'Microsoft Azure Quantum', 'Amazon Braket', 'Rigetti'],
    pricingTiers: [
      { name: 'Pilot', price: '$50,000/project', features: ['Basic quantum integration', 'Standard algorithms', 'Email support'] },
      { name: 'Production', price: '$150,000/project', features: ['Advanced quantum integration', 'Custom algorithms', 'Priority support', 'Performance optimization'] },
      { name: 'Enterprise', price: '$300,000/project', features: ['Full quantum integration', 'Custom solutions', '24/7 support', 'Dedicated team'] }
    ]
  },
  {
    title: 'AI-Powered IT Service Management',
    description: 'Intelligent IT service management platform with AI-driven automation, predictive analytics, and self-service capabilities.',
    icon: Settings,
    features: ['AI Automation', 'Predictive Analytics', 'Self-Service Portal', 'Incident Management', 'Change Management'],
    pricing: '$5,000 - $35,000/month',
    category: 'ITSM',
    popular: true,
    benefits: ['Improved Efficiency', 'Reduced Costs', 'Better User Experience', 'Proactive Management'],
    marketPrice: '$8,000 - $50,000/month',
    link: 'https://ziontechgroup.com/ai-itsm',
    description: 'Revolutionary IT service management platform that uses AI to automate routine tasks, predict issues, and provide intelligent self-service capabilities. Reduces service desk costs by up to 50% and improves user satisfaction by 40%.',
    useCases: ['Enterprise IT Support', 'Service Desk Operations', 'Change Management', 'Asset Management'],
    integrations: ['ServiceNow', 'Jira Service Management', 'BMC Remedy', 'Cherwell', 'Microsoft System Center'],
    pricingTiers: [
      { name: 'Starter', price: '$5,000/month', features: ['Up to 1,000 users', 'Basic AI features', 'Email support'] },
      { name: 'Professional', price: '$15,000/month', features: ['Up to 5,000 users', 'Advanced AI features', 'Priority support', 'Custom workflows'] },
      { name: 'Enterprise', price: '$35,000/month', features: ['Unlimited users', 'Full AI capabilities', '24/7 support', 'Custom development'] }
    ]
  }
];

export default function InnovativeItServicesPage() {
  return (
    <Layout
      title="Innovative IT Services - Zion Tech Group"
      description="Discover cutting-edge IT services powered by AI, quantum computing, and advanced technology. Transform your infrastructure with our innovative IT solutions."
      keywords="innovative IT services, AI operations, quantum computing, edge computing, blockchain infrastructure"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Innovative{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your IT infrastructure with our cutting-edge services powered by AI, quantum computing, and advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/it-services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Innovative IT Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our cutting-edge IT services designed to solve complex infrastructure challenges with AI and advanced technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovativeItServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{service.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href={service.link}
                        className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center font-semibold"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-center font-semibold"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative IT services can help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="/it-services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}