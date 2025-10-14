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
  SparklesIcon,
  BoltIcon,
  FireIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  LightBulbIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions powered by advanced machine learning algorithms to transform your business operations.',
      href: '/ai-solutions',
      color: 'from-purple-500 to-cyan-500',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $199/month'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions with 99.9% uptime guarantee and enterprise-grade security.',
      href: '/cloud-infrastructure',
      color: 'from-blue-500 to-indigo-500',
      features: ['Auto-scaling', 'Load Balancing', 'CDN Integration', 'Disaster Recovery'],
      price: 'Starting at $299/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions with advanced threat detection, zero-trust architecture, and 24/7 monitoring.',
      href: '/cybersecurity',
      color: 'from-green-500 to-emerald-500',
      features: ['Threat Detection', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'Starting at $399/month'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business with cutting-edge technology and processes.',
      href: '/digital-transformation',
      color: 'from-orange-500 to-red-500',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training'],
      price: 'Starting at $499/month'
    },
    {
      icon: GlobeAltIcon,
      title: 'Micro SaaS Solutions',
      description: 'AI-powered micro SaaS tools designed to streamline specific business processes and boost productivity.',
      href: '/micro-saas-solutions',
      color: 'from-pink-500 to-rose-500',
      features: ['Analytics Dashboard', 'Content Generation', 'Customer Support', 'Project Management'],
      price: 'Starting at $99/month'
    },
    {
      icon: CogIcon,
      title: 'IT Services',
      description: 'Comprehensive IT services including infrastructure management, software development, and technical support.',
      href: '/it-solutions',
      color: 'from-teal-500 to-cyan-500',
      features: ['Infrastructure Management', 'Software Development', 'Technical Support', 'System Integration'],
      price: 'Starting at $249/month'
    }
  ];

  const features = [
    {
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our team of certified professionals',
      icon: UserGroupIcon,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs',
      icon: CogIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to grow with your business from startup to enterprise',
      icon: CloudIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security with SOC 2 compliance and encryption',
      icon: ShieldCheckIcon,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Performance Optimized',
      description: 'Lightning-fast performance with 99.9% uptime guarantee',
      icon: BoltIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with transparent, no-hidden-fees structure',
      icon: CurrencyDollarIcon,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: UserGroupIcon },
    { number: '99.9%', label: 'Uptime SLA', icon: ShieldCheckIcon },
    { number: '24/7', label: 'Support', icon: ClockIcon },
    { number: '50+', label: 'Countries Served', icon: GlobeAltIcon }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs by 50%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The micro SaaS solutions provided by Zion Tech Group have revolutionized our business processes. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP of Operations',
      content: 'Outstanding cybersecurity services and 24/7 support. Zion Tech Group is our trusted technology partner.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, cybersecurity, digital transformation, micro SaaS, business automation" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. Expert services, proven results, competitive pricing." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-60 right-40 w-8 h-8 bg-yellow-500/20 rounded-full animate-ping"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-6 h-6 text-purple-400 mr-3" />
                <span className="text-purple-300 font-semibold text-lg">AI-Powered Technology Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Transform Your Business
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Leading provider of <span className="text-cyan-400 font-semibold">AI and IT solutions</span> that drive growth, 
                efficiency, and innovation for businesses worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                >
                  <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                  Get Started Today
                </Link>
                <Link 
                  to="/services" 
                  className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                >
                  <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                  Explore Solutions
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Services
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.href}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <BoltIcon className="w-5 h-5 text-yellow-400 mr-2" />
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-cyan-400 font-bold text-lg">{service.price}</div>
                      <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
                        Learn More <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  We deliver exceptional value through cutting-edge technology, expert support, and proven results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  Don't just take our word for it. Here's what our satisfied clients have to say about our services.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-slate-700/50 pt-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-cyan-400">{testimonial.role}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Join thousands of businesses already using our AI and IT solutions to drive growth, efficiency, and innovation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-5 rounded-2xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-bold text-xl shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-7 h-7 mr-3 group-hover:rotate-12 transition-transform" />
                    Start Your Journey
                  </Link>
                  <Link 
                    to="/about" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-5 rounded-2xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-bold text-xl"
                  >
                    <EyeIcon className="w-7 h-7 mr-3 group-hover:scale-110 transition-transform" />
                    Learn More
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <MapPinIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
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