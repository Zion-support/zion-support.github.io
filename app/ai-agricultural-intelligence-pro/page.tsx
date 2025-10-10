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
      benefits: ['Real-time monitoring', 'Disease detection', 'Yield prediction', 'Growth tracking']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to predict crop yields, weather patterns, and market trends.',
      benefits: ['Yield forecasting', 'Weather prediction', 'Market analysis', 'Risk assessment']
    },
    {
      icon: Cloud,
      title: 'Smart Irrigation',
      description: 'Intelligent irrigation systems that optimize water usage based on soil conditions and weather.',
      benefits: ['Water optimization', 'Soil monitoring', 'Weather integration', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'Pest Management',
      description: 'AI-driven pest detection and management solutions for sustainable farming.',
      benefits: ['Early detection', 'Targeted treatment', 'Reduced pesticides', 'Sustainable farming']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automated farming operations using robotics and AI for increased efficiency.',
      benefits: ['Robotic farming', 'Process automation', 'Labor reduction', '24/7 operations']
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to agricultural experts and AI specialists for continuous support.',
      benefits: ['Expert consultation', 'Technical support', 'Training programs', 'Best practices']
    }
  ];

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce water usage by 40%',
    'Minimize pesticide use by 50%',
    'Lower operational costs by 25%',
    'Improve crop quality and consistency',
    'Enable data-driven decision making',
    'Reduce environmental impact',
    'Scale farming operations efficiently'
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered agricultural solutions for modern farming. Increase yields, reduce costs, and optimize operations with our advanced agricultural intelligence platform." />
        <meta name="keywords" content="AI agriculture, smart farming, agricultural intelligence, precision farming, crop monitoring, farm automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Agricultural
              <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligence Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your farming operations with our advanced AI agricultural intelligence platform. 
              Increase yields, reduce costs, and optimize every aspect of your agricultural business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our agricultural intelligence platform combines cutting-edge AI with deep farming expertise 
                to deliver unprecedented insights and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-green-400 mr-3" />
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

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of farmers who have transformed their operations with our AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Farming?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey towards smarter, more efficient farming with our AI agricultural intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;