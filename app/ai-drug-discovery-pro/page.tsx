import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Flask, Brain, Zap, ArrowRight, Shield, Target, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDrugDiscoveryProPage: React.FC = () => {
  const features = [
    {
      title: 'Molecular Design',
      description: 'AI-powered molecular design and optimization for drug discovery.',
      icon: Flask,
      benefits: [
        'Molecular modeling',
        'Drug optimization',
        'Structure prediction',
        'Property analysis'
      ]
    },
    {
      title: 'Target Identification',
      description: 'Intelligent target identification and validation for drug development.',
      icon: Target,
      benefits: [
        'Target discovery',
        'Validation studies',
        'Pathway analysis',
        'Biomarker identification'
      ]
    },
    {
      title: 'Clinical Trials',
      description: 'AI-powered clinical trial design and patient recruitment optimization.',
      icon: Users,
      benefits: [
        'Trial design',
        'Patient matching',
        'Outcome prediction',
        'Risk assessment'
      ]
    },
    {
      title: 'Safety Analysis',
      description: 'Comprehensive safety analysis and toxicity prediction for drug candidates.',
      icon: Shield,
      benefits: [
        'Toxicity prediction',
        'Safety profiling',
        'Risk assessment',
        'Regulatory compliance'
      ]
    }
  ];

  const benefits = [
    'Accelerate drug discovery by 10x',
    'Reduce development costs by 60%',
    'Improve success rates by 40%',
    'Faster time to market',
    'Enhanced safety profiles',
    'Better patient outcomes',
    'Regulatory compliance',
    'Global reach and support'
  ];

  const useCases = [
    {
      title: 'Pharmaceutical Companies',
      description: 'Comprehensive drug discovery solutions for pharmaceutical companies.',
      icon: Flask
    },
    {
      title: 'Biotech Startups',
      description: 'AI-powered drug discovery tools for biotech startups and research organizations.',
      icon: Brain
    },
    {
      title: 'Research Institutions',
      description: 'Advanced research tools for academic and research institutions.',
      icon: Target
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="AI-powered drug discovery solutions that accelerate pharmaceutical research. Molecular design, target identification, and clinical trials with advanced AI technology." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular design, target identification, clinical trials, drug development" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Drug Discovery
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Accelerate drug discovery with AI-powered solutions. Molecular design, target identification, 
              and clinical trials powered by advanced artificial intelligence technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Drug Discovery Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered drug discovery solutions provide comprehensive tools for pharmaceutical research.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
        <section className="py-20 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Drug Discovery Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for pharmaceutical companies, biotech startups, and research institutions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Drug Discovery?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered drug discovery that transforms pharmaceutical research.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Accelerate Drug Discovery?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading pharmaceutical companies who trust our AI Drug Discovery Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Discovery
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIDrugDiscoveryProPage;