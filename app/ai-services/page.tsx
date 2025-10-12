import React from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Database, Code, Smartphone, Cpu, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blogs, social media posts, and marketing copy.',
      features: [
        'Generate 10,000+ words daily',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection'
      ],
      pricing: '$29/month',
      popular: true,
      link: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer service, sales, and support with advanced NLP and machine learning capabilities.',
      features: [
        'Visual chatbot builder',
        'Multi-channel deployment',
        'Advanced analytics',
        'Custom integrations',
        '24/7 monitoring',
        'A/B testing tools'
      ],
      pricing: '$49/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and automated reporting.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Automated reports',
        'Custom dashboards',
        'Data integration',
        'Mobile app included'
      ],
      pricing: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management tool that drafts, schedules, and optimizes emails using AI to improve open rates and engagement.',
      features: [
        'Smart email drafting',
        'Send time optimization',
        'Subject line testing',
        'Email templates',
        'Performance analytics',
        'CRM integration'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant for businesses with natural language processing, voice commands, and integration capabilities.',
      features: [
        'Natural voice recognition',
        'Custom voice training',
        'Multi-language support',
        'API integrations',
        'Voice analytics',
        'Custom wake words'
      ],
      pricing: '$59/month',
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'AI Automation Suite',
      description: 'Complete workflow automation platform that uses AI to streamline business processes and reduce manual work.',
      features: [
        'Workflow automation',
        'Process optimization',
        'Task scheduling',
        'Integration hub',
        'Performance monitoring',
        'Custom triggers'
      ],
      pricing: '$99/month',
      popular: true,
      link: '/ai-automation'
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
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">
                    {service.pricing}
                  </span>
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