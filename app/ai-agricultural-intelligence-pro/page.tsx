'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Leaf, BarChart3, Zap, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Smart Crop Monitoring',
      description: 'AI-powered crop health monitoring and disease detection using advanced computer vision.',
      benefits: ['Real-time crop analysis', 'Early disease detection', 'Yield prediction', 'Automated alerts']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict crop yields, weather patterns, and market trends.',
      benefits: ['Weather forecasting', 'Yield optimization', 'Market analysis', 'Risk assessment']
    },
    {
      icon: Zap,
      title: 'Automated Irrigation',
      description: 'Smart irrigation systems that optimize water usage based on soil and weather data.',
      benefits: ['Water conservation', 'Cost reduction', 'Improved yields', 'Environmental sustainability']
    },
    {
      icon: Shield,
      title: 'Pest Management',
      description: 'AI-driven pest detection and management solutions for sustainable farming.',
      benefits: ['Pest identification', 'Treatment recommendations', 'Chemical reduction', 'Organic alternatives']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of farm conditions with instant alerts and recommendations.',
      benefits: ['Continuous monitoring', 'Instant alerts', 'Mobile access', 'Historical data']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to agricultural experts and AI specialists for guidance and support.',
      benefits: ['Expert consultation', 'Training programs', 'Technical support', 'Best practices']
    }
  ];

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce water usage by 40%',
    'Minimize pesticide use by 50%',
    'Lower operational costs by 25%',
    'Improve soil health and sustainability',
    'Enable data-driven decision making',
    'Scale operations efficiently',
    'Reduce environmental impact'
  ];

  const useCases = [
    {
      title: 'Precision Agriculture',
      description: 'Optimize farming practices with data-driven insights',
      icon: '🌱'
    },
    {
      title: 'Crop Health Monitoring',
      description: 'Monitor crop health and detect issues early',
      icon: '🔍'
    },
    {
      title: 'Weather Prediction',
      description: 'Predict weather patterns for better planning',
      icon: '🌤️'
    },
    {
      title: 'Yield Optimization',
      description: 'Maximize crop yields through AI recommendations',
      icon: '📈'
    },
    {
      title: 'Resource Management',
      description: 'Optimize water, fertilizer, and pesticide usage',
      icon: '💧'
    },
    {
      title: 'Market Analysis',
      description: 'Analyze market trends and pricing for better decisions',
      icon: '📊'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Transform your farming operations with our AI Agricultural Intelligence Pro solution. Advanced AI technology for crop monitoring, yield optimization, and sustainable agriculture." />
        <meta name="keywords" content="AI agriculture, smart farming, crop monitoring, agricultural intelligence, precision agriculture, farm automation" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Agricultural Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your farming operations with our advanced AI Agricultural Intelligence Pro solution. 
              Optimize yields, reduce costs, and ensure sustainable agriculture practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                Start Your Smart Farm
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Agricultural Intelligence Pro combines cutting-edge technology with agricultural expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From small farms to large agricultural operations, our AI solution adapts to your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Agricultural Intelligence Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of sustainable and efficient agriculture with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Agriculture?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of farmers who are already using our AI Agricultural Intelligence Pro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;
