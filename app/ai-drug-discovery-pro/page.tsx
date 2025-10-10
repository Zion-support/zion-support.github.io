'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Eye, Users, Clock, Star, Palette, Image, FileText, FlaskConical } from 'lucide-react';

const AIDrugDiscoveryProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Drug Design',
      description: 'Advanced AI algorithms that design new drug compounds with optimal properties.',
      benefits: ['Molecular design', 'Property prediction', 'Drug optimization', 'Virtual screening']
    },
    {
      icon: Target,
      title: 'Target Identification',
      description: 'Intelligent identification of drug targets using AI and machine learning.',
      benefits: ['Target discovery', 'Pathway analysis', 'Disease modeling', 'Biomarker identification']
    },
    {
      icon: FlaskConical,
      title: 'Virtual Screening',
      description: 'High-throughput virtual screening of compound libraries for drug discovery.',
      benefits: ['Compound screening', 'ADMET prediction', 'Toxicity assessment', 'Efficacy prediction']
    },
    {
      icon: Activity,
      title: 'Clinical Trial Optimization',
      description: 'AI-powered optimization of clinical trial design and patient selection.',
      benefits: ['Trial design', 'Patient stratification', 'Outcome prediction', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with regulatory requirements and safety standards.',
      benefits: ['FDA compliance', 'Safety protocols', 'Quality assurance', 'Documentation']
    },
    {
      icon: Zap,
      title: 'Accelerated Discovery',
      description: 'Dramatically reduce drug discovery timelines with AI-powered automation.',
      benefits: ['Time reduction', 'Cost optimization', 'Faster validation', 'Efficient workflows']
    }
  ];

  const benefits = [
    'Reduce discovery time by 70%',
    'Improve success rate by 60%',
    'Lower development costs by 50%',
    'Increase hit rates by 80%',
    'Enable personalized medicine',
    'Accelerate clinical trials',
    'Scale drug discovery',
    'Enhance drug efficacy'
  ];

  const useCases = [
    {
      title: 'Oncology Drug Discovery',
      description: 'Develop targeted cancer therapies with AI-powered drug design',
      icon: '🎯'
    },
    {
      title: 'Rare Disease Treatment',
      description: 'Discover treatments for rare diseases using AI algorithms',
      icon: '🔬'
    },
    {
      title: 'Antibiotic Development',
      description: 'Design new antibiotics to combat drug-resistant bacteria',
      icon: '💊'
    },
    {
      title: 'Neurological Disorders',
      description: 'Develop treatments for Alzheimer\'s, Parkinson\'s, and other neurological conditions',
      icon: '🧠'
    },
    {
      title: 'Cardiovascular Drugs',
      description: 'Create new cardiovascular medications with improved efficacy',
      icon: '❤️'
    },
    {
      title: 'Immunotherapy',
      description: 'Design immunotherapies for autoimmune diseases and cancer',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group | Advanced Drug Discovery Platform</title>
        <meta name="description" content="Advanced AI drug discovery platform with intelligent drug design, target identification, and clinical trial optimization. Accelerate drug development with AI technology." />
        <meta name="keywords" content="AI drug discovery, drug design, pharmaceutical AI, drug development, clinical trials, drug discovery platform" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8">
              <FlaskConical className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI drug discovery platform with intelligent drug design, target identification, 
              and clinical trial optimization. Accelerate drug development with AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300">
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
                Advanced Drug Discovery Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Intelligent drug discovery powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
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
                Transform drug discovery with intelligent AI technology
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
                Why Choose Our Drug Discovery Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that accelerate drug development and improve outcomes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg mb-4">
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
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Accelerate Drug Discovery?
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join leading pharmaceutical companies using our AI Drug Discovery Pro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
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

export default AIDrugDiscoveryProPage;