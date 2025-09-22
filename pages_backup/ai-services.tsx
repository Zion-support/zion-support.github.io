import React from 'react';
import Head from 'next/head';
import ErrorBoundary from '../components/ErrorBoundary';
// import { Brain, TrendingUp, FileText, Eye, Database, Shield, Mic, Zap, Cog, Search, Users, Code } from 'lucide-react';
export default function AIServices() {
  /*
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
        '90% task automation success rate',
        'Reduced operational costs',
        '24/7 autonomous operation',
        'Scalable AI workforce'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Healthcare Diagnostics',
      description: 'Advanced medical imaging analysis and diagnostic assistance using deep learning algorithms.',
      features: [
        'Medical image analysis and interpretation',
        'Disease detection and classification',
        'Treatment recommendation systems',
        'Patient risk assessment',
        'Drug interaction analysis',
        'Clinical decision support'
      ],
      pricing: '$15,000 – $75,000 setup',
      perUnit: '$5.00 – $50.00 per analysis',
      timeline: '12–24 weeks',
      benefits: [
        '95% accuracy in medical imaging',
        'Faster diagnosis and treatment',
        'Reduced medical errors',
        'Improved patient outcomes'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Cybersecurity Threat Detection',
      description: 'Advanced threat detection and response using machine learning and behavioral analysis.',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Threat intelligence integration',
        'Predictive security analytics',
        'Zero-day attack detection'
      ],
      pricing: '$12,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per event',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% threat detection accuracy',
        'Real-time security monitoring',
        'Automated threat response',
        'Reduced security incidents'
      ]
    },
    {
      icon: Cog,
      name: 'Smart Manufacturing Quality Control',
      description: 'AI-powered quality control and predictive maintenance for manufacturing operations.',
      features: [
        'Real-time quality inspection',
        'Predictive maintenance scheduling',
        'Defect detection and classification',
        'Production optimization',
        'Supply chain monitoring',
        'Equipment performance analysis'
      ],
      pricing: '$20,000 – $100,000 setup',
      perUnit: '$0.05 – $0.50 per inspection',
      timeline: '12–20 weeks',
      benefits: [
        '40% reduction in defects',
        '30% improvement in efficiency',
        'Predictive maintenance savings',
        'Enhanced product quality'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI-Powered Smart City Solutions',
      description: 'Intelligent urban management systems for traffic, energy, and public services optimization.',
      features: [
        'Traffic flow optimization',
        'Energy consumption management',
        'Public safety monitoring',
        'Environmental monitoring',
        'Resource allocation optimization',
        'Citizen service automation'
      ],
      pricing: '$50,000 – $250,000 setup',
      perUnit: 'Custom pricing based on city size',
      timeline: '16–32 weeks',
      benefits: [
        '25% reduction in traffic congestion',
        '20% energy savings',
        'Improved public safety',
        'Enhanced citizen services'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Process Mining & Optimization',
      description: 'AI-driven process analysis and optimization for business operations and workflows.',
      features: [
        'Process discovery and mapping',
        'Bottleneck identification',
        'Process optimization recommendations',
        'Compliance monitoring',
        'Performance analytics',
        'Automated process improvement'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.20 – $2.00 per process',
      timeline: '6–12 weeks',
      benefits: [
        '35% process efficiency improvement',
        'Automated optimization',
        'Reduced operational costs',
        'Better compliance tracking'
      ]
    },
    {
      icon: FileText,
      name: 'AI Legal Document Analysis',
      description: 'Intelligent legal document review, contract analysis, and compliance monitoring.',
      features: [
        'Contract analysis and risk assessment',
        'Legal document summarization',
        'Compliance monitoring and alerts',
        'Legal research automation',
        'Document classification and organization',
        'Litigation support and discovery'
      ],
      pricing: '$10,000 – $50,000 setup',
      perUnit: '$0.50 – $5.00 per document',
      timeline: '8–16 weeks',
      benefits: [
        '90% reduction in document review time',
        'Improved accuracy in legal analysis',
        'Automated compliance monitoring',
        'Reduced legal costs'
      ]
    },
    {
      icon: Search,
      name: 'AI-Powered Search & Discovery',
      description: 'Intelligent search engines with semantic understanding and personalized results.',
      features: [
        'Semantic search and understanding',
        'Personalized search results',
        'Natural language queries',
        'Multi-modal search capabilities',
        'Real-time search optimization',
        'Context-aware recommendations'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per search',
      timeline: '4–8 weeks',
      benefits: [
        '60% improvement in search relevance',
        'Enhanced user experience',
        'Increased engagement',
        'Better content discovery'
      ]
    },
    {
      icon: Brain,
      name: 'AI-Powered Financial Trading',
      description: 'Automated trading systems with machine learning algorithms for market analysis and execution.',
      features: [
        'Market analysis and prediction',
        'Automated trading execution',
        'Risk management and portfolio optimization',
        'Real-time market monitoring',
        'Algorithmic trading strategies',
        'Performance analytics and reporting'
      ],
      pricing: '$25,000 – $125,000 setup',
      perUnit: 'Performance-based fees',
      timeline: '12–24 weeks',
      benefits: [
        'Improved trading performance',
        'Automated risk management',
        '24/7 market monitoring',
        'Data-driven trading decisions'
      ]
    },
    {
      icon: Mic,
      name: 'AI-Powered Voice Analytics',
      description: 'Advanced voice analysis for customer service, sales, and communication optimization.',
      features: [
        'Voice emotion and sentiment analysis',
        'Call quality assessment',
        'Customer satisfaction prediction',
        'Sales conversation optimization',
        'Voice biometric authentication',
        'Real-time coaching and feedback'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.05 – $0.50 per minute',
      timeline: '6–12 weeks',
      benefits: [
        'Improved customer satisfaction',
        'Enhanced sales performance',
        'Better call quality',
        'Automated coaching insights'
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
      icon: Brain,
      name: 'Generative AI Content Studio',
      description: 'Advanced AI-powered content creation platform that generates high-quality text, images, videos, and audio content for marketing, education, and entertainment.',
      features: [
        'Multi-modal content generation (text, image, video, audio)',
        'Brand voice and style consistency training',
        'Content optimization for SEO and engagement',
        'Automated content scheduling and distribution',
        'A/B testing and performance analytics',
        'Copyright and plagiarism detection'
      ],
      pricing: '$2,000 – $15,000 setup',
      perUnit: '$0.05 – $0.50 per content piece',
      timeline: '4–8 weeks',
      benefits: [
        '95% faster content production',
        'Consistent brand messaging across all channels',
        'Reduced content creation costs by 70%',
        'Improved content engagement and conversion rates'
      ]
    },
    {
      icon: Eye,
      name: 'AI-Powered Quality Assurance',
      description: 'Intelligent quality control system that uses computer vision and machine learning to detect defects, ensure compliance, and optimize manufacturing processes.',
      features: [
        'Real-time defect detection and classification',
        'Predictive quality analytics and forecasting',
        'Automated compliance monitoring and reporting',
        'Root cause analysis and recommendations',
        'Integration with manufacturing systems',
        'Custom quality metrics and thresholds'
      ],
      pricing: '$10,000 – $75,000 setup',
      perUnit: '$0.01 – $0.10 per inspection',
      timeline: '8–16 weeks',
      benefits: [
        '99.5% accuracy in defect detection',
        '50% reduction in quality control costs',
        'Real-time quality monitoring and alerts',
        'Improved product consistency and customer satisfaction'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI Financial Risk Management',
      description: 'Advanced AI system for financial risk assessment, fraud detection, and regulatory compliance with real-time monitoring and predictive analytics.',
      features: [
        'Real-time fraud detection and prevention',
        'Credit risk assessment and scoring',
        'Market risk analysis and portfolio optimization',
        'Regulatory compliance monitoring',
        'Anomaly detection and alert systems',
        'Automated reporting and documentation'
      ],
      pricing: '$15,000 – $100,000 setup',
      perUnit: '$0.02 – $0.20 per transaction',
      timeline: '10–20 weeks',
      benefits: [
        '90% reduction in false positives',
        'Real-time risk monitoring and mitigation',
        'Automated compliance and regulatory reporting',
        'Improved financial decision making'
      ]
    },
    {
      icon: Mic,
      name: 'AI Voice Analytics & Sentiment Analysis',
      description: 'Advanced voice processing system that analyzes speech patterns, emotions, and sentiment for customer service, market research, and healthcare applications.',
      features: [
        'Real-time voice emotion and sentiment analysis',
        'Speaker identification and verification',
        'Conversation analytics and insights',
        'Multi-language support and translation',
        'Voice biometric authentication',
        'Call center optimization and training'
      ],
      pricing: '$5,000 – $30,000 setup',
      perUnit: '$0.01 – $0.05 per minute',
      timeline: '6–12 weeks',
      benefits: [
        '85% accuracy in emotion detection',
        'Improved customer service quality',
        'Real-time conversation insights',
        'Enhanced security with voice biometrics'
      ]
    },
    {
      icon: Database,
      name: 'AI Data Intelligence Platform',
      description: 'Comprehensive AI platform that automatically discovers, cleans, and enriches data while providing intelligent insights and recommendations.',
      features: [
        'Automated data discovery and cataloging',
        'Data quality assessment and cleaning',
        'Intelligent data enrichment and augmentation',
        'Automated data lineage and governance',
        'Predictive data analytics and insights',
        'Natural language data querying'
      ],
      pricing: '$8,000 – $50,000 setup',
      perUnit: '$0.10 – $1.00 per GB processed',
      timeline: '8–16 weeks',
      benefits: [
        '80% reduction in data preparation time',
        'Improved data quality and accuracy',
        'Automated data governance and compliance',
        'Faster insights and decision making'
      ]
    },
    {
      icon: Shield,
      name: 'AI Cybersecurity Threat Intelligence',
      description: 'Advanced AI-powered cybersecurity system that provides real-time threat detection, incident response, and security intelligence.',
      features: [
        'Real-time threat detection and analysis',
        'Automated incident response and remediation',
        'Behavioral analytics and anomaly detection',
        'Threat intelligence and attribution',
        'Security orchestration and automation',
        'Compliance monitoring and reporting'
      ],
      pricing: '$12,000 – $80,000 setup',
      perUnit: '$0.05 – $0.25 per event',
      timeline: '10–18 weeks',
      benefits: [
        '95% reduction in false positive alerts',
        'Real-time threat detection and response',
        'Automated security incident handling',
        'Improved security posture and compliance'
      ]
    },
    {
      icon: Users,
      name: 'AI Talent Acquisition & HR Analytics',
      description: 'Intelligent HR platform that automates recruitment, employee analytics, and workforce optimization using advanced AI algorithms.',
      features: [
        'Automated resume screening and candidate matching',
        'Predictive analytics for employee retention',
        'Skills gap analysis and training recommendations',
        'Performance prediction and optimization',
        'Bias detection and fairness monitoring',
        'Workforce planning and optimization'
      ],
      pricing: '$6,000 – $40,000 setup',
      perUnit: '$0.50 – $5.00 per candidate',
      timeline: '6–14 weeks',
      benefits: [
        '70% reduction in time-to-hire',
        'Improved candidate quality and fit',
        'Reduced bias in hiring decisions',
        'Better employee retention and satisfaction'
      ]
    },
    {
      icon: Code,
      name: 'AI Code Generation & Optimization',
      description: 'Advanced AI system that generates, optimizes, and maintains code while ensuring quality, security, and performance standards.',
      features: [
        'Automated code generation from specifications',
        'Code optimization and performance tuning',
        'Security vulnerability detection and fixing',
        'Automated testing and quality assurance',
        'Code documentation and maintenance',
        'Legacy code modernization and refactoring'
      ],
      pricing: '$10,000 – $60,000 setup',
      perUnit: '$0.10 – $1.00 per line of code',
      timeline: '8–16 weeks',
      benefits: [
        '60% faster development cycles',
        'Improved code quality and security',
        'Automated testing and bug detection',
        'Reduced technical debt and maintenance costs'
      ]
    },
    {
      icon: Search,
      name: 'AI Search & Recommendation Engine',
      description: 'Intelligent search and recommendation system that provides personalized results, content discovery, and user experience optimization.',
      features: [
        'Semantic search and natural language processing',
        'Personalized recommendation algorithms',
        'Real-time content indexing and ranking',
        'User behavior analysis and optimization',
        'Multi-modal search (text, image, voice)',
        'A/B testing and performance optimization'
      ],
      pricing: '$5,000 – $35,000 setup',
      perUnit: '$0.01 – $0.10 per search',
      timeline: '6–12 weeks',
      benefits: [
        '40% improvement in search relevance',
        'Increased user engagement and conversion',
        'Personalized user experiences',
        'Better content discovery and recommendations'
      ]
    },
    {
      icon: TrendingUp,
      name: 'AI Customer Churn Predictor',
      description: 'Advanced machine learning platform that predicts customer churn with 94% accuracy using behavioral analytics and predictive modeling.',
      features: [
        'Real-time churn prediction with 94% accuracy',
        'Behavioral pattern analysis and scoring',
        'Automated retention campaign triggers',
        'Custom ML model training and optimization',
        'API integration with CRM systems',
        'Advanced analytics dashboard and insights'
      ],
      pricing: '$2,000 – $8,000 setup',
      perUnit: '$0.02 – $0.20 per prediction',
      timeline: '3–5 weeks',
      benefits: [
        'Reduce customer churn by 25-40%',
        'Increase customer lifetime value',
        'Optimize retention marketing spend',
        'Improve customer satisfaction scores'
      ]
    },
    {
      icon: Brain,
      name: 'AI Trading Platform',
      description: 'Advanced AI-powered trading platform with algorithmic trading, risk management, and real-time market analysis for institutional and retail traders.',
      features: [
        'Market analysis and prediction algorithms',
        'Automated trading execution and strategies',
        'Risk management and portfolio optimization',
        'Real-time market monitoring and alerts',
        'Algorithmic trading strategy development',
        'Performance analytics and reporting'
      ],
      pricing: '$15,000 – $125,000 setup',
      perUnit: 'Performance-based fees',
      timeline: '8–12 weeks',
      benefits: [
        'Improved trading performance and returns',
        'Automated risk management',
        '24/7 market monitoring and execution',
        'Data-driven trading decisions'
      ]
    },
    {
      icon: Shield,
      name: 'AI Financial Risk Assessment',
      description: 'Advanced financial risk modeling and assessment using machine learning and big data analytics for comprehensive risk management.',
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
    }
  ];
  */

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
<meta name="description" content="Advanced AI services including autonomous AI agents, financial trading systems, legal document analysis, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ErrorBoundary>
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, autonomous agents, computer vision, NLP, predictive analytics" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">AI Services</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  )
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-8">AI Services</h1>
            <p className="text-xl text-slate-300 text-center">
              Advanced artificial intelligence solutions for your business.
            </p>
          </div>
