import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Cloud, Database, Smartphone, MessageCircle, Calendar, Users } from 'lucide-react';

export default function MicroSAASServicesPage() {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and engagement.',
      pricing: '$49/month',
      features: ['Natural language processing', 'Multi-platform support', 'Analytics dashboard', 'Custom integrations']
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: 'AI Scheduling Assistant',
      description: 'Smart scheduling and calendar management with AI.',
      pricing: '$29/month',
      features: ['Automated scheduling', 'Calendar sync', 'Meeting optimization', 'Time zone handling']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Customer Analytics',
      description: 'Advanced customer behavior analysis and insights.',
      pricing: '$39/month',
      features: ['Behavior tracking', 'Predictive analytics', 'Customer segmentation', 'ROI analysis']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing.',
      pricing: '$29/month',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates']
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'AI Email Assistant',
      description: 'Automated email management and response system.',
      pricing: '$19/month',
      features: ['Smart responses', 'Email categorization', 'Sentiment analysis', 'Auto-follow-ups']
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: 'AI Data Processor',
      description: 'Intelligent data processing and analysis tools.',
      pricing: '$59/month',
      features: ['Data cleaning', 'Pattern recognition', 'Automated reports', 'Real-time insights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use micro SAAS solutions including AI chatbots, scheduling assistants, analytics, and more." />
        <meta name="keywords" content="micro SAAS, AI services, chatbot, scheduling, analytics, content generation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Ready-to-use micro SAAS solutions designed to enhance your business operations with minimal setup.
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Powerful, ready-to-deploy solutions that integrate seamlessly with your existing workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Deploy Micro SAAS Solutions?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start with any of our micro SAAS solutions and scale as your business grows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
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
    </div>
  );
}