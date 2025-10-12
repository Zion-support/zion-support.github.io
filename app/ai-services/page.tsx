import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog, Cpu, Database, Code, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy using GPT-4 and Claude models.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization with keyword research',
        'Multi-language support (25+ languages)',
        'Brand voice customization',
        'Plagiarism detection and originality scoring',
        'Content calendar integration',
        'Team collaboration features'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-generator',
      category: 'Content Creation',
      marketPrice: '$49-99/month',
      setupTime: '5 minutes'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP, sentiment analysis, and multi-channel deployment capabilities.',
      features: [
        'Visual chatbot builder with drag-and-drop',
        'Multi-channel deployment (Web, WhatsApp, Facebook)',
        'Advanced analytics and conversation insights',
        'Custom integrations with 100+ tools',
        '24/7 monitoring and performance tracking',
        'A/B testing tools for optimization',
        'Voice and text support',
        'Custom AI model training'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-chatbot-builder',
      category: 'Customer Service',
      marketPrice: '$79-199/month',
      setupTime: '1-2 weeks'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, automated reporting, and real-time data visualization.',
      features: [
        'Real-time data visualization',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Custom dashboards and widgets',
        'Data integration from 200+ sources',
        'Mobile app with push notifications',
        'Natural language querying',
        'Anomaly detection and alerts'
      ],
      pricing: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard',
      category: 'Business Intelligence',
      marketPrice: '$149-399/month',
      setupTime: '2-3 weeks'
    },
    {
      icon: <Cog className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management tool that drafts, schedules, and optimizes emails using AI to improve open rates, engagement, and response times.',
      features: [
        'Smart email drafting with tone adjustment',
        'Send time optimization based on recipient behavior',
        'Subject line A/B testing',
        'Email templates library (500+ templates)',
        'Performance analytics and insights',
        'CRM integration (Salesforce, HubSpot, Pipedrive)',
        'Follow-up automation',
        'Spam score optimization'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-email-assistant',
      category: 'Email Marketing',
      marketPrice: '$59-149/month',
      setupTime: '1 week'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant for businesses with natural language processing, voice commands, multi-language support, and integration capabilities.',
      features: [
        'Natural voice recognition (99% accuracy)',
        'Custom voice training for brand consistency',
        'Multi-language support (15+ languages)',
        'API integrations with major platforms',
        'Voice analytics and conversation insights',
        'Custom wake words and commands',
        'Text-to-speech with 50+ voices',
        'Real-time transcription'
      ],
      pricing: '$59/month',
      popular: false,
      link: '/ai-voice-assistant',
      category: 'Voice Technology',
      marketPrice: '$99-299/month',
      setupTime: '2-4 weeks'
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'AI Automation Suite',
      description: 'Complete workflow automation platform that uses AI to streamline business processes, reduce manual work, and optimize operations.',
      features: [
        'Workflow automation with visual builder',
        'Process optimization recommendations',
        'Smart task scheduling and prioritization',
        'Integration hub (500+ apps)',
        'Performance monitoring and analytics',
        'Custom triggers and conditions',
        'Error handling and recovery',
        'Scalable cloud infrastructure'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-automation',
      category: 'Process Automation',
      marketPrice: '$199-499/month',
      setupTime: '3-4 weeks'
    },
    {
      icon: <Eye className="w-12 h-12 text-indigo-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, quality control, and visual analytics using state-of-the-art AI models.',
      features: [
        'Image recognition and classification',
        'Object detection and tracking',
        'Facial recognition and analysis',
        'Quality control automation',
        'Real-time video analysis',
        'Custom model training',
        'API for easy integration',
        'High-accuracy results (95%+)'
      ],
      pricing: '$89/month',
      popular: false,
      link: '/ai-computer-vision',
      category: 'Computer Vision',
      marketPrice: '$199-599/month',
      setupTime: '2-3 weeks'
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-500" />,
      title: 'AI Data Processing',
      description: 'Intelligent data processing and analysis platform that automatically cleans, structures, and extracts insights from unstructured data.',
      features: [
        'Automated data cleaning and validation',
        'Unstructured data extraction',
        'Data quality scoring and improvement',
        'Pattern recognition and insights',
        'Real-time data processing',
        'Custom data models',
        'Integration with major databases',
        'Compliance and security features'
      ],
      pricing: '$69/month',
      popular: false,
      link: '/ai-data-processing',
      category: 'Data Processing',
      marketPrice: '$149-399/month',
      setupTime: '1-2 weeks'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock to serve your customers and optimize your operations without breaks or downtime.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Scalable Solutions',
      description: 'Easily scale your AI capabilities as your business grows without additional infrastructure or complex migrations.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs by automating tasks that would otherwise require human resources and expensive software.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Continuous Learning',
      description: 'AI models continuously improve and adapt to your specific business needs and data patterns over time.'
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '300%', label: 'Efficiency Increase' },
    { number: '24/7', label: 'Support Available' }
  ];

  const features = [
    {
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs with advanced ML algorithms.',
      features: ['Predictive Modeling', 'Pattern Recognition', 'Automated Learning', 'Real-time Adaptation'],
      applications: ['Fraud Detection', 'Customer Segmentation', 'Demand Forecasting', 'Quality Control']
    },
    {
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights and automated responses with state-of-the-art NLP.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      applications: ['Customer Support', 'Content Moderation', 'Document Processing', 'Voice Assistants']
    },
    {
      title: 'Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation and quality control.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Video Analysis'],
      applications: ['Quality Inspection', 'Security Monitoring', 'Medical Imaging', 'Autonomous Vehicles']
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions with high accuracy.',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Prediction', 'Scenario Planning'],
      applications: ['Financial Forecasting', 'Market Analysis', 'Supply Chain Optimization', 'Customer Lifetime Value']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, business intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Transform Your Business
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI services designed to address every aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Market Price</div>
                      <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Setup: {service.setupTime}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {service.category}
                    </span>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the cutting-edge AI technologies that power our solutions and drive business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Applications:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of AI with our proven track record and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already leveraging our AI services to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
