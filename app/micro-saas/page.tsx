'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, Target, Rocket } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting'],
      price: '$29/month',
      users: '1,000+ users'
    },
    {
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      price: '$49/month',
      users: '500+ users'
    },
    {
      icon: Target,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$39/month',
      users: '2,000+ users'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Streamlined cloud resource management with cost optimization and automated scaling.',
      features: ['Resource monitoring', 'Cost optimization', 'Auto-scaling', 'Multi-cloud support'],
      price: '$59/month',
      users: '800+ users'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Automation Hub',
      description: 'AI-driven marketing automation with personalized campaigns and performance analytics.',
      features: ['Campaign automation', 'Personalization', 'A/B testing', 'ROI tracking'],
      price: '$79/month',
      users: '1,500+ users'
    },
    {
      icon: Users,
      title: 'Customer Support AI',
      description: 'Intelligent customer support with automated responses and sentiment analysis.',
      features: ['Chatbot integration', 'Sentiment analysis', 'Ticket routing', 'Performance metrics'],
      price: '$45/month',
      users: '3,000+ users'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Grow with confidence as your business expands'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI technology for better results'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS tools designed to streamline your business operations with AI-powered solutions." />
        <meta name="keywords" content="micro SaaS, business tools, AI tools, productivity software, business automation, SaaS solutions" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our collection of specialized AI-powered tools designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Tools
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our carefully crafted tools designed to solve specific business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasTools.map((tool, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <tool.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{tool.description}</p>
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-white">{tool.price}</div>
                    <div className="text-sm text-gray-400">{tool.users}</div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with modern technology and designed for maximum efficiency and ease of use.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using our micro SaaS tools today and experience the difference AI-powered solutions can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MicroSaasPage;