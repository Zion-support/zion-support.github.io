'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Shield, Globe, BarChart, Users, Award, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-cyan-400 block">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Achieve 300% ROI with our cutting-edge AI technology, quantum computing, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/demo"
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2"
              >
                Get Free Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver cutting-edge AI solutions that drive real business results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">AI Solutions</h3>
              </div>
              <p className="text-gray-600">
                Advanced artificial intelligence solutions that automate processes and enhance decision-making.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Performance</h3>
              </div>
              <p className="text-gray-600">
                Optimized solutions that deliver 70% cost reduction and 90% efficiency gains.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Security</h3>
              </div>
              <p className="text-gray-600">
                Enterprise-grade security and compliance for all our AI and IT solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Global Reach</h3>
              </div>
              <p className="text-gray-600">
                Serving clients worldwide with 24/7 support and local expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <BarChart className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Analytics</h3>
              </div>
              <p className="text-gray-600">
                Advanced data analytics and business intelligence for informed decision-making.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-cyan-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>
              </div>
              <p className="text-gray-600">
                Experienced professionals with deep expertise in AI, quantum computing, and IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already achieving 300% ROI with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/demo"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              Start Your Free Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
