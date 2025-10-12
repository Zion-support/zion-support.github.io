'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, BarChart, Shield, FileText, Users, Zap, Sparkles, Star, Award } from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const microSaasProducts = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with AI insights',
      price: '$99/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Team collaboration'],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection',
      price: '$149/month',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reporting'],
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform',
      price: '$79/month',
      features: ['AI content generation', 'Multi-platform publishing', 'Brand consistency', 'Performance tracking'],
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights',
      price: '$129/month',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Ready-to-Use Software Solutions</title>
        <meta name="description" content="Discover our micro SAAS products designed to solve specific business challenges with minimal setup. Start your free trial today." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready-to-use software solutions designed to solve specific business challenges 
                with minimal setup and maximum impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our suite of specialized software solutions designed to address 
                specific business needs with enterprise-grade quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg mb-4`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{product.price}</div>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS solutions are designed with your business success in mind.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Quick Setup</h3>
                <p className="text-gray-300">
                  Get up and running in minutes with our intuitive setup process and comprehensive documentation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security with encryption, compliance, and regular security updates.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
                <p className="text-gray-300">
                  Leverage artificial intelligence to automate tasks and gain valuable insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to streamline 
              their operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasServicesPage;