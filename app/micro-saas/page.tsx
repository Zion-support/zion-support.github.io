import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Brain, BarChart3, Mail, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MicroSaasPage() {
  const products = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Writer Pro',
      description: 'Generate high-quality content with advanced AI writing tools.',
      price: '$29/month',
      features: ['Unlimited Content', 'Multiple Languages', 'SEO Optimization', 'Brand Voice Training']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Get insights from your data with powerful AI-driven analytics.',
      price: '$39/month',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Visualization', 'Predictive Insights']
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Automate your email marketing with intelligent AI tools.',
      price: '$19/month',
      features: ['Email Templates', 'A/B Testing', 'Personalization', 'Campaign Analytics']
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent scheduling and time management solution.',
      price: '$15/month',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Time Tracking', 'Productivity Insights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="AI-powered micro SaaS applications designed to solve specific business problems efficiently." />
        <meta name="keywords" content="micro SaaS, AI tools, business applications, productivity tools, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Micro SaaS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered micro applications designed to solve specific business problems efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-purple-400 mb-6">{product.price}</div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Choose from our suite of AI-powered micro SaaS applications.
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
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}