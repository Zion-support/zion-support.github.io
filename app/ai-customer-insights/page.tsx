'use client';
import React from 'react';
import { ArrowLeft, CheckCircle, Eye, TrendingUp, Users, Heart, BarChart, Target } from 'lucide-react';
import Link from 'next/link';

const AICustomerInsightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🔍</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Customer Insights Pro
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Deep customer behavior analysis with predictive modeling, churn prevention, and personalized engagement strategies. 
            Turn customer data into actionable insights.
          </p>
          <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
          <div className="text-gray-300 mb-8">Starting price - No setup fees</div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6 text-center">
            <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Behavior Analysis</h3>
            <p className="text-gray-300">Deep analysis of customer behavior patterns and preferences</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Churn Prediction</h3>
            <p className="text-gray-300">Predict and prevent customer churn with AI-powered models</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Personalization Engine</h3>
            <p className="text-gray-300">Create personalized experiences based on customer insights</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose AI Customer Insights Pro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">35% Churn Reduction</h3>
                  <p className="text-gray-300">Identify at-risk customers and take proactive retention actions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">50% Engagement Increase</h3>
                  <p className="text-gray-300">Boost customer engagement with personalized experiences</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">25% Revenue Growth</h3>
                  <p className="text-gray-300">Increase revenue through better customer understanding and targeting</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Customer Satisfaction Boost</h3>
                  <p className="text-gray-300">Improve customer satisfaction with data-driven insights</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Lifetime Value Prediction</h3>
                  <p className="text-gray-300">Predict customer lifetime value and optimize acquisition strategies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sentiment Tracking</h3>
                  <p className="text-gray-300">Monitor customer sentiment across all touchpoints in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="cyber-card p-6 text-center">
            <BarChart className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
            <p className="text-sm text-gray-300">Comprehensive analytics dashboard with real-time insights</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Customer Segmentation</h3>
            <p className="text-sm text-gray-300">Automatically segment customers based on behavior and preferences</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <Heart className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Engagement Optimization</h3>
            <p className="text-sm text-gray-300">Optimize customer engagement strategies with AI recommendations</p>
          </div>
          <div className="cyber-card p-6 text-center">
            <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Predictive Modeling</h3>
            <p className="text-sm text-gray-300">Build predictive models for customer behavior and outcomes</p>
          </div>
        </div>

        {/* Use Cases */}
        <div className="cyber-card p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-white mb-3">E-commerce</h3>
              <p className="text-gray-300">Optimize product recommendations and customer journey</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
              <p className="text-gray-300">Improve customer retention and cross-selling opportunities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">SaaS Companies</h3>
              <p className="text-gray-300">Reduce churn and increase customer lifetime value</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Understand Your Customers Better?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 300+ companies already using AI Customer Insights Pro to drive growth through better customer understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICustomerInsightsPage;