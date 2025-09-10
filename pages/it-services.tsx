<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Award, 
  Star, 
  Zap, 
  TrendingUp, 
  Users, 
  Lock, 
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  Building,
  BarChart3,
  Code,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket,
  Sprout,
  Eye,
  Bot,
  Target,
  TreePine,
  Heart,
  GraduationCap,
  PieChart,
  Truck,
  Home,
  Video,
  ClipboardList,
  Phone,
  MapPin,
  Mail,
  CreditCard,
  Camera,
  FileText,
  Mic,
  Calendar,
  Package,
  Car
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
=======
import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Cpu, Brain, Rocket, Shield, Zap, Target, Atom, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Wrench
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'enterprise-it',
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise infrastructure and management',
      features: ['Infrastructure Management', 'Cloud Migration', 'Security Implementation', 'Performance Optimization'],
      price: '$2,999',
      period: 'month',
      popular: true,
      icon: <Building className="w-8 h-8" />
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      description: 'Advanced security solutions for modern threats',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      features: ['Cloud Architecture', 'Migration Services', 'Optimization', 'Multi-cloud Management'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <Cloud className="w-8 h-8" />
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation',
      description: 'Streamlined development and operations',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      price: '$1,799',
      period: 'month',
      popular: false,
      icon: <Settings className="w-8 h-8" />
    },
    {
      id: 'data-management',
      name: 'Data Management',
      description: 'Comprehensive data solutions and analytics',
      features: ['Data Strategy', 'Analytics Platform', 'Governance', 'Business Intelligence'],
      price: '$2,299',
      period: 'month',
      popular: false,
      icon: <Database className="w-8 h-8" />
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Robust networking and connectivity solutions',
      features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Scalability'],
      price: '$1,599',
      period: 'month',
      popular: false,
      icon: <Network className="w-8 h-8" />
    }
  ];

  const itCapabilities = [
    {
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions',
      icon: <Server className="w-6 h-6" />
    },
    {
      title: 'Cloud Services',
      description: 'Multi-cloud and hybrid solutions',
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: 'Security & Compliance',
      description: 'Advanced cybersecurity and compliance',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'DevOps & Automation',
      description: 'Streamlined development operations',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Data & Analytics',
      description: 'Data-driven insights and solutions',
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking infrastructure',
      icon: <Network className="w-6 h-6" />
    }
  ];

  const itAdvantages = [
    {
      title: 'Scalability',
      description: 'Flexible solutions that grow with your business needs',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security to protect your business',
      icon: <Lock className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Efficiency',
      description: 'Optimized processes that improve productivity',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology to stay ahead of competition',
      icon: <Cpu className="w-8 h-8 text-purple-400" />
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Education',
    'Government',
    'Technology',
    'Transportation'
  ];

  const technologies = [
    'AWS & Azure',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Jenkins',
    'GitLab',
    'Ansible',
    'Prometheus'
  ];

  return (
    <Layout>
      <SEO 
        title="IT Services & Solutions - Zion Tech Group"
        description="Comprehensive IT services and solutions for modern enterprises. From infrastructure to cybersecurity, we deliver reliable technology solutions."
        keywords="IT services, enterprise IT, cybersecurity, cloud solutions, DevOps, data management, network infrastructure"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions that drive business transformation and operational excellence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* IT Capabilities */}
        <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                IT Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions covering every aspect of modern business technology
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg mr-3">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-gray-300">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT solutions and services
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'border-emerald-500 shadow-lg shadow-emerald-500/25' 
                      : 'border-gray-700 hover:border-emerald-500'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 bg-emerald-500/20 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                      {service.price}
                      <span className="text-lg text-gray-400">/{service.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Partner with us to build a robust, scalable, and secure technology foundation for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IT Transformation
                </a>
                <a 
                  href="/contact" 
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
>>>>>>> origin/automation/changelog
};

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure & Migration',
    description: 'Complete cloud transformation with AWS, Azure, and GCP expertise. We handle everything from migration to optimization.',
    icon: Cloud,
    category: 'Cloud Services',
    price: 'Starting at $2,500/month',
    features: [
      'Multi-cloud strategy development',
      'Cloud migration planning & execution',
      'Infrastructure as Code (IaC)',
      'Cost optimization & monitoring',
      'Auto-scaling & load balancing',
      'Disaster recovery setup',
      '24/7 cloud monitoring',
      'Security compliance (SOC2, ISO27001)'
    ],
    benefits: [
      'Reduce infrastructure costs by 30-50%',
      'Improve scalability and performance',
      'Enhance security and compliance',
      'Enable remote work capabilities'
    ],
    marketPrice: '$4,000-8,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Enterprises, SMBs, Startups'
  },
  {
    id: 2,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure with enterprise-grade protection.',
    icon: Shield,
    category: 'Cybersecurity',
    price: 'Starting at $2,000/month',
    features: [
      'Security audits & assessments',
      'Penetration testing & vulnerability scanning',
      'Zero-trust architecture implementation',
      'Compliance management (GDPR, HIPAA, SOX)',
      'Threat detection & response',
      'Incident response planning',
      'Security awareness training',
      '24/7 security monitoring'
    ],
    benefits: [
      'Protect against 99.9% of cyber threats',
      'Reduce security incidents by 80%',
      'Ensure compliance with regulations',
      'Lower insurance premiums'
    ],
    marketPrice: '$3,500-7,000/month',
    setupTime: '3-6 weeks',
    targetUsers: 'All industries, Healthcare, Finance, Government'
  },
  {
    id: 3,
    title: 'DevOps & CI/CD Automation',
    description: 'Streamline your development workflow with automated deployment, testing, and monitoring solutions.',
    icon: Settings,
    category: 'DevOps',
    price: 'Starting at $1,800/month',
    features: [
      'CI/CD pipeline setup & optimization',
      'Container orchestration (Kubernetes, Docker)',
      'Infrastructure automation (Terraform, Ansible)',
      'Monitoring & logging solutions',
      'Performance optimization',
      'Disaster recovery automation',
      'Security scanning integration',
      'Team training & best practices'
    ],
    benefits: [
      'Deploy 10x faster with confidence',
      'Reduce deployment errors by 90%',
      'Improve team productivity by 40%',
      'Lower operational costs by 30%'
    ],
    marketPrice: '$3,000-6,000/month',
    setupTime: '2-4 weeks',
    targetUsers: 'Software companies, Tech startups, Enterprises'
  },
  {
    id: 4,
    title: 'Database Management & Optimization',
    description: 'Expert database administration, optimization, and migration services for all major database platforms.',
    icon: Database,
    category: 'Database Services',
    price: 'Starting at $1,500/month',
    features: [
      'Database design & architecture',
      'Performance tuning & optimization',
      'Data migration & consolidation',
      'Backup & recovery solutions',
      'High availability setup',
      'Security hardening',
      'Monitoring & alerting',
      '24/7 database support'
    ],
    benefits: [
      'Improve query performance by 60%',
      'Reduce downtime by 95%',
      'Optimize storage costs by 40%',
      'Ensure data integrity and security'
    ],
    marketPrice: '$2,500-5,000/month',
    setupTime: '1-3 weeks',
    targetUsers: 'E-commerce, SaaS companies, Enterprises'
  },
  {
    id: 5,
    title: 'Network Infrastructure & Security',
    description: 'Design, implement, and maintain secure, high-performance network infrastructure for your organization.',
    icon: Network,
    category: 'Network Services',
    price: 'Starting at $1,200/month',
    features: [
      'Network design & architecture',
      'Firewall configuration & management',
      'VPN setup & remote access',
      'Wireless network optimization',
      'Network monitoring & management',
      'Bandwidth optimization',
      'Security policy implementation',
      '24/7 network support'
    ],
    benefits: [
      'Improve network performance by 50%',
      'Enhance security posture',
      'Reduce network downtime by 90%',
      'Lower operational costs'
    ],
    marketPrice: '$2,000-4,000/month',
    setupTime: '1-2 weeks',
    targetUsers: 'All businesses, Remote teams, Branch offices'
  },
  {
    id: 6,
    title: 'IT Support & Helpdesk Services',
    description: 'Comprehensive IT support services with 24/7 helpdesk, remote assistance, and on-site support.',
    icon: Users,
    category: 'IT Support',
    price: 'Starting at $800/month',
    features: [
      '24/7 helpdesk support',
      'Remote desktop assistance',
      'On-site technical support',
      'Hardware & software troubleshooting',
      'User training & onboarding',
      'IT asset management',
      'Ticket tracking & resolution',
      'SLA compliance monitoring'
    ],
    benefits: [
      'Reduce IT downtime by 70%',
      'Improve user satisfaction by 85%',
      'Lower IT support costs by 40%',
      'Faster issue resolution'
    ],
    marketPrice: '$1,500-3,000/month',
    setupTime: '1 week',
    targetUsers: 'All businesses, Remote teams, SMBs'
  },
=======
import {;
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Settings,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Cpu,
  HardDrive,
  Wifi,
  Code,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Car,
  Brain,
  Satellite,
  TreePine} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';
