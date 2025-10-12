'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, Smartphone, 
  Database, Settings, Users, BarChart3, 
  Zap, CheckCircle, ArrowRight, Phone, 
  Mail, MapPin, Calendar, Timer, Globe, 
  TrendingUp, Star, Award, Lightbulb, 
  Monitor, Lock, Heart, DollarSign, 
  MessageCircle, FileText, Rocket, Target, 
  Cpu, Network, Activity, Eye, Search, 
  Filter, Download, Upload, Share, Wifi2, 
  Signal, Bluetooth, Camera, Mic, Headphones, 
  Speaker, Volume2, VolumeX, Play, Pause, 
  SkipForward, SkipBack, Repeat, Shuffle, 
  ThumbsUp, ThumbsDown, Bookmark, Flag, 
  AlertTriangle, Info, HelpCircle, Plus, 
  Minus, Edit, Trash2, Save, Copy, Paste, 
  Cut, Undo, Redo, RefreshCw, RotateCcw, 
  RotateCw, Move, Maximize, Minimize, Square, 
  Circle, Triangle, Hexagon, Octagon, Pentagon, 
  Star2, Heart2, Smile, Frown, Meh, Laugh, 
  Angry, Surprised, Confused, Wink, Kiss, 
  Tongue, Package
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations',
      link: '/ai-services',
      color: 'from-cyan-500 to-blue-500',
      features: ['AI Chatbots', 'Content Generation', 'Data Analytics', 'Computer Vision']
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-400" />,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and development services for modern businesses',
      link: '/it-services',
      color: 'from-purple-500 to-pink-500',
      features: ['Cloud Migration', 'Web Development', 'Mobile Apps', 'DevOps']
    },
    {
      icon: <Code className="w-12 h-12 text-green-400" />,
      title: 'Micro SAAS',
      description: 'Ready-to-use software solutions designed for specific business needs',
      link: '/micro-saas',
      color: 'from-green-500 to-emerald-500',
      features: ['Analytics Tools', 'CRM Solutions', 'Security Tools', 'Content Management']
    }
  ];

  const aiServices = [
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Create intelligent conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence solutions' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image and video analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition and synthesis' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation with AI' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, Google Cloud solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' },
    { name: 'Cybersecurity', url: '/cybersecurity-solutions', description: 'Security and compliance' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automated deployment pipelines' },
    { name: 'Database Management', url: '/database-management', description: 'Database design and optimization' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', description: 'AI customer support' },
    { name: 'Zion Security Shield', url: '/zion-security-shield', description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', description: 'Cloud backup and recovery' },
    { name: 'Zion Content Studio', url: '/zion-content-studio', description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', description: 'AI-enhanced CRM' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, web development, mobile apps, and micro SAAS products." />
        <meta name="keywords" content="AI services, IT services, cloud computing, web development, mobile development, micro SAAS" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Technology Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                From AI-powered solutions to cloud infrastructure, we provide end-to-end technology services 
                that drive innovation and accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Main Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Three core service categories designed to meet all your technology needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={service.link}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 group-hover:translate-x-1`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <Brain className="w-12 h-12 text-cyan-400 inline-block mr-4" />
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, gain insights, and enhance customer experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <div className="flex items-center mt-4 text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <Cloud className="w-12 h-12 text-purple-400 inline-block mr-4" />
                IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Robust IT infrastructure and development services to keep your business running smoothly and securely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {itServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <div className="flex items-center mt-4 text-purple-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <Code className="w-12 h-12 text-green-400 inline-block mr-4" />
                Micro <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">SAAS</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions designed for specific business needs and workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <div className="flex items-center mt-4 text-green-400 group-hover:translate-x-1 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let our expert team help you choose the right services and create a custom solution for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Free Consultation
                  </Link>
                  <Link
                    to="/case-studies"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;