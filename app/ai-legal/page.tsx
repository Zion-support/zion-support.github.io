import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Scale, Brain, Target, ArrowRight, Shield, Users, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILegalPage: React.FC = () => {
  const features = [
    {
      title: 'Legal Research',
      description: 'AI-powered legal research with intelligent search and analysis.',
      icon: Scale,
      benefits: [
        'Case law search',
        'Precedent analysis',
        'Citation tracking',
        'Relevance scoring'
      ]
    },
    {
      title: 'Document Review',
      description: 'Advanced document review and analysis for legal documents.',
      icon: FileText,
      benefits: [
        'Contract analysis',
        'Document review',
        'Clause extraction',
        'Risk assessment'
      ]
    },
    {
      title: 'Legal Writing',
      description: 'AI-powered legal writing assistance and document generation.',
      icon: Brain,
      benefits: [
        'Brief generation',
        'Memo writing',
        'Contract drafting',
        'Citation formatting'
      ]
    },
    {
      title: 'Compliance',
      description: 'Intelligent compliance monitoring and regulatory tracking.',
      icon: Shield,
      benefits: [
        'Regulatory updates',
        'Compliance tracking',
        'Risk alerts',
        'Audit preparation'
      ]
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const useCases = [
    {
      title: 'Law Firms',
      description: 'Comprehensive legal solutions for law firms and legal practices.',
      icon: Scale
    },
    {
      title: 'Corporate Legal',
      description: 'AI-powered legal tools for corporate legal departments.',
      icon: Target
    },
    {
      title: 'Legal Education',
      description: 'Advanced legal tools for law schools and legal education.',
      icon: Brain
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Legal - Zion Tech Group</title>
        <meta name="description" content="AI-powered legal solutions that streamline research, document review, and legal writing. Advanced AI technology for better legal practice." />
        <meta name="keywords" content="AI legal, legal technology, legal research, document review, legal writing, compliance monitoring" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Legal
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform legal practice with AI-powered solutions. Legal research, document review, 
              and legal writing assistance for better efficiency and accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
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
                Legal Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered legal solutions provide comprehensive tools for legal practice.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
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
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Legal Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for legal professionals who need to streamline their practice.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-indigo-500 transition-all duration-300 text-center">
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
                Why Choose Our Legal Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered legal solutions that transform practice.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-indigo-400 flex-shrink-0" />
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
                Ready to Transform Legal Practice?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading legal professionals who trust our AI Legal solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Practicing
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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

export default AILegalPage;