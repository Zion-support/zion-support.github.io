<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Search } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Server } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Code } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Wifi } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Hand } from 'lucide-react';
import { Cloud } from 'lucide-react';
import React from 'react';
import { ArrowRight, Brain, Shield, Globe, Code, Smartphone, Cloud, BarChart3, Bot, Wifi, Target, Users, TrendingUp, FileText, Mail, Zap, Database, Settings, Monitor, Lock, Server, Cpu, Network, HardDrive, Laptop, Headphones } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {

  const services = [
    {
      title: "AI-Powered Business Intelligence Pro",
      description: "Transform raw data into actionable insights with our advanced AI analytics platform. Real-time dashboards, predictive analytics, and automated reporting with 99.9% accuracy.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-business-intelligence",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration", "Mobile App", "White-label Options"],
      category: "AI Analytics",
      popular: true
    },
    {
      title: "AI Customer Support Automation Suite",
      description: "Deploy intelligent chatbots and automated customer service solutions. 24/7 support with natural language processing, sentiment analysis, and multilingual capabilities.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-support",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Multi-language Support", "Sentiment Analysis", "CRM Integration", "Live Chat Handoff", "Voice Recognition", "Custom Training"],
      category: "AI Customer Service",
      popular: true
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered writing tools. Blog posts, social media content, product descriptions, and marketing materials with SEO optimization.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["SEO Optimization", "Brand Voice Training", "Multi-format Output", "Plagiarism Detection", "Content Calendar", "Team Collaboration"],
      category: "AI Content"
    },
    {
      title: "AI Cybersecurity Defense Matrix",
      description: "Advanced threat detection and response system with real-time monitoring, automated incident response, and compliance reporting. Protect your business 24/7.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring", "Incident Response", "Security Training"],
      category: "Cybersecurity",
      popular: true
    },
    {
      title: "5G Network Infrastructure Solutions",
      description: "Complete 5G network deployment and management solutions. Ultra-low latency, massive IoT connectivity, and edge computing capabilities for smart cities and enterprises.",
      icon: <Wifi className="w-8 h-8" />,
      path: "/5g-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "Custom Pricing",
      features: ["Network Planning", "Edge Computing", "IoT Integration", "Performance Monitoring", "Smart City Solutions", "Private Networks"],
      category: "5G Technology"
    },
    {
      title: "Cloud Infrastructure Management Pro",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support with cost optimization.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "Multi-cloud", "DevOps Integration"],
      category: "Cloud Services"
    },
    {
      title: "AI-Powered Data Analytics Platform",
      description: "Advanced data processing and visualization platform with machine learning models, automated insights, and interactive dashboards for data-driven decisions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["ML Models", "Interactive Dashboards", "Data Pipeline", "Real-time Processing", "Data Visualization", "Custom Reports"],
      category: "Data Analytics"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization with support for multiple programming languages, automated testing, and documentation generation.",
      icon: <Code className="w-8 h-8" />,
      path: "/ai-code-assistant",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["Code Generation", "Bug Detection", "Performance Optimization", "Documentation", "Code Review", "Refactoring"],
      category: "Development Tools"
    },
    {
      title: "AI Marketing Automation Hub",
      description: "End-to-end marketing automation with AI-driven personalization, email campaigns, social media management, and advanced lead scoring algorithms.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing-automation",
      color: "from-pink-500 to-rose-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Email Automation", "Social Media", "Lead Scoring", "A/B Testing", "Personalization", "Analytics Dashboard"],
      category: "Marketing Automation"
    },
    {
      title: "AI Document Intelligence Suite",
      description: "Intelligent document analysis, extraction, and processing with OCR technology, form recognition, and automated data entry solutions.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-document-processing",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["OCR Technology", "Form Recognition", "Data Extraction", "Workflow Automation", "Document Classification", "Search & Retrieval"],
      category: "Document Management"
    },
    {
      title: "AI Sales CRM Assistant Pro",
      description: "Intelligent CRM with AI-powered lead qualification, sales forecasting, and automated follow-ups. Integration with major CRM platforms and sales tools.",
      icon: <Users className="w-8 h-8" />,
      path: "/ai-crm-assistant",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["Lead Scoring", "Sales Forecasting", "Automated Follow-ups", "CRM Integration", "Pipeline Management", "Performance Analytics"],
      category: "Sales & CRM"
    },
    {
      title: "AI Financial Analytics Pro",
      description: "Advanced financial modeling and risk assessment with automated reporting, fraud detection, and investment analysis tools for financial institutions.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-financial-analytics",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Risk Assessment", "Fraud Detection", "Investment Analysis", "Compliance Reporting", "Portfolio Optimization", "Market Prediction"],
      category: "Financial Services"
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Revolutionary AI-powered medical diagnostics with image analysis, symptom assessment, and treatment recommendations for healthcare providers.",
      icon: <Brain className="w-8 h-8" />,
      path: "/ai-healthcare-diagnostics",
      color: "from-rose-500 to-pink-500",
      price: "Starting at $499/month",
      originalPrice: "$999/month",
      features: ["Medical Imaging", "Symptom Analysis", "Treatment Recommendations", "Patient Monitoring", "Drug Interaction", "Compliance Tracking"],
      category: "Healthcare AI"
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with demand forecasting, inventory optimization, and logistics automation for manufacturing and retail.",
      icon: <Globe className="w-8 h-8" />,
      path: "/ai-supply-chain-optimizer",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Demand Forecasting", "Inventory Optimization", "Route Planning", "Supplier Management", "Risk Assessment", "Cost Analysis"],
      category: "Supply Chain"
    },
    {
      title: "AI Legal Research Assistant",
      description: "Advanced legal research and document analysis with case law search, contract review, and compliance monitoring for law firms and legal departments.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-legal-research",
      color: "from-indigo-500 to-blue-500",
      price: "Starting at $329/month",
      originalPrice: "$659/month",
      features: ["Case Law Search", "Contract Analysis", "Compliance Monitoring", "Document Review", "Legal Research", "Precedent Analysis"],
      category: "Legal Tech"
    },
    {
      title: "AI Energy Management System",
      description: "Smart energy management with consumption optimization, renewable energy integration, and predictive maintenance for utilities and commercial buildings.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-energy-management",
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Energy Optimization", "Renewable Integration", "Predictive Maintenance", "Smart Grid", "Cost Analysis", "Carbon Tracking"],
      category: "Energy Management"
    },
    {
      title: "Enterprise Database Management Pro",
      description: "Comprehensive database solutions with optimization, backup, recovery, and performance monitoring for enterprise applications and data warehouses.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Database Optimization", "Backup & Recovery", "Performance Monitoring", "Security Hardening", "Scalability Planning", "Migration Services"],
      category: "Database Services",
      popular: true
    },
    {
      title: "IT Infrastructure Monitoring Suite",
      description: "24/7 infrastructure monitoring with real-time alerts, performance analytics, and automated incident response for servers, networks, and applications.",
      icon: <Monitor className="w-8 h-8" />,
      path: "/infrastructure-monitoring",
      color: "from-green-500 to-teal-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Real-time Monitoring", "Automated Alerts", "Performance Analytics", "Incident Response", "Capacity Planning", "Health Dashboards"],
      category: "Infrastructure"
    },
    {
      title: "Advanced Network Security Solutions",
      description: "Comprehensive network security with firewall management, intrusion detection, VPN solutions, and threat intelligence for enterprise networks.",
      icon: <Lock className="w-8 h-8" />,
      path: "/network-security",
      color: "from-red-500 to-pink-500",
      price: "Starting at $249/month",
      originalPrice: "$499/month",
      features: ["Firewall Management", "Intrusion Detection", "VPN Solutions", "Threat Intelligence", "Network Segmentation", "Compliance Auditing"],
      category: "Network Security"
    },
    {
      title: "Cloud Migration & Modernization",
      description: "Complete cloud migration services with application modernization, data migration, and cloud-native architecture design for digital transformation.",
      icon: <Server className="w-8 h-8" />,
      path: "/cloud-migration",
      color: "from-purple-500 to-violet-500",
      price: "Starting at $399/month",
      originalPrice: "$799/month",
      features: ["Application Migration", "Data Migration", "Cloud Architecture", "Performance Optimization", "Cost Optimization", "Security Implementation"],
      category: "Cloud Migration"
    },
    {
      title: "DevOps & CI/CD Pipeline Solutions",
      description: "Complete DevOps implementation with continuous integration, deployment automation, container orchestration, and infrastructure as code.",
      icon: <Settings className="w-8 h-8" />,
      path: "/devops-solutions",
      color: "from-orange-500 to-amber-500",
      price: "Starting at $229/month",
      originalPrice: "$459/month",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Automated Testing", "Deployment Automation", "Monitoring & Logging"],
      category: "DevOps"
    },
    {
      title: "Enterprise Backup & Disaster Recovery",
      description: "Comprehensive backup solutions with automated scheduling, disaster recovery planning, and business continuity services for enterprise data protection.",
      icon: <HardDrive className="w-8 h-8" />,
      path: "/backup-disaster-recovery",
      color: "from-slate-500 to-gray-500",
      price: "Starting at $159/month",
      originalPrice: "$319/month",
      features: ["Automated Backups", "Disaster Recovery", "Data Encryption", "Offsite Storage", "Recovery Testing", "Compliance Reporting"],
      category: "Data Protection"
    },
    {
      title: "Mobile App Development Services",
      description: "Native and cross-platform mobile app development with iOS, Android, and React Native solutions for enterprise and consumer applications.",
      icon: <Phone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Native iOS/Android", "Cross-platform Apps", "UI/UX Design", "API Integration", "App Store Optimization", "Maintenance & Support"],
      category: "Mobile Development"
    },
    {
      title: "Web Application Development",
      description: "Custom web application development with modern frameworks, responsive design, and scalable architecture for business applications and e-commerce.",
      icon: <Laptop className="w-8 h-8" />,
      path: "/web-development",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      originalPrice: "$359/month",
      features: ["Custom Web Apps", "Responsive Design", "E-commerce Solutions", "API Development", "Performance Optimization", "SEO Implementation"],
      category: "Web Development"
    },
    {
      title: "IT Support & Help Desk Services",
      description: "24/7 IT support with remote assistance, help desk management, and technical support for end users and IT infrastructure maintenance.",
      icon: <Headphones className="w-8 h-8" />,
      path: "/it-support",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $129/month",
      originalPrice: "$259/month",
      features: ["24/7 Support", "Remote Assistance", "Help Desk Management", "User Training", "Issue Resolution", "Preventive Maintenance"],
      category: "IT Support"
    },
    {
      title: "Network Infrastructure Design",
      description: "Complete network infrastructure design and implementation with LAN, WAN, wireless solutions, and network optimization for enterprise environments.",
      icon: <Network className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $279/month",
      originalPrice: "$559/month",
      features: ["Network Design", "LAN/WAN Setup", "Wireless Solutions", "Network Optimization", "Security Implementation", "Performance Tuning"],
      category: "Network Infrastructure"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting with technology roadmaps, digital transformation planning, and technology assessment for business growth and efficiency.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/it-consulting",
      color: "from-violet-500 to-purple-500",
      price: "Starting at $199/month",
      originalPrice: "$399/month",
      features: ["Technology Roadmaps", "Digital Transformation", "IT Assessment", "Strategic Planning", "Technology Selection", "Implementation Guidance"],
      category: "IT Consulting"
    },
    {
      title: "Cybersecurity Audit & Compliance",
      description: "Comprehensive cybersecurity audits with compliance assessment, vulnerability testing, and security recommendations for regulatory requirements.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-audit",
      color: "from-red-500 to-orange-500",
      price: "Starting at $349/month",
      originalPrice: "$699/month",
      features: ["Security Audits", "Compliance Assessment", "Vulnerability Testing", "Penetration Testing", "Risk Assessment", "Remediation Planning"],
      category: "Cybersecurity"
    },
    {
      title: "Data Center Services & Colocation",
      description: "Secure data center services with colocation, managed hosting, and infrastructure services for enterprise applications and data storage.",
      icon: <Server className="w-8 h-8" />,
      path: "/data-center-services",
      color: "from-slate-600 to-gray-600",
      price: "Starting at $299/month",
      originalPrice: "$599/month",
      features: ["Colocation Services", "Managed Hosting", "Power & Cooling", "Physical Security", "Network Connectivity", "24/7 Monitoring"],
      category: "Data Center"
    },
    {
      title: "IT Asset Management Solutions",
      description: "Complete IT asset management with inventory tracking, lifecycle management, and cost optimization for hardware and software assets.",
      icon: <Settings className="w-8 h-8" />,
      path: "/asset-management",
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $149/month",
      originalPrice: "$299/month",
      features: ["Asset Inventory", "Lifecycle Management", "Cost Tracking", "License Management", "Depreciation Tracking", "Compliance Reporting"],
      category: "Asset Management"
  ];

  return null;
};

