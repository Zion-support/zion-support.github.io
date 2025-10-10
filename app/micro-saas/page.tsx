'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Code, BarChart, Users, Settings } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'AI Chatbot Builder',
      description: 'Build and deploy intelligent chatbots without coding',
      icon: Code,
      features: [
        'Drag-and-drop interface',
        'Multi-language support',
        'CRM integration',
        'Analytics dashboard'
      ],
      price: '$99/month',
      popular: true
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization',
      icon: BarChart,
      features: [
        'Custom dashboards',
        'Real-time data',
        'Export capabilities',
        'Team collaboration'
      ],
      price: '$149/month',
      popular: false
    },
    {
      title: 'Lead Generation Tool',
      description: 'Automated lead capture and nurturing system',
      icon: Users,
      features: [
        'Lead scoring',
        'Email automation',
        'CRM integration',
        'Performance tracking'
      ],
      price: '$79/month',
      popular: false
    },
    {
      title: 'Content Generator',
      description: 'AI-powered content creation for marketing',
      icon: Code,
      features: [
        'Multiple content types',
        'Brand voice training',
        'SEO optimization',
        'Bulk generation'
      ],
      price: '$129/month',
      popular: false
    },
    {
      title: 'Email Assistant',
      description: 'Smart email management and automation',
      icon: Settings,
      features: [
        'Smart scheduling',
        'Template library',
        'Follow-up automation',
        'Performance analytics'
      ],
      price: '$59/month',
      popular: false
    },
    {
      title: 'Task Manager Pro',
      description: 'Advanced project management and team collaboration',
      icon: Clock,
      features: [
        'Project tracking',
        'Team collaboration',
        'Time tracking',
        'Reporting tools'
      ],
      price: '$89/month',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Star,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing plans'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            Micro SaaS <span className="text-cyan-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Specialized software-as-a-service solutions designed for specific business needs. 
            Get powerful tools without the complexity of enterprise software.
          </p>
          
          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {microSaasProducts.map((product, index) => (
              <div key={index} className={`cyber-card group hover:scale-105 transition-all duration-300 ${
                product.popular ? 'ring-2 ring-cyan-500' : ''
              }`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center mb-6">
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                  </div>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    product.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Custom Solutions */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Need Something Custom?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              We can build custom micro SaaS solutions tailored to your specific business requirements. 
              Get the exact functionality you need without the complexity of enterprise software.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Development Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Requirements analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">UI/UX design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Agile development</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Testing & deployment</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What You Get</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Fully customized solution</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Source code ownership</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Ongoing support & maintenance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">Training & documentation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build something custom for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSaasPage;