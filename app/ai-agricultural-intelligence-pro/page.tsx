'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Leaf, BarChart3, Cloud, Shield, Zap, Users, Award } from 'lucide-react';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'AI-powered crop health monitoring and disease detection using satellite imagery and IoT sensors.',
      benefits: ['Real-time crop analysis', 'Disease early warning', 'Yield prediction', 'Resource optimization']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict weather patterns, market trends, and optimal planting times.',
      benefits: ['Weather forecasting', 'Market analysis', 'Planting optimization', 'Risk assessment']
    },
    {
      icon: Cloud,
      title: 'Smart Irrigation',
      description: 'Intelligent irrigation systems that optimize water usage based on soil moisture and weather data.',
      benefits: ['Water conservation', 'Automated scheduling', 'Soil monitoring', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'Pest Management',
      description: 'AI-driven pest detection and management solutions for sustainable agriculture.',
      benefits: ['Early pest detection', 'Targeted treatment', 'Reduced pesticide use', 'Environmental protection']
    }
  ];

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce water usage by 40%',
    'Minimize pesticide application by 50%',
    'Improve soil health and sustainability',
    'Real-time monitoring and alerts',
    'Data-driven decision making',
    'Cost-effective farming solutions',
    'Environmental sustainability'
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Transform your farming operations with our AI-powered agricultural intelligence solutions. Increase yields, reduce costs, and optimize resources." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, agricultural intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  AI Agricultural Intelligence Pro
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transform your farming operations with cutting-edge AI technology. 
                  Optimize yields, reduce costs, and build a sustainable future for agriculture.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                    <Leaf className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">Smart Farming</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Data Analytics</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                    <Cloud className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">IoT Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Advanced Agricultural Solutions
                  </h2>
                  <p className="text-xl text-gray-300">
                    Comprehensive AI-powered tools for modern farming
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Why Choose Our AI Agricultural Solutions?
                  </h2>
                  <p className="text-xl text-gray-300">
                    Proven results and measurable improvements for your farming operations
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center hover:from-slate-700 hover:to-slate-600 transition-all">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Revolutionize Your Agriculture?
                </h2>
                <p className="text-xl text-green-100 mb-8">
                  Start your journey towards smarter, more sustainable farming today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;