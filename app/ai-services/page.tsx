import React from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Database, Code, Smartphone, Cpu } from 'lucide-react';
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
        'Mobile app support'
      ],
      pricing: '$79/month',
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Code className="w-12 h-12 text-orange-500" />,
      title: 'AI Code Assistant',
      description: 'Intelligent coding companion that helps developers write better code faster with AI-powered suggestions and automation.',
      features: [
        'Code completion',
        'Bug detection',
        'Refactoring suggestions',
        'Documentation generation',
        'Multi-language support',
        'IDE integration'
      ],
      pricing: '$39/month',
      popular: false,
      link: '/ai-code-assistant'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      title: 'AI Mobile App Builder',
      description: 'Build native mobile applications with AI assistance, featuring automated UI generation and smart testing.',
      features: [
        'Visual app builder',
        'AI-generated UI',
        'Cross-platform support',
        'Automated testing',
        'App store deployment',
        'Analytics integration'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-mobile-builder'
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      title: 'AI Automation Suite',
      description: 'Complete automation platform that streamlines business processes with intelligent workflow management.',
      features: [
        'Workflow automation',
        'Task scheduling',
        'Integration hub',
        'Performance monitoring',
        'Custom triggers',
        'Scalable infrastructure'
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
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI chatbots" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI-Powered Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence solutions designed to automate, optimize, and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
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

            {/* AI Services Grid */}
            <div className="mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Our AI Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-white/10 rounded-xl">
                        {service.icon}
                      </div>
                      {service.popular && (
                        <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-white">{service.pricing}</span>
                      <Link
                        to={service.link}
                        className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI services to automate processes, 
                improve efficiency, and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/micro-saas-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
                </Link>
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