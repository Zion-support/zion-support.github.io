import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Brain, Zap, Target, BarChart, MessageSquare, Eye, Cpu, Sparkles, ArrowRight, Phone, Mail, Shield, Clock, Users } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Model Development',
      description: 'Custom ML models for predictive analytics, classification, and regression tasks tailored to your business needs.',
      icon: '🧠',
      price: 'Starting at $5,000/project',
      features: ['Custom model development', 'Data preprocessing', 'Model training & validation', 'Performance optimization', 'Deployment & monitoring'],
      benefits: ['Improve prediction accuracy by 40%', 'Automate decision making', 'Reduce manual analysis time'],
      marketPrice: '$8,000-25,000/project',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
      link: 'https://ziontechgroup.com/ml-development',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding.',
      icon: '💬',
      price: 'Starting at $3,500/project',
      features: ['Text classification', 'Sentiment analysis', 'Named entity recognition', 'Language translation', 'Chatbot development'],
      benefits: ['Process text data 100x faster', 'Improve customer service', 'Extract insights from documents'],
      marketPrice: '$6,000-18,000/project',
      category: 'NLP',
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
      link: 'https://ziontechgroup.com/nlp-solutions',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis, object detection, facial recognition, and visual content understanding.',
      icon: '👁️',
      price: 'Starting at $4,500/project',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis', 'OCR & document scanning'],
      benefits: ['Automate visual inspections', 'Improve security systems', 'Enhance user experience'],
      marketPrice: '$7,500-20,000/project',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorFlow Lite'],
      link: 'https://ziontechgroup.com/computer-vision',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      icon: '🤖',
      price: 'Starting at $2,500/month',
      features: ['Context-aware conversations', 'Multi-language support', 'Integration with CRM', 'Analytics & reporting', 'Voice capabilities'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 customer service', 'Improve response time'],
      marketPrice: '$4,000-12,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Amazon Lex', 'OpenAI GPT'],
      link: 'https://ziontechgroup.com/ai-chatbots',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced forecasting models for sales, demand, risk assessment, and business intelligence.',
      icon: '📊',
      price: 'Starting at $4,000/project',
      features: ['Sales forecasting', 'Demand prediction', 'Risk assessment', 'Market analysis', 'Trend identification'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$6,500-20,000/project',
      category: 'Analytics',
      technologies: ['Time Series Analysis', 'ARIMA', 'Prophet', 'LSTM', 'XGBoost'],
      link: 'https://ziontechgroup.com/predictive-analytics',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Recommendation Systems',
      description: 'Personalized recommendation engines for e-commerce, content, and product suggestions.',
      icon: '🎯',
      price: 'Starting at $3,000/project',
      features: ['Collaborative filtering', 'Content-based filtering', 'Hybrid approaches', 'Real-time recommendations', 'A/B testing'],
      benefits: ['Increase conversion rates by 35%', 'Improve user engagement', 'Boost sales revenue'],
      marketPrice: '$5,000-15,000/project',
      category: 'Recommendation Systems',
      technologies: ['Matrix Factorization', 'Neural Networks', 'Apache Spark', 'Redis', 'MongoDB'],
      link: 'https://ziontechgroup.com/recommendation-systems',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud detection systems using machine learning to identify suspicious activities in real-time.',
      icon: '🛡️',
      price: 'Starting at $5,500/project',
      features: ['Real-time monitoring', 'Anomaly detection', 'Pattern recognition', 'Risk scoring', 'Alert systems'],
      benefits: ['Reduce fraud losses by 80%', 'Improve security', 'Minimize false positives'],
      marketPrice: '$8,000-25,000/project',
      category: 'Security',
      technologies: ['Isolation Forest', 'One-Class SVM', 'Autoencoders', 'Apache Kafka', 'Elasticsearch'],
      link: 'https://ziontechgroup.com/fraud-detection',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Document Processing',
      description: 'Intelligent document analysis, extraction, and processing for automated workflows.',
      icon: '📄',
      price: 'Starting at $2,500/project',
      features: ['OCR & text extraction', 'Document classification', 'Data validation', 'Workflow automation', 'API integration'],
      benefits: ['Process documents 50x faster', 'Reduce manual errors', 'Improve efficiency'],
      marketPrice: '$4,000-12,000/project',
      category: 'Document Processing',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'spaCy', 'FastAPI'],
      link: 'https://ziontechgroup.com/document-processing',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Voice Recognition',
      description: 'Advanced speech-to-text and voice command systems for hands-free operations.',
      icon: '🎤',
      price: 'Starting at $3,500/project',
      features: ['Speech-to-text', 'Voice commands', 'Speaker identification', 'Noise cancellation', 'Multi-language support'],
      benefits: ['Improve accessibility', 'Enable hands-free operations', 'Enhance user experience'],
      marketPrice: '$5,500-18,000/project',
      category: 'Speech Processing',
      technologies: ['Whisper', 'Wav2Vec2', 'DeepSpeech', 'Google Speech API', 'Azure Speech'],
      link: 'https://ziontechgroup.com/voice-recognition',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Image Generation',
      description: 'Creative AI solutions for image generation, enhancement, and artistic content creation.',
      icon: '🎨',
      price: 'Starting at $4,000/project',
      features: ['Image generation', 'Style transfer', 'Image enhancement', 'Content creation', 'Brand consistency'],
      benefits: ['Reduce design costs by 70%', 'Accelerate content creation', 'Maintain brand consistency'],
      marketPrice: '$6,500-20,000/project',
      category: 'Creative AI',
      technologies: ['DALL-E', 'Stable Diffusion', 'GANs', 'StyleGAN', 'CLIP'],
      link: 'https://ziontechgroup.com/image-generation',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
      icon: '🚚',
      price: 'Starting at $6,000/project',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier analysis', 'Risk assessment'],
      benefits: ['Reduce costs by 25%', 'Improve efficiency', 'Minimize risks'],
      marketPrice: '$10,000-30,000/project',
      category: 'Supply Chain',
      technologies: ['Optimization Algorithms', 'Reinforcement Learning', 'Graph Neural Networks', 'Apache Airflow', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/supply-chain-ai',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Healthcare Diagnostics',
      description: 'Medical image analysis, diagnostic assistance, and patient monitoring systems.',
      icon: '🏥',
      price: 'Starting at $8,000/project',
      features: ['Medical image analysis', 'Diagnostic assistance', 'Patient monitoring', 'Drug discovery', 'Clinical decision support'],
      benefits: ['Improve diagnostic accuracy', 'Reduce medical errors', 'Accelerate drug discovery'],
      marketPrice: '$15,000-50,000/project',
      category: 'Healthcare',
      technologies: ['Medical Imaging AI', 'DICOM Processing', 'Clinical NLP', 'Federated Learning', 'HIPAA Compliance'],
      link: 'https://ziontechgroup.com/healthcare-ai',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Financial Trading',
      description: 'Algorithmic trading systems with market analysis and automated decision making.',
      icon: '💹',
      price: 'Starting at $7,500/project',
      features: ['Market analysis', 'Trading algorithms', 'Risk management', 'Portfolio optimization', 'Real-time monitoring'],
      benefits: ['Improve trading performance', 'Reduce human error', 'Enable 24/7 trading'],
      marketPrice: '$12,000-40,000/project',
      category: 'Fintech',
      technologies: ['Reinforcement Learning', 'Quantitative Finance', 'Market Data APIs', 'Backtesting', 'Risk Models'],
      link: 'https://ziontechgroup.com/financial-trading-ai',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Content Moderation',
      description: 'Automated content filtering and moderation for social media and user-generated content.',
      icon: '🔍',
      price: 'Starting at $2,000/month',
      features: ['Content filtering', 'Hate speech detection', 'Image moderation', 'Video analysis', 'Real-time monitoring'],
      benefits: ['Reduce moderation costs by 80%', 'Improve response time', 'Scale content review'],
      marketPrice: '$3,500-10,000/month',
      category: 'Content Moderation',
      technologies: ['BERT', 'CLIP', 'Content Classification', 'Image Recognition', 'Real-time APIs'],
      link: 'https://ziontechgroup.com/content-moderation',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Energy Optimization',
      description: 'Smart energy management systems for buildings, grids, and renewable energy sources.',
      icon: '⚡',
      price: 'Starting at $5,000/project',
      features: ['Energy consumption analysis', 'Predictive maintenance', 'Grid optimization', 'Renewable integration', 'Cost optimization'],
      benefits: ['Reduce energy costs by 30%', 'Improve efficiency', 'Support sustainability'],
      marketPrice: '$8,000-25,000/project',
      category: 'Energy',
      technologies: ['IoT Sensors', 'Time Series Analysis', 'Optimization Algorithms', 'Edge Computing', 'Cloud Platforms'],
      link: 'https://ziontechgroup.com/energy-optimization',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      title: 'AI-Powered Quality Control',
      description: 'Automated quality inspection and defect detection for manufacturing and production.',
      icon: '🔧',
      price: 'Starting at $4,500/project',
      features: ['Defect detection', 'Quality scoring', 'Process monitoring', 'Predictive maintenance', 'Real-time alerts'],
      benefits: ['Improve product quality', 'Reduce waste', 'Increase production efficiency'],
      marketPrice: '$7,000-22,000/project',
      category: 'Manufacturing',
      technologies: ['Computer Vision', 'Edge AI', 'IoT Integration', 'Quality Metrics', 'Production Systems'],
      link: 'https://ziontechgroup.com/quality-control-ai',
      contact: 'kleber@ziontechgroup.com'
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and custom AI solutions for enterprise applications." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, AI consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
          AI Services & Solutions
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
          Transform your business with cutting-edge artificial intelligence
        </p>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          Our comprehensive AI services cover everything from machine learning model development to 
          advanced computer vision solutions. We help enterprises leverage AI to drive innovation, 
          improve efficiency, and gain competitive advantages.
        </p>
        
        {/* Contact CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="tel:+13024640950"
            className="cyber-button flex items-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call: (302) 464-0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="cyber-button flex items-center"
            style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
          >
            <Mail className="w-5 h-5 mr-2" />
            Email: kleber@ziontechgroup.com
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="cyber-card">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300">Accuracy Improvement</div>
            <div className="cyber-card">
              <div className="text-4xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="cyber-card">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="cyber-button">All Categories</button>
          {categories.map((category, index) => (
            <button key={index} className="cyber-button">
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
              {/* Service Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <span className="inline-block bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                <div className="text-sm text-gray-400">
                  Market Price: <span className="line-through">{service.marketPrice}</span>
                </div>
                <div className="text-green-400 text-sm font-medium">
                  Save up to 50% with Zion Tech Group
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={service.link}
                  className="w-full cyber-button text-center block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </a>
                <a
                  href={`mailto:${service.contact}?subject=Interest in ${service.title}`}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-center block transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Why Choose Zion Tech Group for AI?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4">Expert AI Team</h3>
              <p className="text-gray-300">
                Our team of PhD-level AI researchers and engineers with 10+ years of experience in machine learning and AI.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Get your AI solutions deployed in 2-4 weeks with our proven development and deployment process.
              </p>
            </div>
            
            <div className="cyber-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security and compliance for all AI models and data processing with SOC 2 and GDPR compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card hologram-card text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your AI needs and get a custom solution designed for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free AI consultation and assessment</p>
            <p>✓ Custom AI solution development</p>
            <p>✓ 24/7 support and maintenance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;