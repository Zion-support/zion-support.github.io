'use client';
import React from 'react';
import { Brain, MessageSquare, Eye, Zap, BarChart, Cube, Mic, FileText, TrendingUp, Target, Shield, Search, Stethoscope, DollarSign, Truck, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation. Transform your data into actionable insights.',
      icon: Brain,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring', 'A/B Testing', 'Performance Optimization', 'Real-time Inference', 'Model Versioning'],
      benefits: ['Better decision making', 'Automated processes', 'Predictive insights', 'Cost optimization'],
      color: 'text-purple-400',
      category: 'AI Development',
      trialDays: 30,
      setupFee: 0,
      integrations: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI. Build intelligent language applications.',
      icon: MessageSquare,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development', 'Named Entity Recognition', 'Text Summarization', 'Question Answering', 'Language Modeling'],
      benefits: ['Better customer service', 'Automated content analysis', 'Multilingual support', 'Improved communication'],
      color: 'text-blue-400',
      category: 'Language AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['OpenAI GPT', 'Google BERT', 'Hugging Face', 'SpaCy', 'NLTK', 'Transformers']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence. See the world through AI eyes.',
      icon: Eye,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'OCR Processing', 'Medical Imaging', 'Quality Inspection', 'Augmented Reality'],
      benefits: ['Automated quality control', 'Enhanced security', 'Medical diagnosis support', 'Visual search capabilities'],
      color: 'text-green-400',
      category: 'Visual AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['OpenCV', 'YOLO', 'ResNet', 'EfficientNet', 'Detectron2', 'MediaPipe']
    },
    {
      title: 'AI Automation Suite',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization. Automate complex business processes.',
      icon: Zap,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling', 'RPA Integration', 'Smart Routing', 'Cognitive Automation', 'Process Mining'],
      benefits: ['80% process automation', '60% cost reduction', 'Real-time monitoring', 'Error reduction'],
      color: 'text-cyan-400',
      category: 'Automation',
      trialDays: 30,
      setupFee: 0,
      integrations: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Zapier', 'Make']
    },
    {
      title: 'AI Data Intelligence',
      description: 'Transform complex data into interactive visualizations and actionable business insights. Make data-driven decisions with confidence.',
      icon: BarChart,
      price: '$1,100/month',
      originalPrice: '$2,200/month',
      features: ['Interactive Dashboards', 'Real-time Visualization', 'Custom Charts', 'Data Storytelling', 'Predictive Modeling', 'Anomaly Detection', 'Data Mining', 'Statistical Analysis'],
      benefits: ['Faster insights', 'Better decisions', 'Stunning presentations', 'Data democratization'],
      color: 'text-orange-400',
      category: 'Data Science',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Tableau', 'Power BI', 'Looker', 'Domo', 'Qlik', 'Sisense']
    },
    {
      title: 'AI 3D & AR Solutions',
      description: 'Create 3D models, environments, and augmented reality experiences with AI technology. Build immersive digital experiences.',
      icon: Cube,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['3D Model Generation', 'Texture Creation', 'Animation', 'VR/AR Support', 'Spatial Computing', 'Mixed Reality', 'Holographic Displays', 'Spatial Mapping'],
      benefits: ['Immersive experiences', 'Creative freedom', 'Cost-effective 3D content', 'Enhanced user engagement'],
      color: 'text-pink-400',
      category: 'Immersive Tech',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Unity', 'Unreal Engine', 'ARCore', 'ARKit', 'WebXR', 'OpenXR']
    },
    {
      title: 'AI Voice & Audio',
      description: 'Advanced voice cloning, text-to-speech, and audio processing solutions. Create natural-sounding voice applications.',
      icon: Mic,
      price: '$1,300/month',
      originalPrice: '$2,600/month',
      features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support', 'Audio Enhancement', 'Voice Biometrics', 'Speech Recognition', 'Audio Analysis'],
      benefits: ['Natural voice synthesis', 'Accessibility improvements', 'Multilingual support', 'Enhanced user experience'],
      color: 'text-indigo-400',
      category: 'Audio AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Amazon Polly', 'Google Cloud TTS', 'Azure Speech', 'IBM Watson', 'ElevenLabs', 'Resemble AI']
    },
    {
      title: 'AI Content Intelligence',
      description: 'Automated content creation, optimization, and management for marketing and communication. Scale your content production.',
      icon: FileText,
      price: '$1,000/month',
      originalPrice: '$2,000/month',
      features: ['Blog Writing', 'Social Media Content', 'Email Campaigns', 'SEO Optimization', 'Content Strategy', 'Brand Voice Training', 'Content Personalization', 'Multimedia Generation'],
      benefits: ['10x content output', 'SEO optimized', 'Brand voice consistency', 'Quality assurance'],
      color: 'text-yellow-400',
      category: 'Content AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Sprout Social']
    },
    {
      title: 'AI Predictive Analytics',
      description: 'Advanced forecasting, trend analysis, and predictive modeling with machine learning. Predict the future with confidence.',
      icon: TrendingUp,
      price: '$1,700/month',
      originalPrice: '$3,400/month',
      features: ['Sales Forecasting', 'Demand Prediction', 'Risk Assessment', 'Trend Analysis', 'Market Intelligence', 'Scenario Planning', 'Time Series Analysis', 'Ensemble Methods'],
      benefits: ['Better forecasting', 'Risk mitigation', 'Market insights', 'Strategic planning'],
      color: 'text-red-400',
      category: 'Predictive AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'LightGBM', 'CatBoost']
    },
    {
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and user experience. Increase engagement with smart recommendations.',
      icon: Target,
      price: '$1,400/month',
      originalPrice: '$2,800/month',
      features: ['Product Recommendations', 'Content Personalization', 'User Behavior Analysis', 'A/B Testing', 'Collaborative Filtering', 'Real-time Adaptation', 'Cold Start Handling', 'Multi-armed Bandits'],
      benefits: ['Higher engagement', 'Increased sales', 'Better user experience', 'Personalized content'],
      color: 'text-teal-400',
      category: 'Personalization',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Apache Spark', 'TensorFlow Recommenders', 'Amazon Personalize', 'Google Recommendations AI', 'Azure Personalizer', 'Recombee']
    },
    {
      title: 'AI Security & Fraud Detection',
      description: 'Advanced fraud prevention, security monitoring, and threat intelligence. Protect your business with AI-powered security.',
      icon: Shield,
      price: '$1,900/month',
      originalPrice: '$3,800/month',
      features: ['Real-time Detection', 'Pattern Recognition', 'Risk Scoring', 'Alert System', 'Threat Intelligence', 'Compliance Monitoring', 'Behavioral Analysis', 'Anomaly Detection'],
      benefits: ['Proactive protection', 'Faster response', 'Compliance assurance', 'Risk reduction'],
      color: 'text-red-500',
      category: 'Security AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Splunk', 'IBM QRadar', 'LogRhythm', 'Rapid7', 'Nessus', 'OpenVAS']
    },
    {
      title: 'AI Document Intelligence',
      description: 'Intelligent document analysis, data extraction, and automated processing. Digitize and understand your documents with AI.',
      icon: Search,
      price: '$1,200/month',
      originalPrice: '$2,400/month',
      features: ['OCR Processing', 'Data Extraction', 'Document Classification', 'Form Recognition', 'Contract Analysis', 'Knowledge Management', 'Document Understanding', 'Automated Indexing'],
      benefits: ['Faster document processing', 'Automated data extraction', 'Better organization', 'Reduced manual work'],
      color: 'text-gray-400',
      category: 'Document AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Google Cloud Document AI', 'Azure Form Recognizer', 'Amazon Textract', 'IBM Watson Discovery', 'Adobe Acrobat', 'ABBYY FineReader']
    },
    {
      title: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis, treatment planning, and healthcare optimization. Improve patient outcomes with intelligent healthcare solutions.',
      icon: Stethoscope,
      price: '$2,200/month',
      originalPrice: '$4,400/month',
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support', 'Medical Records Analysis', 'Predictive Health'],
      benefits: ['Better diagnosis', 'Improved treatment', 'Reduced errors', 'Enhanced patient care'],
      color: 'text-emerald-400',
      category: 'Healthcare AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Epic', 'Cerner', 'Allscripts', 'NextGen', 'eClinicalWorks', 'athenahealth']
    },
    {
      title: 'AI Financial Intelligence',
      description: 'Advanced financial analysis, trading algorithms, and risk management. Make smarter financial decisions with AI insights.',
      icon: DollarSign,
      price: '$1,800/month',
      originalPrice: '$3,600/month',
      features: ['Algorithmic Trading', 'Risk Assessment', 'Portfolio Optimization', 'Fraud Detection', 'Credit Scoring', 'Market Analysis', 'Regulatory Compliance', 'Financial Forecasting'],
      benefits: ['Better returns', 'Risk management', 'Tax savings', 'Financial security'],
      color: 'text-green-500',
      category: 'FinTech AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['Bloomberg', 'Refinitiv', 'FactSet', 'Morningstar', 'Yahoo Finance', 'Alpha Vantage']
    },
    {
      title: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management, logistics optimization, and demand forecasting. Optimize your supply chain with AI.',
      icon: Truck,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Supplier Management', 'Quality Control', 'Sustainability Tracking', 'Risk Management', 'Cost Optimization'],
      benefits: ['Reduced costs', 'Better inventory management', 'Improved efficiency', 'Sustainability insights'],
      color: 'text-blue-500',
      category: 'Supply Chain AI',
      trialDays: 30,
      setupFee: 0,
      integrations: ['SAP', 'Oracle', 'JDA', 'Manhattan Associates', 'Blue Yonder', 'Kinaxis']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 neural-network-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="cyber-text-3d text-5xl md:text-7xl font-bold mb-6">
              AI Solutions
            </h1>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Advanced artificial intelligence for enterprise transformation
            </p>
            <p className="text-gray-300 text-lg mb-12">
              Leverage the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Our AI Services
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Comprehensive AI solutions for every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.title}
                className="cyber-card p-8 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <service.icon className={`w-16 h-16 mx-auto mb-4 ${service.color}`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    {service.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays} days free trial • No setup fee
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={`/ai-services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full cyber-button py-3 text-center block font-semibold"
                  >
                    Learn More
                  </a>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full futuristic-glow py-3 text-center block font-semibold text-white"
                  >
                    Contact Sales
                  </a>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400 text-center">
                    Category: {service.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Solutions */}
      <section className="py-20 relative">
        <div className="cyber-scan-line"></div>
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="neon-text text-xl md:text-2xl mb-8">
                Proven expertise in artificial intelligence and machine learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert AI Team</h3>
                <p className="text-gray-300 text-sm">
                  Our team consists of PhD-level AI researchers and engineers with years of experience in machine learning and artificial intelligence.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-300 text-sm">
                  We use the latest AI frameworks, models, and technologies to deliver state-of-the-art solutions that give you a competitive edge.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  All our AI solutions are built with enterprise-grade security, compliance, and data protection standards.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300 text-sm">
                  Our AI solutions have helped businesses achieve 300% ROI, 70% cost reduction, and 90% efficiency gains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative">
        <div className="cyber-scan-effect"></div>
        <div className="container mx-auto px-4">
          <div className="cyber-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="cyber-text-3d text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="neon-text text-xl md:text-2xl mb-8">
              Get started with our AI solutions today
            </p>
            <p className="text-gray-300 text-lg mb-12">
              Contact us for a free consultation and discover how our cutting-edge AI technology 
              can revolutionize your business operations and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="futuristic-glow px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 text-white"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISolutionsPage;