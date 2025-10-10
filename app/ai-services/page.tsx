'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  Eye, 
  Zap, 
  BarChart, 
  Box, 
  Mic, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Cpu,
  Link,
  Server
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Real-time learning'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      icon: Brain
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring algorithms',
        'Anomaly detection',
        'Automated alert systems'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time protection',
        'False positive reduction',
        'Compliance ready'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Machine learning-powered maintenance scheduling to prevent equipment failures and optimize uptime',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'IoT sensor integration',
        'Failure prediction models',
        'Maintenance scheduling optimization',
        'Cost reduction analysis',
        'Real-time monitoring'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Extend equipment life',
        'Optimize maintenance costs',
        'Prevent catastrophic failures'
      ],
      category: 'Industrial AI',
      popular: false,
      icon: Settings
    },
    {
      id: 'ai-personalization',
      name: 'AI Personalization Engine',
      description: 'Advanced recommendation systems and personalization algorithms for enhanced customer experience',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time recommendations',
        'Customer segmentation',
        'Behavioral analysis',
        'A/B testing automation',
        'Cross-platform personalization'
      ],
      benefits: [
        'Increase conversions by 40%',
        'Improve customer engagement',
        'Higher customer lifetime value',
        'Automated optimization'
      ],
      category: 'Marketing',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and inventory optimization',
      price: '$1,599/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier risk assessment',
        'Cost optimization'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Improve delivery times',
        'Minimize stockouts',
        'Optimize supplier relationships'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance using advanced computer vision and machine learning',
      price: '$2,999/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Patient risk assessment',
        'Treatment recommendations',
        'HIPAA compliance'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Reduce diagnostic time',
        'Early disease detection',
        'Better patient outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart
    },
    {
      id: 'ai-financial-modeling',
      name: 'AI Financial Modeling',
      description: 'Advanced financial analysis and modeling using machine learning for investment decisions',
      price: '$899/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Portfolio optimization',
        'Risk assessment',
        'Market prediction',
        'Algorithmic trading',
        'Compliance monitoring'
      ],
      benefits: [
        'Improve investment returns',
        'Reduce financial risk',
        'Automated trading strategies',
        'Real-time market analysis'
      ],
      category: 'Finance',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-nlp-processing',
      name: 'AI Natural Language Processing',
      description: 'Advanced text analysis, sentiment analysis, and language understanding for business applications',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Text classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Document summarization'
      ],
      benefits: [
        'Automate text processing',
        'Extract business insights',
        'Improve customer understanding',
        'Multi-language support'
      ],
      category: 'Language Processing',
      popular: false,
      icon: FileText
    },
    {
      id: 'ai-robotic-process',
      name: 'AI Robotic Process Automation',
      description: 'Intelligent automation of repetitive tasks with AI-powered decision making and learning capabilities',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Process automation',
        'Intelligent decision making',
        'Exception handling',
        'Process optimization',
        'Integration capabilities'
      ],
      benefits: [
        'Reduce manual work by 90%',
        'Improve accuracy',
        '24/7 operation',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Cpu
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      description: 'Advanced customer analytics and behavioral insights to improve customer experience and retention',
      price: '$699/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Customer journey mapping',
        'Behavioral analysis',
        'Churn prediction',
        'Lifetime value calculation',
        'Segmentation analysis'
      ],
      benefits: [
        'Improve customer retention',
        'Increase customer lifetime value',
        'Predict customer behavior',
        'Optimize marketing campaigns'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-quality-assurance',
      name: 'AI Quality Assurance',
      description: 'Automated testing and quality assurance using AI to improve software reliability and performance',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Automated test generation',
        'Performance testing',
        'Bug detection',
        'Code quality analysis',
        'Regression testing'
      ],
      benefits: [
        'Reduce testing time by 80%',
        'Improve software quality',
        'Automated test maintenance',
        'Faster release cycles'
      ],
      category: 'Software Testing',
      popular: false,
      icon: CheckCircle
    },
    {
      id: 'ai-energy-optimization',
      name: 'AI Energy Optimization',
      description: 'Smart energy management and optimization using AI to reduce costs and improve efficiency',
      price: '$1,199/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Energy consumption analysis',
        'Predictive energy modeling',
        'Smart grid optimization',
        'Renewable energy integration',
        'Cost optimization'
      ],
      benefits: [
        'Reduce energy costs by 25%',
        'Improve energy efficiency',
        'Optimize renewable usage',
        'Environmental sustainability'
      ],
      category: 'Energy',
      popular: false,
      icon: Zap
    },
    {
      id: 'ai-hr-analytics',
      name: 'AI HR Analytics',
      description: 'Human resources analytics and workforce optimization using AI and machine learning',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Employee performance analysis',
        'Talent acquisition optimization',
        'Retention prediction',
        'Workforce planning',
        'Skills gap analysis'
      ],
      benefits: [
        'Improve hiring decisions',
        'Reduce employee turnover',
        'Optimize workforce planning',
        'Enhance employee satisfaction'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users
    },
    {
      id: 'ai-blockchain-analytics',
      name: 'AI Blockchain Analytics',
      description: 'Advanced blockchain data analysis and cryptocurrency market insights using AI',
      price: '$1,499/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Blockchain transaction analysis',
        'Cryptocurrency market prediction',
        'Smart contract auditing',
        'DeFi protocol analysis',
        'Risk assessment'
      ],
      benefits: [
        'Better investment decisions',
        'Risk mitigation',
        'Market opportunity identification',
        'Compliance monitoring'
      ],
      category: 'Blockchain',
      popular: false,
      icon: Link
    },
    {
      id: 'ai-edge-computing',
      name: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency',
      price: '$1,799/month',
      marketPrice: '$3500-12000/month',
      features: [
        'Edge model deployment',
        'Real-time processing',
        'Low latency inference',
        'Offline capabilities',
        'Distributed computing'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Improve response times',
        'Enable offline AI',
        'Reduce bandwidth costs'
      ],
      category: 'Edge Computing',
      popular: false,
      icon: Server
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Content Generation',
      description: 'Advanced AI for creating 3D models, animations, and virtual environments',
      price: '$2,499/month',
      marketPrice: '$5000-20000/month',
      features: [
        '3D model generation from text prompts',
        'Automated animation creation',
        'Virtual environment design',
        'Real-time 3D rendering',
        'AR/VR content generation',
        '3D asset optimization',
        'Integration with game engines',
        'Custom 3D pipeline automation'
      ],
      benefits: [
        'Reduce 3D creation time by 80%',
        'Lower production costs',
        'Faster prototyping',
        'Scalable 3D content production'
      ],
      category: '3D Generation',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing Solutions',
      description: 'Quantum-enhanced AI algorithms for complex optimization and machine learning',
      price: '$4,999/month',
      marketPrice: '$10000-50000/month',
      features: [
        'Quantum machine learning algorithms',
        'Quantum optimization for complex problems',
        'Quantum neural networks',
        'Quantum data processing',
        'Hybrid classical-quantum AI',
        'Quantum simulation capabilities',
        'Advanced cryptography',
        'Research and development support'
      ],
      benefits: [
        'Exponential computational speedup',
        'Solve previously intractable problems',
        'Advanced optimization capabilities',
        'Future-proof technology investment'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      description: 'Self-operating AI systems for robotics, vehicles, and industrial automation',
      price: '$3,999/month',
      marketPrice: '$8000-30000/month',
      features: [
        'Autonomous vehicle AI',
        'Industrial robot control',
        'Drone navigation systems',
        'Smart city automation',
        'Predictive maintenance AI',
        'Real-time decision making',
        'Safety and compliance monitoring',
        'Human-robot collaboration'
      ],
      benefits: [
        'Reduce operational costs by 60%',
        'Improve safety and reliability',
        '24/7 autonomous operation',
        'Scalable automation solutions'
      ],
      category: 'Autonomous Systems',
      popular: false,
      icon: Settings
    },
    {
      id: 'ai-blockchain-integration',
      name: 'AI Blockchain Integration',
      description: 'AI-powered blockchain solutions for smart contracts, DeFi, and Web3 applications',
      price: '$2,999/month',
      marketPrice: '$6000-25000/month',
      features: [
        'Smart contract AI optimization',
        'DeFi protocol analysis',
        'NFT generation and management',
        'Blockchain data analytics',
        'Cryptocurrency trading AI',
        'Decentralized AI networks',
        'Token economics optimization',
        'Cross-chain AI solutions'
      ],
      benefits: [
        'Optimize blockchain performance',
        'Automated DeFi strategies',
        'Enhanced security and transparency',
        'Innovative Web3 applications'
      ],
      category: 'Blockchain AI',
      popular: false,
      icon: Link
    },
    {
      id: 'ai-5g-optimization',
      name: 'AI 5G Network Optimization',
      description: 'AI-powered 5G network management and optimization for maximum performance',
      price: '$3,499/month',
      marketPrice: '$7000-25000/month',
      features: [
        '5G network performance optimization',
        'Intelligent traffic management',
        'Predictive network maintenance',
        'Edge computing optimization',
        'IoT device management',
        'Network slicing automation',
        'Real-time quality monitoring',
        'Energy efficiency optimization'
      ],
      benefits: [
        'Improve network performance by 40%',
        'Reduce operational costs',
        'Enhanced user experience',
        'Scalable 5G infrastructure'
      ],
      category: '5G Technology',
      popular: false,
      icon: Zap
    },
    {
      id: 'ai-holographic-workspace',
      name: 'AI Holographic Workspace',
      description: 'Immersive AI-powered holographic environments for collaboration and visualization',
      price: '$4,499/month',
      marketPrice: '$9000-35000/month',
      features: [
        'Holographic meeting rooms',
        '3D data visualization',
        'Immersive training environments',
        'Virtual prototyping',
        'Spatial computing AI',
        'Gesture recognition',
        'Eye tracking and interaction',
        'Multi-user collaboration'
      ],
      benefits: [
        'Revolutionary collaboration experience',
        'Enhanced data visualization',
        'Immersive training and education',
        'Next-generation workspace solutions'
      ],
      category: 'Holographic Technology',
      popular: false,
      icon: Monitor
    },
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions',
      description: 'AI-powered environmental monitoring and climate change mitigation technologies',
      price: '$2,799/month',
      marketPrice: '$5500-20000/month',
      features: [
        'Climate data analysis and prediction',
        'Carbon footprint optimization',
        'Renewable energy management',
        'Environmental monitoring',
        'Sustainable supply chain optimization',
        'Green technology integration',
        'Climate risk assessment',
        'ESG reporting automation'
      ],
      benefits: [
        'Reduce environmental impact',
        'Optimize energy consumption',
        'Compliance with sustainability goals',
        'Data-driven climate action'
      ],
      category: 'Climate Technology',
      popular: false,
      icon: Globe
    },
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'Advanced AI for pharmaceutical research, drug discovery, and development',
      price: '$5,999/month',
      marketPrice: '$12000-50000/month',
      features: [
        'Molecular design and optimization',
        'Drug-target interaction prediction',
        'Clinical trial optimization',
        'Side effect prediction',
        'Drug repurposing analysis',
        'Biomarker discovery',
        'Personalized medicine development',
        'Regulatory compliance support'
      ],
      benefits: [
        'Accelerate drug development by 70%',
        'Reduce research costs significantly',
        'Improve success rates',
        'Enable personalized treatments'
      ],
      category: 'Pharmaceutical AI',
      popular: false,
      icon: Heart
    },
    {
      id: 'ai-agricultural-intelligence',
      name: 'AI Agricultural Intelligence',
      description: 'Smart farming solutions with AI-powered crop monitoring and optimization',
      price: '$1,999/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Crop health monitoring',
        'Yield prediction and optimization',
        'Precision agriculture automation',
        'Weather and soil analysis',
        'Pest and disease detection',
        'Irrigation optimization',
        'Livestock monitoring',
        'Supply chain optimization'
      ],
      benefits: [
        'Increase crop yields by 30%',
        'Reduce resource usage',
        'Improve food quality',
        'Sustainable farming practices'
      ],
      category: 'Agricultural AI',
      popular: false,
      icon: Globe
    },
    {
      id: 'ai-energy-grid-management',
      name: 'AI Energy Grid Management',
      description: 'Intelligent energy grid optimization and smart power distribution systems',
      price: '$3,799/month',
      marketPrice: '$7500-30000/month',
      features: [
        'Smart grid optimization',
        'Renewable energy integration',
        'Demand response management',
        'Grid stability monitoring',
        'Energy storage optimization',
        'Predictive maintenance',
        'Load balancing algorithms',
        'Real-time energy trading'
      ],
      benefits: [
        'Improve grid efficiency by 25%',
        'Reduce energy waste',
        'Better renewable integration',
        'Enhanced grid reliability'
      ],
      category: 'Energy Management',
      popular: false,
      icon: Zap
    },
    {
      id: 'ai-financial-crime-detection',
      name: 'AI Financial Crime Detection',
      description: 'Advanced AI for detecting money laundering, fraud, and financial crimes',
      price: '$2,299/month',
      marketPrice: '$4500-18000/month',
      features: [
        'Money laundering detection',
        'Transaction pattern analysis',
        'Suspicious activity monitoring',
        'Regulatory compliance automation',
        'Risk scoring algorithms',
        'Real-time alert systems',
        'Cross-border transaction analysis',
        'AML/KYC automation'
      ],
      benefits: [
        'Reduce false positives by 60%',
        'Improve detection accuracy',
        'Automated compliance reporting',
        'Enhanced financial security'
      ],
      category: 'Financial Security',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-accounting-automation',
      name: 'AI Accounting Automation',
      description: 'Intelligent accounting and financial management with automated processing',
      price: '$899/month',
      marketPrice: '$1800-6000/month',
      features: [
        'Automated bookkeeping',
        'Invoice processing and matching',
        'Expense categorization',
        'Financial reporting automation',
        'Tax preparation assistance',
        'Audit trail generation',
        'Compliance monitoring',
        'Real-time financial insights'
      ],
      benefits: [
        'Reduce accounting time by 80%',
        'Improve accuracy and consistency',
        'Automated compliance',
        'Real-time financial visibility'
      ],
      category: 'Accounting AI',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-fashion-design',
      name: 'AI Fashion Design Platform',
      description: 'AI-powered fashion design, trend analysis, and virtual try-on solutions',
      price: '$1,599/month',
      marketPrice: '$3200-12000/month',
      features: [
        'AI fashion design generation',
        'Trend analysis and forecasting',
        'Virtual try-on technology',
        'Size recommendation algorithms',
        'Fabric optimization',
        'Sustainable fashion analysis',
        'Personalized styling',
        'Supply chain optimization'
      ],
      benefits: [
        'Accelerate design process by 50%',
        'Reduce waste and costs',
        'Personalized customer experience',
        'Data-driven fashion decisions'
      ],
      category: 'Fashion AI',
      popular: false,
      icon: Target
    },
    {
      id: 'ai-fitness-coaching',
      name: 'AI Fitness Coaching Platform',
      description: 'Personalized AI fitness coaching with real-time monitoring and optimization',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Personalized workout plans',
        'Real-time form analysis',
        'Nutrition optimization',
        'Progress tracking and analytics',
        'Injury prevention algorithms',
        'Wearable device integration',
        'Virtual personal training',
        'Community and social features'
      ],
      benefits: [
        'Improve fitness outcomes by 40%',
        'Personalized training programs',
        'Real-time feedback and guidance',
        'Scalable fitness solutions'
      ],
      category: 'Fitness AI',
      popular: true,
      icon: Heart
    },
    {
      id: 'ai-investment-optimization',
      name: 'AI Investment Optimization',
      description: 'Advanced AI for portfolio management, risk assessment, and investment strategies',
      price: '$1,799/month',
      marketPrice: '$3600-15000/month',
      features: [
        'Portfolio optimization algorithms',
        'Risk assessment and management',
        'Market prediction models',
        'Alternative investment analysis',
        'ESG scoring and integration',
        'Real-time trading signals',
        'Tax optimization strategies',
        'Performance attribution analysis'
      ],
      benefits: [
        'Improve investment returns by 25%',
        'Reduce portfolio risk',
        'Automated investment management',
        'Data-driven investment decisions'
      ],
      category: 'Investment AI',
      popular: false,
      icon: TrendingUp
    },
    {
      id: 'ai-invoice-automation',
      name: 'AI Invoice Automation Suite',
      description: 'Intelligent invoice processing, approval workflows, and payment automation',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Automated invoice processing',
        'Smart approval workflows',
        'Payment automation',
        'Vendor management',
        'Expense categorization',
        'Compliance checking',
        'Real-time reporting',
        'Integration with accounting systems'
      ],
      benefits: [
        'Reduce invoice processing time by 90%',
        'Eliminate manual data entry',
        'Improve accuracy and compliance',
        'Streamlined financial operations'
      ],
      category: 'Invoice Automation',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation Engine',
      description: 'Intelligent lead identification, qualification, and nurturing automation',
      price: '$799/month',
      marketPrice: '$1600-5000/month',
      features: [
        'AI-powered lead scoring',
        'Multi-channel lead capture',
        'Automated lead nurturing',
        'Intent detection and analysis',
        'Lead enrichment and verification',
        'CRM integration and automation',
        'Performance analytics',
        'Custom lead qualification rules'
      ],
      benefits: [
        'Increase qualified leads by 200%',
        'Reduce lead acquisition costs',
        'Automated lead nurturing',
        'Higher conversion rates'
      ],
      category: 'Lead Generation',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-inventory-optimization',
      name: 'AI Inventory Optimization',
      description: 'Smart inventory management with demand forecasting and automated reordering',
      price: '$1,299/month',
      marketPrice: '$2600-8000/month',
      features: [
        'AI demand forecasting',
        'Automated reorder optimization',
        'Multi-location inventory sync',
        'Supplier performance analysis',
        'Cost optimization algorithms',
        'Seasonal trend analysis',
        'Integration with e-commerce platforms',
        'Real-time inventory tracking'
      ],
      benefits: [
        'Reduce inventory costs by 35%',
        'Prevent stockouts and overstock',
        'Optimize supplier relationships',
        'Automated inventory management'
      ],
      category: 'Inventory AI',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-hr-analytics',
      name: 'AI HR Analytics Platform',
      description: 'Advanced human resources analytics and workforce optimization solutions',
      price: '$1,199/month',
      marketPrice: '$2400-8000/month',
      features: [
        'Employee performance analytics',
        'Talent acquisition optimization',
        'Retention prediction models',
        'Workforce planning algorithms',
        'Skills gap analysis',
        'Employee engagement tracking',
        'Diversity and inclusion metrics',
        'Predictive HR insights'
      ],
      benefits: [
        'Improve hiring decisions by 45%',
        'Reduce employee turnover',
        'Optimize workforce planning',
        'Data-driven HR strategies'
      ],
      category: 'HR Analytics',
      popular: false,
      icon: Users
    },
    {
      id: 'ai-insurance-optimization',
      name: 'AI Insurance Optimization',
      description: 'Intelligent insurance underwriting, claims processing, and risk assessment',
      price: '$2,199/month',
      marketPrice: '$4400-15000/month',
      features: [
        'Automated underwriting',
        'Claims processing AI',
        'Risk assessment algorithms',
        'Fraud detection and prevention',
        'Customer segmentation',
        'Pricing optimization',
        'Policy recommendation engine',
        'Regulatory compliance automation'
      ],
      benefits: [
        'Reduce processing time by 70%',
        'Improve risk assessment accuracy',
        'Lower fraud losses',
        'Enhanced customer experience'
      ],
      category: 'Insurance AI',
      popular: false,
      icon: Shield
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Customer Service', name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { id: 'Content', name: 'Content', count: services.filter(s => s.category === 'Content').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: services.filter(s => s.category === 'Computer Vision').length },
    { id: 'Voice AI', name: 'Voice AI', count: services.filter(s => s.category === 'Voice AI').length },
    { id: 'Automation', name: 'Automation', count: services.filter(s => s.category === 'Automation').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Industrial AI', name: 'Industrial AI', count: services.filter(s => s.category === 'Industrial AI').length },
    { id: 'Marketing', name: 'Marketing', count: services.filter(s => s.category === 'Marketing').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: services.filter(s => s.category === 'Supply Chain').length },
    { id: 'Healthcare', name: 'Healthcare', count: services.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length },
    { id: 'Language Processing', name: 'Language Processing', count: services.filter(s => s.category === 'Language Processing').length },
    { id: 'Customer Analytics', name: 'Customer Analytics', count: services.filter(s => s.category === 'Customer Analytics').length },
    { id: 'Software Testing', name: 'Software Testing', count: services.filter(s => s.category === 'Software Testing').length },
    { id: 'Energy', name: 'Energy', count: services.filter(s => s.category === 'Energy').length },
    { id: 'Human Resources', name: 'Human Resources', count: services.filter(s => s.category === 'Human Resources').length },
    { id: 'Blockchain', name: 'Blockchain', count: services.filter(s => s.category === 'Blockchain').length },
    { id: 'Edge Computing', name: 'Edge Computing', count: services.filter(s => s.category === 'Edge Computing').length },
    { id: '3D Generation', name: '3D Generation', count: services.filter(s => s.category === '3D Generation').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: services.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: services.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'Blockchain AI', name: 'Blockchain AI', count: services.filter(s => s.category === 'Blockchain AI').length },
    { id: '5G Technology', name: '5G Technology', count: services.filter(s => s.category === '5G Technology').length },
    { id: 'Holographic Technology', name: 'Holographic Technology', count: services.filter(s => s.category === 'Holographic Technology').length },
    { id: 'Climate Technology', name: 'Climate Technology', count: services.filter(s => s.category === 'Climate Technology').length },
    { id: 'Pharmaceutical AI', name: 'Pharmaceutical AI', count: services.filter(s => s.category === 'Pharmaceutical AI').length },
    { id: 'Agricultural AI', name: 'Agricultural AI', count: services.filter(s => s.category === 'Agricultural AI').length },
    { id: 'Energy Management', name: 'Energy Management', count: services.filter(s => s.category === 'Energy Management').length },
    { id: 'Financial Security', name: 'Financial Security', count: services.filter(s => s.category === 'Financial Security').length },
    { id: 'Accounting AI', name: 'Accounting AI', count: services.filter(s => s.category === 'Accounting AI').length },
    { id: 'Fashion AI', name: 'Fashion AI', count: services.filter(s => s.category === 'Fashion AI').length },
    { id: 'Fitness AI', name: 'Fitness AI', count: services.filter(s => s.category === 'Fitness AI').length },
    { id: 'Investment AI', name: 'Investment AI', count: services.filter(s => s.category === 'Investment AI').length },
    { id: 'Invoice Automation', name: 'Invoice Automation', count: services.filter(s => s.category === 'Invoice Automation').length },
    { id: 'Lead Generation', name: 'Lead Generation', count: services.filter(s => s.category === 'Lead Generation').length },
    { id: 'Inventory AI', name: 'Inventory AI', count: services.filter(s => s.category === 'Inventory AI').length },
    { id: 'HR Analytics', name: 'HR Analytics', count: services.filter(s => s.category === 'HR Analytics').length },
    { id: 'Insurance AI', name: 'Insurance AI', count: services.filter(s => s.category === 'Insurance AI').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, analytics, computer vision, and workflow automation." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations. 
                From chatbots to computer vision, we have the AI expertise you need.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    {service.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our AI experts help you choose the right solutions for your business needs. 
                  Get a free consultation and see how AI can transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
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

export default AiServicesPage;