export default function ServicesPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Services solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive services solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {
  Brain,
  Cloud,
  Shield,
  BarChart3,
  Smartphone,
  Database,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Settings,
  Code,
  Target,
  TrendingUp,
  Heart,
  FileText,
  Cpu,
  Server,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const aiServices = [
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI for customer service and support',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', '24/7 availability', 'Custom integrations'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing',
      icon: FileText,
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization'],
      price: 'Starting at $199/month',
      popular: false
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      icon: BarChart3,
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      price: 'Starting at $499/month',
      popular: true
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis using advanced computer vision technology',
      icon: Cpu,
      features: ['Image recognition', 'Object detection', 'Video analysis', 'Quality control'],
      price: 'Starting at $399/month',
      popular: false
    }
  ]

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      icon: Cloud,
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      price: 'Starting at $599/month',
      popular: true
    },
    {
      id: 'api-development',
      name: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integrations',
      icon: Code,
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Rate limiting'],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      icon: Shield,
      features: ['Security audits', 'Penetration testing', 'Compliance', 'Incident response'],
      price: 'Starting at $799/month',
      popular: true
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      icon: Database,
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Migration'],
      price: 'Starting at $299/month',
      popular: false
    }
  ]

  const microSaasProducts = [
    {
      id: 'ai-social-media',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content',
      icon: Smartphone,
      features: ['Auto-posting', 'Content generation', 'Analytics', 'Scheduling'],
      price: 'Starting at $99/month',
      popular: true
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos using artificial intelligence',
      icon: Globe,
      features: ['Text-to-video', 'Auto-editing', 'Templates', 'Multi-format export'],
      price: 'Starting at $149/month',
      popular: false
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Intelligent voice assistants for customer service',
      icon: Phone,
      features: ['Voice recognition', 'Natural responses', 'Multi-language', 'Integration'],
      price: 'Starting at $199/month',
      popular: true
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with AI insights',
      icon: BarChart3,
      features: ['Real-time data', 'Predictive analytics', 'Custom reports', 'Alerts'],
      price: 'Starting at $299/month',
      popular: false
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services', count: aiServices.length + itServices.length + microSaasProducts.length },
    { id: 'ai', name: 'AI Services', count: aiServices.length },
    { id: 'it', name: 'IT Services', count: itServices.length },
    { id: 'saas', name: 'Micro SaaS', count: microSaasProducts.length }
  ]

  const getFilteredServices = () => {
    switch (selectedCategory) {
      case 'ai':
        return aiServices
      case 'it':
        return itServices
      case 'saas':
        return microSaasProducts
      default:
        return [...aiServices, ...itServices, ...microSaasProducts]
    }
  }

  const stats = [
    { label: 'Services Delivered', value: '500+', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Response Time', value: '<2 hours', icon: Clock },
    { label: 'Success Rate', value: '100%', icon: TrendingUp }
  ]

  return (
    <>
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, cloud infrastructure, cybersecurity, and custom development solutions." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, API development, micro SaaS" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT solutions designed to transform your business. 
              From intelligent automation to robust infrastructure, we've got you covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <p className="text-green-400 text-sm font-semibold">Flexible pricing</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/demo"
                      className="px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                    >
                      Demo
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs. 
              Our team of experts is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default ServicesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
