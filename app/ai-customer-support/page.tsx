'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MessageCircle, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Brain, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Phone, Mail, MapPin } from 'lucide-react';

<<<<<<< HEAD
=======
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand context, handle complex queries, and provide instant responses 24/7.',
      benefits: ['99.9% uptime', 'Instant responses', 'Multi-language support', 'Context understanding']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Communication',
      description: 'Seamless integration across email, chat, phone, and social media platforms.',
      benefits: ['Unified experience', 'Context preservation', 'Cross-platform sync', 'Multi-channel support']
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Automated ticket routing, priority assignment, and resolution suggestions based on AI analysis.',
      benefits: ['Faster resolution', 'Reduced workload', 'Smart prioritization', 'Process automation']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with data encryption and compliance with industry standards.',
      benefits: ['Data protection', 'Compliance ready', 'Secure communication', 'Privacy protection']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and performance metrics to optimize customer support operations.',
      benefits: ['Performance tracking', 'Data-driven insights', 'Continuous improvement', 'ROI measurement']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless handoff between AI and human agents for complex issues requiring human touch.',
<<<<<<< HEAD
=======
      benefits: ['Best of both worlds', 'Smooth transitions', 'Enhanced efficiency', 'Quality assurance']
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Handle 10x more inquiries',
    'Enable 24/7 support',
    'Improve resolution rates',
    'Scale support operations',
    'Enhance customer experience'
  ];

  const useCases = [
    {
<<<<<<< HEAD
=======
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns with AI assistance',
      icon: '🛒'
    },
    {
      title: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting for software and hardware',
      icon: '🔧'
    },
    {
      title: 'Billing & Payments',
      description: 'Assist with billing questions, payment issues, and account management',
      icon: '💳'
    },
    {
      title: 'Product Information',
      description: 'Answer questions about products, features, and specifications',
      icon: '📋'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Help customers schedule appointments and manage bookings',
      icon: '📅'
    },
    {
      title: 'General Inquiries',
      description: 'Handle general questions and provide information about services',
      icon: '❓'
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with our AI Customer Support solutions. Intelligent automation, omnichannel communication, and human-AI collaboration for better customer experience." />
        <meta name="keywords" content="AI customer support, customer service automation, omnichannel support, AI chatbots, customer experience, support AI" />
      </Helmet>

<<<<<<< HEAD
=======
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with our AI Customer Support solutions. Intelligent automation, 
              omnichannel communication, and human-AI collaboration for better customer experience.
            </p>
<<<<<<< HEAD
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
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
                Advanced Customer Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Customer Support solutions combine cutting-edge technology with customer expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From e-commerce to technical support, our AI Customer Support serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of customer support with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Join thousands of businesses who are already using our AI Customer Support solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICustomerSupportPage;
