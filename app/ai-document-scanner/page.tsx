'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileText, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Eye, Users, Clock, Star, Palette, Image, Document, Scan } from 'lucide-react';

const AIDocumentScannerPage: React.FC = () => {
  const features = [
    {
      icon: Scan,
      title: 'AI-Powered Scanning',
      description: 'Advanced AI algorithms that automatically detect and scan documents with high accuracy.',
      benefits: ['Auto-detection', 'Edge detection', 'Perspective correction', 'Quality enhancement']
    },
    {
      icon: Brain,
      title: 'Intelligent Recognition',
      description: 'OCR and AI recognition that extracts text and data from scanned documents.',
      benefits: ['Text extraction', 'Data recognition', 'Language detection', 'Format preservation']
    },
    {
      icon: Camera,
      title: 'Mobile Scanning',
      description: 'Scan documents using your mobile device with advanced camera processing.',
      benefits: ['Mobile app', 'Camera integration', 'Real-time processing', 'Cloud sync']
    },
    {
      icon: Target,
      title: 'Batch Processing',
      description: 'Process multiple documents simultaneously with batch scanning capabilities.',
      benefits: ['Bulk scanning', 'Queue management', 'Progress tracking', 'Error handling']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with encrypted storage and privacy protection.',
      benefits: ['Data encryption', 'Secure storage', 'Access control', 'Audit trails']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant document processing with real-time feedback and optimization.',
      benefits: ['Live preview', 'Instant results', 'Quality feedback', 'Auto-correction']
    }
  ];

  const benefits = [
    'Improve scanning accuracy by 95%',
    'Reduce processing time by 90%',
    'Lower operational costs by 80%',
    'Increase productivity by 85%',
    'Enable mobile scanning',
    'Automate workflows',
    'Scale document processing',
    'Enhance data quality'
  ];

  const useCases = [
    {
      title: 'Receipt Scanning',
      description: 'Scan and digitize receipts for expense management',
      icon: '🧾'
    },
    {
      title: 'Invoice Processing',
      description: 'Scan invoices and extract payment information',
      icon: '📄'
    },
    {
      title: 'Contract Digitization',
      description: 'Convert paper contracts to digital format',
      icon: '📋'
    },
    {
      title: 'ID Document Scanning',
      description: 'Scan and verify identity documents',
      icon: '🆔'
    },
    {
      title: 'Medical Records',
      description: 'Digitize medical documents and patient records',
      icon: '🏥'
    },
    {
      title: 'Legal Documents',
      description: 'Scan legal documents for digital archiving',
      icon: '⚖️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Document Scanner - Zion Tech Group | Intelligent Scanning Solutions</title>
        <meta name="description" content="Advanced AI document scanner with intelligent recognition, mobile scanning, and batch processing. Transform paper documents into digital format with AI technology." />
        <meta name="keywords" content="AI document scanner, document scanning, OCR, mobile scanning, document digitization, scanning AI" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <Scan className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Document Scanner
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI document scanner with intelligent recognition, mobile scanning, 
              and batch processing. Transform paper documents into digital format with AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
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
                Advanced Scanning Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Intelligent document scanning powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
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
                Transform your paper documents into digital format
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
                Why Choose Our Document Scanner?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that enhance efficiency and reduce costs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
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
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Scan Your Documents?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of organizations using our AI Document Scanner
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
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

export default AIDocumentScannerPage;