export default function ITServices() {;
  const title = 'IT Services — Zion Tech Group';
  const description = 'Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.';
  const itServices = [;
  {;
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform',
      icon: Cloud,
      features: [;
        'Multi-cloud architecture design and implementation,Legacy system migration and modernization,Serverless computing and containerization,Auto-scaling and load balancing,Cost optimization and FinOps practices,Disaster recovery and backup solutions';
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services'},
    {;
      title: 'Cybersecurity & Compliance',
      description: 'Enterprise-grade security solutions and compliance management',
      icon: Shield,
      features: [;
        'Zero-trust security architecture,SOC 2, GDPR, HIPAA compliance automation,Penetration testing and vulnerability assessments,Security monitoring and incident response,Identity and access management (IAM),Data encryption and privacy protection';
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '3-8 weeks',
      category: 'Security Services'},
    {;
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of enterprise networks',
      icon: Network,
      features: [;
        'SD-WAN and hybrid network solutions,Network security and firewall management,Wireless network design and optimization,Network monitoring and performance tuning,VoIP and unified communications,Network documentation and training';
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-6 weeks',
      category: 'Network Services'},
    {;
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services',
      icon: Users,
      features: [;
        '24/7/365 technical support coverage,Remote desktop and troubleshooting,Software installation and updates,Hardware procurement and management,User training and documentation,SLA-based response times';
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '1-2 weeks',
      category: 'Support Services'},
    {;
      title: 'Data Management & Analytics',
      description: 'Data warehousing, analytics, and business intelligence solutions',
      icon: Database,
      features: [;
        'Data warehouse design and implementation,ETL/ELT pipeline development,Business intelligence dashboards,Data governance and quality management,Real-time analytics and reporting,Machine learning data preparation';
      ],
      pricing: '$4,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Data Services'},
    {;
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure as code',
      icon: Settings,
      features: [;
        'CI/CD pipeline setup and optimization,Infrastructure as Code (IaC) implementation,Container orchestration with Kubernetes,Monitoring and logging solutions,Automated testing and quality gates,DevSecOps and security integration';
      ],
      pricing: '$3,500 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'DevOps Services'},
    {;
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation consulting and implementation',
      icon: Zap,
      features: [;
        'Digital strategy and roadmap development,Process automation and optimization,Legacy system modernization,Change management and training,Technology stack evaluation,ROI measurement and optimization';
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Consulting Services'},
    {;
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and monitoring services',
      icon: Monitor,
      features: [;
        'Proactive monitoring and maintenance,Patch management and updates,Performance optimization,Capacity planning and scaling,Vendor management and procurement,IT strategy and planning';
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'Managed Services'},
    {;
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [;
        'Smart contract development and auditing,DeFi and NFT platform development,Blockchain integration and consulting,Cryptocurrency wallet development,Tokenomics and governance design,Cross-chain interoperability solutions';
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-20 weeks',
      category: 'Blockchain Services'},
    {;
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure',
      icon: Cpu,
      features: [;
        'IoT device development and integration,Edge computing platform setup,Real-time data processing and analytics,IoT security and device management,Sensor network design and deployment,Edge AI and machine learning integration';
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'IoT Services'},
    {;
      title: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and implementation',
      icon: Cpu,
      features: [;
        'Quantum algorithm development,Quantum computing strategy consulting,Hybrid classical-quantum solutions,Quantum security and cryptography,Quantum machine learning applications,Quantum hardware evaluation and selection';
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Services'},
    {;
      title: '5G & Network Modernization',
      description: '5G network implementation and legacy network modernization',
      icon: Wifi,
      features: [;
        '5G network planning and deployment,Network slicing and optimization,Legacy network migration,Private 5G network setup,Network performance monitoring,Edge computing integration';
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '8-20 weeks',
      category: 'Network Services'},
    {;
      title: 'AR/VR Development & Implementation',
      description: 'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [;
        'AR/VR application development,3D modeling and animation,Immersive training and simulation,Virtual showroom and retail solutions,AR/VR hardware integration,Performance optimization and testing';
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'AR/VR Services'},
    {;
      title: 'API Management & Integration',
      description: 'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [;
        'API design and development,API gateway setup and management,Third-party API integration,API security and authentication,API analytics and monitoring,Microservices architecture design';
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-12 weeks',
      category: 'API Services'},
    {;
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [;
        'Disaster recovery strategy development,Backup and replication solutions,Business continuity planning,Recovery time objective optimization,Testing and validation services,Compliance and audit support';
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-16 weeks',
      category: 'Recovery Services'},
    {;
      title: 'Green IT & Sustainability Solutions',
      description: 'Sustainable IT practices and carbon footprint reduction',
      icon: Globe,
      features: [;
        'Energy-efficient infrastructure design,Carbon footprint assessment and reduction,Sustainable cloud migration,Green data center optimization,E-waste management and recycling,Sustainability reporting and compliance';
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-14 weeks',
      category: 'Sustainability Services'},
    {;
      title: 'FinTech & Payment Solutions',
      description: 'Financial technology solutions and payment system integration',
      icon: Database,
      features: [;
        'Payment gateway integration,Financial API development,Compliance and regulatory solutions,Fraud detection and prevention,Digital banking solutions,Cryptocurrency integration';
      ],
      pricing: '$8,000 - $60,000/month',
      delivery: '10-24 weeks',
      category: 'FinTech Services'},
    {;
      title: 'Edge Computing & Distributed Systems',
      description: 'Edge computing infrastructure and distributed system architecture',
      icon: Cpu,
      features: [;
        'Edge computing platform deployment,Distributed system architecture design,Real-time data processing at the edge,Edge AI and machine learning deployment,Multi-cloud and hybrid edge solutions,Edge security and device management';
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '8-16 weeks',
      category: 'Edge Computing Services'},
    {;
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      icon: Shield,
      features: [;
        'Zero trust network architecture design,Identity and access management (IAM),Micro-segmentation implementation,Continuous security monitoring,Privileged access management (PAM),Security orchestration and automation';
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'Security Architecture Services'},
    {;
      title: 'Hyperautomation & RPA Solutions',
      description: 'Intelligent process automation and robotic process automation',
      icon: Settings,
      features: [;
        'Robotic process automation (RPA) implementation,Intelligent document processing,Workflow automation and optimization,AI-powered decision making integration,Process mining and discovery,End-to-end automation orchestration';
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Automation Services'},
    {;
      title: 'Digital Twin & Simulation Platforms',
      description: 'Digital twin development and simulation platform implementation',
      icon: Monitor,
      features: [;
        'Digital twin architecture and development,Real-time simulation and modeling,IoT sensor integration and data collection,Predictive analytics and maintenance,Virtual testing and optimization,Integration with existing systems';
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '12-24 weeks',
      category: 'Digital Twin Services'},
    {;
      title: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud strategy and hybrid cloud management',
      icon: Cloud,
      features: [;
        'Multi-cloud architecture design and implementation,Cloud cost optimization and FinOps,Hybrid cloud connectivity and management,Cloud migration and modernization,Disaster recovery across clouds,Cloud governance and compliance';
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-20 weeks',
      category: 'Multi-Cloud Services'},
    {;
      title: 'Low-Code/No-Code Platform Development',
      description: 'Custom low-code and no-code platform development and implementation',
      icon: Code,
      features: [;
        'Custom low-code platform development,No-code application builder creation,Workflow automation and integration,User interface and experience design,API integration and data connectivity,Training and support services';
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Low-Code Services'},
    {;
      title: 'IT Helpdesk Platform for Managed Service Providers',
      description: 'Comprehensive IT helpdesk solution designed specifically for MSPs with client management and ticketing',
      icon: Users,
      features: [;
        'Multi-client ticketing system with client portals,Public and private knowledge bases,Remote monitoring and management integration,Automated ticket routing and escalation,SLA management and reporting,Integration with PSA and RMM tools';
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'MSP Services';
},
    {;
      title: 'Cloud Cost Optimization & FinOps Platform',
      description: 'Intelligent cloud cost management and optimization with automated resource scaling',
      icon: TrendingUp,
      features: [;
        'Real-time cloud cost monitoring and analysis,Automated resource optimization and scaling,Cost allocation and chargeback management,Reserved instance and savings plan optimization,Multi-cloud cost comparison and recommendations,FinOps best practices implementation';
      ],
      pricing: '$3,000 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Cloud Optimization Services';
},
    {;
      title: 'API Management & Developer Portal Platform',
      description: 'Comprehensive API management solution with developer portal and analytics',
      icon: Code,
      features: [;
        'API gateway and management platform,Developer portal and documentation,API analytics and monitoring,Rate limiting and throttling,API security and authentication,Third-party API integration and management';
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '4-10 weeks',
      category: 'API Management Services';
},
    {;
      title: 'Digital Workplace & Collaboration Platform',
      description: 'Comprehensive digital workplace solution with unified communication and collaboration tools',
      icon: Users,
      features: [;
        'Unified communication and collaboration platform,Digital workspace optimization,Employee experience management,Remote work enablement and support,Integration with productivity tools,Digital transformation consulting';
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Digital Workplace Services';
},
    {;
      title: 'AI-Powered IT Service Management (ITSM)',
      description: 'Intelligent IT service management with AI-driven automation and predictive analytics',
      icon: Settings,
      features: [;
        'AI-powered incident management and resolution,Predictive analytics for IT operations,Automated change management and approval workflows,Service catalog and request management,IT asset management and optimization,Integration with existing IT tools and systems';
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'ITSM Services';
},
    {;
      title: 'Cybersecurity Operations Center (SOC)',
      description: '24/7 security operations center and threat monitoring services',
      icon: Shield,
      features: [;
        '24/7 security monitoring and incident response,Threat hunting and intelligence analysis,Security incident management and forensics,Vulnerability management and patching,Security awareness training and testing,Compliance monitoring and reporting';
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'SOC Services'},
    {;
      title: 'Quantum-Safe Cryptography Implementation',
      description: 'Post-quantum cryptography solutions to protect against future quantum computing threats',
      icon: Lock,
      features: [;
        'Quantum-resistant encryption algorithms,Post-quantum digital signatures,Quantum key distribution (QKD) systems,Hybrid classical-quantum security protocols,Migration planning and implementation,Compliance with NIST post-quantum standards';
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Security Services'},
    {;
      title: 'Neuromorphic Computing Infrastructure',
      description: 'Brain-inspired computing systems for edge AI and low-power processing',
      icon: Cpu,
      features: [;
        'Neuromorphic chip integration and optimization,Spiking neural network deployment,Edge AI processing and inference,Low-power computing optimization,Real-time learning and adaptation,Integration with IoT and sensor networks';
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '16-32 weeks',
      category: 'Neuromorphic Computing Services'},
    {;
      title: 'Space-Based Computing Infrastructure',
      description: 'Satellite-based computing and edge processing for global connectivity',
      icon: Satellite,
      features: [;
        'Satellite constellation management,Space-based edge computing deployment,Global low-latency connectivity,Orbital data processing and storage,Space-to-ground communication optimization,Integration with terrestrial networks';
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '24-48 weeks',
      category: 'Space Computing Services'},
    {;
      title: 'Fusion Energy IT Infrastructure',
      description: 'Specialized IT infrastructure for fusion energy research and power generation',
      icon: Zap,
      features: [;
        'High-performance computing for plasma simulation,Real-time control systems for fusion reactors,Data acquisition and processing systems,Safety monitoring and emergency response,Integration with power grid systems,Research collaboration platforms';
      ],
      pricing: '$100,000 - $1,000,000/month',
      delivery: '32-64 weeks',
      category: 'Fusion Energy IT Services'},
    {;
      title: 'Synthetic Biology Computing Platform',
      description: 'Specialized computing infrastructure for synthetic biology and bioengineering',
      icon: Cpu,
      features: [;
        'High-performance computing for genetic modeling,Bioinformatics data processing and analysis,Laboratory automation and control systems,Biological simulation and modeling platforms,Integration with laboratory equipment,Research data management and collaboration';
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-40 weeks',
      category: 'Synthetic Biology IT Services'},
    {;
      title: 'Autonomous Vehicle Infrastructure',
      description: 'IT infrastructure for autonomous vehicle testing, deployment, and management',
      icon: Car,
      features: [;
        'Vehicle-to-everything (V2X) communication systems,Edge computing for real-time decision making,Fleet management and coordination platforms,Safety monitoring and incident response,Integration with smart city infrastructure,Regulatory compliance and reporting systems';
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '24-48 weeks',
      category: 'Autonomous Vehicle IT Services'},
    {;
      title: 'Digital Twin Infrastructure Platform',
      description: 'Comprehensive digital twin infrastructure for real-time simulation and monitoring',
      icon: Monitor,
      features: [;
        'Real-time data synchronization and modeling,High-fidelity simulation and visualization,IoT sensor integration and data processing,Predictive analytics and maintenance systems,Integration with existing business systems,Scalable cloud and edge computing infrastructure';
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Twin Infrastructure Services'},
    {;
      title: 'Metaverse Infrastructure & Platform',
      description: 'Complete metaverse infrastructure for virtual worlds and immersive experiences',
      icon: Globe,
      features: [;
        '3D world rendering and streaming infrastructure,Avatar and asset management systems,Real-time physics simulation and networking,Virtual economy and blockchain integration,Cross-platform compatibility and optimization,Content creation and management tools';
      ],
      pricing: '$40,000 - $300,000/month',
      delivery: '24-48 weeks',
      category: 'Metaverse Infrastructure Services'},
    {;
      title: 'Brain-Computer Interface Infrastructure',
      description: 'Specialized IT infrastructure for brain-computer interface systems and neural data processing',
      icon: Brain,
      features: [;
        'Neural signal acquisition and processing systems,Real-time brain activity analysis and interpretation,Medical device integration and control,Data privacy and security for neural data,Integration with healthcare systems,Research collaboration and data sharing platforms';
      ],
      pricing: '$35,000 - $200,000/month',
      delivery: '28-56 weeks',
      category: 'BCI Infrastructure Services'},
    {;
      title: 'Underwater Computing Infrastructure',
      description: 'Specialized computing infrastructure for underwater operations and marine research',
      icon: Network,
      features: [;
        'Underwater communication and networking systems,Marine data processing and analysis platforms,Autonomous underwater vehicle coordination,Oceanographic data collection and storage,Underwater sensor network management,Integration with surface and satellite systems';
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-40 weeks',
      category: 'Marine Computing Services'},
    {;
      title: 'Consciousness Research Computing Platform',
      description: 'Advanced computing infrastructure for consciousness research and AGI development',
      icon: Brain,
      features: [;
        'High-performance computing for consciousness modeling,Neural network simulation and training,Cognitive architecture development platforms,Research collaboration and data sharing systems,Ethical AI monitoring and assessment tools,Integration with neuroscience research equipment';
      ],
      pricing: '$100,000 - $1,000,000/month',
      delivery: '40-80 weeks',
      category: 'Consciousness Research IT Services'},
    {;
      title: 'Climate Computing & Modeling Infrastructure',
      description: 'High-performance computing infrastructure for climate modeling and environmental research',
      icon: Globe,
      features: [;
        'Climate simulation and modeling systems,Environmental data processing and analysis,Real-time weather and climate monitoring,Carbon tracking and sustainability analytics,Integration with satellite and sensor networks,Research collaboration and data sharing platforms';
      ],
      pricing: '$30,000 - $250,000/month',
      delivery: '24-48 weeks',
      category: 'Climate Computing Services'},
    {;
      title: 'Space Mission Computing Infrastructure',
      description: 'Specialized computing infrastructure for space missions and satellite operations',
      icon: Satellite,
      features: [;
        'Mission planning and trajectory optimization systems,Satellite constellation management platforms,Space debris tracking and collision avoidance,Ground station communication and control,Space weather monitoring and prediction,Integration with space agency networks';
      ],
      pricing: '$75,000 - $750,000/month',
      delivery: '32-64 weeks',
      category: 'Space Mission IT Services'},
    {;
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing setup, optimization, and hybrid classical-quantum systems',
      icon: Cpu,
      features: [;
        'Quantum computer setup and configuration,Quantum algorithm development and optimization,Hybrid classical-quantum computing workflows,Quantum error correction and noise mitigation,Quantum machine learning model training,Integration with existing IT infrastructure';
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '24-48 weeks',
      category: 'Quantum Computing Services'},
    {;
      title: '5G & Edge Computing Networks',
      description: '5G network deployment, edge computing infrastructure, and ultra-low latency solutions',
      icon: Network,
      features: [;
        '5G network planning and deployment,Edge computing infrastructure setup,Ultra-low latency application optimization,Network slicing and virtualization,IoT device connectivity and management,Real-time data processing and analytics';
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: '5G & Edge Services'},
    {;
      title: 'Metaverse & Virtual Reality Infrastructure',
      description: 'VR/AR platform development, metaverse infrastructure, and immersive technology solutions',
      icon: Monitor,
      features: [;
        'VR/AR application development and deployment,Metaverse platform infrastructure setup,3D content creation and management,Virtual event hosting and management,Immersive training and simulation systems,Cross-platform VR/AR integration';
      ],
      pricing: '$15,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Metaverse Services'},
    {;
      title: 'Green IT & Sustainable Computing',
      description: 'Energy-efficient computing solutions, carbon footprint reduction, and sustainable IT practices',
      icon: TreePine,
      features: [;
        'Energy-efficient server and data center design,Carbon footprint monitoring and reduction,Renewable energy integration for IT infrastructure,Sustainable software development practices,E-waste management and recycling programs,Green cloud computing optimization';
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '8-16 weeks',
      category: 'Green IT Services'},
    {;
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation with identity verification and micro-segmentation',
      icon: Shield,
      features: [;
        'Zero-trust network architecture design,Identity and access management (IAM) implementation,Micro-segmentation and network isolation,Continuous security monitoring and validation,Privileged access management (PAM),Security automation and orchestration';
      ],
      pricing: '$20,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Zero-Trust Security Services'},
    {;
      title: 'Hyperautomation & RPA Solutions',
      description: 'Intelligent process automation, robotic process automation, and business process optimization',
      icon: Settings,
      features: [;
        'Robotic Process Automation (RPA) implementation,Intelligent document processing and workflow automation,Business process mining and optimization,AI-powered decision automation,Integration with legacy systems and APIs,Process monitoring and performance analytics';
      ],
      pricing: '$8,000 - $80,000/month',
      delivery: '8-20 weeks',
      category: 'Hyperautomation Services'},
    {;
      title: 'Digital Twin & Simulation Platforms',
      description: 'Digital twin development, simulation platforms, and virtual modeling solutions',
      icon: Monitor,
      features: [;
        'Digital twin platform development and deployment,Real-time simulation and modeling systems,IoT sensor integration and data synchronization,Predictive analytics and scenario modeling,Virtual testing and validation environments,Integration with CAD and engineering tools';
      ],
      pricing: '$25,000 - $250,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Twin Services'},
    {;
      title: 'Neuromorphic Computing Systems',
      description: 'Brain-inspired computing infrastructure, spiking neural networks, and edge AI optimization',
      icon: Brain,
      features: [;
        'Neuromorphic chip integration and optimization,Spiking neural network development and deployment,Edge AI processing and optimization,Real-time learning and adaptation systems,Low-power computing infrastructure,Integration with IoT and sensor networks';
      ],
      pricing: '$30,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Neuromorphic Computing Services'},
    {;
      title: 'Autonomous Systems Infrastructure',
      description: 'Infrastructure for autonomous vehicles, drones, and robotic systems with real-time processing',
      icon: Car,
      features: [;
        'Autonomous vehicle computing infrastructure,Drone fleet management and control systems,Robotic system integration and coordination,Real-time sensor data processing and fusion,Edge computing for autonomous decision making,Safety and failover system implementation';
      ],
      pricing: '$40,000 - $400,000/month',
      delivery: '24-48 weeks',
      category: 'Autonomous Systems Services'},
    {;
      title: 'DevOps Automation Platform',
      description: 'Comprehensive DevOps automation with CI/CD pipelines, infrastructure management, and monitoring',
      icon: Settings,
      features: [;
        'Automated CI/CD pipeline setup and optimization,Infrastructure as Code (IaC) with Terraform and Ansible,Container orchestration with Kubernetes and Docker,Automated testing and quality assurance gates,Monitoring and alerting with Prometheus and Grafana,Security scanning and compliance automation,Multi-environment deployment management,Performance optimization and cost management';
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'DevOps Services'},
    {;
      title: 'API Gateway Management',
      description: 'Enterprise API gateway solution with security, monitoring, and traffic management',
      icon: Network,
      features: [;
        'API gateway setup and configuration,Rate limiting and traffic management,Authentication and authorization (OAuth, JWT),API versioning and lifecycle management,Real-time monitoring and analytics,Security policies and threat protection,Developer portal and documentation,Microservices orchestration and routing';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'API Services'},
    {;
      title: 'Database Optimization & Management',
      description: 'Advanced database performance tuning, optimization, and management services',
      icon: Database,
      features: [;
        'Database performance analysis and optimization,Query optimization and indexing strategies,Database migration and modernization,Backup and disaster recovery solutions,Database security and compliance,Real-time monitoring and alerting,Capacity planning and scaling strategies,Multi-database platform support (SQL, NoSQL)';
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Database Services'},
    {;
      title: 'Performance Monitoring & Analytics',
      description: 'Comprehensive application and infrastructure performance monitoring with AI insights',
      icon: BarChart3,
      features: [;
        'Application Performance Monitoring (APM),Infrastructure monitoring and alerting,Real-time performance analytics and dashboards,User experience monitoring and optimization,AI-powered anomaly detection and root cause analysis,Custom metrics and KPI tracking,Performance testing and load testing,Capacity planning and resource optimization';
      ],
      pricing: '$2,500 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Monitoring Services'},
    {;
      title: 'Security Auditing & Compliance',
      description: 'Comprehensive security auditing, vulnerability assessment, and compliance management',
      icon: Shield,
      features: [;
        'Security vulnerability assessments and penetration testing,Compliance auditing (SOC 2, GDPR, HIPAA, PCI DSS),Security policy development and implementation,Risk assessment and mitigation strategies,Security awareness training and education,Incident response planning and testing,Security monitoring and threat detection,Regular security reviews and updates';
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '4-12 weeks',
      category: 'Security Services'},
    {;
      title: 'Advanced Data Analytics & Business Intelligence',
      description: 'Comprehensive data analytics platform with real-time insights and predictive modeling',
      icon: BarChart3,
      features: [;
        'Real-time data processing and analytics,Advanced business intelligence dashboards,Predictive modeling and forecasting,Data visualization and reporting tools,Integration with multiple data sources,Custom analytics solutions and consulting';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'Data Analytics'},
    {;
      title: 'Enterprise IoT Solutions & Integration',
      description: 'Comprehensive IoT platform with device management, data processing, and analytics',
      icon: Cpu,
      features: [;
        'IoT device management and monitoring,Real-time data collection and processing,Edge computing and local processing,Integration with existing business systems,Custom IoT application development,Security and compliance for IoT devices';
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'IoT Services'},
    {;
      title: 'Advanced DevOps & CI/CD Automation',
      description: 'Comprehensive DevOps platform with automated deployment, monitoring, and optimization',
      icon: Settings,
      features: [;
        'Automated CI/CD pipeline setup and management,Infrastructure as Code (IaC) implementation,Container orchestration and management,Automated testing and quality assurance,Performance monitoring and optimization,Disaster recovery and backup automation';
      ],
      pricing: '$2,500 - $12,000/month',
      delivery: '3-5 weeks',
      category: 'DevOps Services'},
    {;
      title: 'Enterprise API Management & Integration',
      description: 'Comprehensive API strategy with management, security, and integration services',
      icon: Code,
      features: [;
        'API gateway setup and management,API security and authentication,Rate limiting and traffic management,API documentation and developer portals,Third-party API integration services,API performance monitoring and analytics';
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'API Services'},
    {;
      title: 'Advanced Database Management & Optimization',
      description: 'Comprehensive database services with optimization, migration, and management',
      icon: Database,
      features: [;
        'Database performance tuning and optimization,Database migration and modernization,High availability and disaster recovery setup,Database security and compliance,Backup and recovery solutions,Database monitoring and maintenance';
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '2-4 weeks',
      category: 'Database Services'},
    {;
      title: 'Enterprise Mobile App Development',
      description: 'Native and cross-platform mobile application development with backend integration',
      icon: Smartphone,
      features: [;
        'Native iOS and Android app development,Cross-platform development with React Native/Flutter,Mobile backend development and API integration,App store optimization and deployment,Mobile app security and compliance,Performance optimization and monitoring';
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Mobile Development'},
    {;
      title: 'Advanced Cloud Security & Compliance',
      description: 'Comprehensive cloud security with compliance management and threat protection',
      icon: Shield,
      features: [;
        'Cloud security architecture design,Compliance automation (SOC 2, GDPR, HIPAA),Cloud access security broker (CASB) implementation,Security monitoring and incident response,Data encryption and key management,Regular security audits and assessments';
      ],
      pricing: '$4,000 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Cloud Security'},
    {;
      title: 'Enterprise Integration & Data Migration',
      description: 'Comprehensive system integration with data migration and transformation services',
      icon: Network,
      features: [;
        'Legacy system integration and modernization,Data migration and transformation services,Enterprise service bus (ESB) implementation,Real-time data synchronization,Integration testing and validation,Ongoing integration support and maintenance';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-10 weeks',
      category: 'Integration Services'},
    {;
      title: 'Advanced Performance Monitoring & Optimization',
      description: 'Comprehensive application and infrastructure performance monitoring with optimization',
      icon: BarChart3,
      features: [;
        'Application performance monitoring (APM),Infrastructure monitoring and alerting,Performance optimization and tuning,Capacity planning and scaling recommendations,Real-time dashboards and reporting,Proactive issue detection and resolution';
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '2-4 weeks',
      category: 'Performance Services'},
    {;
      title: 'Enterprise Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with business continuity planning',
      icon: Shield,
      features: [;
        'Automated backup solutions and scheduling,Disaster recovery planning and testing,Business continuity planning and implementation,Data replication and synchronization,Recovery time objective (RTO) optimization,Regular disaster recovery testing and validation';
      ],
      pricing: '$2,500 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Backup & Recovery'},
    {;
      title: 'Advanced Network Security & Monitoring',
      description: 'Comprehensive network security with advanced threat detection and response',
      icon: Network,
      features: [;
        'Network security architecture design,Advanced threat detection and prevention,Network monitoring and traffic analysis,Intrusion detection and prevention systems,Network segmentation and micro-segmentation,Security incident response and forensics';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '3-6 weeks',
      category: 'Network Security'},
    {;
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with AI-driven automation and predictive analytics',
      icon: Brain,
      features: [;
        'AI-powered incident detection and resolution,Automated root cause analysis and remediation,Predictive capacity planning and scaling,Intelligent alert correlation and noise reduction,Automated performance optimization,Self-healing infrastructure capabilities';
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'AIOps Services'},
    {;
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity and access management',
      icon: Shield,
      features: [;
        'Zero trust network architecture design,Identity and access management (IAM) implementation,Multi-factor authentication and SSO,Micro-segmentation and network isolation,Continuous security monitoring and validation,Privileged access management (PAM)';
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Security Services'},
    {;
      title: 'Quantum-Safe Cryptography Implementation',
      description: 'Future-proof cryptographic solutions resistant to quantum computing threats',
      icon: Lock,
      features: [;
        'Post-quantum cryptography algorithm implementation,Quantum key distribution (QKD) systems,Hybrid classical-quantum security protocols,Cryptographic migration planning and execution,Quantum-safe certificate management,Compliance with quantum security standards';
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Security'},
    {;
      title: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and IoT',
      icon: Cpu,
      features: [;
        'Edge computing platform design and deployment,Distributed data processing and analytics,Edge AI and machine learning deployment,5G network integration and optimization,Edge security and device management,Multi-cloud edge orchestration';
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Edge Computing'},
    {;
      title: 'Green IT & Sustainability Solutions',
      description: 'Environmentally conscious IT infrastructure and carbon footprint reduction',
      icon: TreePine,
      features: [;
        'Energy-efficient data center design and optimization,Renewable energy integration and management,Carbon footprint tracking and reduction strategies,E-waste management and recycling programs,Green cloud computing and virtualization,Sustainability reporting and compliance';
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '6-12 weeks',
      category: 'Green IT'},
    {;
      title: 'Hyperconverged Infrastructure (HCI)',
      description: 'Simplified infrastructure management with integrated compute, storage, and networking',
      icon: Server,
      features: [;
        'HCI platform design and implementation,Software-defined infrastructure management,Automated resource provisioning and scaling,Integrated backup and disaster recovery,Performance monitoring and optimization,Multi-site HCI deployment and management';
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Infrastructure Services'},
    {;
      title: 'Multi-Cloud Management Platform',
      description: 'Unified management and orchestration across multiple cloud providers',
      icon: Cloud,
      features: [;
        'Multi-cloud strategy and architecture design,Cloud cost optimization and FinOps,Unified monitoring and management dashboard,Cross-cloud data migration and synchronization,Disaster recovery and business continuity,Compliance and governance across clouds';
      ],
      pricing: '$7,000 - $35,000/month',
      delivery: '8-16 weeks',
      category: 'Cloud Services'},
    {;
      title: 'IT Service Management (ITSM) Platform',
      description: 'Comprehensive IT service delivery and support management system',
      icon: Settings,
      features: [;
        'ITIL-compliant service management implementation,Incident and problem management automation,Change management and approval workflows,Service catalog and self-service portal,Asset and configuration management,Performance analytics and reporting';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'Service Management'},
    {;
      title: 'Advanced Threat Intelligence Platform',
      description: 'Proactive threat hunting and intelligence-driven security operations',
      icon: Shield,
      features: [;
        'Threat intelligence collection and analysis,Advanced persistent threat (APT) detection,Hunting and investigation capabilities,Threat actor profiling and attribution,Incident response automation and orchestration,Threat intelligence sharing and collaboration';
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '10-20 weeks',
      category: 'Threat Intelligence'},
    {;
      title: 'Green IT Solutions',
      description: 'Environmentally conscious IT solutions with carbon footprint reduction',
      icon: TreePine,
      features: [;
        'Energy-efficient server and infrastructure design,Carbon footprint monitoring and reporting,Renewable energy integration,Green data center optimization,Sustainable IT procurement and lifecycle management,Environmental compliance and reporting';
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '2-4 weeks',
      category: 'Green IT'},
    {;
      title: 'Quantum Computing Readiness',
      description: 'Preparation and integration services for quantum computing technologies',
      icon: Cpu,
      features: [;
        'Quantum algorithm development and optimization,Quantum-classical hybrid system integration,Quantum security and cryptography implementation,Quantum simulation and testing environments,Quantum workforce training and development,Quantum computing strategy and roadmap planning';
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Quantum Computing'},
    {;
      title: '5G Network Integration',
      description: '5G network deployment and integration services for enterprise applications',
      icon: Wifi,
      features: [;
        '5G network planning and deployment,5G enterprise application development,Network slicing and quality of service management,5G security and privacy implementation,Edge computing integration with 5G,5G performance monitoring and optimization';
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: '5G Services'},
    {;
      title: 'Blockchain Infrastructure Services',
      description: 'Blockchain network deployment and management for enterprise applications',
      icon: Shield,
      features: [;
        'Private and consortium blockchain deployment,Smart contract development and auditing,Blockchain security and consensus mechanisms,Interoperability and cross-chain solutions,Blockchain monitoring and analytics,Regulatory compliance and governance';
      ],
      pricing: '$3,500 - $18,000/month',
      delivery: '4-10 weeks',
      category: 'Blockchain Services'},
    {;
      title: 'IoT Platform Management',
      description: 'Comprehensive IoT infrastructure and device management services',
      icon: Network,
      features: [;
        'IoT device provisioning and management,Edge gateway deployment and configuration,IoT data collection and processing,Device security and firmware management,IoT analytics and insights,Integration with enterprise systems';
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '3-6 weeks',
      category: 'IoT Services'},
    {;
      title: 'Digital Twin Implementation',
      description: 'Digital twin creation and management for physical assets and processes',
      icon: Monitor,
      features: [;
        '3D modeling and simulation creation,Real-time data integration and synchronization,Predictive maintenance and optimization,Digital twin analytics and insights,Integration with IoT and sensor networks,Collaborative digital twin environments';
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '8-16 weeks',
      category: 'Digital Twin Services'},
    {;
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      icon: Lock,
      features: [;
        'Identity and access management (IAM) implementation,Micro-segmentation and network isolation,Continuous authentication and authorization,Device and application trust verification,Security policy automation and enforcement,Zero trust monitoring and analytics';
      ],
      pricing: '$4,500 - $22,000/month',
      delivery: '6-12 weeks',
      category: 'Zero Trust Security'},
    {;
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with machine learning-driven automation and predictive analytics',
      icon: Brain,
      features: [;
        'AI-powered incident detection and root cause analysis,Automated remediation and self-healing systems,Predictive capacity planning and resource optimization,Anomaly detection and performance monitoring,Intelligent alert correlation and noise reduction,Automated change management and deployment,Integration with existing monitoring and ITSM tools,Continuous learning and improvement algorithms';
      ],
      pricing: '$8,000 - $35,000/month',
      delivery: '8-16 weeks',
      category: 'AIOps Services'},
    {;
      title: 'Edge Computing Infrastructure',
      description: 'Comprehensive edge computing solutions with distributed processing and real-time analytics',
      icon: Cpu,
      features: [;
        'Edge computing platform design and deployment,Distributed data processing and analytics,Edge AI and machine learning model deployment,Low-latency application optimization,Edge security and device management,Multi-cloud edge orchestration,Edge-to-cloud data synchronization,Real-time streaming and event processing';
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'Edge Computing Services'},
    {;
      title: 'Serverless Architecture & Functions',
      description: 'Serverless computing solutions with function-as-a-service and event-driven architecture',
      icon: Cloud,
      features: [;
        'Serverless architecture design and implementation,Function-as-a-Service (FaaS) development,Event-driven architecture and microservices,API Gateway and service mesh configuration,Serverless database and storage solutions,Cost optimization and performance tuning,Monitoring and observability for serverless,Integration with cloud-native services';
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Serverless Services'},
    {;
      title: 'Container Security & Compliance',
      description: 'Comprehensive container security with vulnerability scanning and compliance automation',
      icon: Shield,
      features: [;
        'Container image scanning and vulnerability assessment,Runtime security monitoring and protection,Compliance automation for containerized workloads,Secrets management and encryption,Network security and micro-segmentation,Container registry security and governance,DevSecOps integration and CI/CD security,Compliance reporting and audit trails';
      ],
      pricing: '$3,500 - $18,000/month',
      delivery: '4-8 weeks',
      category: 'Container Security Services'},
    {;
      title: 'Data Mesh & Distributed Data Architecture',
      description: 'Modern data architecture with distributed data mesh and domain-driven design',
      icon: Network,
      features: [;
        'Data mesh architecture design and implementation,Domain-driven data product development,Distributed data governance and cataloging,Self-serve data platform development,Data product lifecycle management,Cross-domain data sharing and collaboration,Real-time data streaming and processing,Data quality and lineage tracking';
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '12-24 weeks',
      category: 'Data Architecture Services'},
    {;
      title: 'Cloud-Native Application Development',
      description: 'Modern cloud-native application development with microservices and containerization',
      icon: Code,
      features: [;
        'Cloud-native application architecture design,Microservices development and orchestration,Containerization with Docker and Kubernetes,API-first development and documentation,Cloud-native database and storage solutions,Observability and monitoring implementation,CI/CD pipeline development and optimization,Cloud-native security and compliance';
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-20 weeks',
      category: 'Cloud-Native Development Services'},
    {;
      title: 'IT Service Management (ITSM) Automation',
      description: 'Intelligent IT service management with automated workflows and AI-powered support',
      icon: Settings,
      features: [;
        'ITSM platform implementation and customization,Automated incident and problem management,AI-powered service desk and chatbot integration,Change management automation and approval workflows,Asset management and lifecycle tracking,Service catalog and self-service portal development,Performance analytics and reporting,Integration with monitoring and management tools';
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-14 weeks',
      category: 'ITSM Services'},
    {;
      title: 'Hybrid Cloud Management Platform',
      description: 'Unified hybrid cloud management with multi-cloud orchestration and governance',
      icon: Cloud,
      features: [;
        'Multi-cloud and hybrid cloud architecture design,Unified cloud management and orchestration,Cloud cost optimization and FinOps implementation,Cross-cloud security and compliance management,Data migration and synchronization services,Disaster recovery across cloud environments,Cloud governance and policy enforcement,Performance monitoring and optimization';
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '10-24 weeks',
      category: 'Hybrid Cloud Services'},
    {;
      title: 'IT Infrastructure Automation & Orchestration',
      description: 'Comprehensive infrastructure automation with intelligent orchestration and self-healing',
      icon: Settings,
      features: [;
        'Infrastructure as Code (IaC) implementation and management,Automated provisioning and configuration management,Intelligent orchestration and workflow automation,Self-healing infrastructure and automated recovery,Infrastructure monitoring and alerting automation,Compliance automation and policy enforcement,Cost optimization through automated scaling,Integration with existing tools and processes';
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'Infrastructure Automation Services'},
    {;
      title: 'Cybersecurity Operations Center (SOC) as a Service',
      description: '24/7 security operations center with advanced threat detection and response capabilities',
      icon: Shield,
      features: [;
        '24/7/365 security monitoring and threat detection,Advanced threat hunting and incident response,Security information and event management (SIEM),Endpoint detection and response (EDR),Network security monitoring and analysis,Vulnerability management and assessment,Compliance monitoring and reporting,Threat intelligence and security research';
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '4-8 weeks',
      category: 'SOC Services'},
    {;
      title: 'Digital Workplace & Collaboration Solutions',
      description: 'Modern digital workplace with unified communication and collaboration platforms',
      icon: Users,
      features: [;
        'Unified communication and collaboration platform setup,Digital workspace optimization and user experience,Remote work infrastructure and security,Video conferencing and virtual meeting solutions,Document collaboration and knowledge management,Employee productivity and engagement analytics,Integration with business applications,Change management and user training';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-10 weeks',
      category: 'Digital Workplace Services'},
    {;
      title: 'IT Asset Management & Lifecycle Services',
      description: 'Comprehensive IT asset management with automated lifecycle tracking and optimization',
      icon: Database,
      features: [;
        'IT asset discovery and inventory management,Automated asset lifecycle tracking and management,Software license management and compliance,Hardware procurement and disposal services,Asset performance monitoring and optimization,Cost tracking and budget management,Integration with ITSM and procurement systems,Compliance reporting and audit support';
      ],
      pricing: '$2,500 - $12,000/month',
      delivery: '3-8 weeks',
      category: 'IT Asset Management Services'},
    {;
      title: 'Cloud Migration & Modernization Services',
      description: 'Comprehensive cloud migration with application modernization and optimization',
      icon: Cloud,
      features: [;
        'Cloud migration strategy and planning,Application assessment and modernization,Data migration and synchronization,Legacy system integration and API development,Performance optimization and cost reduction,Cloud-native application refactoring,Testing and validation services,Training and change management support';
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '8-24 weeks',
      category: 'Cloud Migration Services'},
    {;
      title: 'IT Compliance & Governance Services',
      description: 'Comprehensive IT compliance management with automated governance and audit support',
      icon: Shield,
      features: [;
        'Compliance framework implementation (SOX, GDPR, HIPAA),IT governance structure and policy development,Automated compliance monitoring and reporting,Risk assessment and management,Audit preparation and support,Regulatory change management,Training and awareness programs,Integration with existing systems and processes';
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'IT Compliance Services'},
    {;
      title: 'AI-Powered IT Service Desk',
      description: 'Intelligent IT service desk with AI chatbots, automated ticket routing, and predictive issue resolution',
      icon: Brain,
      features: [;
        'AI-powered chatbot for first-level support,Automated ticket classification and routing,Predictive issue detection and prevention,Knowledge base automation and self-service,Integration with ITSM and monitoring tools,Performance analytics and continuous improvement';
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'AI-Powered Support Services'},
    {;
      title: 'Quantum-Safe Security Implementation',
      description: 'Future-proof security solutions resistant to quantum computing threats with post-quantum cryptography',
      icon: Lock,
      features: [;
        'Post-quantum cryptography algorithm implementation,Quantum key distribution (QKD) systems,Hybrid classical-quantum security protocols,Cryptographic migration planning and execution,Quantum-safe certificate management,Compliance with quantum security standards';
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Security Services'},
    {;
      title: 'Neuromorphic Computing Infrastructure',
      description: 'Brain-inspired computing systems for ultra-low power AI processing and edge computing optimization',
      icon: Cpu,
      features: [;
        'Neuromorphic chip integration and optimization,Spiking neural network deployment,Edge AI processing and inference,Low-power computing optimization,Real-time learning and adaptation,Integration with IoT and sensor networks';
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '16-32 weeks',
      category: 'Neuromorphic Computing Services'},
    {;
      title: 'Space-Based Computing Infrastructure',
      description: 'Satellite-based computing and edge processing for global connectivity and low-latency applications',
      icon: Satellite,
      features: [;
        'Satellite constellation management,Space-based edge computing deployment,Global low-latency connectivity,Orbital data processing and storage,Space-to-ground communication optimization,Integration with terrestrial networks';
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '24-48 weeks',
      category: 'Space Computing Services'},
    {;
      title: 'Fusion Energy IT Infrastructure',
      description: 'Specialized IT infrastructure for fusion energy research, power generation, and plasma control systems',
      icon: Zap,
      features: [;
        'High-performance computing for plasma simulation,Real-time control systems for fusion reactors,Data acquisition and processing systems,Safety monitoring and emergency response,Integration with power grid systems,Research collaboration platforms';
      ],
      pricing: '$100,000 - $1,000,000/month',
      delivery: '32-64 weeks',
      category: 'Fusion Energy IT Services'},
    {;
      title: 'Synthetic Biology Computing Platform',
      description: 'Specialized computing infrastructure for synthetic biology, bioengineering, and genetic design',
      icon: Cpu,
      features: [;
        'High-performance computing for genetic modeling,Bioinformatics data processing and analysis,Laboratory automation and control systems,Biological simulation and modeling platforms,Integration with laboratory equipment,Research data management and collaboration';
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-40 weeks',
      category: 'Synthetic Biology IT Services'},
    {;
      title: 'Autonomous Vehicle Infrastructure',
      description: 'IT infrastructure for autonomous vehicle testing, deployment, fleet management, and safety systems',
      icon: Car,
      features: [;
        'Vehicle-to-everything (V2X) communication systems,Edge computing for real-time decision making,Fleet management and coordination platforms,Safety monitoring and incident response,Integration with smart city infrastructure,Regulatory compliance and reporting systems';
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '24-48 weeks',
      category: 'Autonomous Vehicle IT Services'},
    {;
      title: 'Digital Twin Infrastructure Platform',
      description: 'Comprehensive digital twin infrastructure for real-time simulation, monitoring, and predictive analytics',
      icon: Monitor,
      features: [;
        'Real-time data synchronization and modeling,High-fidelity simulation and visualization,IoT sensor integration and data processing,Predictive analytics and maintenance systems,Integration with existing business systems,Scalable cloud and edge computing infrastructure';
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Twin Infrastructure Services'},
    {;
      title: 'Metaverse Infrastructure & Platform',
      description: 'Complete metaverse infrastructure for virtual worlds, immersive experiences, and virtual economies',
      icon: Globe,
      features: [;
        '3D world rendering and streaming infrastructure,Avatar and asset management systems,Real-time physics simulation and networking,Virtual economy and blockchain integration,Cross-platform compatibility and optimization,Content creation and management tools';
      ],
      pricing: '$40,000 - $300,000/month',
      delivery: '24-48 weeks',
      category: 'Metaverse Infrastructure Services'},
    {;
      title: 'Brain-Computer Interface Infrastructure',
      description: 'Specialized IT infrastructure for brain-computer interface systems, neural data processing, and medical applications',
      icon: Brain,
      features: [;
        'Neural signal acquisition and processing systems,Real-time brain activity analysis and interpretation,Medical device integration and control,Data privacy and security for neural data,Integration with healthcare systems,Research collaboration and data sharing platforms';
      ],
      pricing: '$35,000 - $200,000/month',
      delivery: '28-56 weeks',
      category: 'BCI Infrastructure Services'},
    {;
      title: 'Underwater Computing Infrastructure',
      description: 'Specialized computing infrastructure for underwater operations, marine research, and ocean exploration',
      icon: Network,
      features: [;
        'Underwater communication and networking systems,Marine data processing and analysis platforms,Autonomous underwater vehicle coordination,Oceanographic data collection and storage,Underwater sensor network management,Integration with surface and satellite systems';
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '20-40 weeks',
      category: 'Marine Computing Services'},
    {;
      title: 'Consciousness Research Computing Platform',
      description: 'Advanced computing infrastructure for consciousness research, AGI development, and cognitive architecture design',
      icon: Brain,
      features: [;
        'High-performance computing for consciousness modeling,Neural network simulation and training,Cognitive architecture development platforms,Research collaboration and data sharing systems,Ethical AI monitoring and assessment tools,Integration with neuroscience research equipment';
      ],
      pricing: '$100,000 - $1,000,000/month',
      delivery: '40-80 weeks',
      category: 'Consciousness Research IT Services'},
    {;
      title: 'Climate Computing & Modeling Infrastructure',
      description: 'High-performance computing infrastructure for climate modeling, environmental research, and sustainability planning',
      icon: Globe,
      features: [;
        'Climate simulation and modeling systems,Environmental data processing and analysis,Real-time weather and climate monitoring,Carbon tracking and sustainability analytics,Integration with satellite and sensor networks,Research collaboration and data sharing platforms';
      ],
      pricing: '$30,000 - $250,000/month',
      delivery: '24-48 weeks',
      category: 'Climate Computing Services'},
    {;
      title: 'Space Mission Computing Infrastructure',
      description: 'Specialized computing infrastructure for space missions, satellite operations, and space exploration',
      icon: Satellite,
      features: [;
        'Mission planning and trajectory optimization systems,Satellite constellation management platforms,Space debris tracking and collision avoidance,Ground station communication and control,Space weather monitoring and prediction,Integration with space agency networks';
      ],
      pricing: '$75,000 - $750,000/month',
      delivery: '32-64 weeks',
      category: 'Space Mission IT Services'},
    {;
      title: 'Quantum Computing Infrastructure',
      description: 'Quantum computing setup, optimization, and hybrid classical-quantum systems for enterprise applications',
      icon: Cpu,
      features: [;
        'Quantum computer setup and configuration,Quantum algorithm development and optimization,Hybrid classical-quantum computing workflows,Quantum error correction and noise mitigation,Quantum machine learning model training,Integration with existing IT infrastructure';
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '24-48 weeks',
      category: 'Quantum Computing Services'},
    {;
      title: '5G & Edge Computing Networks',
      description: '5G network deployment, edge computing infrastructure, and ultra-low latency solutions for enterprise',
      icon: Network,
      features: [;
        '5G network planning and deployment,Edge computing infrastructure setup,Ultra-low latency application optimization,Network slicing and virtualization,IoT device connectivity and management,Real-time data processing and analytics';
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: '5G & Edge Services'},
    {;
      title: 'Metaverse & Virtual Reality Infrastructure',
      description: 'VR/AR platform development, metaverse infrastructure, and immersive technology solutions',
      icon: Monitor,
      features: [;
        'VR/AR application development and deployment,Metaverse platform infrastructure setup,3D content creation and management,Virtual event hosting and management,Immersive training and simulation systems,Cross-platform VR/AR integration';
      ],
      pricing: '$15,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Metaverse Services'},
    {;
      title: 'Green IT & Sustainable Computing',
      description: 'Energy-efficient computing solutions, carbon footprint reduction, and sustainable IT practices',
      icon: TreePine,
      features: [;
        'Energy-efficient server and data center design,Carbon footprint monitoring and reduction,Renewable energy integration for IT infrastructure,Sustainable software development practices,E-waste management and recycling programs,Green cloud computing optimization';
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '8-16 weeks',
      category: 'Green IT Services'},
    {;
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation with identity verification and micro-segmentation',
      icon: Shield,
      features: [;
        'Zero-trust network architecture design,Identity and access management (IAM) implementation,Micro-segmentation and network isolation,Continuous security monitoring and validation,Privileged access management (PAM),Security automation and orchestration';
      ],
      pricing: '$20,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Zero-Trust Security Services'},
    {;
      title: 'Hyperautomation & RPA Solutions',
      description: 'Intelligent process automation, robotic process automation, and business process optimization',
      icon: Settings,
      features: [;
        'Robotic Process Automation (RPA) implementation,Intelligent document processing and workflow automation,Business process mining and optimization,AI-powered decision automation,Integration with legacy systems and APIs,Process monitoring and performance analytics';
      ],
      pricing: '$8,000 - $80,000/month',
      delivery: '8-20 weeks',
      category: 'Hyperautomation Services'},
    {;
      title: 'Digital Twin & Simulation Platforms',
      description: 'Digital twin development, simulation platforms, and virtual modeling solutions',
      icon: Monitor,
      features: [;
        'Digital twin platform development and deployment,Real-time simulation and modeling systems,IoT sensor integration and data synchronization,Predictive analytics and scenario modeling,Virtual testing and validation environments,Integration with CAD and engineering tools';
      ],
      pricing: '$25,000 - $250,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Twin Services'},
    {;
      title: 'Neuromorphic Computing Systems',
      description: 'Brain-inspired computing infrastructure, spiking neural networks, and edge AI optimization',
      icon: Brain,
      features: [;
        'Neuromorphic chip integration and optimization,Spiking neural network development and deployment,Edge AI processing and optimization,Real-time learning and adaptation systems,Low-power computing infrastructure,Integration with IoT and sensor networks';
      ],
      pricing: '$30,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Neuromorphic Computing Services'},
    {;
      title: 'Autonomous Systems Infrastructure',
      description: 'Infrastructure for autonomous vehicles, drones, and robotic systems with real-time processing',
      icon: Car,
      features: [;
        'Autonomous vehicle computing infrastructure,Drone fleet management and control systems,Robotic system integration and coordination,Real-time sensor data processing and fusion,Edge computing for autonomous decision making,Safety and failover system implementation';
      ],
      pricing: '$40,000 - $400,000/month',
      delivery: '24-48 weeks',
      category: 'Autonomous Systems Services'},
    {;
      title: 'AI-Powered Infrastructure Orchestration',
      description: 'Intelligent infrastructure management with AI-driven automation, predictive scaling, and self-healing capabilities',
      icon: Brain,
      features: [;
        'AI-powered infrastructure monitoring and optimization,Predictive scaling and resource allocation,Automated incident detection and resolution,Self-healing infrastructure with automated recovery,Intelligent cost optimization and resource management,Performance prediction and capacity planning,Integration with multi-cloud environments,Continuous learning and improvement algorithms';
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'AI Infrastructure Services'},
    {;
      title: 'Quantum-Safe Network Security',
      description: 'Future-proof network security with post-quantum cryptography and quantum-resistant protocols',
      icon: Lock,
      features: [;
        'Post-quantum cryptographic protocol implementation,Quantum-resistant network security architecture,Hybrid classical-quantum security systems,Quantum key distribution (QKD) integration,Network security migration planning,Quantum-safe certificate management,Compliance with quantum security standards,Integration with existing security infrastructure';
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Quantum Security Services'},
    {;
      title: 'Edge AI Computing Platform',
      description: 'Distributed edge AI infrastructure with real-time inference, model optimization, and autonomous decision making',
      icon: Cpu,
      features: [;
        'Edge AI model deployment and optimization,Real-time inference and decision making,Distributed AI training and model updates,Edge-to-cloud AI synchronization,Low-latency AI processing and response,Edge AI security and privacy protection,Autonomous edge AI operation and management,Integration with IoT and sensor networks';
      ],
      pricing: '$20,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Edge AI Services'},
    {;
      title: 'Blockchain Infrastructure & Web3 Services',
      description: 'Comprehensive blockchain infrastructure with DeFi integration, NFT platforms, and Web3 applications',
      icon: Network,
      features: [;
        'Blockchain network deployment and management,Smart contract development and auditing,DeFi protocol integration and optimization,NFT marketplace and platform development,Cross-chain interoperability solutions,Web3 application development,Blockchain security and compliance,Integration with traditional systems';
      ],
      pricing: '$30,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Blockchain Infrastructure Services'},
    {;
      title: 'Neuromorphic Edge Computing',
      description: 'Brain-inspired edge computing with spiking neural networks and ultra-low power processing',
      icon: Brain,
      features: [;
        'Neuromorphic chip integration and optimization,Spiking neural network deployment,Ultra-low power edge AI processing,Real-time pattern recognition and classification,Adaptive learning and plasticity algorithms,Edge-to-cloud neuromorphic synchronization,Integration with IoT and sensor networks,Performance optimization and benchmarking';
      ],
      pricing: '$40,000 - $400,000/month',
      delivery: '24-48 weeks',
      category: 'Neuromorphic Edge Services'},
    {;
      title: 'AI-Powered Cybersecurity Operations',
      description: 'Advanced AI-driven cybersecurity with autonomous threat detection, response, and prevention',
      icon: Shield,
      features: [;
        'AI-powered threat detection and analysis,Autonomous incident response and remediation,Behavioral analysis and anomaly detection,Zero-day threat identification and protection,AI-driven security orchestration,Threat intelligence and attribution,Automated security policy enforcement,Continuous security learning and adaptation';
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'AI Cybersecurity Services'},
    {;
      title: 'Quantum-Enhanced Data Analytics',
      description: 'Next-generation data analytics leveraging quantum computing for complex optimization and pattern recognition',
      icon: Cpu,
      features: [;
        'Quantum machine learning algorithms and optimization,Hybrid classical-quantum data processing,Complex pattern recognition and analysis,Quantum advantage demonstration and benchmarking,Integration with quantum hardware and simulators,Quantum algorithm development and optimization,Performance analytics and scalability assessment,Research collaboration and knowledge sharing';
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '32-64 weeks',
      category: 'Quantum Analytics Services'},
    {;
      title: 'Autonomous Cloud Management',
      description: 'Self-managing cloud infrastructure with AI-driven optimization, cost management, and performance tuning',
      icon: Cloud,
      features: [;
        'AI-powered cloud resource optimization,Automated cost management and FinOps,Self-healing cloud infrastructure,Intelligent workload placement and scaling,Automated security and compliance management,Predictive capacity planning and scaling,Multi-cloud orchestration and management,Continuous optimization and learning';
      ],
      pricing: '$20,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Autonomous Cloud Services'},
    {;
      title: 'AI-Powered Network Intelligence',
      description: 'Intelligent network management with AI-driven optimization, security, and performance enhancement',
      icon: Network,
      features: [;
        'AI-powered network optimization and routing,Intelligent traffic analysis and management,Automated network security and threat detection,Predictive network maintenance and optimization,Self-healing network infrastructure,Network performance prediction and optimization,Integration with SD-WAN and 5G networks,Continuous learning and adaptation';
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'AI Network Services'},
    {;
      title: 'Federated Learning Infrastructure',
      description: 'Privacy-preserving distributed machine learning with federated learning and secure multi-party computation',
      icon: Network,
      features: [;
        'Federated learning platform implementation,Privacy-preserving model training and aggregation,Secure multi-party computation,Distributed model deployment and management,Edge computing integration and optimization,Data privacy and compliance management,Real-time model updates and synchronization,Enterprise security and governance';
      ],
      pricing: '$30,000 - $250,000/month',
      delivery: '20-40 weeks',
      category: 'Federated Learning Services'}
  ];

  const technologies = [;
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
    { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
    { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
  ];

  const benefits = [;
  {;
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance',
      icon: Clock,
      stat: '99.9%'},
    {;
      title: 'Cost Savings',
      description: 'Optimized infrastructure and processes',
      icon: Zap,
      stat: '40%'},
    {;
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      stat: '100%'},
    {;
      title: 'Scalability',
      description: 'Flexible and scalable solutions',
      icon: TrendingUp,
      stat: 'Unlimited'}
  ];
>>>>>>> origin/automation-fixes

  // Advanced IT Services
  {
    id: 7,
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing solutions and infrastructure setup for advanced computational needs and research applications.',
    icon: Cpu,
    category: 'Quantum Computing',
    price: 'Starting at $5,000/month',
    features: [
      'Quantum hardware integration',
      'Quantum algorithm development',
      'Quantum software optimization',
      'Quantum security implementation',
      'Hybrid classical-quantum systems',
      'Quantum cloud access',
      'Research collaboration',
      'Training and education'
    ],
    benefits: [
      'Exponential computational power',
      'Advanced problem solving',
      'Future-proof technology',
      'Competitive advantage'
    ],
    marketPrice: '$8,000-15,000/month',
    setupTime: '4-8 weeks',
    targetUsers: 'Research institutions, Financial services, Pharmaceutical companies'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Comprehensive data protection with automated backups, disaster recovery planning, and business continuity.',
    icon: Database,
    features: ['Automated Backups', 'Disaster Recovery', 'Business Continuity', 'Data Encryption', 'Recovery Testing'],
    pricing: '$1,500 - $10,000/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$2,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Server Management & Maintenance',
    description: 'Complete server administration including monitoring, updates, security patches, and performance optimization.',
    icon: Server,
    features: ['Server Monitoring', 'Performance Tuning', 'Security Updates', 'Capacity Planning', 'Maintenance Scheduling'],
    pricing: '$1,000 - $8,000/month',
    category: 'Infrastructure',
    popular: true,
    setupFee: '$1,500',
    timeline: '1 week'
  },
  {
    title: 'Software Development & Integration',
    description: 'Custom software development and integration services for business-specific applications and workflows.',
    icon: Code,
    features: ['Custom Development', 'API Integration', 'Legacy System Migration', 'Testing & QA', 'Documentation'],
    pricing: '$15,000 - $200,000 project',
    category: 'Development',
    popular: true,
    setupFee: 'Included',
    timeline: '8-24 weeks'
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT planning and consulting to align technology with business objectives and digital transformation.',
    icon: Target,
    features: ['IT Strategy Planning', 'Technology Assessment', 'Digital Transformation', 'ROI Analysis', 'Implementation Roadmap'],
    pricing: '$200 - $500/hour',
    category: 'Consulting',
    popular: true,
    setupFee: 'N/A',
    timeline: '1-4 weeks'
  },
  {
    title: 'Email & Communication Systems',
    description: 'Enterprise email solutions, unified communications, and collaboration platform implementation and management.',
    icon: Mail,
    features: ['Email Migration', 'Unified Communications', 'Collaboration Tools', 'Security Implementation', 'User Training'],
    pricing: '$2,000 - $15,000 setup',
    category: 'Communication',
    popular: true,
    setupFee: 'Included',
    timeline: '2-4 weeks'
  },
  {
    title: 'Database Administration',
    description: 'Database design, optimization, maintenance, and administration for SQL Server, MySQL, PostgreSQL, and NoSQL databases.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring & Alerts'],
    pricing: '$1,500 - $12,000/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$2,500',
    timeline: '1-3 weeks'
  },
  {
    title: 'Virtualization & Containerization',
    description: 'VMware, Hyper-V, and Docker containerization services for improved resource utilization and scalability.',
    icon: Layers,
    features: ['VMware Implementation', 'Docker Containers', 'Resource Optimization', 'High Availability', 'Disaster Recovery'],
    pricing: '$5,000 - $40,000 project',
    category: 'Infrastructure',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management including security, app deployment, and device lifecycle management.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring'],
    pricing: '$500 - $3,000/month',
    category: 'Mobile Management',
    popular: true,
    setupFee: '$1,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management including inventory, licensing, maintenance, and disposal.',
    icon: Package,
    features: ['Asset Inventory', 'License Management', 'Maintenance Tracking', 'Disposal Planning', 'Cost Analysis'],
    pricing: '$1,000 - $5,000/month',
    category: 'Asset Management',
    popular: true,
    setupFee: '$2,000',
    timeline: '2-4 weeks'
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security including firewalls, intrusion detection, VPN, and secure remote access solutions.',
    icon: Lock,
    features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Access Control', 'Security Monitoring'],
    pricing: '$5,000 - $30,000 setup',
    category: 'Security',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'IT Compliance & Auditing',
    description: 'Compliance management and auditing services for SOX, HIPAA, GDPR, and other regulatory requirements.',
    icon: CheckCircle2,
    features: ['Compliance Assessment', 'Audit Preparation', 'Policy Development', 'Training Programs', 'Ongoing Monitoring'],
    pricing: '$3,000 - $20,000 project',
    category: 'Compliance',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'Performance Monitoring & Analytics',
    description: 'Comprehensive IT performance monitoring with real-time analytics, alerting, and capacity planning.',
    icon: Activity,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Reporting'],
    pricing: '$1,000 - $8,000/month',
    category: 'Monitoring',
    popular: true,
    setupFee: '$1,500',
    timeline: '1-2 weeks'
  },
  {
    title: 'IT Training & Documentation',
    description: 'Comprehensive IT training programs and documentation for staff and end-users on various technologies.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Technical Documentation', 'User Manuals', 'Video Tutorials', 'Certification Prep'],
    pricing: '$150 - $300/hour',
    category: 'Training',
    popular: true,
    setupFee: 'N/A',
    timeline: '1-4 weeks'
  },
  {
    title: 'Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity during outages.',
    icon: AlertTriangle,
    features: ['Risk Assessment', 'Recovery Planning', 'Testing & Validation', 'Documentation', 'Staff Training'],
    pricing: '$5,000 - $25,000 project',
    category: 'Disaster Recovery',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management services for complex technology implementations and system upgrades.',
    icon: Calendar,
    features: ['Project Planning', 'Resource Management', 'Timeline Management', 'Risk Assessment', 'Stakeholder Communication'],
    pricing: '$200 - $400/hour',
    category: 'Project Management',
    popular: true,
    setupFee: 'N/A',
    timeline: 'Varies'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Specialized cloud security services including compliance management and security architecture design.',
    icon: Shield,
    features: ['Security Architecture', 'Compliance Management', 'Identity & Access Management', 'Data Protection', 'Audit Support'],
    pricing: '$3,000 - $25,000 project',
    category: 'Cloud Security',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'IT Infrastructure Assessment',
    description: 'Comprehensive assessment of existing IT infrastructure with recommendations for improvement and optimization.',
    icon: Search,
    features: ['Infrastructure Audit', 'Performance Analysis', 'Security Assessment', 'Cost Optimization', 'Recommendations'],
    pricing: '$2,000 - $15,000 project',
    category: 'Assessment',
    popular: true,
    setupFee: 'Included',
    timeline: '1-4 weeks'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats.',
    icon: Shield,
    features: ['Security Assessment', 'Penetration Testing', 'Firewall Configuration', 'Incident Response'],
    pricing: '$3,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    benefits: ['Protection from Cyber Attacks', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220/hour',
    category: 'Networking'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300/hour',
    category: 'Consulting'
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',
    icon: Server,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$10,000 - $50,000/project',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.',
    icon: HardDrive,
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization'],
    pricing: '$15,000 - $100,000/project',
    category: 'Migration'
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],
    pricing: '$2,000 - $20,000/setup',
    category: 'Backup & Recovery'
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'Network Security'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Cloud security implementation and compliance with industry standards.',
    icon: Shield,
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],
    pricing: '$8,000 - $40,000/project',
    category: 'Cloud Security'
  },
  {
    title: 'IT Support & Help Desk',
    description: '24/7 IT support and help desk services for your organization.',
    icon: Users,
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$1,500 - $6,000/month',
    category: 'Support'
  },
  {
    title: 'Software Development Services',
    description: 'Custom software development and application modernization services.',
    icon: Code,
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],
    pricing: '$100 - $200/hour',
    category: 'Development'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management and implementation services.',
    icon: BarChart3,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],
    pricing: '$150 - $300/hour',
    category: 'Project Management'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Mobile Management'
  },
  {
    title: 'IT Training & Certification',
    description: 'IT training programs and certification preparation for your team.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$200 - $500/person/day',
    category: 'Training'
  },
  {
    title: 'IT Audit & Assessment',
    description: 'Comprehensive IT infrastructure audit and security assessment services.',
    icon: Search,
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],
    pricing: '$5,000 - $25,000/project',
    category: 'Audit & Assessment'
  },
  {
    title: 'IT Procurement & Vendor Management',
    description: 'Strategic IT procurement and vendor relationship management services.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],
    pricing: '$150 - $300/hour',
    category: 'Procurement'
  },
  {
    title: 'IT Governance & Strategy',
    description: 'IT governance framework development and strategic technology planning.',
    icon: Building,
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'Governance'
  },
  {
    title: 'IT Compliance & Regulatory',
    description: 'Compliance management for various regulatory requirements and standards.',
    icon: Shield,
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],
    pricing: '$8,000 - $40,000/project',
    category: 'Compliance'
  },
  {
title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: CpuIcon,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],
    pricing: '$15,000 - $75,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$25,000 - $150,000/project',
    category: 'Zero Trust',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],
    pricing: '$30,000 - $200,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',
    icon: Server,
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],
    pricing: '$40,000 - $300,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$25,000 - $150,000/setup',
    category: 'IoT Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$30,000 - $200,000/project',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
    pricing: '$20,000 - $100,000/setup',
    category: 'MLOps',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration'],
    pricing: '$15,000 - $80,000/project',
    category: 'Green IT',
    popular: true
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin technology implementation for physical assets and processes.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],
    pricing: '$40,000 - $250,000/project',
    category: 'Digital Twins',
    popular: true
  },
  {
    title: 'AR/VR Infrastructure & Development',
    description: 'Augmented and virtual reality infrastructure setup and application development.',
    icon: Eye,
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design'],
    pricing: '$25,000 - $150,000/project',
    category: 'AR/VR',
    popular: true
  },
  {
    title: 'Robotic Process Automation (RPA)',
    description: 'Implementation of RPA solutions for business process automation and optimization.',
    icon: Bot,
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],
    pricing: '$10,000 - $60,000/project',
    category: 'RPA',
    popular: true
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive analysis and optimization of IT costs and resources.',
    icon: TrendingUp,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Strategies', 'Monitoring Setup'],
    pricing: '$15,000 - $75,000/project',
<<<<<<< HEAD
    category: 'Integration'
  },
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI/ML infrastructure deployment with GPU clusters and model serving.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'Model Serving', 'MLOps Pipeline', 'Auto-scaling'],
    pricing: '$25,000 - $150,000/project',
    category: 'AI Infrastructure',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Blockchain network setup, smart contract deployment, and node management.',
    icon: Shield,
    features: ['Node Setup', 'Smart Contract Deployment', 'Security Auditing', 'Monitoring'],
    pricing: '$20,000 - $100,000/project',
    category: 'Blockchain'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for IoT and real-time processing applications.',
    icon: Cpu,
    features: ['Edge Node Deployment', 'IoT Integration', 'Real-time Processing', 'Data Synchronization'],
    pricing: '$15,000 - $80,000/project',
    category: 'Edge Computing'
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing infrastructure and hybrid classical-quantum systems.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Hybrid Systems', 'Algorithm Optimization', 'Security Implementation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum Computing'
  },
  {
    title: '5G Network Implementation',
    description: '5G network infrastructure design and implementation for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Setup', 'Network Slicing', 'Edge Computing', 'IoT Integration'],
    pricing: '$30,000 - $200,000/project',
    category: '5G Networks'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Complete zero trust security implementation with identity and access management.',
    icon: Lock,
    features: ['Identity Management', 'Access Controls', 'Network Segmentation', 'Continuous Monitoring'],
    pricing: '$40,000 - $250,000/project',
    category: 'Security Architecture'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Unified management of multi-cloud and hybrid cloud environments.',
    icon: Cloud,
    features: ['Multi-cloud Orchestration', 'Cost Optimization', 'Security Management', 'Compliance'],
    pricing: '$20,000 - $120,000/project',
    category: 'Cloud Management'
  },
  {
    title: 'IoT Platform Development',
    description: 'Complete IoT platform with device management, data processing, and analytics.',
    icon: Smartphone,
    features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Integration APIs'],
    pricing: '$25,000 - $150,000/project',
    category: 'IoT Solutions'
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Comprehensive digital transformation strategy and implementation.',
    icon: Rocket,
    features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Implementation'],
    pricing: '$50,000 - $500,000/project',
    category: 'Digital Transformation'
  },
  {
    title: 'API Gateway & Management',
    description: 'Enterprise API gateway setup with security, monitoring, and rate limiting.',
    icon: Network,
    features: ['API Gateway Setup', 'Security Policies', 'Rate Limiting', 'Analytics Dashboard'],
    pricing: '$10,000 - $60,000/project',
    category: 'API Management'
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices architecture design and implementation for scalable applications.',
    icon: Server,
    features: ['Architecture Design', 'Service Decomposition', 'Container Orchestration', 'Service Mesh'],
    pricing: '$30,000 - $200,000/project',
    category: 'Microservices'
  },
  {
    title: 'Data Lake & Warehouse Setup',
    description: 'Modern data lake and warehouse implementation with real-time processing.',
    icon: Database,
    features: ['Data Lake Setup', 'ETL Pipelines', 'Real-time Processing', 'Analytics Platform'],
    pricing: '$25,000 - $150,000/project',
    category: 'Data Infrastructure'
  },
  {
    title: 'Compliance & Governance',
    description: 'IT compliance implementation for GDPR, HIPAA, SOX, and other regulations.',
    icon: Shield,
    features: ['Compliance Assessment', 'Policy Implementation', 'Audit Preparation', 'Risk Management'],
    pricing: '$15,000 - $100,000/project',
    category: 'Compliance'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Complete ITSM implementation with ServiceNow, Jira, or custom solutions.',
    icon: Settings,
    features: ['Service Catalog', 'Incident Management', 'Change Management', 'Knowledge Base'],
    pricing: '$20,000 - $120,000/project',
    category: 'ITSM'
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: Cpu,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$50,000 - $300,000/project',
    category: 'Zero Trust',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],
    pricing: '$40,000 - $200,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],
    pricing: '$60,000 - $400,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$100,000 - $1,000,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',
    icon: Server,
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],
    pricing: '$80,000 - $600,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$50,000 - $300,000/setup',
    category: 'IoT Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$60,000 - $400,000/project',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
    pricing: '$40,000 - $200,000/setup',
    category: 'MLOps',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$30,000 - $200,000/project',
    category: 'Green IT',
    popular: true
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'Comprehensive threat intelligence and security analytics platform.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],
    pricing: '$60,000 - $300,000/setup',
    category: 'Threat Intelligence',
    popular: true
  },
  {
    title: 'Microservices Architecture Implementation',
    description: 'Complete microservices architecture design and implementation for scalable applications.',
    icon: Server,
    features: ['Service Design', 'API Gateway', 'Service Mesh', 'Container Orchestration'],
    pricing: '$50,000 - $300,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'Data Lake & Analytics Platform',
    description: 'Comprehensive data lake implementation with advanced analytics and machine learning capabilities.',
    icon: Database,
    features: ['Data Ingestion', 'Data Processing', 'Analytics Engine', 'ML Pipeline'],
    pricing: '$40,000 - $250,000/project',
    category: 'Data Analytics',
    popular: true
  },
  {
    title: 'API Management & Gateway Services',
    description: 'Complete API management platform with security, monitoring, and developer portal.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],
    pricing: '$25,000 - $150,000/setup',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: Shield,
    features: ['Backup Strategy', 'Recovery Testing', 'RTO/RPO Optimization', 'Business Continuity'],
    pricing: '$30,000 - $200,000/project',
    category: 'Disaster Recovery',
    popular: true
  },
  {
    title: 'IT Governance & Compliance Framework',
    description: 'Complete IT governance framework with compliance management and risk assessment.',
    icon: Building,
    features: ['Governance Framework', 'Compliance Management', 'Risk Assessment', 'Policy Development'],
    pricing: '$40,000 - $250,000/project',
    category: 'IT Governance',
    popular: true
  },
  {
    title: 'Advanced Network Security Implementation',
    description: 'Next-generation network security with AI-powered threat detection and response.',
    icon: Lock,
    features: ['AI Threat Detection', 'Network Segmentation', 'Intrusion Prevention', 'Security Analytics'],
    pricing: '$50,000 - $300,000/project',
    category: 'Network Security',
    popular: true
  },
  {
    title: 'Cloud-Native Application Development',
    description: 'Complete cloud-native application development with modern DevOps practices.',
    icon: Code,
    features: ['Cloud-Native Design', 'CI/CD Pipeline', 'Containerization', 'Serverless Architecture'],
    pricing: '$60,000 - $400,000/project',
    category: 'Cloud Development',
    popular: true
  },
  {
    title: 'IT Infrastructure Automation',
    description: 'Complete IT infrastructure automation with Infrastructure as Code and self-healing systems.',
    icon: Settings,
    features: ['Infrastructure as Code', 'Automated Provisioning', 'Self-healing Systems', 'Configuration Management'],
    pricing: '$40,000 - $250,000/setup',
    category: 'Infrastructure Automation',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI for proactive monitoring, incident management, and automation.',
    icon: Brain,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Root Cause Analysis', 'Performance Optimization'],
    pricing: '$25,000 - $125,000/setup',
    category: 'AIOps'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Complete zero trust security implementation with identity verification and micro-segmentation.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Risk Assessment'],
    pricing: '$50,000 - $250,000/project',
    category: 'Security Architecture'
  },
  {
    title: 'Hybrid Cloud Management Platform',
    description: 'Unified management platform for hybrid cloud environments across multiple providers.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Performance Monitoring'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Cloud Management'
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Implementation of quantum-resistant cryptographic solutions for future-proof security.',
    icon: Lock,
    features: ['Quantum-resistant Algorithms', 'Migration Planning', 'Compliance Testing', 'Performance Optimization'],
    pricing: '$75,000 - $350,000/project',
    category: 'Quantum Security'
  },
  {
    title: 'Smart Building IT Infrastructure',
    description: 'IoT-enabled smart building infrastructure with integrated building management systems.',
    icon: Building,
    features: ['IoT Integration', 'Building Automation', 'Energy Management', 'Occupant Analytics'],
    pricing: '$40,000 - $200,000/project',
    category: 'Smart Buildings'
  },
  {
    title: 'Edge AI Computing Infrastructure',
    description: 'Distributed AI computing infrastructure for edge devices and real-time processing.',
    icon: Cpu,
    features: ['Edge AI Deployment', 'Model Optimization', 'Real-time Processing', 'Bandwidth Optimization'],
    pricing: '$60,000 - $300,000/setup',
    category: 'Edge AI'
  },
  {
    title: 'Cybersecurity Operations Center (SOC)',
    description: '24/7 security operations center with advanced threat detection and response capabilities.',
    icon: Shield,
    features: ['24/7 Monitoring', 'Threat Hunting', 'Incident Response', 'Forensic Analysis'],
    pricing: '$100,000 - $500,000/setup',
    category: 'SOC Services'
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin platform for real-time monitoring and simulation of physical assets.',
    icon: Monitor,
    features: ['Real-time Simulation', 'Predictive Modeling', 'Asset Monitoring', 'Performance Analytics'],
    pricing: '$80,000 - $400,000/project',
    category: 'Digital Twins'
  },
  {
    title: 'Sustainable IT Infrastructure',
    description: 'Green IT solutions with energy-efficient hardware and carbon footprint optimization.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Tracking', 'Green Hardware', 'Sustainability Reporting'],
    pricing: '$35,000 - $175,000/setup',
    category: 'Green IT'
  },
  {
    title: 'Multi-Cloud Disaster Recovery',
    description: 'Comprehensive disaster recovery across multiple cloud providers with automated failover.',
    icon: Cloud,
    features: ['Multi-cloud Backup', 'Automated Failover', 'Data Synchronization', 'Recovery Testing'],
    pricing: '$45,000 - $225,000/setup',
    category: 'Disaster Recovery'
  },
  {
    title: 'IT Compliance & Governance Platform',
    description: 'Comprehensive IT governance platform with compliance monitoring and risk management.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Risk Assessment', 'Policy Management', 'Audit Reporting'],
    pricing: '$20,000 - $100,000/setup',
    category: 'IT Governance'
  },
  {
    title: 'Advanced Network Analytics',
    description: 'AI-powered network analytics with traffic analysis, anomaly detection, and optimization.',
    icon: Network,
    features: ['Traffic Analysis', 'Anomaly Detection', 'Performance Optimization', 'Capacity Planning'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Network Analytics'
  },
  {
    title: 'IT Service Management (ITSM) Platform',
    description: 'Comprehensive ITSM platform with service desk, change management, and asset tracking.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'Knowledge Management'],
    pricing: '$15,000 - $75,000/setup',
    category: 'ITSM'
  },
  {
    title: 'Cloud-Native Application Platform',
    description: 'Platform for building, deploying, and managing cloud-native applications with microservices.',
    icon: Server,
    features: ['Microservices Architecture', 'Container Orchestration', 'Service Mesh', 'API Management'],
    pricing: '$50,000 - $250,000/setup',
    category: 'Cloud Native'
  },
  {
    title: 'IT Asset Lifecycle Management',
    description: 'Complete IT asset lifecycle management from procurement to disposal with cost optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'Lifecycle Tracking', 'Cost Optimization', 'Compliance Management'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'Comprehensive threat intelligence platform with real-time threat detection and analysis.',
    icon: Shield,
    features: ['Threat Intelligence', 'Real-time Analysis', 'Threat Hunting', 'Incident Correlation'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Threat Intelligence'
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive IT performance optimization with monitoring, analysis, and improvement.',
    icon: TrendingUp,
    features: ['Performance Monitoring', 'Bottleneck Analysis', 'Optimization Recommendations', 'Capacity Planning'],
    pricing: '$20,000 - $100,000/project',
    category: 'Performance Optimization'
  },
  {
    title: 'Secure Remote Work Infrastructure',
    description: 'Complete secure remote work infrastructure with VPN, VDI, and collaboration tools.',
    icon: Users,
    features: ['Secure VPN', 'Virtual Desktop', 'Collaboration Tools', 'Security Monitoring'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Remote Work'
  },
  {
    title: 'IT Cost Optimization Platform',
    description: 'AI-powered IT cost optimization with resource right-sizing and waste reduction.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Resource Right-sizing', 'Waste Detection', 'Optimization Recommendations'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Cost Optimization'
  },
  {
    title: 'AI-Powered DevOps Automation',
    description: 'Intelligent DevOps pipeline with automated testing, deployment, and monitoring.',
    icon: Settings,
    features: ['CI/CD Automation', 'Automated Testing', 'Deployment Orchestration', 'Performance Monitoring'],
    pricing: '$25,000 - $150,000/setup',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Quality', 'Cost Savings'],
    marketPrice: '$40,000 - $200,000/setup',
    link: 'https://ziontechgroup.com/ai-devops-automation'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Better Compliance', 'Risk Reduction', 'Future-proof'],
    marketPrice: '$75,000 - $500,000/setup',
    link: 'https://ziontechgroup.com/zero-trust-security'
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing infrastructure for low-latency applications and IoT deployments.',
    icon: Server,
    features: ['Edge Node Deployment', 'Latency Optimization', 'IoT Integration', 'Global Distribution'],
    pricing: '$100,000 - $800,000/setup',
    category: 'Edge Computing',
    benefits: ['Low Latency', 'Better Performance', 'Scalability', 'Cost Efficiency'],
    marketPrice: '$150,000 - $1,200,000/setup',
    link: 'https://ziontechgroup.com/edge-computing-infrastructure'
  },
  {
    title: 'AI/ML Infrastructure Setup',
    description: 'Complete AI and machine learning infrastructure with GPU clusters and MLOps pipeline.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'MLOps Pipeline', 'Model Deployment', 'Data Pipeline'],
    pricing: '$75,000 - $400,000/setup',
    category: 'AI Infrastructure',
    popular: true,
    benefits: ['Faster AI Development', 'Scalable Infrastructure', 'Better Performance', 'Cost Optimization'],
    marketPrice: '$100,000 - $600,000/setup',
    link: 'https://ziontechgroup.com/ai-ml-infrastructure'
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions with smart contracts and decentralized applications.',
    icon: Network,
    features: ['Blockchain Setup', 'Smart Contract Development', 'DApp Development', 'Consensus Mechanisms'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Blockchain',
    benefits: ['Decentralization', 'Transparency', 'Security', 'Innovation'],
    marketPrice: '$150,000 - $1,500,000/setup',
    link: 'https://ziontechgroup.com/blockchain-infrastructure'
  },
  {
    title: '5G Network Implementation',
    description: '5G network design and implementation for enterprise and industrial applications.',
    icon: Wifi,
    features: ['5G Network Design', 'Private 5G Networks', 'IoT Connectivity', 'Performance Optimization'],
    pricing: '$200,000 - $2,000,000/setup',
    category: '5G Networks',
    benefits: ['High Speed', 'Low Latency', 'IoT Connectivity', 'Future Technology'],
    marketPrice: '$300,000 - $3,000,000/setup',
    link: 'https://ziontechgroup.com/5g-network-implementation'
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing setup and integration for research and enterprise applications.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Algorithm Development', 'Quantum-Classical Integration', 'Research Support'],
    pricing: '$500,000 - $5,000,000/setup',
    category: 'Quantum Computing',
    benefits: ['Exponential Computing', 'Research Advancement', 'Competitive Edge', 'Future Technology'],
    marketPrice: '$750,000 - $7,500,000/setup',
    link: 'https://ziontechgroup.com/quantum-computing-integration'
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT platform with device management, data processing, and analytics.',
    icon: Settings,
    features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Security Framework'],
    pricing: '$150,000 - $1,200,000/setup',
    category: 'IoT',
    benefits: ['Device Connectivity', 'Data Insights', 'Automation', 'Scalability'],
    marketPrice: '$200,000 - $1,800,000/setup',
    link: 'https://ziontechgroup.com/iot-platform-development'
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin platform development for industrial and smart city applications.',
    icon: Building,
    features: ['3D Modeling', 'Real-time Synchronization', 'Predictive Analytics', 'Simulation Engine'],
    pricing: '$200,000 - $2,000,000/setup',
    category: 'Digital Twin',
    benefits: ['Predictive Maintenance', 'Better Planning', 'Cost Reduction', 'Innovation'],
    marketPrice: '$300,000 - $3,000,000/setup',
    link: 'https://ziontechgroup.com/digital-twin-infrastructure'
  },
  {
    title: 'AR/VR Infrastructure Setup',
    description: 'Augmented and virtual reality infrastructure for enterprise and consumer applications.',
    icon: Video,
    features: ['AR/VR Hardware Setup', 'Content Management', 'User Tracking', 'Performance Optimization'],
    pricing: '$100,000 - $800,000/setup',
    category: 'AR/VR',
    benefits: ['Immersive Experience', 'Training Solutions', 'Remote Collaboration', 'Innovation'],
    marketPrice: '$150,000 - $1,200,000/setup',
    link: 'https://ziontechgroup.com/ar-vr-infrastructure'
  },
  {
    title: 'High-Performance Computing Cluster',
    description: 'HPC cluster setup and optimization for scientific computing and data analysis.',
    icon: Cpu,
    features: ['HPC Cluster Design', 'Parallel Processing', 'Performance Tuning', 'Scientific Computing'],
    pricing: '$300,000 - $3,000,000/setup',
    category: 'HPC',
    benefits: ['High Performance', 'Scientific Computing', 'Data Analysis', 'Research Support'],
    marketPrice: '$450,000 - $4,500,000/setup',
    link: 'https://ziontechgroup.com/hpc-cluster-setup'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT infrastructure with energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Tracking', 'Sustainable Hardware', 'Green Certifications'],
    pricing: '$50,000 - $300,000/setup',
    category: 'Green IT',
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Sustainability'],
    marketPrice: '$75,000 - $450,000/setup',
    link: 'https://ziontechgroup.com/green-it-solutions'
  },
  {
    title: 'IT Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: Shield,
    features: ['Disaster Recovery Planning', 'Backup Systems', 'Failover Mechanisms', 'Business Continuity'],
    pricing: '$75,000 - $500,000/setup',
    category: 'Disaster Recovery',
    benefits: ['Business Protection', 'Minimal Downtime', 'Data Security', 'Compliance'],
    marketPrice: '$100,000 - $750,000/setup',
    link: 'https://ziontechgroup.com/disaster-recovery'
  },
  {
    title: 'IT Governance & Compliance Framework',
    description: 'Comprehensive IT governance framework with compliance monitoring and risk management.',
    icon: CheckCircle,
    features: ['Governance Framework', 'Compliance Monitoring', 'Risk Management', 'Policy Development'],
    pricing: '$100,000 - $600,000/setup',
    category: 'IT Governance',
    benefits: ['Better Compliance', 'Risk Management', 'Policy Enforcement', 'Audit Readiness'],
    marketPrice: '$150,000 - $900,000/setup',
    link: 'https://ziontechgroup.com/it-governance-compliance'
  }
];

const additionalServices = [
    {
      icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $8,000/month managed',
      timeline: '4–12 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced security incidents',
        'Compliance with regulations',
        '24/7 security monitoring'
      ],
      category: 'Security'
    },
    {
      icon: Cloud,
      name: 'Cloud Migration & Modernization',
      description: 'Seamless migration to cloud platforms with application modernization and optimization.',
      features: [
        'Lift and shift migration strategies',
        'Application containerization',
        'Serverless architecture implementation',
        'Data platform upgrades and migration',
        'Legacy system modernization',
        'Performance optimization and tuning'
      ],
      pricing: '$10,000 – $150,000/project',
      projectPricing: 'Custom pricing based on complexity',
      timeline: '3–20 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Enhanced security and compliance',
        'Modern technology stack adoption'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Code,
      name: 'Enterprise Architecture Consulting',
      description: 'Strategic technology planning, system design, and architecture optimization for enterprise-scale solutions.',
      features: [
        'Technology stack evaluation and selection',
        'System architecture design and documentation',
        'Scalability and performance planning',
        'Integration strategy and roadmap development',
        'Technical debt assessment and remediation',
        'Digital transformation consulting'
      ],
      pricing: '$150 – $300/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '2–8 weeks',
      benefits: [
        'Optimized technology architecture',
        'Reduced technical debt',
        'Improved system performance',
        'Strategic technology roadmap'
      ],
      category: 'Consulting'
    },
    {
      icon: Database,
      name: 'Database Design & Optimization',
      description: 'Database architecture, performance tuning, and migration services for optimal data management.',
      features: [
        'Database architecture design and implementation',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and disaster recovery setup',
        'Database security and compliance',
        'Monitoring and maintenance automation'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$8,000 – $40,000/project',
      timeline: '2–6 weeks',
      benefits: [
        'Improved database performance',
        'Enhanced data security',
        'Reduced maintenance overhead',
        'Optimized storage costs'
      ],
      category: 'Data Management'
    },
    {
      icon: LinkIcon,
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development, microservices architecture, and third-party integrations.',
      features: [
        'RESTful and GraphQL API development',
        'Microservices architecture implementation',
        'Third-party service integration',
        'API documentation and testing frameworks',
        'API security and authentication',
        'Performance monitoring and optimization'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$10,000 – $50,000/project',
      timeline: '3–12 weeks',
      benefits: [
        'Scalable API architecture',
        'Improved system integration',
        'Enhanced developer experience',
        'Reduced development time'
      ],
      category: 'Development'
    },
    {
      icon: Smartphone,
      name: 'Mobile App Development',
      description: 'Native iOS/Android applications, React Native, and Flutter development for cross-platform solutions.',
      features: [
        'Native iOS and Android development',
        'React Native cross-platform apps',
        'Flutter mobile applications',
        'UI/UX design and implementation',
        'App store optimization and deployment',
        'Performance optimization and testing'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'High-performance mobile applications',
        'Cross-platform compatibility',
        'Optimized user experience',
        'Reduced development costs'
      ],
      category: 'Development'
    },
    {
      icon: Globe,
      name: 'Web Application Development',
      description: 'Modern web applications using React, Next.js, Vue.js, and full-stack development solutions.',
      features: [
        'React and Next.js applications',
        'Vue.js and Nuxt.js development',
        'Full-stack web applications',
        'Progressive Web App (PWA) development',
        'Performance optimization and SEO',
        'Responsive design and accessibility'
      ],
      pricing: '$80 – $200/hour',
      projectPricing: '$15,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Modern, scalable web applications',
        'Optimized performance and SEO',
        'Responsive and accessible design',
        'Reduced maintenance costs'
      ],
      category: 'Development'
    },
    {
      icon: Server,
      name: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for enterprise environments.',
      features: [
        'Server setup and configuration',
        'Network infrastructure design',
        'Storage and backup solutions',
        'Monitoring and alerting systems',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Reliable and scalable infrastructure',
        'Reduced downtime and maintenance',
        'Optimized performance and costs',
        'Enhanced security and compliance'
      ],
      category: 'Infrastructure'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure for scientific computing, AI/ML workloads, and data-intensive applications.',
      features: [
        'GPU cluster setup and optimization',
        'Distributed computing frameworks',
        'High-speed networking configuration',
        'Parallel processing optimization',
        'Scientific computing environments',
        'AI/ML infrastructure scaling'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Scalable AI/ML infrastructure',
        'Cost-effective high-performance computing'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT solutions including device management, data analytics, and edge computing.',
      features: [
        'IoT device connectivity and management',
        'Edge computing infrastructure',
        'Real-time data processing and analytics',
        'Device security and firmware updates',
        'IoT platform integration',
        'Predictive maintenance systems'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Scalable IoT infrastructure',
        'Real-time device monitoring',
        'Automated device management',
        'Data-driven insights and optimization'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: BarChart3,
      name: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation consulting and implementation for modern business operations.',
      features: [
        'Digital strategy and roadmap development',
        'Legacy system modernization',
        'Cloud-native application development',
        'Data analytics and business intelligence',
        'Process automation and optimization',
        'Change management and training'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$100,000 – $1,000,000/project',
      timeline: '12–52 weeks',
      benefits: [
        'Modernized business operations',
        'Improved efficiency and productivity',
        'Enhanced customer experience',
        'Competitive advantage in digital markets'
      ],
      category: 'Digital Transformation'
    },
    {
      icon: Shield,
      name: 'Advanced Threat Intelligence Platform',
      description: 'Comprehensive cybersecurity platform with threat intelligence, incident response, and security analytics.',
      features: [
        'Threat intelligence gathering and analysis',
        'Incident response automation',
        'Security analytics and reporting',
        'Threat hunting and investigation',
        'Compliance monitoring and reporting',
        'Security orchestration and automation'
      ],
      pricing: '$10,000 – $100,000/project',
      projectPricing: '$5,000 – $25,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Proactive threat detection',
        'Automated incident response',
        'Enhanced security visibility',
        'Reduced security risks and costs'
      ],
      category: 'Cybersecurity'
    },
    {
      icon: Database,
      name: 'Enterprise Data Platform',
      description: 'Modern data platform architecture with real-time analytics, data lakes, and business intelligence.',
      features: [
        'Data lake and warehouse architecture',
        'Real-time data processing pipelines',
        'Business intelligence and analytics',
        'Data governance and compliance',
        'Machine learning model deployment',
        'Data visualization and reporting'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$75,000 – $500,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Unified data platform',
        'Real-time business insights',
        'Improved data quality and governance',
        'Enhanced decision-making capabilities'
      ],
      category: 'Data & Analytics'
    },
    {
      icon: Code,
      name: 'Enterprise Application Integration',
      description: 'Seamless integration of enterprise applications with modern integration platforms and APIs.',
      features: [
        'Enterprise Service Bus (ESB) implementation',
        'API gateway and management',
        'Legacy system integration',
        'Real-time data synchronization',
        'Integration monitoring and management',
        'Cloud and on-premises connectivity'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$40,000 – $300,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Unified enterprise systems',
        'Improved data flow and accuracy',
        'Reduced integration complexity',
        'Enhanced business process efficiency'
      ],
      category: 'Integration'
    },
    {
      icon: Smartphone,
      name: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and hybrid quantum-classical solutions.',
      features: [
        'Quantum computing strategy development',
        'Quantum algorithm design and optimization',
        'Hybrid quantum-classical solutions',
        'Quantum software development',
        'Quantum hardware evaluation',
        'Quantum security and cryptography'
      ],
      pricing: '$300 – $800/hour',
      projectPricing: '$100,000 – $2,000,000/project',
      timeline: '16–52 weeks',
      benefits: [
        'Cutting-edge quantum capabilities',
        'Exponential computational advantages',
        'Future-proof technology investment',
        'Competitive advantage in research'
      ],
      category: 'Quantum Computing'
    },
    {
      icon: Globe,
      name: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, DeFi protocols, and Web3 application development.',
      features: [
        'Blockchain platform development',
        'Smart contract development and auditing',
        'DeFi protocol implementation',
        'NFT marketplace development',
        'Web3 application architecture',
        'Cryptocurrency integration'
      ],
      pricing: '$150 – $400/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–32 weeks',
      benefits: [
        'Decentralized application solutions',
        'Enhanced security and transparency',
        'Reduced intermediary costs',
        'Innovative business models'
      ],
      category: 'Blockchain & Web3'
    },
    {
      icon: TestTube,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security practices in DevOps workflows with automated security testing and compliance.',
      features: [
        'Security integration in CI/CD pipelines',
        'Automated security testing and scanning',
        'Infrastructure security as code',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management automation'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Integrated security in development',
        'Automated compliance management',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'DevSecOps'
    },
    {
      icon: BarChart3,
      name: 'Data Engineering & Analytics',
      description: 'Data pipeline development, data warehouses, ETL processes, and business intelligence solutions.',
      features: [
        'Data pipeline development and optimization',
        'Data warehouse design and implementation',
        'ETL/ELT process automation',
        'Business intelligence dashboards',
        'Real-time data processing',
        'Data quality and governance'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Improved data-driven decision making',
        'Automated data processing',
        'Enhanced business intelligence',
        'Reduced data processing costs'
      ],
      category: 'Data Management'
    },
    {
      icon: Cpu,
      name: 'Blockchain & Web3 Development',
      description: 'Smart contract development, DeFi protocols, and blockchain integration solutions.',
      features: [
        'Smart contract development and auditing',
        'DeFi protocol design and implementation',
        'Blockchain integration and dApp development',
        'Tokenomics and governance system design',
        'NFT marketplace development',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Cutting-edge blockchain solutions',
        'Decentralized application development',
        'Enhanced security and transparency',
        'Innovative business models'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Wrench,
      name: 'IoT & Embedded Systems',
      description: 'IoT device development, sensor integration, and edge computing solutions.',
      features: [
        'IoT device development and prototyping',
        'Sensor integration and data collection',
        'Edge computing and real-time processing',
        'IoT platform development',
        'Device management and monitoring',
        'Security and compliance implementation'
      ],
      pricing: '$100 – $300/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Connected device solutions',
        'Real-time data processing',
        'Improved operational efficiency',
        'Innovative IoT applications'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Cloud,
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing solutions for low-latency applications and real-time processing.',
      features: [
        'Edge server deployment and management',
        'Content delivery network optimization',
        'Real-time data processing at the edge',
        'Edge AI and machine learning deployment',
        '5G network integration',
        'Edge security and compliance'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '8–16 weeks',
      benefits: [
        '50% reduction in latency',
        'Improved application performance',
        'Enhanced user experience',
        'Reduced bandwidth costs'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network micro-segmentation',
        'Device trust and compliance',
        'Application security controls',
        'Data encryption and protection',
        'Continuous security monitoring'
      ],
      pricing: '$8,000 – $50,000/project',
      projectPricing: '$3,000 – $12,000/month managed',
      timeline: '6–16 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Compliance with regulations',
        'Improved threat detection'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Data Lake & Warehouse Modernization',
      description: 'Modern data architecture with cloud-native data lakes and real-time analytics.',
      features: [
        'Cloud data lake design and implementation',
        'Real-time data streaming and processing',
        'Data governance and cataloging',
        'Advanced analytics and ML integration',
        'Data quality and lineage tracking',
        'Cost optimization and performance tuning'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data platform',
        'Real-time analytics capabilities',
        'Improved data quality',
        'Reduced data processing costs'
      ],
      category: 'Data Management'
    },
    {
      icon: Code,
      name: 'Microservices Architecture Design',
      description: 'Scalable microservices architecture with service mesh and container orchestration.',
      features: [
        'Microservices design and implementation',
        'Service mesh and API gateway setup',
        'Container orchestration with Kubernetes',
        'Service discovery and load balancing',
        'Distributed tracing and monitoring',
        'DevOps and CI/CD integration'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Improved scalability and performance',
        'Faster development and deployment',
        'Better fault isolation',
        'Enhanced team productivity'
      ],
      category: 'Development'
    },
    {
      icon: Globe,
      name: 'Progressive Web App Development',
      description: 'Modern PWA development with offline capabilities and native app features.',
      features: [
        'PWA architecture and implementation',
        'Service worker development',
        'Offline functionality and caching',
        'Push notifications and background sync',
        'App-like user experience',
        'Performance optimization'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $80,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Native app-like experience',
        'Offline functionality',
        'Reduced development costs',
        'Cross-platform compatibility'
      ],
      category: 'Development'
    },
    {
      icon: Server,
      name: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud operations with multi-cloud orchestration and management.',
      features: [
        'Multi-cloud strategy and planning',
        'Hybrid cloud architecture design',
        'Cloud cost optimization and governance',
        'Disaster recovery and backup solutions',
        'Security and compliance management',
        'Performance monitoring and optimization'
      ],
      pricing: '$120 – $280/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Flexible cloud deployment',
        'Reduced vendor lock-in',
        'Optimized costs and performance',
        'Enhanced disaster recovery'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: BarChart3,
      name: 'Real-Time Analytics Platform',
      description: 'Streaming analytics platform with real-time data processing and visualization.',
      features: [
        'Real-time data streaming and processing',
        'Stream analytics and complex event processing',
        'Real-time dashboards and visualization',
        'Machine learning model deployment',
        'Data pipeline monitoring and alerting',
        'Scalable architecture design'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$35,000 – $120,000/project',
      timeline: '8–16 weeks',
      benefits: [
        'Real-time business insights',
        'Faster decision making',
        'Improved operational efficiency',
        'Enhanced customer experience'
      ],
      category: 'Data Management'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Integration',
      description: 'Quantum computing solutions and hybrid quantum-classical system integration.',
      features: [
        'Quantum algorithm development',
        'Hybrid quantum-classical systems',
        'Quantum machine learning applications',
        'Quantum cryptography implementation',
        'Quantum simulation and optimization',
        'Quantum hardware integration'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–32 weeks',
      benefits: [
        'Exponential computational power',
        'Advanced optimization capabilities',
        'Enhanced security with quantum cryptography',
        'Competitive advantage in research'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: TestTube,
      name: 'AI/ML Model Deployment & MLOps',
      description: 'End-to-end machine learning operations with model deployment and monitoring.',
      features: [
        'ML model deployment and serving',
        'Model versioning and management',
        'A/B testing and experimentation',
        'Model monitoring and drift detection',
        'Automated retraining pipelines',
        'MLOps workflow automation'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Faster model deployment',
        'Improved model performance',
        'Automated ML operations',
        'Reduced operational overhead'
      ],
      category: 'AI & Machine Learning'
    },
    {
      icon: BookOpen,
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology roadmap and change management.',
      features: [
        'Digital strategy and roadmap development',
        'Technology assessment and selection',
        'Change management and training',
        'Process optimization and automation',
        'Customer experience transformation',
        'Innovation and R&D strategy'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Strategic technology alignment',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      category: 'Consulting'
    },
    {
      icon: Wrench,
      name: 'AR/VR Development & Integration',
      description: 'Augmented and virtual reality solutions for training, visualization, and customer engagement.',
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Spatial computing and tracking',
        'Multi-platform deployment',
        'User experience design',
        'Performance optimization'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$40,000 – $200,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Immersive user experiences',
        'Enhanced training and education',
        'Improved customer engagement',
        'Innovative business applications'
      ],
      category: 'Emerging Technologies'
    },
    {
      icon: Cloud,
      name: 'Enterprise Application Integration',
      description: 'Comprehensive enterprise application integration with API management, data synchronization, and workflow automation.',
      features: [
        'Enterprise Service Bus (ESB) implementation',
        'API gateway and management platform',
        'Data integration and synchronization',
        'Workflow automation and orchestration',
        'Legacy system modernization',
        'Real-time data processing and analytics'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Seamless system integration',
        'Improved data consistency',
        'Reduced integration complexity',
        'Enhanced business agility'
      ],
      category: 'Enterprise Integration'
    },
    {
      icon: Shield,
      name: 'Advanced Threat Intelligence Platform',
      description: 'Comprehensive threat intelligence and security monitoring with automated response capabilities.',
      features: [
        'Threat intelligence gathering and analysis',
        'Security Information and Event Management (SIEM)',
        'Automated incident response and remediation',
        'Threat hunting and investigation',
        'Security orchestration and automation',
        'Compliance monitoring and reporting'
      ],
      pricing: '$200 – $400/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Proactive threat detection',
        'Automated security response',
        'Reduced security incidents',
        'Enhanced security posture'
      ],
      category: 'Security'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure with GPU computing, parallel processing, and scientific computing capabilities.',
      features: [
        'GPU-accelerated computing clusters',
        'Parallel processing and distributed computing',
        'Scientific computing and simulation',
        'Machine learning and AI training infrastructure',
        'High-speed networking and storage',
        'Performance optimization and tuning'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Cost-effective computing resources',
        'Scalable infrastructure'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT platform with device management, data analytics, and edge computing capabilities.',
      features: [
        'IoT device provisioning and management',
        'Edge computing and data processing',
        'Real-time data analytics and visualization',
        'Device security and firmware management',
        'Integration with cloud platforms',
        'Predictive maintenance and monitoring'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Centralized device management',
        'Real-time data insights',
        'Improved operational efficiency',
        'Scalable IoT infrastructure'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: Code,
      name: 'Enterprise Digital Transformation Consulting',
      description: 'Strategic digital transformation with technology modernization, process optimization, and change management.',
      features: [
        'Digital strategy development and planning',
        'Technology stack modernization',
        'Process digitization and automation',
        'Change management and training',
        'Data-driven decision making implementation',
        'Customer experience transformation'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $300,000/project',
      timeline: '12–36 weeks',
      benefits: [
        'Modernized technology infrastructure',
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Competitive advantage'
      ],
      category: 'Digital Transformation'
    },
    {
      icon: Database,
      name: 'Big Data Analytics & Data Lake Solutions',
      description: 'Comprehensive big data platform with data lake architecture, analytics, and machine learning capabilities.',
      features: [
        'Data lake architecture and implementation',
        'Big data processing and analytics',
        'Real-time streaming data processing',
        'Machine learning and AI model deployment',
        'Data governance and security',
        'Business intelligence and reporting'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data platform',
        'Advanced analytics capabilities',
        'Real-time data processing',
        'Data-driven insights'
      ],
      category: 'Data Analytics'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and network segmentation.',
      features: [
        'Identity and access management (IAM)',
        'Network segmentation and micro-segmentation',
        'Multi-factor authentication and SSO',
        'Device trust and compliance',
        'Continuous security monitoring',
        'Security policy automation'
      ],
      pricing: '$180 – $400/hour',
      projectPricing: '$40,000 – $250,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Automated security policies',
        'Compliance with regulations'
      ],
      category: 'Security'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud Management & Optimization',
      description: 'Comprehensive multi-cloud strategy with cost optimization, governance, and unified management.',
      features: [
        'Multi-cloud architecture design',
        'Cloud cost optimization and management',
        'Unified cloud governance and compliance',
        'Cloud migration and modernization',
        'Disaster recovery and backup strategies',
        'Performance monitoring and optimization'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$25,000 – $150,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Optimized cloud costs',
        'Improved cloud performance',
        'Enhanced security and compliance',
        'Reduced vendor lock-in'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: 'Enterprise Mobile App Development',
      description: 'Native and cross-platform mobile application development with enterprise-grade security and integration.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Enterprise security and authentication',
        'Backend integration and API development',
        'Mobile device management (MDM)',
        'App store deployment and management'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$15,000 – $100,000/project',
      timeline: '4–16 weeks',
      benefits: [
        'Enhanced mobile productivity',
        'Improved user experience',
        'Enterprise-grade security',
        'Cross-platform compatibility'
      ],
      category: 'Mobile Development'
    },
    {
      icon: BarChart3,
      name: 'Business Intelligence & Data Visualization',
      description: 'Advanced BI platform with interactive dashboards, reporting, and self-service analytics.',
      features: [
        'Interactive dashboards and reports',
        'Self-service analytics platform',
        'Data visualization and storytelling',
        'Advanced analytics and forecasting',
        'Real-time data integration',
        'Mobile BI and accessibility'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$15,000 – $75,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Data-driven decision making',
        'Improved business insights',
        'Self-service analytics',
        'Enhanced reporting capabilities'
      ],
      category: 'Business Intelligence'
    },
    {
      icon: Server,
      name: 'Edge Computing Infrastructure',
      description: 'Distributed edge computing platform with low-latency processing and real-time analytics.',
      features: [
        'Edge computing infrastructure deployment',
        'Low-latency data processing',
        'Real-time analytics and decision making',
        'Edge-to-cloud data synchronization',
        'Edge security and management',
        'IoT and sensor data processing'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $150,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Reduced latency and improved performance',
        'Real-time data processing',
        'Enhanced reliability and availability',
        'Cost-effective computing at the edge'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Compliance & Regulatory Technology',
      description: 'Comprehensive compliance management with automated monitoring, reporting, and risk assessment.',
      features: [
        'Regulatory compliance monitoring',
        'Automated compliance reporting',
        'Risk assessment and management',
        'Audit trail and documentation',
        'Policy management and updates',
        'Compliance training and awareness'
      ],
      pricing: '$120 – $300/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Automated compliance monitoring',
        'Reduced compliance risks',
        'Streamlined audit processes',
        'Cost-effective compliance management'
      ],
      category: 'Compliance'
    },
    {
      icon: Cpu,
      name: 'Quantum Computing Infrastructure',
      description: 'Quantum computing infrastructure setup, algorithm development, and quantum-classical hybrid systems.',
      features: [
        'Quantum hardware integration and setup',
        'Quantum algorithm development and optimization',
        'Quantum-classical hybrid system architecture',
        'Quantum error correction and fault tolerance',
        'Quantum software development frameworks',
        'Quantum security and cryptography implementation'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: 'Custom pricing based on quantum requirements',
      timeline: '24–52 weeks',
      benefits: [
        'Exponential computational capabilities',
        'Advanced optimization and simulation',
        'Enhanced security through quantum cryptography',
        'Cutting-edge competitive advantage'
      ],
      category: 'Quantum Computing'
    },
    {
      icon: Globe,
      name: 'Edge Computing & IoT Infrastructure',
      description: 'Distributed edge computing infrastructure with IoT device management and real-time data processing.',
      features: [
        'Edge computing infrastructure deployment',
        'IoT device management and monitoring',
        'Real-time data processing and analytics',
        'Edge AI and machine learning deployment',
        '5G network integration and optimization',
        'Distributed system architecture design'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Reduced latency and improved performance',
        'Enhanced data privacy and security',
        'Scalable IoT device management',
        'Real-time decision making capabilities'
      ],
      category: 'Edge Computing'
    },
    {
      icon: Shield,
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
      features: [
        'Zero trust network architecture design',
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring and analytics',
        'Privileged access management (PAM)',
        'Security orchestration and automation'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance and governance',
        'Automated threat response'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Blockchain & Distributed Ledger Solutions',
      description: 'Blockchain infrastructure, smart contract development, and decentralized application deployment.',
      features: [
        'Blockchain infrastructure setup and management',
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Cryptocurrency wallet and exchange integration',
        'Blockchain analytics and monitoring',
        'Regulatory compliance and governance'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Enhanced transparency and trust',
        'Reduced transaction costs',
        'Improved data integrity',
        'Decentralized system architecture'
      ],
      category: 'Blockchain'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud and hybrid cloud strategy with unified management and optimization.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Hybrid cloud integration and management',
        'Cloud cost optimization and FinOps',
        'Cross-cloud data migration and synchronization',
        'Unified monitoring and management platform',
        'Disaster recovery and business continuity'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Reduced vendor lock-in',
        'Optimized cloud costs',
        'Enhanced flexibility and scalability',
        'Improved disaster recovery capabilities'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: '5G Network Infrastructure & Optimization',
      description: '5G network deployment, optimization, and application development for next-generation connectivity.',
      features: [
        '5G network infrastructure deployment',
        'Network slicing and optimization',
        '5G application development and testing',
        'Edge computing integration with 5G',
        'Network performance monitoring and analytics',
        'IoT and smart city connectivity solutions'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile broadband',
        'Next-generation application capabilities'
      ],
      category: 'Network Infrastructure'
    },
    {
      icon: Brain,
      name: 'AI/ML Infrastructure & MLOps',
      description: 'Complete AI/ML infrastructure setup with MLOps pipelines, model deployment, and monitoring.',
      features: [
        'AI/ML infrastructure design and deployment',
        'MLOps pipeline development and automation',
        'Model training and deployment platforms',
        'AI model monitoring and governance',
        'Data pipeline and feature store setup',
        'AI ethics and bias monitoring'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Accelerated AI model development',
        'Automated ML operations',
        'Scalable AI infrastructure',
        'Enhanced model performance and reliability'
      ],
      category: 'AI Infrastructure'
    },
    {
      icon: Server,
      name: 'Serverless & Microservices Architecture',
      description: 'Serverless architecture implementation with microservices design and API management.',
      features: [
        'Serverless architecture design and implementation',
        'Microservices development and deployment',
        'API gateway and management platform',
        'Container orchestration and management',
        'Event-driven architecture implementation',
        'Performance monitoring and optimization'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Faster development and deployment',
        'Enhanced system reliability'
      ],
      category: 'Architecture'
    },
    {
      icon: Database,
      name: 'Data Mesh & Data Fabric Architecture',
      description: 'Modern data architecture with data mesh and data fabric implementation for enterprise data management.',
      features: [
        'Data mesh architecture design and implementation',
        'Data fabric platform development',
        'Data governance and cataloging',
        'Real-time data streaming and processing',
        'Data quality and lineage management',
        'Self-service analytics platform'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Improved data accessibility and democratization',
        'Enhanced data quality and governance',
        'Faster time-to-insight',
        'Scalable data architecture'
      ],
      category: 'Data Architecture'
    },
    {
      icon: Shield,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security into DevOps pipelines with automated security testing and compliance.',
      features: [
        'DevSecOps pipeline integration',
        'Automated security testing and scanning',
        'Infrastructure as Code security',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management and remediation'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Enhanced security throughout SDLC',
        'Automated compliance and reporting',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'Security'
    },
    {
      icon: Globe,
      name: 'Green IT & Sustainable Technology',
      description: 'Sustainable IT infrastructure with energy optimization, carbon footprint reduction, and green computing.',
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint monitoring and reduction',
        'Green data center optimization',
        'Sustainable software development practices',
        'Renewable energy integration',
        'Environmental impact assessment and reporting'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Enhanced corporate sustainability',
        'Compliance with environmental regulations'
      ],
      category: 'Sustainability'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing (HPC)',
      description: 'High-performance computing infrastructure for scientific research, simulations, and data-intensive applications.',
      features: [
        'HPC cluster design and deployment',
        'Parallel computing optimization',
        'GPU computing and acceleration',
        'Scientific computing software stack',
        'High-speed networking and storage',
        'Performance monitoring and optimization'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month managed',
      timeline: '24–48 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Complex simulation capabilities',
        'Advanced data processing and analysis'
      ],
      category: 'High-Performance Computing'
    }
  ];

const categories = [
  'All',
  'AI Operations',
  'Quantum Security',
  'Edge Computing',
  '5G Networks',
  'Blockchain Infrastructure',
  'IoT Platforms',
  'AI Infrastructure',
  'Green IT',
  'Zero Trust Security',
  'Cloud Management',
  'Analytics Platform',
  'Disaster Recovery',
  'Network Security',
  'IT Compliance',
  'Digital Transformation',
  'Asset Management',
  'Data Protection',
  'Performance Monitoring',
  'Cloud Security',
  'ITSM'
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

<<<<<<< HEAD
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group | 85+ Comprehensive IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and IT support. 85+ services with competitive pricing and 24/7 support." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, IT support, infrastructure" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="85+ comprehensive IT services with competitive pricing and 24/7 support. Transform your infrastructure with our expert solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:type" content="website" />
      </Head>
=======
      {/* IT Services Grid */}
      <section className="py-24 sm:py-32 bg-white">;
        <div className="mx-auto max-w-7xl px-6 lg:px-8">;
          <div className="mx-auto max-w-2xl text-center mb-16">;
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">;
              Our IT Service Portfolio;
            </h2>;
            <p className="mt-6 text-lg leading-8 text-gray-600">;
              Comprehensive IT solutions tailored to your business needs. All services include implementation,
              training, and ongoing support. Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-500">;
                kleber@ziontechgroup.com;
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-green-600 hover:text-green-500">;
                +1 302 464 0950;
              </a>{' '}
              for custom pricing.;
            </p>;
          </div>;
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">;
            {itServices.map((service, index) => (;
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">;
                <div className="flex items-center gap-x-3 mb-6">;
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">;
                    <service.icon className="h-7 w-7 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>;
                    <p className="text-sm text-green-600 font-medium">{service.category}</p>;
                  </div>;
                </div>;
                <p className="text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-3 mb-6">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center gap-x-3">;
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />;
                      <span className="text-sm text-gray-700">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <div className="flex items-center justify-between">;
                  <div className="flex items-center space-x-4 text-sm text-gray-500">;
                    <div className="flex items-center space-x-1">;
                      <Clock className="h-4 w-4" />;
                      <span>{service.delivery}</span>;
                    </div>;
                    <div className="font-semibold text-green-600">{service.pricing}</div>;
                  </div>;
                  <Link;
                    href="/contact";
                    className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group">;
                    Get Started;
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
>>>>>>> origin/automation-fixes

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT services and solutions designed to transform your business operations, 
                enhance security, and drive innovation across all technology domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
      category: 'Development'
    },
    {
      icon: Server,
      name: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure setup, management, and optimization for enterprise environments.',
      features: [
        'Server setup and configuration',
        'Network infrastructure design',
        'Storage and backup solutions',
        'Monitoring and alerting systems',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      pricing: '$100 – $250/hour',
      projectPricing: '$20,000 – $100,000/project',
      timeline: '4–12 weeks',
      benefits: [
        'Reliable and scalable infrastructure',
        'Reduced downtime and maintenance',
        'Optimized performance and costs',
        'Enhanced security and compliance'
      ],
      category: 'Infrastructure'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing Solutions',
      description: 'Advanced HPC infrastructure for scientific computing, AI/ML workloads, and data-intensive applications.',
      features: [
        'GPU cluster setup and optimization',
        'Distributed computing frameworks',
        'High-speed networking configuration',
        'Parallel processing optimization',
        'Scientific computing environments',
        'AI/ML infrastructure scaling'
      ],
      pricing: '$200 – $500/hour',
      projectPricing: '$50,000 – $500,000/project',
      timeline: '8–24 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Scalable AI/ML infrastructure',
        'Cost-effective high-performance computing'
      ],
      category: 'High-Performance Computing'
    },
    {
      icon: Globe,
      name: 'IoT Platform & Device Management',
      description: 'Comprehensive IoT solutions including device management, data analytics, and edge computing.',
      features: [
        'IoT device connectivity and management',
        'Edge computing infrastructure',
        'Real-time data processing and analytics',
        'Device security and firmware updates',
        'IoT platform integration',
        'Predictive maintenance systems'
      ],
      pricing: '$150 – $350/hour',
      projectPricing: '$30,000 – $200,000/project',
      timeline: '6–20 weeks',
      benefits: [
        'Scalable IoT infrastructure',
        'Real-time device monitoring',
        'Automated device management',
        'Data-driven insights and optimization'
      ],
      category: 'IoT & Edge Computing'
    },
    {
      icon: BarChart3,
      name: 'Enterprise Digital Transformation',
      description: 'Comprehensive digital transformation consulting and implementation for modern business operations.',
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Change management and training',
        'Technology stack evaluation',
        'ROI measurement and optimization'
      ],
      pricing: '$10,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Consulting Services'
    },
    {
      title: 'Managed IT Services',
      description: 'Comprehensive IT management and monitoring services',
      icon: Monitor,
      features: [
        'Proactive monitoring and maintenance',
        'Patch management and updates',
        'Performance optimization',
        'Capacity planning and scaling',
        'Vendor management and procurement',
        'IT strategy and planning'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '2-4 weeks',
      category: 'Managed Services'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '8-20 weeks',
      category: 'Blockchain Services'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Internet of Things solutions and edge computing infrastructure',
      icon: Cpu,
      features: [
        'IoT device development and integration',
        'Edge computing platform setup',
        'Real-time data processing and analytics',
        'IoT security and device management',
        'Sensor network design and deployment',
        'Edge AI and machine learning integration'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-16 weeks',
      category: 'IoT Services'
    },
    {
      title: 'Quantum Computing Consulting',
      description: 'Quantum computing strategy, algorithm development, and implementation',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Quantum computing strategy consulting',
        'Hybrid classical-quantum solutions',
        'Quantum security and cryptography',
        'Quantum machine learning applications',
        'Quantum hardware evaluation and selection'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Quantum Services'
    },
    {
      title: '5G & Network Modernization',
      description: '5G network implementation and legacy network modernization',
      icon: Wifi,
      features: [
        '5G network planning and deployment',
        'Network slicing and optimization',
        'Legacy network migration',
        'Private 5G network setup',
        'Network performance monitoring',
        'Edge computing integration'
      ],
      pricing: '$10,000 - $75,000/month',
      delivery: '8-20 weeks',
      category: 'Network Services'
    },
    {
      title: 'AR/VR Development & Implementation',
      description: 'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Immersive training and simulation',
        'Virtual showroom and retail solutions',
        'AR/VR hardware integration',
        'Performance optimization and testing'
      ],
      pricing: '$6,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'AR/VR Services'
    },
    {
      title: 'API Management & Integration',
      description: 'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [
        'API design and development',
        'API gateway setup and management',
        'Third-party API integration',
        'API security and authentication',
        'API analytics and monitoring',
        'Microservices architecture design'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-12 weeks',
      category: 'API Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with automated incident response and predictive maintenance',
      icon: Brain,
      features: [
        'Automated incident detection and response,Predictive maintenance and capacity planning,Intelligent root cause analysis,Automated remediation and self-healing,Performance optimization recommendations,Integration with existing monitoring tools'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      icon: Shield,
      features: [
        'Identity and access management (IAM),Network segmentation and micro-segmentation,Device trust and compliance verification,Data encryption and protection,Continuous security monitoring,Automated threat response'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Security Services'
    },
    {
      title: 'Edge Computing & Fog Computing',
      description: 'Distributed computing infrastructure for real-time processing and low latency',
      icon: Network,
      features: [
        'Edge computing platform design and deployment,Fog computing architecture implementation,Real-time data processing and analytics,Edge AI and machine learning,Latency optimization and bandwidth management,Edge device management and monitoring'
      ],
      pricing: '$6,000 - $35,000/month',
      delivery: '6-14 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Hyperconverged Infrastructure (HCI)',
      description: 'Integrated compute, storage, and networking solutions for modern data centers',
      icon: Server,
      features: [
        'HCI platform design and implementation,Storage virtualization and management,Network virtualization and SDN,Automated resource provisioning,Disaster recovery and backup solutions,Performance monitoring and optimization'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '8-16 weeks',
      category: 'Infrastructure Services'
    },
    {
      title: 'Multi-Cloud Management & Orchestration',
      description: 'Unified management and orchestration across multiple cloud providers',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture,Cloud cost optimization and FinOps,Cross-cloud workload migration,Unified monitoring and management,Cloud security and compliance,Automated scaling and resource management'
      ],
      pricing: '$7,000 - $45,000/month',
      delivery: '8-18 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Intelligent automation of repetitive business processes and workflows',
      icon: Settings,
      features: [
        'Process discovery and analysis,RPA bot development and deployment,Workflow automation and optimization,Integration with existing systems,Process monitoring and analytics,Change management and training'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Automation Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Environmentally conscious IT solutions and carbon footprint reduction',
      icon: TreePine,
      features: [
        'Energy-efficient infrastructure design,Carbon footprint assessment and reduction,Green cloud computing solutions,Sustainable hardware procurement,IT waste management and recycling,Environmental compliance and reporting'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Business continuity planning',
        'Recovery time objective optimization',
        'Testing and validation services',
        'Compliance and audit support'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '6-16 weeks',
      category: 'Recovery Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Sustainable IT practices and carbon footprint reduction',
      icon: Globe,
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint assessment and reduction',
        'Sustainable cloud migration',
        'Green data center optimization',
        'E-waste management and recycling',
        'Sustainability reporting and compliance'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-14 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'FinTech & Payment Solutions',
      description: 'Financial technology solutions and payment system integration',
      icon: Database,
      features: [
        'Payment gateway integration',
        'Financial API development',
        'Compliance and regulatory solutions',
        'Fraud detection and prevention',
        'Digital banking solutions',
        'Cryptocurrency integration'
      ],
      pricing: '$8,000 - $60,000/month',
      delivery: '10-24 weeks',
      category: 'FinTech Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with machine learning and automation',
      icon: Brain,
      features: [
        'Automated incident detection and resolution',
        'Predictive maintenance and capacity planning',
        'Intelligent root cause analysis',
        'Automated remediation workflows',
        'Performance optimization recommendations',
        'Cost optimization and resource allocation'
      ],
      pricing: '$12,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Zero-Trust Security Architecture',
      description: 'Comprehensive zero-trust security implementation and management',
      icon: Lock,
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring',
        'Privileged access management (PAM)',
        'Data loss prevention (DLP)',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '12-20 weeks',
      category: 'Security Services'
    },
    {
      title: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud strategy and management across multiple platforms',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cost management and optimization',
        'Disaster recovery across clouds',
        'Security and compliance management',
        'Performance monitoring and optimization'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '10-18 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Edge Computing Infrastructure',
      description: 'Edge computing solutions for real-time processing and low-latency applications',
      icon: Cpu,
      features: [
        'Edge server deployment and management',
        'Real-time data processing',
        'Edge AI and machine learning',
        'Content delivery network (CDN) optimization',
        'IoT device integration',
        'Edge security and monitoring'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation and modernization services',
      icon: Server,
      features: [
        'Data center assessment and planning',
        'Infrastructure modernization',
        'Energy efficiency optimization',
        'Cooling and power management',
        'Security and access control',
        'Compliance and certification'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Data Center Services'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management platform and process optimization',
      icon: Settings,
      features: [
        'ITIL framework implementation',
        'Service desk and ticketing system',
        'Change and release management',
        'Asset and configuration management',
        'Service level management',
        'Knowledge management system'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '6-14 weeks',
      category: 'ITSM Services'
    },
    {
      title: 'Compliance & Governance Solutions',
      description: 'Regulatory compliance and IT governance framework implementation',
      icon: Shield,
      features: [
        'SOX, GDPR, HIPAA compliance',
        'IT governance framework design',
        'Risk assessment and management',
        'Audit preparation and support',
        'Policy development and implementation',
        'Training and awareness programs'
      ],
      pricing: '$8,000 - $45,000/month',
      delivery: '8-16 weeks',
      category: 'Compliance Services'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization',
      icon: HardDrive,
      features: [
        'Asset discovery and inventory',
        'Software license management',
        'Hardware lifecycle management',
        'Cost optimization and planning',
        'Vendor management',
        'Disposal and recycling services'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '4-10 weeks',
      category: 'Asset Management Services'
    },
    {
      title: 'Network Performance Optimization',
      description: 'Advanced network performance monitoring and optimization services',
      icon: Network,
      features: [
        'Network performance analysis',
        'Bandwidth optimization',
        'Quality of Service (QoS) implementation',
        'Network troubleshooting and resolution',
        'Performance monitoring and alerting',
        'Capacity planning and scaling'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '6-12 weeks',
      category: 'Network Services'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support',
      icon: Users,
      features: [
        'Technical skills training',
        'Certification exam preparation',
        'Hands-on lab environments',
        'Custom training curriculum',
        'Instructor-led and self-paced options',
        'Progress tracking and reporting'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-8 weeks',
      category: 'Training Services'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting and technology roadmap development',
      icon: Target,
      features: [
        'IT strategy and roadmap development',
        'Technology assessment and evaluation',
        'Digital transformation planning',
        'Vendor selection and evaluation',
        'ROI analysis and business case development',
        'Change management and adoption'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '4-12 weeks',
      category: 'Consulting Services'
    },
    {
      title: 'Advanced Threat Detection & Response',
      description: 'Next-generation security operations center with AI-powered threat hunting',
      icon: Shield,
      features: [
        'AI-powered threat detection and analysis',
        'Behavioral analytics and anomaly detection',
        'Automated incident response and containment',
        'Threat intelligence integration',
        'Forensic analysis and investigation',
        'Security orchestration and automation'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '8-16 weeks',
      category: 'Security Services'
    },
    {
      title: 'Cloud-Native Application Development',
      description: 'Modern cloud-native applications with microservices architecture',
      icon: Code,
      features: [
        'Microservices architecture design',
        'Container orchestration with Kubernetes',
        'Serverless application development',
        'API gateway and service mesh implementation',
        'Cloud-native CI/CD pipelines',
        'Observability and monitoring setup'
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '10-20 weeks',
      category: 'Development Services'
    },
    {
      title: 'Data Lake & Analytics Platform',
      description: 'Enterprise data lake with advanced analytics and machine learning capabilities',
      icon: Database,
      features: [
        'Data lake architecture and implementation',
        'ETL/ELT pipeline development',
        'Real-time streaming analytics',
        'Machine learning model deployment',
        'Data governance and security',
        'Business intelligence dashboards'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Data Services'
    },
    {
      title: 'Hybrid Multi-Cloud Architecture',
      description: 'Seamless hybrid cloud strategy across AWS, Azure, and Google Cloud',
      icon: Cloud,
      features: [
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cross-cloud data synchronization',
        'Unified monitoring and management',
        'Disaster recovery across clouds',
        'Cost optimization and FinOps'
      ],
      pricing: '$25,000 - $120,000/month',
      delivery: '16-32 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'AI-Powered IT Operations (AIOps)',
      description: 'Intelligent IT operations with machine learning and predictive analytics',
      icon: Brain,
      features: [
        'Automated incident detection and resolution',
        'Predictive maintenance and capacity planning',
        'Intelligent root cause analysis',
        'Automated remediation workflows',
        'Performance optimization recommendations',
        'Cost optimization and resource allocation'
      ],
      pricing: '$18,000 - $75,000/month',
      delivery: '10-20 weeks',
      category: 'AIOps Services'
    },
    {
      title: 'Zero-Trust Security Implementation',
      description: 'Comprehensive zero-trust security architecture and implementation',
      icon: Lock,
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation and network isolation',
        'Continuous security monitoring',
        'Privileged access management (PAM)',
        'Data loss prevention (DLP)',
        'Security orchestration and automation'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Security Services'
    },
    {
      title: 'Edge Computing & IoT Platform',
      description: 'Edge computing infrastructure for IoT and real-time applications',
      icon: Cpu,
      features: [
        'Edge server deployment and management',
        'IoT device integration and management',
        'Real-time data processing and analytics',
        'Edge AI and machine learning',
        'Content delivery network (CDN) optimization',
        'Edge security and monitoring'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Edge Computing Services'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development, smart contracts, and decentralized applications',
      icon: Network,
      features: [
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Blockchain integration and consulting',
        'Cryptocurrency wallet development',
        'Tokenomics and governance design',
        'Cross-chain interoperability solutions'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Blockchain Services'
    },
    {
      title: 'Quantum Computing Integration',
      description: 'Quantum computing strategy, algorithm development, and hybrid solutions',
      icon: Cpu,
      features: [
        'Quantum algorithm development',
        'Quantum computing strategy consulting',
        'Hybrid classical-quantum solutions',
        'Quantum security and cryptography',
        'Quantum machine learning applications',
        'Quantum hardware evaluation and selection'
      ],
      pricing: '$50,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Quantum Services'
    },
    {
      title: '5G & Network Modernization',
      description: '5G network implementation and legacy network modernization',
      icon: Wifi,
      features: [
        '5G network planning and deployment',
        'Network slicing and optimization',
        'Legacy network migration',
        'Private 5G network setup',
        'Network performance monitoring',
        'Edge computing integration'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Network Services'
    },
    {
      title: 'AR/VR & Metaverse Solutions',
      description: 'Augmented and virtual reality solutions for business applications',
      icon: Monitor,
      features: [
        'AR/VR application development',
        '3D modeling and animation',
        'Immersive training and simulation',
        'Virtual showroom and retail solutions',
        'AR/VR hardware integration',
        'Performance optimization and testing'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'AR/VR Services'
    },
    {
      title: 'API Management & Integration',
      description: 'Comprehensive API strategy, development, and management platform',
      icon: Code,
      features: [
        'API design and development',
        'API gateway setup and management',
        'Third-party API integration',
        'API security and authentication',
        'API analytics and monitoring',
        'Microservices architecture design'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'API Services'
    },
    {
      title: 'Green IT & Sustainability Solutions',
      description: 'Environmentally conscious IT solutions and carbon footprint reduction',
      icon: Globe,
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint assessment and reduction',
        'Green cloud computing solutions',
        'Sustainable hardware procurement',
        'IT waste management and recycling',
        'Environmental compliance and reporting'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-16 weeks',
      category: 'Sustainability Services'
    },
    {
      title: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Business continuity planning',
        'Recovery time objective optimization',
        'Testing and validation services',
        'Compliance and audit support'
      ],
      pricing: '$12,000 - $60,000/month',
      delivery: '8-20 weeks',
      category: 'Recovery Services'
    },
    {
      title: 'FinTech & Payment Solutions',
      description: 'Financial technology solutions and payment system integration',
      icon: Database,
      features: [
        'Payment gateway integration',
        'Financial API development',
        'Compliance and regulatory solutions',
        'Fraud detection and prevention',
        'Digital banking solutions',
        'Cryptocurrency integration'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'FinTech Services'
    },
    {
      title: 'Hyperconverged Infrastructure (HCI)',
      description: 'Integrated compute, storage, and networking solutions for modern data centers',
      icon: Server,
      features: [
        'HCI platform design and implementation',
        'Storage virtualization and management',
        'Network virtualization and SDN',
        'Automated resource provisioning',
        'Disaster recovery and backup solutions',
        'Performance monitoring and optimization'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Infrastructure Services'
    },
    {
      title: 'Multi-Cloud Management & Orchestration',
      description: 'Unified management and orchestration across multiple cloud providers',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture',
        'Cloud cost optimization and FinOps',
        'Cross-cloud workload migration',
        'Unified monitoring and management',
        'Cloud security and compliance',
        'Automated scaling and resource management'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Cloud Services'
    },
    {
      title: 'Robotic Process Automation (RPA)',
      description: 'Intelligent automation of repetitive business processes and workflows',
      icon: Settings,
      features: [
        'Process discovery and analysis',
        'RPA bot development and deployment',
        'Workflow automation and optimization',
        'Integration with existing systems',
        'Process monitoring and analytics',
        'Change management and training'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Automation Services'
    },
    {
      title: 'Data Center Modernization',
      description: 'Complete data center transformation and modernization services',
      icon: Server,
      features: [
        'Data center assessment and planning',
        'Infrastructure modernization',
        'Energy efficiency optimization',
        'Cooling and power management',
        'Security and access control',
        'Compliance and certification'
      ],
      pricing: '$50,000 - $300,000/month',
      delivery: '20-40 weeks',
      category: 'Data Center Services'
    },
    {
      title: 'IT Service Management (ITSM)',
      description: 'Comprehensive IT service management platform and process optimization',
      icon: Settings,
      features: [
        'ITIL framework implementation',
        'Service desk and ticketing system',
        'Change and release management',
        'Asset and configuration management',
        'Service level management',
        'Knowledge management system'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '8-16 weeks',
      category: 'ITSM Services'
    },
    {
      title: 'Compliance & Governance Solutions',
      description: 'Regulatory compliance and IT governance framework implementation',
      icon: Shield,
      features: [
        'SOX, GDPR, HIPAA compliance',
        'IT governance framework design',
        'Risk assessment and management',
        'Audit preparation and support',
        'Policy development and implementation',
        'Training and awareness programs'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Compliance Services'
    },
    {
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization',
      icon: HardDrive,
      features: [
        'Asset discovery and inventory',
        'Software license management',
        'Hardware lifecycle management',
        'Cost optimization and planning',
        'Vendor management',
        'Disposal and recycling services'
      ],
      pricing: '$6,000 - $30,000/month',
      delivery: '6-12 weeks',
      category: 'Asset Management Services'
    },
    {
      title: 'Network Performance Optimization',
      description: 'Advanced network performance monitoring and optimization services',
      icon: Network,
      features: [
        'Network performance analysis',
        'Bandwidth optimization',
        'Quality of Service (QoS) implementation',
        'Network troubleshooting and resolution',
        'Performance monitoring and alerting',
        'Capacity planning and scaling'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '8-16 weeks',
      category: 'Network Services'
    },
    {
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification support',
      icon: Users,
      features: [
        'Technical skills training',
        'Certification exam preparation',
        'Hands-on lab environments',
        'Custom training curriculum',
        'Instructor-led and self-paced options',
        'Progress tracking and reporting'
      ],
      pricing: '$4,000 - $25,000/month',
      delivery: '4-12 weeks',
      category: 'Training Services'
    },
    {
      title: 'Smart City & IoT Solutions',
      description: 'IoT solutions for smart cities and urban infrastructure',
      icon: Globe,
      features: [
        'Smart city infrastructure design',
        'IoT sensor network deployment',
        'Real-time data collection and analysis',
        'Urban mobility solutions',
        'Environmental monitoring',
        'Citizen engagement platforms'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Smart City Services'
    },
    {
      title: 'Healthcare IT Solutions',
      description: 'Specialized IT solutions for healthcare organizations',
      icon: Heart,
      features: [
        'Electronic Health Records (EHR) integration',
        'HIPAA compliance and security',
        'Telemedicine platform development',
        'Medical device integration',
        'Healthcare data analytics',
        'Patient portal development'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '12-24 weeks',
      category: 'Healthcare IT Services'
    },
    {
      title: 'Manufacturing IT Solutions',
      description: 'IT solutions for manufacturing and industrial automation',
      icon: Settings,
      features: [
        'Industrial IoT implementation',
        'Manufacturing execution systems (MES)',
        'Supply chain optimization',
        'Quality control automation',
        'Predictive maintenance systems',
        'Industrial security solutions'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'Manufacturing IT Services'
    },
    {
      title: 'Retail IT Solutions',
      description: 'Specialized IT solutions for retail and e-commerce',
      icon: ShoppingCart,
      features: [
        'Point of sale (POS) systems',
        'Inventory management systems',
        'Customer relationship management (CRM)',
        'E-commerce platform development',
        'Omnichannel retail solutions',
        'Retail analytics and insights'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Retail IT Services'
    },
    {
      title: 'Education IT Solutions',
      description: 'IT solutions for educational institutions',
      icon: GraduationCap,
      features: [
        'Learning management systems (LMS)',
        'Student information systems (SIS)',
        'Virtual classroom platforms',
        'Educational content management',
        'Student assessment tools',
        'Campus network infrastructure'
      ],
      pricing: '$10,000 - $60,000/month',
      delivery: '8-16 weeks',
      category: 'Education IT Services'
    },
    {
      title: 'Government IT Solutions',
      description: 'IT solutions for government agencies and public sector',
      icon: Building,
      features: [
        'Citizen service portals',
        'Government data management',
        'Public safety systems',
        'E-governance platforms',
        'Compliance and security',
        'Inter-agency integration'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Government IT Services'
    },
    {
      title: 'Financial Services IT Solutions',
      description: 'Specialized IT solutions for financial institutions',
      icon: PieChart,
      features: [
        'Core banking systems',
        'Risk management systems',
        'Regulatory compliance solutions',
        'Fraud detection and prevention',
        'Payment processing systems',
        'Financial data analytics'
      ],
      pricing: '$30,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Financial Services IT'
    },
    {
      title: 'Energy & Utilities IT Solutions',
      description: 'IT solutions for energy and utilities companies',
      icon: Zap,
      features: [
        'Smart grid implementation',
        'Energy management systems',
        'Asset management solutions',
        'Customer billing systems',
        'Environmental monitoring',
        'Regulatory compliance'
      ],
      pricing: '$25,000 - $150,000/month',
      delivery: '16-32 weeks',
      category: 'Energy IT Services'
    },
    {
      title: 'Transportation IT Solutions',
      description: 'IT solutions for transportation and logistics',
      icon: Truck,
      features: [
        'Fleet management systems',
        'Route optimization',
        'Real-time tracking',
        'Supply chain visibility',
        'Transportation analytics',
        'Integration with logistics partners'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'Transportation IT Services'
    },
    {
      title: 'Real Estate IT Solutions',
      description: 'IT solutions for real estate and property management',
      icon: Home,
      features: [
        'Property management systems',
        'Tenant portal development',
        'Facility management solutions',
        'Real estate analytics',
        'Property valuation tools',
        'Integration with real estate platforms'
      ],
      pricing: '$15,000 - $80,000/month',
      delivery: '10-20 weeks',
      category: 'Real Estate IT Services'
    },
    {
      title: 'Entertainment & Media IT Solutions',
      description: 'IT solutions for entertainment and media companies',
      icon: Video,
      features: [
        'Content management systems',
        'Streaming platform development',
        'Digital rights management',
        'Media asset management',
        'Audience analytics',
        'Content delivery optimization'
      ],
      pricing: '$20,000 - $120,000/month',
      delivery: '12-24 weeks',
      category: 'Media IT Services'
    },
    {
      title: 'Non-Profit IT Solutions',
      description: 'IT solutions for non-profit organizations',
      icon: Heart,
      features: [
        'Donor management systems',
        'Volunteer management platforms',
        'Fundraising solutions',
        'Program management tools',
        'Impact measurement systems',
        'Grant management solutions'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-16 weeks',
      category: 'Non-Profit IT Services'
    },
    {
      title: 'Startup IT Solutions',
      description: 'Scalable IT solutions for startups and growing businesses',
      icon: Rocket,
      features: [
        'MVP development and deployment',
        'Scalable infrastructure setup',
        'Rapid prototyping',
        'Cost-effective solutions',
        'Growth planning and scaling',
        'Technology stack optimization'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '4-12 weeks',
      category: 'Startup IT Services'
    },
    {
      title: 'Enterprise IT Solutions',
      description: 'Comprehensive IT solutions for large enterprises',
      icon: Building,
      features: [
        'Enterprise architecture design',
        'Legacy system modernization',
        'Digital transformation',
        'Enterprise integration',
        'Scalability and performance',
        'Enterprise security'
      ],
      pricing: '$50,000 - $500,000/month',
      delivery: '20-40 weeks',
      category: 'Enterprise IT Services'
    },
    {
      title: 'SMB IT Solutions',
      description: 'Cost-effective IT solutions for small and medium businesses',
      icon: Users,
      features: [
        'IT infrastructure setup',
        'Cloud migration',
        'Security implementation',
        'Backup and recovery',
        'IT support and maintenance',
        'Growth planning'
      ],
      pricing: '$2,000 - $15,000/month',
      delivery: '2-8 weeks',
      category: 'SMB IT Services'
    },
    {
      title: 'Remote Work IT Solutions',
      description: 'IT solutions for remote and hybrid work environments',
      icon: Home,
      features: [
        'Remote access solutions',
        'Collaboration tools setup',
        'Security for remote workers',
        'VPN and network access',
        'Device management',
        'Productivity monitoring'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '2-6 weeks',
      category: 'Remote Work IT Services'
    },
    {
      title: 'Digital Transformation Services',
      description: 'Comprehensive digital transformation consulting and implementation',
      icon: Zap,
      features: [
        'Digital strategy development',
        'Process digitization',
        'Technology modernization',
        'Change management',
        'Digital culture transformation',
        'ROI measurement and optimization'
      ],
      pricing: '$25,000 - $200,000/month',
      delivery: '16-32 weeks',
      category: 'Digital Transformation Services'
    },
    {
      title: 'IT Outsourcing Services',
      description: 'Complete IT outsourcing and managed services',
      icon: Users,
      features: [
        '24/7 IT support',
        'Infrastructure management',
        'Security monitoring',
        'Backup and recovery',
        'Software updates and maintenance',
        'Strategic IT planning'
      ],
      pricing: '$5,000 - $50,000/month',
      delivery: '2-8 weeks',
      category: 'IT Outsourcing Services'
    },
    {
      title: 'IT Project Management',
      description: 'Professional IT project management and delivery services',
      icon: ClipboardList,
      features: [
        'Project planning and execution',
        'Resource allocation and management',
        'Risk assessment and mitigation',
        'Quality assurance',
        'Stakeholder communication',
        'Project delivery and handover'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '4-16 weeks',
      category: 'Project Management Services'
    },
    {
      title: 'IT Vendor Management',
      description: 'Comprehensive IT vendor selection and management services',
      icon: Building,
      features: [
        'Vendor evaluation and selection',
        'Contract negotiation',
        'Vendor performance monitoring',
        'Cost optimization',
        'Relationship management',
        'Risk assessment and mitigation'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '4-12 weeks',
      category: 'Vendor Management Services'
    },
    {
      title: 'IT Risk Management',
      description: 'Comprehensive IT risk assessment and management services',
      icon: Shield,
      features: [
        'Risk assessment and analysis',
        'Risk mitigation strategies',
        'Compliance monitoring',
        'Security audits',
        'Business continuity planning',
        'Risk reporting and monitoring'
      ],
      pricing: '$10,000 - $50,000/month',
      delivery: '6-16 weeks',
      category: 'Risk Management Services'
    },
    {
      title: 'IT Performance Optimization',
      description: 'IT performance analysis and optimization services',
      icon: TrendingUp,
      features: [
        'Performance monitoring and analysis',
        'Bottleneck identification',
        'Optimization recommendations',
        'Capacity planning',
        'Cost optimization',
        'Performance reporting'
      ],
      pricing: '$8,000 - $40,000/month',
      delivery: '6-12 weeks',
      category: 'Performance Optimization Services'
    },
    {
      title: 'IT Innovation Lab',
      description: 'IT innovation and research services for emerging technologies',
      icon: Brain,
      features: [
        'Technology research and evaluation',
        'Proof of concept development',
        'Innovation strategy development',
        'Emerging technology adoption',
        'Innovation project management',
        'Technology trend analysis'
      ],
      pricing: '$15,000 - $75,000/month',
      delivery: '8-20 weeks',
      category: 'Innovation Services'
    },
    {
      title: 'IT Excellence Center',
      description: 'Comprehensive IT excellence and best practices implementation',
      icon: Award,
      features: [
        'Best practices implementation',
        'Process optimization',
        'Quality management',
        'Continuous improvement',
        'Excellence benchmarking',
        'Performance measurement'
      ],
      pricing: '$20,000 - $100,000/month',
      delivery: '12-24 weeks',
      category: 'Excellence Services'
    }
  ];

  const technologies = [
    { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
    { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
    { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
    { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
  ];

  const benefits = [
    {
      title: 'Reduced Downtime',
      description: 'Proactive monitoring and maintenance',
      icon: Clock,
      stat: '99.9%'
    },
    {
      title: 'Cost Savings',
      description: 'Optimized infrastructure and processes',
      icon: Zap,
      stat: '40%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade protection',
      icon: Shield,
      stat: '100%'
    },
    {
      title: 'Scalability',
      description: 'Flexible and scalable solutions',
      icon: TrendingUp,
      stat: 'Unlimited'
    }
  ];
=======
const technologies = [
  { name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
<<<<<<< HEAD
=======

=======
    category: 'Performance'
  }
];

const categories = [
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Support',
  'Data Management',
  'Development',
  'Consulting',
  'Communication',
  'Mobile Management',
  'Asset Management',
  'Compliance',
  'Monitoring',
  'Training',
  'Disaster Recovery',
  'Project Management',
  'Cloud Security',
  'Assessment',
  'DevOps',
  'Data Protection',
  'Software Management',
  'Mobile Management',
  'Asset Management',
  'Training',
  'Virtualization',
  'Compliance',
  'Project Management',
  'Cost Optimization'
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience in enterprise IT solutions"
  },
  {
    icon: Star,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for your critical systems"
  },
  {
    icon: Users,
    title: "Proven Track Record",
    description: "Successfully completed 500+ IT projects for businesses of all sizes"
  },
  {
    icon: Award,
    title: "Cutting-Edge Technology",
    description: "Latest technologies and best practices to keep your systems modern and secure"
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade protection',
    stat: '100%'
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "We analyze your current IT infrastructure and identify areas for improvement"
  },
  {
    step: "02",
    title: "Planning",
    description: "Develop a comprehensive strategy tailored to your business needs and goals"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute the plan with minimal disruption to your business operations"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing maintenance and support to ensure optimal performance"
  }
];

export default function ITServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and technical support. Expert team delivering enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, IT support, technical consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
<div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<div className="flex items-center justify-center mb-6">
                  <Server className="h-16 w-16 text-green-400 mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                IT{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support to keep your business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive digital transformation
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
whileHover={{ y: -5 }} ">
                  <div className="flex items-center justify-between mb-4">
                  <div className="text-green-600 group-hover:text-emerald-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-green-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 hover: bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional IT solutions that drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through expertise, reliability, and customer-focused solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology for delivering successful IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
=======
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
                  </div>
                  </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to discuss your IT needs and get a customized solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/micro-saas" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; { title: 'AI-Powered IT Operations',description: 'Intelligent IT operations with AI-driven automation and optimization',icon: Brain,features: [ 'AI-powered incident detection and resolution,Predictive maintenance and capacity planning,Automated root cause analysis,Intelligent ticket routing and prioritization,Performance optimization recommendations,Self-healing infrastructure capabilities' ],pricing: '$6,000 - $35,000/month',delivery: '8-16 weeks',category: 'AI Operations' },{ title: 'Zero-Trust Security Architecture',description: 'Comprehensive zero-trust security implementation and management',icon: Shield,features: [ 'Identity and access management (IAM) implementation,Micro-segmentation and network isolation,Continuous security monitoring and validation,Privileged access management (PAM),Security policy automation,Threat detection and response' ],pricing: '$8,000 - $45,000/month',delivery: '10-20 weeks',category: 'Security Services' },{ title: 'Edge Computing Infrastructure',description: 'Distributed edge computing solutions for low-latency applications',icon: Cpu,features: [ 'Edge data center design and deployment,Edge AI and machine learning integration,Content delivery network optimization,Real-time data processing at the edge,Edge security and device management,Hybrid cloud-edge architecture' ],pricing: '$7,000 - $40,000/month',delivery: '8-18 weeks',category: 'Edge Services' },{ title: 'Hyperautomation Platform',description: 'End-to-end business process automation with AI and RPA',icon: Settings,features: [ 'Robotic Process Automation (RPA) implementation,Intelligent document processing,Workflow automation and orchestration,AI-powered decision making,Process mining and optimization,Integration with enterprise systems' ],pricing: '$5,000 - $30,000/month',delivery: '6-14 weeks',category: 'Automation Services' },{ title: 'Multi-Cloud Management Platform',description: 'Unified management and optimization across multiple cloud providers',icon: Cloud,features: [ 'Multi-cloud cost optimization and governance,Unified monitoring and management dashboard,Cloud migration and workload placement,Disaster recovery across clouds,Compliance and security management,Performance optimization and scaling' ],pricing: '$8,000 - $50,000/month',delivery: '10-20 weeks',category: 'Cloud Services' },{ title: 'Cybersecurity Operations Center (SOC)',description: '24/7 security monitoring and incident response services',icon: Shield,features: [ '24/7 security monitoring and threat detection,Incident response and forensic analysis,Security information and event management (SIEM),Threat intelligence and hunting,Compliance monitoring and reporting,Security awareness training' ],pricing: '$10,000 - $60,000/month',delivery: '8-16 weeks',category: 'Security Services' },{ title: 'Digital Twin Technology',description: 'Digital twin creation and management for physical assets and processes',icon: Monitor,features: [ 'Digital twin modeling and simulation,Real-time data integration and synchronization,Predictive analytics and maintenance,Performance optimization and testing,Virtual commissioning and training,Integration with IoT and AI systems' ],pricing: '$12,000 - $75,000/month',delivery: '12-24 weeks',category: 'Digital Twin Services' },{ title: 'Autonomous IT Infrastructure',description: 'Self-managing and self-healing IT infrastructure solutions',icon: Cpu,features: [ 'Self-healing infrastructure capabilities,Automated scaling and resource allocation,Intelligent capacity planning,Predictive failure prevention,Automated patch management,Self-optimizing performance tuning' ],pricing: '$15,000 - $80,000/month',delivery: '16-28 weeks',category: 'Autonomous Services' },{ title: 'Quantum-Safe Cryptography',description: 'Post-quantum cryptography implementation and migration services',icon: Lock,features: [ 'Quantum-safe algorithm implementation,Cryptographic key management,Secure communication protocols,Data encryption and protection,Compliance with quantum-safe standards,Legacy system migration support' ],pricing: '$8,000 - $45,000/month',delivery: '10-20 weeks',category: 'Security Services' },{ title: 'Space Technology Infrastructure',description: 'Ground station and satellite communication infrastructure services',icon: Satellite,features: [ 'Ground station design and deployment,Satellite communication systems,Space data processing and analytics,Orbital debris monitoring,Space weather prediction systems,Satellite constellation management' ],pricing: '$20,000 - $150,000/month',delivery: '20-40 weeks',category: 'Space Services' },{ title: 'Environmental Monitoring IT',description: 'IT infrastructure for environmental and climate monitoring systems',icon: TreePine,features: [ 'Environmental sensor network deployment,Climate data collection and processing,Real-time environmental monitoring,Data analytics and reporting,Compliance monitoring systems,Integration with government databases' ],pricing: '$6,000 - $35,000/month',delivery: '8-16 weeks',category: 'Environmental Services' },{ title: 'FinTech & Payment Solutions',description: 'Financial technology solutions and payment system integration',icon: Databas e,features: [ 'Payment gateway integration','Financial API development','Compliance and regulatory solutions','Fraud detection and prevention','Digital banking solutions','Cryptocurrency integration' ],pricing: '$8,000 - $60,000/month',delivery: '10-24 weeks',category: 'FinTech Services' },{ title: 'AI-Powered IT Operations (AIOps)',description: 'Intelligent IT operations with machine learning and automation',icon: Brain,features: [ 'Automated incident detection and resolution','Predictive maintenance and capacity planning','Intelligent root cause analysis','Automated remediation workflows','Performance optimization recommendations','Cost optimization and resource allocation' ],pricing: '$12,000 - $50,000/month',delivery: '8-16 weeks',category: 'AIOps Services' },{ title: 'Zero-Trust Security Architecture',description: 'Comprehensive zero-trust security implementation and management',icon: Lock,features: [ 'Identity and access management (IAM)','Micro-segmentation and network isolation','Continuous security monitoring','Privileged access management (PAM)','Data loss prevention (DLP)','Security orchestration and automation' ],pricing: '$15,000 - $75,000/month',delivery: '12-20 weeks',category: 'Security Services' },{ title: 'Hybrid Cloud Management',description: 'Seamless hybrid cloud strategy and management across multiple platforms',icon: Cloud,features: [ 'Multi-cloud architecture design','Cloud migration and optimization','Cost management and optimization','Disaster recovery across clouds','Security and compliance management','Performance monitoring and optimization' ],pricing: '$10,000 - $60,000/month',delivery: '10-18 weeks',category: 'Cloud Services' },{ title: 'Edge Computing Infrastructure',description: 'Edge computing solutions for real-time processing and low-latency applications',icon: Cpu,features: [ 'Edge server deployment and management','Real-time data processing','Edge AI and machine learning','Content delivery network (CDN) optimization','IoT device integration','Edge security and monitoring' ],pricing: '$8,000 - $40,000/month',delivery: '8-16 weeks',category: 'Edge Computing Services' },{ title: 'Data Center Modernization',description: 'Complete data center transformation and modernization services',icon: Server,features: [ 'Data center assessment and planning','Infrastructure modernization','Energy efficiency optimization','Cooling and power management','Security and access control','Compliance and certification' ],pricing: '$25,000 - $150,000/month',delivery: '16-32 weeks',category: 'Data Center Services' },{ title: 'IT Service Management (ITSM)',description: 'Comprehensive IT service management platform and process optimization',icon: Settings,features: [ 'ITIL framework implementation','Service desk and ticketing system','Change and release management','Asset and configuration management','Service level management','Knowledge management system' ],pricing: '$5,000 - $30,000/month',delivery: '6-14 weeks',category: 'ITSM Services' },{ title: 'Compliance & Governance Solutions',description: 'Regulatory compliance and IT governance framework implementation',icon: Shield,features: [ 'SOX,GDPR,HIPAA compliance','IT governance framework design','Risk assessment and management','Audit preparation and support','Policy development and implementation','Training and awareness programs' ],pricing: '$8,000 - $45,000/month',delivery: '8-16 weeks',category: 'Compliance Services' },{ title: 'IT Asset Management',description: 'Comprehensive IT asset lifecycle management and optimization',icon: HardDrive,features: [ 'Asset discovery and inventory','Software license management','Hardware lifecycle management','Cost optimization and planning','Vendor management','Disposal and recycling services' ],pricing: '$3,000 - $20,000/month',delivery: '4-10 weeks',category: 'Asset Management Services' },{ title: 'Network Performance Optimization',description: 'Advanced network performance monitoring and optimization services',icon: Network,features: [ 'Network performance analysis','Bandwidth optimization','Quality of Service (QoS) implementation','Network troubleshooting and resolution','Performance monitoring and alerting','Capacity planning and scaling' ],pricing: '$4,000 - $25,000/month',delivery: '6-12 weeks',category: 'Network Services' },{ title: 'IT Training & Certification',description: 'Comprehensive IT training programs and certification support',icon: Users,features: [ 'Technical skills training','Certification exam preparation','Hands-on lab environments','Custom training curriculum','Instructor-led and self-paced options','Progress tracking and reporting' ],pricing: '$2,000 - $15,000/month',delivery: '2-8 weeks',category: 'Training Services' },{ title: 'IT Consulting & Strategy',description: 'Strategic IT consulting and technology roadmap development',icon: Target,features: [ 'IT strategy and roadmap development','Technology assessment and evaluation','Digital transformation planning','Vendor selection and evaluation','ROI analysis and business case development','Change management and adoption' ],pricing: '$5,000 - $35,000/month',delivery: '4-12 weeks',category: 'Consulting Services' },{ title: 'Advanced Threat Detection & Response',description: 'Next-generation security operations center with AI-powered threat hunting',icon: Shield,features: [ 'AI-powered threat detection and analysis','Behavioral analytics and anomaly detection','Automated incident response and containment','Threat intelligence integration','Forensic analysis and investigation','Security orchestration and automation' ],pricing: '$15,000 - $80,000/month',delivery: '8-16 weeks',category: 'Security Services' },{ title: 'Cloud-Native Application Development',description: 'Modern cloud-native applications with microservices architecture',icon: Code,features: [ 'Microservices architecture design','Container orchestration with Kubernetes','Serverless application development','API gateway and service mesh implementation','Cloud-native CI/CD pipelines','Observability and monitoring setup' ],pricing: '$12,000 - $60,000/month',delivery: '10-20 weeks',category: 'Development Services' },{ title: 'Data Lake & Analytics Platform',description: 'Enterprise data lake with advanced analytics and machine learning capabilities',icon: Database,features: [ 'Data lake architecture and implementation','ETL/ELT pipeline development','Real-time streaming analytics','Machine learning model deployment','Data governance and security','Business intelligence dashboards' ],pricing: '$20,000 - $100,000/month',delivery: '12-24 weeks',category: 'Data Services' },{ title: 'Hybrid Multi-Cloud Architecture',description: 'Seamless hybrid cloud strategy across AWS,Azure,and Google Cloud',icon: Cloud,features: [ 'Multi-cloud architecture design','Cloud migration and optimization','Cross-cloud data synchronization','Unified monitoring and management','Disaster recovery across clouds','Cost optimization and FinOps' ],pricing: '$25,000 - $120,000/month',delivery: '16-32 weeks',category: 'Cloud Services' },{ title: 'AI-Powered IT Operations (AIOps)',description: 'Intelligent IT operations with machine learning and predictive analytics',icon: Brain,features: [ 'Automated incident detection and resolution','Predictive maintenance and capacity planning','Intelligent root cause analysis','Automated remediation workflows','Performance optimization recommendations','Cost optimization and resource allocation' ],pricing: '$18,000 - $75,000/month',delivery: '10-20 weeks',category: 'AIOps Services' },{ title: 'Zero-Trust Security Implementation',description: 'Comprehensive zero-trust security architecture and implementation',icon: Lock,features: [ 'Identity and access management (IAM)','Micro-segmentation and network isolation','Continuous security monitoring','Privileged access management (PAM)','Data loss prevention (DLP)','Security orchestration and automation' ],pricing: '$20,000 - $100,000/month',delivery: '12-24 weeks',category: 'Security Services' },{ title: 'Edge Computing & IoT Platform',description: 'Edge computing infrastructure for IoT and real-time applications',icon: Cpu,features: [ 'Edge server deployment and management','IoT device integration and management','Real-time data processing and analytics','Edge AI and machine learning','Content delivery network (CDN) optimization','Edge security and monitoring' ],pricing: '$15,000 - $80,000/month',delivery: '10-20 weeks',category: 'Edge Computing Services' },{ title: 'Blockchain & Web3 Solutions',description: 'Blockchain development,smart contracts,and decentralized applications',icon: Network,features: [ 'Smart contract development and auditing','DeFi and NFT platform development','Blockchain integration and consulting','Cryptocurrency wallet development','Tokenomics and governance design','Cross-chain interoperability solutions' ],pricing: '$25,000 - $150,000/month',delivery: '16-32 weeks',category: 'Blockchain Services' },{ title: 'Quantum Computing Integration',description: 'Quantum computing strategy,algorithm development,and hybrid solutions',icon: Cpu,features: [ 'Quantum algorithm development','Quantum computing strategy consulting','Hybrid classical-quantum solutions','Quantum security and cryptography','Quantum machine learning applications','Quantum hardware evaluation and selection' ],pricing: '$50,000 - $300,000/month',delivery: '20-40 weeks',category: 'Quantum Services' },{ title: '5G & Network Modernization',description: '5G network implementation and legacy network modernization',icon: Wifi,features: [ '5G network planning and deployment','Network slicing and optimization','Legacy network migration','Private 5G network setup','Network performance monitoring','Edge computing integration' ],pricing: '$30,000 - $200,000/month',delivery: '16-32 weeks',category: 'Network Services' },{ title: 'AR/VR & Metaverse Solutions',description: 'Augmented and virtual reality solutions for business applications',icon: Monitor,features: [ 'AR/VR application development','3D modeling and animation','Immersive training and simulation','Virtual showroom and retail solutions','AR/VR hardware integration','Performance optimization and testing' ],pricing: '$20,000 - $120,000/month',delivery: '12-24 weeks',category: 'AR/VR Services' },{ title: 'API Management & Integration',description: 'Comprehensive API strategy,development,and management platform',icon: Code,features: [ 'API design and development','API gateway setup and management','Third-party API integration','API security and authentication','API analytics and monitoring','Microservices architecture design' ],pricing: '$10,000 - $50,000/month',delivery: '8-16 weeks',category: 'API Services' },{ title: 'Green IT & Sustainability Solutions',description: 'Environmentally conscious IT solutions and carbon footprint reduction',icon: Globe,features: [ 'Energy-efficient infrastructure design','Carbon footprint assessment and reduction','Green cloud computing solutions','Sustainable hardware procurement','IT waste management and recycling','Environmental compliance and reporting' ],pricing: '$8,000 - $40,000/month',delivery: '6-16 weeks',category: 'Sustainability Services' },{ title: 'Disaster Recovery & Business Continuity',description: 'Comprehensive disaster recovery planning and implementation',icon: Shield,features: [ 'Disaster recovery strategy development','Backup and replication solutions','Business continuity planning','Recovery time objective optimization','Testing and validation services','Compliance and audit support' ],pricing: '$12,000 - $60,000/month',delivery: '8-20 weeks',category: 'Recovery Services' },{ title: 'FinTech & Payment Solutions',description: 'Financial technology solutions and payment system integration',icon: Database,features: [ 'Payment gateway integration','Financial API development','Compliance and regulatory solutions','Fraud detection and prevention','Digital banking solutions','Cryptocurrency integration' ],pricing: '$15,000 - $100,000/month',delivery: '12-24 weeks',category: 'FinTech Services' },{ title: 'Hyperconverged Infrastructure (HCI)',description: 'Integrated compute,storage,and networking solutions for modern data centers',icon: Server,features: [ 'HCI platform design and implementation','Storage virtualization and management','Network virtualization and SDN','Automated resource provisioning','Disaster recovery and backup solutions','Performance monitoring and optimization' ],pricing: '$20,000 - $100,000/month',delivery: '12-24 weeks',category: 'Infrastructure Services' },{ title: 'Multi-Cloud Management & Orchestration',description: 'Unified management and orchestration across multiple cloud providers',icon: Cloud,features: [ 'Multi-cloud strategy and architecture','Cloud cost optimization and FinOps','Cross-cloud workload migration','Unified monitoring and management','Cloud security and compliance','Automated scaling and resource management' ],pricing: '$15,000 - $80,000/month',delivery: '10-20 weeks',category: 'Cloud Services' },{ title: 'Robotic Process Automation (RPA)',description: 'Intelligent automation of repetitive business processes and workflows',icon: Settings,features: [ 'Process discovery and analysis','RPA bot development and deployment','Workflow automation and optimization','Integration with existing systems','Process monitoring and analytics','Change management and training' ],pricing: '$8,000 - $40,000/month',delivery: '8-16 weeks',category: 'Automation Services' },{ title: 'Data Center Modernization',description: 'Complete data center transformation and modernization services',icon: Server,features: [ 'Data center assessment and planning','Infrastructure modernization','Energy efficiency optimization','Cooling and power management','Security and access control','Compliance and certification' ],pricing: '$50,000 - $300,000/month',delivery: '20-40 weeks',category: 'Data Center Services' },{ title: 'IT Service Management (ITSM)',description: 'Comprehensive IT service management platform and process optimization',icon: Settings,features: [ 'ITIL framework implementation','Service desk and ticketing system','Change and release management','Asset and configuration management','Service level management','Knowledge management system' ],pricing: '$10,000 - $50,000/month',delivery: '8-16 weeks',category: 'ITSM Services' },{ title: 'Compliance & Governance Solutions',description: 'Regulatory compliance and IT governance framework implementation',icon: Shield,features: [ 'SOX,GDPR,HIPAA compliance','IT governance framework design','Risk assessment and management','Audit preparation and support','Policy development and implementation','Training and awareness programs' ],pricing: '$15,000 - $80,000/month',delivery: '10-20 weeks',category: 'Compliance Services' },{ title: 'IT Asset Management',description: 'Comprehensive IT asset lifecycle management and optimization',icon: HardDrive,features: [ 'Asset discovery and inventory','Software license management','Hardware lifecycle management','Cost optimization and planning','Vendor management','Disposal and recycling services' ],pricing: '$6,000 - $30,000/month',delivery: '6-12 weeks',category: 'Asset Management Services' },{ title: 'Network Performance Optimization',description: 'Advanced network performance monitoring and optimization services',icon: Network,features: [ 'Network performance analysis','Bandwidth optimization','Quality of Service (QoS) implementation','Network troubleshooting and resolution','Performance monitoring and alerting','Capacity planning and scaling' ],pricing: '$8,000 - $40,000/month',delivery: '8-16 weeks',category: 'Network Services' },{ title: 'IT Training & Certification',description: 'Comprehensive IT training programs and certification support',icon: Users,features: [ 'Technical skills training','Certification exam preparation','Hands-on lab environments','Custom training curriculum','Instructor-led and self-paced options','Progress tracking and reporting' ],pricing: '$4,000 - $25,000/month',delivery: '4-12 weeks',category: 'Training Services' },{ title: 'Smart City & IoT Solutions',description: 'IoT solutions for smart cities and urban infrastructure',icon: Globe,features: [ 'Smart city infrastructure design','IoT sensor network deployment','Real-time data collection and analysis','Urban mobility solutions','Environmental monitoring','Citizen engagement platforms' ],pricing: '$30,000 - $200,000/month',delivery: '16-32 weeks',category: 'Smart City Services' },{ title: 'Healthcare IT Solutions',description: 'Specialized IT solutions for healthcare organizations',icon: Heart,features: [ 'Electronic Health Records (EHR) integration','HIPAA compliance and security','Telemedicine platform development','Medical device integration','Healthcare data analytics','Patient portal development' ],pricing: '$25,000 - $150,000/month',delivery: '12-24 weeks',category: 'Healthcare IT Services' },{ title: 'Manufacturing IT Solutions',description: 'IT solutions for manufacturing and industrial automation',icon: Settings,features: [ 'Industrial IoT implementation','Manufacturing execution systems (MES)','Supply chain optimization','Quality control automation','Predictive maintenance systems','Industrial security solutions' ],pricing: '$20,000 - $120,000/month',delivery: '12-24 weeks',category: 'Manufacturing IT Services' },{ title: 'Retail IT Solutions',description: 'Specialized IT solutions for retail and e-commerce',icon: ShoppingCart,features: [ 'Point of sale (POS) systems','Inventory management systems','Customer relationship management (CRM)','E-commerce platform development','Omnichannel retail solutions','Retail analytics and insights' ],pricing: '$15,000 - $80,000/month',delivery: '10-20 weeks',category: 'Retail IT Services' },{ title: 'Education IT Solutions',description: 'IT solutions for educational institutions',icon: GraduationCap,features: [ 'Learning management systems (LMS)','Student information systems (SIS)','Virtual classroom platforms','Educational content management','Student assessment tools','Campus network infrastructure' ],pricing: '$10,000 - $60,000/month',delivery: '8-16 weeks',category: 'Education IT Services' },{ title: 'Government IT Solutions',description: 'IT solutions for government agencies and public sector',icon: Building,features: [ 'Citizen service portals','Government data management','Public safety systems','E-governance platforms','Compliance and security','Inter-agency integration' ],pricing: '$25,000 - $150,000/month',delivery: '16-32 weeks',category: 'Government IT Services' },{ title: 'Financial Services IT Solutions',description: 'Specialized IT solutions for financial institutions',icon: PieChart,features: [ 'Core banking systems','Risk management systems','Regulatory compliance solutions','Fraud detection and prevention','Payment processing systems','Financial data analytics' ],pricing: '$30,000 - $200,000/month',delivery: '16-32 weeks',category: 'Financial Services IT' },{ title: 'Energy & Utilities IT Solutions',description: 'IT solutions for energy and utilities companies',icon: Zap,features: [ 'Smart grid implementation','Energy management systems','Asset management solutions','Customer billing systems','Environmental monitoring','Regulatory compliance' ],pricing: '$25,000 - $150,000/month',delivery: '16-32 weeks',category: 'Energy IT Services' },{ title: 'Transportation IT Solutions',description: 'IT solutions for transportation and logistics',icon: Truck,features: [ 'Fleet management systems','Route optimization','Real-time tracking','Supply chain visibility','Transportation analytics','Integration with logistics partners' ],pricing: '$20,000 - $120,000/month',delivery: '12-24 weeks',category: 'Transportation IT Services' },{ title: 'Real Estate IT Solutions',description: 'IT solutions for real estate and property management',icon: Home,features: [ 'Property management systems','Tenant portal development','Facility management solutions','Real estate analytics','Property valuation tools','Integration with real estate platforms' ],pricing: '$15,000 - $80,000/month',delivery: '10-20 weeks',category: 'Real Estate IT Services' },{ title: 'Entertainment & Media IT Solutions',description: 'IT solutions for entertainment and media companies',icon: Video,features: [ 'Content management systems','Streaming platform development','Digital rights management','Media asset management','Audience analytics','Content delivery optimization' ],pricing: '$20,000 - $120,000/month',delivery: '12-24 weeks',category: 'Media IT Services' },{ title: 'Non-Profit IT Solutions',description: 'IT solutions for non-profit organizations',icon: Heart,features: [ 'Donor management systems','Volunteer management platforms','Fundraising solutions','Program management tools','Impact measurement systems','Grant management solutions' ],pricing: '$8,000 - $40,000/month',delivery: '6-16 weeks',category: 'Non-Profit IT Services' },{ title: 'Startup IT Solutions',description: 'Scalable IT solutions for startups and growing businesses',icon: Rocket,features: [ 'MVP development and deployment','Scalable infrastructure setup','Rapid prototyping','Cost-effective solutions','Growth planning and scaling','Technology stack optimization' ],pricing: '$5,000 - $30,000/month',delivery: '4-12 weeks',category: 'Startup IT Services' },{ title: 'Enterprise IT Solutions',description: 'Comprehensive IT solutions for large enterprises',icon: Building,features: [ 'Enterprise architecture design','Legacy system modernization','Digital transformation','Enterprise integration','Scalability and performance','Enterprise security' ],pricing: '$50,000 - $500,000/month',delivery: '20-40 weeks',category: 'Enterprise IT Services' },{ title: 'SMB IT Solutions',description: 'Cost-effective IT solutions for small and medium businesses',icon: Users,features: [ 'IT infrastructure setup','Cloud migration','Security implementation','Backup and recovery','IT support and maintenance','Growth planning' ],pricing: '$2,000 - $15,000/month',delivery: '2-8 weeks',category: 'SMB IT Services' },{ title: 'Remote Work IT Solutions',description: 'IT solutions for remote and hybrid work environments',icon: Home,features: [ 'Remote access solutions','Collaboration tools setup','Security for remote workers','VPN and network access','Device management','Productivity monitoring' ],pricing: '$3,000 - $20,000/month',delivery: '2-6 weeks',category: 'Remote Work IT Services' },{ title: 'Digital Transformation Services',description: 'Comprehensive digital transformation consulting and implementation',icon: Zap,features: [ 'Digital strategy development','Process digitization','Technology modernization','Change management','Digital culture transformation','ROI measurement and optimization' ],pricing: '$25,000 - $200,000/month',delivery: '16-32 weeks',category: 'Digital Transformation Services' },{ title: 'IT Outsourcing Services',description: 'Complete IT outsourcing and managed services',icon: Users,features: [ '24/7 IT support','Infrastructure management','Security monitoring','Backup and recovery','Software updates and maintenance','Strategic IT planning' ],pricing: '$5,000 - $50,000/month',delivery: '2-8 weeks',category: 'IT Outsourcing Services' },{ title: 'IT Project Management',description: 'Professional IT project management and delivery services',icon: ClipboardList,features: [ 'Project planning and execution','Resource allocation and management','Risk assessment and mitigation','Quality assurance','Stakeholder communication','Project delivery and handover' ],pricing: '$8,000 - $40,000/month',delivery: '4-16 weeks',category: 'Project Management Services' },{ title: 'IT Vendor Management',description: 'Comprehensive IT vendor selection and management services',icon: Building,features: [ 'Vendor evaluation and selection','Contract negotiation','Vendor performance monitoring','Cost optimization','Relationship management','Risk assessment and mitigation' ],pricing: '$5,000 - $25,000/month',delivery: '4-12 weeks',category: 'Vendor Management Services' },{ title: 'IT Risk Management',description: 'Comprehensive IT risk assessment and management services',icon: Shield,features: [ 'Risk assessment and analysis','Risk mitigation strategies','Compliance monitoring','Security audits','Business continuity planning','Risk reporting and monitoring' ],pricing: '$10,000 - $50,000/month',delivery: '6-16 weeks',category: 'Risk Management Services' },{ title: 'IT Performance Optimization',description: 'IT performance analysis and optimization services',icon: TrendingUp,features: [ 'Performance monitoring and analysis','Bottleneck identification','Optimization recommendations','Capacity planning','Cost optimization','Performance reporting' ],pricing: '$8,000 - $40,000/month',delivery: '6-12 weeks',category: 'Performance Optimization Services' },{ title: 'IT Innovation Lab',description: 'IT innovation and research services for emerging technologies',icon: Brain,features: [ 'Technology research and evaluation','Proof of concept development','Innovation strategy development','Emerging technology adoption','Innovation project management','Technology trend analysis' ],pricing: '$15,000 - $75,000/month',delivery: '8-20 weeks',category: 'Innovation Services' },{ title: 'IT Excellence Center',description: 'Comprehensive IT excellence and best practices implementation',icon: Award,features: [ 'Best practices implementation','Process optimization','Quality management','Continuous improvement','Excellence benchmarking','Performance measurement' ],pricing: '$20,000 - $100,000/month',delivery: '12-24 weeks',category: 'Excellence Services' } ]; const technologies = [ { name: 'Cloud Platforms',icon: Clou d,description: 'AWS,Azure,GCP,DigitalOcean' },{ name: 'Containerization',icon: Serve r,description: 'Docker,Kubernetes,OpenShift' },{ name: 'Security Tools',icon: Shiel d,description: 'SIEM,WAF,IAM,Encryption' },{ name: 'Monitoring',icon: BarChart 3,description: 'Prometheus,Grafana,ELK Stack' },{ name: 'Databases',icon: Databas e,description: 'PostgreSQL,MongoDB,Redis' },{ name: 'Networking',icon: Networ k,description: 'Cisco,Fortinet,SD-WAN' } ]; const benefits = [ { title: 'Reduced Downtime',description: 'Proactive monitoring and maintenance',icon: Cloc k,stat: '99.9%' },{ title: 'Cost Savings',description: 'Optimized infrastructure and processes',icon: Za p,stat: '40%' },{ title: 'Enhanced Security',description: 'Enterprise-grade protection',icon: Shiel d,stat: '100%' },{ title: 'Scalability',description: 'Flexible and scalable solutions',icon: TrendingU p,stat: 'Unlimited' } ]; ======= import { ArrowRight,CheckCircle,Clock,Star,Users,Zap,Shield,BarChart3,Settings,Globe,Smartphone,Database,Cloud,Lock,Target,TrendingUp,MessageSquare,FileText,Calendar,CreditCard,ShoppingCart,Camera,Music,Video,Code,Search,Mail,Phone,MapPin,Server,Network,Monitor,HardDrive,Wifi,Cpu,MemoryStick,Router,Database as DatabaseIcon,Shield as ShieldIcon,Globe as GlobeIcon,Zap as ZapIcon } from 'lucide-react'; export default function ITServices() { const title = 'IT Services — Zion Tech Group'; const description = 'Comprehensive IT services including cloud migration,DevOps,cybersecurity,infrastructure management,and 24/7 support.'; ======= import { ArrowRight,CheckCircle,Clock,Star,Zap,Shield,Users,Mail,FileText,BarChart3,ShoppingCart,Calendar,MessageSquare,Search,Eye,Target,TrendingUp,Globe,Lock,Cpu,Bot,Image,Video,Mic,Code,Settings,Monitor,Smartphone,Cloud,Server,Network,Car,Rocket,Heart,Building,Sprout,DollarSign,Award,Phone,MapPin,Database,Wrench,HardDrive,Wifi,Smartphone as Mobile,Laptop,Printer,Router,Key,AlertTriangle,RefreshCw,Download,Upload,Trash2,Copy,Edit,Save,Play,Pause,Stop } from 'lucide-react'; import Navigation from '../components/Navigation'; import Footer from '../components/Footer'; export default function ITServices() { const title = 'IT Services & Solutions — Zion Tech Group'; const description = 'Comprehensive IT services including cloud migration,cybersecurity,infrastructure management,and digital transformation solutions.'; >>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-2044 const itServices = [ { title: 'Cloud Migration & Management',description: 'Complete cloud transformation services with AWS,Azure,and Google Cloud Platform expertise',icon: Cloud,features: [ 'Cloud strategy and architecture planning','Data migration and application modernization','Multi-cloud and hybrid cloud solutions','Cloud security and compliance implementation','Cost optimization and resource management','24/7 cloud monitoring and support' ],pricing: '$5,000 - $50,000/month',delivery: '4-12 weeks',category: 'Cloud Services',marketPrice: '$8,000 - $80,000/month',benefits: [ 'Reduce IT infrastructure costs by 40-60%','Improve scalability and flexibility','Enhance security and compliance posture','Enable remote work and collaboration' ] },{ title: 'Cybersecurity Solutions',description: 'Comprehensive security services including threat detection,incident response,and compliance management',icon: Shield,features: [ 'Security assessment and vulnerability testing','Endpoint detection and response (EDR)','Network security and firewall management','Identity and access management (IAM)','Security awareness training and phishing simulation','Compliance management (SOC 2,HIPAA,GDPR)' ],pricing: '$3,000 - $25,000/month',delivery: '2-8 weeks',category: 'Cybersecurity',marketPrice: '$5,000 - $40,000/month',benefits: [ 'Protect against 99.9% of cyber threats','Ensure regulatory compliance','Reduce security incident response time by 80%','Minimize business disruption and financial loss' ] },{ title: 'IT Infrastructure Management',description: 'Complete IT infrastructure setup,management,and optimization for businesses of all sizes',icon: Server,features: [ 'Server setup and configuration','Network design and implementation','Backup and disaster recovery solutions','Hardware procurement and lifecycle management','Performance monitoring and optimization','Proactive maintenance and support' ],pricing: '$2,000 - $15,000/month',delivery: '2-6 weeks',category: 'Infrastructure',marketPrice: '$3,500 - $25,000/month',benefits: [ 'Ensure 99.9% system uptime','Reduce IT operational costs by 30%','Improve system performance and reliability','Enable scalable and future-proof infrastructure' ] },{ title: 'Digital Transformation Consulting',description: 'Strategic digital transformation services to modernize business processes and operations',icon: Rocket,features: [ 'Digital strategy and roadmap development','Process automation and workflow optimization','Legacy system modernization','Data analytics and business intelligence','Change management and training','Technology stack evaluation and selection' ],pricing: '$10,000 - $100,000/project',delivery: '8-24 weeks',category: 'Digital Transformation',marketPrice: '$15,000 - $150,000/project',benefits: [ 'Increase operational efficiency by 50%','Improve customer experience and satisfaction','Enable data-driven decision making','Future-proof your business technology' ] },{ title: 'Managed IT Support Services',description: 'Comprehensive IT support and helpdesk services for ongoing technical assistance',icon: Users,features: [ '24/7 technical support and helpdesk','Remote monitoring and management','Software installation and updates','User training and onboarding','IT asset management and tracking','Proactive issue resolution and maintenance' ],pricing: '$1,500 - $8,000/month',delivery: '1-2 weeks',category: 'Support Services',marketPrice: '$2,500 - $12,000/month',benefits: [ 'Reduce IT support costs by 40%','Improve user productivity and satisfaction','Minimize downtime and technical issues','Ensure consistent IT service delivery' ] },{ title: 'Network Security & Monitoring',description: 'Advanced network security solutions with real-time monitoring and threat detection',icon: Network,features: [ 'Network security assessment and hardening','Intrusion detection and prevention systems','VPN setup and management','Network segmentation and access control','Real-time threat monitoring and response','Security incident investigation and forensics' ],pricing: '$2,500 - $20,000/month',delivery: '3-6 weeks',category: 'Network Security',marketPrice: '$4,000 - $30,000/month',benefits: [ 'Protect against advanced persistent threats','Ensure network compliance and security','Reduce security incident response time','Maintain business continuity and operations' ] },{ title: 'Data Backup & Recovery Solutions',description: 'Comprehensive data protection and disaster recovery services to ensure business continuity',icon: HardDrive,features: [ 'Automated backup systems and scheduling','Cloud and on-premises backup solutions','Disaster recovery planning and testing','Data encryption and security','Recovery time objective (RTO) optimization','Compliance and audit trail maintenance' ],pricing: '$1,000 - $10,000/month',delivery: '1-3 weeks',category: 'Data Protection',marketPrice: '$1,500 - $15,000/month',benefits: [ 'Ensure 99.99% data availability','Minimize data loss and business disruption','Meet compliance and regulatory requirements','Reduce recovery time from days to hours' ] },{ title: 'IT Compliance & Audit Services',description: 'Comprehensive compliance management for SOC 2,HIPAA,GDPR,and other regulatory requirements',icon: FileText,features: [ 'Compliance gap analysis and assessment','Policy and procedure development','Security control implementation','Audit preparation and support','Compliance monitoring and reporting','Staff training and awareness programs' ],pricing: '$5,000 - $30,000/project',delivery: '4-12 weeks',category: 'Compliance',marketPrice: '$8,000 - $50,000/project',benefits: [ 'Achieve and maintain regulatory compliance','Reduce audit findings and remediation costs','Improve security posture and risk management','Build customer trust and competitive advantage' ] },{ title: 'Mobile Device Management (MDM)',description: 'Complete mobile device and application management for secure mobile workforce',icon: Smartphone,features: [ 'Mobile device enrollment and configuration','Application management and distribution','Security policy enforcement','Remote device wiping and locking','Compliance monitoring and reporting','Integration with existing IT systems' ],pricing: '$500 - $3,000/month',delivery: '1-2 weeks',category: 'Mobile Management',marketPrice: '$800 - $5,000/month',benefits: [ 'Secure mobile workforce and BYOD policies','Reduce mobile security risks by 90%','Improve mobile productivity and efficiency','Ensure mobile compliance and governance' ] },{ title: 'IT Project Management',description: 'Professional IT project management services for complex technology implementations',icon: Target,features: [ 'Project planning and scope definition','Resource allocation and timeline management','Risk assessment and mitigation planning','Stakeholder communication and reporting','Quality assurance and testing coordination','Change management and user adoption' ],pricing: '$3,000 - $15,000/month',delivery: 'Varies by project',category: 'Project Management',marketPrice: '$5,000 - $25,000/month',benefits: [ 'Ensure project delivery on time and budget','Minimize project risks and issues','Improve project success rates by 60%','Maximize ROI on IT investments' ] },{ title: 'Software Development & Integration',description: 'Custom software development and system integration services for business-specific needs',icon: Code,features: [ 'Custom application development','API development and integration','Legacy system integration','Database design and optimization','Quality assurance and testing','Ongoing maintenance and support' ],pricing: '$5,000 - $50,000/project',delivery: '4-16 weeks',category: 'Software Development',marketPrice: '$8,000 - $80,000/project',benefits: [ 'Get custom solutions tailored to your business','Improve operational efficiency and automation','Integrate disparate systems and data sources','Enable digital transformation and innovation' ] },{ title: 'IT Training & Consulting',description: 'Comprehensive IT training and consulting services to upskill your team and optimize technology usage',icon: Users,features: [ 'Technology skills assessment and training plans','Hands-on training workshops and seminars','IT best practices and security awareness','Technology adoption and change management','Ongoing consulting and support','Certification preparation and guidance' ],pricing: '$2,000 - $10,000/project',delivery: '2-8 weeks',category: 'Training & Consulting',marketPrice: '$3,500 - $15,000/project',benefits: [ 'Improve team technical skills and productivity','Reduce IT support tickets and issues','Increase technology adoption and ROI','Build internal IT expertise and capabilities' ] } ]; const categories = [...new Set(itServices.map(service => service.category))]; return ( <> <Head> <title>{title}</title> ======= <meta name="description" content={description} /> <link rel="canonical" href="https: <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:url" content="https: <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> </Head> <Navigation /> <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> {} <section className="relative py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> IT Services & Solutions </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Comprehensive IT services including cloud migration,cybersecurity,infrastructure management,and digital transformation solutions for businesses of all sizes. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get IT Consultation <ArrowRight className="ml-2 h-5 w-5" /> </Link> <Link href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200" > View Pricing </Link> </div> </div> </section> {} <section className="py-16 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="grid grid-cols-2 md:grid-cols-4 gap-8"> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">15+</div> <div className="text-gray-600">IT Service Categories</div> </div> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">200+</div> <div className="text-gray-600">Successful Projects</div> </div> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div> <div className="text-gray-600">System Uptime</div> </div> <div className="text-center"> <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div> <div className="text-gray-600">Expert Support</div> </div> </div> </div> </section> {} <section className="py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Our IT Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> From cloud migration to cybersecurity,we provide comprehensive IT solutions to keep your business secure,efficient,and competitive. </p> </div> {} <div className="flex flex-wrap justify-center gap-4 mb-12"> <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold"> All Services </button> {categories.map((category) => ( <button key={category} className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-blue-100 hover:text-blue-700 transition-colors" > {category} </button> ))} </div> {} <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {itServices.map((service,index) => ( <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100" > <div className="flex items-center mb-4"> <div className="p-3 bg-blue-100 rounded-lg mr-4"> <service.icon className="h-8 w-8 text-blue-600" /> </div> <div> <h3 className="text-xl font-bold text-gray-900 mb-1"> {service.title} </h3> <span className="text-sm text-blue-600 font-semibold"> {service.category} </span> </div> </div> <p className="text-gray-600 mb-4"> {service.description} </p> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4> <ul className="space-y-1"> {service.features.slice(0,3).map((feature,idx) => ( <li key={idx} className="flex items-center text-sm text-gray-600"> <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" /> {feature} </li> ))} </ul> </div> <div className="mb-4"> <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4> <ul className="space-y-1"> {service.benefits.slice(0,2).map((benefit,idx) => ( <li key={idx} className="flex items-center text-sm text-gray-600"> <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" /> {benefit} </li> ))} </ul> </div> <div className="border-t pt-4 mb-4"> <div className="flex justify-between items-center mb-2"> <span className="text-sm text-gray-600">Our Pricing:</span> <span className="text-lg font-bold text-blue-600"> {service.pricing} </span> </div> <div className="flex justify-between items-center mb-2"> <span className="text-sm text-gray-600">Market Price:</span> <span className="text-sm text-gray-500 line-through"> {service.marketPrice} </span> </div> <div className="flex justify-between items-center"> <span className="text-sm text-gray-600">Delivery:</span> <span className="text-sm text-gray-600 flex items-center"> <Clock className="h-4 w-4 mr-1" /> {service.delivery} </span> </div> </div> <Link href="/contact" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get Quote <ArrowRight className="ml-2 h-4 w-4" /> </Link> </div> ))} </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Why Choose Zion Tech Group? </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> We combine technical expertise with business acumen to deliver IT solutions that drive real results. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div className="text-center"> <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <Award className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Certified Experts</h3> <p className="text-gray-600"> Our team holds industry certifications in AWS,Microsoft,Cisco,and other leading technologies. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <Shield className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Security First</h3> <p className="text-gray-600"> We prioritize security in every solution,ensuring your data and systems are protected. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <Clock className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3> <p className="text-gray-600"> Round-the-clock monitoring and support to ensure your systems run smoothly. </p> </div> <div className="text-center"> <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <TrendingUp className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3> <p className="text-gray-600"> Track record of successful implementations and measurable business outcomes. </p> </div> </div> </div> </section> {} <section className="py-20 bg-blue-600"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> Ready to Transform Your IT Infrastructure? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Contact us today for a free IT assessment and discover how our solutions can improve your business efficiency and security. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center" > <Phone className="mr-2 h-5 w-5" /> Call +1 302 464 0950 </Link> <Link href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > <Mail className="mr-2 h-5 w-5" /> Send Email </Link> </div> </div> </section> </main> <Footer /> </> )}
>>>>>>> origin/automation-improvements
