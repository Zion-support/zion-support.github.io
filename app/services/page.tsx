'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
  Search,
  Filter,
  Eye,
  Settings,
  Users,
  MessageSquare,
  FileText,
  Target,
  DollarSign,
  Heart,
  Mic,
  Calendar,
  Package,
  Lock,
  Wifi,
  ShoppingCart,
  Code,
  Link,
  Cpu,
  Monitor,
  CheckSquare,
  Mail
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services - Enhanced and Expanded
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning', 'Voice Integration', 'Emotion Recognition'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions', 'Multi-channel support'],
      link: 'https://ziontechgroup.com/ai-chatbot-builder'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models', 'Machine Learning Pipelines'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization', 'Real-time monitoring'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'RPA Integration'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation', 'ROI tracking'],
      link: 'https://ziontechgroup.com/ai-automation'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing', '3D Vision'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction', 'Precision accuracy'],
      link: 'https://ziontechgroup.com/ai-computer-vision'
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts', 'Pattern Recognition'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready', 'Adaptive learning'],
      link: 'https://ziontechgroup.com/ai-fraud-detection'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization', 'Multi-language Support'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing', 'Scalable content'],
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with AI-powered support agents and automated ticket routing.',
      category: 'ai',
      features: ['AI Support Agents', 'Automated Ticket Routing', 'Knowledge Base Integration', 'Sentiment Analysis', 'Multi-channel Support', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['24/7 customer support', 'Faster response times', 'Improved satisfaction', 'Cost reduction', 'Scalable support'],
      link: 'https://ziontechgroup.com/ai-customer-service'
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and analysis using AI to predict market trends and optimize investments.',
      category: 'ai',
      features: ['Market Prediction', 'Risk Assessment', 'Portfolio Optimization', 'Automated Trading', 'Financial Reporting', 'Compliance Monitoring'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Better investment decisions', 'Risk mitigation', 'Automated analysis', 'Compliance assurance', 'ROI optimization'],
      link: 'https://ziontechgroup.com/ai-financial-services'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis assistance, treatment recommendations, and patient monitoring.',
      category: 'ai',
      features: ['Diagnostic Assistance', 'Treatment Recommendations', 'Patient Monitoring', 'Drug Discovery', 'Medical Imaging', 'Clinical Decision Support'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnosis accuracy', 'Faster treatment decisions', 'Patient safety', 'Cost reduction', 'Better outcomes'],
      link: 'https://ziontechgroup.com/ai-healthcare'
    },
    {
      icon: Settings,
      title: 'AI HR Solutions',
      description: 'Intelligent human resources management with AI-powered recruitment, performance analysis, and employee engagement.',
      category: 'ai',
      features: ['AI Recruitment', 'Performance Analysis', 'Employee Engagement', 'Skill Matching', 'Predictive Analytics', 'Compliance Management'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Better hiring decisions', 'Improved retention', 'Performance insights', 'Cost reduction', 'Employee satisfaction'],
      link: 'https://ziontechgroup.com/ai-hr-solutions'
    },
    {
      icon: Globe,
      title: 'AI E-commerce Optimization',
      description: 'AI-powered e-commerce solutions for personalization, inventory management, and sales optimization.',
      category: 'ai',
      features: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Segmentation', 'Sales Forecasting', 'Personalization Engine'],
      price: 'Starting at $449/month',
      marketPrice: '$800-3000/month',
      benefits: ['Increased sales', 'Better customer experience', 'Inventory optimization', 'Personalized shopping', 'Revenue growth'],
      link: 'https://ziontechgroup.com/ai-ecommerce-solutions'
    },
    {
      icon: Mic,
      title: 'AI Voice Solutions',
      description: 'Advanced speech recognition and voice processing solutions for various business applications.',
      category: 'ai',
      features: ['Speech Recognition', 'Voice Commands', 'Text-to-Speech', 'Voice Analytics', 'Multi-language Support', 'Voice Biometrics'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Hands-free operation', 'Accessibility improvement', 'Voice analytics', 'Multi-language support', 'Enhanced UX'],
      link: 'https://ziontechgroup.com/ai-voice-solutions'
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered campaign optimization and customer journey mapping.',
      category: 'ai',
      features: ['Campaign Optimization', 'Customer Journey Mapping', 'Predictive Analytics', 'A/B Testing', 'Lead Scoring', 'Content Personalization'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Higher conversion rates', 'Better targeting', 'Automated campaigns', 'ROI optimization', 'Customer insights'],
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      icon: Database,
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and processing for automated data extraction and document management.',
      category: 'ai',
      features: ['Document Analysis', 'Data Extraction', 'OCR Processing', 'Document Classification', 'Automated Workflows', 'Compliance Checking'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Automated processing', 'Error reduction', 'Time savings', 'Better accuracy', 'Compliance assurance'],
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      icon: Cpu,
      title: 'AI Edge Computing',
      description: 'Distributed AI processing at the edge for real-time decision making and reduced latency.',
      category: 'ai',
      features: ['Edge AI Processing', 'Real-time Inference', 'Distributed Computing', 'IoT Integration', 'Low Latency', 'Offline Capability'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Reduced latency', 'Real-time processing', 'Offline capability', 'Cost efficiency', 'Scalable deployment'],
      link: 'https://ziontechgroup.com/ai-edge-computing'
    },
    {
      icon: BarChart3,
      title: 'AI Predictive Analytics',
      description: 'Advanced predictive modeling and forecasting using machine learning for business intelligence.',
      category: 'ai',
      features: ['Predictive Modeling', 'Forecasting', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning', 'Real-time Predictions'],
      price: 'Starting at $499/month',
      marketPrice: '$800-3000/month',
      benefits: ['Better forecasting', 'Risk mitigation', 'Strategic planning', 'Competitive advantage', 'Data-driven decisions'],
      link: 'https://ziontechgroup.com/ai-predictive-analytics'
    },
    {
      icon: Lock,
      title: 'AI Cybersecurity',
      description: 'AI-powered cybersecurity solutions for threat detection, prevention, and automated response.',
      category: 'ai',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Vulnerability Assessment', 'Incident Response', 'Security Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Enhanced security', 'Automated protection', 'Faster response', 'Reduced false positives', 'Compliance assurance'],
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      icon: Calendar,
      title: 'AI Project Management',
      description: 'Intelligent project management with AI-powered resource allocation, timeline optimization, and risk assessment.',
      category: 'ai',
      features: ['Resource Optimization', 'Timeline Prediction', 'Risk Assessment', 'Task Automation', 'Progress Tracking', 'Team Collaboration'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Better project outcomes', 'Resource optimization', 'Risk mitigation', 'Timeline accuracy', 'Team efficiency'],
      link: 'https://ziontechgroup.com/ai-project-management'
    },
    {
      icon: Package,
      title: 'AI Supply Chain Optimization',
      description: 'AI-powered supply chain management for demand forecasting, inventory optimization, and logistics planning.',
      category: 'ai',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Cost reduction', 'Improved efficiency', 'Better forecasting', 'Risk mitigation', 'Optimized logistics'],
      link: 'https://ziontechgroup.com/ai-supply-chain-optimization'
    },
    {
      icon: Monitor,
      title: 'AI Video Analysis',
      description: 'Advanced video processing and analysis for security, quality control, and business intelligence.',
      category: 'ai',
      features: ['Object Detection', 'Motion Analysis', 'Facial Recognition', 'Quality Control', 'Security Monitoring', 'Behavioral Analysis'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Enhanced security', 'Quality assurance', 'Automated monitoring', 'Real-time analysis', 'Cost reduction'],
      link: 'https://ziontechgroup.com/ai-video-analysis'
    },
    
    // IT Services - Enhanced and Expanded
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance', 'Migration Planning'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support', 'Multi-cloud flexibility'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training', 'Incident Response'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team', 'Proactive protection'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance', 'Cloud Database Services'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support', 'Scalable solutions'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation', 'GitOps'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows', 'Scalable infrastructure'],
      link: 'https://ziontechgroup.com/devops-cicd'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage', 'Digital transformation'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'it',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management', 'E-commerce Solutions'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times', 'Scalable architecture'],
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization', 'UI/UX Design'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement', 'Modern design'],
      link: 'https://ziontechgroup.com/mobile-development'
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      category: 'it',
      features: ['Network Design', 'Wireless Solutions', 'Security Implementation', 'Performance Monitoring', 'Disaster Recovery', 'Cloud Integration', 'SD-WAN'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Cost optimization', 'Expert support'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management and optimization for cost control and compliance.',
      category: 'it',
      features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Reporting', 'Software Licensing', 'Hardware Management', 'Depreciation Tracking'],
      price: 'Starting at $800/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Cost control', 'Compliance assurance', 'Asset optimization', 'Automated tracking', 'ROI maximization'],
      link: 'https://ziontechgroup.com/it-asset-management'
    },
    {
      icon: Lock,
      title: 'IT Security Services',
      description: 'Comprehensive IT security assessment, monitoring, and incident response services.',
      category: 'it',
      features: ['Security Assessment', 'Vulnerability Scanning', 'Penetration Testing', 'Security Monitoring', 'Incident Response', 'Compliance Auditing', 'Security Training'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-6000/month',
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Proactive protection', 'Expert guidance', 'Risk mitigation'],
      link: 'https://ziontechgroup.com/it-security-services'
    },
    {
      icon: Calendar,
      title: 'IT Project Management',
      description: 'Professional IT project management with agile methodologies and expert oversight.',
      category: 'it',
      features: ['Agile Project Management', 'Resource Planning', 'Risk Management', 'Quality Assurance', 'Stakeholder Communication', 'Timeline Management', 'Budget Control'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Project success', 'Timeline adherence', 'Budget control', 'Quality delivery', 'Stakeholder satisfaction'],
      link: 'https://ziontechgroup.com/it-project-management'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Development',
      description: 'Modern cloud-native application development with microservices and containerization.',
      category: 'it',
      features: ['Microservices Architecture', 'Container Orchestration', 'API Development', 'Serverless Computing', 'Cloud Integration', 'DevOps Integration', 'Scalable Design'],
      price: 'Starting at $3,000/month',
      marketPrice: '$5000-15000/month',
      benefits: ['Scalable applications', 'Cloud optimization', 'Modern architecture', 'Cost efficiency', 'Rapid deployment'],
      link: 'https://ziontechgroup.com/cloud-native-development'
    },
    {
      icon: Brain,
      title: 'AI Integration Services',
      description: 'Expert AI model integration and implementation services for existing systems.',
      category: 'it',
      features: ['AI Model Integration', 'API Development', 'Data Pipeline Setup', 'Model Training', 'Performance Optimization', 'Monitoring & Maintenance', 'Custom Solutions'],
      price: 'Starting at $2,000/month',
      marketPrice: '$3500-12000/month',
      benefits: ['Seamless integration', 'Custom solutions', 'Expert implementation', 'Performance optimization', 'Ongoing support'],
      link: 'https://ziontechgroup.com/ai-integration-services'
    },
    {
      icon: Link,
      title: 'Blockchain Development',
      description: 'Blockchain solutions including smart contracts, DeFi applications, and enterprise blockchain.',
      category: 'it',
      features: ['Smart Contract Development', 'DeFi Applications', 'NFT Solutions', 'Enterprise Blockchain', 'Token Development', 'Security Auditing', 'Integration Services'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-50000/project',
      benefits: ['Decentralized solutions', 'Enhanced security', 'Transparency', 'Cost reduction', 'Innovation'],
      link: 'https://ziontechgroup.com/blockchain-development'
    },
    {
      icon: Wifi,
      title: 'IoT Development',
      description: 'Internet of Things solutions for connected devices and smart systems.',
      category: 'it',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Cloud Connectivity', 'Security Implementation', 'Analytics Dashboard'],
      price: 'Starting at $3,500/project',
      marketPrice: '$7000-25000/project',
      benefits: ['Connected solutions', 'Real-time monitoring', 'Data insights', 'Automation', 'Cost efficiency'],
      link: 'https://ziontechgroup.com/iot-development'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Complete e-commerce solutions with modern platforms and custom development.',
      category: 'it',
      features: ['E-commerce Platform Development', 'Payment Integration', 'Inventory Management', 'Order Processing', 'Customer Portal', 'Analytics Dashboard', 'Mobile Commerce'],
      price: 'Starting at $4,000/project',
      marketPrice: '$8000-30000/project',
      benefits: ['Online presence', 'Sales growth', 'Customer experience', 'Mobile optimization', 'Scalable platform'],
      link: 'https://ziontechgroup.com/e-commerce-development'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'RESTful and GraphQL API development with comprehensive documentation and testing.',
      category: 'it',
      features: ['RESTful API Development', 'GraphQL APIs', 'API Documentation', 'Authentication & Authorization', 'Rate Limiting', 'API Testing', 'Version Management'],
      price: 'Starting at $1,500/project',
      marketPrice: '$3000-12000/project',
      benefits: ['System integration', 'Scalable architecture', 'Developer-friendly', 'Secure APIs', 'Comprehensive documentation'],
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Data pipeline development and management for big data processing and analytics.',
      category: 'it',
      features: ['Data Pipeline Development', 'ETL/ELT Processes', 'Data Warehousing', 'Real-time Processing', 'Data Quality Management', 'Cloud Data Solutions', 'Analytics Infrastructure'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['Data-driven insights', 'Scalable processing', 'Real-time analytics', 'Cost optimization', 'Expert implementation'],
      link: 'https://ziontechgroup.com/data-engineering'
    },
    
    // Micro SaaS - Enhanced and Expanded
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture', 'Mobile App'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support', 'Voice Integration'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation', 'Voice support'],
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal', 'Mobile App'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-invoice-genius'
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing', 'Email Marketing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization', 'Email campaigns'],
      link: 'https://ziontechgroup.com/zion-lead-magnet'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      category: 'saas',
      features: ['Real-time Threat Detection', 'Vulnerability Scanning', 'Security Monitoring', 'Incident Response', 'Compliance Reporting', 'Employee Training', 'Mobile Security'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', '24/7 monitoring', 'Compliance assurance', 'Threat prevention', 'Mobile protection'],
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Version Control', 'Cross-platform Sync', 'Compliance Support', 'Mobile Access'],
      price: 'Starting at $79/month',
      marketPrice: '$150-500/month',
      benefits: ['Data protection', 'Disaster recovery', 'Automated backups', 'Secure storage', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      category: 'saas',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Customization', 'Content Calendar', 'Analytics Dashboard', 'Team Collaboration'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Team collaboration', 'Content analytics'],
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Predictive Analytics', 'Automated Workflows', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $179/month',
      marketPrice: '$300-1000/month',
      benefits: ['Better sales performance', 'Predictive insights', 'Automated workflows', 'Customer insights', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Data integration platform for connecting and synchronizing data across multiple systems.',
      category: 'saas',
      features: ['Multi-system Integration', 'Real-time Sync', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management', 'Cloud Integration'],
      price: 'Starting at $159/month',
      marketPrice: '$300-900/month',
      benefits: ['Seamless data flow', 'Real-time synchronization', 'Error reduction', 'System integration', 'Cloud connectivity'],
      link: 'https://ziontechgroup.com/zion-data-sync'
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent resource allocation and timeline optimization.',
      category: 'saas',
      features: ['AI Resource Allocation', 'Timeline Optimization', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking', 'Budget Management', 'Mobile App'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['Better project outcomes', 'Resource optimization', 'Risk mitigation', 'Team collaboration', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-project-master'
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation with AI-powered personalization and campaign optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Segmentation', 'Analytics Dashboard', 'Template Builder', 'Integration Hub'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Higher open rates', 'Automated campaigns', 'Personalized content', 'Better segmentation', 'Campaign analytics'],
      link: 'https://ziontechgroup.com/zion-email-automation'
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with AI-powered demand forecasting and optimization.',
      category: 'saas',
      features: ['AI Demand Forecasting', 'Inventory Optimization', 'Reorder Automation', 'Multi-location Support', 'Analytics Dashboard', 'Mobile App', 'Integration Hub'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Reduced stockouts', 'Optimized inventory', 'Automated reordering', 'Cost savings', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-inventory-smart'
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'Pre-built Templates', 'Integration Hub', 'Conditional Logic', 'Approval Workflows', 'Analytics Dashboard', 'Mobile App'],
      price: 'Starting at $99/month',
      marketPrice: '$180-500/month',
      benefits: ['Process automation', 'Time savings', 'Error reduction', 'Easy setup', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-workflow-automation'
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights and alerting.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Custom Dashboards', 'Mobile App', 'Integration Hub'],
      price: 'Starting at $149/month',
      marketPrice: '$250-800/month',
      benefits: ['Proactive monitoring', 'Faster issue resolution', 'Performance insights', 'Uptime assurance', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-performance-monitor'
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for regulatory requirements and audit preparation.',
      category: 'saas',
      features: ['Compliance Tracking', 'Audit Preparation', 'Document Management', 'Risk Assessment', 'Reporting Dashboard', 'Mobile App', 'Integration Hub'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1000/month',
      benefits: ['Compliance assurance', 'Audit readiness', 'Risk mitigation', 'Document management', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-compliance-manager'
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and analytics.',
      category: 'saas',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Analytics Dashboard', 'Hashtag Optimization', 'Team Collaboration', 'Mobile App', 'Integration Hub'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Consistent posting', 'Better engagement', 'Time savings', 'Analytics insights', 'Team collaboration'],
      link: 'https://ziontechgroup.com/zion-social-scheduler'
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing and content optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Content Optimization', 'Multi-format Export', 'Collaboration Tools', 'Analytics Dashboard', 'Mobile App', 'Cloud Storage'],
      price: 'Starting at $169/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster editing', 'Professional results', 'Content optimization', 'Team collaboration', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-video-editor'
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language processing and cultural adaptation.',
      category: 'saas',
      features: ['AI Translation', 'Cultural Adaptation', 'Multi-language Support', 'Document Translation', 'Voice Translation', 'Mobile App', 'API Integration'],
      price: 'Starting at $129/month',
      marketPrice: '$200-600/month',
      benefits: ['Accurate translations', 'Cultural context', 'Multi-language support', 'Voice translation', 'API integration'],
      link: 'https://ziontechgroup.com/zion-ai-translator-pro'
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis and improvement suggestions.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Analysis', 'Performance Optimization', 'Best Practices', 'Team Collaboration', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Code quality improvement', 'Security enhancement', 'Performance optimization', 'Team collaboration', 'Best practices'],
      link: 'https://ziontechgroup.com/zion-ai-code-reviewer'
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavior prediction.',
      category: 'saas',
      features: ['Customer Analytics', 'Behavior Prediction', 'Segmentation', 'Churn Analysis', 'Personalization', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $189/month',
      marketPrice: '$300-900/month',
      benefits: ['Customer insights', 'Behavior prediction', 'Better segmentation', 'Churn prevention', 'Personalization'],
      link: 'https://ziontechgroup.com/zion-customer-insights-pro'
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'AI-powered email management with smart sorting, drafting, and response suggestions.',
      category: 'saas',
      features: ['Smart Email Sorting', 'AI Drafting', 'Response Suggestions', 'Priority Management', 'Integration Hub', 'Mobile App', 'Analytics Dashboard'],
      price: 'Starting at $69/month',
      marketPrice: '$120-350/month',
      benefits: ['Email efficiency', 'Smart organization', 'Time savings', 'Better responses', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-email-assistant'
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with AI-powered scheduling, transcription, and action items.',
      category: 'saas',
      features: ['AI Scheduling', 'Meeting Transcription', 'Action Item Extraction', 'Calendar Integration', 'Team Collaboration', 'Mobile App', 'Analytics Dashboard'],
      price: 'Starting at $109/month',
      marketPrice: '$180-500/month',
      benefits: ['Meeting efficiency', 'Automatic transcription', 'Action tracking', 'Calendar integration', 'Team collaboration'],
      link: 'https://ziontechgroup.com/zion-ai-meeting-assistant'
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with content analysis and ranking improvement.',
      category: 'saas',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $139/month',
      marketPrice: '$220-600/month',
      benefits: ['Better search rankings', 'Content optimization', 'Competitor insights', 'Technical improvements', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-seo-optimizer'
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'saas',
      features: ['Data Validation', 'Duplicate Detection', 'Data Enrichment', 'Quality Scoring', 'Automated Cleaning', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $119/month',
      marketPrice: '$200-500/month',
      benefits: ['Data quality improvement', 'Automated cleaning', 'Duplicate removal', 'Data enrichment', 'Quality assurance'],
      link: 'https://ziontechgroup.com/zion-ai-data-cleaner'
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and management platform with risk assessment and compliance checking.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Renewal Tracking', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1000/month',
      benefits: ['Contract insights', 'Risk mitigation', 'Compliance assurance', 'Automated analysis', 'Renewal tracking'],
      link: 'https://ziontechgroup.com/zion-ai-contract-analyzer'
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      category: 'saas',
      features: ['AI Question Suggestions', 'Survey Templates', 'Response Analytics', 'A/B Testing', 'Integration Hub', 'Mobile App', 'Export Options'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Better surveys', 'AI suggestions', 'Response analytics', 'A/B testing', 'Easy creation'],
      link: 'https://ziontechgroup.com/zion-ai-survey-builder'
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Financial Analysis', 'Tax Preparation', 'Expense Tracking', 'Reporting Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $159/month',
      marketPrice: '$250-700/month',
      benefits: ['Automated bookkeeping', 'Financial insights', 'Tax preparation', 'Expense tracking', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-accounting-assistant'
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'AI-powered recruitment platform with candidate screening and interview automation.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Interview Automation', 'Skill Assessment', 'Job Matching', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Better candidate matching', 'Automated screening', 'Skill assessment', 'Faster hiring', 'Analytics insights'],
      link: 'https://ziontechgroup.com/zion-ai-recruitment-pro'
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance checking.',
      category: 'saas',
      features: ['Automated Filtering', 'Content Analysis', 'Compliance Checking', 'Real-time Moderation', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Automated moderation', 'Compliance assurance', 'Real-time filtering', 'Content analysis', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-content-moderation'
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'AI-powered predictive maintenance platform for equipment monitoring and failure prevention.',
      category: 'saas',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $199/month',
      marketPrice: '$350-900/month',
      benefits: ['Preventive maintenance', 'Cost reduction', 'Equipment optimization', 'Failure prevention', 'Mobile monitoring'],
      link: 'https://ziontechgroup.com/zion-ai-predictive-maintenance'
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimization and cost reduction.',
      category: 'saas',
      features: ['Energy Monitoring', 'Cost Optimization', 'Usage Analytics', 'Predictive Modeling', 'Integration Hub', 'Mobile App', 'Reporting Dashboard'],
      price: 'Starting at $129/month',
      marketPrice: '$200-600/month',
      benefits: ['Energy cost reduction', 'Usage optimization', 'Predictive insights', 'Mobile monitoring', 'Cost savings'],
      link: 'https://ziontechgroup.com/zion-ai-energy-manager'
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'AI-powered supply chain optimization platform for demand forecasting and logistics planning.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $189/month',
      marketPrice: '$300-800/month',
      benefits: ['Supply chain optimization', 'Cost reduction', 'Better forecasting', 'Logistics planning', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer'
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'AI-powered fraud detection platform with real-time monitoring and prevention.',
      category: 'saas',
      features: ['Real-time Detection', 'Pattern Analysis', 'Risk Scoring', 'Automated Alerts', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $169/month',
      marketPrice: '$280-700/month',
      benefits: ['Fraud prevention', 'Real-time detection', 'Risk mitigation', 'Automated alerts', 'Mobile monitoring'],
      link: 'https://ziontechgroup.com/zion-ai-fraud-detector'
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced AI customer service platform with multi-channel support and intelligent routing.',
      category: 'saas',
      features: ['Multi-channel Support', 'Intelligent Routing', 'Sentiment Analysis', 'Knowledge Base', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $199/month',
      marketPrice: '$350-900/month',
      benefits: ['Enhanced customer service', 'Multi-channel support', 'Intelligent routing', 'Customer insights', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-customer-service-pro'
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'AI-powered marketing automation platform with campaign optimization and personalization.',
      category: 'saas',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'Lead Scoring', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Marketing automation', 'Personalized campaigns', 'Better targeting', 'Lead optimization', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-marketing-automation'
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'AI-powered document processing platform with intelligent extraction and analysis.',
      category: 'saas',
      features: ['Document Processing', 'Data Extraction', 'OCR Technology', 'Classification', 'Analytics Dashboard', 'Integration Hub', 'Mobile App'],
      price: 'Starting at $139/month',
      marketPrice: '$220-600/month',
      benefits: ['Document automation', 'Data extraction', 'OCR processing', 'Classification', 'Mobile access'],
      link: 'https://ziontechgroup.com/zion-ai-document-ai'
    }
  ];
  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'ai', name: 'AI Services', count: services.filter(s => s.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: services.filter(s => s.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'saas').length }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, IT, and Micro SaaS services designed to transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to transform your business with cutting-edge technology
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link || "/contact"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ServicesPage;
