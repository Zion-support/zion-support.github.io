'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign, Building } from 'lucide-react';

export default function DigitalTransformationPage() {
  const transformationSteps = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of your current digital landscape and strategic planning for transformation.',
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      duration: '2-4 weeks',
      deliverables: ['Digital Audit Report', 'Transformation Roadmap', 'Technology Recommendations']
    },
    {
      step: '02',
      title: 'Infrastructure Modernization',
      description: 'Upgrade your technology infrastructure with cloud-first, scalable solutions.',
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      duration: '4-8 weeks',
      deliverables: ['Cloud Migration', 'System Integration', 'Security Implementation']
    },
    {
      step: '03',
      title: 'AI & Automation Implementation',
      description: 'Deploy AI-powered solutions and intelligent automation to streamline operations.',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      duration: '6-12 weeks',
      deliverables: ['AI Solutions', 'Process Automation', 'Data Analytics Platform']
    },
    {
      step: '04',
      title: 'Training & Optimization',
      description: 'Comprehensive training for your team and continuous optimization of solutions.',
      icon: <Users className="w-8 h-8 text-orange-400" />,
      duration: '2-4 weeks',
      deliverables: ['Team Training', 'Performance Optimization', 'Ongoing Support']
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 300%.',
      metric: '300%'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimized processes.',
      metric: '40%'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Enhanced Security',
      description: 'Implement enterprise-grade security measures to protect your digital assets.',
      metric: '99.9%'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Global Scalability',
      description: 'Scale your operations globally with cloud-based solutions.',
      metric: '50+'
    }
  ];

  const technologies = [
    {
      category: 'Cloud & Infrastructure',
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'MLflow', 'Kubeflow']
    },
    {
      category: 'Data & Analytics',
      icon: <BarChart className="w-6 h-6 text-emerald-400" />,
      technologies: ['Apache Spark', 'Kafka', 'Elasticsearch', 'Tableau', 'Power BI', 'Grafana']
    },
    {
      category: 'Security & Compliance',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      technologies: ['Zero Trust', 'SIEM', 'SOAR', 'GDPR', 'SOC 2', 'ISO 27001']
    }
  ];

  const stats = [
    { number: '200+', label: 'Companies Transformed', icon: <Building className="w-6 h-6 text-cyan-400" /> },
    { number: '300%', label: 'Average Efficiency Gain', icon: <TrendingUp className="w-6 h-6 text-emerald-400" /> },
    { number: '40%', label: 'Cost Reduction', icon: <DollarSign className="w-6 h-6 text-blue-400" /> },
    { number: '99.9%', label: 'Uptime Achieved', icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group | Complete Business Modernization</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Modernize infrastructure, implement AI solutions, and optimize operations for the digital age." />
        <meta name="keywords" content="digital transformation, business modernization, AI implementation, cloud migration, process automation, digital strategy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Digital Transformation - Zion Tech Group | Complete Business Modernization" />
        <meta property="og:description" content="Transform your business with comprehensive digital transformation services. Modernize infrastructure, implement AI solutions, and optimize operations for the digital age." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/digital-transformation" />
        <meta property="og:image" content="https://ziontechgroup.com/digital-transformation-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Transformation - Zion Tech Group | Complete Business Modernization" />
        <meta name="twitter:description" content="Transform your business with comprehensive digital transformation services. Modernize infrastructure, implement AI solutions, and optimize operations for the digital age." />
        <meta name="twitter:image" content="https://ziontechgroup.com/digital-transformation-twitter-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Zap className="w-4 h-4" />
              <span>Digital Transformation</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Business for the Digital Age
              </span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Complete digital transformation services that modernize your infrastructure, 
              implement AI solutions, and optimize operations for maximum efficiency and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/consultation" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Proven <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our digital transformation solutions deliver measurable results for businesses of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Process Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transformation Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                A proven 4-step methodology that ensures successful digital transformation.
              </p>
            </div>
            
            <div className="space-y-12">
              {transformationSteps.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
                      {step.step}
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-cyan-400 font-semibold mb-2">Duration</div>
                      <div className="text-white font-bold">{step.duration}</div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transformation <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Experience the power of digital transformation with measurable business impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:text-white transition-colors">
                    {benefit.metric}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                We leverage the latest technologies to ensure your digital transformation is future-proof.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {tech.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Your Business?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join 200+ companies that have already transformed their operations with our 
                    comprehensive digital transformation solutions. Get started today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>Start Transformation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/consultation" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Free Consultation</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}