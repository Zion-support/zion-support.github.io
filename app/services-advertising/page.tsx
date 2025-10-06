import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, CheckCircle, Star, TrendingUp, Users, Zap, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services Advertising & Pricing | Zion Tech Group',
  description: 'Comprehensive overview of all Zion Tech Group services with competitive pricing, market comparisons, and ROI benefits. Contact us for custom quotes.',
  keywords: 'AI services pricing, micro SaaS pricing, IT services cost, technology consulting rates, enterprise solutions pricing',
};

export default function ServicesAdvertisingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              🎯 AI-Powered Advertising Solutions
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Advertising Services
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Transform your advertising strategy with AI-powered solutions that deliver measurable results. 
              Our comprehensive advertising services help you reach the right audience at the right time with the right message.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Advertising Package
            </h2>
            <p className="text-xl text-gray-600">
              Flexible pricing options designed to scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$2,500</div>
                <div className="text-gray-600">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>AI-powered ad creation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Basic audience targeting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Performance analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Monthly reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Email support</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$7,500</div>
                <div className="text-gray-600">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Advanced AI targeting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Multi-platform campaigns</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Real-time optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Weekly reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Priority support</span>
                </li>
              </ul>
              
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">Custom</div>
                <div className="text-gray-600">pricing</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Custom AI models</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3" />
                  <span>White-label solutions</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Advertising Services?
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-powered approach delivers superior results compared to traditional advertising methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">300% Higher ROI</h3>
              <p className="text-gray-600">
                Our AI algorithms optimize campaigns for maximum return on investment
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Optimization</h3>
              <p className="text-gray-600">
                AI continuously adjusts campaigns for optimal performance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Precise Targeting</h3>
              <p className="text-gray-600">
                Reach the right audience with AI-powered audience analysis
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Safety</h3>
              <p className="text-gray-600">
                AI ensures your ads appear in brand-safe environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our AI advertising solutions have delivered exceptional results for clients across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Average CTR Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Per Acquisition Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Campaign Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Advertising?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already achieved remarkable results with our AI advertising solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}