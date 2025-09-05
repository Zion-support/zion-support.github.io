import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  Brain, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive,
  Database,
  Phone,
  MapPin,
  Droplets,
  Wifi,
  Laptop,
  CreditCard,
  PieChart,
  Truck,
  GraduationCap,
  ClipboardList,
  TreePine,
  FlaskConical,
  Gamepad2,
  Image
} from 'lucide-react';

const microSaaSProducts = [
  // AI & Machine Learning Solutions
  {
    title: 'AI Content Marketing Suite',
    description: 'Automated content creation, SEO optimization, and social media management platform with advanced AI capabilities.',
    icon: FileText,
    features: ['AI Content Generation', 'SEO Optimization', 'Social Media Scheduling', 'Analytics Dashboard', 'Multi-language Support', 'Brand Voice Training'],
    pricing: '$29 - $199/month',
    category: 'AI Marketing',
    popular: true,
    benefits: ['10x Content Output', 'SEO Boost', 'Time Savings', 'Better Engagement', 'Cost Reduction'],
    marketPrice: '$50 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-marketing-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Lead Management System',
    description: 'AI-powered lead scoring, nurturing, and conversion optimization platform with predictive analytics.',
    icon: Target,
    features: ['Lead Scoring', 'Automated Nurturing', 'CRM Integration', 'Conversion Tracking', 'Predictive Analytics', 'A/B Testing'],
    pricing: '$49 - $299/month',
    category: 'AI Sales',
    popular: true,
    benefits: ['Higher Conversion', 'Automated Workflows', 'Better ROI', 'Data Insights', 'Reduced Manual Work'],
    marketPrice: '$75 - $500/month',
    link: 'https://ziontechgroup.com/smart-lead-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time business intelligence with predictive analytics, custom reporting, and automated insights.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Insights', 'Custom Reports', 'Data Visualization', 'Automated Alerts', 'ROI Tracking'],
    pricing: '$39 - $249/month',
    category: 'AI Analytics',
    popular: true,
    benefits: ['Data-Driven Decisions', 'Predictive Insights', 'Custom Dashboards', 'ROI Tracking', 'Automated Reporting'],
    marketPrice: '$60 - $400/month',
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Support Bot',
    description: 'Intelligent chatbot with natural language processing, multi-channel support, and sentiment analysis.',
    icon: Bot,
    features: ['Natural Language Processing', 'Multi-channel Support', 'Sentiment Analysis', 'Knowledge Base Integration', 'Human Handoff', 'Performance Analytics'],
    pricing: '$19 - $149/month',
    category: 'AI Support',
    popular: true,
    benefits: ['24/7 Support', 'Reduced Response Time', 'Cost Savings', 'Better Customer Satisfaction', 'Scalable Support'],
    marketPrice: '$30 - $200/month',
    link: 'https://ziontechgroup.com/ai-customer-support-bot',
    contact: '+1 302 464 0950'
  },

  // Cloud & Infrastructure Solutions
  {
    title: 'Cloud Cost Optimizer',
    description: 'Automated cloud cost management with rightsizing recommendations and budget alerts across AWS, Azure, and GCP.',
    icon: DollarSign,
    features: ['Cost Anomaly Detection', 'Auto Rightsizing', 'Budget Forecasting', 'Multi-cloud Support', 'Resource Optimization', 'Cost Allocation'],
    pricing: '$99 - $499/month',
    category: 'Cloud FinOps',
    popular: true,
    benefits: ['30% Cost Reduction', 'Automated Optimization', 'Budget Control', 'Multi-cloud Visibility', 'ROI Tracking'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Infrastructure Monitoring Suite',
    description: 'Comprehensive infrastructure monitoring with automated alerting, performance optimization, and capacity planning.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Automated Alerting', 'Performance Optimization', 'Capacity Planning', 'Log Analysis', 'Incident Management'],
    pricing: '$79 - $399/month',
    category: 'DevOps',
    popular: true,
    benefits: ['99.9% Uptime', 'Proactive Monitoring', 'Reduced Downtime', 'Performance Optimization', 'Cost Efficiency'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/infrastructure-monitoring',
    contact: '+1 302 464 0950'
  },
  {
    title: 'API Gateway Management',
    description: 'Centralized API management with rate limiting, authentication, monitoring, and analytics.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Monitoring', 'Analytics', 'Documentation'],
    pricing: '$49 - $299/month',
    category: 'API Management',
    popular: true,
    benefits: ['Centralized Management', 'Security Enhancement', 'Performance Optimization', 'Developer Experience', 'Cost Control'],
    marketPrice: '$80 - $500/month',
    link: 'https://ziontechgroup.com/api-gateway-management',
    contact: '+1 302 464 0950'
  },

  // E-commerce & Business Solutions
  {
    title: 'Smart Inventory Management',
    description: 'AI-powered inventory optimization with demand forecasting, automated reordering, and supplier management.',
    icon: Package,
    features: ['Demand Forecasting', 'Automated Reordering', 'Supplier Management', 'Inventory Optimization', 'Multi-location Support', 'Analytics'],
    pricing: '$39 - $199/month',
    category: 'E-commerce',
    popular: true,
    benefits: ['Reduced Stockouts', 'Lower Inventory Costs', 'Automated Operations', 'Better Cash Flow', 'Improved Efficiency'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/smart-inventory-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Automated Email Marketing',
    description: 'Advanced email marketing automation with personalization, A/B testing, and behavioral triggers.',
    icon: Mail,
    features: ['Email Automation', 'Personalization', 'A/B Testing', 'Behavioral Triggers', 'Analytics', 'Template Library'],
    pricing: '$29 - $149/month',
    category: 'Marketing',
    popular: true,
    benefits: ['Higher Open Rates', 'Better Engagement', 'Automated Workflows', 'Personalized Content', 'ROI Tracking'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/automated-email-marketing',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Project Management Suite',
    description: 'Comprehensive project management with AI-powered task prioritization, resource allocation, and progress tracking.',
    icon: ClipboardList,
    features: ['Task Management', 'Resource Allocation', 'Progress Tracking', 'Team Collaboration', 'AI Prioritization', 'Reporting'],
    pricing: '$19 - $99/month',
    category: 'Productivity',
    popular: true,
    benefits: ['Improved Productivity', 'Better Collaboration', 'Resource Optimization', 'Project Visibility', 'Time Savings'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/project-management-suite',
    contact: '+1 302 464 0950'
  },

  // Security & Compliance Solutions
  {
    title: 'Security Compliance Manager',
    description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulations with real-time reporting.',
    icon: Shield,
    features: ['Compliance Monitoring', 'Real-time Reporting', 'Risk Assessment', 'Audit Trails', 'Policy Management', 'Automated Alerts'],
    pricing: '$99 - $399/month',
    category: 'Security',
    popular: true,
    benefits: ['Compliance Assurance', 'Risk Reduction', 'Automated Monitoring', 'Audit Readiness', 'Cost Savings'],
    marketPrice: '$150 - $600/month',
    link: 'https://ziontechgroup.com/security-compliance-manager',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Identity & Access Management',
    description: 'Comprehensive IAM solution with SSO, MFA, role-based access control, and audit capabilities.',
    icon: Lock,
    features: ['Single Sign-On', 'Multi-Factor Auth', 'Role-Based Access', 'Audit Logging', 'User Provisioning', 'Password Management'],
    pricing: '$49 - $199/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Simplified Access', 'Compliance', 'Reduced IT Overhead', 'Better User Experience'],
    marketPrice: '$80 - $300/month',
    link: 'https://ziontechgroup.com/identity-access-management',
    contact: '+1 302 464 0950'
  },

  // Industry-Specific Solutions
  {
    title: 'Healthcare Data Analytics',
    description: 'HIPAA-compliant healthcare analytics platform with patient insights, operational metrics, and predictive modeling.',
    icon: Heart,
    features: ['HIPAA Compliance', 'Patient Analytics', 'Operational Metrics', 'Predictive Modeling', 'Clinical Insights', 'Reporting'],
    pricing: '$199 - $799/month',
    category: 'Healthcare',
    popular: true,
    benefits: ['Better Patient Care', 'Operational Efficiency', 'Compliance Assurance', 'Data-Driven Decisions', 'Cost Reduction'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/healthcare-data-analytics',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Financial Risk Assessment',
    description: 'AI-powered financial risk analysis with fraud detection, credit scoring, and regulatory compliance.',
    icon: CreditCard,
    features: ['Fraud Detection', 'Credit Scoring', 'Risk Assessment', 'Regulatory Compliance', 'Real-time Monitoring', 'Reporting'],
    pricing: '$149 - $599/month',
    category: 'FinTech',
    popular: true,
    benefits: ['Risk Reduction', 'Fraud Prevention', 'Compliance', 'Automated Analysis', 'Better Decision Making'],
    marketPrice: '$250 - $900/month',
    link: 'https://ziontechgroup.com/financial-risk-assessment',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Supply Chain Optimizer',
    description: 'End-to-end supply chain visibility with demand forecasting, logistics optimization, and supplier management.',
    icon: Truck,
    features: ['Supply Chain Visibility', 'Demand Forecasting', 'Logistics Optimization', 'Supplier Management', 'Risk Assessment', 'Analytics'],
    pricing: '$79 - $399/month',
    category: 'Logistics',
    popular: true,
    benefits: ['Cost Reduction', 'Improved Efficiency', 'Risk Mitigation', 'Better Planning', 'Supplier Optimization'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/supply-chain-optimizer',
    contact: '+1 302 464 0950'
  },

  // Emerging Technology Solutions
  {
    title: 'IoT Device Management',
    description: 'Comprehensive IoT platform for device provisioning, monitoring, data collection, and analytics.',
    icon: Wifi,
    features: ['Device Provisioning', 'Real-time Monitoring', 'Data Collection', 'Analytics', 'Remote Management', 'Security'],
    pricing: '$59 - $299/month',
    category: 'IoT',
    popular: true,
    benefits: ['Device Visibility', 'Operational Efficiency', 'Data Insights', 'Remote Management', 'Cost Optimization'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/iot-device-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Blockchain Analytics Platform',
    description: 'Comprehensive blockchain data analysis with transaction monitoring, smart contract auditing, and compliance reporting.',
    icon: Database,
    features: ['Transaction Monitoring', 'Smart Contract Auditing', 'Compliance Reporting', 'Risk Assessment', 'Analytics', 'Alerting'],
    pricing: '$199 - $799/month',
    category: 'Blockchain',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance', 'Risk Mitigation', 'Transparency', 'Audit Readiness'],
    marketPrice: '$300 - $1,200/month',
    link: 'https://ziontechgroup.com/blockchain-analytics-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Quantum Computing Simulator',
    description: 'Cloud-based quantum computing simulation platform for algorithm development and optimization.',
    icon: Cpu,
    features: ['Quantum Simulation', 'Algorithm Development', 'Optimization Tools', 'Performance Analysis', 'Educational Resources', 'API Access'],
    pricing: '$299 - $1,499/month',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Quantum Advantage', 'Algorithm Optimization', 'Research Acceleration', 'Cost Efficiency', 'Scalable Computing'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/quantum-computing-simulator',
    contact: '+1 302 464 0950'
  },

  // Communication & Collaboration Solutions
  {
    title: 'Video Conferencing Suite',
    description: 'Enterprise-grade video conferencing with AI-powered features, recording, and analytics.',
    icon: Video,
    features: ['HD Video Conferencing', 'AI Features', 'Recording & Transcription', 'Analytics', 'Integration', 'Security'],
    pricing: '$19 - $99/month',
    category: 'Communication',
    popular: true,
    benefits: ['Better Collaboration', 'AI Enhancement', 'Cost Savings', 'Flexibility', 'Professional Quality'],
    marketPrice: '$30 - $150/month',
    link: 'https://ziontechgroup.com/video-conferencing-suite',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Team Collaboration Hub',
    description: 'Unified collaboration platform with messaging, file sharing, project management, and AI assistance.',
    icon: Users,
    features: ['Team Messaging', 'File Sharing', 'Project Management', 'AI Assistant', 'Video Calls', 'Integration'],
    pricing: '$29 - $149/month',
    category: 'Collaboration',
    popular: true,
    benefits: ['Improved Productivity', 'Better Communication', 'Centralized Workspace', 'AI Assistance', 'Cost Efficiency'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/team-collaboration-hub',
    contact: '+1 302 464 0950'
  },

  // Data & Analytics Solutions
  {
    title: 'Data Pipeline Automation',
    description: 'Automated data pipeline with ETL/ELT processing, data quality monitoring, and real-time analytics.',
    icon: Database,
    features: ['ETL/ELT Processing', 'Data Quality Monitoring', 'Real-time Analytics', 'Data Governance', 'Scalability', 'Monitoring'],
    pricing: '$79 - $399/month',
    category: 'Data Engineering',
    popular: true,
    benefits: ['Automated Processing', 'Data Quality', 'Real-time Insights', 'Scalability', 'Cost Efficiency'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/data-pipeline-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Business Intelligence Platform',
    description: 'Self-service BI platform with drag-and-drop analytics, automated reporting, and predictive insights.',
    icon: PieChart,
    features: ['Self-service Analytics', 'Drag-and-drop Interface', 'Automated Reporting', 'Predictive Insights', 'Data Visualization', 'Collaboration'],
    pricing: '$49 - $249/month',
    category: 'Business Intelligence',
    popular: true,
    benefits: ['Self-service Analytics', 'Faster Insights', 'Automated Reporting', 'Better Decisions', 'User Empowerment'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/business-intelligence-platform',
    contact: '+1 302 464 0950'
  },

  // Education & Training Solutions
  {
    title: 'AI Learning Management System',
    description: 'AI-powered LMS with personalized learning paths, automated assessments, and progress tracking.',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Automated Assessments', 'Progress Tracking', 'Content Creation', 'Analytics', 'Mobile Learning'],
    pricing: '$39 - $199/month',
    category: 'EdTech',
    popular: true,
    benefits: ['Personalized Learning', 'Better Outcomes', 'Automated Assessment', 'Progress Tracking', 'Cost Efficiency'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-learning-management-system',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Virtual Training Platform',
    description: 'Immersive virtual training environment with VR/AR support, interactive simulations, and performance analytics.',
    icon: Monitor,
    features: ['VR/AR Support', 'Interactive Simulations', 'Performance Analytics', 'Multi-user Support', 'Content Creation', 'Assessment Tools'],
    pricing: '$99 - $499/month',
    category: 'EdTech',
    popular: true,
    benefits: ['Immersive Learning', 'Better Retention', 'Cost Savings', 'Scalable Training', 'Performance Tracking'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/virtual-training-platform',
    contact: '+1 302 464 0950'
  },

  // Advanced AI & Machine Learning Solutions
  {
    title: 'AI Code Review Assistant',
    description: 'Intelligent code review platform with automated bug detection, security analysis, and performance optimization suggestions.',
    icon: Code,
    features: ['Automated Code Review', 'Bug Detection', 'Security Analysis', 'Performance Optimization', 'Code Quality Metrics', 'Team Collaboration'],
    pricing: '$39 - $199/month',
    category: 'AI Development',
    popular: true,
    benefits: ['Better Code Quality', 'Faster Reviews', 'Security Enhancement', 'Team Productivity', 'Cost Reduction'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-code-review-assistant',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI-Powered Test Automation',
    description: 'Intelligent test automation platform with self-healing tests, visual testing, and AI-driven test generation.',
    icon: CheckCircle,
    features: ['Self-healing Tests', 'Visual Testing', 'AI Test Generation', 'Cross-browser Testing', 'Performance Testing', 'CI/CD Integration'],
    pricing: '$49 - $249/month',
    category: 'AI Testing',
    popular: true,
    benefits: ['Faster Testing', 'Reduced Maintenance', 'Better Coverage', 'Cost Efficiency', 'Quality Assurance'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-test-automation',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Document Intelligence',
    description: 'Advanced document processing with OCR, data extraction, and intelligent document classification.',
    icon: FileText,
    features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Form Processing', 'Compliance Checking', 'API Integration'],
    pricing: '$29 - $149/month',
    category: 'Document AI',
    popular: true,
    benefits: ['Automated Processing', 'Time Savings', 'Accuracy Improvement', 'Cost Reduction', 'Scalability'],
    marketPrice: '$50 - $250/month',
    link: 'https://ziontechgroup.com/ai-document-intelligence',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Voice Analytics Platform',
    description: 'Intelligent voice analysis for customer service, sales calls, and team meetings with sentiment analysis and insights.',
    icon: Mic,
    features: ['Voice Analysis', 'Sentiment Detection', 'Call Analytics', 'Performance Insights', 'Real-time Monitoring', 'Compliance'],
    pricing: '$59 - $299/month',
    category: 'Voice AI',
    popular: true,
    benefits: ['Better Customer Service', 'Performance Insights', 'Compliance', 'Cost Reduction', 'Quality Improvement'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/ai-voice-analytics',
    contact: '+1 302 464 0950'
  },

  // Blockchain & Web3 Solutions
  {
    title: 'NFT Marketplace Platform',
    description: 'Complete NFT marketplace solution with minting, trading, and analytics for digital collectibles and art.',
    icon: Image,
    features: ['NFT Minting', 'Trading Platform', 'Wallet Integration', 'Analytics Dashboard', 'Royalty Management', 'Multi-blockchain'],
    pricing: '$199 - $999/month',
    category: 'Web3',
    popular: true,
    benefits: ['Revenue Generation', 'Market Access', 'Blockchain Integration', 'Scalability', 'Innovation'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/nft-marketplace-platform',
    contact: '+1 302 464 0950'
  },
  {
    title: 'DeFi Yield Farming Platform',
    description: 'Automated yield farming platform with smart contract integration and risk management for DeFi protocols.',
    icon: TrendingUp,
    features: ['Yield Optimization', 'Smart Contract Integration', 'Risk Management', 'Portfolio Tracking', 'Automated Strategies', 'Analytics'],
    pricing: '$299 - $1,499/month',
    category: 'DeFi',
    popular: true,
    benefits: ['Higher Yields', 'Risk Mitigation', 'Automation', 'Portfolio Optimization', 'DeFi Access'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/defi-yield-farming',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Smart Contract Audit Platform',
    description: 'Automated smart contract security auditing with vulnerability detection and compliance checking.',
    icon: Shield,
    features: ['Automated Auditing', 'Vulnerability Detection', 'Compliance Checking', 'Security Scoring', 'Report Generation', 'Continuous Monitoring'],
    pricing: '$99 - $499/month',
    category: 'Blockchain Security',
    popular: true,
    benefits: ['Security Assurance', 'Risk Mitigation', 'Compliance', 'Cost Efficiency', 'Trust Building'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/smart-contract-audit',
    contact: '+1 302 464 0950'
  },

  // Advanced Analytics & Business Intelligence
  {
    title: 'Real-time Data Streaming Platform',
    description: 'High-performance data streaming platform with real-time analytics, event processing, and visualization.',
    icon: Zap,
    features: ['Real-time Streaming', 'Event Processing', 'Data Visualization', 'Scalable Architecture', 'API Integration', 'Monitoring'],
    pricing: '$79 - $399/month',
    category: 'Data Streaming',
    popular: true,
    benefits: ['Real-time Insights', 'Scalability', 'Performance', 'Cost Efficiency', 'Competitive Advantage'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/real-time-data-streaming',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Journey Analytics',
    description: 'Intelligent customer journey mapping with behavioral analysis, touchpoint optimization, and conversion prediction.',
    icon: Target,
    features: ['Journey Mapping', 'Behavioral Analysis', 'Touchpoint Optimization', 'Conversion Prediction', 'Personalization', 'ROI Tracking'],
    pricing: '$49 - $249/month',
    category: 'Customer Analytics',
    popular: true,
    benefits: ['Better Understanding', 'Conversion Improvement', 'Personalization', 'ROI Optimization', 'Customer Retention'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-customer-journey',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Predictive Maintenance Platform',
    description: 'AI-powered predictive maintenance with IoT integration, failure prediction, and automated scheduling.',
    icon: Settings,
    features: ['Failure Prediction', 'IoT Integration', 'Automated Scheduling', 'Cost Optimization', 'Performance Monitoring', 'Alert System'],
    pricing: '$99 - $499/month',
    category: 'IoT Analytics',
    popular: true,
    benefits: ['Downtime Reduction', 'Cost Savings', 'Efficiency Improvement', 'Preventive Maintenance', 'ROI Enhancement'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/predictive-maintenance-platform',
    contact: '+1 302 464 0950'
  },

  // Advanced Security & Compliance
  {
    title: 'AI Threat Detection Platform',
    description: 'Advanced threat detection with machine learning, behavioral analysis, and automated response capabilities.',
    icon: Shield,
    features: ['ML Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Real-time Monitoring', 'Incident Management', 'Compliance'],
    pricing: '$149 - $749/month',
    category: 'Cybersecurity',
    popular: true,
    benefits: ['Enhanced Security', 'Threat Prevention', 'Automated Response', 'Compliance', 'Cost Efficiency'],
    marketPrice: '$250 - $1,200/month',
    link: 'https://ziontechgroup.com/ai-threat-detection',
    contact: '+1 302 464 0950'
  },
  {
    title: 'Zero Trust Security Platform',
    description: 'Comprehensive zero trust security implementation with identity verification, network segmentation, and continuous monitoring.',
    icon: Lock,
    features: ['Identity Verification', 'Network Segmentation', 'Continuous Monitoring', 'Access Control', 'Policy Enforcement', 'Analytics'],
    pricing: '$199 - $999/month',
    category: 'Zero Trust Security',
    popular: true,
    benefits: ['Enhanced Security', 'Risk Reduction', 'Compliance', 'Visibility', 'Automated Enforcement'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/zero-trust-security',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Compliance Monitoring',
    description: 'Automated compliance monitoring for GDPR, CCPA, HIPAA, and other regulations with AI-powered risk assessment.',
    icon: CheckCircle,
    features: ['Regulatory Compliance', 'AI Risk Assessment', 'Automated Monitoring', 'Policy Management', 'Audit Trails', 'Reporting'],
    pricing: '$99 - $499/month',
    category: 'Compliance AI',
    popular: true,
    benefits: ['Compliance Assurance', 'Risk Mitigation', 'Automated Monitoring', 'Cost Reduction', 'Audit Readiness'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-compliance-monitoring',
    contact: '+1 302 464 0950'
  },

  // Advanced E-commerce & Retail
  {
    title: 'AI-Powered Pricing Optimization',
    description: 'Dynamic pricing platform with AI-driven price optimization, competitor analysis, and revenue maximization.',
    icon: DollarSign,
    features: ['Dynamic Pricing', 'Competitor Analysis', 'Revenue Optimization', 'A/B Testing', 'Market Analysis', 'ROI Tracking'],
    pricing: '$79 - $399/month',
    category: 'E-commerce AI',
    popular: true,
    benefits: ['Revenue Optimization', 'Competitive Advantage', 'Automated Pricing', 'Market Intelligence', 'Profit Maximization'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-pricing-optimization',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Customer Service Platform',
    description: 'Comprehensive customer service automation with chatbots, ticket routing, and sentiment analysis.',
    icon: MessageSquare,
    features: ['AI Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Knowledge Base', 'Multi-channel Support', 'Analytics'],
    pricing: '$39 - $199/month',
    category: 'Customer Service AI',
    popular: true,
    benefits: ['24/7 Support', 'Cost Reduction', 'Better Experience', 'Scalability', 'Customer Satisfaction'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-customer-service',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Product Recommendation Engine',
    description: 'Advanced recommendation system with machine learning, behavioral analysis, and personalization.',
    icon: ShoppingCart,
    features: ['ML Recommendations', 'Behavioral Analysis', 'Personalization', 'A/B Testing', 'Real-time Updates', 'Analytics'],
    pricing: '$49 - $249/month',
    category: 'Recommendation AI',
    popular: true,
    benefits: ['Higher Conversion', 'Better Experience', 'Revenue Growth', 'Personalization', 'Customer Engagement'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-product-recommendations',
    contact: '+1 302 464 0950'
  },

  // Advanced Healthcare & Life Sciences
  {
    title: 'AI Medical Diagnosis Assistant',
    description: 'AI-powered medical diagnosis support with image analysis, symptom checking, and treatment recommendations.',
    icon: Heart,
    features: ['Medical Image Analysis', 'Symptom Analysis', 'Treatment Recommendations', 'Drug Interaction Check', 'Patient History', 'Compliance'],
    pricing: '$299 - $1,499/month',
    category: 'Healthcare AI',
    popular: true,
    benefits: ['Better Diagnosis', 'Faster Treatment', 'Cost Reduction', 'Improved Outcomes', 'Compliance'],
    marketPrice: '$500 - $2,000/month',
    link: 'https://ziontechgroup.com/ai-medical-diagnosis',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Drug Discovery Platform',
    description: 'AI-powered drug discovery platform with molecular analysis, compound screening, and clinical trial optimization.',
    icon: FlaskConical,
    features: ['Molecular Analysis', 'Compound Screening', 'Clinical Trial Optimization', 'Drug Interaction Analysis', 'Patent Research', 'Compliance'],
    pricing: '$999 - $4,999/month',
    category: 'Pharma AI',
    popular: true,
    benefits: ['Faster Discovery', 'Cost Reduction', 'Better Success Rate', 'Innovation', 'Competitive Advantage'],
    marketPrice: '$1,500 - $7,500/month',
    link: 'https://ziontechgroup.com/ai-drug-discovery',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Clinical Trial Management',
    description: 'Intelligent clinical trial management with patient recruitment, data collection, and regulatory compliance.',
    icon: ClipboardList,
    features: ['Patient Recruitment', 'Data Collection', 'Regulatory Compliance', 'Trial Optimization', 'Risk Management', 'Analytics'],
    pricing: '$199 - $999/month',
    category: 'Clinical AI',
    popular: true,
    benefits: ['Faster Trials', 'Cost Reduction', 'Better Compliance', 'Risk Mitigation', 'Success Rate'],
    marketPrice: '$300 - $1,500/month',
    link: 'https://ziontechgroup.com/ai-clinical-trials',
    contact: '+1 302 464 0950'
  },

  // Advanced Manufacturing & Industry 4.0
  {
    title: 'AI Quality Control System',
    description: 'Intelligent quality control with computer vision, defect detection, and automated quality assurance.',
    icon: CheckCircle,
    features: ['Computer Vision', 'Defect Detection', 'Quality Scoring', 'Automated Inspection', 'Real-time Monitoring', 'Analytics'],
    pricing: '$149 - $749/month',
    category: 'Manufacturing AI',
    popular: true,
    benefits: ['Quality Improvement', 'Cost Reduction', 'Automation', 'Consistency', 'Efficiency'],
    marketPrice: '$250 - $1,200/month',
    link: 'https://ziontechgroup.com/ai-quality-control',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Supply Chain Optimization',
    description: 'Intelligent supply chain management with demand forecasting, logistics optimization, and risk management.',
    icon: Truck,
    features: ['Demand Forecasting', 'Logistics Optimization', 'Risk Management', 'Supplier Analysis', 'Cost Optimization', 'Analytics'],
    pricing: '$99 - $499/month',
    category: 'Supply Chain AI',
    popular: true,
    benefits: ['Cost Reduction', 'Efficiency Improvement', 'Risk Mitigation', 'Better Planning', 'Competitive Edge'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-supply-chain-optimization',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Energy Management Platform',
    description: 'Intelligent energy management with consumption optimization, renewable integration, and cost reduction.',
    icon: Zap,
    features: ['Energy Optimization', 'Renewable Integration', 'Cost Analysis', 'Demand Response', 'Predictive Maintenance', 'Sustainability'],
    pricing: '$79 - $399/month',
    category: 'Energy AI',
    popular: true,
    benefits: ['Cost Reduction', 'Sustainability', 'Efficiency', 'Compliance', 'Environmental Impact'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-energy-management',
    contact: '+1 302 464 0950'
  },

  // Advanced Real Estate & Property
  {
    title: 'AI Property Management Platform',
    description: 'Intelligent property management with tenant screening, maintenance scheduling, and financial optimization.',
    icon: Home,
    features: ['Tenant Screening', 'Maintenance Scheduling', 'Financial Optimization', 'Market Analysis', 'Compliance', 'Analytics'],
    pricing: '$49 - $249/month',
    category: 'PropTech AI',
    popular: true,
    benefits: ['Efficiency Improvement', 'Cost Reduction', 'Better Tenants', 'Automated Operations', 'ROI Optimization'],
    marketPrice: '$80 - $400/month',
    link: 'https://ziontechgroup.com/ai-property-management',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Real Estate Investment Platform',
    description: 'AI-powered real estate investment analysis with market prediction, ROI calculation, and risk assessment.',
    icon: TrendingUp,
    features: ['Market Prediction', 'ROI Calculation', 'Risk Assessment', 'Investment Analysis', 'Portfolio Management', 'Market Intelligence'],
    pricing: '$99 - $499/month',
    category: 'Real Estate AI',
    popular: true,
    benefits: ['Better Investments', 'Risk Mitigation', 'Market Intelligence', 'ROI Optimization', 'Competitive Advantage'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-real-estate-investment',
    contact: '+1 302 464 0950'
  },

  // Advanced Agriculture & Environmental
  {
    title: 'AI Precision Agriculture Platform',
    description: 'Intelligent agriculture management with crop monitoring, yield prediction, and resource optimization.',
    icon: Sprout,
    features: ['Crop Monitoring', 'Yield Prediction', 'Resource Optimization', 'Weather Analysis', 'Pest Detection', 'Sustainability'],
    pricing: '$79 - $399/month',
    category: 'AgTech AI',
    popular: true,
    benefits: ['Yield Improvement', 'Resource Efficiency', 'Cost Reduction', 'Sustainability', 'Profitability'],
    marketPrice: '$120 - $600/month',
    link: 'https://ziontechgroup.com/ai-precision-agriculture',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Environmental Monitoring',
    description: 'Intelligent environmental monitoring with pollution detection, climate analysis, and sustainability tracking.',
    icon: TreePine,
    features: ['Pollution Detection', 'Climate Analysis', 'Air Quality Monitoring', 'Water Quality', 'Sustainability Tracking', 'Alert System'],
    pricing: '$59 - $299/month',
    category: 'Environmental AI',
    popular: true,
    benefits: ['Environmental Protection', 'Compliance', 'Early Warning', 'Data Insights', 'Sustainability'],
    marketPrice: '$100 - $500/month',
    link: 'https://ziontechgroup.com/ai-environmental-monitoring',
    contact: '+1 302 464 0950'
  },

  // Advanced Gaming & Entertainment
  {
    title: 'AI Game Development Platform',
    description: 'AI-powered game development tools with procedural generation, character AI, and automated testing.',
    icon: Gamepad2,
    features: ['Procedural Generation', 'Character AI', 'Automated Testing', 'Content Creation', 'Performance Optimization', 'Analytics'],
    pricing: '$99 - $499/month',
    category: 'Gaming AI',
    popular: true,
    benefits: ['Faster Development', 'Better Gameplay', 'Cost Efficiency', 'Innovation', 'Player Engagement'],
    marketPrice: '$150 - $800/month',
    link: 'https://ziontechgroup.com/ai-game-development',
    contact: '+1 302 464 0950'
  },
  {
    title: 'AI Content Moderation Platform',
    description: 'Intelligent content moderation with automated detection, classification, and policy enforcement.',
    icon: Eye,
    features: ['Automated Detection', 'Content Classification', 'Policy Enforcement', 'Real-time Moderation', 'Analytics', 'Compliance'],
    pricing: '$39 - $199/month',
    category: 'Content AI',
    popular: true,
    benefits: ['Automated Moderation', 'Cost Reduction', 'Consistency', 'Scalability', 'Compliance'],
    marketPrice: '$60 - $300/month',
    link: 'https://ziontechgroup.com/ai-content-moderation',
    contact: '+1 302 464 0950'
  }
];

export default function MicroSaaSPage() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group | 85+ Innovative Platforms</title>
        <meta name="description" content="Discover 85+ cutting-edge micro SaaS solutions from Zion Tech Group. AI-powered platforms, cloud services, and business automation tools starting at $19/month. Transform your business today!" />
        <meta name="keywords" content="micro SaaS, AI platforms, business automation, cloud solutions, productivity tools, enterprise software" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="85+ innovative micro SaaS platforms for modern businesses. AI-powered solutions with competitive pricing and expert support." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                Micro SaaS Solutions
                <span className="block text-blue-400">85+ Innovative Platforms</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive suite of micro SaaS solutions. From AI-powered automation to cloud infrastructure management, we provide everything you need to scale and succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Middletown, DE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from 85+ innovative micro SaaS platforms designed to solve real business challenges with competitive pricing and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        {product.popular && (
                          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                      
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {product.category}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.benefits.slice(0, 3).map((benefit, idx) => (
                            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-lg font-bold text-green-600">{product.pricing}</span>
                          <span className="text-sm text-gray-500 line-through">{product.marketPrice}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-4">You save up to 40% vs market price</p>
                        
                        <div className="flex gap-2">
                          <a
                            href={product.link}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Learn More
                          </a>
                          <a
                            href={`tel:${product.contact}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Call Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Competitive Pricing & Value
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS solutions offer exceptional value with transparent pricing and no hidden fees.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Cost Savings</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Up to 40% savings vs market rates</li>
                  <li>• No setup or hidden fees</li>
                  <li>• Transparent pricing</li>
                  <li>• Volume discounts available</li>
                  <li>• Free consultation included</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Quick Implementation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 24-48 hour setup</li>
                  <li>• Pre-built integrations</li>
                  <li>• Expert onboarding</li>
                  <li>• Training included</li>
                  <li>• 24/7 support</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Proven Results</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 10x productivity boost</li>
                  <li>• 30% cost reduction</li>
                  <li>• 95% customer satisfaction</li>
                  <li>• ROI within 30 days</li>
                </ul>
              </motion.div>
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get started with our micro SaaS solutions today and experience the power of innovative technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}