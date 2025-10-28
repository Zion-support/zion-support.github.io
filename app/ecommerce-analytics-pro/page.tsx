import React from 'react'
import { BarChart, TrendingUp, Target, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Ecommerce Analytics Pro | Zion Tech Group',
  description: 'Professional ecommerce analytics services by Zion Tech Group.',
  keywords: 'ecommerce, analytics, pro, insights, optimization',
  openGraph: {
    title: 'Ecommerce Analytics Pro | Zion Tech Group',
    description: 'Professional ecommerce analytics services by Zion Tech Group.',
    type: 'website',
  },
};

const EcommerceAnalyticsProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive ecommerce analytics with real-time insights and reporting.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track sales, conversions, and customer behavior with detailed metrics.'
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'AI-powered recommendations to improve your conversion rates.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep customer segmentation and behavior analysis.'
    }
  ];

  const benefits = [
    'Increase conversion rates by 35%',
    'Reduce cart abandonment by 50%',
    'Real-time performance monitoring',
    'Advanced customer segmentation',
    'Automated reporting',
    '24/7 intelligent support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ecommerce Analytics Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ecommerce business with advanced analytics, 
              intelligent insights, and data-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Why Choose Our Ecommerce Analytics?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your Ecommerce?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of ecommerce businesses already using our analytics platform.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceAnalyticsProPage;