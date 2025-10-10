import React from 'react';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      description: 'Comprehensive business analytics with real-time insights and customizable reports.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Export Reports'],
      pricing: '$99/month',
      icon: BarChart3
    },
    {
      id: 'content-generator',
      name: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: ['AI Writing', 'Content Templates', 'SEO Optimization', 'Multi-language Support'],
      pricing: '$79/month',
      icon: MessageSquare
    },
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      description: 'Advanced email marketing automation with AI-powered personalization and analytics.',
      features: ['Email Automation', 'Personalization', 'A/B Testing', 'Analytics'],
      pricing: '$149/month',
      icon: MessageSquare
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker',
      description: 'Smart expense management with receipt scanning and automated categorization.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Expense Reports', 'Integration'],
      pricing: '$59/month',
      icon: TrendingUp
    },
    {
      id: 'inventory-management',
      name: 'Inventory Management',
      description: 'Intelligent inventory tracking with predictive analytics and automated reordering.',
      features: ['Real-time Tracking', 'Predictive Analytics', 'Auto Reordering', 'Multi-location'],
      pricing: '$199/month',
      icon: Cloud
    },
    {
      id: 'lead-scoring',
      name: 'Lead Scoring',
      description: 'AI-powered lead qualification and scoring to improve sales conversion rates.',
      features: ['Lead Scoring', 'Behavioral Tracking', 'CRM Integration', 'Predictive Analytics'],
      pricing: '$129/month',
      icon: Star
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: TrendingUp,
      title: 'Scalable',
      description: 'Grows with your business needs and requirements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused software solutions designed to solve specific business problems efficiently and cost-effectively.
          </p>
        </section>

        {/* Products Grid */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of specialized tools designed to streamline specific business processes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-center mb-6">
                    <product.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{product.pricing}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Try Free Trial
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Micro SaaS?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Micro SaaS solutions offer focused functionality, lower costs, and faster implementation than traditional enterprise software.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing Comparison</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare our micro SaaS solutions with traditional enterprise software.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-300">Quick Setup</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-300">Affordable Pricing</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-300">Focused Features</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-300">Easy Integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Traditional Software</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-gray-300">Complex Setup</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-gray-300">High Costs</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-gray-300">Feature Overload</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-gray-300">Complex Integration</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Advantage</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="text-gray-300">Best of Both Worlds</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="text-gray-300">AI-Powered</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="text-gray-300">Scalable</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="text-gray-300">Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicroSaasPage;