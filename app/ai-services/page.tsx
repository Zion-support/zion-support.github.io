import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Clock, Users, BarChart, Code, Mail, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Cloud, Lock, Settings, TrendingUp, Target, Lightbulb, MessageCircle, Search, Languages, Mic, Brain, Cpu, Eye, Ear, Hand, Bot, Sparkles, Rocket, Layers, Target as TargetIcon, PieChart, Activity, Zap as ZapIcon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      icon: Brain,
      price: '$2,500/month',
      originalPrice: '$5,000/month',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Model training & optimization',
        'Real-time predictions',
        'A/B testing framework',
        'Model monitoring & maintenance'
      ],
      popular: true,
      category: 'Core AI',
      color: 'from-blue-500 to-purple-600',
      capabilities: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Anomaly Detection',
        'Recommendation Systems',
        'Time Series Forecasting',
        'Classification & Regression'
      ]
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: MessageCircle,
      price: '$1,800/month',
      originalPrice: '$3,500/month',
      features: [
        'Text classification',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Chatbot development'
      ],
      popular: true,
      category: 'Language AI',
      color: 'from-green-500 to-emerald-600',
      capabilities: [
        'Text Analysis',
        'Sentiment Analysis',
        'Language Translation',
        'Text Summarization',
        'Chatbot Development',
        'Document Processing'
      ]
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence.',
      icon: Eye,
      price: '$2,200/month',
      originalPrice: '$4,500/month',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition',
        'OCR (Optical Character Recognition)',
        'Video analysis',
        'Medical imaging analysis'
      ],
      popular: false,
      category: 'Visual AI',
      color: 'from-red-500 to-pink-600',
      capabilities: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'OCR Processing',
        'Video Analysis',
        'Medical Imaging'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: Bot,
      price: '$1,500/month',
      originalPrice: '$3,000/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Data entry automation',
        'Exception handling',
        'Process optimization'
      ],
      popular: true,
      category: 'Automation',
      color: 'from-orange-500 to-yellow-600',
      capabilities: [
        'Workflow Automation',
        'Document Processing',
        'Email Automation',
        'Data Entry',
        'Exception Handling',
        'Process Optimization'
      ]
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics platform with AI-driven insights and predictive modeling.',
      icon: BarChart,
      price: '$2,000/month',
      originalPrice: '$4,000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Anomaly detection',
        'Trend analysis',
        'Custom reporting',
        'Data visualization'
      ],
      popular: false,
      category: 'Analytics',
      color: 'from-indigo-500 to-purple-600',
      capabilities: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Anomaly Detection',
        'Trend Analysis',
        'Custom Reporting',
        'Data Visualization'
      ]
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Revolutionary content creation platform powered by advanced AI models.',
      icon: FileText,
      price: '$1,200/month',
      originalPrice: '$2,500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing',
        'Product descriptions',
        'SEO optimization',
        'Multi-language support'
      ],
      popular: true,
      category: 'Content AI',
      color: 'from-pink-500 to-rose-600',
      capabilities: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing',
        'Product Descriptions',
        'SEO Optimization',
        'Multi-language Support'
      ]
    },
    {
      id: 'ai-customer-service',
      title: 'AI Customer Service',
      description: 'Intelligent customer service solutions with chatbots and automated support.',
      icon: Headphones,
      price: '$1,600/month',
      originalPrice: '$3,200/month',
      features: [
        'Intelligent chatbots',
        'Voice recognition',
        'Multi-language support',
        'Sentiment analysis',
        'Ticket routing',
        'Performance analytics'
      ],
      popular: false,
      category: 'Customer Service',
      color: 'from-cyan-500 to-blue-600',
      capabilities: [
        'Intelligent Chatbots',
        'Voice Recognition',
        'Multi-language Support',
        'Sentiment Analysis',
        'Ticket Routing',
        'Performance Analytics'
      ]
    },
    {
      id: 'ai-fraud-detection',
      title: 'AI Fraud Detection',
      description: 'Advanced fraud detection and prevention using machine learning algorithms.',
      icon: Shield,
      price: '$2,800/month',
      originalPrice: '$5,500/month',
      features: [
        'Real-time fraud detection',
        'Pattern recognition',
        'Risk scoring',
        'Transaction monitoring',
        'Alert systems',
        'Compliance reporting'
      ],
      popular: true,
      category: 'Security AI',
      color: 'from-red-600 to-red-800',
      capabilities: [
        'Real-time Detection',
        'Pattern Recognition',
        'Risk Scoring',
        'Transaction Monitoring',
        'Alert Systems',
        'Compliance Reporting'
      ]
    },
    {
      id: 'ai-recommendation-engine',
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce and content platforms.',
      icon: Target,
      price: '$1,900/month',
      originalPrice: '$3,800/month',
      features: [
        'Personalized recommendations',
        'Collaborative filtering',
        'Content-based filtering',
        'Real-time updates',
        'A/B testing',
        'Performance metrics'
      ],
      popular: false,
      category: 'Recommendation',
      color: 'from-purple-500 to-indigo-600',
      capabilities: [
        'Personalized Recommendations',
        'Collaborative Filtering',
        'Content-based Filtering',
        'Real-time Updates',
        'A/B Testing',
        'Performance Metrics'
      ]
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Custom ML models for your specific business needs',
      icon: Brain,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text analysis and language understanding',
      icon: MessageCircle,
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis with AI intelligence',
      icon: Eye,
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR Processing']
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation and optimization',
      icon: Bot,
      features: ['Workflow Automation', 'Document Processing', 'Email Automation', 'Process Optimization']
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '500+', icon: Brain },
    { label: 'Accuracy Rate', value: '99.2%', icon: Target },
    { label: 'Processing Speed', value: '10x Faster', icon: Zap },
    { label: 'Cost Reduction', value: '60%', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that works.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Consultation
            </a>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <capability.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={service.id} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-center text-sm text-gray-400">per month</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center inline-block"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to deployment, we follow a proven methodology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery & Analysis</h3>
              <p className="text-gray-300">We analyze your business needs and data to design the perfect AI solution.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Model Development</h3>
              <p className="text-gray-300">Our AI experts develop and train custom models for your specific use case.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Testing & Optimization</h3>
              <p className="text-gray-300">Rigorous testing and optimization to ensure peak performance and accuracy.</p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deployment & Support</h3>
              <p className="text-gray-300">Seamless deployment with ongoing monitoring and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who have already transformed their business with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
