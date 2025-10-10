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
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // Customer Service & Support
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
      id: 'ai-customer-insights',
      name: 'AI Customer Insights',
      description: 'Advanced customer behavior analysis and predictive modeling for personalized experiences',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Customer journey mapping and analysis',
        'Predictive customer lifetime value',
        'Churn prediction and prevention',
        'Personalized recommendation engines',
        'Real-time customer sentiment tracking',
        'Cross-channel behavior analysis',
        'Automated customer segmentation',
        'ROI optimization for customer acquisition'
      ],
      benefits: [
        'Increase customer retention by 35%',
        'Improve customer satisfaction scores',
        'Optimize marketing spend',
        'Predict customer needs'
      ],
      category: 'Customer Service',
      popular: true,
      icon: Users
    },
    {
      id: 'ai-ticket-routing',
      name: 'AI Smart Ticket Routing',
      description: 'Intelligent ticket classification and routing system for optimal support efficiency',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Automatic ticket categorization and prioritization',
        'Smart agent assignment based on expertise',
        'Escalation prediction and prevention',
        'Multi-language ticket processing',
        'Integration with all major helpdesk systems',
        'Real-time performance analytics',
        'Automated response suggestions',
        'Customer satisfaction prediction'
      ],
      benefits: [
        'Reduce ticket resolution time by 40%',
        'Improve first-call resolution rates',
        'Optimize agent workload distribution',
        'Enhance customer experience'
      ],
      category: 'Customer Service',
      popular: false,
      icon: MessageSquare
    },

    // Content & Marketing
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
      id: 'ai-video-content',
      name: 'AI Video Content Creator',
      description: 'Automated video generation and editing with AI-powered voice synthesis and visual effects',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'AI-powered video script generation',
        'Automated voice synthesis with natural intonation',
        'Dynamic visual effects and animations',
        'Multi-language video generation',
        'Brand-consistent video templates',
        'Automated subtitle generation',
        'Social media format optimization',
        'Real-time video editing and rendering'
      ],
      benefits: [
        'Create professional videos in minutes',
        'Reduce video production costs by 70%',
        'Scale video content production',
        'Maintain consistent brand identity'
      ],
      category: 'Content',
      popular: true,
      icon: Brain
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer Pro',
      description: 'Advanced SEO optimization using AI to improve search rankings and organic traffic',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'AI-powered keyword research and analysis',
        'Content optimization for search engines',
        'Technical SEO auditing and recommendations',
        'Competitor analysis and gap identification',
        'Automated meta tag generation',
        'Link building opportunity identification',
        'Local SEO optimization',
        'Performance tracking and reporting'
      ],
      benefits: [
        'Increase organic traffic by 150%',
        'Improve search engine rankings',
        'Automated SEO optimization',
        'Competitive advantage in search'
      ],
      category: 'Content',
      popular: false,
      icon: TrendingUp
    },

    // Analytics & Business Intelligence
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
      id: 'ai-predictive-modeling',
      name: 'AI Predictive Modeling',
      description: 'Advanced predictive analytics for forecasting business trends, sales, and customer behavior',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Sales forecasting with 95% accuracy',
        'Demand planning and inventory optimization',
        'Customer lifetime value prediction',
        'Market trend analysis and forecasting',
        'Risk assessment and mitigation',
        'Automated model training and validation',
        'Real-time prediction updates',
        'Integration with existing data systems'
      ],
      benefits: [
        'Improve forecasting accuracy by 60%',
        'Reduce inventory costs by 25%',
        'Optimize resource allocation',
        'Make data-driven strategic decisions'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-real-time-analytics',
      name: 'AI Real-Time Analytics',
      description: 'Live data processing and analysis with instant insights and automated decision making',
      price: '$449/month',
      marketPrice: '$900-3000/month',
      features: [
        'Real-time data streaming and processing',
        'Instant anomaly detection and alerts',
        'Automated decision making and actions',
        'Live dashboard updates and visualizations',
        'Multi-source data integration',
        'Edge computing capabilities',
        'Custom alert and notification systems',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Instant business insights',
        'Proactive issue detection',
        'Automated response to changes',
        'Real-time competitive advantage'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart
    },

    // Computer Vision & Image Processing
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
      id: 'ai-medical-imaging',
      name: 'AI Medical Imaging Analysis',
      description: 'Advanced medical image analysis for diagnosis assistance and treatment planning',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Radiology image analysis and interpretation',
        'Pathology slide analysis and diagnosis',
        'Treatment response monitoring',
        'Medical image enhancement and reconstruction',
        'Integration with PACS and EMR systems',
        'HIPAA-compliant data processing',
        'Multi-modal image fusion',
        'Clinical decision support tools'
      ],
      benefits: [
        'Improve diagnostic accuracy by 30%',
        'Reduce interpretation time by 50%',
        'Early disease detection',
        'Enhanced patient care quality'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-quality-control',
      name: 'AI Quality Control System',
      description: 'Automated quality inspection and defect detection for manufacturing and production',
      price: '$699/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Real-time defect detection and classification',
        'Automated quality scoring and grading',
        'Production line integration and control',
        'Statistical process control and monitoring',
        'Custom inspection criteria and rules',
        'Integration with manufacturing systems',
        'Predictive maintenance alerts',
        'Quality reporting and analytics'
      ],
      benefits: [
        'Reduce defect rates by 80%',
        'Improve production efficiency',
        'Automated quality assurance',
        'Cost savings through early detection'
      ],
      category: 'Computer Vision',
      popular: true,
      icon: Eye
    },

    // Voice & Audio Processing
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
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant Platform',
      description: 'Custom voice assistant development with natural language understanding and task automation',
      price: '$399/month',
      marketPrice: '$800-2500/month',
      features: [
        'Custom voice assistant development',
        'Natural language understanding and processing',
        'Multi-platform voice integration',
        'Task automation and workflow execution',
        'Voice biometric authentication',
        'Integration with business applications',
        'Custom wake word and command training',
        'Analytics and usage tracking'
      ],
      benefits: [
        'Hands-free business operations',
        'Improved productivity and efficiency',
        'Enhanced user experience',
        'Customizable voice interactions'
      ],
      category: 'Voice AI',
      popular: true,
      icon: Mic
    },
    {
      id: 'ai-call-analytics',
      name: 'AI Call Analytics Pro',
      description: 'Advanced call analysis and insights for sales, support, and customer service optimization',
      price: '$299/month',
      marketPrice: '$600-2000/month',
      features: [
        'Real-time call transcription and analysis',
        'Sentiment analysis and emotion detection',
        'Call quality scoring and improvement suggestions',
        'Sales conversation analysis and coaching',
        'Compliance monitoring and reporting',
        'Integration with CRM and telephony systems',
        'Custom analytics and reporting',
        'Automated call summarization'
      ],
      benefits: [
        'Improve call success rates by 40%',
        'Enhanced customer service quality',
        'Automated call insights and coaching',
        'Compliance and quality assurance'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic
    },

    // Automation & Workflow
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
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and processing for business automation',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: [
        'Automated document classification and routing',
        'Data extraction from structured and unstructured documents',
        'OCR and handwriting recognition',
        'Document validation and verification',
        'Integration with document management systems',
        'Multi-language document processing',
        'Automated workflow triggers',
        'Compliance and audit trail management'
      ],
      benefits: [
        'Reduce document processing time by 90%',
        'Improve data accuracy and consistency',
        'Automated document workflows',
        'Enhanced compliance and auditability'
      ],
      category: 'Automation',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-email-automation',
      name: 'AI Email Automation Suite',
      description: 'Intelligent email processing, categorization, and automated response system',
      price: '$149/month',
      marketPrice: '$300-1200/month',
      features: [
        'Automated email classification and prioritization',
        'Smart email routing and assignment',
        'Automated response generation and sending',
        'Email sentiment analysis and monitoring',
        'Integration with CRM and helpdesk systems',
        'Email template optimization',
        'Spam and phishing detection',
        'Email analytics and performance tracking'
      ],
      benefits: [
        'Reduce email processing time by 70%',
        'Improve response accuracy and speed',
        'Automated email management',
        'Enhanced email security'
      ],
      category: 'Automation',
      popular: false,
      icon: Zap
    },

    // Security & Fraud Detection
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection System',
      description: 'Advanced fraud detection and prevention using machine learning and behavioral analysis',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Real-time fraud detection and prevention',
        'Behavioral analysis and anomaly detection',
        'Machine learning model training and optimization',
        'Multi-channel fraud monitoring',
        'Integration with payment and banking systems',
        'Custom fraud rules and thresholds',
        'Automated fraud investigation workflows',
        'Compliance reporting and audit trails'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Real-time fraud prevention',
        'Automated fraud investigation',
        'Enhanced security and compliance'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Platform',
      description: 'Comprehensive AI-powered cybersecurity monitoring, threat detection, and response',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'AI-powered threat detection and analysis',
        'Automated incident response and remediation',
        'Behavioral analysis and user monitoring',
        'Network traffic analysis and anomaly detection',
        'Integration with security tools and SIEM systems',
        'Threat intelligence and predictive analysis',
        'Automated security policy enforcement',
        'Compliance monitoring and reporting'
      ],
      benefits: [
        'Proactive threat detection and prevention',
        'Automated security response',
        'Reduced security incident response time',
        'Enhanced overall security posture'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },

    // Healthcare & Life Sciences
    {
      id: 'ai-drug-discovery',
      name: 'AI Drug Discovery Platform',
      description: 'AI-powered drug discovery and development platform for pharmaceutical research',
      price: '$1999/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Molecular design and optimization',
        'Drug-target interaction prediction',
        'Clinical trial optimization and design',
        'Adverse effect prediction and analysis',
        'Integration with research databases and tools',
        'Collaborative research platform',
        'Regulatory compliance and documentation',
        'Patent analysis and intellectual property insights'
      ],
      benefits: [
        'Accelerate drug discovery by 50%',
        'Reduce development costs significantly',
        'Improve success rates in clinical trials',
        'Enhanced research collaboration'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Brain
    },
    {
      id: 'ai-diagnostic-assistant',
      name: 'AI Diagnostic Assistant',
      description: 'AI-powered diagnostic support system for healthcare professionals',
      price: '$699/month',
      marketPrice: '$1500-4000/month',
      features: [
        'Symptom analysis and differential diagnosis',
        'Medical image interpretation assistance',
        'Treatment recommendation engine',
        'Drug interaction and allergy checking',
        'Integration with EMR and clinical systems',
        'Evidence-based medicine support',
        'Clinical decision support tools',
        'Continuing education and training modules'
      ],
      benefits: [
        'Improve diagnostic accuracy by 25%',
        'Reduce diagnostic errors',
        'Enhanced clinical decision making',
        'Better patient outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Brain
    },

    // Financial Services
    {
      id: 'ai-trading-algorithm',
      name: 'AI Trading Algorithm Platform',
      description: 'Advanced AI-powered trading algorithms and market analysis for financial markets',
      price: '$999/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Machine learning trading algorithm development',
        'Real-time market analysis and prediction',
        'Risk management and portfolio optimization',
        'Backtesting and strategy validation',
        'Integration with trading platforms and APIs',
        'Custom indicator and signal generation',
        'Automated trade execution and management',
        'Performance analytics and reporting'
      ],
      benefits: [
        'Improve trading performance and returns',
        'Automated trading strategies',
        'Enhanced risk management',
        'Data-driven investment decisions'
      ],
      category: 'Finance',
      popular: false,
      icon: TrendingUp
    },
    {
      id: 'ai-credit-scoring',
      name: 'AI Credit Scoring System',
      description: 'Advanced AI-powered credit risk assessment and scoring for financial institutions',
      price: '$599/month',
      marketPrice: '$1200-3000/month',
      features: [
        'Machine learning credit risk models',
        'Alternative data analysis and scoring',
        'Real-time credit decision automation',
        'Fraud detection and prevention',
        'Integration with banking and lending systems',
        'Regulatory compliance and reporting',
        'Model explainability and transparency',
        'Performance monitoring and optimization'
      ],
      benefits: [
        'Improve credit decision accuracy by 30%',
        'Reduce default rates',
        'Faster credit processing',
        'Enhanced risk management'
      ],
      category: 'Finance',
      popular: false,
      icon: TrendingUp
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
    { id: 'Healthcare', name: 'Healthcare', count: services.filter(s => s.category === 'Healthcare').length },
    { id: 'Finance', name: 'Finance', count: services.filter(s => s.category === 'Finance').length }
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
