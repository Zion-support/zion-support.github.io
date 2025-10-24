<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('all')
=======
  const services = [
    // AI Services
=======
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'Machine Learning Solutions',
          description: 'Custom ML models for predictive analytics and decision-making',
          price: 'Starting at $1,500/month',
          features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring']
        },
        {
          name: 'Natural Language Processing',
          description: 'Advanced NLP solutions for text analysis and language understanding',
          price: 'Starting at $1,200/month',
          features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development']
        },
        {
          name: 'Computer Vision',
          description: 'Image and video analysis solutions for object detection and recognition',
          price: 'Starting at $1,800/month',
          features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition']
        },
        {
          name: 'AI Automation',
          description: 'Intelligent process automation with decision-making capabilities',
          price: 'Starting at $1,400/month',
          features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling']
        }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and support',
      services: [
        {
          name: 'Cloud Migration & Management',
          description: 'Seamless migration to AWS, Azure, or GCP with 99.9% uptime guarantee',
          price: 'Starting at $1,299/month',
          features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring']
        },
        {
          name: 'Cybersecurity',
          description: 'Advanced security solutions with threat detection and prevention',
          price: 'Starting at $1,599/month',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response']
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamlined development workflows with automated testing and deployment',
          price: 'Starting at $1,199/month',
          features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup']
        },
        {
          name: 'Database Management',
          description: 'Database design, optimization, and management with AI-powered tuning',
          price: 'Starting at $899/month',
          features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening']
        }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Ready-to-use AI-powered applications',
      services: [
        {
          name: 'AI Project Manager',
          description: 'Intelligent project planning with AI-powered resource optimization',
          price: '$99/month',
          features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration']
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automate your social media with AI-powered content creation',
          price: '$79/month',
          features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence']
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with AI-powered insights',
          price: '$149/month',
          features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking']
        },
        {
          name: 'AI Email Marketing',
          description: 'Transform your email marketing with AI-powered content generation',
          price: '$99/month',
          features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns']
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and goals to create a tailored solution strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a comprehensive solution architecture that aligns with your business objectives.',
      icon: Code
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations and maximum efficiency.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure peak performance.',
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Users },
    { number: '50+', label: 'Expert Engineers', icon: Award }
  ];

  const benefits = [
  const additionalServices = [
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true;
    },
    {
      icon: Brain,
      title: 'AI Voice Assistant Platform',
      description: 'Build custom voice assistants with natural language understanding, multi-language support, and enterprise integration.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Enterprise Integration', 'Custom Wake Words'],
      price: 'Starting at $299/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and real-time monitoring systems.',
      features: ['Failure Prediction', 'Real-time Monitoring', 'Maintenance Scheduling', 'Cost Optimization', 'IoT Integration'],
      price: 'Starting at $599/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment'],
      price: 'Starting at $899/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Quality Control System',
      description: 'Automated quality inspection using computer vision and machine learning for manufacturing and production lines.',
      features: ['Computer Vision', 'Defect Detection', 'Real-time Inspection', 'Quality Reports', 'Integration APIs'],
      price: 'Starting at $1,199/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Energy Management',
      description: 'Optimize energy consumption with AI-powered smart grid management and renewable energy integration.',
      features: ['Energy Optimization', 'Smart Grid Management', 'Renewable Integration', 'Cost Analysis', 'Carbon Footprint'],
      price: 'Starting at $799/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Legal Document Analysis',
      description: 'Automated legal document review, contract analysis, and compliance monitoring with AI technology.',
      features: ['Document Review', 'Contract Analysis', 'Compliance Monitoring', 'Risk Assessment', 'Legal Research'],
      price: 'Starting at $1,299/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment recommendations powered by artificial intelligence.',
      features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Trend Prediction', 'Portfolio Management'],
      price: 'Starting at $499/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Human Resources Assistant',
      description: 'Streamline HR processes with AI-powered recruitment, employee analytics, and performance management.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Retention Analysis'],
      price: 'Starting at $399/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Insurance Risk Assessment',
      description: 'Advanced risk evaluation and fraud detection for insurance companies using machine learning algorithms.',
      features: ['Risk Evaluation', 'Fraud Detection', 'Claims Processing', 'Underwriting Support', 'Compliance Monitoring'],
      price: 'Starting at $1,499/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Educational Platform',
      description: 'Personalized learning experiences with AI-powered content adaptation and student performance analytics.',
      features: ['Personalized Learning', 'Content Adaptation', 'Performance Analytics', 'Learning Paths', 'Progress Tracking'],
      price: 'Starting at $299/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Transportation Optimization',
      description: 'Optimize transportation routes, fleet management, and logistics with AI-powered decision making.',
      features: ['Route Optimization', 'Fleet Management', 'Demand Prediction', 'Fuel Optimization', 'Driver Scheduling'],
      price: 'Starting at $699/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Environmental Monitoring',
      description: 'Monitor environmental conditions and predict climate impacts using AI and IoT sensor data.',
      features: ['Environmental Sensing', 'Climate Prediction', 'Pollution Monitoring', 'Data Analysis', 'Alert Systems'],
      price: 'Starting at $599/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Retail Personalization',
      description: 'Create personalized shopping experiences with AI-driven product recommendations and customer insights.',
      features: ['Product Recommendations', 'Customer Segmentation', 'Price Optimization', 'Inventory Management', 'Customer Analytics'],
      price: 'Starting at $799/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Sports Analytics',
      description: 'Advanced sports performance analysis, injury prediction, and team optimization using AI technology.',
      features: ['Performance Analysis', 'Injury Prediction', 'Team Optimization', 'Player Scouting', 'Game Strategy'],
      price: 'Starting at $999/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Mental Health Assistant',
      description: 'AI-powered mental health monitoring, mood tracking, and therapeutic support applications.',
      features: ['Mood Tracking', 'Stress Analysis', 'Therapeutic Support', 'Crisis Detection', 'Wellness Recommendations'],
      price: 'Starting at $199/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns and intelligent optimization.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      price: 'Starting at $399/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'AI Services',
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'AI Services',
    },
    
    // Cloud Services
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true;
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection and compliance management.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', 'Monitoring'],
      price: 'Starting at $599/month',
      category: 'Cloud Services',
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $799/month',
      category: 'Cloud Services',
    },
    
    // Cybersecurity
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance', 'Threat Intelligence'],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true;
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity',
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your defenses.',
      features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Security', 'Web Application Testing', 'Reporting'],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity',
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting solutions.',
      features: ['Regulatory Compliance', 'Automated Monitoring', 'Audit Trails', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Cybersecurity',
    },
    
    // Data Analytics
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      popular: true;
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing and analytics platforms.',
      features: ['Data Processing', 'Real-time Analytics', 'Scalable Infrastructure', 'Machine Learning', 'Data Lakes'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with interactive dashboards and automated reporting.',
      features: ['Interactive Dashboards', 'Automated Reports', 'Data Integration', 'Self-service Analytics', 'Mobile Access'],
      price: 'Starting at $899/month',
      category: 'Data Analytics',
    },
    
    // Mobile Development
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: true;
    },
    {
      icon: Smartphone,
      title: 'Mobile App Maintenance',
      description: 'Ongoing maintenance and updates for your mobile applications with performance optimization.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', 'App Store Management'],
      price: 'Starting at $299/month',
      category: 'Mobile Development',
    },
    
    // Database Services
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Database Services',
      popular: true;
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Seamless database migration with zero downtime and data integrity preservation.',
      features: ['Zero Downtime', 'Data Integrity', 'Performance Optimization', 'Testing', 'Documentation'],
      price: 'Starting at $1,999/migration',
      category: 'Database Services',
    },
    
    // Automation
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true;
    },
    {
      icon: Zap,
      title: 'IT Automation',
      description: 'Automate IT operations with intelligent monitoring, deployment, and maintenance solutions.',
      features: ['Infrastructure Automation', 'Deployment Automation', 'Monitoring', 'Self-healing', 'Cost Optimization'],
      price: 'Starting at $799/month',
      category: 'Automation',
    },
    
    // Web Development
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true;
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features and integrations.',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimization'],
      price: 'Starting at $1,999/month',
      category: 'Web Development',
    },
    
    // IT Services
    {
      icon: Database,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'IT Services',
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'IT Services',
    },
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'IT Services',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management with 99.9% uptime guarantee and 24/7 monitoring.',
      features: ['99.9% Uptime SLA', '24/7 Monitoring', 'Auto-scaling', 'Cost Optimization', 'Security Management'],
      price: 'Starting at $1,299/month',
      category: 'IT Services',
    },
    {
      icon: Shield,
      title: 'Network Security Solutions',
      description: 'Advanced network security with firewall management, intrusion detection, and threat prevention.',
      features: ['Firewall Management', 'Intrusion Detection', 'Threat Prevention', 'VPN Solutions', 'Network Monitoring'],
      price: 'Starting at $599/month',
      category: 'IT Services',
    },
    {
      icon: Database,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions with automated backups and instant recovery.',
      features: ['Automated Backups', 'Instant Recovery', 'Disaster Recovery', 'Data Encryption', 'Compliance'],
      price: 'Starting at $199/month',
      category: 'IT Services',
    },
    {
      icon: Settings,
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with inventory tracking, maintenance scheduling, and cost optimization.',
      features: ['Asset Tracking', 'Maintenance Scheduling', 'Cost Optimization', 'License Management', 'Depreciation Tracking'],
      price: 'Starting at $149/month',
      category: 'IT Services',
    },
    {
      icon: Globe,
      title: 'Website Hosting & Maintenance',
      description: 'Reliable website hosting with SSL certificates, CDN, and regular maintenance for optimal performance.',
      features: ['99.9% Uptime', 'SSL Certificates', 'CDN Integration', 'Regular Updates', 'Performance Monitoring'],
      price: 'Starting at $49/month',
      category: 'IT Services',
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Enterprise mobile device management with security policies, app management, and remote control.',
      features: ['Device Security', 'App Management', 'Remote Control', 'Policy Enforcement', 'Data Protection'],
      price: 'Starting at $99/month',
      category: 'IT Services',
    },
    {
      icon: Shield,
      title: 'Compliance & Audit Services',
      description: 'Ensure regulatory compliance with automated monitoring, audit trails, and compliance reporting.',
      features: ['Regulatory Compliance', 'Audit Trails', 'Compliance Reporting', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'IT Services',
    },
    {
      icon: BarChart3,
      title: 'IT Performance Monitoring',
      description: 'Real-time IT performance monitoring with alerting, reporting, and optimization recommendations.',
      features: ['Real-time Monitoring', 'Performance Alerts', 'Optimization Recommendations', 'Capacity Planning', 'Trend Analysis'],
      price: 'Starting at $299/month',
      category: 'IT Services',
    },
    {
      icon: Users,
      title: 'IT Training & Support',
      description: 'Comprehensive IT training programs and ongoing support for your team and end users.',
      features: ['Custom Training Programs', 'End-user Support', 'Technical Documentation', 'Video Tutorials', 'Certification'],
      price: 'Starting at $199/month',
      category: 'IT Services',
    },
    {
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional IT project management with planning, execution, and delivery of technology initiatives.',
      features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management', 'Quality Assurance'],
      price: 'Starting at $399/month',
      category: 'IT Services',
    },
    {
      icon: Shield,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security vulnerability assessment with penetration testing and remediation guidance.',
      features: ['Vulnerability Scanning', 'Penetration Testing', 'Remediation Guidance', 'Security Reports', 'Follow-up Testing'],
      price: 'Starting at $1,999/assessment',
      category: 'IT Services',
    },
    {
      icon: Cloud,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless hybrid cloud solutions combining on-premises and cloud infrastructure for optimal performance.',
      features: ['Hybrid Architecture', 'Data Synchronization', 'Workload Migration', 'Cost Optimization', 'Security Integration'],
      price: 'Starting at $1,599/month',
      category: 'IT Services',
    },
    {
      icon: Database,
      title: 'Data Migration Services',
      description: 'Secure and efficient data migration between systems with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Migration Planning', 'Testing & Validation', 'Rollback Capability'],
      price: 'Starting at $2,999/project',
      category: 'IT Services',
    },
    {
      icon: Globe,
      title: 'API Development & Integration',
      description: 'Custom API development and integration services for seamless data exchange between systems.',
      features: ['Custom API Development', 'System Integration', 'API Documentation', 'Testing & Validation', 'Performance Optimization'],
      price: 'Starting at $799/month',
      category: 'IT Services',
    },
    {
      icon: Settings,
      title: 'IT Governance & Strategy',
      description: 'Strategic IT governance and technology roadmap development for long-term business success.',
      features: ['IT Strategy Development', 'Technology Roadmaps', 'Governance Frameworks', 'Risk Management', 'Performance Metrics'],
      price: 'Starting at $499/month',
      category: 'IT Services',
    },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

  const aiServices = [
    {
<<<<<<< HEAD
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
=======
      icon: Smartphone,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.',
      features: ['AI Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Contact Management', 'Sales Pipeline'],
      price: '$149/month',
      category: 'Micro SAAS',
      popular: true;
    },
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Visualization', 'Predictive Insights'],
      price: '$199/month',
      category: 'Micro SAAS',
      popular: true;
    },
    {
      icon: Code,
      title: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      features: ['AI Writing', 'Image Generation', 'Video Editing', 'Social Media Automation', 'SEO Optimization'],
      price: '$299/month',
      category: 'Micro SAAS',
      popular: true;
    },
    {
      icon: Users,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      features: ['No-code Builder', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
      price: '$99/month',
      category: 'Micro SAAS',
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.',
      features: ['AI Optimization', 'Personalization', 'A/B Testing', 'Advanced Analytics', 'Automation Workflows'],
      price: '$179/month',
      category: 'Micro SAAS',
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.',
      features: ['Drag-and-drop Builder', 'AI Code Generation', 'Instant Deployment', 'Cross-platform', 'App Store Publishing'],
      price: '$399/month',
      category: 'Micro SAAS',
    },
    {
      icon: Search,
      title: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO'],
      price: '$129/month',
      category: 'Micro SAAS',
    },
    {
      icon: BarChart3,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.',
      features: ['Automated Invoicing', 'Payment Tracking', 'Financial Reports', 'Tax Calculations', 'Client Portal'],
      price: '$79/month',
      category: 'Micro SAAS',
    },
    {
      icon: Code,
      title: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.',
      features: ['50+ Templates', 'Multi-language Support', 'Plagiarism Check', 'SEO Optimization', 'Tone Adjustment'],
      price: '$29/month',
      category: 'Micro SAAS',
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Real-time business analytics with AI insights, automated reports, and predictive forecasting.',
      features: ['Real-time Analytics', 'Predictive Forecasting', 'Automated Reports', 'Custom Metrics', 'Data Integration'],
      price: '$49/month',
      category: 'Micro SAAS',
    },
    {
      icon: Calendar,
      title: 'AI Scheduler',
      description: 'Intelligent scheduling with calendar optimization, meeting coordination, and time management.',
      features: ['Calendar Optimization', 'Meeting Coordination', 'Time Management', 'Auto-scheduling', 'Integration APIs'],
      price: '$19/month',
      category: 'Micro SAAS',
    },
    {
      icon: BarChart3,
      title: 'Expense Tracker',
      description: 'AI-powered expense management with receipt scanning, categorization, and budget insights.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Insights', 'Tax Preparation', 'Multi-currency'],
      price: '$15/month',
      category: 'Micro SAAS',
    },
    {
      icon: CheckSquare,
      title: 'Task Manager Pro',
      description: 'Advanced task management with AI prioritization, team collaboration, and progress tracking.',
      features: ['AI Prioritization', 'Team Collaboration', 'Progress Tracking', 'Time Tracking', 'Project Templates'],
      price: '$39/month',
      category: 'Micro SAAS',
    },
    {
      icon: Users,
      title: 'CRM Lite',
      description: 'Lightweight CRM with AI lead scoring, contact management, and sales pipeline automation.',
      features: ['AI Lead Scoring', 'Contact Management', 'Sales Pipeline', 'Email Integration', 'Mobile App'],
      price: '$59/month',
      category: 'Micro SAAS',
    },
    {
      icon: Mail,
      title: 'Email Optimizer',
      description: 'AI-powered email optimization with subject line suggestions, send time optimization, and A/B testing.',
      features: ['Subject Line AI', 'Send Time Optimization', 'A/B Testing', 'Open Rate Tracking', 'Spam Analysis'],
      price: '$25/month',
      category: 'Micro SAAS',
    },
    {
      icon: Globe,
      title: 'Social Media Manager',
      description: 'AI-driven social media management with content creation, scheduling, and performance analytics.',
      features: ['Content Creation', 'Auto-scheduling', 'Performance Analytics', 'Multi-platform', 'Engagement Tracking'],
      price: '$45/month',
      category: 'Micro SAAS',
    },
    {
      icon: Code,
      title: 'AI Design Studio',
      description: 'Create stunning graphics, logos, and marketing materials with AI-powered design tools.',
      features: ['AI Design Tools', 'Logo Generation', 'Marketing Materials', 'Brand Kit', 'Template Library'],
      price: '$35/month',
      category: 'Micro SAAS',
    },
    {
      icon: Globe,
      title: 'Landing Page Builder',
      description: 'Build high-converting landing pages with AI optimization and A/B testing capabilities.',
      features: ['Drag-and-drop Builder', 'AI Optimization', 'A/B Testing', 'Conversion Tracking', 'Mobile Responsive'],
      price: '$29/month',
      category: 'Micro SAAS',
    },
    {
      icon: Search,
      title: 'SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization with keyword research and content suggestions.',
      features: ['SEO Analysis', 'Keyword Research', 'Content Suggestions', 'Ranking Tracking', 'Technical Audits'],
      price: '$49/month',
      category: 'Micro SAAS',
    },
    {
      icon: BarChart3,
      title: 'Ad Campaign Manager',
      description: 'Automated ad campaign management with AI optimization across Google, Facebook, and LinkedIn.',
      features: ['Multi-platform Ads', 'AI Optimization', 'Budget Management', 'Performance Tracking', 'Auto-bidding'],
      price: '$79/month',
      category: 'Micro SAAS',
    },
    {
      icon: Code,
      title: 'Code Assistant',
      description: 'AI-powered code completion, debugging, and optimization for multiple programming languages.',
      features: ['Code Completion', 'Debugging Help', 'Code Optimization', 'Multi-language Support', 'Documentation'],
      price: '$39/month',
      category: 'Micro SAAS',
    },
    {
      icon: Settings,
      title: 'API Builder',
      description: 'Create and manage APIs with AI assistance, documentation generation, and testing tools.',
      features: ['API Creation', 'Documentation Generation', 'Testing Tools', 'Version Control', 'Rate Limiting'],
      price: '$59/month',
      category: 'Micro SAAS',
    },
    {
      icon: Shield,
      title: 'Bug Tracker Pro',
      description: 'Advanced bug tracking with AI-powered issue detection, prioritization, and resolution suggestions.',
      features: ['AI Issue Detection', 'Priority Scoring', 'Resolution Suggestions', 'Team Collaboration', 'Integration APIs'],
      price: '$25/month',
      category: 'Micro SAAS',
    },
    {
      icon: FileText,
      title: 'Doc Generator',
      description: 'Automatically generate technical documentation, API docs, and user guides from code.',
      features: ['Auto Documentation', 'API Docs', 'User Guides', 'Code Comments', 'Multiple Formats'],
      price: '$19/month',
      category: 'Micro SAAS',
    },
    {
      icon: Users,
      title: 'AI Recruitment Assistant',
      description: 'Streamline hiring with AI-powered resume screening, candidate matching, and interview scheduling.',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Background Checks'],
      price: '$199/month',
      category: 'Micro SAAS',
    },
    {
      icon: Shield,
      title: 'Medical Records Manager',
      description: 'HIPAA-compliant medical records management with AI-powered data extraction and analysis.',
      features: ['HIPAA Compliance', 'Data Extraction', 'Medical Analysis', 'Patient Portal', 'Integration APIs'],
      price: '$299/month',
      category: 'Micro SAAS',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      icon: BarChart3,
<<<<<<< HEAD
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
=======
      title: 'AI Accounting Assistant',
      description: 'Automated accounting with AI-powered bookkeeping, tax preparation, and financial reporting.',
      features: ['Automated Bookkeeping', 'Tax Preparation', 'Financial Reports', 'Expense Tracking', 'Compliance'],
      price: '$149/month',
      category: 'Micro SAAS',
    },
    {
      icon: BarChart3,
      title: 'Property Management AI',
      description: 'AI-powered property management with tenant screening, maintenance scheduling, and rent optimization.',
      features: ['Tenant Screening', 'Maintenance Scheduling', 'Rent Optimization', 'Property Analytics', 'Tenant Portal'],
      price: '$179/month',
      category: 'Micro SAAS',
    },
    {
      icon: Shield,
      title: 'Legal Document Manager',
      description: 'AI-powered legal document management with contract analysis, compliance tracking, and risk assessment.',
      features: ['Contract Analysis', 'Compliance Tracking', 'Risk Assessment', 'Document Templates', 'Legal Research'],
      price: '$249/month',
      category: 'Micro SAAS',
    },
    {
      icon: Users,
      title: 'Online Learning Platform',
      description: 'AI-powered educational platform with personalized learning paths and progress tracking.',
      features: ['Personalized Learning', 'Progress Tracking', 'Course Creation', 'Assessment Tools', 'Certification'],
      price: '$99/month',
      category: 'Micro SAAS',
    },
    {
      icon: BarChart3,
      title: 'Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization with demand forecasting and inventory management.',
      features: ['Demand Forecasting', 'Inventory Management', 'Supplier Analytics', 'Risk Assessment', 'Cost Optimization'],
      price: '$399/month',
      category: 'Micro SAAS',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
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
    <React.Fragment>
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including chatbots, cloud infrastructure, cybersecurity, and custom development solutions." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, API development, micro SaaS" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI and IT solutions designed to transform your business. 
              From intelligent automation to robust infrastructure, we've got you covered.
            </p>
<<<<<<< HEAD
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
=======
          </div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
<<<<<<< HEAD
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
=======
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div></div></div></div></div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div></div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover: bg-white/20',
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
'use client';

import React from 'react';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Globe, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for automation, prediction, and intelligent decision-making.",
      features: ["Custom AI Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      price: "Starting at $5,000/month"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "DevOps Automation", "Container Orchestration", "Serverless Architecture"],
      price: "Starting at $3,000/month"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"],
      price: "Starting at $2,500/month"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our analytics solutions.",
      features: ["Business Intelligence", "Real-time Analytics", "Data Visualization", "Predictive Modeling"],
      price: "Starting at $4,000/month"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Optimization"],
      price: "Starting at $8,000/project"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications with cutting-edge technologies.",
      features: ["React/Next.js", "E-commerce", "Progressive Web Apps", "Performance Optimization"],
      price: "Starting at $6,000/project"
    }
  ];

  return (
    <ErrorBoundary>
      <SEOHead 
        title="Services - Zion Tech Group - AI-Powered Enterprise Solutions"
        description="Comprehensive technology services including AI & Machine Learning, Cloud Solutions, Cybersecurity, Data Analytics, Mobile Development, and Web Development."
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation journey.
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="container mx-auto">
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div></div>
            
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredServices().map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </div></div></div>
                  )}
<<<<<<< HEAD
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
=======
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <p className="text-green-400 text-sm font-semibold">Flexible pricing</p>
                  </div>
<<<<<<< HEAD

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
=======
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div></div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD
=======
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages; }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover: bg-white/20',
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div></div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
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
<<<<<<< HEAD
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
=======
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your project requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div></div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </React.Fragment>
=======
      </main>

      <Footer />
    </ErrorBoundary>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

<<<<<<< HEAD
export default ServicesPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default ServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Services() {return (
    <>
      <title>Services - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
