import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Star, Eye, MessageSquare, BarChart3, Cog } from 'lucide-react';
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
        'Natural language processing',
        'Multi-channel deployment',
        'Analytics dashboard',
        'Custom integrations',
        '24/7 availability',
        'Sentiment analysis'
      ],
      pricing: '$99/month',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom visualizations',
        'Automated reporting',
        'Data integration',
        'Machine learning models'
      ],
      pricing: '$149/month',
      popular: false,
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate your email marketing with AI that personalizes content and optimizes send times.',
      features: [
        'Smart subject line generation',
        'Personalized content',
        'Send time optimization',
        'A/B testing automation',
        'Performance tracking',
        'List segmentation'
      ],
      pricing: '$79/month',
      popular: false,
      link: '/ai-email-assistant'
    },
    {
      icon: <Eye className="w-12 h-12 text-red-500" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants with natural language understanding and speech synthesis.',
      features: [
        'Voice recognition',
        'Text-to-speech',
        'Custom wake words',
        'Multi-language support',
        'API integration',
        'Cloud deployment'
      ],
      pricing: '$199/month',
      popular: false,
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cog className="w-12 h-12 text-cyan-500" />,
      title: 'AI Automation Suite',
      description: 'Complete automation solution that streamlines business processes with AI-powered workflows.',
      features: [
        'Workflow automation',
        'Task scheduling',
        'Data processing',
        'API integrations',
        'Custom triggers',
        'Performance monitoring'
      ],
      pricing: '$299/month',
      popular: false,
      link: '/ai-automation'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'AI Support' },
    { number: '50+', label: 'Enterprise Clients' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including content generation, chatbots, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced AI
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From content generation to automation, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
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
      </section>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your business growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can drive your success and accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;