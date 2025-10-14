'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      href: '/ai-solutions',
      price: 'Starting at $2,999/month',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      href: '/cloud-infrastructure',
      price: 'Starting at $1,499/month',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', '24/7 Monitoring'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
      href: '/cybersecurity',
      price: 'Starting at $3,999/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Compliance'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      href: '/digital-transformation',
      price: 'Starting at $4,999/month',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'ROI Optimization'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS applications designed for specific business needs.',
      href: '/micro-saas-solutions',
      price: 'Starting at $999/month',
      features: ['Custom Development', 'API Integration', 'User Management', 'Analytics Dashboard'],
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: ChartBarIcon,
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for enhanced connectivity.',
      href: '/5g-solutions',
      price: 'Starting at $2,499/month',
      features: ['Network Optimization', 'IoT Integration', 'Edge Computing', 'Ultra-low Latency'],
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Custom Solutions',
    'Scalable Architecture',
    'Security First',
    'Performance Optimized',
    'Cost Effective'
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '4+', label: 'Years Experience' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, technology consulting, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
        
        {/* Hero Section */}
        <section className="relative z-10 container mx-auto px-4 text-center py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <SparklesIcon className="w-16 h-16 mx-auto text-purple-400 mb-4 animate-pulse" />
              <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
                Zion Tech Group
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <BoltIcon className="w-8 h-8 text-yellow-400 animate-bounce" />
                <span className="text-2xl font-semibold text-cyan-400">Innovation</span>
                <FireIcon className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={service.href} className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                With over 4 years of experience in cutting-edge technology solutions, 
                we've helped businesses across various industries transform their operations 
                and achieve unprecedented growth.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center group">
                  <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform">25+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">99%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center group">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Contact Us
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .animated-grid {
          background-image: 
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .floating {
          animation: floating 6s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .neon-text {
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.1);
        }
        
        .hover-lift {
          transition: transform 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        
        .hover-glow {
          transition: box-shadow 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }
        
        .glass-dark {
          backdrop-filter: blur(10px);
          background: rgba(30, 41, 59, 0.8);
        }
        
        .glow-effect {
          transition: all 0.3s ease;
        }
        
        .glow-effect:hover {
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </>
  );
};

export default HomePage;