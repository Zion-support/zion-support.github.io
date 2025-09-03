import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Shield, Eye, Mic, TrendingUp, Database, FileText, Mail, Code, Cog, Search } from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const aiServices = [
    {
      icon: Brain,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service solutions that reduce response times by 80% and improve customer satisfaction.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (chat, email, phone)',
        'Human-in-the-loop escalation',
        'Knowledge base integration and mining',
        'Sentiment analysis and mood detection',
        '24/7 availability with instant responses'
      ],
      pricing: '$2,000 – $8,000 setup',
      perUnit: '$0.02 – $0.20 per session',
      timeline: '4–8 weeks',
      benefits: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 customer availability',
        'Improved customer satisfaction scores'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Revenue and churn prediction models',
        'Supply chain risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$4,000 – $20,000 project',
      perUnit: 'Custom pricing based on data volume',
      timeline: '6–12 weeks',
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: FileText,
      name: 'GenAI Content & SEO Automation',
      description: 'AI-powered content generation, SEO optimization, and editorial workflow automation for digital marketing.',
      features: [
        'High-quality content generation',
        'SEO optimization and keyword research',
        'Content clustering and internal linking',
        'Editorial calendar automation',
        'Brand voice consistency',
        'Performance tracking and optimization'
      ],
      pricing: '$1,000 – $6,000/month',
      perUnit: '$0.10 – $1.00 per article',
      timeline: '2–4 weeks',
      benefits: [
        '10x faster content production',
        '40% improvement in SEO rankings',
        'Consistent brand messaging',
        'Reduced content creation costs'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and visual content analysis.',
      features: [
        'Custom object detection and classification',
        'Facial recognition and biometric authentication',
        'OCR and document text extraction',
        'Real-time image processing',
        'Quality control and defect detection',
        'Visual search and recommendation'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.5% accuracy in object detection',
        'Automated quality control',
        'Enhanced security with biometrics',
        'Reduced manual inspection costs'
      ]
    },
    {
      icon: Database,
      name: 'Natural Language Processing Engine',
      description: 'Comprehensive NLP solutions for text analysis, sentiment detection, and language understanding.',
      features: [
        'Text analysis and sentiment detection',
        'Entity extraction and classification',
        'Language translation and localization',
        'Document summarization',
        'Intent recognition and classification',
        'Custom model training and fine-tuning'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per request',
      timeline: '4–8 weeks',
      benefits: [
        '90% accuracy in sentiment analysis',
        'Automated document processing',
        'Multi-language support',
        'Real-time text understanding'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud detection and risk assessment using advanced machine learning algorithms.',
      features: [
        'Real-time transaction fraud scoring',
        'Behavioral anomaly detection',
        'Machine learning model training',
        'Risk assessment and decision automation',
        'Pattern recognition and analysis',
        'Continuous learning and adaptation'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per transaction',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% fraud detection accuracy',
        'Real-time risk assessment',
        'Reduced false positives',
        'Compliance with regulations'
      ]
    },
    {
      icon: Mic,
      name: 'Voice AI & Speech Recognition',
      description: 'Advanced voice processing solutions including speech-to-text, voice synthesis, and conversational AI.',
      features: [
        'High-accuracy speech-to-text conversion',
        'Natural language understanding',
        'Voice biometric authentication',
        'Conversational AI and chatbots',
        'Multi-language voice support',
        'Real-time voice processing'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.02 – $0.20 per minute',
      timeline: '6–10 weeks',
      benefits: [
        '95% accuracy in speech recognition',
        'Hands-free operation',
        'Enhanced accessibility',
        'Improved user experience'
      ]
    },
    {
      icon: Zap,
      name: 'Recommendation Engine',
      description: 'Personalized recommendation systems that increase engagement and conversion rates.',
      features: [
        'Personalized product recommendations',
        'Content suggestion algorithms',
        'User behavior analysis',
        'A/B testing and optimization',
        'Real-time recommendation updates',
        'Multi-channel recommendation delivery'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per recommendation',
      timeline: '4–8 weeks',
      benefits: [
        '35% increase in conversion rates',
        'Improved user engagement',
        'Higher average order value',
        'Reduced bounce rates'
      ]
    },
    {
      icon: Brain,
      name: 'Autonomous AI Agents',
      description: 'Self-operating AI agents that can perform complex tasks and make decisions autonomously.',
      features: [
        'Multi-step task automation',
        'Decision-making capabilities',
        'Natural language interaction',
        'Tool and API integration',
        'Learning and adaptation',
        'Error handling and recovery'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per task',
      timeline: '8–16 weeks',
      benefits: [
        '90% reduction in manual tasks',
        '24/7 autonomous operation',
        'Improved task accuracy',
        'Scalable automation capabilities'
      ]
    },
    {
      icon: Eye,
      name: 'Advanced Computer Vision Analytics',
      description: 'Deep learning computer vision for complex visual analysis and real-time processing.',
      features: [
        'Object detection and tracking',
        'Facial recognition and analysis',
        'Scene understanding and classification',
        'Real-time video processing',
        'Custom model training',
        'Edge deployment optimization'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.8% accuracy in visual analysis',
        'Real-time processing capabilities',
        'Automated quality control',
        'Enhanced security monitoring'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Data Processing Pipeline',
      description: 'AI-powered data ingestion, cleaning, and transformation with automated quality assurance.',
      features: [
        'Automated data ingestion and validation',
        'Intelligent data cleaning and deduplication',
        'Schema detection and mapping',
        'Data quality scoring and monitoring',
        'Automated transformation rules',
        'Real-time data processing'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.001 – $0.01 per record',
      timeline: '4–8 weeks',
      benefits: [
        '95% reduction in data processing time',
        'Automated data quality assurance',
        'Improved data accuracy',
        'Reduced manual data handling'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Advanced Predictive Analytics',
      description: 'Sophisticated machine learning models for complex business forecasting and optimization.',
      features: [
        'Multi-variate time series forecasting',
        'Causal inference and impact analysis',
        'Scenario modeling and simulation',
        'Automated feature engineering',
        'Model ensemble and optimization',
        'Real-time prediction updates'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: 'Custom pricing based on complexity',
      timeline: '6–12 weeks',
      benefits: [
        '98% accuracy in predictions',
        'Automated forecasting processes',
        'Improved business planning',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Intelligence',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Behavioral anomaly detection',
        'Threat intelligence and correlation',
        'Automated incident response',
        'Zero-day attack detection',
        'Security orchestration and automation',
        'Continuous threat monitoring'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Automated security response',
        'Reduced false positives',
        'Enhanced security posture'
      ]
    },
    {
      icon: Mic,
      name: 'Conversational AI Platform',
      description: 'Advanced conversational AI with context awareness and multi-modal interaction.',
      features: [
        'Context-aware conversations',
        'Multi-modal interaction (voice, text, image)',
        'Emotion recognition and response',
        'Knowledge graph integration',
        'Multi-language support',
        'Conversation analytics and optimization'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.02 – $0.20 per interaction',
      timeline: '6–12 weeks',
      benefits: [
        '95% conversation success rate',
        'Natural human-like interactions',
        'Improved customer satisfaction',
        'Reduced support costs'
      ]
    },
    {
      icon: FileText,
      name: 'Intelligent Document Intelligence',
      description: 'Advanced document processing with understanding, extraction, and automated workflows.',
      features: [
        'Document understanding and classification',
        'Intelligent data extraction',
        'Document comparison and analysis',
        'Automated workflow routing',
        'Compliance checking and validation',
        'Multi-format document support'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per document',
      timeline: '4–8 weeks',
      benefits: [
        '98% accuracy in data extraction',
        'Automated document processing',
        'Improved compliance tracking',
        'Reduced manual document handling'
      ]
    },
    {
      icon: Search,
      name: 'Intelligent Search & Discovery Engine',
      description: 'AI-powered search with semantic understanding, personalization, and intelligent suggestions.',
      features: [
        'Semantic search and understanding',
        'Personalized search results',
        'Intelligent query suggestions',
        'Multi-modal search capabilities',
        'Search analytics and optimization',
        'Real-time search indexing'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per search',
      timeline: '4–8 weeks',
      benefits: [
        '90% improvement in search relevance',
        'Personalized user experience',
        'Increased content discovery',
        'Better user engagement'
      ]
    },
    {
      icon: Cog,
      name: 'AI-Powered Process Optimization',
      description: 'Intelligent process mining and optimization using AI to identify bottlenecks and improvements.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification and analysis',
        'Automated process optimization',
        'Performance prediction and simulation',
        'Resource allocation optimization',
        'Continuous process improvement'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.05 – $0.50 per process',
      timeline: '6–10 weeks',
      benefits: [
        '40% improvement in process efficiency',
        'Automated optimization recommendations',
        'Reduced operational costs',
        'Better resource utilization'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning and computer vision.',
      features: [
        'Medical image analysis and interpretation',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk assessment',
        'Drug interaction analysis',
        'Clinical decision support'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.50 – $5.00 per analysis',
      timeline: '12–24 weeks',
      benefits: [
        '95% accuracy in diagnostic assistance',
        'Reduced diagnostic errors',
        'Faster treatment decisions',
        'Improved patient outcomes'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly identification',
        'Automated incident response',
        'Threat intelligence correlation',
        'Zero-day attack detection',
        'Security orchestration and automation'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Automated security response',
        'Reduced false positives',
        'Enhanced security posture'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Smart Manufacturing Quality Control',
      description: 'AI-powered quality control and defect detection for manufacturing processes.',
      features: [
        'Real-time defect detection',
        'Quality prediction and optimization',
        'Process monitoring and control',
        'Predictive maintenance integration',
        'Supply chain quality tracking',
        'Automated quality reporting'
      ],
      pricing: '$8,000 – $50,000 setup',
      perUnit: '$0.01 – $0.10 per inspection',
      timeline: '6–12 weeks',
      benefits: [
        '99.8% defect detection accuracy',
        'Reduced quality control costs',
        'Improved product quality',
        'Automated quality processes'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Smart City Solutions',
      description: 'Intelligent urban management with traffic optimization, energy efficiency, and public safety.',
      features: [
        'Traffic flow optimization',
        'Energy consumption monitoring',
        'Public safety monitoring',
        'Environmental quality tracking',
        'Infrastructure maintenance prediction',
        'Citizen service optimization'
      ],
      pricing: '$20,000 – $200,000 setup',
      perUnit: 'Custom pricing based on city size',
      timeline: '12–24 weeks',
      benefits: [
        '30% reduction in traffic congestion',
        '25% improvement in energy efficiency',
        'Enhanced public safety',
        'Better citizen services'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Process Mining & Optimization',
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification and analysis',
        'Process optimization recommendations',
        'Compliance monitoring and reporting',
        'Resource utilization analysis',
        'Automated process improvement'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.001 – $0.01 per process instance',
      timeline: '6–12 weeks',
      benefits: [
        '40% improvement in process efficiency',
        'Automated process optimization',
        'Reduced operational costs',
        'Better compliance management'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Voice Analytics Platform',
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.',
      features: [
        'Voice emotion and sentiment analysis',
        'Call quality and performance metrics',
        'Customer satisfaction prediction',
        'Sales opportunity identification',
        'Agent performance optimization',
        'Real-time coaching recommendations'
      ],
      pricing: '$3,000 – $20,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '4–8 weeks',
      benefits: [
        '35% improvement in customer satisfaction',
        'Enhanced agent performance',
        'Automated quality monitoring',
        'Better sales conversion rates'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Drug Discovery Platform',
      description: 'Machine learning-driven drug discovery and development with molecular analysis.',
      features: [
        'Molecular structure analysis',
        'Drug-target interaction prediction',
        'Side effect prediction and analysis',
        'Clinical trial optimization',
        'Drug repurposing identification',
        'Biomarker discovery and validation'
      ],
      pricing: '$50,000 – $500,000 setup',
      perUnit: 'Custom pricing based on project scope',
      timeline: '24–52 weeks',
      benefits: [
        '50% faster drug discovery process',
        'Reduced development costs',
        'Improved success rates',
        'Better patient outcomes'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Agricultural Intelligence',
      description: 'Smart farming solutions with crop monitoring, yield prediction, and resource optimization.',
      features: [
        'Crop health monitoring and analysis',
        'Yield prediction and optimization',
        'Pest and disease detection',
        'Irrigation and fertilizer optimization',
        'Weather impact analysis',
        'Farm management automation'
      ],
      pricing: '$5,000 – $40,000 setup',
      perUnit: '$0.01 – $0.10 per acre',
      timeline: '6–12 weeks',
      benefits: [
        '25% increase in crop yields',
        '30% reduction in resource usage',
        'Improved crop quality',
        'Automated farm management'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Financial Risk Assessment',
      description: 'Advanced financial risk modeling and assessment using machine learning and big data.',
      features: [
        'Credit risk assessment and scoring',
        'Market risk analysis and prediction',
        'Operational risk identification',
        'Fraud detection and prevention',
        'Regulatory compliance monitoring',
        'Stress testing and scenario analysis'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.01 – $0.10 per assessment',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% accuracy in risk assessment',
        'Reduced financial losses',
        'Automated risk monitoring',
        'Better regulatory compliance'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Energy Trading Platform',
      description: 'Intelligent energy trading with price prediction, demand forecasting, and optimization.',
      features: [
        'Energy price prediction and analysis',
        'Demand forecasting and optimization',
        'Trading strategy optimization',
        'Risk management and hedging',
        'Market analysis and insights',
        'Automated trading execution'
      ],
      pricing: '$10,000 – $80,000 setup',
      perUnit: '0.1% – 1% of trading volume',
      timeline: '8–16 weeks',
      benefits: [
        '20% improvement in trading performance',
        'Reduced energy costs',
        'Automated trading strategies',
        'Better risk management'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Legal Document Analysis',
      description: 'Intelligent legal document review and analysis with contract insights and risk assessment.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document classification',
        'Compliance checking and monitoring',
        'Case law research and analysis',
        'Document summarization and insights',
        'Legal precedent identification'
      ],
      pricing: '$5,000 – $40,000 setup',
      perUnit: '$0.10 – $1.00 per document',
      timeline: '6–12 weeks',
      benefits: [
        '80% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance checking',
        'Better risk identification'
      ]
    },
    {
      icon: Zap,
      name: 'AI-Powered Email Intelligence Platform',
      description: 'Advanced email analysis with sentiment detection, intent recognition, and automated response generation.',
      features: [
        'Email sentiment and tone analysis',
        'Intent recognition and classification',
        'Automated response generation',
        'Email prioritization and routing',
        'Spam and phishing detection',
        'Email productivity analytics'
      ],
      pricing: '$2,000 – $12,000 setup',
      perUnit: '$0.001 – $0.01 per email',
      timeline: '3–6 weeks',
      benefits: [
        '90% accuracy in email classification',
        'Automated email management',
        'Improved response times',
        'Enhanced email security'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Retail Analytics Platform',
      description: 'Intelligent retail analytics with customer behavior analysis, inventory optimization, and sales forecasting.',
      features: [
        'Customer behavior pattern analysis',
        'Inventory optimization and forecasting',
        'Sales trend prediction',
        'Price optimization recommendations',
        'Customer segmentation and targeting',
        'Real-time retail analytics dashboard'
      ],
      pricing: '$4,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per transaction',
      timeline: '4–8 weeks',
      benefits: [
        '25% increase in sales revenue',
        '30% reduction in inventory costs',
        'Improved customer targeting',
        'Data-driven retail decisions'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Content Moderation System',
      description: 'Intelligent content moderation with automated detection of inappropriate content across multiple platforms.',
      features: [
        'Automated content classification',
        'Inappropriate content detection',
        'Multi-language content analysis',
        'Real-time moderation decisions',
        'Context-aware content understanding',
        'Custom moderation rule creation'
      ],
      pricing: '$3,000 – $18,000 setup',
      perUnit: '$0.001 – $0.01 per content piece',
      timeline: '3–6 weeks',
      benefits: [
        '99.5% accuracy in content moderation',
        'Automated content filtering',
        'Reduced manual moderation costs',
        'Improved platform safety'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Identity Verification System',
      description: 'Advanced identity verification with document authentication, biometric matching, and fraud prevention.',
      features: [
        'Document authentication and verification',
        'Biometric identity matching',
        'Liveness detection and anti-spoofing',
        'Fraud detection and prevention',
        'KYC/AML compliance automation',
        'Multi-factor authentication integration'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.10 – $2.00 per verification',
      timeline: '4–8 weeks',
      benefits: [
        '99.9% verification accuracy',
        'Reduced identity fraud',
        'Automated compliance processes',
        'Improved user onboarding'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Investment Portfolio Optimizer',
      description: 'Intelligent portfolio management with risk assessment, return optimization, and automated rebalancing.',
      features: [
        'Portfolio risk assessment and optimization',
        'Return prediction and optimization',
        'Automated rebalancing strategies',
        'Market trend analysis and prediction',
        'Diversification recommendations',
        'Performance tracking and analytics'
      ],
      pricing: '$8,000 – $50,000 setup',
      perUnit: '0.1% – 1% of assets under management',
      timeline: '6–12 weeks',
      benefits: [
        '20% improvement in portfolio returns',
        'Reduced investment risk',
        'Automated portfolio management',
        'Better investment decisions'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Meeting Intelligence Platform',
      description: 'Intelligent meeting analysis with transcription, action item extraction, and productivity insights.',
      features: [
        'Real-time meeting transcription',
        'Action item and decision extraction',
        'Meeting sentiment and engagement analysis',
        'Follow-up task automation',
        'Meeting productivity analytics',
        'Integration with calendar and task systems'
      ],
      pricing: '$2,000 – $15,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '3–6 weeks',
      benefits: [
        '80% reduction in meeting follow-up time',
        'Improved meeting productivity',
        'Automated action item tracking',
        'Better meeting insights'
      ]
    },
    {
      icon: Database,
      name: 'AI-Powered Data Quality Assurance Platform',
      description: 'Intelligent data quality monitoring with automated cleaning, validation, and enrichment.',
      features: [
        'Automated data quality assessment',
        'Data cleaning and standardization',
        'Duplicate detection and removal',
        'Data validation and verification',
        'Data enrichment and enhancement',
        'Real-time data quality monitoring'
      ],
      pricing: '$4,000 – $25,000 setup',
      perUnit: '$0.001 – $0.01 per record',
      timeline: '4–8 weeks',
      benefits: [
        '95% improvement in data quality',
        'Automated data cleaning processes',
        'Reduced data errors',
        'Better business insights'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Social Media Intelligence',
      description: 'Advanced social media analysis with sentiment tracking, trend prediction, and brand monitoring.',
      features: [
        'Social media sentiment analysis',
        'Trend prediction and analysis',
        'Brand mention monitoring',
        'Influencer identification and analysis',
        'Crisis detection and alerting',
        'Competitive social media analysis'
      ],
      pricing: '$3,000 – $20,000 setup',
      perUnit: '$0.001 – $0.01 per post',
      timeline: '3–6 weeks',
      benefits: [
        '90% accuracy in sentiment analysis',
        'Proactive brand monitoring',
        'Improved social media strategy',
        'Better crisis management'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Customer Journey Analytics',
      description: 'Intelligent customer journey mapping with behavior analysis, touchpoint optimization, and conversion prediction.',
      features: [
        'Customer journey mapping and analysis',
        'Behavior pattern identification',
        'Touchpoint optimization recommendations',
        'Conversion prediction and optimization',
        'Customer lifetime value prediction',
        'Personalized journey recommendations'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.01 – $0.10 per customer interaction',
      timeline: '4–8 weeks',
      benefits: [
        '35% improvement in conversion rates',
        'Better customer understanding',
        'Optimized customer touchpoints',
        'Increased customer lifetime value'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Compliance Monitoring System',
      description: 'Intelligent compliance monitoring with automated risk assessment and regulatory reporting.',
      features: [
        'Automated compliance risk assessment',
        'Regulatory change monitoring',
        'Compliance gap analysis',
        'Automated compliance reporting',
        'Policy violation detection',
        'Audit trail and documentation'
      ],
      pricing: '$6,000 – $40,000 setup',
      perUnit: '$0.01 – $0.10 per compliance check',
      timeline: '6–12 weeks',
      benefits: [
        '95% reduction in compliance violations',
        'Automated compliance monitoring',
        'Reduced compliance costs',
        'Better regulatory adherence'
      ]
    },
    {
      icon: Zap,
      name: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting, route optimization, and risk mitigation.',
      features: [
        'Demand forecasting and planning',
        'Supply chain route optimization',
        'Risk assessment and mitigation',
        'Supplier performance monitoring',
        'Inventory optimization',
        'Cost reduction recommendations'
      ],
      pricing: '$8,000 – $50,000 setup',
      perUnit: '$0.01 – $0.10 per transaction',
      timeline: '6–12 weeks',
      benefits: [
        '30% reduction in supply chain costs',
        'Improved supply chain efficiency',
        'Better risk management',
        'Optimized inventory levels'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Revenue Optimization Engine',
      description: 'Intelligent revenue optimization with pricing strategies, upselling recommendations, and churn prediction.',
      features: [
        'Dynamic pricing optimization',
        'Upselling and cross-selling recommendations',
        'Customer churn prediction',
        'Revenue forecasting and planning',
        'Customer segmentation for pricing',
        'A/B testing for revenue strategies'
      ],
      pricing: '$5,000 – $35,000 setup',
      perUnit: '1% – 5% of revenue increase',
      timeline: '4–8 weeks',
      benefits: [
        '25% increase in revenue',
        'Improved pricing strategies',
        'Reduced customer churn',
        'Better revenue predictability'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Environmental Monitoring System',
      description: 'Intelligent environmental monitoring with pollution detection, climate analysis, and sustainability tracking.',
      features: [
        'Air and water quality monitoring',
        'Pollution source identification',
        'Climate change impact analysis',
        'Sustainability metrics tracking',
        'Environmental risk assessment',
        'Compliance monitoring and reporting'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.01 – $0.10 per monitoring point',
      timeline: '6–12 weeks',
      benefits: [
        'Real-time environmental monitoring',
        'Proactive pollution prevention',
        'Improved sustainability metrics',
        'Better environmental compliance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI Services — Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, computer vision, NLP, and automation solutions. Transform your business with cutting-edge AI technology." />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          AI Services & Solutions
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Transform your business with cutting-edge AI technology. From machine learning to computer vision, 
          we deliver intelligent solutions that drive real results and measurable ROI.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Quote</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-slate-900/60 p-8 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                  <p className="text-slate-300 text-lg">{service.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Business Benefits</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Pricing:</span>
                    <span className="font-semibold text-blue-400">{service.pricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Per Unit:</span>
                    <span className="font-semibold text-purple-400">{service.perUnit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="font-semibold text-green-400">{service.timeline}</span>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <Link href="/contact" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
                      Request Quote
                    </Link>
                    <Link href="/contact" className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our AI experts are ready to help you implement cutting-edge solutions that drive real business value. 
            Contact us today for a free consultation and custom AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
              Call {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
              Email {contact.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}