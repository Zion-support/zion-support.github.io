'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileText, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Eye, Users, Clock, Star, Palette, Image, Document } from 'lucide-react';

const AIDocumentProcessingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Intelligent Document Analysis',
      description: 'AI-powered document analysis that extracts key information and insights.',
      benefits: ['Text extraction', 'Data recognition', 'Pattern analysis', 'Content understanding']
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for understanding and processing document content.',
      benefits: ['Language detection', 'Sentiment analysis', 'Entity recognition', 'Text classification']
    },
    {
      icon: Target,
      title: 'Automated Classification',
      description: 'Automatically classify and categorize documents based on content and context.',
      benefits: ['Smart categorization', 'Tag generation', 'Priority assignment', 'Workflow routing']
    },
    {
      icon: Activity,
      title: 'Real-time Processing',
      description: 'Process documents in real-time with instant analysis and insights.',
      benefits: ['Instant processing', 'Live updates', 'Real-time insights', 'Immediate results']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security for document processing and data protection.',
      benefits: ['Data encryption', 'Access control', 'Audit trails', 'Compliance support']
    },
    {
      icon: Database,
      title: 'Document Management',
      description: 'Comprehensive document management with search and retrieval capabilities.',
      benefits: ['Document storage', 'Search functionality', 'Version control', 'Metadata management']
    }
  ];

  const benefits = [
    'Reduce processing time by 90%',
    'Improve accuracy by 95%',
    'Lower operational costs by 80%',
    'Increase productivity by 85%',
    'Enable automated workflows',
    'Enhance data extraction',
    'Scale document processing',
    'Improve compliance'
  ];

  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically process invoices and extract payment information',
      icon: '📄'
    },
    {
      title: 'Contract Analysis',
      description: 'Analyze contracts and extract key terms and clauses',
      icon: '📋'
    },
    {
      title: 'Legal Documents',
      description: 'Process legal documents and identify important information',
      icon: '⚖️'
    },
    {
      title: 'Medical Records',
      description: 'Process medical records and extract patient information',
      icon: '🏥'
    },
    {
      title: 'Financial Reports',
      description: 'Analyze financial reports and extract key metrics',
      icon: '💰'
    },
    {
      title: 'Research Papers',
      description: 'Process research papers and extract findings and conclusions',
      icon: '🔬'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Document Processing - Zion Tech Group | Intelligent Document Analysis</title>
        <meta name="description" content="Advanced AI document processing solutions with intelligent analysis, automated classification, and real-time processing. Transform your document workflows with AI technology." />
        <meta name="keywords" content="AI document processing, document analysis, NLP, document automation, document AI, intelligent processing" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Document Processing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI document processing solutions with intelligent analysis, automated classification, 
              and real-time processing. Transform your document workflows with AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 flex items-center justify-center">
                Get Started
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
                Advanced Document Processing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Intelligent document processing powered by cutting-edge AI technology
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
                Use Cases & Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your document workflows with intelligent processing
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
                Why Choose Our Document Processing?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven results that enhance efficiency and accuracy
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
                Ready to Process Your Documents?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join thousands of organizations using our AI Document Processing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
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

export default AIDocumentProcessingPage;