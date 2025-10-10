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
  Target
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
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing materials.',
      category: 'ai',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Brand Voice Customization'],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with automated ticket routing and sentiment analysis.',
      category: 'ai',
      features: ['Automated Ticket Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved response times', 'Better customer satisfaction', 'Reduced agent workload', '24/7 availability']
    },
    {
      icon: DollarSign,
      title: 'AI Financial Analysis',
      description: 'Advanced financial modeling and risk assessment using machine learning algorithms.',
      category: 'ai',
      features: ['Risk Assessment', 'Financial Modeling', 'Market Analysis', 'Credit Scoring', 'Fraud Prevention'],
      price: 'Starting at $699/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Improved risk management', 'Better investment decisions', 'Reduced financial losses', 'Compliance automation']
    },
    {
      icon: Heart,
      title: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning.',
      category: 'ai',
      features: ['Medical Image Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Treatment Optimization'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Improved diagnostic accuracy', 'Faster diagnosis', 'Reduced medical errors', 'Cost-effective healthcare']
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content and automated customer journey optimization.',
      category: 'ai',
      features: ['Personalized Campaigns', 'Customer Segmentation', 'A/B Testing', 'Lead Scoring', 'ROI Optimization'],
      price: 'Starting at $399/month',
      marketPrice: '$600-2500/month',
      benefits: ['Higher conversion rates', 'Personalized experiences', 'Automated optimization', 'Better ROI']
    },
    {
      icon: Settings,
      title: 'AI Predictive Maintenance',
      description: 'Predictive maintenance solutions for industrial equipment using IoT sensors and machine learning.',
      category: 'ai',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics'],
      price: 'Starting at $599/month',
      marketPrice: '$1000-4000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Improved efficiency']
    },
    {
      icon: Globe,
      title: 'AI Language Translation',
      description: 'Real-time language translation and localization services powered by advanced neural networks.',
      category: 'ai',
      features: ['Real-time Translation', 'Multi-language Support', 'Context Understanding', 'Voice Translation', 'Document Translation'],
      price: 'Starting at $149/month',
      marketPrice: '$250-1000/month',
      benefits: ['Global communication', 'Reduced language barriers', 'Faster localization', 'Cost-effective translation']
    },
    {
      icon: Cpu,
      title: 'AI Quantum Machine Learning',
      description: 'Quantum-enhanced machine learning algorithms for solving complex optimization and pattern recognition problems.',
      category: 'ai',
      features: ['Quantum Neural Networks', 'Quantum Optimization', 'Quantum Feature Selection', 'Quantum Clustering', 'Quantum Regression', 'Hybrid Algorithms'],
      price: 'Starting at $2,999/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Exponential speedup', 'Complex problem solving', 'Advanced pattern recognition', 'Future-ready AI']
    },
    {
      icon: Eye,
      title: 'AI Spatial Intelligence',
      description: 'Advanced spatial AI for autonomous navigation, mapping, and 3D environment understanding.',
      category: 'ai',
      features: ['3D Mapping', 'Autonomous Navigation', 'Spatial Recognition', 'Path Planning', 'Obstacle Avoidance', 'SLAM Technology'],
      price: 'Starting at $1,499/month',
      marketPrice: '$3000-12000/month',
      benefits: ['Autonomous navigation', '3D environment understanding', 'Precise mapping', 'Robotic applications']
    },
    {
      icon: Brain,
      title: 'AI Neuromorphic Computing',
      description: 'Brain-inspired AI systems that mimic neural processing for ultra-efficient computing.',
      category: 'ai',
      features: ['Spiking Neural Networks', 'Neuromorphic Chips', 'Event-driven Processing', 'Low Power Computing', 'Real-time Learning', 'Adaptive Systems'],
      price: 'Starting at $1,999/month',
      marketPrice: '$4000-15000/month',
      benefits: ['Ultra-low power consumption', 'Real-time processing', 'Adaptive learning', 'Brain-like efficiency']
    },
    {
      icon: Zap,
      title: 'AI Swarm Intelligence',
      description: 'Distributed AI systems that coordinate multiple agents for complex problem solving and optimization.',
      category: 'ai',
      features: ['Multi-agent Systems', 'Swarm Optimization', 'Distributed Learning', 'Cooperative AI', 'Emergent Behavior', 'Scalable Intelligence'],
      price: 'Starting at $1,299/month',
      marketPrice: '$2500-10000/month',
      benefits: ['Distributed problem solving', 'Scalable intelligence', 'Emergent behaviors', 'Robust systems']
    },
    {
      icon: Heart,
      title: 'AI Emotional Intelligence',
      description: 'Advanced emotion recognition and response systems for human-AI interaction and mental health applications.',
      category: 'ai',
      features: ['Emotion Recognition', 'Sentiment Analysis', 'Empathy Modeling', 'Mental Health Support', 'Social Interaction', 'Therapeutic Applications'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Human-like interaction', 'Mental health support', 'Emotional understanding', 'Therapeutic applications']
    },
    {
      icon: Shield,
      title: 'AI Adversarial Defense',
      description: 'Advanced AI systems designed to detect and defend against adversarial attacks and AI manipulation.',
      category: 'ai',
      features: ['Adversarial Detection', 'Robust AI Models', 'Attack Prevention', 'Security Validation', 'Threat Intelligence', 'Defense Strategies'],
      price: 'Starting at $1,799/month',
      marketPrice: '$3500-12000/month',
      benefits: ['AI security protection', 'Adversarial resistance', 'Robust AI systems', 'Threat mitigation']
    },
    {
      icon: Database,
      title: 'AI Federated Learning',
      description: 'Privacy-preserving AI training across distributed data sources without centralizing sensitive information.',
      category: 'ai',
      features: ['Distributed Training', 'Privacy Preservation', 'Secure Aggregation', 'Differential Privacy', 'Federated Analytics', 'Cross-silo Learning'],
      price: 'Starting at $1,399/month',
      marketPrice: '$2800-10000/month',
      benefits: ['Privacy-preserving AI', 'Distributed learning', 'Data security', 'Collaborative intelligence']
    },
    {
      icon: Users,
      title: 'AI Collective Intelligence',
      description: 'AI systems that aggregate knowledge and insights from multiple sources to solve complex problems.',
      category: 'ai',
      features: ['Knowledge Aggregation', 'Crowd Intelligence', 'Expert Systems', 'Consensus Building', 'Wisdom of Crowds', 'Collective Decision Making'],
      price: 'Starting at $999/month',
      marketPrice: '$2000-8000/month',
      benefits: ['Collective wisdom', 'Expert-level insights', 'Consensus building', 'Scalable intelligence']
    },
    {
      icon: Target,
      title: 'AI Causal Inference',
      description: 'Advanced AI systems that understand cause-and-effect relationships for better decision making.',
      category: 'ai',
      features: ['Causal Discovery', 'Counterfactual Analysis', 'Intervention Planning', 'Causal Modeling', 'Effect Estimation', 'Causal Reasoning'],
      price: 'Starting at $1,599/month',
      marketPrice: '$3200-12000/month',
      benefits: ['Causal understanding', 'Better decision making', 'Intervention planning', 'Scientific insights']
    },
    {
      icon: Mic,
      title: 'AI Voice Recognition',
      description: 'Advanced speech-to-text and voice command solutions for various business applications.',
      category: 'ai',
      features: ['Speech-to-Text', 'Voice Commands', 'Speaker Identification', 'Noise Cancellation', 'Multi-language Support'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Hands-free operation', 'Improved accessibility', 'Faster data entry', 'Enhanced user experience']
    },
    {
      icon: Database,
      title: 'AI Data Processing',
      description: 'Intelligent data cleaning, validation, and processing using machine learning algorithms.',
      category: 'ai',
      features: ['Data Cleaning', 'Validation Rules', 'Duplicate Detection', 'Data Enrichment', 'Quality Scoring'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1500/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings']
    },
    {
      icon: Lock,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using artificial intelligence and machine learning.',
      category: 'ai',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Vulnerability Scanning', 'Security Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1500-5000/month',
      benefits: ['Enhanced security', 'Faster threat detection', 'Reduced false positives', '24/7 monitoring']
    },
    {
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Intelligent scheduling and calendar management with automated meeting optimization.',
      category: 'ai',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Zone Management', 'Resource Allocation'],
      price: 'Starting at $99/month',
      marketPrice: '$150-600/month',
      benefits: ['Improved productivity', 'Reduced scheduling conflicts', 'Time optimization', 'Better resource utilization']
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
      description: 'Tailored software solutions built with modern technologies and best practices for optimal performance.',
      category: 'it',
      features: ['Custom Application Development', 'API Development', 'Integration Services', 'Performance Optimization', 'Security Implementation', 'Quality Assurance'],
      price: 'Starting at $150/hour',
      marketPrice: '$200-500/hour',
      benefits: ['Tailored solutions', 'Modern technology stack', 'Scalable architecture', 'Ongoing support']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience.',
      category: 'it',
      features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Store Optimization', 'Push Notifications', 'Offline Functionality', 'Performance Tuning'],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies for optimal performance.',
      category: 'it',
      features: ['React/Next.js Development', 'Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Security Implementation', 'Content Management'],
      price: 'Starting at $5,000/project',
      marketPrice: '$10000-30000/project',
      benefits: ['Modern technology stack', 'SEO optimized', 'Mobile responsive', 'Fast loading times']
    },
    {
      icon: Wifi,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      category: 'it',
      features: ['Network Design & Implementation', 'Wireless Solutions', 'Security Configuration', 'Performance Monitoring', 'Disaster Recovery', '24/7 Support'],
      price: 'Starting at $1,500/month',
      marketPrice: '$2500-8000/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable infrastructure', 'Expert support']
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and remote assistance capabilities.',
      category: 'it',
      features: ['24/7 Helpdesk Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Installation', 'User Training', 'Incident Management'],
      price: 'Starting at $99/user/month',
      marketPrice: '$150-300/user/month',
      benefits: ['Reduced downtime', 'Expert support', 'Proactive maintenance', 'User satisfaction']
    },
    {
      icon: Package,
      title: 'IT Asset Management',
      description: 'Complete lifecycle management of IT assets including procurement, deployment, and disposal.',
      category: 'it',
      features: ['Asset Inventory', 'Lifecycle Management', 'Procurement Services', 'Deployment Planning', 'Disposal Services', 'Cost Optimization'],
      price: 'Starting at $299/month',
      marketPrice: '$500-1500/month',
      benefits: ['Cost optimization', 'Asset visibility', 'Compliance management', 'Reduced waste']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence & Analytics',
      description: 'Data visualization and business intelligence solutions to transform data into actionable insights.',
      category: 'it',
      features: ['Data Visualization', 'Dashboard Creation', 'Report Automation', 'Data Integration', 'Performance Metrics', 'Custom Analytics'],
      price: 'Starting at $799/month',
      marketPrice: '$1200-4000/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Automated reporting', 'Better performance']
    },
    {
      icon: Lock,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect critical business data.',
      category: 'it',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Offsite Storage', 'Recovery Testing', 'Compliance Support'],
      price: 'Starting at $199/month',
      marketPrice: '$350-1200/month',
      benefits: ['Data protection', 'Business continuity', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Professional system administration services for servers, networks, and IT infrastructure.',
      category: 'it',
      features: ['Server Management', 'User Account Management', 'Security Updates', 'Performance Monitoring', 'Troubleshooting', 'Documentation'],
      price: 'Starting at $1,000/month',
      marketPrice: '$1500-5000/month',
      benefits: ['System reliability', 'Security maintenance', 'Performance optimization', 'Expert administration']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Comprehensive performance optimization services for applications, databases, and infrastructure.',
      category: 'it',
      features: ['Application Optimization', 'Database Tuning', 'Infrastructure Scaling', 'Load Testing', 'Performance Monitoring', 'Capacity Planning'],
      price: 'Starting at $1,200/month',
      marketPrice: '$2000-6000/month',
      benefits: ['Improved performance', 'Better user experience', 'Cost optimization', 'Scalable solutions']
    },
    {
      icon: Cpu,
      title: 'Quantum Computing Integration',
      description: 'Quantum computing solutions and hybrid quantum-classical system integration for advanced problem solving.',
      category: 'it',
      features: ['Quantum Algorithm Development', 'Hybrid System Integration', 'Quantum Simulation', 'Optimization Problems', 'Cryptography Solutions', 'Research & Development'],
      price: 'Starting at $5,000/month',
      marketPrice: '$10000-50000/month',
      benefits: ['Exponential computational power', 'Complex problem solving', 'Future-ready technology', 'Competitive advantage']
    },
    {
      icon: Eye,
      title: 'Extended Reality (XR) Development',
      description: 'Immersive XR solutions including AR, VR, and MR applications for enterprise and consumer markets.',
      category: 'it',
      features: ['AR/VR Applications', 'Mixed Reality Solutions', '3D Content Creation', 'Spatial Computing', 'Haptic Feedback', 'Immersive Training'],
      price: 'Starting at $3,500/month',
      marketPrice: '$7000-25000/month',
      benefits: ['Immersive experiences', 'Enhanced training', 'Remote collaboration', 'Innovative solutions']
    },
    {
      icon: Wifi,
      title: '5G & Edge Computing',
      description: '5G network implementation and edge computing solutions for ultra-low latency applications.',
      category: 'it',
      features: ['5G Network Design', 'Edge Computing Infrastructure', 'IoT Integration', 'Real-time Processing', 'Network Optimization', 'Latency Reduction'],
      price: 'Starting at $2,800/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Ultra-low latency', 'High-speed connectivity', 'Real-time processing', 'IoT enablement']
    },
    {
      icon: Brain,
      title: 'AI Infrastructure & MLOps',
      description: 'Complete AI infrastructure setup and machine learning operations for scalable AI deployment.',
      category: 'it',
      features: ['ML Pipeline Setup', 'Model Deployment', 'AI Infrastructure', 'Data Pipeline', 'Model Monitoring', 'Auto-scaling'],
      price: 'Starting at $2,200/month',
      marketPrice: '$4000-15000/month',
      benefits: ['Scalable AI deployment', 'Automated ML operations', 'Model reliability', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation for modern enterprise environments.',
      category: 'it',
      features: ['Identity Verification', 'Network Segmentation', 'Device Trust', 'Data Protection', 'Continuous Monitoring', 'Threat Detection'],
      price: 'Starting at $1,800/month',
      marketPrice: '$3500-12000/month',
      benefits: ['Enhanced security posture', 'Reduced attack surface', 'Compliance assurance', 'Continuous protection']
    },
    {
      icon: Database,
      title: 'Blockchain & Web3 Solutions',
      description: 'Blockchain development and Web3 integration services for decentralized applications.',
      category: 'it',
      features: ['Smart Contract Development', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration', 'Blockchain Infrastructure', 'Token Economics'],
      price: 'Starting at $3,000/month',
      marketPrice: '$6000-25000/month',
      benefits: ['Decentralized solutions', 'Transparent transactions', 'Innovative business models', 'Future-ready technology']
    },
    {
      icon: Globe,
      title: 'Digital Twin Technology',
      description: 'Digital twin development for physical assets, processes, and systems for optimization and monitoring.',
      category: 'it',
      features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'IoT Integration', 'Performance Monitoring', 'Optimization'],
      price: 'Starting at $2,500/month',
      marketPrice: '$5000-20000/month',
      benefits: ['Virtual asset management', 'Predictive maintenance', 'Process optimization', 'Cost reduction']
    },
    {
      icon: Users,
      title: 'Metaverse Development',
      description: 'Metaverse platform development and virtual world creation for immersive digital experiences.',
      category: 'it',
      features: ['Virtual Worlds', 'Avatar Systems', 'Social Features', 'Virtual Economy', '3D Environments', 'Cross-platform Integration'],
      price: 'Starting at $4,000/month',
      marketPrice: '$8000-30000/month',
      benefits: ['Immersive experiences', 'Virtual collaboration', 'New revenue streams', 'Innovative engagement']
    },
    {
      icon: Settings,
      title: 'Autonomous Systems Integration',
      description: 'Integration of autonomous systems including drones, robots, and self-operating machinery.',
      category: 'it',
      features: ['Drone Integration', 'Robotic Systems', 'Autonomous Vehicles', 'Sensor Networks', 'AI Control Systems', 'Safety Protocols'],
      price: 'Starting at $3,200/month',
      marketPrice: '$6000-25000/month',
      benefits: ['Automated operations', 'Reduced human error', '24/7 operation', 'Cost efficiency']
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
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics', 'Compliance Reporting', 'Employee Training'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance', 'Peace of mind']
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      category: 'saas',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery', 'Data Encryption', 'Compliance Support'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery']
    },
    {
      icon: FileText,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for blogs, social media, and marketing.',
      category: 'saas',
      features: ['AI Content Generation', 'SEO Optimization', 'Multi-platform Publishing', 'Content Calendar', 'Brand Voice Customization', 'Performance Analytics'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation.',
      category: 'saas',
      features: ['AI-powered Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Sales Forecasting', 'Customer Segmentation', 'Integration Hub'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Improved sales performance', 'Better customer relationships', 'Automated processes', 'Data-driven insights']
    },
    {
      icon: Database,
      title: 'Zion Data Sync',
      description: 'Intelligent data integration and synchronization platform for seamless data flow across systems.',
      category: 'saas',
      features: ['Real-time Data Sync', 'Multi-source Integration', 'Data Transformation', 'Error Handling', 'Monitoring Dashboard', 'API Management'],
      price: 'Starting at $149/month',
      marketPrice: '$250-700/month',
      benefits: ['Unified data view', 'Reduced manual work', 'Improved accuracy', 'Real-time updates']
    },
    {
      icon: Calendar,
      title: 'Zion Project Master',
      description: 'AI-powered project management and team collaboration platform with intelligent task allocation.',
      category: 'saas',
      features: ['AI Task Allocation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration', 'Time Tracking', 'Performance Analytics'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Improved project success', 'Better resource utilization', 'Enhanced collaboration', 'Automated workflows']
    },
    {
      icon: Mail,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard', 'Template Library'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Higher open rates', 'Better engagement', 'Automated campaigns', 'Improved ROI']
    },
    {
      icon: Package,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management system with demand forecasting and automated reordering.',
      category: 'saas',
      features: ['Demand Forecasting', 'Automated Reordering', 'Multi-location Management', 'Supplier Integration', 'Cost Optimization', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-800/month',
      benefits: ['Reduced stockouts', 'Lower inventory costs', 'Improved cash flow', 'Better supplier relationships']
    },
    {
      icon: Settings,
      title: 'Zion Workflow Automation',
      description: 'No-code workflow automation platform for streamlining business processes and increasing efficiency.',
      category: 'saas',
      features: ['Visual Workflow Builder', 'API Integrations', 'Conditional Logic', 'Task Automation', 'Approval Workflows', 'Performance Monitoring'],
      price: 'Starting at $119/month',
      marketPrice: '$200-600/month',
      benefits: ['Process efficiency', 'Reduced errors', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Monitor,
      title: 'Zion Performance Monitor',
      description: 'Comprehensive application and infrastructure monitoring with AI-powered alerting and optimization.',
      category: 'saas',
      features: ['Real-time Monitoring', 'AI-powered Alerts', 'Performance Analytics', 'Uptime Tracking', 'Error Tracking', 'Capacity Planning'],
      price: 'Starting at $139/month',
      marketPrice: '$250-700/month',
      benefits: ['Improved uptime', 'Faster issue resolution', 'Better performance', 'Proactive monitoring']
    },
    {
      icon: CheckSquare,
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management platform for various industry standards and regulations.',
      category: 'saas',
      features: ['Compliance Tracking', 'Automated Reporting', 'Document Management', 'Audit Trail', 'Risk Assessment', 'Training Management'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced compliance risk', 'Automated reporting', 'Better documentation', 'Cost savings']
    },
    {
      icon: Globe,
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management platform with content scheduling and performance analytics.',
      category: 'saas',
      features: ['AI Content Suggestions', 'Multi-platform Scheduling', 'Performance Analytics', 'Engagement Tracking', 'Hashtag Optimization', 'Competitor Analysis'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increased engagement', 'Time savings', 'Better content strategy', 'Improved reach']
    },
    {
      icon: Eye,
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, transcription, and optimization.',
      category: 'saas',
      features: ['AI Auto-editing', 'Voice Transcription', 'Subtitle Generation', 'Thumbnail Creation', 'Multi-format Export', 'Cloud Storage'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Faster video production', 'Professional quality', 'Automated processes', 'Cost-effective editing']
    },
    {
      icon: Globe,
      title: 'Zion AI Translator Pro',
      description: 'Advanced translation platform with AI-powered language detection and context-aware translation.',
      category: 'saas',
      features: ['Real-time Translation', 'Document Translation', 'Voice Translation', 'Context Awareness', 'Quality Scoring', 'API Integration'],
      price: 'Starting at $69/month',
      marketPrice: '$120-300/month',
      benefits: ['Global communication', 'Accurate translations', 'Time savings', 'Cost-effective solution']
    },
    {
      icon: Code,
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated analysis, suggestions, and security scanning.',
      category: 'saas',
      features: ['Automated Code Review', 'Security Scanning', 'Performance Analysis', 'Best Practice Suggestions', 'Team Collaboration', 'Integration Support'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved code quality', 'Faster reviews', 'Better security', 'Team learning']
    },
    {
      icon: Users,
      title: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with AI-powered insights and behavioral analysis.',
      category: 'saas',
      features: ['Customer Segmentation', 'Behavioral Analysis', 'Predictive Analytics', 'Churn Prediction', 'Personalization Engine', 'ROI Tracking'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Better customer understanding', 'Improved retention', 'Personalized experiences', 'Data-driven decisions']
    },
    {
      icon: Mail,
      title: 'Zion AI Email Assistant',
      description: 'Intelligent email management platform with AI-powered sorting, responses, and scheduling.',
      category: 'saas',
      features: ['Smart Email Sorting', 'AI Response Suggestions', 'Email Scheduling', 'Priority Detection', 'Spam Filtering', 'Analytics Dashboard'],
      price: 'Starting at $59/month',
      marketPrice: '$100-250/month',
      benefits: ['Improved productivity', 'Better email management', 'Time savings', 'Reduced email stress']
    },
    {
      icon: Calendar,
      title: 'Zion AI Meeting Assistant',
      description: 'AI-powered meeting management with transcription, action items, and follow-up automation.',
      category: 'saas',
      features: ['Meeting Transcription', 'Action Item Extraction', 'Follow-up Automation', 'Meeting Analytics', 'Integration Support', 'Voice Recognition'],
      price: 'Starting at $89/month',
      marketPrice: '$150-400/month',
      benefits: ['Better meeting outcomes', 'Automated follow-ups', 'Improved productivity', 'Better documentation']
    },
    {
      icon: Target,
      title: 'Zion AI SEO Optimizer',
      description: 'Comprehensive SEO optimization platform with AI-powered content analysis and ranking improvements.',
      category: 'saas',
      features: ['Content Analysis', 'Keyword Optimization', 'Ranking Tracking', 'Competitor Analysis', 'Technical SEO', 'Performance Monitoring'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Improved search rankings', 'Better organic traffic', 'Content optimization', 'Competitive advantage']
    },
    {
      icon: Database,
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated quality assurance.',
      category: 'saas',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Quality Scoring', 'Error Correction', 'Data Enrichment'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improved data quality', 'Reduced manual work', 'Better insights', 'Cost savings']
    },
    {
      icon: FileText,
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis platform with risk assessment and compliance checking.',
      category: 'saas',
      features: ['Contract Analysis', 'Risk Assessment', 'Compliance Checking', 'Clause Extraction', 'Automated Summaries', 'Version Comparison'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Faster contract review', 'Reduced risk', 'Better compliance', 'Time savings']
    },
    {
      icon: CheckSquare,
      title: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation platform with AI-powered question suggestions and analytics.',
      category: 'saas',
      features: ['AI Question Suggestions', 'Multi-format Surveys', 'Real-time Analytics', 'Response Analysis', 'Automated Reports', 'Integration Support'],
      price: 'Starting at $69/month',
      marketPrice: '$120-300/month',
      benefits: ['Better survey design', 'Improved response rates', 'Automated analysis', 'Actionable insights']
    },
    {
      icon: DollarSign,
      title: 'Zion AI Accounting Assistant',
      description: 'AI-powered accounting platform with automated bookkeeping and financial analysis.',
      category: 'saas',
      features: ['Automated Bookkeeping', 'Expense Categorization', 'Financial Analysis', 'Tax Preparation', 'Invoice Processing', 'Compliance Reporting'],
      price: 'Starting at $149/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced accounting costs', 'Improved accuracy', 'Better financial insights', 'Time savings']
    },
    {
      icon: Users,
      title: 'Zion AI Recruitment Pro',
      description: 'Intelligent recruitment platform with AI-powered candidate screening and matching.',
      category: 'saas',
      features: ['AI Candidate Screening', 'Resume Analysis', 'Skill Matching', 'Interview Scheduling', 'Background Checks', 'Analytics Dashboard'],
      price: 'Starting at $179/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved efficiency']
    },
    {
      icon: Shield,
      title: 'Zion AI Content Moderation',
      description: 'AI-powered content moderation platform with automated filtering and compliance management.',
      category: 'saas',
      features: ['Automated Content Filtering', 'Sentiment Analysis', 'Compliance Checking', 'Real-time Monitoring', 'Custom Rules', 'Analytics Dashboard'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Reduced moderation costs', 'Consistent enforcement', 'Better user experience', 'Compliance assurance']
    },
    {
      icon: Settings,
      title: 'Zion AI Predictive Maintenance',
      description: 'Intelligent maintenance platform with AI-powered equipment monitoring and failure prediction.',
      category: 'saas',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Performance Analytics', 'Alert System'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced downtime', 'Lower maintenance costs', 'Extended equipment life', 'Better planning']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Manager',
      description: 'AI-powered energy management platform for optimizing consumption and reducing costs.',
      category: 'saas',
      features: ['Energy Monitoring', 'Consumption Analysis', 'Cost Optimization', 'Predictive Analytics', 'Automated Controls', 'Sustainability Reporting'],
      price: 'Starting at $129/month',
      marketPrice: '$250-600/month',
      benefits: ['Reduced energy costs', 'Better sustainability', 'Automated optimization', 'Environmental impact']
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management platform with AI-powered optimization and forecasting.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Analysis', 'Performance Tracking'],
      price: 'Starting at $219/month',
      marketPrice: '$400-1000/month',
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Risk mitigation']
    },
    {
      icon: Shield,
      title: 'Zion AI Fraud Detector',
      description: 'Advanced fraud detection platform with real-time monitoring and prevention capabilities.',
      category: 'saas',
      features: ['Real-time Monitoring', 'Behavioral Analysis', 'Risk Scoring', 'Automated Alerts', 'Machine Learning', 'Compliance Support'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Reduced fraud losses', 'Real-time protection', 'Better accuracy', 'Compliance ready']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Customer Service Pro',
      description: 'Advanced customer service platform with AI-powered automation and human handoff.',
      category: 'saas',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', 'Live Agent Handoff', 'Performance Analytics'],
      price: 'Starting at $189/month',
      marketPrice: '$350-800/month',
      benefits: ['Improved customer satisfaction', 'Reduced response times', '24/7 availability', 'Cost savings']
    },
    {
      icon: Target,
      title: 'Zion AI Marketing Automation',
      description: 'Comprehensive marketing automation platform with AI-powered personalization and optimization.',
      category: 'saas',
      features: ['Campaign Automation', 'Personalization Engine', 'Lead Scoring', 'A/B Testing', 'Analytics Dashboard', 'Multi-channel Support'],
      price: 'Starting at $159/month',
      marketPrice: '$300-700/month',
      benefits: ['Higher conversion rates', 'Better personalization', 'Automated optimization', 'Improved ROI']
    },
    {
      icon: FileText,
      title: 'Zion AI Document AI',
      description: 'Intelligent document processing platform with AI-powered extraction and analysis.',
      category: 'saas',
      features: ['Document OCR', 'Data Extraction', 'Form Processing', 'Document Classification', 'Search & Retrieval', 'Integration APIs'],
      price: 'Starting at $139/month',
      marketPrice: '$250-600/month',
      benefits: ['Faster document processing', 'Reduced manual work', 'Better accuracy', 'Cost savings']
    },
    {
      icon: Brain,
      title: 'Zion AI Quantum Analytics',
      description: 'Next-generation quantum-inspired analytics platform for complex data processing and optimization.',
      category: 'saas',
      features: ['Quantum Algorithms', 'Complex Optimization', 'Advanced ML Models', 'Real-time Processing', 'Multi-dimensional Analysis', 'Quantum Simulation'],
      price: 'Starting at $499/month',
      marketPrice: '$1000-3000/month',
      benefits: ['Exponential processing power', 'Complex problem solving', 'Advanced optimization', 'Future-ready technology']
    },
    {
      icon: Cpu,
      title: 'Zion AI Edge Intelligence',
      description: 'Distributed AI processing platform for real-time edge computing and IoT applications.',
      category: 'saas',
      features: ['Edge AI Models', 'Real-time Processing', 'IoT Integration', 'Low Latency', 'Offline Capability', 'Distributed Computing'],
      price: 'Starting at $299/month',
      marketPrice: '$600-2000/month',
      benefits: ['Ultra-low latency', 'Offline processing', 'Scalable edge deployment', 'Cost-effective computing']
    },
    {
      icon: Eye,
      title: 'Zion AI Vision Pro',
      description: 'Advanced computer vision platform with 3D reconstruction and augmented reality capabilities.',
      category: 'saas',
      features: ['3D Object Detection', 'AR Integration', 'Real-time Tracking', 'Depth Analysis', 'Spatial Mapping', 'Gesture Recognition'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2500/month',
      benefits: ['Advanced visual processing', 'AR/VR integration', 'Real-time 3D analysis', 'Immersive experiences']
    },
    {
      icon: Zap,
      title: 'Zion AI Energy Optimizer',
      description: 'AI-powered energy management system for smart buildings and industrial facilities.',
      category: 'saas',
      features: ['Smart Grid Integration', 'Predictive Maintenance', 'Energy Forecasting', 'Load Balancing', 'Carbon Footprint Tracking', 'Cost Optimization'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce energy costs by 30%', 'Carbon footprint reduction', 'Smart automation', 'Predictive maintenance']
    },
    {
      icon: Heart,
      title: 'Zion AI Health Monitor',
      description: 'Comprehensive health monitoring platform with AI-powered diagnostics and wellness tracking.',
      category: 'saas',
      features: ['Vital Signs Monitoring', 'AI Diagnostics', 'Health Predictions', 'Wellness Tracking', 'Medical Records', 'Emergency Alerts'],
      price: 'Starting at $149/month',
      marketPrice: '$300-800/month',
      benefits: ['Proactive health management', 'Early disease detection', 'Personalized insights', '24/7 monitoring']
    },
    {
      icon: Globe,
      title: 'Zion AI Climate Intelligence',
      description: 'Advanced climate monitoring and prediction platform for environmental management.',
      category: 'saas',
      features: ['Climate Modeling', 'Weather Prediction', 'Environmental Monitoring', 'Risk Assessment', 'Sustainability Tracking', 'Carbon Analytics'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1500/month',
      benefits: ['Accurate climate predictions', 'Environmental compliance', 'Risk mitigation', 'Sustainability insights']
    },
    {
      icon: Shield,
      title: 'Zion AI Security Sentinel',
      description: 'Next-generation cybersecurity platform with AI-powered threat detection and response.',
      category: 'saas',
      features: ['Zero-day Detection', 'Behavioral Analysis', 'Automated Response', 'Threat Hunting', 'Compliance Monitoring', 'Incident Forensics'],
      price: 'Starting at $349/month',
      marketPrice: '$700-2000/month',
      benefits: ['Advanced threat protection', 'Automated response', 'Compliance assurance', '24/7 monitoring']
    },
    {
      icon: Users,
      title: 'Zion AI Talent Intelligence',
      description: 'AI-powered talent acquisition and management platform with advanced matching algorithms.',
      category: 'saas',
      features: ['AI Resume Screening', 'Skill Matching', 'Interview Automation', 'Performance Analytics', 'Diversity Tracking', 'Retention Prediction'],
      price: 'Starting at $179/month',
      marketPrice: '$350-900/month',
      benefits: ['Faster hiring process', 'Better candidate matches', 'Reduced bias', 'Improved retention']
    },
    {
      icon: BarChart,
      title: 'Zion AI Market Intelligence',
      description: 'Real-time market analysis and trading platform with AI-powered insights and predictions.',
      category: 'saas',
      features: ['Market Analysis', 'Trading Signals', 'Risk Assessment', 'Portfolio Optimization', 'News Sentiment', 'Algorithmic Trading'],
      price: 'Starting at $599/month',
      marketPrice: '$1200-3000/month',
      benefits: ['Data-driven trading', 'Risk reduction', 'Portfolio optimization', 'Real-time insights']
    },
    {
      icon: Code,
      title: 'Zion AI Code Generator Pro',
      description: 'Advanced AI code generation platform with full-stack development capabilities.',
      category: 'saas',
      features: ['Full-Stack Generation', 'Code Review', 'Bug Detection', 'Performance Optimization', 'Documentation Generation', 'Test Automation'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1000/month',
      benefits: ['10x faster development', 'Higher code quality', 'Automated testing', 'Reduced bugs']
    },
    {
      icon: MessageSquare,
      title: 'Zion AI Conversational Platform',
      description: 'Enterprise-grade conversational AI platform with multi-modal interaction capabilities.',
      category: 'saas',
      features: ['Voice & Text Chat', 'Multi-language Support', 'Context Awareness', 'Emotion Detection', 'Voice Synthesis', 'Integration APIs'],
      price: 'Starting at $279/month',
      marketPrice: '$550-1400/month',
      benefits: ['Natural conversations', 'Multi-modal interaction', 'Emotional intelligence', 'Seamless integration']
    },
    {
      icon: Database,
      title: 'Zion AI Data Fabric',
      description: 'Intelligent data management platform with automated data governance and quality assurance.',
      category: 'saas',
      features: ['Data Governance', 'Quality Monitoring', 'Automated Classification', 'Privacy Protection', 'Data Lineage', 'Compliance Management'],
      price: 'Starting at $229/month',
      marketPrice: '$450-1100/month',
      benefits: ['Data quality assurance', 'Compliance automation', 'Privacy protection', 'Governance efficiency']
    },
    {
      icon: Settings,
      title: 'Zion AI Process Optimizer',
      description: 'Intelligent business process optimization platform with automated workflow improvement.',
      category: 'saas',
      features: ['Process Mining', 'Workflow Optimization', 'Bottleneck Detection', 'Resource Allocation', 'Performance Analytics', 'Automated Improvement'],
      price: 'Starting at $159/month',
      marketPrice: '$320-800/month',
      benefits: ['Process efficiency', 'Cost reduction', 'Automated optimization', 'Performance insights']
    },
    {
      icon: Target,
      title: 'Zion AI Customer 360',
      description: 'Comprehensive customer intelligence platform with 360-degree view and predictive analytics.',
      category: 'saas',
      features: ['Customer Profiling', 'Behavior Prediction', 'Churn Prevention', 'Lifetime Value', 'Personalization Engine', 'Cross-channel Analytics'],
      price: 'Starting at $189/month',
      marketPrice: '$380-950/month',
      benefits: ['Complete customer view', 'Predictive insights', 'Churn reduction', 'Personalized experiences']
    },
    {
      icon: Package,
      title: 'Zion AI Supply Chain Pro',
      description: 'Advanced supply chain optimization platform with AI-powered demand forecasting and logistics.',
      category: 'saas',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Risk Assessment', 'Cost Optimization'],
      price: 'Starting at $279/month',
      marketPrice: '$550-1400/month',
      benefits: ['Supply chain efficiency', 'Cost reduction', 'Risk mitigation', 'Optimized logistics']
    },
    {
      icon: Monitor,
      title: 'Zion AI Infrastructure Monitor',
      description: 'Intelligent infrastructure monitoring platform with predictive maintenance and optimization.',
      category: 'saas',
      features: ['Predictive Maintenance', 'Performance Monitoring', 'Anomaly Detection', 'Capacity Planning', 'Cost Optimization', 'Automated Scaling'],
      price: 'Starting at $149/month',
      marketPrice: '$300-750/month',
      benefits: ['Proactive maintenance', 'Cost optimization', 'Performance improvement', 'Automated scaling']
    },
    {
      icon: FileText,
      title: 'Zion AI Legal Assistant',
      description: 'AI-powered legal document analysis and contract management platform.',
      category: 'saas',
      features: ['Contract Analysis', 'Legal Research', 'Compliance Checking', 'Risk Assessment', 'Document Generation', 'Case Law Analysis'],
      price: 'Starting at $299/month',
      marketPrice: '$600-1500/month',
      benefits: ['Faster legal research', 'Contract optimization', 'Risk reduction', 'Compliance assurance']
    },
    {
      icon: Heart,
      title: 'Zion AI Mental Health Pro',
      description: 'AI-powered mental health monitoring and wellness platform with personalized interventions.',
      category: 'saas',
      features: ['Mood Tracking', 'Stress Analysis', 'Wellness Recommendations', 'Crisis Detection', 'Therapy Matching', 'Progress Monitoring'],
      price: 'Starting at $99/month',
      marketPrice: '$200-500/month',
      benefits: ['Mental health awareness', 'Early intervention', 'Personalized care', 'Wellness improvement']
    },
    {
      icon: Globe,
      title: 'Zion AI Language Master',
      description: 'Advanced language learning platform with AI-powered personalized instruction and practice.',
      category: 'saas',
      features: ['Personalized Learning', 'Speech Recognition', 'Grammar Analysis', 'Cultural Context', 'Progress Tracking', 'Adaptive Testing'],
      price: 'Starting at $79/month',
      marketPrice: '$150-400/month',
      benefits: ['Faster language learning', 'Personalized instruction', 'Cultural understanding', 'Progress optimization']
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
                      href="/contact"
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
