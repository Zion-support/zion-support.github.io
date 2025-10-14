'use client';

import React, { useEffect, useState } from 'react';
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
  SparklesIcon,
  BoltIcon,
  GlobeAltIcon,
  SignalIcon,
  ChartBarIcon,
  CogIcon,
  LightBulbIcon,
  HeartIcon,
  FireIcon,
  TrophyIcon,
  GiftIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  CodeBracketIcon,
  DatabaseIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  KeyIcon,
  BugAntIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  CubeIcon,
  BeakerIcon,
  CommandLineIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business with machine learning, NLP, and computer vision.',
      href: '/ai-solutions',
      color: 'from-purple-500 to-pink-500',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses with 99.9% uptime guarantee.',
      href: '/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', '24/7 Monitoring']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets with advanced threat detection.',
      href: '/cybersecurity',
      color: 'from-red-500 to-orange-500',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and operations.',
      href: '/digital-transformation',
      color: 'from-green-500 to-emerald-500',
      features: ['Process Automation', 'Workflow Optimization', 'Change Management', 'ROI Tracking']
    },
    {
      icon: GlobeAltIcon,
      title: 'Micro SaaS Solutions',
      description: 'Powerful micro SaaS tools that solve specific business problems with AI-powered intelligence.',
      href: '/micro-saas-solutions',
      color: 'from-indigo-500 to-purple-500',
      features: ['Content Generation', 'Analytics Dashboard', 'Chatbot Builder', 'Code Assistant']
    },
    {
      icon: SignalIcon,
      title: '5G Solutions',
      description: 'Next-generation 5G solutions for ultra-fast connectivity and IoT applications.',
      href: '/5g-solutions',
      color: 'from-yellow-500 to-orange-500',
      features: ['Network Infrastructure', 'IoT Integration', 'Edge Computing', 'Mobile Applications']
    }
  ];

  const features = [
    { icon: ClockIcon, text: '24/7 Expert Support', color: 'text-blue-400' },
    { icon: CogIcon, text: 'Custom Solutions', color: 'text-purple-400' },
    { icon: ChartBarIcon, text: 'Scalable Architecture', color: 'text-green-400' },
    { icon: ShieldCheckIcon, text: 'Security First', color: 'text-red-400' },
    { icon: BoltIcon, text: 'Performance Optimized', color: 'text-yellow-400' },
    { icon: CurrencyDollarIcon, text: 'Cost Effective', color: 'text-emerald-400' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: TrophyIcon },
    { number: '50+', label: 'AI Services', icon: CpuChipIcon },
    { number: '99.9%', label: 'Uptime Guarantee', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Support Available', icon: ClockIcon }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'The micro SaaS tools they provided solved our specific business challenges perfectly. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their cybersecurity solutions protected us from multiple threats. Professional and reliable service.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology including AI services, cloud infrastructure, cybersecurity, and micro SaaS solutions." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, cybersecurity, digital transformation, micro SaaS, 5G solutions, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Transform Your Business with
                  <span className="block">AI & IT Solutions</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  We deliver cutting-edge artificial intelligence and information technology solutions 
                  that drive growth, efficiency, and innovation for businesses of all sizes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group hover:scale-105"
                  >
                    <RocketLaunchIcon className="w-5 h-5 mr-2" />
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    to="/services" 
                    className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group hover:scale-105"
                  >
                    <BriefcaseIcon className="w-5 h-5 mr-2" />
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={service.href}
                      className="inline-flex items-center text-purple-300 hover:text-white font-semibold group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our AI and IT solutions can help you achieve your goals and accelerate growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group hover:scale-105"
                  >
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center group hover:scale-105"
                  >
                    <UserGroupIcon className="w-5 h-5 mr-2" />
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomePage;