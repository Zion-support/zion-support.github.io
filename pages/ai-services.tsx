import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Shield, Eye, Mic, TrendingUp, Database, FileText, Code, Cog, Search, Users } from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const categories = [
    'All',
    'Customer Support',
    'Predictive Analytics',
    'Computer Vision',
    'Speech & Voice',
    'Recommendation',
    'Agents',
    'Data & Pipelines'
  ];
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
        'Early warning system for business risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Custom computer vision solutions for quality control, object detection, and automated visual inspection.',
      features: [
        'Real-time image and video analysis',
        'Object detection and classification',
        'Quality control and defect detection',
        'Facial recognition and biometric authentication',
        'OCR and document processing',
        'Custom model training and deployment'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '4–10 weeks',
      benefits: [
        '99% accuracy in quality control',
        '50% reduction in inspection time',
        'Automated defect detection',
        'Scalable visual processing'
      ]
    },
    {
      icon: Mic,
      name: 'Speech & Voice AI Solutions',
      description: 'Advanced speech recognition, voice synthesis, and conversational AI for enhanced user experiences.',
      features: [
        'Speech-to-text and text-to-speech',
        'Voice command recognition',
        'Multi-language support',
        'Emotion detection in voice',
        'Real-time transcription',
        'Custom voice model training'
      ],
      pricing: '$2,500 – $12,000 setup',
      perUnit: '$0.05 – $0.25 per minute',
      timeline: '3–8 weeks',
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
        'Real-time processing',
        'Enhanced accessibility'
      ]
    },
    {
      icon: Database,
      name: 'Intelligent Data Processing',
      description: 'AI-powered data extraction, cleaning, and analysis to transform raw data into actionable insights.',
      features: [
        'Automated data extraction and parsing',
        'Data cleaning and normalization',
        'Pattern recognition and anomaly detection',
        'Automated report generation',
        'Data visualization and dashboards',
        'Integration with existing systems'
      ],
      pricing: '$1,500 – $8,000 setup',
      perUnit: '$0.01 – $0.05 per record',
      timeline: '2–6 weeks',
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
    }
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, natural language processing, and predictive analytics." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, predictive analytics, AI consulting" />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
        <meta property="og:title" content="AI Services - Zion Tech Group | Artificial Intelligence Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, and predictive analytics." />
        <meta property="og:url" content={`${contact.site}/ai-services`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get AI Consultation
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From machine learning to computer vision, our AI services are designed to solve real business problems and drive measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {(service.features ?? []).slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {(service.benefits ?? []).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Setup Cost</p>
                        <p className="font-semibold text-gray-900">{service.pricing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Timeline</p>
                        <p className="font-semibold text-gray-900">{service.timeline}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your AI solutions deliver real business value.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Discovery</h3>
                <p className="text-gray-600">We analyze your business needs and identify AI opportunities.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Development</h3>
                <p className="text-gray-600">We build and train custom AI models for your specific use case.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Integration</h3>
                <p className="text-gray-600">We integrate AI solutions into your existing systems and workflows.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Optimization</h3>
                <p className="text-gray-600">We continuously monitor and optimize performance for maximum ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8">
              Let our AI experts help you identify opportunities and build solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule AI Consultation
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}