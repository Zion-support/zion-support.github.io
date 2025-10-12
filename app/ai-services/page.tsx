import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, DollarSign, Star, Eye, MessageSquare, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Blog posts', 'Social media content', 'Marketing copy', 'Product descriptions'],
      price: '$500/month',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      link: '/ai-content-generator'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation.',
      features: ['24/7 customer support', 'Lead qualification', 'Multi-language support', 'Integration ready'],
      price: '$300/month',
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      link: '/ai-chatbot-builder'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Get insights from your data with AI-powered analytics and visualization.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
      price: '$400/month',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      link: '/ai-analytics-dashboard'
    },
    {
      title: 'AI Email Assistant',
      description: 'Automate email management and improve response rates with AI.',
      features: ['Smart email sorting', 'Auto-responses', 'Sentiment analysis', 'Performance tracking'],
      price: '$200/month',
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      link: '/ai-email-assistant'
    },
    {
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent automation.',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Integration management'],
      price: '$800/month',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      link: '/ai-automation'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security monitoring and threat detection.',
      features: ['Threat detection', 'Security monitoring', 'Incident response', 'Compliance reporting'],
      price: '$600/month',
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      link: '/ai-cybersecurity'
    }
  ];

  const benefits = [
    'Increase productivity by 300%',
    'Reduce operational costs by 50%',
    '24/7 automated support',
    'Scalable AI solutions',
    'Custom implementation',
    'Ongoing optimization'
  ];

  const stats = [
    { number: '500+', label: 'AI Solutions Deployed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                AI-Powered <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence. Our AI services help you automate processes, 
                generate content, and make data-driven decisions.
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive suite of AI solutions designed to accelerate your business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our AI solutions are designed to deliver measurable results and transform your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI services can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View IT Services
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
