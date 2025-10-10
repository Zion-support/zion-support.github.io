'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, BarChart, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Eye, Users, Clock, Star, Palette, Image } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning interactive dashboards with real-time data visualization.',
      benefits: ['Real-time updates', 'Interactive charts', 'Customizable layouts', 'Mobile responsive']
    },
    {
      icon: Palette,
      title: 'Advanced Charts',
      description: 'Comprehensive chart library with advanced visualization capabilities.',
      benefits: ['Multiple chart types', 'Custom styling', 'Animation effects', 'Export options']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'AI algorithms that automatically generate insights from your data.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Smart recommendations', 'Automated insights']
    },
    {
      icon: Target,
      title: 'Custom Visualizations',
      description: 'Build custom visualizations tailored to your specific business needs.',
      benefits: ['Custom charts', 'Brand integration', 'Flexible design', 'Scalable solutions']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor key metrics and KPIs with real-time data visualization.',
      benefits: ['Live data feeds', 'Performance monitoring', 'Alert systems', 'Trend analysis']
    },
    {
      icon: Image,
      title: 'Data Storytelling',
      description: 'Transform complex data into compelling visual stories and narratives.',
      benefits: ['Story templates', 'Narrative flow', 'Visual hierarchy', 'Engaging presentations']
    }
  ];

  const benefits = [
    'Improve data comprehension by 90%',
    'Reduce analysis time by 75%',
    'Increase engagement by 85%',
    'Enhance decision-making by 80%',
    'Enable real-time insights',
    'Automate reporting',
    'Scale visualization operations',
    'Enhance data storytelling'
  ];

  const useCases = [
    {
      title: 'Business Dashboards',
      description: 'Create executive dashboards for strategic decision making',
      icon: '📊'
    },
    {
      title: 'Marketing Analytics',
      description: 'Visualize marketing campaigns and customer behavior data',
      icon: '📈'
    },
    {
      title: 'Financial Reports',
      description: 'Generate comprehensive financial reports and analysis',
      icon: '💰'
    },
    {
      title: 'Operations Monitoring',
      description: 'Monitor operational metrics and performance indicators',
      icon: '⚙️'
    },
    {
      title: 'Customer Analytics',
      description: 'Visualize customer data and behavior patterns',
      icon: '👥'
    },
    {
      title: 'Research & Development',
      description: 'Present research findings and experimental data',
      icon: '🔬'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group | Advanced Visualization Solutions</title>
        <meta name="description" content="Advanced AI data visualization solutions with interactive dashboards, real-time monitoring, and AI-powered insights. Transform your data into compelling visual stories." />
        <meta name="keywords" content="AI data visualization, interactive dashboards, data visualization, business intelligence, visualization AI, data storytelling" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8">
              <BarChart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Data Visualization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI data visualization solutions with interactive dashboards, real-time monitoring, 
              and AI-powered insights. Transform your data into compelling visual stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
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
                Advanced Visualization Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Intelligent data visualization powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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
                Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your data into compelling visual stories
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
                Why Choose Our Data Visualization?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that enhance data comprehension and decision making
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
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
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Visualize Your Data?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join thousands of organizations using our AI Data Visualization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Contact Sales
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

export default AIDataVisualizationPage;