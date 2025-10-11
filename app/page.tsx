import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain competitive advantages.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and compliance solutions to protect your digital assets.',
      benefits: ['End-to-End Encryption', 'Compliance Management', 'Threat Detection', 'Data Protection']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation.',
      benefits: ['Ultra-Fast Speeds', 'Low Latency', 'IoT Integration', 'Edge Computing']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
      </div>

      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, 5G implementation, IT services, digital transformation, enterprise technology" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Neon Glow Effect */}
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Advanced AI & IT Solutions
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
              <span className="text-cyan-300 font-semibold"> Experience the future of technology today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
              <Link 
                to="/about" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <Link 
                to="/contact" 
                className="group border-2 border-white/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="flex justify-center space-x-4 sm:space-x-8 opacity-60">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0s'}}>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center animate-bounce" style={{animationDelay: '0.4s'}}>
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-20 px-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Core Services
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-2 flex-shrink-0 group-hover:text-green-300 transition-colors duration-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 relative">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Ready to Transform Your Business?
                  </span>
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and IT solutions can drive your success. 
                  <span className="text-cyan-200 font-semibold"> Get started today!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center relative overflow-hidden text-sm sm:text-base"
                  >
                    <span className="relative z-10">Start Your Project</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/about" 
                    className="group border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
                  >
                    <span className="relative z-10">Learn About Us</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Services Preview Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Explore Our Micro SAAS Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our innovative micro SAAS services designed to solve real business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* AI Content Generator */}
            <div className="group bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  AI Content Generator
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Generate high-quality content for blogs, social media, and marketing materials using advanced AI.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-green-400 font-semibold text-sm">Starting at $29/mo</span>
                  <Link to="/micro-saas-services/ai-content-generator" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* AI Analytics Dashboard */}
            <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  AI Analytics Dashboard
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Real-time business intelligence and predictive analytics powered by machine learning.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-green-400 font-semibold text-sm">Starting at $49/mo</span>
                  <Link to="/micro-saas-services/ai-analytics-dashboard" className="text-purple-400 hover:text-purple-300 text-xs sm:text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
            
            {/* AI Email Assistant */}
            <div className="group bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 group-hover:text-green-300 transition-colors duration-300">
                  AI Email Assistant
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Automate email responses, schedule meetings, and manage your inbox with AI intelligence.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-green-400 font-semibold text-sm">Starting at $19/mo</span>
                  <Link to="/micro-saas-services/ai-email-assistant" className="text-green-400 hover:text-green-300 text-xs sm:text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12 px-4">
            <Link 
              to="/micro-saas-services" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm sm:text-base"
            >
              View All Micro SAAS Services
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;