'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Stethoscope, Heart, Activity, Users, FileText, Microscope, Pill, Hospital, Clipboard, AlertCircle, TrendingUp, Database, Lock } from 'lucide-react';

const AIHealthcarePage: React.FC = () => {
  const features = [
    {
      icon: Stethoscope,
      title: 'AI Medical Diagnosis',
      description: 'Advanced AI systems for medical image analysis, symptom assessment, and diagnostic support.',
      benefits: ['Medical image analysis', 'Symptom assessment', 'Diagnostic support', 'Early detection']
    },
    {
      icon: Heart,
      title: 'Predictive Health Analytics',
      description: 'Predict patient outcomes, disease progression, and treatment responses using machine learning.',
      benefits: ['Outcome prediction', 'Risk assessment', 'Treatment optimization', 'Personalized medicine']
    },
    {
      icon: Activity,
      title: 'Remote Patient Monitoring',
      description: 'Continuous health monitoring using IoT devices and AI-powered analysis of vital signs.',
      benefits: ['Real-time monitoring', 'Alert systems', 'Trend analysis', 'Proactive care']
    },
    {
      icon: Microscope,
      title: 'Drug Discovery & Development',
      description: 'AI-powered drug discovery, molecular analysis, and clinical trial optimization.',
      benefits: ['Molecular analysis', 'Drug design', 'Clinical trials', 'Side effect prediction']
    },
    {
      icon: FileText,
      title: 'Electronic Health Records',
      description: 'Intelligent EHR systems with automated documentation, coding, and clinical decision support.',
      benefits: ['Automated documentation', 'Clinical coding', 'Decision support', 'Data integration']
    },
    {
      icon: Users,
      title: 'Patient Engagement',
      description: 'AI-powered chatbots, virtual assistants, and personalized health recommendations.',
      benefits: ['Virtual assistants', 'Health coaching', 'Medication reminders', 'Lifestyle recommendations']
    }
  ];

  const benefits = [
    'Improve diagnostic accuracy by 40%',
    'Reduce medical errors by 60%',
    'Save 30+ hours per week',
    'Enhance patient outcomes',
    'Streamline clinical workflows',
    'Enable personalized medicine',
    'Reduce healthcare costs',
    'Improve patient satisfaction'
  ];

  const useCases = [
    {
      title: 'Radiology & Imaging',
      description: 'AI-powered analysis of X-rays, MRIs, CT scans, and other medical images',
      icon: '🩻'
    },
    {
      title: 'Pathology',
      description: 'Automated analysis of tissue samples, blood tests, and cellular structures',
      icon: '🔬'
    },
    {
      title: 'Cardiology',
      description: 'Heart disease detection, ECG analysis, and cardiovascular risk assessment',
      icon: '❤️'
    },
    {
      title: 'Oncology',
      description: 'Cancer detection, treatment planning, and drug response prediction',
      icon: '🎗️'
    },
    {
      title: 'Mental Health',
      description: 'AI-powered mental health assessment, therapy support, and treatment monitoring',
      icon: '🧠'
    },
    {
      title: 'Emergency Medicine',
      description: 'Triage optimization, emergency response, and critical care support',
      icon: '🚨'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Healthcare Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform healthcare with AI-powered solutions. Medical diagnosis, drug discovery, patient monitoring, and clinical decision support for better patient outcomes." />
        <meta name="keywords" content="AI healthcare, medical AI, healthcare technology, medical diagnosis, drug discovery, patient monitoring" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Healthcare Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform healthcare with AI-powered solutions. Medical diagnosis, drug discovery, 
                patient monitoring, and clinical decision support for better patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
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
                  AI Healthcare Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Advanced AI technologies transforming healthcare delivery and patient care
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
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
                  Healthcare Applications
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  From diagnosis to treatment, our AI healthcare solutions serve diverse medical needs
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
                  Why Choose Our AI Healthcare?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Experience the future of healthcare with our revolutionary AI technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg mb-4">
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
              <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Healthcare?
                </h2>
                <p className="text-xl text-red-100 mb-8">
                  Join leading healthcare organizations already using our AI solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIHealthcarePage;