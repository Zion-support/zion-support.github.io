'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Mic, Brain, CheckCircle, ArrowRight, Star, Users, Award, Zap, Shield, BarChart, Target, Settings, Smartphone, Globe, Database, Server, Mail, Phone, MapPin, Clock, TrendingUp, Code, Eye, FileText, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Wifi, Package, ShoppingCart, Sparkles, Cpu, Workflow, MessageCircle } from 'lucide-react';

const AiVoiceAssistantPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: <Mic className="w-8 h-8 text-cyan-400" />,
      title: 'Speech Recognition',
      description: 'Advanced speech-to-text with 95% accuracy in multiple languages',
      benefits: ['Multi-language support', 'Noise cancellation', 'Real-time processing']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
=======
      icon: <Brain className="w-6 h-6-text-cyan-400" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
      title: 'Natural Language Understanding',
      description: 'AI-powered understanding of voice commands and context',
      benefits: ['Context awareness', 'Intent recognition', 'Conversation flow']
    },
    {
<<<<<<< HEAD
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
=======
      icon: <Volume2 className="w-6 h-6-text-purple-400" />,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural, expressive speech with customizable voices and emotional tones'
    },
    {
      icon: <Clock className="w-6 h-6-text-yellow-400" />,
      title: '24/7 Availability',
      description: 'Always-on voice assistant that can handle tasks, answer questions, and provide support'
    },
    {
      icon: <Target className="w-6 h-6-text-green-400" />,
      title: 'Multi-platform Integration',
      description: 'Seamlessly integrate with mobile apps, websites, smart devices, and IoT systems'
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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
<<<<<<< HEAD
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
=======
    <Layout
      title="AI Voice Assistant - Intelligent Voice Solutions | Zion Tech Group"
      description="Transform user interaction with AI-powered voice assistants. Natural language processing, human-like voice synthesis, and seamless integration. Start your free trial today."
      keywords="AI voice assistant, voice AI, speech recognition, voice synthesis, conversational AI, voice automation" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900">
        {/* Hero Section */}
        <section className="pt-32-pb-20" />
          <div className="container mx-autopx-4">
            <div className="text-center max-w-4 xlmx-auto">
              <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6" />
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Voice Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8-leading-relaxed" />
                Create intelligent voice assistants that understand natural speech, execute commands, 
                and provide hands-free automation for your business and personal needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building
                </Link>
                <Link to="/ai-services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">View All AI Services
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Voice Features</span>
=======
        <section className="py-20" />
          <div className="container mx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Features</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge voice AI capabilities that make your assistant truly intelligent
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {feature.title}
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4-gap-8">
              {features.map((feature, index) => (
                <div key="{index}" className="text-centergroup" />
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transformduration-300">
                    <feature.icon className="w-10 h-10-text-cyan-400" / />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"   />{feature.title}</h3>
                  <p className="text-gray-300-leading-relaxed" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30-to-slate-900/30" />
          <div className="container mx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Use <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3 xlmx-auto" />
                Discover how our AI voice assistants can transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4-gap-8">
              {useCases.map((useCase, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transformhover:scale-105" />
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transformduration-300">
                    <useCase.icon className="w-6 h-6-text-cyan-400" / />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400-transition-colors"  />{useCase.title}
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
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

<<<<<<< HEAD
        {/* Voice Services Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Voice <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
=======
        {/* Pricing Section */}
        <section className="py-20" />
          <div className="container mx-autopx-4">
            <div className="text-centermb-16">
              <h2 className="text-4 xl font-bold text-white mb-6" />
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Pricing</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized voice assistant solutions for different business needs
              </p>
            </div>

<<<<<<< HEAD
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
=======
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5 xlmx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xlp-8">
                <h3 className="text-2 xl font-bold text-white mb-4"   />Starter</h3>
                <div className="text-4 xl font-bold text-cyan-400 mb-6">$99<span className="text-lgtext-gray-400"   />/month</span></div>
                <ul className="space-y-3 mb-8" />
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Up to 1,000 voice commands/month
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Basic speech recognition
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Email support
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Standard integrations
                  </li>
                </ul>
                <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600  hover:to-purple-600 transition-all duration-300-block">Get Started
                </Link>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl p-8-relative">
                <div className="absolute -top-4 left-1/2 transform-translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-smfont-semibold"  />Most Popular
                  </span>
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4"   />Professional</h3>
                <div className="text-4 xl font-bold text-cyan-400 mb-6">$199<span className="text-lgtext-gray-400"   />/month</span></div>
                <ul className="space-y-3 mb-8" />
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Up to 10,000 voice commands/month
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Advanced speech recognition
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Priority support
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Custom wake words
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Analytics dashboard
                  </li>
                </ul>
                <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600  hover:to-purple-600 transition-all duration-300-block">Get Started
                </Link>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xlp-8">
                <h3 className="text-2 xl font-bold text-white mb-4"   />Enterprise</h3>
                <div className="text-4 xl font-bold text-cyan-400 mb-6"   />Custom</div>
                <ul className="space-y-3 mb-8" />
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Unlimited voice commands
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Custom AI training
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    24/7 dedicated support
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    White-label solution
                  </li>
                  <li className="flex items-centertext-gray-300" />
                    <CheckCircle className="w-5 h-5 text-green-400-mr-3" / />
                    Custom development
                  </li>
                </ul>
                <Link to="/contact" className="w-full border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300-block">Contact Sales
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
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
=======
        <section className="py-20" />
          <div className="container mx-autopx-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xl p-12 text-center">
              <h2 className="text-4 xl font-bold text-white mb-6"  />Ready to Build Your AI Voice Assistant?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2 xlmx-auto" />
                Start creating intelligent voice assistants that understand and respond to natural speech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4-justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600  hover:to-purple-600 transition-all duration-300 transformhover:scale-105">Start Building Now
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transformhover:scale-105">Learn More About Us
                        </Link>
      </div>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bff1
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceAssistantPage;