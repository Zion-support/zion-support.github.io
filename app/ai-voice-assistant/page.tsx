'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mic, Brain, CheckCircle, ArrowRight, Zap, Settings, Globe, Clock, Link as LinkIcon, Workflow } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'Speech Recognition',
      description: 'Advanced speech-to-text with 95% accuracy in multiple languages',
      benefits: ['Multi-language support', 'Noise cancellation', 'Real-time processing']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Natural Language Understanding',
      description: 'AI-powered understanding of voice commands and context',
      benefits: ['Context awareness', 'Intent recognition', 'Conversation flow']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: 'Voice Synthesis',
      description: 'Natural-sounding voice responses with customizable personalities',
      benefits: ['Multiple voices', 'Emotion control', 'Custom training']
    },
    {
      icon: <Settings className="w-8 h-8 text-red-400" />,
      title: 'Smart Integration',
      description: 'Seamless integration with your existing systems and workflows',
      benefits: ['API integrations', 'Custom commands', 'Workflow automation']
    }
  ];

  const voiceServices = [
    {
      title: 'Customer Service Assistant',
      description: 'Voice-powered customer support and inquiry handling',
      price: '$399/month',
      features: ['Call routing', 'FAQ responses', 'Escalation management', 'Call analytics']
    },
    {
      title: 'Personal Assistant',
      description: 'AI voice assistant for personal productivity and tasks',
      price: '$199/month',
      features: ['Calendar management', 'Task reminders', 'Email dictation', 'Smart home control']
    },
    {
      title: 'Business Assistant',
      description: 'Voice assistant for business operations and team collaboration',
      price: '$599/month',
      features: ['Meeting scheduling', 'Report generation', 'Data queries', 'Team coordination']
    },
    {
      title: 'Healthcare Assistant',
      description: 'Voice assistant for healthcare providers and patient care',
      price: '$799/month',
      features: ['Patient intake', 'Appointment scheduling', 'Medical dictation', 'Compliance tracking']
    }
  ];

  const stats = [
    { number: '95%', label: 'Speech Accuracy', icon: <Mic className="w-6 h-6 text-cyan-400" /> },
    { number: '50+', label: 'Languages Supported', icon: <Globe className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'Always Available', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { number: '500+', label: 'Voice Commands', icon: <Zap className="w-6 h-6 text-red-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Intelligent Voice AI Solutions</title>
        <meta name="description" content="Build intelligent voice assistants with advanced speech recognition, natural language processing, and voice synthesis. Perfect for customer service, productivity, and business automation." />
        <meta name="keywords" content="AI voice assistant, speech recognition, voice AI, conversational AI, voice synthesis, voice automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-400/30">
              <Mic className="w-4 h-4" />
              <span>AI Voice Assistant</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Intelligent{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Voice AI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create powerful voice assistants with advanced speech recognition, natural language processing, 
              and voice synthesis that understand and respond like humans.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transform hover:scale-105"
              >
                <span>Build Voice Assistant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-indigo-400 text-indigo-400 px-10 py-4 rounded-xl font-semibold hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>Try Voice Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Voice Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge voice AI capabilities that make your assistant truly intelligent
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Voice Services Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Voice <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized voice assistant solutions for different business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {voiceServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-3xl font-bold text-indigo-400 mb-6">
                    {service.price}
                  </div>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full block text-center py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Build Your Voice Assistant?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the voice AI revolution and create intelligent voice assistants that transform how you interact with technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-500/25"
                  >
                    Start Building
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceAssistantPage;