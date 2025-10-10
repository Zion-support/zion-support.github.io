'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Leaf, Droplets, Sun, BarChart, CheckCircle, ArrowRight } from 'lucide-react';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Health Monitoring',
      description: 'AI-powered analysis of crop health using satellite imagery and IoT sensors.',
      benefits: ['Disease detection', 'Pest identification', 'Growth optimization', 'Yield prediction']
    },
    {
      icon: Droplets,
      title: 'Smart Irrigation',
      description: 'Intelligent water management system that optimizes irrigation based on weather and soil conditions.',
      benefits: ['Water conservation', 'Automated scheduling', 'Soil moisture monitoring', 'Weather integration']
    },
    {
      icon: Sun,
      title: 'Weather Prediction',
      description: 'Advanced weather forecasting and climate analysis for agricultural planning.',
      benefits: ['7-day forecasts', 'Climate trends', 'Risk assessment', 'Seasonal planning']
    },
    {
      icon: BarChart,
      title: 'Yield Optimization',
      description: 'Data-driven insights to maximize crop yields and optimize farming operations.',
      benefits: ['Yield prediction', 'Resource optimization', 'Performance analytics', 'ROI tracking']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming operations." />
        <meta name="keywords" content="AI agriculture, smart farming, crop monitoring, precision agriculture" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              AI Agricultural
              <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Intelligence Pro
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your farming operations with advanced AI-powered agricultural intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-green-400 text-green-600 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Agricultural Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge AI technology for modern farming operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Revolutionize Your Farming?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get started with our AI agricultural intelligence solutions and optimize your farming operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us Today
              </button>
              <button className="border border-green-400 text-green-600 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;