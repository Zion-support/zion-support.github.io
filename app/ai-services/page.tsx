import React from 'react';
  // const categories = [
  //   { name: 'All', count: aiServices.length },
  //   { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
  //   { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
  //   { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
  //   { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
  //   { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
  //   { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
  //   { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
  //   { name: 'Data Engineering', count: aiServices.filter(s => s.category === 'Data Engineering').length },
  //   { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
  //   { name: 'Recommendation Systems', count: aiServices.filter(s => s.category === 'Recommendation Systems').length },
  //   { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
  //   { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length }
  // ];
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",
      rating: 5
    },
    {
<<<<<<< HEAD
      name: "Emily Rodriguez",
      company: "Content Marketing Agency",
      role: "Director",
      content: "AI content generation has been a game-changer. We can now produce 10x more content with the same team.",
      rating: 5
=======
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
      id: 'ai-video-analysis',
      name: 'AI Video Analysis',
      description: 'Advanced video content analysis with object detection, scene understanding, and automated tagging',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Real-time video object detection',
        'Scene classification and understanding',
        'Automated video tagging and metadata',
        'Content moderation and filtering',
        'Video search and retrieval',
        'Live streaming analysis',
        'Custom model training',
        'API integration for applications'
      ],
      benefits: [
        'Automate video content processing',
        'Improve content discoverability',
        'Enhanced video search capabilities',
        'Real-time content monitoring'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye
    },
    {
      id: 'ai-speech-synthesis',
      name: 'AI Speech Synthesis',
      description: 'Natural-sounding text-to-speech with multiple voices and emotional expression',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Natural-sounding voice synthesis',
        'Multiple voice options and languages',
        'Emotional expression and tone control',
        'Real-time speech generation',
        'Custom voice training',
        'SSML support for advanced control',
        'API integration for applications',
        'Batch processing capabilities'
      ],
      benefits: [
        'Create engaging audio content',
        'Improve accessibility',
        'Automate voice generation',
        'Professional audio quality'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic
    },
    {
      id: 'ai-recommendation-engine',
      name: 'AI Recommendation Engine',
      description: 'Advanced recommendation system with collaborative filtering and content-based algorithms',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Hybrid recommendation approaches',
        'Real-time personalization',
        'A/B testing for optimization',
        'Cold start problem solutions',
        'Scalable architecture',
        'Integration with existing systems'
      ],
      benefits: [
        'Increase user engagement by 200%',
        'Improve conversion rates',
        'Personalized user experience',
        'Better content discovery'
      ],
      category: 'Personalization',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-sentiment-analysis',
      name: 'AI Sentiment Analysis',
      description: 'Advanced sentiment analysis for text, voice, and social media with emotion detection',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Text sentiment analysis',
        'Voice emotion detection',
        'Social media monitoring',
        'Multi-language support',
        'Real-time analysis',
        'Custom sentiment models',
        'API integration',
        'Detailed analytics and reporting'
      ],
      benefits: [
        'Understand customer emotions',
        'Monitor brand sentiment',
        'Improve customer experience',
        'Data-driven insights'
      ],
      category: 'Language Processing',
      popular: true,
      icon: Heart
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Enterprise Chatbot',
      description: 'Enterprise-grade chatbot platform with advanced NLP, integration capabilities, and analytics',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Advanced NLP and understanding',
        'Multi-channel deployment',
        'Integration with enterprise systems',
        'Custom knowledge base management',
        'Human handoff capabilities',
        'Advanced analytics and reporting',
        'White-label solutions',
        '24/7 support and maintenance'
      ],
      benefits: [
        'Reduce support costs by 70%',
        'Improve customer satisfaction',
        '24/7 availability',
        'Scalable customer service'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-content-moderation',
      name: 'AI Content Moderation',
      description: 'Automated content moderation with image, video, and text analysis for platform safety',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Image and video content analysis',
        'Text toxicity detection',
        'Real-time content filtering',
        'Custom moderation rules',
        'Human review workflows',
        'Multi-language support',
        'API integration',
        'Detailed moderation reports'
      ],
      benefits: [
        'Maintain platform safety',
        'Reduce manual moderation',
        'Consistent policy enforcement',
        'Real-time content protection'
      ],
      category: 'Content Moderation',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      description: 'Advanced predictive modeling platform with machine learning algorithms for business forecasting',
      price: '$1,499/month',
      marketPrice: '$3000-10000/month',
      features: [
        'Multiple ML algorithms',
        'Automated feature engineering',
        'Model training and validation',
        'Real-time predictions',
        'Custom model development',
        'Integration with data sources',
        'Model performance monitoring',
        'A/B testing capabilities'
      ],
      benefits: [
        'Improve business forecasting',
        'Data-driven decision making',
        'Automated model development',
        'Better risk assessment'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-document-intelligence',
      name: 'AI Document Intelligence',
      description: 'Intelligent document processing with OCR, data extraction, and automated classification',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Advanced OCR and text extraction',
        'Document classification and routing',
        'Data extraction and validation',
        'Document comparison and analysis',
        'Integration with document management',
        'Custom extraction templates',
        'Batch processing capabilities',
        'API integration for automation'
      ],
      benefits: [
        'Process documents 10x faster',
        'Automated data extraction',
        'Reduce manual errors',
        'Better document insights'
      ],
      category: 'Document Processing',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-conversation-analytics',
      name: 'AI Conversation Analytics',
      description: 'Advanced conversation analysis platform with insights, sentiment tracking, and optimization',
      price: '$699/month',
      marketPrice: '$1400-4000/month',
      features: [
        'Conversation sentiment analysis',
        'Topic modeling and extraction',
        'Customer journey mapping',
        'Agent performance analytics',
        'Real-time conversation monitoring',
        'Custom analytics dashboards',
        'Integration with CRM systems',
        'Automated insights and alerts'
      ],
      benefits: [
        'Improve conversation quality',
        'Better customer understanding',
        'Optimize agent performance',
        'Data-driven insights'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-supply-chain-ai',
      name: 'AI Supply Chain Intelligence',
      description: 'Intelligent supply chain optimization with demand forecasting and risk management',
      price: '$1,999/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Demand forecasting algorithms',
        'Inventory optimization',
        'Supplier risk assessment',
        'Route optimization',
        'Cost optimization analysis',
        'Real-time supply chain monitoring',
        'Integration with ERP systems',
        'Custom optimization models'
      ],
      benefits: [
        'Reduce supply chain costs by 30%',
        'Improve delivery efficiency',
        'Minimize inventory waste',
        'Better supplier management'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Box
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics',
      description: 'Medical AI platform with diagnostic assistance, image analysis, and patient monitoring',
      price: '$2,999/month',
      marketPrice: '$6000-25000/month',
      features: [
        'Medical image analysis',
        'Diagnostic assistance tools',
        'Patient risk assessment',
        'Treatment recommendations',
        'Drug interaction checking',
        'HIPAA compliance',
        'Integration with EMR systems',
        'Clinical decision support'
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
      id: 'ai-financial-forecasting',
      name: 'AI Financial Forecasting',
      description: 'Advanced financial forecasting platform with market analysis and investment insights',
      price: '$1,799/month',
      marketPrice: '$3500-12000/month',
      features: [
        'Market trend analysis',
        'Investment portfolio optimization',
        'Risk assessment and management',
        'Real-time market monitoring',
        'Custom financial models',
        'Integration with trading platforms',
        'Regulatory compliance',
        'Advanced reporting and analytics'
      ],
      benefits: [
        'Improve investment decisions',
        'Better risk management',
        'Automated market analysis',
        'Enhanced portfolio performance'
      ],
      category: 'Finance',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-iot-analytics',
      name: 'AI IoT Analytics',
      description: 'Intelligent IoT data analysis platform with real-time monitoring and predictive maintenance',
      price: '$1,299/month',
      marketPrice: '$2500-8000/month',
      features: [
        'Real-time IoT data processing',
        'Predictive maintenance algorithms',
        'Anomaly detection and alerting',
        'Device health monitoring',
        'Integration with IoT platforms',
        'Custom analytics models',
        'Edge computing capabilities',
        'Comprehensive reporting'
      ],
      benefits: [
        'Optimize IoT operations',
        'Prevent equipment failures',
        'Reduce maintenance costs',
        'Better device insights'
      ],
      category: 'IoT & Analytics',
      popular: false,
      icon: Cpu
    },
    {
      id: 'ai-conversational-ai',
      name: 'AI Conversational AI Platform',
      description: 'Advanced conversational AI platform with natural language understanding and generation',
      price: '$999/month',
      marketPrice: '$2000-6000/month',
      features: [
        'Natural language understanding',
        'Context-aware conversations',
        'Multi-turn dialogue management',
        'Intent recognition and classification',
        'Entity extraction and recognition',
        'Conversation flow management',
        'Integration with messaging platforms',
        'Custom conversation training'
      ],
      benefits: [
        'Create natural conversations',
        'Improve user engagement',
        'Automate customer interactions',
        'Better conversation quality'
      ],
      category: 'Conversational AI',
      popular: true,
      icon: MessageCircle
    },
    {
      id: 'ai-automated-testing',
      name: 'AI Automated Testing',
      description: 'Intelligent software testing platform with automated test generation and execution',
      price: '$799/month',
      marketPrice: '$1600-5000/month',
      features: [
        'Automated test case generation',
        'Intelligent test execution',
        'Bug detection and reporting',
        'Performance testing automation',
        'Regression testing automation',
        'Integration with CI/CD pipelines',
        'Custom testing frameworks',
        'Detailed test analytics'
      ],
      benefits: [
        'Reduce testing time by 80%',
        'Improve test coverage',
        'Automated bug detection',
        'Faster release cycles'
      ],
      category: 'Software Testing',
      popular: true,
      icon: CheckCircle
    },
    {
      id: 'ai-knowledge-management',
      name: 'AI Knowledge Management',
      description: 'Intelligent knowledge management platform with automated content organization and search',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Automated content categorization',
        'Intelligent search and retrieval',
        'Knowledge graph construction',
        'Content recommendation',
        'Expert identification',
        'Integration with existing systems',
        'Custom knowledge models',
        'Advanced analytics and insights'
      ],
      benefits: [
        'Improve knowledge discovery',
        'Automated content organization',
        'Better information retrieval',
        'Enhanced collaboration'
      ],
      category: 'Knowledge Management',
      popular: false,
      icon: FileText
    },
    {
      id: 'ai-customer-churn',
      name: 'AI Customer Churn Prediction',
      description: 'Advanced customer churn prediction platform with retention strategies and analytics',
      price: '$899/month',
      marketPrice: '$1800-5000/month',
      features: [
        'Churn prediction algorithms',
        'Customer segmentation analysis',
        'Retention strategy recommendations',
        'Real-time churn monitoring',
        'Integration with CRM systems',
        'Custom prediction models',
        'A/B testing for strategies',
        'Detailed analytics and reporting'
      ],
      benefits: [
        'Reduce customer churn by 40%',
        'Improve retention strategies',
        'Better customer insights',
        'Data-driven retention'
      ],
      category: 'Customer Analytics',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-automated-reporting',
      name: 'AI Automated Reporting',
      description: 'Intelligent reporting platform with automated data analysis and report generation',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Automated report generation',
        'Data analysis and insights',
        'Custom report templates',
        'Scheduled report delivery',
        'Interactive dashboards',
        'Integration with data sources',
        'Natural language queries',
        'Advanced visualization options'
      ],
      benefits: [
        'Save 90% report creation time',
        'Automated data analysis',
        'Consistent reporting',
        'Better business insights'
      ],
      category: 'Reporting & Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      description: 'Enterprise voice assistant platform with custom voice commands and integrations',
      price: '$1,199/month',
      marketPrice: '$2400-7000/month',
      features: [
        'Custom voice command training',
        'Multi-language voice support',
        'Integration with business systems',
        'Voice analytics and insights',
        'Custom wake word training',
        'Offline voice processing',
        'API integration capabilities',
        'Advanced voice customization'
      ],
      benefits: [
        'Hands-free business operations',
        'Improve accessibility',
        'Automate voice interactions',
        'Enhanced user experience'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic
    },
    {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced AI Solutions for Business"
        description="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions."
        keywords="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare"
        canonical="https://ziontechgroup.com/ai-services"
      />
      <FuturisticBackground />
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI services today and transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
export default AIServicesPage;
