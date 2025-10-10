'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Eye, 
  Mic, 
  Hand, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock,
  Users,
  TrendingUp,
  Settings,
  Target,
  Heart,
  FileText,
  Globe,
  Database,
  Shield,
  Sparkles,
  Cpu,
  Monitor
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiNeuralInterfacePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Brain-Computer Interface',
      description: 'Direct neural interface for thought-controlled applications',
      benefits: ['Thought-to-text conversion', 'Mental command execution', 'Cognitive enhancement']
    },
    {
      icon: Eye,
      title: 'Eye Tracking AI',
      description: 'Advanced eye movement analysis and gaze-based control',
      benefits: ['Hands-free navigation', 'Attention analysis', 'Accessibility solutions']
    },
    {
      icon: Mic,
      title: 'Neural Voice Synthesis',
      description: 'AI-powered voice generation from neural signals',
      benefits: ['Voice restoration', 'Custom voice creation', 'Real-time synthesis']
    },
    {
      icon: Hand,
      title: 'Gesture Recognition',
      description: 'Advanced hand and body gesture interpretation',
      benefits: ['Natural interaction', 'Sign language translation', 'Motion control']
    }
  ];

  const applications = [
    {
      title: 'Medical Rehabilitation',
      description: 'Neural interfaces for stroke recovery and motor rehabilitation',
      icon: Heart,
      price: '$25,000/month',
      marketPrice: '$40,000-80,000/month',
      features: ['Motor function restoration', 'Cognitive therapy', 'Progress monitoring']
    },
    {
      title: 'Gaming & Entertainment',
      description: 'Immersive gaming experiences with neural control',
      icon: Monitor,
      price: '$5,000/month',
      marketPrice: '$10,000-25,000/month',
      features: ['Thought-controlled gaming', 'Emotion-based gameplay', 'VR integration']
    },
    {
      title: 'Accessibility Solutions',
      description: 'Neural interfaces for people with disabilities',
      icon: Users,
      price: '$15,000/month',
      marketPrice: '$25,000-50,000/month',
      features: ['Communication aids', 'Mobility assistance', 'Independence tools']
    },
    {
      title: 'Research & Development',
      description: 'Neural interface research and prototype development',
      icon: Cpu,
      price: '$30,000/month',
      marketPrice: '$50,000-100,000/month',
      features: ['Custom algorithms', 'Data analysis', 'Prototype development']
    }
  ];

  const technologies = [
    {
      name: 'EEG Signal Processing',
      description: 'Advanced electroencephalography signal analysis',
      icon: Brain
    },
    {
      name: 'fNIRS Technology',
      description: 'Functional near-infrared spectroscopy for brain monitoring',
      icon: Heart
    },
    {
      name: 'EMG Analysis',
      description: 'Electromyography for muscle signal interpretation',
      icon: Zap
    },
    {
      name: 'Computer Vision',
      description: 'AI-powered visual recognition and tracking',
      icon: Eye
    },
    {
      name: 'Machine Learning',
      description: 'Neural network training for pattern recognition',
      icon: Cpu
    },
    {
      name: 'Real-time Processing',
      description: 'Low-latency signal processing and response',
      icon: Settings
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Neural Interface Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary neural interface technology combining AI with brain-computer interfaces for medical, gaming, and accessibility applications." />
        <meta name="keywords" content="neural interface, brain-computer interface, BCI, AI neural, EEG, fNIRS, neural control" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">Next-Generation Neural Technology</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                AI Neural Interface
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Bridge the gap between mind and machine with our advanced AI-powered neural interface 
                technology. Control devices, communicate, and interact using only your thoughts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                >
                  Explore Neural Solutions
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                >
                  Request Demo
                </Link>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Neural Interface Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-purple-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Neural Interface Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applications.map((application, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        <application.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white">{application.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-pink-400 font-semibold">{application.price}</span>
                          <span className="text-gray-400 text-sm line-through">{application.marketPrice}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{application.description}</p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {application.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-pink-300">
                            <CheckCircle className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Advanced Neural Technologies
              </h2>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technologies.map((tech, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <tech.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                      <p className="text-gray-300 text-sm">{tech.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Why Choose Our Neural Interface Solutions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Medical Grade Safety</h3>
                  <p className="text-gray-300">FDA-compliant neural interface technology with rigorous safety testing and validation.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Real-time Processing</h3>
                  <p className="text-gray-300">Ultra-low latency signal processing for immediate neural response and control.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Accessibility Focus</h3>
                  <p className="text-gray-300">Designed to improve quality of life for people with disabilities and mobility challenges.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Connect Mind and Machine?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Experience the future of human-computer interaction with our cutting-edge neural interface technology. 
                  Transform how you interact with technology forever.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                  >
                    Start Neural Journey
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiNeuralInterfacePage;