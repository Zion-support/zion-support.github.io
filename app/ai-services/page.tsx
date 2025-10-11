import React from 'react';
import { CheckCircle, ArrowRight, Brain, Bot, Eye, BarChart3, Shield, Zap, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'Machine Learning Models',
      description: 'Custom ML models tailored to your specific business needs and data patterns.',
      features: [
        'Predictive Analytics',
        'Pattern Recognition',
        'Anomaly Detection',
        'Recommendation Systems',
        'Model Training & Optimization',
        'Real-time Inference'
      ],
      link: '/ai-services/machine-learning'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      features: [
        'Text Classification',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Summarization',
        'Chatbot Development'
      ],
      link: '/ai-services/nlp'
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and processing.',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'OCR (Optical Character Recognition)',
        'Video Analytics',
        'Medical Imaging'
      ],
      link: '/ai-services/computer-vision'
    },
    {
      icon: <Bot className="w-12 h-12 text-yellow-500" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI solutions for customer service and automation.',
      features: [
        'Multi-channel Support',
        'Context Awareness',
        'Voice Integration',
        'Multi-language Support',
        'Integration APIs',
        'Analytics & Reporting'
      ],
      link: '/ai-services/chatbots'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-red-500" />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting to help you make informed business decisions.',
      features: [
        'Demand Forecasting',
        'Risk Assessment',
        'Customer Lifetime Value',
        'Churn Prediction',
        'Market Analysis',
        'Performance Optimization'
      ],
      link: '/ai-services/predictive-analytics'
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline workflows and reduce manual effort.',
      features: [
        'Workflow Automation',
        'Document Processing',
        'Data Entry Automation',
        'Email Automation',
        'Task Scheduling',
        'Quality Control'
      ],
      link: '/ai-services/automation'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, drug discovery, and patient care optimization.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, algorithmic trading, and risk management solutions.',
      icon: '🏦'
    },
    {
      name: 'E-commerce',
      description: 'Personalized recommendations, inventory optimization, and customer insights.',
      icon: '🛒'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    },
    {
      name: 'Education',
      description: 'Personalized learning, automated grading, and student performance analytics.',
      icon: '🎓'
    },
    {
      name: 'Transportation',
      description: 'Autonomous vehicles, route optimization, and traffic management.',
      icon: '🚗'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems, data, and business objectives to identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'We create a comprehensive AI strategy tailored to your specific needs and goals.'
    },
    {
      step: '03',
      title: 'Data Preparation',
      description: 'We clean, process, and prepare your data for AI model training and deployment.'
    },
    {
      step: '04',
      title: 'Model Development',
      description: 'We develop and train custom AI models using state-of-the-art algorithms and techniques.'
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'We thoroughly test and validate the AI solution to ensure accuracy and reliability.'
    },
    {
      step: '06',
      title: 'Deployment & Monitoring',
      description: 'We deploy the solution and provide ongoing monitoring and optimization services.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to improve productivity and reduce costs.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Better Customer Experience',
      description: 'Deliver personalized experiences and faster response times to your customers.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights from your data to make informed business decisions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Implement AI-powered security solutions to protect against threats and fraud.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, chatbots, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, chatbots, automation, artificial intelligence" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, improve efficiency, and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive artificial intelligence solutions designed to meet your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions are tailored for various industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A systematic approach to delivering successful AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your business with our proven AI expertise and cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Implement AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get AI Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;