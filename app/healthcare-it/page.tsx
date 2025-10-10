'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, Shield, BarChart, Zap, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Database, Code, Smartphone, Settings, Lock, Globe, Stethoscope } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const HealthcareITPage: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState('telemedicine');

  const solutions = [
    {
      id: 'telemedicine',
      title: 'Telemedicine Platform',
      description: 'Secure video consultations and remote patient monitoring',
      icon: Heart,
      benefits: ['Remote consultations', 'Patient monitoring', 'Secure messaging', 'HIPAA compliance']
    },
    {
      id: 'ai-diagnostics',
      title: 'AI Diagnostics',
      description: 'AI-powered medical imaging and diagnostic assistance',
      icon: Stethoscope,
      benefits: ['Medical imaging analysis', 'Diagnostic assistance', 'Early detection', 'Accuracy improvement']
    },
    {
      id: 'ehr-integration',
      title: 'EHR Integration',
      description: 'Seamless integration with existing electronic health records',
      icon: Database,
      benefits: ['Data interoperability', 'Workflow optimization', 'Real-time updates', 'Compliance reporting']
    },
    {
      id: 'patient-portal',
      title: 'Patient Portal',
      description: 'Comprehensive patient engagement and management platform',
      icon: Users,
      benefits: ['Appointment scheduling', 'Health records access', 'Prescription management', 'Communication tools']
    }
  ];

  const capabilities = [
    {
      icon: Heart,
      title: 'Patient Care',
      description: 'Comprehensive patient care and management solutions'
    },
    {
      icon: Database,
      title: 'Health Data Analytics',
      description: 'Advanced analytics for health data and insights'
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Seamless integration with existing healthcare systems'
    },
    {
      icon: Smartphone,
      title: 'Mobile Health',
      description: 'Mobile applications for healthcare providers and patients'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Integration with core healthcare and administrative systems'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Multi-jurisdiction healthcare compliance and regulatory support'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'HIPAA Compliance',
      description: 'Full compliance with healthcare privacy and security regulations'
    },
    {
      icon: TrendingUp,
      title: 'Improved Efficiency',
      description: 'Streamline workflows and reduce administrative burden by up to 70%'
    },
    {
      icon: Clock,
      title: 'Real-time Access',
      description: 'Access patient data and make decisions in real-time'
    },
    {
      icon: Users,
      title: 'Better Patient Care',
      description: 'Enhanced patient experience and improved health outcomes'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '95%', label: 'Diagnostic Accuracy', icon: Stethoscope },
    { number: '70%', label: 'Efficiency Improvement', icon: TrendingUp },
    { number: '24/7', label: 'Support & Monitoring', icon: Clock }
  ];

  const selectedSolutionData = solutions.find(solution => solution.id === selectedSolution);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <SEOOptimizer
        title="Healthcare IT Solutions - Zion Tech Group"
        description="Transform healthcare delivery with AI-powered solutions. Telemedicine, diagnostics, EHR integration, and more for modern healthcare providers."
        keywords="healthcare IT, telemedicine, AI diagnostics, EHR integration, patient portal, HIPAA compliance, Zion Tech Group"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Healthcare <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">IT Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform healthcare delivery with AI-powered solutions. Telemedicine, diagnostics, EHR integration, and more for modern healthcare providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare IT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for healthcare providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Solution List */}
            <div className="space-y-4">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedSolution === solution.id
                      ? 'bg-purple-500/20 border-purple-500 border-2'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedSolution === solution.id
                        ? 'bg-purple-500'
                        : 'bg-gradient-to-r from-purple-500 to-blue-600'
                    }`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{solution.title}</h3>
                      <p className="text-gray-300 text-sm">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Solution Details */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <selectedSolutionData?.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedSolutionData?.title}
                </h3>
                <p className="text-gray-300">{selectedSolutionData?.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {selectedSolutionData?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology capabilities for healthcare providers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Healthcare IT Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform healthcare delivery with our proven solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Healthcare Compliance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay compliant with healthcare regulations and standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'HIPAA',
                description: 'Health Insurance Portability and Accountability Act compliance'
              },
              {
                title: 'HITECH',
                description: 'Health Information Technology for Economic and Clinical Health Act'
              },
              {
                title: 'GDPR',
                description: 'General Data Protection Regulation for health data'
              },
              {
                title: 'FDA',
                description: 'Food and Drug Administration medical device regulations'
              }
            ].map((regulation, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{regulation.title}</h3>
                <p className="text-gray-300 text-sm">{regulation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our healthcare IT solutions can improve patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcareITPage;