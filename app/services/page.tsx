'use client';
import React from 'react';
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
  Filter
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    // AI Services
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Consulting'],
      price: 'Starting at $1,500/month',
      category: 'AI Services',
      popular: true
    },
    {
      icon: Brain,
      title: 'AI Marketing Automation',
      description: 'Revolutionary AI-powered marketing automation with personalized campaigns and intelligent optimization.',
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'ROI Optimization', 'Multi-channel'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base', '24/7 Support'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Data Visualization', 'Real-time Insights', 'Custom Dashboards', 'ML Models'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, image generation, and video production.',
      features: ['Content Writing', 'Image Generation', 'Video Creation', 'SEO Optimization', 'Multi-language'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Healthcare Solutions',
      description: 'HIPAA-compliant AI solutions for medical imaging, drug discovery, and patient care optimization.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Analytics', 'Diagnostic Support', 'HIPAA Compliance'],
      price: 'Starting at $1,999/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Financial Services',
      description: 'Advanced AI solutions for fraud detection, risk assessment, and algorithmic trading.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring', 'Compliance'],
      price: 'Starting at $1,499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI E-commerce Solutions',
      description: 'Intelligent e-commerce platform with recommendation engines and dynamic pricing.',
      features: ['Recommendation Engine', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Insights', 'Sales Forecasting'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    
    // Cloud Services
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for enhanced performance and reliability.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery', 'Multi-cloud'],
      price: 'Starting at $1,299/month',
      category: 'Cloud Services',
      popular: true
    },
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and data integrity.',
      features: ['Zero Downtime', 'Data Integrity', 'Cost Optimization', 'Security Compliance', '24/7 Support'],
      price: 'Starting at $2,999/project',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Comprehensive cloud security solutions with threat detection and compliance management.',
      features: ['Threat Detection', 'Compliance Management', 'Access Control', 'Data Encryption', 'Monitoring'],
      price: 'Starting at $599/month',
      category: 'Cloud Services'
    },
    {
      icon: Cloud,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure Monitoring', 'Version Control', 'Collaboration'],
      price: 'Starting at $799/month',
      category: 'Cloud Services'
    },
    
    // Cybersecurity
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance', 'Threat Intelligence'],
      price: 'Starting at $799/month',
      category: 'Cybersecurity',
      popular: true
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: '24/7 security monitoring with AI-powered threat detection and automated response.',
      features: ['24/7 Monitoring', 'AI Threat Detection', 'Automated Response', 'Incident Management', 'Compliance Reporting'],
      price: 'Starting at $499/month',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities and strengthen your defenses.',
      features: ['Vulnerability Assessment', 'Social Engineering Tests', 'Network Security', 'Web Application Testing', 'Reporting'],
      price: 'Starting at $2,999/assessment',
      category: 'Cybersecurity'
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated monitoring and reporting solutions.',
      features: ['Regulatory Compliance', 'Automated Monitoring', 'Audit Trails', 'Risk Assessment', 'Documentation'],
      price: 'Starting at $399/month',
      category: 'Cybersecurity'
    },
    
    // Data Analytics
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Reporting', 'Predictive Modeling'],
      price: 'Starting at $599/month',
      category: 'Data Analytics',
      popular: true
    },
    {
      icon: BarChart3,
      title: 'Big Data Solutions',
      description: 'Handle massive datasets with scalable big data processing and analytics platforms.',
      features: ['Data Processing', 'Real-time Analytics', 'Scalable Infrastructure', 'Machine Learning', 'Data Lakes'],
      price: 'Starting at $1,299/month',
      category: 'Data Analytics'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions with interactive dashboards and automated reporting.',
      features: ['Interactive Dashboards', 'Automated Reports', 'Data Integration', 'Self-service Analytics', 'Mobile Access'],
      price: 'Starting at $899/month',
      category: 'Data Analytics'
    },
    
    // Mobile Development
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms with modern technologies.',
      features: ['Native Apps', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting at $1,999/month',
      category: 'Mobile Development',
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile App Maintenance',
      description: 'Ongoing maintenance and updates for your mobile applications with performance optimization.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', 'App Store Management'],
      price: 'Starting at $299/month',
      category: 'Mobile Development'
    },
    
    // Database Services
    {
      icon: Database,
      title: 'Database Services',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'Starting at $399/month',
      category: 'Database Services',
      popular: true
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Seamless database migration with zero downtime and data integrity preservation.',
      features: ['Zero Downtime', 'Data Integrity', 'Performance Optimization', 'Testing', 'Documentation'],
      price: 'Starting at $1,999/migration',
      category: 'Database Services'
    },
    
    // Automation
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline your workflows with intelligent automation solutions and RPA.',
      features: ['Workflow Automation', 'RPA Implementation', 'Integration', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true
    },
    {
      icon: Zap,
      title: 'IT Automation',
      description: 'Automate IT operations with intelligent monitoring, deployment, and maintenance solutions.',
      features: ['Infrastructure Automation', 'Deployment Automation', 'Monitoring', 'Self-healing', 'Cost Optimization'],
      price: 'Starting at $799/month',
      category: 'Automation'
    },
    
    // Web Development
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js', 'Full-stack Development', 'API Development', 'Performance Optimization', 'SEO'],
      price: 'Starting at $1,299/month',
      category: 'Web Development',
      popular: true
    },
    {
      icon: Globe,
      title: 'E-commerce Development',
      description: 'Custom e-commerce solutions with advanced features and integrations.',
      features: ['Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Optimization'],
      price: 'Starting at $1,999/month',
      category: 'Web Development'
    },
    
    // IT Services
    {
      icon: Database,
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure setup and management for enterprise environments.',
      features: ['Server Setup', 'Network Configuration', 'Security Implementation', 'Monitoring', 'Maintenance'],
      price: 'Starting at $1,499/month',
      category: 'IT Services'
    },
    {
      icon: Shield,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with 24/7 support and proactive monitoring.',
      features: ['24/7 Support', 'Proactive Monitoring', 'Help Desk', 'Security Management', 'Backup Solutions'],
      price: 'Starting at $999/month',
      category: 'IT Services'
    },
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and processes.',
      features: ['Technology Assessment', 'Strategic Planning', 'Cost Optimization', 'Digital Transformation', 'Training'],
      price: 'Starting at $299/hour',
      category: 'IT Services'
    },

    // Advanced AI Services
    {
      icon: Brain,
      title: 'AI Voice Assistant',
      description: 'Custom AI voice assistants with natural language processing and multi-language support.',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Custom Commands', 'Integration APIs'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Predictive Maintenance',
      description: 'Predict equipment failures before they happen with AI-powered predictive analytics.',
      features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization', 'Real-time Alerts'],
      price: 'Starting at $599/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Supply Chain Optimization',
      description: 'Optimize your supply chain with AI-driven demand forecasting and inventory management.',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Risk Assessment', 'Cost Reduction'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Quality Control',
      description: 'Automated quality control using computer vision and machine learning for manufacturing.',
      features: ['Computer Vision', 'Defect Detection', 'Quality Metrics', 'Real-time Monitoring', 'Automated Reporting'],
      price: 'Starting at $699/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Energy Management',
      description: 'Smart energy management systems that optimize consumption and reduce costs.',
      features: ['Energy Monitoring', 'Consumption Optimization', 'Cost Analysis', 'Renewable Integration', 'Smart Grid'],
      price: 'Starting at $499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Talent Acquisition',
      description: 'Revolutionary AI-powered recruitment and talent acquisition solutions.',
      features: ['Resume Screening', 'Candidate Matching', 'Interview Scheduling', 'Skills Assessment', 'Bias Reduction'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Risk Management',
      description: 'Advanced risk assessment and management using AI and machine learning.',
      features: ['Risk Assessment', 'Fraud Detection', 'Compliance Monitoring', 'Predictive Analytics', 'Automated Alerts'],
      price: 'Starting at $899/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Content Moderation',
      description: 'Automated content moderation for social media, forums, and user-generated content.',
      features: ['Text Analysis', 'Image Recognition', 'Video Processing', 'Real-time Moderation', 'Custom Rules'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Translation Services',
      description: 'Real-time translation services with context-aware AI for 100+ languages.',
      features: ['100+ Languages', 'Context Awareness', 'Real-time Translation', 'Document Processing', 'API Integration'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Personalization Engine',
      description: 'Create personalized experiences for users with AI-driven recommendation systems.',
      features: ['User Profiling', 'Recommendation Engine', 'A/B Testing', 'Behavioral Analysis', 'Real-time Adaptation'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Sentiment Analysis',
      description: 'Analyze customer sentiment across all channels with advanced AI algorithms.',
      features: ['Multi-channel Analysis', 'Real-time Processing', 'Emotion Detection', 'Trend Analysis', 'Custom Dashboards'],
      price: 'Starting at $249/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Video Analytics',
      description: 'Extract insights from video content using computer vision and AI analysis.',
      features: ['Object Detection', 'Activity Recognition', 'Face Recognition', 'Scene Analysis', 'Real-time Processing'],
      price: 'Starting at $599/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Chatbot Pro',
      description: 'Advanced conversational AI chatbots with multi-turn dialogue and context awareness.',
      features: ['Multi-turn Dialogue', 'Context Awareness', 'Intent Recognition', 'Integration APIs', 'Analytics Dashboard'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Code Review',
      description: 'Automated code review and quality assurance using AI and machine learning.',
      features: ['Code Analysis', 'Bug Detection', 'Security Scanning', 'Performance Optimization', 'Best Practices'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Market Research',
      description: 'Automated market research and competitive analysis using AI and big data.',
      features: ['Market Analysis', 'Competitor Tracking', 'Trend Identification', 'Consumer Insights', 'Report Generation'],
      price: 'Starting at $499/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Legal Document Analysis',
      description: 'AI-powered legal document review, contract analysis, and compliance checking.',
      features: ['Contract Analysis', 'Compliance Checking', 'Risk Assessment', 'Clause Extraction', 'Legal Research'],
      price: 'Starting at $699/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Weather Prediction',
      description: 'Advanced weather forecasting and climate analysis using AI and satellite data.',
      features: ['Weather Forecasting', 'Climate Analysis', 'Disaster Prediction', 'Agricultural Insights', 'API Integration'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Traffic Optimization',
      description: 'Smart traffic management and optimization for cities and transportation systems.',
      features: ['Traffic Analysis', 'Route Optimization', 'Congestion Prediction', 'Signal Control', 'Real-time Updates'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Gaming Solutions',
      description: 'AI-powered game development tools, NPCs, and intelligent game mechanics.',
      features: ['NPC AI', 'Procedural Generation', 'Player Behavior Analysis', 'Game Balancing', 'Multiplayer AI'],
      price: 'Starting at $599/month',
      category: 'AI Services'
    },
    {
      icon: Brain,
      title: 'AI Real Estate Analytics',
      description: 'Property valuation, market analysis, and investment insights using AI.',
      features: ['Property Valuation', 'Market Analysis', 'Investment Insights', 'Price Prediction', 'Risk Assessment'],
      price: 'Starting at $349/month',
      category: 'AI Services'
    },

    // Advanced Micro SAAS Solutions
    {
      icon: Zap,
      title: 'AI Meeting Scheduler',
      description: 'Intelligent meeting scheduling that finds optimal times for all participants.',
      features: ['Calendar Integration', 'Time Zone Handling', 'Conflict Resolution', 'Meeting Optimization', 'Reminder System'],
      price: '$29/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Social Media Scheduler',
      description: 'Smart social media content scheduling with optimal posting times and engagement prediction.',
      features: ['Multi-platform Support', 'Optimal Timing', 'Content Suggestions', 'Engagement Analytics', 'Auto-posting'],
      price: '$39/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Multi-device Sync', '2FA Integration'],
      price: '$19/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Time Tracker',
      description: 'Intelligent time tracking with automatic project detection and productivity insights.',
      features: ['Automatic Tracking', 'Project Detection', 'Productivity Analytics', 'Invoice Generation', 'Team Management'],
      price: '$25/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Note Taker',
      description: 'Smart note-taking with voice-to-text, automatic summarization, and intelligent organization.',
      features: ['Voice-to-Text', 'Auto Summarization', 'Smart Organization', 'Search & Retrieval', 'Collaboration'],
      price: '$35/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Habit Tracker',
      description: 'Personal habit tracking with AI insights, motivation, and goal achievement strategies.',
      features: ['Habit Tracking', 'AI Insights', 'Motivation System', 'Goal Setting', 'Progress Analytics'],
      price: '$15/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Recipe Generator',
      description: 'Personalized recipe generation based on ingredients, dietary preferences, and nutritional goals.',
      features: ['Ingredient-based Recipes', 'Dietary Preferences', 'Nutritional Analysis', 'Meal Planning', 'Shopping Lists'],
      price: '$22/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness coaching with workout plans, nutrition advice, and progress tracking.',
      features: ['Workout Plans', 'Nutrition Advice', 'Progress Tracking', 'Form Analysis', 'Goal Setting'],
      price: '$45/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Language Learning',
      description: 'Personalized language learning with AI tutors, conversation practice, and progress tracking.',
      features: ['AI Tutoring', 'Conversation Practice', 'Progress Tracking', 'Adaptive Learning', 'Multi-language Support'],
      price: '$32/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Budget Planner',
      description: 'Smart budget planning with expense categorization, savings goals, and financial insights.',
      features: ['Expense Categorization', 'Savings Goals', 'Financial Insights', 'Bill Reminders', 'Investment Tracking'],
      price: '$28/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with itinerary optimization, booking assistance, and local insights.',
      features: ['Itinerary Planning', 'Booking Assistance', 'Local Insights', 'Budget Optimization', 'Real-time Updates'],
      price: '$38/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Home Automation',
      description: 'Smart home control with AI optimization, energy management, and security monitoring.',
      features: ['Device Control', 'Energy Management', 'Security Monitoring', 'Voice Commands', 'Automation Rules'],
      price: '$55/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Study Assistant',
      description: 'AI-powered study companion with flashcard generation, quiz creation, and progress tracking.',
      features: ['Flashcard Generation', 'Quiz Creation', 'Progress Tracking', 'Study Plans', 'Knowledge Gaps'],
      price: '$26/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Pet Care Tracker',
      description: 'Comprehensive pet care management with health tracking, feeding schedules, and vet reminders.',
      features: ['Health Tracking', 'Feeding Schedules', 'Vet Reminders', 'Vaccination Records', 'Behavior Analysis'],
      price: '$18/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Plant Care Assistant',
      description: 'Smart plant care with watering reminders, growth tracking, and plant identification.',
      features: ['Watering Reminders', 'Growth Tracking', 'Plant Identification', 'Care Tips', 'Health Monitoring'],
      price: '$12/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Mood Tracker',
      description: 'Personal mood tracking with AI insights, pattern recognition, and wellness recommendations.',
      features: ['Mood Tracking', 'Pattern Recognition', 'Wellness Recommendations', 'Journal Integration', 'Progress Reports'],
      price: '$20/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Sleep Optimizer',
      description: 'Sleep analysis and optimization with personalized recommendations and tracking.',
      features: ['Sleep Analysis', 'Personalized Recommendations', 'Sleep Tracking', 'Environment Optimization', 'Progress Reports'],
      price: '$24/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Meditation Guide',
      description: 'Personalized meditation and mindfulness guidance with AI-adapted sessions.',
      features: ['Personalized Sessions', 'Progress Tracking', 'Guided Meditations', 'Mood Adaptation', 'Achievement System'],
      price: '$16/month',
      category: 'Micro SAAS'
    },
    {
      icon: Zap,
      title: 'AI Reading Assistant',
      description: 'Smart reading companion with speed optimization, comprehension analysis, and note-taking.',
      features: ['Speed Optimization', 'Comprehension Analysis', 'Note-taking', 'Reading Plans', 'Progress Tracking'],
      price: '$30/month',
      category: 'Micro SAAS'
    },

    // Advanced IT Services
    {
      icon: Cloud,
      title: 'Cloud Security Audit',
      description: 'Comprehensive cloud security assessment and compliance verification.',
      features: ['Security Assessment', 'Compliance Verification', 'Vulnerability Scanning', 'Penetration Testing', 'Remediation Plan'],
      price: 'Starting at $1,999/audit',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Disaster Recovery Planning',
      description: 'Complete disaster recovery strategy and implementation for business continuity.',
      features: ['Risk Assessment', 'Recovery Planning', 'Backup Strategy', 'Testing & Validation', 'Documentation'],
      price: 'Starting at $2,499/project',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Network Security Implementation',
      description: 'Enterprise-grade network security with firewalls, VPNs, and intrusion detection.',
      features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Network Monitoring', 'Security Policies'],
      price: 'Starting at $1,299/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'IT Asset Management',
      description: 'Comprehensive IT asset tracking, lifecycle management, and optimization.',
      features: ['Asset Tracking', 'Lifecycle Management', 'License Management', 'Cost Optimization', 'Compliance Reporting'],
      price: 'Starting at $199/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Remote Work Solutions',
      description: 'Complete remote work infrastructure with security, collaboration, and productivity tools.',
      features: ['VPN Setup', 'Collaboration Tools', 'Security Policies', 'Device Management', 'Support Services'],
      price: 'Starting at $299/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs and certification preparation for your team.',
      features: ['Custom Training', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking', 'Certification Support'],
      price: 'Starting at $149/person/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'API Development & Management',
      description: 'Custom API development with documentation, testing, and lifecycle management.',
      features: ['API Development', 'Documentation', 'Testing & Validation', 'Version Management', 'Monitoring'],
      price: 'Starting at $799/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'IT Performance Optimization',
      description: 'System performance analysis and optimization for maximum efficiency and speed.',
      features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring Setup', 'Reporting'],
      price: 'Starting at $599/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'Cloud Cost Optimization',
      description: 'Reduce cloud costs by 30-50% with intelligent resource optimization and right-sizing.',
      features: ['Cost Analysis', 'Resource Optimization', 'Right-sizing', 'Reserved Instances', 'Cost Monitoring'],
      price: 'Starting at $399/month',
      category: 'IT Services'
    },
    {
      icon: Cloud,
      title: 'IT Compliance Management',
      description: 'Ensure compliance with industry standards and regulations (SOX, HIPAA, GDPR, etc.).',
      features: ['Compliance Assessment', 'Policy Development', 'Audit Preparation', 'Monitoring', 'Documentation'],
      price: 'Starting at $699/month',
      category: 'IT Services'
    }
  ];

  const categories = [
    'All',
    'AI Services',
    'Cloud Services',
    'Cybersecurity',
    'Data Analytics',
    'Mobile Development',
    'Database Services',
    'Automation',
    'Web Development',
    'IT Services',
    'Micro SAAS'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI and IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI and IT services designed to transform your business. From AI solutions to cloud services and data analytics." />
        <meta name="keywords" content="AI services, IT services, cloud services, data analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
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
                  </div>
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
                  </div>
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
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All Services' : `${selectedCategory}`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
