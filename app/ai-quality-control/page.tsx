'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, BarChart, Zap, ArrowRight, Star, Users, Award } from 'lucide-react';

const AiQualityControlPage: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Automated Quality Inspection',
      description: 'AI-powered visual inspection systems that detect defects with 99.9% accuracy'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Continuous monitoring and analysis of quality metrics across production lines'
    },
    {
      icon: Shield,
      title: 'Predictive Quality',
      description: 'Machine learning models that predict quality issues before they occur'
    },
    {
      icon: Zap,
      title: 'Instant Alerts',
      description: 'Immediate notifications when quality thresholds are exceeded'
    }
  ];

  const benefits = [
    'Reduce defect rates by up to 95%',
    'Increase production efficiency by 40%',
    'Lower quality control costs by 60%',
    'Improve customer satisfaction scores',
    'Ensure consistent product quality',
    'Minimize waste and rework'
  ];

  const stats = [
    { icon: CheckCircle, value: '99.9%', label: 'Detection Accuracy' },
    { icon: BarChart, value: '95%', label: 'Defect Reduction' },
    { icon: Zap, value: '40%', label: 'Efficiency Gain' },
    { icon: Users, value: '500+', label: 'Happy Clients' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Quality Control - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered quality control solutions that ensure perfect product quality with 99.9% accuracy and 95% defect reduction." />
        <meta name="keywords" content="AI quality control, automated inspection, defect detection, manufacturing AI, quality assurance" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Quality Control</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Transform your manufacturing with AI-powered quality control systems that deliver 99.9% accuracy and 95% defect reduction.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced AI Quality Control Features</h2>
            <p className="text-gray-300 text-lg">Cutting-edge technology for perfect quality assurance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Quality Control?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI-powered quality control systems revolutionize manufacturing by providing unprecedented accuracy, speed, and reliability in defect detection and quality assurance.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Transform your quality control process with our advanced AI solutions. Contact us for a personalized demonstration.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Schedule Demo
                </button>
                <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Revolutionize Your Quality Control?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading manufacturers who trust our AI quality control solutions for superior product quality and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="w-5 h-5" />
                Start Your Quality Transformation
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Star className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiQualityControlPage;