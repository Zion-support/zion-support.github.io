import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3, Cog, Users, Clock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates', 'Plagiarism detection', 'Bulk generation'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true,
      category: 'Content Creation'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent chatbots for customer support, sales, and engagement with no coding required.',
      features: ['Natural language processing', 'Multi-channel deployment', 'Analytics dashboard', 'Custom integrations', 'A/B testing', 'Voice support'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true,
      category: 'Customer Service'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting', 'Data visualization', 'Mobile app'],
      pricing: 'Starting at $79/month',
      link: '/ai-analytics-dashboard',
      popular: false,
      category: 'Business Intelligence'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI agents and process optimization.',
      features: ['Workflow automation', 'Smart scheduling', 'Data processing', 'Integration APIs', 'Custom triggers', 'Performance monitoring'],
      pricing: 'Starting at $99/month',
      link: '/ai-automation',
      popular: false,
      category: 'Automation'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-red-500" />,
      title: 'AI Email Assistant',
      description: 'Smart email management tool that drafts, schedules, and optimizes emails using AI to improve open rates.',
      features: ['Smart email drafting', 'Send time optimization', 'Subject line testing', 'Email templates', 'Performance analytics', 'CRM integration'],
      pricing: 'Starting at $39/month',
      link: '/ai-email-assistant',
      popular: false,
      category: 'Communication'
    },
    {
      icon: <Eye className="w-8 h-8 text-indigo-500" />,
      title: 'AI Computer Vision',
      description: 'Extract meaningful information from images and videos for business automation and analysis.',
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Video analysis', 'Quality inspection', 'Security monitoring'],
      pricing: 'Starting at $89/month',
      link: '/ai-computer-vision',
      popular: false,
      category: 'Computer Vision'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'AI Predictive Analytics',
      description: 'Forecast future trends and behaviors to make data-driven business decisions with advanced ML models.',
      features: ['Trend analysis', 'Risk assessment', 'Performance prediction', 'Scenario planning', 'Real-time forecasting', 'Custom models'],
      pricing: 'Starting at $149/month',
      link: '/ai-predictive-analytics',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: 'AI Customer Intelligence',
      description: 'Understand your customers better with AI-powered insights, sentiment analysis, and behavior prediction.',
      features: ['Customer segmentation', 'Sentiment analysis', 'Churn prediction', 'Lifetime value', 'Personalization', 'Recommendation engine'],
      pricing: 'Starting at $119/month',
      link: '/ai-customer-intelligence',
      popular: false,
      category: 'Customer Intelligence'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Availability',
      description: 'AI services work around the clock to serve your customers and optimize your operations.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Scalable Solutions',
      description: 'Easily scale your AI capabilities as your business grows without additional infrastructure.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs by automating tasks that would otherwise require human resources.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Continuous Learning',
      description: 'AI models continuously improve and adapt to your specific business needs and data patterns.'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Support' }
  ];

  const categories = ['All', 'Content Creation', 'Customer Service', 'Business Intelligence', 'Automation', 'Communication', 'Computer Vision', 'Analytics', 'Customer Intelligence'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

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
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI-Powered Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive AI solutions designed to solve real business challenges
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
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
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the power of artificial intelligence with our proven solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI solutions can accelerate your digital transformation and drive measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore IT Services
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
