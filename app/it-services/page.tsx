import { CheckCircle, ArrowRight, Server, Shield, Cloud, Database, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle } from 'lucide-react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Server, Shield, Cloud, Database, Code, Users, Globe, Smartphone, Wrench, Zap, BarChart3, Clock, DollarSign, TrendingUp, Headphones, Settings } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-migration',
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance',
      features: [
        'AWS, Azure, and Google Cloud expertise',
        'Zero-downtime migration strategies',
        'Cost optimization and resource management',
        'Disaster recovery and backup solutions',
        'Multi-cloud and hybrid cloud architectures',
        'Security and compliance implementation',
        'Performance monitoring and optimization',
        '24/7 cloud infrastructure management'
      ],
      pricing: 'Starting at $2,500/month',
      marketPrice: '$5,000-25,000/month',
      category: 'Cloud Services',
      popular: true,
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server setup & configuration', 'Network monitoring', 'Performance optimization', '24/7 support', 'Disaster recovery'],
      pricing: 'Starting at $299/month',
      category: 'Infrastructure'
import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle, Code, Network, Settings, Users, Clock, DollarSign } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Smartphone, Database, Cpu, Wifi, Server, Users, Globe, Zap, Star, Clock } from 'lucide-react'
'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Shield,
  Code,
  Database,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance.',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization'],
      pricing: 'Starting at $5,000',
      link: '/cloud-migration'
      deliverables: ['Migration Plan', 'Infrastructure Setup', 'Security Configuration', 'Monitoring Dashboard']
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced performance.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime deployment', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,999',
      link: '/it-services/cloud-migration',
      popular: true
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import { ArrowRight, CheckCircle, Star, Cloud, Shield, Code, Database, Server, Network, Settings, Users, Clock, DollarSign, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP Migration', 'Zero Downtime', 'Cost Optimization', 'Security Compliance'],
      price: 'Starting at $2,500',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and ensure compliance',
      features: [
        'Security assessment and penetration testing',
        'Firewall and network security configuration',
        'Endpoint protection and antivirus management',
        'Security monitoring and incident response',
        'Compliance auditing (SOC2, GDPR, HIPAA)',
        'Security awareness training',
        'Vulnerability management and patching',
        '24/7 security operations center (SOC)'
      ],
      pricing: 'Starting at $1,500/month',
      marketPrice: '$3,000-15,000/month',
      category: 'Security',
      popular: true,
      deliverables: ['Security Audit Report', 'Implementation Plan', 'Monitoring Setup', 'Compliance Documentation']
    },
    {
      id: 'network-infrastructure',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance',
      features: [
        'Network design and architecture planning',
        'Router, switch, and firewall configuration',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization and QoS',
        'Network security implementation',
        'Disaster recovery and redundancy'
      ],
      pricing: 'Starting at $1,200/month',
      marketPrice: '$2,500-12,000/month',
      category: 'Infrastructure',
      popular: false,
      deliverables: ['Network Design', 'Hardware Configuration', 'Security Setup', 'Monitoring Tools']
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and protection for your digital assets and infrastructure.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Compliance audit', 'Security training'],
      pricing: 'Starting at $1,999',
      link: '/it-services/cybersecurity-audit',
      popular: true
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Compliance Management'],
      price: 'Starting at $1,500',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and maintenance services.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', '24/7 Monitoring'],
      price: 'Starting at $800',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Server Management',
      description: 'Complete server administration, monitoring, and maintenance services.',
      features: ['Server Setup', 'Performance Monitoring', 'Security Updates', 'Disaster Recovery'],
      price: 'Starting at $1,200',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      popular: false
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure solutions.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Troubleshooting'],
      price: 'Starting at $2,000',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: ['Threat detection', 'Vulnerability assessment', 'Security training'],
      pricing: 'Starting at $2,500',
      link: '/cybersecurity',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure Management',
      description: 'Optimize and maintain your IT infrastructure for peak performance.',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization'],
      pricing: 'Starting at $1,500',
      link: '/infrastructure',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Protect your business with comprehensive cybersecurity services and threat monitoring.',
      features: ['24/7 threat monitoring', 'Penetration testing', 'Security audits', 'Incident response', 'Compliance management', 'Security training'],
      price: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions',
      popular: true
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with modern DevOps practices and automation.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Monitoring & logging', 'Container orchestration', 'Automated testing', 'Deployment automation'],
      price: 'Starting at $3,000',
      link: '/devops-cicd',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time dashboards', 'Data visualization', 'Predictive analytics'],
      price: 'Starting at $2,000/month',
      link: '/data-analytics',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Custom Development',
      description: 'Build tailored software solutions for your specific business needs.',
      features: ['Full-stack development', 'API integration', 'Mobile apps'],
      pricing: 'Starting at $8,000',
      link: '/custom-development',
      popular: true
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure.',
      features: ['Network design', 'Security implementation', 'Performance monitoring'],
      pricing: 'Starting at $4,000',
      link: '/network-solutions',
      link: '/blockchain'
const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Infrastructure',
      description: 'Build, deploy, and manage scalable cloud solutions with our expert cloud engineering team.',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration services',
        'Infrastructure as Code',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring'
      ],
      pricing: 'Starting at $3,500/month',
      popular: true,
      link: '/cloud-infrastructure'
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, penetration testing, and compliance certification',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Security training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189,
      duration: '1-3 weeks'
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance for your IT environment.',
      features: ['User management', 'System updates', 'Performance monitoring', 'Troubleshooting', 'Documentation', 'Backup management'],
      price: 'Starting at $800/month',
      link: '/system-administration',
      popular: false
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat monitoring.',
      features: [
        'Security assessment',
        'Threat detection',
        'Incident response',
        'Compliance management',
        'Security training',
        'Penetration testing'
      ],
      pricing: 'Starting at $1,500/month',
      popular: false,
      link: '/cybersecurity'
    },
    {
      name: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and rate limiting',
      price: 'Starting at $4,000',
      features: ['REST & GraphQL APIs', 'API documentation', 'Rate limiting', 'Analytics dashboard', 'Authentication', 'Versioning support'],
      icon: Database,
      path: '/api-development',
      category: 'Backend Development',
      rating: 4.8,
      reviews: 112,
      duration: '2-5 weeks'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, maintenance, and migration services for all major databases',
      price: 'Starting at $1,500',
      features: ['Performance tuning', 'Backup strategies', 'Security hardening', 'Migration support', 'Query optimization', 'Monitoring setup'],
      icon: Database,
      path: '/database-management',
      category: 'Database',
      rating: 4.6,
      reviews: 87,
      duration: '1-2 weeks'
    },
    {
      name: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies and frameworks',
      price: 'Starting at $6,000',
      features: ['Responsive design', 'Modern frameworks', 'SEO optimization', 'Performance tuning', 'Security implementation', 'Content management'],
      icon: Globe,
      path: '/web-development',
      category: 'Web Development',
      rating: 4.8,
      reviews: 145,
      duration: '4-8 weeks'
    },
    {
      icon: <Wifi className="w-12 h-12 text-pink-500" />,
      title: '5G Implementation',
      description: 'Leverage next-generation 5G technology for ultra-fast connectivity and IoT solutions.',
      features: [
        '5G network design',
        'IoT integration',
        'Edge computing',
        'Performance optimization',
        'Security implementation',
        'Monitoring & maintenance'
      ],
      pricing: 'Starting at $3,000/month',
      popular: true,
      link: '/it-support'
      deliverables: ['Mobile App', 'Source Code', 'Documentation', 'App Store Submission']
    },
    {
      id: 'system-integration',
      icon: <Wrench className="w-8 h-8 text-yellow-500" />,
      title: 'System Integration',
      description: 'Connect and integrate disparate systems for seamless data flow and automation',
      features: [
        'API development and integration',
        'Legacy system modernization',
        'Data synchronization and ETL processes',
        'Third-party software integration',
        'Custom middleware development',
        'Real-time data processing',
        'System monitoring and maintenance',
        'Integration testing and validation'
      ],
      pricing: 'Starting at $3,000/month',
      marketPrice: '$6,000-30,000/month',
      category: 'Integration',
      popular: false,
      deliverables: ['Integration Architecture', 'Custom APIs', 'Data Flow Diagrams', 'Testing Reports']
      features: ['CI/CD Pipeline', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: 'Starting at $1,800',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      popular: true
    }
  ]

  const technologies = [
    {
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', '24/7 monitoring'],
      pricing: 'Starting at $1,499',
      link: '/database-management',
      popular: false
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: 'Infrastructure Management',
      description: 'Complete management of your IT infrastructure with proactive monitoring and maintenance.',
      features: ['Server management', 'Network monitoring', 'Performance optimization', 'Disaster recovery'],
      pricing: 'Starting at $2,499',
      link: '/infrastructure',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store deployment'],
      pricing: 'Starting at $4,999',
      link: '/mobile-development',
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Rapid Deployment',
      description: 'Get your IT infrastructure up and running quickly with our proven methodologies and expert team'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive protection, compliance, and monitoring solutions'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'IT infrastructure that grows with your business, from startup to enterprise scale'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, support, and maintenance to ensure maximum uptime'
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with industry-standard compliance and monitoring'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your systems'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT'
    },
    {
      icon: <Network className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs'
    }
  ];

  const testimonials = [
    {
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring', 'Incident response'],
      pricing: 'Starting at $499/month',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Cloud migration, optimization, and management across all major platforms.',
      features: ['AWS/Azure/GCP migration', 'Cloud optimization', 'Cost management', 'Multi-cloud strategy', 'Backup solutions'],
      pricing: 'Starting at $399/month',
      category: 'Cloud'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening'],
      pricing: 'Starting at $199/month',
      category: 'Database'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Network Solutions',
      description: 'Network design, implementation, and ongoing management services.',
      features: ['Network design', 'VPN setup', 'Firewall configuration', 'Bandwidth optimization', 'Network security'],
      pricing: 'Starting at $249/month',
      category: 'Network'
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'System Administration',
      description: 'Complete system administration and maintenance for your IT environment.',
      features: ['User management', 'System updates', 'Performance monitoring', 'Troubleshooting', 'Documentation'],
      pricing: 'Starting at $199/month',
      category: 'Administration'
    }
  ];
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Cost Effective',
      description: 'Reduce IT costs with efficient infrastructure management'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance solutions'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation and deployment of IT solutions'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ]

      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions',
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Effective',
      description: 'Optimize your IT spending with our cost-effective solutions and strategies',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Infrastructure',
      description: 'Build robust, scalable IT infrastructure that grows with your business needs.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing needs',
      icon: <Settings className="w-6 h-6 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Enterprise Corp',
      content: 'Zion Tech transformed our IT infrastructure. The cloud migration was seamless and our costs reduced by 40%.',
      rating: 5
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions'
    },
    {
      icon: Lock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring, maintenance, and support for your IT infrastructure'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure and requirements to create a comprehensive plan'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design the optimal solution architecture for your specific needs'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your business operations'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization to ensure peak efficiency'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance services'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud migration, DevOps, cybersecurity, mobile development, API development, and database management. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, DevOps, cybersecurity, mobile development, API development, database management, web development, system integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, 
                and accelerate digital transformation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
=======
import { CheckCircle, ArrowRight, Zap, Star, Users, Cloud, Shield, Database, Server, Smartphone, Wrench, Globe, Lock, Monitor, HardDrive, Cpu, Wifi, Settings, BarChart3, Headphones, Clock, DollarSign, Target, Award, TrendingUp, Building, Code, Network, FileText, Mail, Phone, MapPin } from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
  popular: boolean;
  category: string;
  benefits: string[];
  link: string;
}

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const itServices: ITService[] = [
    {
      id: 'cloud-migration',
      icon: Cloud,
      title: 'Cloud Migration Services',
      description: 'Seamless migration of your infrastructure to leading cloud platforms with zero downtime.',
      features: ['AWS/Azure/GCP Migration', 'Data Migration', 'Application Modernization', 'Security Implementation', 'Performance Optimization', '24/7 Support'],
      price: 'Starting at $2,500',
      duration: '2-4 weeks',
      popular: true,
      category: 'Cloud Services',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability and flexibility', 'Enhanced security and compliance', 'Better disaster recovery'],
      link: '/it-services/cloud-migration'
    },
    {
      id: 'cybersecurity-audit',
      icon: Shield,
      title: 'Cybersecurity Audit & Implementation',
      description: 'Comprehensive security assessment and implementation of enterprise-grade security solutions.',
      features: ['Security Assessment', 'Penetration Testing', 'Vulnerability Scanning', 'Security Policy Development', 'Employee Training', 'Ongoing Monitoring'],
      price: '$1,500/month',
      duration: 'Ongoing',
      popular: true,
      category: 'Security',
      benefits: ['Protect against cyber threats', 'Ensure compliance with regulations', 'Reduce security risks by 90%', 'Peace of mind with 24/7 monitoring'],
      link: '/it-services/cybersecurity-audit'
    },
    {
      id: 'mobile-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: ['Native iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'API Integration', 'App Store Optimization', 'Maintenance & Support'],
      price: 'Starting at $5,000',
      duration: '6-12 weeks',
      popular: false,
      category: 'Development',
      benefits: ['Reach customers on mobile devices', 'Improve user engagement', 'Increase business visibility', 'Generate additional revenue streams'],
      link: '/it-services/mobile-development'
    },
    {
      id: 'data-analytics',
      icon: BarChart3,
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      price: '$2,000/month',
      duration: 'Ongoing',
      popular: false,
      category: 'Analytics',
      benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Improve operational efficiency', 'Gain competitive advantage'],
      link: '/it-services/data-analytics'
    },
    {
      id: 'network-infrastructure',
      icon: Network,
      title: 'Network Infrastructure Design',
      description: 'Design and implement robust network infrastructure for optimal performance and security.',
      features: ['Network Design', 'Hardware Installation', 'Security Configuration', 'Performance Optimization', 'Monitoring Setup', 'Documentation'],
      price: 'Starting at $3,000',
      duration: '1-3 weeks',
      popular: false,
      category: 'Infrastructure',
      benefits: ['Improve network performance', 'Enhance security posture', 'Reduce downtime', 'Support business growth'],
      link: '/it-services/network-infrastructure'
    },
    {
      id: 'managed-it-services',
      icon: Settings,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management including monitoring, maintenance, and support for your entire infrastructure.',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'Security Management', 'Backup & Recovery', 'Software Updates'],
      price: '$1,200/month',
      duration: 'Ongoing',
      popular: true,
      category: 'Managed Services',
      benefits: ['Reduce IT costs by 30%', 'Minimize downtime', 'Focus on core business', 'Access to expert support'],
      link: '/it-services/managed-it'
    },
    {
      id: 'devops-implementation',
      icon: Code,
      title: 'DevOps Implementation',
      description: 'Implement DevOps practices and tools to streamline development and deployment processes.',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Automated Testing', 'Container Orchestration', 'Monitoring & Logging', 'Team Training'],
      price: 'Starting at $4,000',
      duration: '4-8 weeks',
      popular: false,
      category: 'DevOps',
      benefits: ['Faster deployment cycles', 'Improved code quality', 'Reduced manual errors', 'Better collaboration'],
      link: '/it-services/devops-implementation'
    },
    {
      id: 'disaster-recovery',
      icon: HardDrive,
      title: 'Disaster Recovery Solutions',
      description: 'Comprehensive backup and disaster recovery solutions to protect your critical business data.',
      features: ['Backup Strategy', 'Data Replication', 'Recovery Testing', 'Cloud Backup', 'RTO/RPO Planning', 'Emergency Response'],
      price: '$800/month',
      duration: 'Ongoing',
      popular: false,
      category: 'Backup & Recovery',
      benefits: ['Minimize data loss', 'Ensure business continuity', 'Meet compliance requirements', 'Reduce recovery time'],
      link: '/it-services/disaster-recovery'
    },
    {
      id: 'it-consulting',
      icon: Users,
      title: 'IT Strategy Consulting',
      description: 'Strategic IT consulting to align technology with business goals and drive digital transformation.',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'ROI Analysis'],
      price: '$200/hour',
      duration: 'As needed',
      popular: false,
      category: 'Consulting',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve operational efficiency', 'Stay competitive'],
      link: '/it-services/it-consulting'
    },
    {
      id: 'system-administration',
      icon: Monitor,
      title: 'System Administration',
      description: 'Professional system administration services for Windows, Linux, and cloud environments.',
      features: ['Server Management', 'User Administration', 'Security Hardening', 'Performance Tuning', 'Patch Management', 'Troubleshooting'],
      price: '$1,000/month',
      duration: 'Ongoing',
      popular: false,
      category: 'Administration',
      benefits: ['Ensure system reliability', 'Improve security posture', 'Optimize performance', 'Reduce maintenance costs'],
      link: '/it-services/system-administration'
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'Analytics', 'Infrastructure', 'Managed Services', 'DevOps', 'Backup & Recovery', 'Consulting', 'Administration'];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your business operations.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security measures to protect your sensitive data and systems.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent costs and no hidden fees.'
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'TechStart Inc.',
      content: 'Zion Tech Group transformed our IT infrastructure. Their cloud migration saved us 40% on costs while improving performance.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      company: 'FinanceCorp',
      content: 'Their cybersecurity services gave us peace of mind. We feel confident our data is protected 24/7.',
      rating: 5
    },
    {
      name: 'Michael Johnson',
      company: 'RetailMax',
      content: 'The mobile app they developed increased our customer engagement by 200%. Excellent work!',
      rating: 5
    }
  ];

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Professional IT Support | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, mobile development, and managed IT services. Expert solutions for your business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, mobile development, managed IT, DevOps, data analytics, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Services</span>
              <br />
              <span className="text-white">& Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional IT services and solutions to power your business growth. From cloud migration to cybersecurity, 
              we provide comprehensive technology support for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are designed to deliver exceptional performance, security, and scalability for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful project delivery and maximum value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mx-auto mb-6 text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our IT Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
