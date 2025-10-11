'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Leaf, BarChart, Shield, Zap, CheckCircle, ArrowRight, Brain, Target, TrendingUp, FileText} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'AI-powered crop health monitoring using satellite imagery and IoT sensors.'
    },
    {
      icon: BarChart,
      title: 'Yield Prediction',
      description: 'Advanced analytics to predict crop yields and optimize farming decisions.'
    },
    {
      icon: Shield,
      title: 'Disease Detection',
      description: 'Early detection of plant diseases and pests using computer vision.'
    },
    {
      icon: Zap,
      title: 'Smart Irrigation',
      description: 'Automated irrigation systems based on weather and soil conditions.'
    }
  ];

  const services = [
    {
      icon: Brain,
      title: 'Precision Agriculture',
      description: 'Data-driven farming techniques for maximum efficiency and sustainability.'
    },
    {
      icon: Target,
      title: 'Resource Optimization',
      description: 'Optimize water, fertilizer, and pesticide usage for better results.'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'AI-powered market analysis to help farmers make informed decisions.'
    },
    {
      icon: FileText,
      title: 'Compliance Management',
      description: 'Automated compliance tracking for agricultural regulations and standards.'
    }
  ];

  const benefits = [
    'Increase crop yields by 25-40%',
    'Reduce water usage by 30%',
    'Minimize pesticide use by 50%',
    'Improve soil health and sustainability',
    'Real-time monitoring and alerts'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming operations." />
        <meta name="keywords" content="AI agriculture, precision farming, smart agriculture, crop monitoring, agricultural AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Intelligence Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your farming operations with our advanced AI-powered agricultural intelligence platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI platform combines machine learning, computer vision, and IoT data to deliver intelligent farming solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-100 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From precision agriculture to compliance management, we cover all aspects of modern farming.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Proven Benefits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI agricultural intelligence platform delivers measurable results for farmers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the agricultural revolution with our AI-powered intelligence platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAgriculturalIntelligenceProPage;