import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Sparkles, Star, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes and gain competitive advantages.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Secure Infrastructure',
      description: 'Enterprise-grade security and compliance solutions to protect your digital assets.',
      benefits: ['End-to-End Encryption', 'Compliance Management', 'Threat Detection', 'Data Protection'],
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation.',
      benefits: ['Ultra-Fast Speeds', 'Low Latency', 'IoT Integration', 'Edge Computing'],
      gradient: 'from-purple-500 to-pink-600'
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
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
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Advanced AI & IT Solutions
                </h1>
                <Sparkles className="w-8 h-8 text-pink-400 ml-3 animate-pulse" />
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/services" 
                  className="group bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Explore Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 text-3xl md:text-4xl font-bold text-cyan-400/20 blur-sm group-hover:blur-none transition-all duration-300">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-2 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden transition-all duration-1000 delay-${700 + index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 group-hover:text-cyan-400 transition-colors duration-300" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 overflow-hidden group">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse" />
              
              {/* Floating Icons */}
              <div className="absolute top-4 left-4">
                <Star className="w-6 h-6 text-white/30 animate-ping" />
              </div>
              <div className="absolute top-8 right-8">
                <Sparkles className="w-5 h-5 text-white/30 animate-pulse delay-1000" />
              </div>
              <div className="absolute bottom-6 left-8">
                <Rocket className="w-5 h-5 text-white/30 animate-bounce delay-2000" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Star className="w-4 h-4 text-white/30 animate-ping delay-500" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
                  Let's discuss how our AI and IT solutions can drive your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group/btn bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 flex items-center justify-center"
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover/btn:animate-bounce" />
                    Start Your Project
                  </Link>
                  <Link 
                    to="/about" 
                    className="group/btn border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-white/10 flex items-center justify-center"
                  >
                    <Star className="w-5 h-5 mr-2 group-hover/btn:animate-pulse" />
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;