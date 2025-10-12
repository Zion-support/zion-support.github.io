import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Brain, Cpu, Rocket, Network, BarChart3, Bot, Lock, Star, CheckCircle, DollarSign, Users, Clock, TrendingUp, Sparkles, Layers, Target, Award, Lightbulb, Wifi, Smartphone, Monitor, Server, Cpu2, CircuitBoard, Atom, Satellite, Wrench, Settings, BarChart, PieChart, LineChart, Activity, Eye, Search, Filter, Download, Upload, Share, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, X, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, Kiss10, Tongue10, FileText, Package } from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations and drive innovation with cutting-edge machine learning algorithms.',
      price: 'Starting at $299/month',
      link: '/ai-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-emerald-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern business needs with 99.99% uptime guarantee.',
      price: 'Starting at $199/month',
      link: '/it-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
      price: 'Starting at $399/month',
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.',
      price: 'Starting at $249/month',
      link: '/data-analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-400" />,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices for optimal performance.',
      price: 'Starting at $149/month',
      link: '/web-development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      price: 'Starting at $199/month',
      link: '/mobile-development'
    }
  ];

  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Users className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Empowering businesses to thrive in the digital age." />
        <meta name="keywords" content="AI solutions, IT services, cybersecurity, cloud computing, web development, mobile development, data analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0%,rgba(236,72,153,0.05)_50%,transparent_100%)] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-sm font-medium text-white">Next-Gen Technology Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">
                AI & Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. 
              Empowering businesses to thrive in the digital age with cutting-edge technology and innovative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ai-services"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
            >
              Explore AI Solutions
              <Brain className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From AI-powered automation to robust cybersecurity, we provide end-to-end technology solutions 
              that drive growth and innovation for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">{feature.price}</span>
                  <Link
                    to={feature.link}
                    className="text-white hover:text-cyan-400 transition-colors flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl border border-white/20 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that trust Zion Tech Group for their technology needs. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
              >
                View Pricing
                <DollarSign className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
