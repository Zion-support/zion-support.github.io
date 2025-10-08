import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, ArrowRight, ExternalLink, Phone, Mail, MapPin, Brain, Cpu, Database, Network } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All AI Services', icon: '🤖' },
    { id: 'machine-learning', name: 'Machine Learning', icon: '🧠' },
    { id: 'nlp', name: 'Natural Language Processing', icon: '💬' },
    { id: 'computer-vision', name: 'Computer Vision', icon: '👁️' },
    { id: 'predictive-analytics', name: 'Predictive Analytics', icon: '📊' },
    { id: 'automation', name: 'AI Automation', icon: '⚙️' },
    { id: 'chatbots', name: 'AI Chatbots', icon: '💭' },
    { id: 'recommendation', name: 'Recommendation Systems', icon: '🎯' }
  ];

  const aiServices = [
    // Machine Learning Services
    {
      id: 'custom-ml-models',
      title: 'Custom Machine Learning Models',
      description: 'Build and deploy custom ML models tailored to your specific business needs and data.',
      icon: '🧠',
      price: '$2,999/month',
      originalPrice: '$5,000/month',
      features: ['Custom model development', 'Data preprocessing', 'Model training & optimization', 'A/B testing framework', 'Real-time inference', 'Model monitoring'],
      benefits: ['Increase accuracy by 40%', 'Reduce operational costs', 'Faster decision making', 'Competitive advantage'],
      marketPrice: '$5,000-15,000/month',
      category: 'machine-learning',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'Docker', 'Kubernetes'],
      popular: true,
      link: 'https://ziontechgroup.com/custom-ml-models'
    },
    {
      id: 'predictive-maintenance',
      title: 'AI Predictive Maintenance',
      description: 'Predict equipment failures before they happen using advanced machine learning algorithms.',
      icon: '🔧',
      price: '$1,999/month',
      originalPrice: '$3,500/month',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Real-time alerts', 'Performance analytics'],
      benefits: ['Reduce downtime by 60%', 'Lower maintenance costs', 'Extend equipment life', 'Improve safety'],
      marketPrice: '$3,000-8,000/month',
      category: 'machine-learning',
      technologies: ['IoT Sensors', 'Time Series Analysis', 'Python', 'TensorFlow', 'AWS IoT', 'Grafana'],
      link: 'https://ziontechgroup.com/predictive-maintenance'
    },
    {
      id: 'demand-forecasting',
      title: 'AI Demand Forecasting',
      description: 'Accurate demand prediction using advanced time series analysis and external factors.',
      icon: '📈',
      price: '$1,499/month',
      originalPrice: '$2,500/month',
      features: ['Time series analysis', 'External factor integration', 'Seasonality detection', 'Confidence intervals', 'What-if scenarios', 'API integration'],
      benefits: ['Reduce inventory costs by 30%', 'Improve stock accuracy', 'Better planning', 'Higher customer satisfaction'],
      marketPrice: '$2,000-6,000/month',
      category: 'machine-learning',
      technologies: ['Prophet', 'ARIMA', 'LSTM', 'Python', 'Pandas', 'NumPy'],
      link: 'https://ziontechgroup.com/demand-forecasting'
    },

    // Natural Language Processing
    {
      id: 'sentiment-analysis',
      title: 'AI Sentiment Analysis',
      description: 'Analyze customer feedback, reviews, and social media sentiment in real-time.',
      icon: '😊',
      price: '$799/month',
      originalPrice: '$1,500/month',
      features: ['Real-time sentiment analysis', 'Multi-language support', 'Emotion detection', 'Trend analysis', 'Custom classifiers', 'API integration'],
      benefits: ['Understand customer emotions', 'Improve products/services', 'Crisis management', 'Brand monitoring'],
      marketPrice: '$1,200-3,000/month',
      category: 'nlp',
      technologies: ['BERT', 'RoBERTa', 'Transformers', 'Python', 'NLTK', 'spaCy'],
      popular: true,
      link: 'https://ziontechgroup.com/sentiment-analysis'
    },
    {
      id: 'document-processing',
      title: 'AI Document Processing',
      description: 'Extract, analyze, and process information from documents using advanced NLP techniques.',
      icon: '📄',
      price: '$1,299/month',
      originalPrice: '$2,200/month',
      features: ['OCR & text extraction', 'Entity recognition', 'Document classification', 'Data validation', 'Batch processing', 'Custom templates'],
      benefits: ['Process documents 10x faster', 'Reduce manual errors', 'Improve accuracy', 'Cost savings'],
      marketPrice: '$2,000-5,000/month',
      category: 'nlp',
      technologies: ['Tesseract OCR', 'spaCy', 'BERT', 'Python', 'OpenCV', 'AWS Textract'],
      link: 'https://ziontechgroup.com/document-processing'
    },
    {
      id: 'language-translation',
      title: 'AI Language Translation',
      description: 'Real-time translation services with context-aware accuracy and industry-specific terminology.',
      icon: '🌍',
      price: '$999/month',
      originalPrice: '$1,800/month',
      features: ['100+ languages', 'Real-time translation', 'Context awareness', 'Industry terminology', 'Batch processing', 'API integration'],
      benefits: ['Break language barriers', 'Expand global reach', 'Improve communication', 'Cost-effective solution'],
      marketPrice: '$1,500-4,000/month',
      category: 'nlp',
      technologies: ['Google Translate API', 'OpenAI GPT', 'Hugging Face', 'Python', 'FastAPI', 'Redis'],
      link: 'https://ziontechgroup.com/language-translation'
    },

    // Computer Vision
    {
      id: 'image-recognition',
      title: 'AI Image Recognition',
      description: 'Advanced image classification, object detection, and visual content analysis.',
      icon: '👁️',
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['Object detection', 'Image classification', 'Face recognition', 'OCR capabilities', 'Custom model training', 'Real-time processing'],
      benefits: ['Automate visual tasks', 'Improve accuracy', 'Reduce manual work', 'Scale operations'],
      marketPrice: '$2,500-7,000/month',
      category: 'computer-vision',
      technologies: ['YOLO', 'ResNet', 'OpenCV', 'TensorFlow', 'Python', 'CUDA'],
      popular: true,
      link: 'https://ziontechgroup.com/image-recognition'
    },
    {
      id: 'quality-inspection',
      title: 'AI Quality Inspection',
      description: 'Automated quality control using computer vision for manufacturing and production lines.',
      icon: '🔍',
      price: '$2,499/month',
      originalPrice: '$4,500/month',
      features: ['Defect detection', 'Quality scoring', 'Real-time monitoring', 'Statistical analysis', 'Alert system', 'Integration APIs'],
      benefits: ['Reduce defects by 80%', 'Improve quality consistency', 'Lower inspection costs', 'Faster production'],
      marketPrice: '$4,000-12,000/month',
      category: 'computer-vision',
      technologies: ['OpenCV', 'YOLO', 'TensorFlow', 'Python', 'Industrial Cameras', 'Edge Computing'],
      link: 'https://ziontechgroup.com/quality-inspection'
    },
    {
      id: 'facial-recognition',
      title: 'AI Facial Recognition',
      description: 'Secure facial recognition system for access control, attendance, and identity verification.',
      icon: '👤',
      price: '$1,399/month',
      originalPrice: '$2,500/month',
      features: ['Face detection & recognition', 'Liveness detection', 'Access control', 'Attendance tracking', 'Privacy protection', 'API integration'],
      benefits: ['Enhanced security', 'Contactless access', 'Automated attendance', 'Fraud prevention'],
      marketPrice: '$2,000-6,000/month',
      category: 'computer-vision',
      technologies: ['FaceNet', 'OpenCV', 'Python', 'TensorFlow', 'Edge Devices', 'Privacy Tools'],
      link: 'https://ziontechgroup.com/facial-recognition'
    },

    // Predictive Analytics
    {
      id: 'customer-churn-prediction',
      title: 'AI Customer Churn Prediction',
      description: 'Predict and prevent customer churn using advanced analytics and machine learning.',
      icon: '📉',
      price: '$1,599/month',
      originalPrice: '$2,800/month',
      features: ['Churn prediction models', 'Risk scoring', 'Intervention strategies', 'Real-time monitoring', 'A/B testing', 'ROI tracking'],
      benefits: ['Reduce churn by 35%', 'Increase customer lifetime value', 'Improve retention', 'Better targeting'],
      marketPrice: '$2,500-7,000/month',
      category: 'predictive-analytics',
      technologies: ['XGBoost', 'Random Forest', 'Python', 'Pandas', 'Scikit-learn', 'Tableau'],
      link: 'https://ziontechgroup.com/customer-churn-prediction'
    },
    {
      id: 'fraud-detection',
      title: 'AI Fraud Detection',
      description: 'Real-time fraud detection and prevention using advanced machine learning algorithms.',
      icon: '🛡️',
      price: '$2,199/month',
      originalPrice: '$4,000/month',
      features: ['Real-time detection', 'Anomaly detection', 'Risk scoring', 'Pattern recognition', 'Alert system', 'False positive reduction'],
      benefits: ['Reduce fraud losses by 70%', 'Faster detection', 'Lower false positives', 'Compliance support'],
      marketPrice: '$3,500-10,000/month',
      category: 'predictive-analytics',
      technologies: ['Isolation Forest', 'Autoencoders', 'Python', 'TensorFlow', 'Kafka', 'Redis'],
      popular: true,
      link: 'https://ziontechgroup.com/fraud-detection'
    },
    {
      id: 'price-optimization',
      title: 'AI Price Optimization',
      description: 'Dynamic pricing optimization using machine learning to maximize revenue and competitiveness.',
      icon: '💰',
      price: '$1,899/month',
      originalPrice: '$3,200/month',
      features: ['Dynamic pricing', 'Competitor analysis', 'Demand elasticity', 'A/B testing', 'Revenue optimization', 'Real-time updates'],
      benefits: ['Increase revenue by 15%', 'Improve competitiveness', 'Better price positioning', 'Data-driven decisions'],
      marketPrice: '$3,000-8,000/month',
      category: 'predictive-analytics',
      technologies: ['Reinforcement Learning', 'Python', 'Pandas', 'Scikit-learn', 'APIs', 'Real-time Systems'],
      link: 'https://ziontechgroup.com/price-optimization'
    },

    // AI Automation
    {
      id: 'intelligent-automation',
      title: 'AI Intelligent Automation',
      description: 'End-to-end business process automation with AI decision-making capabilities.',
      icon: '⚙️',
      price: '$2,999/month',
      originalPrice: '$5,500/month',
      features: ['Process automation', 'AI decision making', 'Exception handling', 'Workflow optimization', 'Integration capabilities', 'Monitoring dashboard'],
      benefits: ['Reduce manual work by 80%', 'Improve accuracy', 'Faster processing', 'Cost reduction'],
      marketPrice: '$5,000-15,000/month',
      category: 'automation',
      technologies: ['RPA', 'Machine Learning', 'Python', 'APIs', 'Workflow Engines', 'Monitoring Tools'],
      popular: true,
      link: 'https://ziontechgroup.com/intelligent-automation'
    },
    {
      id: 'email-automation',
      title: 'AI Email Automation',
      description: 'Intelligent email processing, categorization, and automated responses.',
      icon: '📧',
      price: '$899/month',
      originalPrice: '$1,600/month',
      features: ['Email classification', 'Auto-responses', 'Priority scoring', 'Spam detection', 'Sentiment analysis', 'Integration APIs'],
      benefits: ['Process emails 5x faster', 'Improve response time', 'Better organization', 'Reduced manual work'],
      marketPrice: '$1,500-4,000/month',
      category: 'automation',
      technologies: ['NLP', 'Email APIs', 'Python', 'Machine Learning', 'IMAP/SMTP', 'Webhooks'],
      link: 'https://ziontechgroup.com/email-automation'
    },

    // AI Chatbots
    {
      id: 'conversational-ai',
      title: 'Conversational AI Platform',
      description: 'Advanced conversational AI with natural language understanding and multi-channel support.',
      icon: '💭',
      price: '$1,499/month',
      originalPrice: '$2,800/month',
      features: ['Natural language understanding', 'Multi-channel support', 'Context awareness', 'Integration APIs', 'Analytics dashboard', 'Custom training'],
      benefits: ['24/7 customer support', 'Reduce support costs', 'Improve satisfaction', 'Scale operations'],
      marketPrice: '$2,500-7,000/month',
      category: 'chatbots',
      technologies: ['OpenAI GPT', 'Dialogflow', 'Rasa', 'Python', 'WebSocket', 'NLP Libraries'],
      popular: true,
      link: 'https://ziontechgroup.com/conversational-ai'
    },
    {
      id: 'voice-assistant',
      title: 'AI Voice Assistant',
      description: 'Intelligent voice assistant with speech recognition and natural language processing.',
      icon: '🎤',
      price: '$1,799/month',
      originalPrice: '$3,200/month',
      features: ['Speech recognition', 'Natural language processing', 'Voice synthesis', 'Multi-language support', 'Custom commands', 'API integration'],
      benefits: ['Hands-free operation', 'Improved accessibility', 'Faster interactions', 'Better user experience'],
      marketPrice: '$3,000-8,000/month',
      category: 'chatbots',
      technologies: ['Speech-to-Text', 'Text-to-Speech', 'NLP', 'Python', 'WebRTC', 'Voice APIs'],
      link: 'https://ziontechgroup.com/voice-assistant'
    },

    // Recommendation Systems
    {
      id: 'recommendation-engine',
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation system for products, content, and services.',
      icon: '🎯',
      price: '$1,299/month',
      originalPrice: '$2,300/month',
      features: ['Collaborative filtering', 'Content-based filtering', 'Hybrid approaches', 'Real-time recommendations', 'A/B testing', 'Analytics dashboard'],
      benefits: ['Increase sales by 25%', 'Improve user engagement', 'Better personalization', 'Higher conversion rates'],
      marketPrice: '$2,000-6,000/month',
      category: 'recommendation',
      technologies: ['Matrix Factorization', 'Deep Learning', 'Python', 'Pandas', 'NumPy', 'Recommendation Libraries'],
      link: 'https://ziontechgroup.com/recommendation-engine'
    },
    {
      id: 'content-personalization',
      title: 'AI Content Personalization',
      description: 'Dynamic content personalization based on user behavior and preferences.',
      icon: '📝',
      price: '$1,199/month',
      originalPrice: '$2,100/month',
      features: ['User profiling', 'Content analysis', 'Dynamic rendering', 'A/B testing', 'Performance tracking', 'Real-time updates'],
      benefits: ['Increase engagement by 40%', 'Better user experience', 'Higher conversion rates', 'Improved retention'],
      marketPrice: '$2,000-5,000/month',
      category: 'recommendation',
      technologies: ['Machine Learning', 'Content APIs', 'Python', 'React', 'Personalization Engines', 'Analytics'],
      link: 'https://ziontechgroup.com/content-personalization'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const popularServices = aiServices.filter(service => service.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and predictive analytics. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, predictive analytics, ai automation, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced artificial intelligence solutions to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button text-lg px-8 py-4"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-lg px-8 py-4"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Get Free Consultation
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-600/25'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Most Popular AI Services
            </h2>
            <p className="text-xl text-gray-300">
              Our most requested and highest-performing AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Popular
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">Market price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center inline-flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    aria-label="Call to get started"
                  >
                    📞
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All AI Services */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Complete AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-300">
              Comprehensive AI solutions for every business need and industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="cyber-card hologram-card group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                    {categories.find(cat => cat.id === service.category)?.name}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-xs text-gray-400">Market: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-cyan-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center inline-flex items-center justify-center text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="bg-green-600 text-white py-2 px-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
                    aria-label="Call to get started"
                  >
                    📞
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging cutting-edge AI technologies to deliver exceptional results for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card text-center">
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Advanced ML algorithms for predictive modeling, classification, and optimization</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Cpu className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Deep Learning</h3>
              <p className="text-gray-300 text-sm">Neural networks and deep learning models for complex pattern recognition</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Database className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data Processing</h3>
              <p className="text-gray-300 text-sm">Big data processing and real-time analytics for actionable insights</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Network className="w-16 h-16 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Integration</h3>
              <p className="text-gray-300 text-sm">Seamless integration with existing systems and workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get started with our AI services today. Free consultation, custom solution design, and 24/7 support included.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-2">Custom AI Solutions</h3>
              <p className="text-gray-300">Tailored AI models designed specifically for your business needs</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">Quick implementation and deployment of AI solutions</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our AI experts</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button text-lg px-8 py-4"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button text-lg px-8 py-4"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Available 24/7 for AI consultations and support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;