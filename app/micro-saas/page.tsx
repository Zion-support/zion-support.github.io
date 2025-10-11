'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react'

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: 'analytics-dashboard',
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard for your business metrics',
      features: [
        'Real-time data visualization',
        'Custom report generation',
        'Multi-platform integration',
        'Automated alerts',
        'Export capabilities'
      ],
      price: '$29/month',
      users: 'Up to 5 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: 'appointment-scheduler',
      icon: '📅',
      title: 'Appointment Scheduler',
      description: 'Smart scheduling system with automated reminders and calendar sync',
      features: [
        'Calendar integration',
        'Automated reminders',
        'Time zone handling',
        'Custom booking forms',
        'Payment processing'
      ],
      price: '$19/month',
      users: 'Up to 3 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: 'customer-support',
      icon: '💬',
      title: 'Customer Support Hub',
      description: 'All-in-one customer support platform with ticketing and live chat',
      features: [
        'Multi-channel support',
        'Automated ticket routing',
        'Knowledge base',
        'Live chat widget',
        'Performance analytics'
      ],
      price: '$39/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Support'
    },
    {
      id: 'inventory-manager',
      icon: '📦',
      title: 'Inventory Manager',
      description: 'Track and manage your inventory with automated reorder alerts',
      features: [
        'Real-time inventory tracking',
        'Automated reorder alerts',
        'Barcode scanning',
        'Supplier management',
        'Reporting dashboard'
      ],
      price: '$24/month',
      users: 'Up to 8 users',
      popular: false,
      category: 'Inventory'
    },
    {
      id: 'social-media-scheduler',
      icon: '📱',
      title: 'Social Media Scheduler',
      description: 'Schedule and manage your social media posts across multiple platforms',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Hashtag suggestions',
        'Analytics tracking',
        'Team collaboration'
      ],
      price: '$34/month',
      users: 'Up to 6 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: 'expense-tracker',
      icon: '💰',
      title: 'Expense Tracker',
      description: 'Simple and effective expense tracking for individuals and small teams',
      features: [
        'Receipt scanning',
        'Category management',
        'Budget tracking',
        'Expense reports',
        'Tax preparation'
      ],
      price: '$14/month',
      users: 'Up to 4 users',
      popular: false,
      category: 'Finance'
    }
  ];

  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Based',
      description: 'Access your tools from anywhere with our secure cloud infrastructure'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Get valuable insights into your business performance'
    },
    {
      icon: MessageSquare,
      title: '24/7 Support',
      description: 'Round-the-clock support to help you succeed'
    }
  ];

  const categories = ['All', 'Analytics', 'Productivity', 'Support', 'Inventory', 'Marketing', 'Finance'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused tools designed to solve specific business problems. No bloat, just results.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Micro SaaS Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div key={product.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${
                product.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {product.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-400 mb-4">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{product.users}</span>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{product.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  product.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can build a custom micro SaaS tool tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage