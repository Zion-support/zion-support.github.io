import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog } from 'lucide-react';
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
        'Unlimited conversations'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform powered by AI to analyze data and provide actionable insights.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Data visualization',
        'API integrations'
      ],
      pricing: '$149/month',
      popular: false,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management system that automates responses, schedules emails, and optimizes communication workflows.',
      features: [
        'Smart email drafting',
        'Auto-scheduling',
        'Priority management',
        'Template library',
        'Sentiment analysis',
        'Follow-up automation'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Advanced voice recognition and natural language processing for hands-free business operations and customer interactions.',
      features: [
        'Voice commands',
        'Multi-language support',
        'Custom wake words',
        'Integration APIs',
        'Real-time transcription',
        'Voice analytics'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cog className="w-12 h-12 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Complete automation platform that streamlines business processes using AI-powered workflows and intelligent task management.',
      features: [
        'Workflow automation',
        'Task scheduling',
        'Process optimization',
        'Error handling',
        'Performance monitoring',
        'Custom triggers'
      ],
      pricing: '$199/month',
      popular: false,
      link: '/ai-automation'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'AI Support' },
    { number: '50+', label: 'Enterprise Clients' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered solutions including content generation, chatbots, analytics, and automation for modern businesses." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our AI Services</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-gray-900">{service.pricing}</div>
                    <Link 
                      to={service.link}
                      className="text-purple-600 hover:text-purple-700 font-semibold flex items-center group-hover:translate-x-1 transition-transform"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI solutions can accelerate your digital transformation and drive measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Your AI Journey
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Our Process
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;