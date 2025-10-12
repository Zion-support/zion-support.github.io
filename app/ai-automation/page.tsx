'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Lightbulb, Rocket, Globe, Heart, TrendingUp, BarChart, Cpu, Server, Database, Wifi, Smartphone, Monitor, Lock, Settings, Wrench, Activity, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Automate complex business processes with intelligent decision-making capabilities',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Brain,
      title: 'Intelligent Processing',
      description: 'AI-powered data processing and analysis for smarter business decisions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Automation',
      description: 'Instant response and processing for time-critical business operations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Secure Integration',
      description: 'Enterprise-grade security with seamless integration into existing systems',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Improve process accuracy and consistency',
    '24/7 automated operations',
    'Scalable and customizable solutions',
    'Real-time monitoring and analytics',
    'Cost-effective implementation'
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI automation solutions. Workflow automation, intelligent decision making, and custom integrations for improved efficiency." />
        <meta name="keywords" content="AI automation, workflow automation, business process automation, intelligent automation, process optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business operations with intelligent automation solutions that streamline workflows, 
                reduce manual tasks, and improve efficiency across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Automating
                </Link>
                <Link 
                  to="/ai-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View All AI Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your business processes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Automation</span>?
                </h2>
                <p className="text-xl text-gray-300">
                  Experience the power of intelligent automation
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl border border-cyan-500/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">
                    Let's discuss how AI automation can transform your business operations and drive efficiency.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses already using our AI automation solutions to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Automation Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore All AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPage;