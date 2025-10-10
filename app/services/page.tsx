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
  Code,
  Wifi,
  Package,
  Monitor,
  Lock,
  BarChart,
  Calendar,
  Mail,
  DollarSign,
  Heart,
  Cpu,
  Mic
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis for 24/7 customer support.',
      category: 'ai',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'CRM Integration', 'Real-time Learning'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform and predictive modeling.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Custom Data Models'],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation across industries.',
      category: 'ai',
      features: ['Object Detection', 'Quality Control Automation', 'Facial Recognition', 'Video Analytics', 'Real-time Processing'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time.',
      category: 'ai',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Anomaly Detection', 'Automated Alerts'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready']
    },
    {
      icon: FileText,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform with GPT-4 integration for blogs, marketing, and technical documentation.',
      category: 'ai',
      features: ['GPT-4 Integration', 'Multi-format Content', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['90% content creation time saved', 'Consistent brand voice', 'SEO optimized output', 'Multi-language support']
    },
    {
      icon: Users,
      title: 'AI Customer Intelligence',
      description: 'Comprehensive customer behavior analysis and predictive modeling for enhanced customer experience.',
      category: 'ai',
      features: ['Behavioral Analytics', 'Churn Prediction', 'Customer Segmentation', 'Personalization Engine', 'Sentiment Tracking'],
      price: 'Starting at $449/month',
      marketPrice: '$800-2500/month',
      benefits: ['Increase retention by 40%', 'Personalized experiences', 'Predictive insights', 'Customer lifetime value optimization']
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaign management with AI-powered audience targeting and optimization.',
      category: 'ai',
      features: ['Audience Segmentation', 'Campaign Optimization', 'A/B Testing AI', 'Content Personalization', 'ROI Prediction'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Increase conversion by 65%', 'Automated campaign management', 'Better targeting', 'Higher ROI']
    },
    {
      icon: Settings,
      title: 'AI Process Intelligence',
      description: 'Advanced process mining and optimization using AI to identify bottlenecks and improve efficiency.',
      category: 'ai',
      features: ['Process Mining', 'Bottleneck Detection', 'Optimization Recommendations', 'Compliance Monitoring', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Process efficiency gains', 'Cost reduction', 'Compliance assurance', 'Continuous improvement']
    },
    {
      icon: Globe,
      title: 'AI Language Translation',
      description: 'Real-time multilingual translation and localization services powered by advanced neural networks.',
      category: 'ai',
      features: ['Real-time Translation', '100+ Languages', 'Context Awareness', 'Industry-specific Terms', 'Voice Translation'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Global reach', 'Accurate translations', 'Real-time communication', 'Cultural adaptation']
    },
    {
      icon: Database,
      title: 'AI Data Engineering',
      description: 'Intelligent data pipeline automation and management with AI-powered data quality assurance.',
      category: 'ai',
      features: ['Automated Data Pipelines', 'Data Quality AI', 'Schema Evolution', 'Real-time Processing', 'Anomaly Detection'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Data quality improvement', 'Automated processing', 'Reduced manual work', 'Scalable data management']
    },
    {
      icon: MessageSquare,
      title: 'AI Voice Assistant Platform',
      description: 'Enterprise-grade voice AI platform with natural language understanding and multi-modal interactions.',
      category: 'ai',
      features: ['Voice Recognition', 'Natural Language Understanding', 'Multi-modal Input', 'Custom Voice Training', 'Integration APIs'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2000/month',
      benefits: ['Hands-free operations', 'Natural interactions', 'Multi-language support', 'Customizable responses']
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Advanced medical AI for diagnostic assistance, treatment recommendations, and patient monitoring.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Symptom Assessment', 'Treatment Recommendations', 'Drug Interaction Check', 'Patient Monitoring'],
      price: 'Starting at $1299/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Better patient outcomes']
    },
    {
      icon: DollarSign,
      title: 'AI Financial Forecasting',
      description: 'Advanced financial modeling and prediction using machine learning for investment and risk management.',
      category: 'ai',
      features: ['Market Prediction', 'Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Regulatory Compliance'],
      price: 'Starting at $999/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Better investment decisions', 'Risk mitigation', 'Regulatory compliance', 'Automated reporting']
    },
    {
      icon: Cpu,
      title: 'AI Edge Computing',
      description: 'Distributed AI processing at the edge for real-time decision making and reduced latency.',
      category: 'ai',
      features: ['Edge AI Models', 'Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
      price: 'Starting at $699/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Real-time responses', 'Reduced bandwidth', 'Offline functionality', 'Lower latency']
    },
    {
      icon: Lock,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered security solution with threat detection, prevention, and response automation.',
      category: 'ai',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Vulnerability Scanning', 'Compliance Monitoring'],
      price: 'Starting at $899/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Proactive threat prevention', 'Automated response', 'Reduced security incidents', 'Compliance assurance']
    },
    {
      icon: BarChart,
      title: 'AI Predictive Maintenance',
      description: 'Intelligent equipment monitoring and maintenance prediction to prevent failures and optimize operations.',
      category: 'ai',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Reduced downtime', 'Cost savings', 'Extended equipment life', 'Optimized maintenance']
    },
    {
      icon: Smartphone,
      title: 'AI Mobile App Intelligence',
      description: 'AI-powered mobile app analytics and optimization for better user engagement and performance.',
      category: 'ai',
      features: ['User Behavior Analysis', 'App Performance Optimization', 'Personalization Engine', 'Crash Prediction', 'A/B Testing'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Better user engagement', 'Reduced crashes', 'Personalized experiences', 'Higher retention']
    },
    {
      icon: Calendar,
      title: 'AI Meeting Intelligence',
      description: 'Smart meeting management with AI-powered scheduling, transcription, and action item extraction.',
      category: 'ai',
      features: ['Smart Scheduling', 'Real-time Transcription', 'Action Item Extraction', 'Meeting Analytics', 'Follow-up Automation'],
      price: 'Starting at $199/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved meeting efficiency', 'Better follow-ups', 'Time savings', 'Enhanced collaboration']
    },
    {
      icon: Package,
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
      category: 'ai',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Analysis', 'Risk Assessment'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation']
    },
    {
      icon: Mic,
      title: 'AI Speech Analytics',
      description: 'Advanced speech analysis for customer service, sales calls, and communication optimization.',
      category: 'ai',
      features: ['Speech Recognition', 'Sentiment Analysis', 'Call Analytics', 'Quality Scoring', 'Compliance Monitoring'],
      price: 'Starting at $349/month',
      marketPrice: '$500-1500/month',
      benefits: ['Improved customer service', 'Better call quality', 'Compliance assurance', 'Performance insights']
    },
    
    // IT Services
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services.',
      category: 'it',
      features: ['Cloud Architecture Design', 'Multi-cloud Strategies', 'Cost Optimization', 'Disaster Recovery', 'Auto-scaling', 'Security Compliance'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response.',
      category: 'it',
      features: ['Threat Detection & Response', 'Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring', 'Compliance Management', 'Employee Training'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-12000/month',
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems.',
      category: 'it',
      features: ['Database Design & Optimization', 'Performance Tuning', 'Backup & Recovery', 'Data Migration', 'Security Hardening', 'Monitoring & Maintenance'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support']
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code.',
      category: 'it',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing', 'Deployment Automation'],
      price: 'Starting at $2,200/month',
      marketPrice: '$3500-10000/month',
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations.',
      category: 'it',
      features: ['IT Strategy Development', 'Technology Assessment', 'Digital Transformation Planning', 'Vendor Evaluation', 'Process Optimization', 'Change Management'],
      price: 'Starting at $200/hour',
      marketPrice: '$300-800/hour',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage']
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices for your specific needs.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Microservices Architecture', 'Cloud-Native Solutions', 'Mobile App Development', 'Integration Services'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-600/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support']
    },
    {
      icon: Globe,
      title: 'Web Development & E-commerce',
      description: 'Modern web applications and e-commerce platforms with responsive design and SEO optimization.',
      category: 'it',
      features: ['Responsive Web Design', 'E-commerce Platforms', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-50000/project',
      benefits: ['Modern design', 'Mobile responsive', 'SEO optimized', 'Fast loading times']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Apps', 'Cross-platform Development', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Optimization'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-80000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement']
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise and small business environments.',
      category: 'it',
      features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring', 'Disaster Recovery', 'Remote Access'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable solutions', '24/7 monitoring']
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset lifecycle management with tracking, optimization, and compliance monitoring.',
      category: 'it',
      features: ['Asset Tracking', 'Lifecycle Management', 'License Management', 'Compliance Monitoring', 'Cost Optimization', 'Disposal Management'],
      price: 'Starting at $500/month',
      marketPrice: '$800-2500/month',
      benefits: ['Cost optimization', 'Compliance assurance', 'Better asset utilization', 'Automated tracking']
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for end-users and IT infrastructure.',
      category: 'it',
      features: ['24/7 Support', 'Remote Assistance', 'Issue Tracking', 'Knowledge Base', 'User Training', 'Proactive Monitoring'],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Reduced downtime', 'Faster issue resolution', 'User satisfaction', 'Proactive support']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Data visualization and business intelligence solutions for informed decision making.',
      category: 'it',
      features: ['Data Visualization', 'Dashboard Creation', 'Report Automation', 'Data Integration', 'Predictive Analytics', 'Custom Metrics'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3000-10000/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Automated reporting', 'Better performance tracking']
    },
    {
      icon: Lock,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
      category: 'it',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Offsite Storage', 'Recovery Testing', 'Compliance Support'],
      price: 'Starting at $800/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Data protection', 'Business continuity', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for improved workflow efficiency.',
      category: 'it',
      features: ['API Integration', 'Legacy System Integration', 'Data Synchronization', 'Workflow Automation', 'Custom Connectors', 'Testing & Validation'],
      price: 'Starting at $2,000/month',
      marketPrice: '$3000-12000/month',
      benefits: ['Improved efficiency', 'Reduced manual work', 'Better data flow', 'Unified systems']
    },
    {
      icon: Cpu,
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring and alerting for IT infrastructure to ensure optimal performance.',
      category: 'it',
      features: ['Server Monitoring', 'Network Monitoring', 'Application Performance', 'Alert Management', 'Capacity Planning', 'Trend Analysis'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-6000/month',
      benefits: ['Proactive issue detection', 'Reduced downtime', 'Performance optimization', 'Cost savings']
    },
    {
      icon: Globe,
      title: 'Cloud Security & Compliance',
      description: 'Specialized cloud security services ensuring compliance with industry standards and regulations.',
      category: 'it',
      features: ['Cloud Security Assessment', 'Compliance Auditing', 'Security Monitoring', 'Incident Response', 'Policy Development', 'Training Programs'],
      price: 'Starting at $2,500/month',
      marketPrice: '$4000-15000/month',
      benefits: ['Regulatory compliance', 'Enhanced security', 'Risk mitigation', 'Expert guidance']
    },
    {
      icon: Code,
      title: 'API Development & Management',
      description: 'Custom API development and management services for seamless system integration and data exchange.',
      category: 'it',
      features: ['RESTful API Development', 'GraphQL APIs', 'API Gateway Setup', 'Documentation', 'Rate Limiting', 'Security Implementation'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Seamless integration', 'Scalable APIs', 'Better security', 'Comprehensive documentation']
    },
    {
      icon: Database,
      title: 'Data Migration Services',
      description: 'Expert data migration services ensuring seamless transition between systems and platforms.',
      category: 'it',
      features: ['Data Assessment', 'Migration Planning', 'Data Transformation', 'Validation & Testing', 'Go-live Support', 'Post-migration Monitoring'],
      price: 'Starting at $3,000/project',
      marketPrice: '$5000-25000/project',
      benefits: ['Risk-free migration', 'Data integrity', 'Minimal downtime', 'Expert support']
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your security posture.',
      category: 'it',
      features: ['Vulnerability Assessment', 'Penetration Testing', 'Social Engineering Tests', 'Security Reporting', 'Remediation Guidance', 'Follow-up Testing'],
      price: 'Starting at $2,500/project',
      marketPrice: '$4000-15000/project',
      benefits: ['Enhanced security', 'Vulnerability identification', 'Compliance support', 'Risk mitigation']
    },
    {
      icon: Settings,
      title: 'IT Project Management',
      description: 'Professional project management services for complex IT implementations and digital transformations.',
      category: 'it',
      features: ['Project Planning', 'Resource Management', 'Timeline Management', 'Risk Assessment', 'Stakeholder Communication', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['On-time delivery', 'Budget control', 'Risk mitigation', 'Quality assurance']
    },
    
    // Micro SaaS
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      category: 'saas',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting']
    },
    {
      icon: MessageSquare,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      category: 'saas',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation']
    },
    {
      icon: FileText,
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      category: 'saas',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices']
    },
    {
      icon: Target,
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization']
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      category: 'saas',
      features: ['Real-time Threat Detection', 'Vulnerability Scanning', 'Security Monitoring', 'Incident Response', 'Compliance Reporting', 'Security Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Proactive threat prevention', 'Compliance assurance', 'Reduced security risks']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and file sharing platform with advanced encryption and collaboration features.',
      category: 'saas',
      features: ['Automated Cloud Backup', 'File Synchronization', 'Advanced Encryption', 'Team Collaboration', 'Version Control', 'Access Management'],
      price: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      benefits: ['Data protection', 'Seamless collaboration', 'Version control', 'Secure file sharing']
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing campaigns.',
      category: 'saas',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Content Calendar', 'Brand Voice Training', 'Performance Analytics'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['90% content creation time saved', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration APIs'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Better lead management', 'Increased sales', 'Automated processes', 'Data-driven insights']
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow between systems.',
      category: 'saas',
      features: ['Multi-source Data Integration', 'Real-time Synchronization', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: 'Starting at $149/month',
      marketPrice: '$250-800/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Data accuracy', 'Real-time updates']
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management platform with intelligent task allocation and progress tracking.',
      category: 'saas',
      features: ['AI Task Allocation', 'Progress Tracking', 'Resource Management', 'Risk Assessment', 'Team Collaboration', 'Performance Analytics'],
      price: 'Starting at $69/month',
      marketPrice: '$120-400/month',
      benefits: ['Improved project efficiency', 'Better resource utilization', 'Risk mitigation', 'Team collaboration']
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and analytics.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Advanced Analytics', 'List Management', 'Template Builder'],
      price: 'Starting at $59/month',
      marketPrice: '$100-300/month',
      benefits: ['Higher email engagement', 'Automated campaigns', 'Better personalization', 'Improved ROI']
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Stock Optimization', 'Multi-location Support', 'Supplier Management', 'Analytics Dashboard'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Reduced stockouts', 'Optimized inventory', 'Cost savings', 'Better supplier management']
    },
    {
      icon: DollarSign,
      title: 'Zion Invoice Genius Pro',
      description: 'Advanced invoice and billing management with AI-powered automation and payment processing.',
      category: 'saas',
      features: ['AI Invoice Generation', 'Payment Processing', 'Recurring Billing', 'Multi-currency Support', 'Client Portal', 'Financial Reporting'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Faster payments', 'Reduced billing errors', 'Automated follow-ups', 'Better cash flow']
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for business process optimization and efficiency.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Notification System', 'Performance Monitoring'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Process efficiency', 'Reduced manual work', 'Error reduction', 'Scalable automation']
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered insights and alerting.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Error Tracking', 'Custom Dashboards'],
      price: 'Starting at $129/month',
      marketPrice: '$200-600/month',
      benefits: ['Proactive issue detection', 'Reduced downtime', 'Performance optimization', 'Better reliability']
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for regulatory requirements and industry standards.',
      category: 'saas',
      features: ['Regulatory Tracking', 'Automated Reporting', 'Compliance Monitoring', 'Document Management', 'Audit Trail', 'Risk Assessment'],
      price: 'Starting at $199/month',
      marketPrice: '$300-800/month',
      benefits: ['Regulatory compliance', 'Reduced audit risk', 'Automated reporting', 'Better governance']
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and analytics.',
      category: 'saas',
      features: ['Multi-platform Scheduling', 'AI Content Suggestions', 'Engagement Analytics', 'Hashtag Optimization', 'Team Collaboration', 'Brand Monitoring'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Consistent social presence', 'Better engagement', 'Time savings', 'Data-driven content']
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing and optimization platform for content creators and businesses.',
      category: 'saas',
      features: ['AI Video Editing', 'Auto-captioning', 'Thumbnail Generation', 'Optimization Tools', 'Template Library', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Professional video content', 'Time savings', 'Better engagement', 'Automated optimization']
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered accuracy and context understanding.',
      category: 'saas',
      features: ['100+ Languages', 'Context-aware Translation', 'Document Translation', 'Voice Translation', 'API Integration', 'Quality Assurance'],
      price: 'Starting at $39/month',
      marketPrice: '$80-250/month',
      benefits: ['Global reach', 'Accurate translations', 'Real-time communication', 'Cultural adaptation']
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review and quality assurance platform for development teams.',
      category: 'saas',
      features: ['Automated Code Review', 'Quality Metrics', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Better code quality', 'Reduced bugs', 'Faster development', 'Knowledge sharing']
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics and behavior tracking platform for better customer understanding.',
      category: 'saas',
      features: ['Behavioral Analytics', 'Customer Segmentation', 'Churn Prediction', 'Personalization Engine', 'Survey Management', 'Feedback Analysis'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Better customer understanding', 'Increased retention', 'Personalized experiences', 'Data-driven decisions']
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management and automation platform with AI-powered responses and organization.',
      category: 'saas',
      features: ['AI Email Responses', 'Smart Organization', 'Priority Detection', 'Scheduling Assistant', 'Template Suggestions', 'Analytics Dashboard'],
      price: 'Starting at $59/month',
      marketPrice: '$100-300/month',
      benefits: ['Improved email efficiency', 'Better organization', 'Faster responses', 'Reduced email overload']
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'Smart meeting management platform with AI-powered scheduling, transcription, and follow-ups.',
      category: 'saas',
      features: ['Smart Scheduling', 'Real-time Transcription', 'Action Item Extraction', 'Meeting Analytics', 'Follow-up Automation', 'Integration APIs'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved meeting efficiency', 'Better follow-ups', 'Time savings', 'Enhanced collaboration']
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO analysis and optimization platform with AI-powered recommendations.',
      category: 'saas',
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking', 'Performance Monitoring'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Better search rankings', 'Increased organic traffic', 'Content optimization', 'Competitive advantage']
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform for improved data quality and accuracy.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Format Standardization', 'Quality Metrics', 'Error Reporting'],
      price: 'Starting at $69/month',
      marketPrice: '$120-350/month',
      benefits: ['Improved data quality', 'Reduced errors', 'Better analytics', 'Compliance assurance']
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and management platform for legal document review and compliance.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Renewal Tracking', 'Legal Database'],
      price: 'Starting at $199/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster contract review', 'Risk identification', 'Compliance assurance', 'Better contract management']
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation and analysis platform with AI-powered insights and recommendations.',
      category: 'saas',
      features: ['AI Survey Design', 'Smart Question Suggestions', 'Response Analysis', 'Sentiment Analysis', 'Report Generation', 'Integration APIs'],
      price: 'Starting at $49/month',
      marketPrice: '$100-300/month',
      benefits: ['Better survey design', 'Deeper insights', 'Automated analysis', 'Actionable recommendations']
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting and bookkeeping platform with automated categorization and reporting.',
      category: 'saas',
      features: ['Automated Categorization', 'Expense Tracking', 'Invoice Processing', 'Financial Reporting', 'Tax Preparation', 'Compliance Monitoring'],
      price: 'Starting at $99/month',
      marketPrice: '$200-600/month',
      benefits: ['Automated bookkeeping', 'Better financial control', 'Tax compliance', 'Time savings']
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Analytics Dashboard'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Better candidate matching', 'Faster hiring process', 'Reduced bias', 'Improved quality of hires']
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'Automated content moderation platform with AI-powered filtering and compliance monitoring.',
      category: 'saas',
      features: ['AI Content Filtering', 'Spam Detection', 'Inappropriate Content Detection', 'Custom Rules', 'Real-time Monitoring', 'Analytics Dashboard'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Automated moderation', 'Consistent enforcement', 'Reduced manual work', 'Better user experience']
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent equipment monitoring and maintenance prediction platform for operational efficiency.',
      category: 'saas',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: 'Starting at $199/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced downtime', 'Cost savings', 'Extended equipment life', 'Optimized maintenance']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'Smart energy management platform with AI-powered optimization and cost reduction.',
      category: 'saas',
      features: ['Energy Monitoring', 'Usage Optimization', 'Cost Analysis', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      benefits: ['Energy cost reduction', 'Sustainability goals', 'Automated optimization', 'Better energy management']
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with demand forecasting and logistics optimization.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation']
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with AI-powered risk assessment and real-time monitoring.',
      category: 'saas',
      features: ['Real-time Fraud Detection', 'Risk Scoring', 'Behavioral Analysis', 'Transaction Monitoring', 'Alert Management', 'Compliance Reporting'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Fraud prevention', 'Risk reduction', 'Compliance assurance', 'Cost savings']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human agent collaboration.',
      category: 'saas',
      features: ['AI Chatbots', 'Ticket Management', 'Knowledge Base', 'Sentiment Analysis', 'Agent Assistance', 'Performance Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved customer satisfaction', 'Faster response times', 'Reduced costs', 'Better agent efficiency']
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['Campaign Automation', 'Personalization Engine', 'A/B Testing', 'Lead Scoring', 'Email Marketing', 'Social Media Management'],
      price: 'Starting at $129/month',
      marketPrice: '$200-600/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated campaigns', 'Improved ROI']
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing and analysis platform with AI-powered extraction and insights.',
      category: 'saas',
      features: ['Document Processing', 'Data Extraction', 'OCR Technology', 'Classification', 'Search & Retrieval', 'Analytics Dashboard'],
      price: 'Starting at $99/month',
      marketPrice: '$150-500/month',
      benefits: ['Automated document processing', 'Better data extraction', 'Improved efficiency', 'Reduced manual work']
    },
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
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base min-w-0 flex-1 sm:flex-none"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-300 text-sm sm:text-base">
                  Showing {filteredServices.length} of {services.length} services
                </p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Clear search
                  </button>
                )}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 sm:p-6 hover:bg-slate-800/70 transition-all duration-300 group border border-slate-700/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors line-clamp-2">{service.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                        <span className="text-cyan-400 font-semibold text-sm sm:text-base">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-xs sm:text-sm line-through">{service.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-cyan-400 font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {service.benefits && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-xs sm:text-sm text-green-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{benefit}</span>
                          </li>
                        ))}
                        {service.benefits.length > 2 && (
                          <li className="text-xs text-green-400 font-medium">
                            +{service.benefits.length - 2} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group/link"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 sm:mt-16 text-center">
              <div className="bg-slate-800/50 rounded-xl p-6 sm:p-8 border border-slate-700/50">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  Contact our experts for a free consultation and discover how our services can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base text-center"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base text-center"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
                
                {/* Additional Contact Info */}
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      kleber@ziontechgroup.com
                    </a>
                    <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>Middletown, DE</span>
                    </div>
                  </div>
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
