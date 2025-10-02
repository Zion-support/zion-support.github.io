import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Brain, 
  MessageSquare, 
  Heart,
  CheckCircle,
  DollarSign,
  Star,
  ArrowRight,
  Eye,
  FileText,
  Calendar,
  Shield,
  Globe,
  PieChart,
  Activity,
  UserCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Customer Insights Platform - Zion Tech Group',
  description: 'Revolutionary AI-powered customer insights platform that analyzes behavior, predicts churn, and maximizes customer lifetime value.',
  keywords: 'AI customer insights, customer analytics, churn prediction, customer lifetime value, behavioral analytics',
  robots: {
    index: true,
    follow: true,
  },
};

export default function AICustomerInsightsPlatform() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
          <Brain className="w-4 h-4 mr-2" />
          AI-Powered Customer Intelligence
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI Customer Insights Platform
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Transform customer data into actionable insights. Our AI platform analyzes customer behavior, 
          predicts churn, identifies upsell opportunities, and maximizes customer lifetime value with 95% accuracy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Customer Insights Platform Inquiry"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Get Insights Today
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Segmentation</h3>
          <p className="text-gray-600 mb-4">
            AI-powered customer segmentation with behavioral analysis and predictive modeling for targeted marketing.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Behavioral clustering</li>
            <li>• Demographic analysis</li>
            <li>• Purchase pattern recognition</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Churn Prediction</h3>
          <p className="text-gray-600 mb-4">
            Predict customer churn with 95% accuracy using advanced machine learning algorithms and behavioral signals.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Early warning system</li>
            <li>• Risk scoring</li>
            <li>• Intervention recommendations</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
            <Target className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Upsell Opportunities</h3>
          <p className="text-gray-600 mb-4">
            Identify high-value upsell and cross-sell opportunities with AI-powered recommendation engine.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Product affinity analysis</li>
            <li>• Purchase timing prediction</li>
            <li>• Revenue optimization</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Lifetime Value</h3>
          <p className="text-gray-600 mb-4">
            Calculate and optimize customer lifetime value with predictive modeling and engagement scoring.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• CLV prediction</li>
            <li>• Engagement scoring</li>
            <li>• Value optimization</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <MessageSquare className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Sentiment Analysis</h3>
          <p className="text-gray-600 mb-4">
            Real-time sentiment analysis across all customer touchpoints with emotion detection and trend analysis.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Multi-channel sentiment</li>
            <li>• Emotion detection</li>
            <li>• Trend analysis</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
            <BarChart3 className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Analytics</h3>
          <p className="text-gray-600 mb-4">
            Advanced predictive analytics for customer behavior, purchase patterns, and market trends.
          </p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>• Behavior prediction</li>
            <li>• Market trend analysis</li>
            <li>• Demand forecasting</li>
          </ul>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Analytics Dashboard</h2>
          <p className="text-lg text-gray-600">Real-time insights and actionable recommendations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PieChart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Health Score</h3>
            <p className="text-gray-600 text-sm">Real-time customer health monitoring with risk alerts</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Behavioral Patterns</h3>
            <p className="text-gray-600 text-sm">Deep insights into customer behavior and engagement patterns</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement Metrics</h3>
            <p className="text-gray-600 text-sm">Track customer engagement across all touchpoints</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Forecasting</h3>
            <p className="text-gray-600 text-sm">Predictive revenue modeling and growth opportunities</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-50 rounded-2xl p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your customer base size</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Startup</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$199<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Perfect for growing startups</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 10,000 customers
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Basic segmentation
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Churn prediction
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Standard analytics
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Email support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Startup Plan - AI Customer Insights"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$499<span className="text-lg text-gray-500">/month</span></div>
              <p className="text-gray-600">Ideal for growing businesses</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Up to 100,000 customers
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Advanced segmentation
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Predictive analytics
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom dashboards
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Priority support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Growth Plan - AI Customer Insights"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
              <p className="text-gray-600">For large organizations</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Unlimited customers
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                Custom AI models
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                White-label solution
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                API access
              </li>
              <li className="flex items-center text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                24/7 dedicated support
              </li>
            </ul>
            <Link 
              href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Customer Insights"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* ROI Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Business Impact</h2>
          <p className="text-lg text-gray-600">See how our AI Customer Insights Platform drives measurable results</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">35%</h3>
            <p className="text-gray-600">Reduction in customer churn rate</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">45%</h3>
            <p className="text-gray-600">Increase in customer lifetime value</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">60%</h3>
            <p className="text-gray-600">Improvement in upsell success rate</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500%</h3>
            <p className="text-gray-600">ROI within first year</p>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl opacity-90">Connect with your existing customer data sources</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Analytics Platforms</h3>
            <p className="text-sm opacity-80">Google Analytics, Adobe Analytics, Mixpanel</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">CRM Systems</h3>
            <p className="text-sm opacity-80">Salesforce, HubSpot, Pipedrive</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Support Tools</h3>
            <p className="text-sm opacity-80">Zendesk, Intercom, Freshdesk</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm opacity-80">Enterprise SSO, GDPR compliant</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Unlock Customer Insights?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using our AI Customer Insights Platform to understand, predict, and optimize customer behavior.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="mailto:kleber@ziontechgroup.com?subject=AI Customer Insights Platform Demo Request"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Schedule Demo
          </Link>
          <Link 
            href="tel:+13024640950"
            className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Call +1 302 464 0950
          </Link>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 🌐 <Link href="https://ziontechgroup.com" className="text-green-600 hover:underline">ziontechgroup.com</Link></p>
        </div>
      </div>
    </div>
  );
}