'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, BarChart3, Zap, Target, Brain, ArrowRight } from 'lucide-react';

const AiQualityControlPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Inspection',
      description: 'Advanced computer vision and machine learning algorithms for automated quality inspection'
    },
    {
      icon: Target,
      title: 'Defect Detection',
      description: 'Real-time identification of defects, anomalies, and quality issues in production lines'
    },
    {
      icon: BarChart3,
      title: 'Quality Analytics',
      description: 'Comprehensive analytics and reporting on quality metrics and trends'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated compliance checking against industry standards and regulations'
    }
  ];

  const benefits = [
    '99.9% accuracy in defect detection',
    '50% reduction in quality control costs',
    'Real-time quality monitoring',
    'Automated compliance reporting',
    'Predictive quality analytics',
    'Integration with existing systems'
  ];

  return (
    <>
      <Helmet>
        <title>AI Quality Control | Zion Tech Group - Automated Quality Assurance</title>
        <meta name="description" content="Revolutionize your quality control with AI-powered inspection, defect detection, and automated compliance monitoring." />
        <meta name="keywords" content="AI quality control, automated inspection, defect detection, quality assurance, compliance monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Quality Control</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your quality assurance with AI-powered inspection, real-time defect detection, and automated compliance monitoring.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Advanced Quality Control Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered quality control solutions provide comprehensive inspection and monitoring capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Quality Control?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience significant improvements in quality, efficiency, and cost savings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Quality Control?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how AI can revolutionize your quality assurance processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiQualityControlPage;