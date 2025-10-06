import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle, Star, TrendingUp, Target, Zap, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services Advertising & Pricing | Zion Tech Group',
  description: 'Comprehensive overview of all Zion Tech Group services with competitive pricing, market comparisons, and ROI benefits. Contact us for custom quotes.',
  keywords: 'AI services pricing, micro SaaS pricing, IT services cost, technology consulting rates, enterprise solutions pricing',
};

export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4 mr-2" />
              🎯 AI-Powered Advertising Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Advertising Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Revolutionize Your Marketing with 300% ROI Guaranteed
            </p>
            
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your advertising campaigns with our breakthrough AI technology. Achieve 95% targeting accuracy, 
              60% cost reduction, and 300% ROI with intelligent automation and predictive analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Start Free Consultation
              </Link>
              <Link 
                href="#services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered advertising solutions designed to maximize your ROI and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Campaign Management */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                AI-Powered Campaign Management
              </h3>
              <p className="text-gray-600 mb-6">
                Automated campaign optimization using machine learning algorithms that continuously improve performance and maximize ROI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Real-time bid optimization
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Audience targeting refinement
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Creative A/B testing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Performance analytics
                </li>
              </ul>
              <div className="text-2xl font-bold text-blue-600 mb-2">$2,500/month</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>

            {/* Predictive Analytics */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Predictive Analytics
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced AI models that predict customer behavior, market trends, and campaign performance to optimize your advertising strategy.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Customer lifetime value prediction
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Churn risk analysis
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Market trend forecasting
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Campaign ROI prediction
                </li>
              </ul>
              <div className="text-2xl font-bold text-green-600 mb-2">$3,000/month</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>

            {/* Automated Content Creation */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Automated Content Creation
              </h3>
              <p className="text-gray-600 mb-6">
                AI-generated ad copy, visuals, and video content that resonates with your target audience and drives engagement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Dynamic ad copy generation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Image and video creation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personalization at scale
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Brand voice consistency
                </li>
              </ul>
              <div className="text-2xl font-bold text-purple-600 mb-2">$1,800/month</div>
              <div className="text-sm text-gray-500">Starting price</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competitive Pricing Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI-powered solutions compare to traditional advertising agencies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Traditional Agency */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Agency</h3>
              <div className="text-3xl font-bold text-gray-600 mb-6">$15,000/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Manual campaign management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Basic analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Standard targeting
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Monthly reporting
                </li>
              </ul>
              <div className="text-sm text-gray-500">
                Average ROI: 150%
              </div>
            </div>

            {/* Zion Tech Group */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zion Tech Group</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">$7,500/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  AI-powered automation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Advanced predictive analytics
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Intelligent targeting
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Real-time optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Automated content creation
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  24/7 monitoring
                </li>
              </ul>
              <div className="text-sm text-green-600 font-semibold">
                Average ROI: 300%
              </div>
            </div>

            {/* Enterprise Solution */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Solution</h3>
              <div className="text-3xl font-bold text-gray-600 mb-6">$25,000/month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Dedicated team
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                  Priority support
                </li>
              </ul>
              <div className="text-sm text-gray-500">
                Custom ROI: 400%+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Guarantee */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            300% ROI Guarantee
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're so confident in our AI advertising solutions that we guarantee a 300% return on investment within the first 6 months, or we'll refund your investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors"
            >
              Claim Your Guarantee
            </Link>
            <Link 
              href="/case-studies"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-lg transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses that have already transformed their advertising with our AI-powered solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/demo"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}