import React from 'react';
import { CheckCircle, Brain, Zap, Shield, BarChart, Users, Globe, ArrowRight, MessageCircle, CreditCard, Mail, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServices: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, emails, and more using advanced AI models.',
      price: 'Starting at $29/month',
      features: ['GPT-4 Integration', 'Multiple Content Types', 'SEO Optimization', 'Brand Voice Training'],
      link: '/ai-content-generator'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and sales automation.',
      price: 'Starting at $49/month',
      features: ['No-Code Builder', 'Multi-Channel Support', 'Human Handoff', 'Analytics Dashboard'],
      link: '/ai-chatbot-builder'
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-400" />,
      title: 'AI Expense Tracker',
      description: 'Automatically track and categorize expenses with AI-powered receipt scanning.',
      price: 'Starting at $9.99/month',
      features: ['Receipt Scanning', 'Auto-Categorization', 'Real-time Analytics', 'Tax Preparation'],
      link: '/ai-expense-tracker'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Get intelligent insights from your data with AI-powered analytics and reporting.',
      price: 'Starting at $79/month',
      features: ['Predictive Analytics', 'Custom Dashboards', 'Real-time Insights', 'Automated Reports'],
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Mail className="w-8 h-8 text-red-400" />,
      title: 'AI Email Assistant',
      description: 'Automate email management with AI-powered sorting, responses, and scheduling.',
      price: 'Starting at $19/month',
      features: ['Smart Sorting', 'Auto-Responses', 'Email Scheduling', 'Priority Detection'],
      link: '/ai-email-assistant'
    },
    {
      icon: <Calendar className="w-8 h-8 text-yellow-400" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling and meeting optimization.',
      price: 'Starting at $15/month',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Blocking'],
      link: '/ai-smart-calendar'
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'Custom AI Training',
      description: 'Train AI models on your specific business data for personalized solutions',
      icon: <Brain className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'White-Label Solutions',
      description: 'Rebrand our AI services with your company identity and branding',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'API Access',
      description: 'Integrate AI capabilities directly into your existing applications',
      icon: <Zap className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Dedicated Support',
      description: '24/7 dedicated support with AI experts and account managers',
      icon: <Users className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'On-Premise Deployment',
      description: 'Deploy AI solutions on your own infrastructure for maximum security',
      icon: <Globe className="w-6 h-6 text-red-400" />
    },
    {
      title: 'Custom Integrations',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: <BarChart className="w-6 h-6 text-yellow-400" />
    }
  ];

  const industries = [
    { name: 'Healthcare', description: 'AI-powered patient care and medical diagnosis' },
    { name: 'Finance', description: 'Fraud detection and automated trading systems' },
    { name: 'E-commerce', description: 'Personalized recommendations and inventory management' },
    { name: 'Education', description: 'Personalized learning and automated grading' },
    { name: 'Manufacturing', description: 'Predictive maintenance and quality control' },
    { name: 'Real Estate', description: 'Property valuation and market analysis' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services for businesses. From content generation to analytics, we provide cutting-edge AI solutions. Contact us today." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI development, AI solutions" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with our comprehensive AI services. From content generation to analytics, 
              we provide cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View All Services
              </button>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-purple-300 font-semibold mb-4">{service.price}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Features */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Enterprise Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Schedule Consultation
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                Free consultation • Custom solutions • 24/7 support
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServices;
