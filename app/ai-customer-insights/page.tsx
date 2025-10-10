'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  TrendingUp,
  Brain,
  Eye,
  MessageSquare
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiCustomerInsightsPage: React.FC = () => {
  const features = [
    'AI-powered customer behavior analysis',
    'Real-time sentiment analysis across all channels',
    'Predictive customer lifetime value modeling',
    'Automated customer segmentation and profiling',
    'Churn prediction with 90% accuracy',
    'Cross-channel customer journey mapping',
    'Personalized recommendation engine',
    'Advanced customer analytics dashboard'
  ];

  const benefits = [
    'Increase customer retention by 35%',
    'Boost customer satisfaction scores',
    'Identify high-value customer segments',
    'Reduce churn by 50%'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$149/month',
      description: 'Perfect for small businesses',
      features: ['Up to 10,000 customers', 'Basic analytics', 'Email support', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Advanced insights for growing companies',
      features: ['Up to 100,000 customers', 'Advanced AI models', 'Custom dashboards', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited customers', 'Custom AI training', 'API access', 'Dedicated support'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Insights - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer analytics and insights platform. Understand your customers better with predictive analytics and behavioral analysis." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  AI Customer Insights
                </h1>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Unlock the power of customer data with AI-driven insights. Understand behavior patterns, 
                predict churn, and personalize experiences to maximize customer lifetime value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-gray-300">Churn Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">35%</div>
                <div className="text-gray-300">Retention Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
                <div className="text-gray-300">Churn Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Real-time Analysis</div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Customer Intelligence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {features.slice(4).map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Transform Your Customer Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Flexible Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`bg-slate-800/50 rounded-lg p-6 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {plan.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold text-purple-400 mb-6">{plan.price}</div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                          : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Understand Your Customers Better?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join thousands of businesses using AI Customer Insights to drive growth and improve customer satisfaction. 
                  Start your free trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiCustomerInsightsPage;