'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Users, TrendingUp, Star, Rocket, Shield } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Build and deploy micro SaaS solutions in weeks, not months',
      benefits: ['Quick MVP development', 'Fast time to market', 'Agile development process']
    },
    {
      icon: Users,
      title: 'Scalable Architecture',
      description: 'Designed to grow with your business from day one',
      benefits: ['Auto-scaling infrastructure', 'Multi-tenant support', 'Global deployment']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance built-in',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 Type II']
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Analytics',
      description: 'Intelligent insights to drive business growth',
      benefits: ['Predictive analytics', 'User behavior analysis', 'Revenue optimization']
    }
  ];

  const solutions = [
    {
      title: 'AI Content Generator',
      description: 'Automated content creation for blogs, social media, and marketing materials',
      features: ['Natural language processing', 'Multi-language support', 'Brand voice customization'],
      pricing: 'Starting at $99/month',
      category: 'Content & Marketing'
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization platform',
      features: ['Custom dashboards', 'Automated reporting', 'Predictive insights'],
      pricing: 'Starting at $149/month',
      category: 'Analytics & BI'
    },
    {
      title: 'Customer Support Bot',
      description: 'AI-powered customer service automation with human handoff',
      features: ['24/7 availability', 'Multi-channel support', 'Sentiment analysis'],
      pricing: 'Starting at $79/month',
      category: 'Customer Service'
    },
    {
      title: 'Inventory Management System',
      description: 'Intelligent inventory tracking and demand forecasting',
      features: ['Real-time tracking', 'Demand prediction', 'Automated reordering'],
      pricing: 'Starting at $199/month',
      category: 'Operations'
    }
  ];

  const benefits = [
    'Reduced development time by 70%',
    'Lower operational costs',
    'Faster time to market',
    'Built-in scalability',
    'Enterprise-grade security',
    'AI-powered insights',
    '24/7 monitoring and support',
    'Easy integration with existing systems'
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Active Micro SaaS' },
    { icon: TrendingUp, value: '300%', label: 'Average Growth' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
    { icon: Rocket, value: '2 weeks', label: 'Average Launch Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Micro SaaS</title>
        <meta name="description" content="Build and scale AI-powered micro SaaS solutions with Zion Tech Group. Rapid development, enterprise security, and intelligent analytics." />
        <meta name="keywords" content="micro SaaS, SaaS development, AI solutions, rapid development, scalable architecture, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Micro SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Build, deploy, and scale intelligent micro SaaS solutions that solve real business problems. 
              From concept to launch in weeks, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5" />
                Start Your Micro SaaS
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform provides everything you need to build, launch, and scale successful micro SaaS solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready-to-Deploy Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our library of pre-built micro SaaS solutions or customize them for your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                      {solution.category}
                    </span>
                    <span className="text-purple-400 font-semibold">{solution.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                      Deploy Now
                    </button>
                    <button className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions deliver measurable business value from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Launch Your Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of entrepreneurs who have successfully launched their micro SaaS solutions with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="w-5 h-5" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Zap className="w-5 h-5" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
