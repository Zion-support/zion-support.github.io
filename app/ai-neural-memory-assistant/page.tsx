import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Brain, Target, Users, ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AINeuralMemoryAssistantPage: React.FC = () => {
  const features = [
    {
      title: 'Memory Enhancement',
      description: 'AI-powered memory enhancement and cognitive training for better mental performance.',
      icon: Brain,
      benefits: [
        'Memory training',
        'Cognitive exercises',
        'Pattern recognition',
        'Recall improvement'
      ]
    },
    {
      title: 'Knowledge Management',
      description: 'Intelligent knowledge management and information organization.',
      icon: Target,
      benefits: [
        'Information organization',
        'Knowledge retrieval',
        'Content categorization',
        'Search optimization'
      ]
    },
    {
      title: 'Learning Assistance',
      description: 'AI-powered learning assistance and educational support.',
      icon: Users,
      benefits: [
        'Personalized learning',
        'Study optimization',
        'Progress tracking',
        'Skill development'
      ]
    },
    {
      title: 'Cognitive Analytics',
      description: 'Advanced analytics for cognitive performance and improvement.',
      icon: BarChart3,
      benefits: [
        'Performance metrics',
        'Progress tracking',
        'Insights generation',
        'Improvement recommendations'
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
      title: 'Students',
      description: 'AI-powered learning and memory assistance for students and learners.',
      icon: Brain
    },
    {
      title: 'Professionals',
      description: 'Cognitive enhancement tools for professionals and knowledge workers.',
      icon: Target
    },
    {
      title: 'Researchers',
      description: 'Advanced memory and knowledge management for researchers and academics.',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Neural Memory Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered neural memory assistant that enhances memory, manages knowledge, and supports learning. Advanced AI technology for better cognitive performance." />
        <meta name="keywords" content="AI neural memory, memory enhancement, knowledge management, learning assistance, cognitive training" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Neural Memory
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Enhance your memory and cognitive abilities with AI-powered neural memory assistant. Memory training, 
              knowledge management, and learning support for better mental performance.
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
                Neural Memory Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered neural memory assistant provides comprehensive tools for cognitive enhancement.
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
                Neural Memory Assistant Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for individuals and organizations that need cognitive enhancement and memory support.
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
                Why Choose Our Neural Memory Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered neural memory assistance that transforms cognitive performance.
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
                Ready to Enhance Your Memory?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join individuals and organizations who trust our AI Neural Memory Assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Enhancing
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

export default AINeuralMemoryAssistantPage;