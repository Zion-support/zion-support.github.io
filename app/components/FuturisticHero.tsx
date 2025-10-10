'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const FuturisticHeroPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
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

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FuturisticHero | Zion Tech Group</title>
        <meta name="description" content="Professional FuturisticHero services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="FuturisticHero, AI solutions, IT services, Zion Tech Group, futuristichero" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                FuturisticHero
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced futuristichero solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our FuturisticHero?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our futuristichero solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our futuristichero solutions for your business.
            </p>
          </div>
=======
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-network-bg">{/* Animated Background Elements */}</section>
      <div className="absolute inset-0 particle-field">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"><div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-2000"><div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"><div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">{/* Left Column - Main Content */}<div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{/* Badge */}</div>
  return(<section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-network-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 particle-field">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse">
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000">
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-2000">
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,
          {/* Left Column - Main Content */}</div>
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}</div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
      <div className="absolute inset-0 particle-field"></section>
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"><div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-2000"><div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"><div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">{/* Left Column - Main Content */}</div><div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{/* Badge */}</div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Leading AI Innovation</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">Transform Your<span className="block holographic-text cyber-text">{heroTexts[currentText]}<p className="text-xl text-gray-300 leading-relaxed max-w-lg">Unlock the power of artificial intelligence, quantum computing, and autonomous systems</p>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">Transform Your</h1><span className="block holographic-text cyber-text">{heroTexts[currentText]}</span><p className="text-xl text-gray-300 leading-relaxed max-w-lg">Unlock the power of artificial intelligence, quantum computing, and autonomous systems</p>
                to revolutionize your business operations and achieve unprecedented growth.</p>
              <h1 className="text-5xl lg: text-7xl font-bold text-white leading-tight">,
                Transform Your;</h1>
                <span className="block holographic-text cyber-text">,
                  {heroTexts[currentText]}
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Unlock the power of artificial intelligence, quantum computing, and autonomous systems;
                to revolutionize your business operations and achieve unprecedented growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm: flex-row gap-4">
              <Link;
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              ></Lin>
                <<<<span>Get</span></<<span>Started</span></<span>Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRigh>
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >Watch Demo</Play>
              </Play>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">{stats.map((stat, index) => (</div>
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo;
              </button>,
            </div>)
)
            {/* Stats */})
            <div className="grid grid-cols-2 lg: grid-cols-4 gap-6 pt-8">),
              {stats.map((stat, index) => (</div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (}</div>
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                <div key={index} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  <div className="text-2xl font-bold text-white neon-text">{stat.value}</div><div className="text-sm text-gray-400">{stat.label}</div>
              ))}
            </div>

          {/* Right Column - Visual Elements */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>{/* Main Visual Container */}<div className="relative w-full h-96 lg:h-[500px]">{/* Central Holographic Display */}</div>
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Visual Container */}</div>
            <div className="relative w-full h-96 lg: h-[500px]">,
              {/* Central Holographic Display */}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 cyber-scan-line">
                <div className="absolute inset-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-400/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse">
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>{/* Main Visual Container */}</div><div className="relative w-full h-96 lg:h-[500px]">{/* Central Holographic Display */}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 cyber-scan-line">
                <div className="absolute inset-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-400/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse">
                      <Brain className="w-10 h-10 text-white" />
                    <div className="text-cyan-400 font-bold text-lg">AI Core</div><div className="text-gray-300 text-sm">Processing...</div>
                </div>

              {/* Floating Feature Cards */}
              {features.map((feature, index) => (
                <div;
              {features.map((feature, index) => (}</div>
                <div
                  key={index}
                  className={`absolute w-24 h-24 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-cyan-400/20 flex flex-col items-center justify-center space-y-2 quantum-card ${}
                    index === 0 ? 'top-4 right-4' :
                    index === 1 ? 'bottom-4 left-4' :
                    index === 2 ? 'top-1/2 -left-8' :}
                    'top-1/2 -right-8'}
                  }`}
                  style={{}
                    animationDelay: `${index * 0.5}s`
                  }}
                ></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                  <div className="text-xs text-white font-medium text-center">{feature.title}</div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your futuristichero needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
<<<<<<< HEAD
          </div>
        </div>
      </section>
    </div>
=======

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce"><div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce delay-1000"><div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-2000">

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse">
    </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  );
};

export default FuturisticHeroPage;