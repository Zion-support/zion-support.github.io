'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Building } from 'lucide-react';

const AIClimateSolutionsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      title: 'Carbon Footprint Tracking',
      description: 'AI-powered real-time carbon footprint monitoring and reduction recommendations',
      icon: Leaf,
      benefits: [
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
      ]
    },
    {
      title: 'Climate Prediction Models',
      description: 'Advanced AI models for accurate weather and climate forecasting',
      icon: Cloud,
      benefits: [
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
      ]
    },
    {
      title: 'Sustainability Planning',
      description: 'AI-driven sustainability roadmaps and green initiative optimization',
      icon: Target,
      benefits: [
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Progress tracking & reporting'
      ]
    },
    {
      title: 'Emission Monitoring',
      description: 'Comprehensive emission tracking and compliance management system',
      icon: Activity,
      benefits: [
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Regulatory compliance tracking'
      ]
    },
    {
      title: 'Renewable Energy Optimization',
      description: 'AI-powered optimization of renewable energy systems and smart grid management',
      icon: Globe,
      benefits: [
        'Energy efficiency optimization',
        'Smart grid management',
        'Renewable energy forecasting',
        'Cost reduction strategies'
      ]
    },
    {
      title: 'Environmental Risk Assessment',
      description: 'Comprehensive environmental risk analysis and mitigation strategies using AI',
      icon: CheckCircle,
      benefits: [
        'Risk identification & analysis',
        'Mitigation strategy recommendations',
        'Environmental impact assessment',
        'Compliance risk monitoring'
      ]
    }
  ];

  const benefits = [
    'Reduce carbon footprint by 40%',
    'Improve energy efficiency by 60%',
    'Lower operational costs by 35%',
    'Increase sustainability compliance by 95%',
    'Enable real-time environmental monitoring',
    'Automate compliance reporting',
    'Scale across industries',
    'Future-proof climate solutions'
  ];

  const useCases = [
    {
      title: 'Corporate Sustainability',
      description: 'Help corporations achieve their sustainability goals and reduce environmental impact',
      icon: '🏢'
    },
    {
      title: 'Smart Cities',
      description: 'Build sustainable smart cities with AI-powered environmental management',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Optimize agricultural practices for climate resilience and sustainability',
      icon: '🌾'
    },
    {
      title: 'Energy Sector',
      description: 'Optimize renewable energy systems and reduce carbon footprint',
      icon: '⚡'
    },
    {
      title: 'Transportation',
      description: 'Develop sustainable transportation solutions and reduce emissions',
      icon: '🚗'
    },
    {
      title: 'Manufacturing',
      description: 'Optimize manufacturing processes for environmental sustainability',
      icon: '🏭'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions for carbon tracking, sustainability planning, and environmental monitoring. Professional-grade tools for climate action." />
        <meta name="keywords" content="AI climate solutions, carbon tracking, sustainability, environmental monitoring, climate tech, green technology" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Solutions Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional-grade AI climate solutions for carbon tracking, sustainability planning, and environmental monitoring. 
              Take climate action with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Start Climate Action
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced Climate Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools for climate monitoring and sustainability management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    {feature.benefits && (
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Climate Action Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From corporate sustainability to smart cities, our solutions drive climate action across industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
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
                Why Choose Climate Solutions Pro?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional-grade climate solutions that deliver measurable environmental impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Take Climate Action?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your climate journey today with our professional-grade AI climate solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                Get Started Now
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIClimateSolutionsProPage;
