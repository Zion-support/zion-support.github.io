import React from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Database, Code, Smartphone, Cpu, Eye, MessageSquare, BarChart3, Shield, Cloud, Wifi } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy with human-like quality.',
      features: [
        'Generate 50,000+ words daily',
        '100+ content templates',
        'SEO optimization with keyword research',
        'Multi-language support (50+ languages)',
        'Brand voice customization',
        'Plagiarism detection & originality scoring',
        'Content performance analytics',
        'Team collaboration tools'
      ],
      pricing: '$49/month',
      marketPrice: '$75-120/month',
      popular: true,
      link: '/ai-content-generator',
      benefits: ['Increase content output by 500%', 'Reduce content costs by 70%', 'Improve SEO rankings by 40%']
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP, machine learning, and conversational AI capabilities.',
      features: [
        'Visual no-code chatbot builder',
        'Multi-channel deployment (web, mobile, social)',
        'Advanced NLP & sentiment analysis',
        'Custom integrations (CRM, ERP, APIs)',
        '24/7 monitoring & analytics',
        'A/B testing & optimization',
        'Voice & text capabilities',
        'Multi-language support'
      ],
      pricing: '$79/month',
      marketPrice: '$120-200/month',
      popular: false,
      link: '/ai-chatbot-builder',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 90%', 'Increase customer satisfaction by 35%']
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard Pro',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, automated reporting, and real-time decision making.',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Automated report generation',
        'Custom interactive dashboards',
        'Data integration from 200+ sources',
        'Mobile & desktop apps',
        'Natural language queries',
        'Anomaly detection & alerts'
      ],
      pricing: '$99/month',
      marketPrice: '$150-300/month',
      popular: true,
      link: '/ai-analytics-dashboard',
      benefits: ['Make data-driven decisions 3x faster', 'Identify trends 2 weeks earlier', 'Reduce reporting time by 80%']
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Marketing Suite',
      description: 'Comprehensive email marketing platform with AI-powered personalization, automation, and optimization to maximize engagement and conversions.',
      features: [
        'AI-powered email personalization',
        'Send time optimization',
        'Subject line & content testing',
        'Advanced segmentation',
        'Performance analytics & insights',
        'CRM & e-commerce integration',
        'A/B testing automation',
        'Deliverability optimization'
      ],
      pricing: '$59/month',
      marketPrice: '$90-150/month',
      popular: false,
      link: '/ai-email-assistant',
      benefits: ['Increase open rates by 45%', 'Boost click-through rates by 60%', 'Reduce unsubscribe rates by 30%']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant Pro',
      description: 'Enterprise-grade voice assistant with natural language processing, custom voice training, and seamless integration across all business systems.',
      features: [
        'Natural voice recognition (99% accuracy)',
        'Custom voice training & branding',
        'Multi-language support (30+ languages)',
        'API integrations (100+ services)',
        'Voice analytics & insights',
        'Custom wake words & commands',
        'Offline capability',
        'Team collaboration features'
      ],
      pricing: '$89/month',
      marketPrice: '$140-250/month',
      popular: false,
      link: '/ai-voice-assistant',
      benefits: ['Improve accessibility by 80%', 'Reduce manual tasks by 50%', 'Enhance user experience significantly']
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'AI Automation Suite Enterprise',
      description: 'Complete workflow automation platform that uses AI to streamline business processes, reduce manual work, and optimize operations across departments.',
      features: [
        'Visual workflow automation',
        'AI-powered process optimization',
        'Smart task scheduling & routing',
        'Integration hub (500+ apps)',
        'Performance monitoring & analytics',
        'Custom triggers & conditions',
        'Error handling & recovery',
        'Scalable cloud infrastructure'
      ],
      pricing: '$149/month',
      marketPrice: '$250-400/month',
      popular: true,
      link: '/ai-automation',
      benefits: ['Reduce manual work by 70%', 'Improve process efficiency by 85%', 'Save 20+ hours per week']
    },
    {
      icon: <Eye className="w-12 h-12 text-cyan-500" />,
      title: 'AI Computer Vision Platform',
      description: 'Advanced computer vision platform for image recognition, object detection, facial recognition, and automated visual content analysis.',
      features: [
        'Object detection & classification',
        'Facial recognition & analysis',
        'OCR & text extraction',
        'Image quality assessment',
        'Real-time video processing',
        'Custom model training',
        'API & SDK integration',
        'Batch processing capabilities'
      ],
      pricing: '$119/month',
      marketPrice: '$180-300/month',
      popular: true,
      link: '/ai-computer-vision',
      benefits: ['Automate visual tasks 10x faster', 'Improve accuracy by 95%', 'Reduce manual inspection costs by 80%']
    },
    {
      icon: <Shield className="w-12 h-12 text-indigo-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity platform with threat detection, automated response, and continuous security monitoring.',
      features: [
        'Real-time threat detection',
        'Automated incident response',
        'Behavioral analysis & anomaly detection',
        'Vulnerability assessment',
        'Security compliance monitoring',
        'Threat intelligence integration',
        'Automated patching & updates',
        '24/7 security operations center'
      ],
      pricing: '$199/month',
      marketPrice: '$350-600/month',
      popular: true,
      link: '/ai-cybersecurity',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce response time by 90%', 'Ensure compliance with regulations']
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-pink-500" />,
      title: 'AI Predictive Analytics Engine',
      description: 'Advanced predictive analytics platform that uses machine learning to forecast trends, customer behavior, and business outcomes.',
      features: [
        'Customer behavior prediction',
        'Sales forecasting & planning',
        'Risk assessment & management',
        'Demand forecasting',
        'Churn prediction & prevention',
        'Market trend analysis',
        'Custom model development',
        'Real-time predictions'
      ],
      pricing: '$129/month',
      marketPrice: '$200-350/month',
      popular: false,
      link: '/ai-predictive-analytics',
      benefits: ['Improve forecast accuracy by 60%', 'Reduce business risks by 40%', 'Increase revenue by 25%']
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-teal-500" />,
      title: 'AI Customer Intelligence',
      description: 'AI-powered customer intelligence platform that analyzes customer interactions, sentiment, and behavior to improve customer experience.',
      features: [
        'Sentiment analysis & monitoring',
        'Customer journey mapping',
        'Churn prediction & prevention',
        'Personalization recommendations',
        'Customer lifetime value prediction',
        'Multi-channel interaction analysis',
        'Real-time customer insights',
        'Automated customer segmentation'
      ],
      pricing: '$89/month',
      marketPrice: '$140-250/month',
      popular: true,
      link: '/ai-customer-intelligence',
      benefits: ['Increase customer satisfaction by 50%', 'Reduce churn by 35%', 'Improve customer lifetime value by 40%']
    },
    {
      icon: <Cloud className="w-12 h-12 text-violet-500" />,
      title: 'AI Cloud Optimization',
      description: 'Intelligent cloud resource optimization platform that automatically manages and optimizes cloud infrastructure for cost and performance.',
      features: [
        'Automated resource scaling',
        'Cost optimization recommendations',
        'Performance monitoring & tuning',
        'Security compliance checking',
        'Multi-cloud management',
        'Predictive scaling',
        'Cost forecasting',
        'Automated backup & recovery'
      ],
      pricing: '$159/month',
      marketPrice: '$250-450/month',
      popular: false,
      link: '/ai-cloud-optimization',
      benefits: ['Reduce cloud costs by 40%', 'Improve performance by 60%', 'Ensure 99.9% uptime']
    },
    {
      icon: <Wifi className="w-12 h-12 text-amber-500" />,
      title: 'AI IoT Management Platform',
      description: 'Comprehensive IoT management platform with AI-powered device monitoring, predictive maintenance, and automated optimization.',
      features: [
        'Device monitoring & management',
        'Predictive maintenance alerts',
        'Data collection & analysis',
        'Remote device control',
        'Security monitoring',
        'Performance optimization',
        'Fleet management',
        'Custom dashboard creation'
      ],
      pricing: '$179/month',
      marketPrice: '$300-500/month',
      popular: true,
      link: '/ai-iot-management',
      benefits: ['Reduce maintenance costs by 50%', 'Prevent 90% of device failures', 'Improve operational efficiency by 70%']
    }
  ];

  const stats = [
    { number: '10,000+', label: 'AI Models Trained' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'AI Services Available' },
    { number: '24/7', label: 'AI Support' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '300%', label: 'Efficiency Increase' }
  ];

  const features = [
    {
      title: 'Machine Learning',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language for better customer interactions.',
      icon: <MessageSquare className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Computer Vision',
      description: 'Analyze and interpret visual data for automated decision making.',
      icon: <Eye className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with AI insights.',
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics for modern businesses." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, business intelligence" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive AI services. From content generation to automation, 
              we provide cutting-edge artificial intelligence solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.pricing}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                    <span className="text-green-400 ml-2 font-semibold">Save up to 40%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Technology Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are built with cutting-edge technology to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our AI services and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;