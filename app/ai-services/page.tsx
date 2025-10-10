'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // Core AI Services
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      color: 'text-purple-400'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      color: 'text-blue-400'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      color: 'text-green-400'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      color: 'text-cyan-400'
    },

    // Advanced AI Services
    {
      title: 'AI Data Visualization',
      description: 'Transform complex data into interactive visualizations',
      icon: BarChart,
      price: '$1,100/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling'],
      color: 'text-orange-400'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create 3D models and environments with AI technology',
      icon: Box,
      price: '$1,600/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support'],
      color: 'text-pink-400'
    },
    {
      title: 'AI Voice Synthesis',
      description: 'Advanced voice cloning and text-to-speech solutions',
      icon: Mic,
      price: '$1,300/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
      color: 'text-indigo-400'
    },
    {
      title: 'AI Content Generation',
      description: 'Automated content creation for marketing and communication',
      icon: FileText,
      price: '$1,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization'],
      color: 'text-yellow-400'
    },

    // Specialized AI Services
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting and trend analysis with machine learning',
      icon: TrendingUp,
      price: '$1,700/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis'],
      color: 'text-red-400'
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content',
      icon: Target,
      price: '$1,400/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing'],
      color: 'text-teal-400'
    },
    {
      title: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and security monitoring',
      icon: Shield,
      price: '$1,900/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System'],
      color: 'text-red-500'
    },
    {
      title: 'AI Edge Computing Solutions',
      description: 'Deploy AI models at the edge for real-time processing, reduced latency, and offline capabilities.',
      icon: '⚡',
      price: '$1,700/month',
      features: [
        'Edge Model Deployment',
        'Real-time Inference',
        'Offline Capabilities',
        'Model Optimization',
        'Edge Analytics',
        'Device Management'
      ],
      benefits: [
        'Reduce latency by 90%',
        'Enable offline operations',
        'Reduce bandwidth costs by 70%',
        'Improve data privacy'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Edge AI',
      technologies: ['TensorFlow Lite', 'ONNX', 'OpenVINO', 'NVIDIA Jetson', 'Raspberry Pi', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Document Intelligence Platform',
      description: 'Advanced document processing with OCR, data extraction, classification, and intelligent routing.',
      icon: '📄',
      price: '$1,100/month',
      features: [
        'OCR & Text Extraction',
        'Document Classification',
        'Data Extraction',
        'Intelligent Routing',
        'Version Control',
        'Compliance Monitoring'
      ],
      benefits: [
        'Process 10,000+ documents/hour',
        'Reduce manual data entry by 95%',
        'Improve accuracy to 99.5%',
        'Enable automated workflows'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Document AI',
      technologies: ['OCR', 'NLP', 'Computer Vision', 'Python', 'React', 'Document APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Experience Platform',
      description: 'Comprehensive customer experience management with sentiment analysis, journey mapping, and personalization.',
      icon: '😊',
      price: '$1,800/month',
      features: [
        'Sentiment Analysis',
        'Journey Mapping',
        'Personalization Engine',
        'Predictive Analytics',
        'Real-time Insights',
        'Multi-channel Integration'
      ],
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce churn by 30%',
        'Improve NPS scores by 50%',
        'Enable personalized experiences'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Customer Experience',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'Analytics APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Supply Chain Intelligence',
      description: 'Intelligent supply chain optimization with demand forecasting, risk management, and logistics automation.',
      icon: '🚚',
      price: '$2,200/month',
      features: [
        'Demand Forecasting',
        'Risk Assessment',
        'Logistics Optimization',
        'Supplier Management',
        'Inventory Optimization',
        'Real-time Monitoring'
      ],
      benefits: [
        'Reduce supply chain costs by 25%',
        'Improve delivery times by 40%',
        'Minimize supply disruptions',
        'Optimize inventory levels'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Supply Chain AI',
      technologies: ['Machine Learning', 'Time Series Analysis', 'Python', 'React', 'Supply Chain APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Financial Risk Management',
      description: 'Advanced financial risk assessment with fraud detection, credit scoring, and market analysis.',
      icon: '💳',
      price: '$2,500/month',
      features: [
        'Fraud Detection',
        'Credit Risk Assessment',
        'Market Risk Analysis',
        'Regulatory Compliance',
        'Real-time Monitoring',
        'Alert Systems'
      ],
      benefits: [
        'Prevent 99.9% of fraud attempts',
        'Reduce credit losses by 60%',
        'Ensure regulatory compliance',
        'Improve risk decision making'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Financial AI',
      technologies: ['Machine Learning', 'Deep Learning', 'Python', 'React', 'Financial APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Content Moderation Suite',
      description: 'Comprehensive content moderation with text, image, and video analysis for platform safety.',
      icon: '🛡️',
      price: '$1,400/month',
      features: [
        'Text Moderation',
        'Image Analysis',
        'Video Content Review',
        'Real-time Processing',
        'Custom Rule Engine',
        'Human Review Integration'
      ],
      benefits: [
        'Reduce moderation costs by 70%',
        'Improve content safety by 95%',
        'Scale moderation efforts',
        'Maintain platform quality'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Content Moderation',
      technologies: ['NLP', 'Computer Vision', 'Machine Learning', 'React', 'Content APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Process Mining Platform',
      description: 'Intelligent process analysis with workflow discovery, optimization, and compliance monitoring.',
      icon: '🔄',
      price: '$1,600/month',
      features: [
        'Process Discovery',
        'Workflow Analysis',
        'Bottleneck Identification',
        'Compliance Monitoring',
        'Optimization Recommendations',
        'Performance Analytics'
      ],
      benefits: [
        'Identify process inefficiencies',
        'Reduce process time by 40%',
        'Improve compliance by 90%',
        'Optimize resource allocation'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Process Intelligence',
      technologies: ['Process Mining', 'Machine Learning', 'Python', 'React', 'Process APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Knowledge Management System',
      description: 'Intelligent knowledge base with semantic search, content recommendations, and expert systems.',
      icon: '🧠',
      price: '$1,200/month',
      features: [
        'Semantic Search',
        'Content Recommendations',
        'Expert System Integration',
        'Knowledge Graph',
        'Collaborative Filtering',
        'Natural Language Queries'
      ],
      benefits: [
        'Improve knowledge discovery by 80%',
        'Reduce search time by 70%',
        'Enable intelligent recommendations',
        'Facilitate knowledge sharing'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Knowledge AI',
      technologies: ['NLP', 'Knowledge Graphs', 'Machine Learning', 'React', 'Search APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Quality Assurance Platform',
      description: 'Automated quality testing with intelligent test generation, execution, and defect prediction.',
      icon: '🔍',
      price: '$1,300/month',
      features: [
        'Intelligent Test Generation',
        'Automated Test Execution',
        'Defect Prediction',
        'Performance Testing',
        'Regression Analysis',
        'Quality Metrics'
      ],
      benefits: [
        'Reduce testing time by 60%',
        'Improve test coverage by 80%',
        'Detect defects earlier',
        'Ensure software quality'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Quality Assurance',
      technologies: ['Machine Learning', 'Test Automation', 'Python', 'React', 'Testing APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Energy Optimization Suite',
      description: 'Intelligent energy management with consumption optimization, renewable integration, and cost reduction.',
      icon: '⚡',
      price: '$1,500/month',
      features: [
        'Energy Consumption Analysis',
        'Renewable Energy Integration',
        'Cost Optimization',
        'Predictive Maintenance',
        'Carbon Footprint Tracking',
        'Smart Grid Integration'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Increase efficiency by 25%',
        'Lower carbon footprint',
        'Optimize renewable usage'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Energy AI',
      technologies: ['IoT Sensors', 'Machine Learning', 'Time Series Analysis', 'React', 'Energy APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Talent Acquisition Platform',
      description: 'Intelligent recruitment with candidate matching, skill assessment, and interview optimization.',
      icon: '👥',
      price: '$1,400/month',
      features: [
        'Candidate Matching',
        'Skill Assessment',
        'Interview Optimization',
        'Bias Detection',
        'Talent Pipeline Management',
        'Performance Analytics'
      ],
      benefits: [
        'Improve hiring quality by 50%',
        'Reduce time-to-hire by 40%',
        'Eliminate bias in recruitment',
        'Optimize talent acquisition'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Talent AI',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'HR APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Market Intelligence Platform',
      description: 'Comprehensive market analysis with trend prediction, competitor monitoring, and opportunity identification.',
      icon: '📈',
      price: '$1,800/month',
      features: [
        'Market Trend Analysis',
        'Competitor Monitoring',
        'Opportunity Identification',
        'Sentiment Analysis',
        'Price Intelligence',
        'Strategic Insights'
      ],
      benefits: [
        'Identify market opportunities',
        'Stay ahead of competitors',
        'Optimize pricing strategies',
        'Make data-driven decisions'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Market Intelligence',
      technologies: ['Web Scraping', 'NLP', 'Machine Learning', 'React', 'Market APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI IoT Analytics Platform',
      description: 'Intelligent IoT data processing with device management, predictive maintenance, and real-time insights.',
      icon: '🌐',
      price: '$1,600/month',
      features: [
        'IoT Device Management',
        'Real-time Data Processing',
        'Predictive Maintenance',
        'Anomaly Detection',
        'Edge Analytics',
        'Dashboard Visualization'
      ],
      benefits: [
        'Optimize IoT operations',
        'Prevent device failures',
        'Reduce maintenance costs',
        'Enable real-time insights'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'IoT AI',
      technologies: ['IoT Sensors', 'Edge Computing', 'Machine Learning', 'React', 'IoT APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Compliance Monitoring Suite',
      description: 'Automated compliance management with regulatory monitoring, risk assessment, and audit preparation.',
      icon: '📋',
      price: '$1,700/month',
      features: [
        'Regulatory Monitoring',
        'Risk Assessment',
        'Audit Preparation',
        'Policy Management',
        'Training Automation',
        'Reporting Dashboard'
      ],
      benefits: [
        'Ensure 100% compliance',
        'Reduce audit time by 60%',
        'Minimize regulatory risks',
        'Streamline compliance processes'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Compliance AI',
      technologies: ['NLP', 'Machine Learning', 'React', 'Python', 'Compliance APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Innovation Management Platform',
      description: 'Intelligent innovation tracking with idea evaluation, patent analysis, and R&D optimization.',
      icon: '💡',
      price: '$1,900/month',
      features: [
        'Idea Evaluation',
        'Patent Analysis',
        'R&D Optimization',
        'Innovation Tracking',
        'Market Validation',
        'Portfolio Management'
      ],
      benefits: [
        'Accelerate innovation cycles',
        'Optimize R&D investments',
        'Identify breakthrough opportunities',
        'Manage innovation portfolio'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Innovation AI',
      technologies: ['NLP', 'Patent Analysis', 'Machine Learning', 'React', 'Innovation APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length },
    { name: 'Consulting', count: aiServices.filter(s => s.category === 'Consulting').length },
    { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
    { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
    { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
    { name: 'Data Engineering', count: aiServices.filter(s => s.category === 'Data Engineering').length },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
    { name: 'Recommendation Systems', count: aiServices.filter(s => s.category === 'Recommendation Systems').length },
    { name: 'Speech AI', count: aiServices.filter(s => s.category === 'Speech AI').length },
    { name: 'Edge AI', count: aiServices.filter(s => s.category === 'Edge AI').length },
    { name: 'Document AI', count: aiServices.filter(s => s.category === 'Document AI').length },
    { name: 'Customer Experience', count: aiServices.filter(s => s.category === 'Customer Experience').length },
    { name: 'Supply Chain AI', count: aiServices.filter(s => s.category === 'Supply Chain AI').length },
    { name: 'Financial AI', count: aiServices.filter(s => s.category === 'Financial AI').length },
    { name: 'Content Moderation', count: aiServices.filter(s => s.category === 'Content Moderation').length },
    { name: 'Process Intelligence', count: aiServices.filter(s => s.category === 'Process Intelligence').length },
    { name: 'Knowledge AI', count: aiServices.filter(s => s.category === 'Knowledge AI').length },
    { name: 'Quality Assurance', count: aiServices.filter(s => s.category === 'Quality Assurance').length },
    { name: 'Energy AI', count: aiServices.filter(s => s.category === 'Energy AI').length },
    { name: 'Talent AI', count: aiServices.filter(s => s.category === 'Talent AI').length },
    { name: 'Market Intelligence', count: aiServices.filter(s => s.category === 'Market Intelligence').length },
    { name: 'IoT AI', count: aiServices.filter(s => s.category === 'IoT AI').length },
    { name: 'Compliance AI', count: aiServices.filter(s => s.category === 'Compliance AI').length },
    { name: 'Innovation AI', count: aiServices.filter(s => s.category === 'Innovation AI').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation. 25+ enterprise-grade AI solutions starting at $800/month." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, ai consulting, automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to transform your business operations and drive innovation.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-2">{service.contactInfo}</div>
                    <a 
                      href="/contact" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-block"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-100 mb-6 text-lg">
              Our AI experts are ready to help you implement cutting-edge artificial intelligence solutions 
              that will revolutionize your business operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;