</main>
      </ErrorBoundary>
    </>
  );
}
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button

                    key={category.id  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    onClick={() => setSelectedCategory(category.id)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${;
                      selectedCategory === category.id;
                        ? 'bg-purple-600 text-white';
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700';
                    }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  >;
                    {category.name} ({category.count});
                  </button>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>

                    )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <h3 className="text-xl font-bold mb-3">{service.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{service.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 flex-shrink-0"></span>

                            {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </li>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
{feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">

                            {useCase  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                          </span>;
                        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
{useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{service.category.replace('-', ' ')}</span>
                    </div>

                    <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>;
            </div>;
          </section>;
          {/* AI Capabilities Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our AI Capabilities
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
                  <p className="text-slate-400">Advanced ML algorithms for pattern recognition and predictive modeling</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Computer Vision</h3>
                  <p className="text-slate-400">Image and video analysis with object detection and recognition</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Natural Language</h3>
                  <p className="text-slate-400">Advanced NLP for text analysis, translation, and understanding</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
                  <p className="text-slate-400">Data-driven insights and forecasting for business intelligence</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Harness AI Power?
              </h2>
              <p className="text-lg text-slate-300 mb-8">

                Contact our AI experts to discuss how our advanced artificial intelligence services
                can transform your business operations and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"

                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </Link>

                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
<a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
className="px-8 py-3 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </Link>
                <a
                  href={`mailto:${contact.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"

                >
                  Email Us

              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>

}
import React from 'react';
import Head from 'next/head';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Users, 
  Smartphone, 
  Globe, 
  Database, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  TrendingUp,
  Target,
  Star,
  Rocket,
  Cpu,
  Cloud,
  FileText,
  Settings,
  Monitor,
  Eye,
  MessageSquare,
  Image,
  Video,
  Mic
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const aiServices = [
  {
    id: 1,
    title: 'AI-Powered Business Intelligence',
    description: 'Advanced analytics platform with machine learning algorithms for predictive insights, automated reporting, and intelligent decision support.',
    icon: BarChart3,
    category: 'Analytics & BI',
    price: 'Starting at $3,500/month',
    marketPrice: '$7,000-14,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Predictive analytics & forecasting',
      'Natural language query interface',
      'Automated report generation',
      'Real-time data visualization',
      'Anomaly detection & alerts',
      'Custom ML model development',
      'Integration with 100+ data sources',
      'White-label dashboard solutions'
    ],
    benefits: [
      'Increase decision accuracy by 75%',
      'Reduce analysis time by 90%',
      'Identify opportunities 3x faster',
      'Enable data-driven growth strategies'
    ],
    targetUsers: 'Enterprises, Data Teams, C-Level Executives, Analysts',
    roi: '400-800%',
    popular: true
  },
  {
    id: 2,
    title: 'Conversational AI & Chatbots',
    description: 'Intelligent conversational AI solutions with natural language processing, multi-language support, and seamless human handoff capabilities.',
    icon: MessageSquare,
    category: 'Conversational AI',
    price: 'Starting at $2,000/month',
    marketPrice: '$4,000-8,000/month',
    setupTime: '3-6 weeks',
    features: [
      'Natural language understanding',
      'Multi-channel deployment (web, mobile, voice)',
      'Intent recognition & entity extraction',
      'Context-aware conversations',
      'Human handoff & escalation',
      'Multi-language support (50+ languages)',
      'Integration with CRM & helpdesk',
      'Advanced analytics & insights'
    ],
    benefits: [
      'Reduce support costs by 60%',
      'Improve customer satisfaction by 40%',
      'Handle 80% of inquiries automatically',
      'Provide 24/7 customer support'
    ],
    targetUsers: 'E-commerce, SaaS, Healthcare, Financial Services',
    roi: '300-600%',
    popular: true
  }
];

export default function AIServicesPage() {
  return (
<MainLayout
      title="AI Services - Zion Tech Group"
      description="Cutting-edge AI solutions including natural language processing, computer vision, chatbots, and machine learning models."
      keywords="AI services, machine learning, natural language processing, computer vision, chatbots, artificial intelligence"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From natural language processing to computer vision, we deliver AI that works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-blue-600 rounded-xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your AI needs and get a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
    <>
      <Head>
        <title>AI Services & Solutions - Zion Tech Group | Machine Learning, AI Development</title>
        <meta name="description" content="Comprehensive AI services including machine learning, computer vision, natural language processing, and AI consulting. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, AI consulting, artificial intelligence, AI development, AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Transform your business with cutting-edge artificial intelligence. From machine learning to computer vision, 
                we deliver AI solutions that drive innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get AI Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions powered by the latest machine learning and artificial intelligence technologies.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Popular
                    </div>
                  )}

                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
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
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your business with our comprehensive AI solutions. From machine learning to computer vision, 
                we&apos;ll help you build the future of intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Start Your AI Journey
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
import SEO from '../components/SEO';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Link from 'next/link';
export default function AIServicesPage(req, res) {
  try {
  return (;
    <UltraAdvancedFuturisticBackground>;
      <SEO title="AI Services | Zion Tech Group" description="LLM apps, RAG, evaluation, guardrails, and automation with transparent pricing." canonical="https://ziontechgroup.com/ai-services/" />;
      <div className="container mx-auto px-4 py-24 text-white">;
        <div className="max-w-5xl mx-auto space-y-8">;
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>;
          <p className="text-gray-300 text-lg">Productized AI solutions: evaluation labs, safety & guardrails, chatbots, agents, search/RAG, and automation. See <Link className="text-cyan-400 underline" href="/market-pricing">Market Pricing</Link> for typical vendor benchmarks.</p>;
          <div className="grid md:grid-cols-3 gap-6">;
            {[;
              { title: 'RAG & Vector Search', href: '/vector-search-starter' },;
              { title: 'AI Evaluation Lab', href: '/rag-evaluation-lab' },;
              { title: 'AI Guardrails', href: '/ai-powered-cybersecurity' },;
              { title: 'AI Content Generator', href: '/intelligent-content-automation-platform' };
              { title: 'AI Customer Service', href: '/ai-customer-service' };
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (;
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">;
                <div className="text-xl font-semibold">{c.title}</div>;
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>;
              </Link>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          <div className="text-sm text-gray-400">Questions? <Link className="text-cyan-400 underline" href="/contact">Contact us</Link>.</div>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
