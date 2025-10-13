'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

'use client';
import React, {useCallback, useState, useEffect, Suspense, lazy, memo}from 'react';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

import StructuredData from './components/StructuredData';

import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

// Loading skeleton component;
const ServiceCardSkeleton: React.FC = memo(() => (,
const HomePage: React.FC = () => {,
    const [isLoaded, setIsLoaded] = useState(false);
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton',
;
const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation;
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer)}, []);

  // Analytics tracking for phone clicks - optimized;
  const handlePhoneClick = useCallback(() => {if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as {gtag: (command: string, action: string, parameters: Record<string, unknown>) => void}}).gtag;
      gtag('event', 'phone_click', {)
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']},
    {icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']},
    {icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']},
    {icon: Code,
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']},
    {icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']},
    {icon: Users,
      title: 'Consulting Services',
      description: 'Expert guidance to help you navigate digital transformation and technology adoption.',
      benefits: ['Strategy Planning', 'Technology Assessment', 'Implementation Support', 'Training']},
  ];
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']},
    {icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']},
    {icon: Cpu,
      title: 'Micro SaaS',
      description: 'Specialized software-as-a-service solutions designed for specific business needs.',
      href: '/micro-saas',
      features: ['Custom SaaS', 'API Integration', 'Scalable Solutions', 'Maintenance']}]

  return(<React.Fragment>)</React.Fragment>
      <SEOOptimizer;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page Backup | Zion Tech Group</title>
        <meta name="description" content="Professional Page Backup services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page-backup, AI solutions, IT services, Zion Tech Group, page backup" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page Backup
              </span>
              <br />
              <span className="text-white">Solutions</span>
    <>
      <SEOOptimizer
      <PerformanceOptimizer;
        enableImageOptimization={true}enableLazyLoading={true}enablePreloading={true}enableCodeSplitting={true}>
        <AccessibilityEnhancer;
          enableKeyboardNavigation={true}enableScreenReaderSupport={true}enableHighContrast={true}enableFocusManagement={true}>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">{/* Navigation */</div>} <Navigation />
            
            {/* Skip to main content for accessibility */} <a;
            {/* Hero Section */} <section id="main-content" className="relative pt-20 pb-16 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
                <div className="text-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Trusted by 500+ Companies Worldwide;
                    </div>
                  </div>
                  <h1 className="text-4xl md: text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">,</h1>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">Advanced AI & IT Solutions;</span>
                  <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-12">,</div>
                    <a;
                      href="/contact"
                      className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                      aria-label="Get started with our services">
                      <span>Get Started</span>
                      <ArrowRight className="w-5 h-5 group-hover: translate-x-1 transition-transform" />,
                    </a>
                    <a;
                      href="tel: +13024640950",
                      onClick={handlePhoneClick}className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                  {/* Stats Section */} <div className="grid grid-cols-2 md: grid-cols-4 gap-8 max-w-4xl mx-auto">,</div>
                    <div className="text-center">
                      <div className="text-3xl md: text-4xl font-bold text-cyan-400 mb-2">500+</div>,
                      <div className="text-sm text-gray-300">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md: text-4xl font-bold text-cyan-400 mb-2">99.9%</div>,
                      <div className="text-sm text-gray-300">Uptime Guarantee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md: text-4xl font-bold text-cyan-400 mb-2">24/7</div>,
                      <div className="text-sm text-gray-300">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md: text-4xl font-bold text-cyan-400 mb-2">5★</div>,
                      <div className="text-sm text-gray-300">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>

const HomePage: React.FC = memo(() => {,
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    preloadComponents();
    setIsLoaded(true)}, []);

      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']},
    {icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']},
    {icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']},
    {icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']},
    {icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']},
    {icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      benefits: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']},
  ];
  const stats = [
    {number: '500+', label: 'Projects Completed' ,},
    {number: '99.9%', label: 'Uptime Guarantee' ,},
    {number: '24/7', label: 'Support Available' ,},
    {number: '50+', label: 'Expert Team Members' ,}]

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <StructuredData type="Organization" />
      <main>{/* Hero Section */</main>} <section className="relative py-20 px-4 sm: px-6 lg:px-8 overflow-hidden" aria-labelledby="hero-heading">,</section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} aria-hidden="true" />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 id="hero-heading" className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">,</h1>
              Transform Your Business with;
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI & IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">We help businesses leverage cutting-edge technology to drive growth,</p>
              improve efficiency, and stay ahead of the competition.
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    };
  ];
;
const benefits = [
];
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
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page backup solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page backup solutions deliver unmatched performance, security, and scalability.
            </p>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
              </div>
            ))
          </div>
        </div>
      </section>
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page backup needs and get a customized solution.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
            </section>

            {/* Services Section */} <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
                    <div;
                      key={service.title}className="cyber-card group hover: scale-105 transition-all duration-300",
                      style={{ animationDelay: `${index * 100,}ms` }}
                    >
                      <div className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description</p>}</p>
                        <div className="space-y-2 mb-6">{service.features.map((feature, featureIndex) => (</div>
                            <div key={featureIndex}className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature</span>}</span>
                            </div>
                          ))}
                        </div>
                        <a;
                          href={service.href}className="inline-flex items-center space-x-2 text-cyan-400 hover: text-cyan-300 font-medium group-hover:translate-x-1 transition-transform",
            {/* Features Section */} <section className="py-20">
              <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">We combine cutting-edge technology with deep industry expertise to deliver exceptional results;</p>
                    <div;
                      key={feature.title}className="cyber-card group hover: scale-105 transition-all duration-300",
                      style={{ animationDelay: `${index * 100,}ms` }}
                    >
                      <div className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{feature.description</p>}</p>
                        <div className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</div>
                            <div key={benefitIndex}className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{benefit</span>}</span>
            {/* Testimonials Section */} <section className="py-20 bg-slate-900/50">
              <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">,</div>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                    What Our Clients Say;
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">Don't just take our word for it. Here's what industry leaders say about our solutions.</p>
                  </p>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                  <div className="cyber-card">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (</div>
                          <Star key={i}className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">"Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%."</p>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">JS;</div>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (</div>
                          <Star key={i}className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">"Outstanding service and cutting-edge technology. They delivered our project ahead of schedule."</p>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">MJ;</div>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (</div>
                          <Star key={i}className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">"The best IT partner we've ever worked with. Their expertise in AI and cloud solutions is unmatched."</p>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-3">DW;</div>
            {/* CTA Section */} <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
              <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">,</div>
                <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">Let's discuss how our AI and IT solutions can drive your digital transformation and accelerate growth.</p>
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">,</div>
                  <a;
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover: translate-x-1 transition-transform" />,
                  </a>
                  <a;
                    href="tel: +13024640950",
                    onClick={handlePhoneClick}className="border-2 border-white text-white hover: bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2",
            {/* Footer */} <Footer />
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
              Why Choose Our Page Backup?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page backup solutions deliver unmatched performance, security, and scalability.
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
              Experience the power of our page backup solutions for your business.
            </p>
          </div>

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

              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PageBackupPage;
