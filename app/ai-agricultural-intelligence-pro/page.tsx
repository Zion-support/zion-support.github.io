'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Leaf, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'Advanced AI-powered crop monitoring and health assessment using satellite imagery and IoT sensors.',
      benefits: ['Real-time crop health', 'Disease detection', 'Yield prediction']
    },
    {
      icon: Zap,
      title: 'Precision Agriculture',
      description: 'Optimize farming operations with precision agriculture techniques and AI-driven insights.',
      benefits: ['Resource optimization', 'Smart irrigation', 'Fertilizer management']
    },
    {
      icon: Clock,
      title: 'Weather Prediction',
      description: 'Accurate weather forecasting and climate analysis for better farming decisions.',
      benefits: ['Weather alerts', 'Climate analysis', 'Seasonal planning']
    },
    {
      icon: Shield,
      title: 'Pest Management',
      description: 'Intelligent pest detection and management using computer vision and machine learning.',
      benefits: ['Early pest detection', 'Automated treatment', 'Reduced pesticide use']
    },
    {
      icon: Users,
      title: 'Farm Management',
      description: 'Comprehensive farm management system with AI-powered recommendations and analytics.',
      benefits: ['Farm planning', 'Resource tracking', 'Performance analytics']
    },
    {
      icon: BarChart,
      title: 'Yield Optimization',
      description: 'Maximize crop yields through AI-driven optimization and predictive analytics.',
      benefits: ['Yield prediction', 'Optimization algorithms', 'ROI analysis']
    }
  ];

  const benefits = [
    'Increase crop yields by 30%',
    'Reduce water usage by 40%',
    'Minimize pesticide use by 50%',
    'Improve farm efficiency',
    'Enable data-driven decisions',
    'Support sustainable farming'
  ];

  const useCases = [
    {
      title: 'Crop Monitoring',
      description: 'Monitor crop health and growth with AI-powered analysis',
      icon: '🌱'
    },
    {
      title: 'Precision Irrigation',
      description: 'Optimize water usage with smart irrigation systems',
      icon: '💧'
    },
    {
      title: 'Pest Control',
      description: 'Detect and manage pests with intelligent systems',
      icon: '🐛'
    },
    {
      title: 'Yield Prediction',
      description: 'Predict crop yields with advanced analytics',
      icon: '📊'    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group | Smart Farming</title>
        <meta name="description" content="Transform agriculture with AI-powered intelligence solutions. Crop monitoring, precision farming, and smart agriculture technology for modern farmers." />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop monitoring, agricultural intelligence, farming technology" />      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Agricultural
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">              Intelligence Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform agriculture with AI-powered intelligence solutions. Monitor crops, optimize resources, 
            and maximize yields with cutting-edge agricultural technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Agricultural AI Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Agricultural Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI agricultural intelligence solutions combine cutting-edge technology with farming expertise 
              to revolutionize modern agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Agricultural Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI agricultural solutions support various farming operations and crop types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Agricultural Intelligence?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered agriculture with our proven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAgriculturalIntelligenceProPage;
