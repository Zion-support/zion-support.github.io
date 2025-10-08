import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, MessageCircle, Eye, TrendingUp, Bot, Lightbulb, Smartphone, MapPin, Mail, Clock, Users, Shield, Code, Database } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Custom AI Model Development',
      description: 'Bespoke AI models tailored to your specific business needs and use cases.',
      icon: <Brain className="w-12 h-12 text-pink-600" />,
      features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'API Integration', 'Performance Monitoring', 'Continuous Learning'],
      price: 'Starting at $5,000/project',
      category: 'Custom Development',
      benefits: ['95% accuracy', 'Custom solutions', 'Scalable architecture'],
      popular: true,
      timeline: '4-8 weeks',
      complexity: 'High'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding.',
      icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
      features: ['Text Analysis', 'Sentiment Detection', 'Language Translation', 'Chatbot Development', 'Content Generation', 'Voice Processing'],
      price: 'Starting at $3,500/month',
      category: 'Language AI',
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing'],
      popular: true,
      timeline: '2-4 weeks',
      complexity: 'Medium'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, recognition, and processing.',
      icon: <Eye className="w-12 h-12 text-green-600" />,
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Quality Control', 'Facial Recognition', 'Medical Imaging'],
      price: 'Starting at $4,000/month',
      category: 'Vision AI',
      benefits: ['98% accuracy', 'Real-time processing', 'Quality improvement'],
      popular: false,
      timeline: '3-6 weeks',
      complexity: 'High'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced predictive modeling for forecasting, risk assessment, and decision support.',
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      features: ['Forecasting Models', 'Risk Assessment', 'Anomaly Detection', 'Decision Support', 'Real-time Alerts', 'Custom Dashboards'],
      price: 'Starting at $2,800/month',
      category: 'Analytics',
      benefits: ['85% prediction accuracy', 'Risk reduction', 'Data-driven decisions'],
      popular: true,
      timeline: '2-3 weeks',
      complexity: 'Medium'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent automation solutions that learn and adapt to optimize business processes.',
      icon: <Bot className="w-12 h-12 text-orange-600" />,
      features: ['Process Automation', 'Workflow Optimization', 'Learning Algorithms', 'Adaptive Systems', 'RPA Integration', 'Smart Scheduling'],
      price: 'Starting at $3,200/month',
      category: 'Automation',
      benefits: ['70% efficiency gain', 'Cost reduction', 'Error elimination'],
      popular: false,
      timeline: '3-5 weeks',
      complexity: 'Medium'
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI consulting to identify opportunities and develop implementation roadmaps.',
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'Training Programs', 'ROI Analysis', 'Change Management'],
      price: 'Starting at $500/hour',
      category: 'Consulting',
      benefits: ['Strategic guidance', 'Technology expertise', 'Implementation support'],
      popular: false,
      timeline: '1-2 weeks',
      complexity: 'Low'
    },
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI for customer service, sales, and support automation.',
      icon: <MessageCircle className="w-12 h-12 text-cyan-600" />,
      features: ['Natural Conversations', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Voice Interface', 'Custom Training'],
      price: 'Starting at $1,500/month',
      category: 'Conversational AI',
      benefits: ['24/7 availability', 'Instant responses', 'Cost savings'],
      popular: true,
      timeline: '1-2 weeks',
      complexity: 'Low'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analysis and insights using machine learning and AI algorithms.',
      icon: <Database className="w-12 h-12 text-indigo-600" />,
      features: ['Data Mining', 'Pattern Recognition', 'Statistical Analysis', 'Visualization', 'Real-time Processing', 'Custom Reports'],
      price: 'Starting at $2,200/month',
      category: 'Data Science',
      benefits: ['Deep insights', 'Automated analysis', 'Predictive capabilities'],
      popular: false,
      timeline: '2-4 weeks',
      complexity: 'Medium'
    },
    {
      title: 'AI Security Solutions',
      description: 'Intelligent security systems with threat detection, fraud prevention, and risk assessment.',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      features: ['Threat Detection', 'Fraud Prevention', 'Risk Assessment', 'Behavioral Analysis', 'Real-time Monitoring', 'Incident Response'],
      price: 'Starting at $3,800/month',
      category: 'Security AI',
      benefits: ['99.9% threat detection', 'Real-time protection', 'Reduced false positives'],
      popular: false,
      timeline: '4-6 weeks',
      complexity: 'High'
    }
  ];

  const categories = ['All', 'Custom Development', 'Language AI', 'Vision AI', 'Analytics', 'Automation', 'Consulting', 'Conversational AI', 'Data Science', 'Security AI'];

  const useCases = [
    {
      industry: 'Healthcare',
      title: 'Medical Image Analysis',
      description: 'AI-powered diagnosis assistance and medical imaging analysis',
      icon: '🏥',
      benefits: ['95% diagnostic accuracy', '50% faster diagnosis', 'Reduced human error']
    },
    {
      industry: 'Finance',
      title: 'Fraud Detection',
      description: 'Real-time fraud detection and risk assessment systems',
      icon: '💳',
      benefits: ['99.9% fraud detection', 'Real-time alerts', 'Millions saved']
    },
    {
      industry: 'Retail',
      title: 'Customer Personalization',
      description: 'AI-driven product recommendations and customer experience optimization',
      icon: '🛍️',
      benefits: ['40% conversion increase', 'Personalized experiences', 'Higher customer satisfaction']
    },
    {
      industry: 'Manufacturing',
      title: 'Quality Control',
      description: 'Automated quality inspection and defect detection systems',
      icon: '🏭',
      benefits: ['99.5% accuracy', 'Zero defects shipped', '50% cost reduction']
    },
    {
      industry: 'Education',
      title: 'Personalized Learning',
      description: 'AI-powered adaptive learning and student performance optimization',
      icon: '🎓',
      benefits: ['30% better outcomes', 'Personalized curriculum', 'Real-time feedback']
    },
    {
      industry: 'Transportation',
      title: 'Autonomous Systems',
      description: 'AI-powered autonomous vehicles and traffic optimization',
      icon: '🚗',
      benefits: ['90% accident reduction', 'Traffic optimization', 'Fuel efficiency']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Cutting-edge artificial intelligence solutions to automate, optimize, and transform your business
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to solve complex business challenges, 
              automate processes, and gain competitive advantages with our comprehensive AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start AI Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-purple-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Capabilities Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions span across multiple domains, from natural language processing to computer vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Custom models and algorithms for your specific needs</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Language</h3>
              <p className="text-gray-600">Text analysis, translation, and conversational AI</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-600">Image and video analysis with high accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Bot className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automation</h3>
              <p className="text-gray-600">Intelligent process automation and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  category === 'All' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business requirements and industry needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border-2 ${
                service.popular ? 'border-purple-500' : 'border-gray-100'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <div className="ml-4">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-purple-500" />
                    <span>Timeline: {service.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-orange-500" />
                    <span>Complexity: {service.complexity}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Get Quote
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how AI is transforming industries and solving real-world problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="text-sm font-semibold text-purple-600 mb-3">{useCase.industry}</div>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real business value. 
            Get a free AI consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;