<<<<<<< HEAD
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
=======
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-blue-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  {service.popular && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-purple-300">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
<<<<<<< HEAD
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Contact our IT experts today to discuss your requirements and discover how our solutions can drive your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services.',
      features: ['AWS/Azure/GCP expertise', 'Zero-downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration'
import { CheckCircle, ArrowRight, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Server, Lock, Wifi, Cpu, BarChart3, Settings, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with ongoing management, optimization, and security for AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud migration',
        'Cost optimization',
        'Security hardening',
        'Performance monitoring',
        'Disaster recovery',
        '24/7 support'
      ],
      pricing: {
        basic: '$2,500 setup + $1,200/month',
        pro: '$5,000 setup + $2,500/month',
        enterprise: '$10,000 setup + $5,000/month'
      },
      link: '/cloud-migration',
      popular: true
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and incident response.',
      features: [
        'Threat monitoring',
        'Vulnerability scanning',
        'Penetration testing',
        'Security training',
        'Compliance management',
        'Incident response'
      ],
      pricing: {
        basic: '$1,500/month',
        pro: '$3,000/month',
        enterprise: '$6,000/month'
      },
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      title: 'DevOps & CI/CD',
      description: 'Modern DevOps practices with automated CI/CD pipelines, infrastructure as code, and deployment automation.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      pricing: {
        basic: '$2,000/month',
        pro: '$4,000/month',
        enterprise: '$8,000/month'
      },
      link: '/devops-solutions'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'Data Analytics & BI',
      description: 'Advanced data analytics solutions with business intelligence dashboards and predictive analytics.',
      features: [
        'Data warehousing',
        'ETL processes',
        'Business intelligence',
        'Predictive analytics',
        'Real-time dashboards',
        'Data visualization'
      ],
      pricing: {
        basic: '$2,000/month',
        pro: '$4,500/month',
        enterprise: '$9,000/month'
      },
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks.',
      features: [
        'Native iOS/Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store deployment',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: {
        basic: 'Starting at $5,000',
        pro: 'Starting at $15,000',
        enterprise: 'Starting at $50,000'
      },
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Web Development',
      description: 'Modern web applications with responsive design, performance optimization, and SEO best practices.',
      features: [
        'Responsive web design',
        'Performance optimization',
        'SEO optimization',
        'Content management',
        'E-commerce solutions',
        'API development'
      ],
      pricing: {
        basic: 'Starting at $3,000',
        pro: 'Starting at $8,000',
        enterprise: 'Starting at $25,000'
      },
      link: '/web-development'
    },
    {
      icon: <Database className="w-12 h-12 text-pink-500" />,
      title: 'Blockchain Solutions',
      description: 'Blockchain development and integration services for smart contracts, DeFi, and enterprise applications.',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplaces',
        'Enterprise blockchain',
        'Cryptocurrency integration',
        'Security auditing'
      ],
      pricing: {
        basic: 'Starting at $10,000',
        pro: 'Starting at $25,000',
        enterprise: 'Starting at $100,000'
      },
      link: '/blockchain-solutions'
    },
    {
      icon: <Cpu className="w-12 h-12 text-teal-500" />,
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for optimization, cryptography, and advanced simulations.',
      features: [
        'Quantum algorithm development',
        'Optimization problems',
        'Cryptography solutions',
        'Quantum simulations',
        'Research collaboration',
        'Training & consulting'
      ],
      pricing: {
        basic: 'Starting at $15,000',
        pro: 'Starting at $35,000',
        enterprise: 'Starting at $150,000'
      },
      link: '/quantum-computing-solutions'
    }
  ];

  const serviceCategories = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.'
      title: 'Infrastructure Services',
      description: 'Complete IT infrastructure setup, management, and optimization.',
      icon: <Server className="w-8 h-8 text-blue-500" />,
      services: ['Cloud Migration', 'Server Management', 'Network Setup', 'Backup Solutions']
    },
    {
      title: 'Security Services',
      description: 'Comprehensive cybersecurity and data protection solutions.',
      icon: <Lock className="w-8 h-8 text-red-500" />,
      services: ['Threat Detection', 'Vulnerability Assessment', 'Security Training', 'Compliance']
    },
    {
      title: 'Development Services',
      description: 'Custom software development and digital solutions.',
      icon: <Code className="w-8 h-8 text-green-500" />,
      services: ['Web Development', 'Mobile Apps', 'API Development', 'DevOps']
    },
    {
      title: 'Data Services',
      description: 'Data management, analytics, and business intelligence.',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      services: ['Data Analytics', 'Business Intelligence', 'Data Warehousing', 'Machine Learning']
    }
  ];

  const testimonials = [
    {
      name: 'Robert Johnson',
      company: 'TechCorp Enterprises',
      content: 'Zion Tech Group migrated our entire infrastructure to the cloud seamlessly. Our costs reduced by 40% and performance improved significantly.',
      rating: 5,
      service: 'Cloud Migration'
    },
    {
      name: 'Maria Garcia',
      company: 'FinanceFlow Inc.',
      content: 'Their cybersecurity solutions protected us from multiple attacks. The 24/7 monitoring gives us peace of mind.',
      rating: 5,
      service: 'Cybersecurity Solutions'
    },
    {
      name: 'David Chen',
      company: 'DataTech Solutions',
      content: 'The data analytics platform they built provides insights we never had before. Our decision-making is now completely data-driven.',
      rating: 5,
      service: 'Data Analytics'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development. Transform your business with our expertise." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, web development" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
  ];
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems are always running optimally.'
    },
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '15+', label: 'Years Experience' }
  ];
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Expert Team',
      description: 'Our certified professionals have years of experience in enterprise IT solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance and regular security audits.'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support to keep your systems running smoothly.'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Global Reach',
      description: 'We serve clients worldwide with local expertise and global capabilities.'
    }
  ];

  return (
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and more." />
        <meta name="keywords" content="IT services, infrastructure, cybersecurity, cloud, database, network, system administration" />
  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Expert IT services including cloud migration, cybersecurity, network infrastructure, DevOps, and more. 24/7 support and enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, DevOps, database management, IT support" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Trusted IT Solutions Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
      </Helmet>
      
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, custom development, and technical support for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, software development, technical support, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
      name: 'David Chen',
      company: 'TechFlow Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The migration was seamless and our performance improved by 300%.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'DataCorp Solutions',
      content: 'Their cybersecurity audit identified critical vulnerabilities we never knew existed. Highly professional team.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'CloudFirst Technologies',
      content: 'The DevOps implementation reduced our deployment time from hours to minutes. Incredible efficiency gains.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and infrastructure solutions. Enterprise-grade technology services." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, database management, infrastructure, enterprise technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
              Transform your technology infrastructure with our expert IT services. From cloud migration to cybersecurity, 
              we deliver enterprise-grade solutions that drive efficiency, security, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              <Link
                to="#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Services
              </Link>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, database management, server administration, and DevOps solutions. Expert IT support for your business."
        keywords="IT services, cloud migration, cybersecurity, database management, server administration, DevOps, network infrastructure, IT support"
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-6 animate-pulse">
                💻 Professional IT Services
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">IT Services</span> & Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services to keep your business running smoothly. 
              From cloud migration to cybersecurity, we provide expert solutions for all your technology needs.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions are designed to deliver reliability, security, and performance for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-400">IT Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">Certified Experts</div>
              </div>
            </div>
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{stat.number}</div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        </section>

        {/* IT Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of IT services tailored to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative ${
                    service.popular ? 'ring-2 ring-purple-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to meet your business requirements and drive digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {service.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <span className="text-sm text-green-300">{service.category}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Deliverables:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliverable, deliverableIndex) => (
                        <span key={deliverableIndex} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-bold text-white">{service.pricing}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across the latest technologies and industry-standard tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-4">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                  
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2">{service.pricing}</p>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
=======
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.duration}</div>
                    </div>
                  </div>

                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT solutions designed to meet your business needs and drive digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-lg font-bold text-white">{service.pricing}</div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </Link>
              </div>
            ))}
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-blue-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-blue-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                </div>
                <ul className="space-y-2 mb-8">
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven expertise and commitment to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end IT services designed to modernize your technology stack and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we deliver exceptional IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our IT Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver exceptional results through innovation, expertise, and dedication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you build a robust, secure, and scalable technology foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let us help you build a robust IT foundation.
        {/* Services Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to support and enhance your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl relative`}
                >
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
              ))}
              ))}
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  We combine deep technical expertise with business acumen to deliver IT solutions 
                  that drive real business value and competitive advantage.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get IT Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>

      <Footer />
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver enterprise-grade IT solutions with unmatched expertise and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from businesses that have transformed with our IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
=======
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of businesses already using our IT solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your IT Journey
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver IT solutions that provide real business value and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our IT services have transformed businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-sm text-green-300">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Let's discuss how our IT services can optimize your technology stack and drive business growth. 
                Get a free IT assessment and custom solution proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Assessment
                </Link>
                <Link
                  to="/ai-services"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
export default ItServicesPage;
}
export default ITServicesPage;
export default ITServicesPage;
export default ITServicesPage;
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Upgrade Your IT Infrastructure?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Let our expert team help you build a robust, secure, and scalable IT infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Get IT Consultation
                    <Server className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="https://ziontechgroup.com/it-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Request Demo
                    <Cloud className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
}

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {itServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Basic:</span>
                        <span className="text-white font-semibold">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-white font-semibold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Service Categories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Organized IT services by category for easy navigation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Real results from businesses using our IT services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our IT services can optimize your technology stack and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free IT Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View AI Services
                  </Link>
                </div>
              </div>
            </div>
=======
        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                Contact our expert team for a free consultation and discover how our IT services can drive your business forward.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-2434
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;
