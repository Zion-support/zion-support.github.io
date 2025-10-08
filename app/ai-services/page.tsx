import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Brain, Zap, Target, BarChart, MessageSquare, Eye, Cpu, Sparkles, ArrowRight, Phone, Mail } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // Core AI Services
    {
      title: 'Machine Learning Model Development',
      description: 'Custom ML models for predictive analytics, classification, and regression tasks tailored to your business needs.',
      icon: '🧠',
      price: 'Starting at $5,000/project',
      originalPrice: '$8,000/project',
      features: ['Custom model development', 'Data preprocessing', 'Model training & validation', 'Performance optimization', 'Deployment & monitoring'],
      benefits: ['Improve prediction accuracy by 40%', 'Automate decision making', 'Reduce manual analysis time'],
      marketPrice: '$8,000-25,000/project',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
      popular: true
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, chatbots, and language understanding.',
      icon: '💬',
      price: 'Starting at $3,500/project',
      originalPrice: '$6,000/project',
      features: ['Text classification', 'Sentiment analysis', 'Named entity recognition', 'Language translation', 'Chatbot development'],
      benefits: ['Process text data 100x faster', 'Improve customer service', 'Extract insights from documents'],
      marketPrice: '$6,000-18,000/project',
      category: 'NLP',
      technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers']
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis, object detection, facial recognition, and visual content understanding.',
      icon: '👁️',
      price: 'Starting at $4,500/project',
      originalPrice: '$7,500/project',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis', 'OCR & document scanning'],
      benefits: ['Automate visual inspections', 'Improve security systems', 'Enhance user experience'],
      marketPrice: '$7,500-20,000/project',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'TensorFlow Lite']
    },
    {
      title: 'AI-Powered Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      icon: '🤖',
      price: 'Starting at $2,500/month',
      originalPrice: '$4,000/month',
      features: ['Context-aware conversations', 'Multi-language support', 'Integration with CRM', 'Analytics & reporting', 'Voice capabilities'],
      benefits: ['Reduce support costs by 60%', 'Provide 24/7 customer service', 'Improve response time'],
      marketPrice: '$4,000-12,000/month',
      category: 'Conversational AI',
      technologies: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Amazon Lex', 'OpenAI GPT']
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'AI-driven forecasting models for sales, demand, risk assessment, and business intelligence.',
      icon: '📊',
      price: 'Starting at $3,000/month',
      originalPrice: '$5,000/month',
      features: ['Sales forecasting', 'Demand prediction', 'Risk assessment', 'Trend analysis', 'Real-time insights'],
      benefits: ['Improve accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$5,000-15,000/month',
      category: 'Analytics',
      technologies: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'Tableau']
    },
    {
      title: 'AI-Powered Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for business workflows.',
      icon: '📄',
      price: 'Starting at $2,000/month',
      originalPrice: '$3,500/month',
      features: ['Document classification', 'Data extraction', 'OCR processing', 'Workflow automation', 'Compliance checking'],
      benefits: ['Process documents 90% faster', 'Reduce errors by 80%', 'Automate manual tasks'],
      marketPrice: '$3,500-10,000/month',
      category: 'Document AI',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Python', 'React']
    },
    {
      title: 'AI-Powered Recommendation Systems',
      description: 'Personalized recommendation engines for e-commerce, content, and product suggestions.',
      icon: '🎯',
      price: 'Starting at $4,000/project',
      originalPrice: '$7,000/project',
      features: ['Collaborative filtering', 'Content-based filtering', 'Hybrid approaches', 'Real-time recommendations', 'A/B testing'],
      benefits: ['Increase sales by 25%', 'Improve user engagement', 'Reduce bounce rates'],
      marketPrice: '$7,000-20,000/project',
      category: 'Recommendation Systems',
      technologies: ['Apache Spark', 'TensorFlow', 'Scikit-learn', 'Redis', 'MongoDB']
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud detection systems using machine learning to identify suspicious activities.',
      icon: '🛡️',
      price: 'Starting at $5,500/month',
      originalPrice: '$9,000/month',
      features: ['Real-time monitoring', 'Anomaly detection', 'Risk scoring', 'Pattern recognition', 'Alert systems'],
      benefits: ['Reduce fraud by 70%', 'Save millions in losses', 'Improve security'],
      marketPrice: '$9,000-25,000/month',
      category: 'Security',
      technologies: ['Isolation Forest', 'One-Class SVM', 'Autoencoders', 'Python', 'Apache Kafka']
    },
    {
      title: 'AI-Powered Voice Recognition',
      description: 'Advanced speech-to-text and voice command systems for applications and devices.',
      icon: '🎤',
      price: 'Starting at $3,000/project',
      originalPrice: '$5,500/project',
      features: ['Speech-to-text', 'Voice commands', 'Multi-language support', 'Noise cancellation', 'Real-time processing'],
      benefits: ['Improve accessibility', 'Enhance user experience', 'Enable hands-free operation'],
      marketPrice: '$5,500-15,000/project',
      category: 'Speech AI',
      technologies: ['Whisper', 'Wav2Vec', 'DeepSpeech', 'Google Speech API', 'Azure Speech']
    },
    {
      title: 'AI-Powered Image Generation',
      description: 'Creative AI solutions for generating images, artwork, and visual content using advanced models.',
      icon: '🎨',
      price: 'Starting at $4,500/project',
      originalPrice: '$8,000/project',
      features: ['Text-to-image generation', 'Style transfer', 'Image enhancement', 'Custom model training', 'API integration'],
      benefits: ['Create unique visuals', 'Reduce design costs', 'Accelerate content creation'],
      marketPrice: '$8,000-20,000/project',
      category: 'Creative AI',
      technologies: ['DALL-E', 'Stable Diffusion', 'Midjourney API', 'PyTorch', 'OpenAI']
    },
    {
      title: 'AI-Powered Process Automation',
      description: 'Intelligent automation of business processes using AI to make decisions and handle exceptions.',
      icon: '⚙️',
      price: 'Starting at $3,500/month',
      originalPrice: '$6,000/month',
      features: ['Workflow automation', 'Decision making', 'Exception handling', 'Process optimization', 'Monitoring'],
      benefits: ['Reduce manual work by 80%', 'Improve efficiency', 'Eliminate human errors'],
      marketPrice: '$6,000-18,000/month',
      category: 'Process Automation',
      technologies: ['RPA', 'Machine Learning', 'Python', 'UiPath', 'Automation Anywhere']
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Automated testing and quality assurance using AI to identify bugs and performance issues.',
      icon: '🔍',
      price: 'Starting at $2,500/month',
      originalPrice: '$4,500/month',
      features: ['Automated testing', 'Bug detection', 'Performance monitoring', 'Code analysis', 'Test generation'],
      benefits: ['Reduce testing time by 60%', 'Improve code quality', 'Catch bugs early'],
      marketPrice: '$4,500-12,000/month',
      category: 'Quality Assurance',
      technologies: ['Selenium', 'Appium', 'Machine Learning', 'Python', 'Jenkins']
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and logistics optimization.',
      icon: '🚚',
      price: 'Starting at $6,000/month',
      originalPrice: '$10,000/month',
      features: ['Demand forecasting', 'Inventory optimization', 'Route planning', 'Supplier management', 'Risk assessment'],
      benefits: ['Reduce costs by 30%', 'Improve delivery times', 'Optimize inventory levels'],
      marketPrice: '$10,000-30,000/month',
      category: 'Supply Chain',
      technologies: ['Linear Programming', 'Genetic Algorithms', 'Python', 'Gurobi', 'CPLEX']
    },
    {
      title: 'AI-Powered Customer Analytics',
      description: 'Deep customer insights and behavior analysis using AI to improve customer experience.',
      icon: '👥',
      price: 'Starting at $3,000/month',
      originalPrice: '$5,500/month',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Personalization'],
      benefits: ['Increase customer retention', 'Improve satisfaction', 'Boost revenue'],
      marketPrice: '$5,500-16,000/month',
      category: 'Customer Analytics',
      technologies: ['Clustering', 'Classification', 'Python', 'Tableau', 'Power BI']
    },
    {
      title: 'AI-Powered Financial Analysis',
      description: 'Advanced financial modeling and analysis using AI for investment decisions and risk management.',
      icon: '💰',
      price: 'Starting at $5,000/month',
      originalPrice: '$8,500/month',
      features: ['Portfolio optimization', 'Risk assessment', 'Market analysis', 'Algorithmic trading', 'Fraud detection'],
      benefits: ['Improve investment returns', 'Reduce risk', 'Automate trading'],
      marketPrice: '$8,500-25,000/month',
      category: 'Financial AI',
      technologies: ['QuantLib', 'Zipline', 'Backtrader', 'Python', 'R']
    },
    {
      title: 'AI-Powered Healthcare Solutions',
      description: 'Medical AI solutions for diagnosis, treatment planning, and patient care optimization.',
      icon: '🏥',
      price: 'Starting at $8,000/month',
      originalPrice: '$15,000/month',
      features: ['Medical imaging analysis', 'Diagnosis assistance', 'Treatment planning', 'Drug discovery', 'Patient monitoring'],
      benefits: ['Improve diagnosis accuracy', 'Reduce treatment time', 'Save lives'],
      marketPrice: '$15,000-50,000/month',
      category: 'Healthcare AI',
      technologies: ['Medical Imaging', 'Deep Learning', 'Python', 'DICOM', 'HL7']
    },
    {
      title: 'AI-Powered Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-driven personalization and optimization.',
      icon: '📢',
      price: 'Starting at $2,500/month',
      originalPrice: '$4,500/month',
      features: ['Campaign optimization', 'Audience targeting', 'Content personalization', 'A/B testing', 'Performance analytics'],
      benefits: ['Increase ROI by 40%', 'Improve conversion rates', 'Automate marketing'],
      marketPrice: '$4,500-12,000/month',
      category: 'Marketing AI',
      technologies: ['Machine Learning', 'Python', 'Marketing APIs', 'React', 'Node.js']
    },
    {
      title: 'AI-Powered HR Solutions',
      description: 'Intelligent HR tools for recruitment, employee management, and performance analysis.',
      icon: '👔',
      price: 'Starting at $3,500/month',
      originalPrice: '$6,500/month',
      features: ['Resume screening', 'Candidate matching', 'Performance analysis', 'Employee engagement', 'Predictive analytics'],
      benefits: ['Improve hiring quality', 'Reduce bias', 'Optimize workforce'],
      marketPrice: '$6,500-18,000/month',
      category: 'HR AI',
      technologies: ['NLP', 'Machine Learning', 'Python', 'HR APIs', 'React']
    },
    {
      title: 'AI-Powered Legal Tech',
      description: 'Legal AI solutions for document analysis, contract review, and legal research automation.',
      icon: '⚖️',
      price: 'Starting at $4,500/month',
      originalPrice: '$8,000/month',
      features: ['Contract analysis', 'Legal research', 'Document review', 'Compliance checking', 'Risk assessment'],
      benefits: ['Reduce legal costs', 'Improve accuracy', 'Speed up processes'],
      marketPrice: '$8,000-25,000/month',
      category: 'Legal AI',
      technologies: ['NLP', 'Machine Learning', 'Python', 'Legal APIs', 'React']
    },
    {
      title: 'AI-Powered Real Estate Analytics',
      description: 'Property analysis and market insights using AI for investment and valuation decisions.',
      icon: '🏠',
      price: 'Starting at $3,000/month',
      originalPrice: '$5,500/month',
      features: ['Property valuation', 'Market analysis', 'Investment scoring', 'Price prediction', 'Location insights'],
      benefits: ['Make better investments', 'Reduce risk', 'Optimize portfolio'],
      marketPrice: '$5,500-16,000/month',
      category: 'Real Estate AI',
      technologies: ['Machine Learning', 'Python', 'Real Estate APIs', 'React', 'PostgreSQL']
    }
  ];

  const categories = [
    { name: 'All Services', count: aiServices.length },
    { name: 'Machine Learning', count: aiServices.filter(s => s.category === 'Machine Learning').length },
    { name: 'NLP', count: aiServices.filter(s => s.category === 'NLP').length },
    { name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
    { name: 'Document AI', count: aiServices.filter(s => s.category === 'Document AI').length },
    { name: 'Security', count: aiServices.filter(s => s.category === 'Security').length },
    { name: 'Process Automation', count: aiServices.filter(s => s.category === 'Process Automation').length },
    { name: 'Healthcare AI', count: aiServices.filter(s => s.category === 'Healthcare AI').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, NLP, computer vision, and more. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="ai services, machine learning, nlp, computer vision, artificial intelligence, ai consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver enterprise-grade AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20+</div>
                <div className="text-blue-100">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-blue-100">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500">Market price: {service.marketPrice}</div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group for AI?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver enterprise-grade AI solutions with unmatched expertise and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Expertise</h3>
              <p className="text-gray-600">10+ years of experience in cutting-edge AI technologies and methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Quick implementation with proven methodologies and best practices</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored AI solutions designed specifically for your business needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of delivering measurable business value and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven methodology for delivering successful AI projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Analysis</h3>
              <p className="text-gray-600">Understand your business needs and data requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Preparation</h3>
              <p className="text-gray-600">Clean, process, and prepare your data for AI model training</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Model Development</h3>
              <p className="text-gray-600">Build, train, and optimize AI models for your specific use case</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment & Support</h3>
              <p className="text-gray-600">Deploy your AI solution and provide ongoing support and monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how AI can solve your business challenges and drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Available 24/7 for consultations and support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;