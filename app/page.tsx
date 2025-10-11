'use client';
import React, { Suspense, useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Lightbulb, Gauge, Phone, Mail, MapPin, Play, ExternalLink, ChevronRight, Sparkle, Zap as ZapIcon, Layers, Cpu as CpuIcon, Atom, Hologram, Quantum, CircuitBoard } from 'lucide-react';
import { allServices, serviceCategories } from '../data/services';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="cyber-card-enhanced hologram-card-enhanced p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Content promotion banner component
const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-white py-3 px-4 text-center cyber-scan-line">
    <p className="text-sm font-medium neon-text-enhanced">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today! Get 30% off your first 3 months.
    </p>
  </div>
);

// Service Card Component
const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`cyber-card-enhanced hologram-card-enhanced p-6 transition-all duration-500 hover:scale-105 group ${
        service.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {service.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl mb-2">{service.icon}</div>
        {service.freeTrial && (
          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
            Free Trial
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {service.description}
      </p>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-cyan-400 neon-text-enhanced">
            {service.price}
          </span>
          {service.marketPrice && (
            <span className="text-gray-400 text-sm line-through">
              {service.marketPrice}
            </span>
          )}
        </div>
        <div className="text-xs text-gray-400">
          {service.category === 'emerging' ? 'Custom pricing available' : 'Starting price'}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
          {service.features.length > 3 && (
            <li className="text-gray-400 text-sm">
              +{service.features.length - 3} more features
            </li>
          )}
        </ul>
      </div>
      
      <div className="flex flex-col gap-2">
        <a
          href={service.url}
          className="cyber-button-enhanced w-full text-center justify-center group-hover:scale-105 transition-transform"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
        {service.demoAvailable && (
          <a
            href={`${service.url}?demo=true`}
            className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm"
          >
            <Play className="w-4 h-4 inline mr-2" />
            Watch Demo
          </a>
        )}
      </div>
    </div>
  );
};

// Statistics Component
const StatisticsSection = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '1000+', label: 'Projects Completed', icon: Target },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '10+', label: 'Years Experience', icon: Clock },
    { number: '50+', label: 'AI Services', icon: Brain },
    { number: '24/7', label: 'Support Available', icon: Shield }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center cyber-card-enhanced p-6 energy-pulse">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 neon-text-enhanced">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our operations with their AI solutions. We've seen a 300% increase in efficiency and saved over $2M annually.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "Global Finance Ltd.",
      role: "CTO",
      content: "Their cloud migration was seamless. Zero downtime and 40% cost reduction. The team's expertise is unmatched.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      role: "VP of Operations",
      content: "The AI-powered analytics platform they built for us has revolutionized our decision-making process. ROI was achieved in just 2 months.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      company: "E-commerce Plus",
      role: "Founder",
      content: "Their micro SAAS tools have been game-changers. We've automated 80% of our processes and increased revenue by 150%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Wang",
      company: "Manufacturing Co.",
      role: "Operations Director",
      content: "The AI computer vision solution reduced our quality control time by 90% while improving accuracy. Incredible technology.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Wilson",
      company: "Retail Chain",
      role: "IT Director",
      content: "Their cybersecurity suite protected us from multiple threats. The 24/7 monitoring gives us peace of mind.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-cyan-400 neon-text-enhanced">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card-enhanced hologram-card-enhanced p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const popularServices = allServices.filter(service => service.popular);
  const aiServices = allServices.filter(service => service.category === 'ai');
  const itServices = allServices.filter(service => service.category === 'it');
  const microSaasServices = allServices.filter(service => service.category === 'saas');
  const emergingServices = allServices.filter(service => service.category === 'emerging');

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology. 500+ happy clients, 99% satisfaction rate." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity, micro SAAS, quantum computing, machine learning, automation" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. 500+ happy clients, 99% satisfaction rate." />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg-enhanced matrix-rain-enhanced">
        <Navigation />
        
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {/* Content Promotion Banner */}
          <ContentPromotionBanner />
          
          {/* Hero Section */}
          <section className={`text-center py-20 px-4 transition-all duration-1000 ${
            isLoaded && isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="max-w-7xl mx-auto">
              <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6 cyber-scan-line">
                  🚀 Trusted by 500+ Companies Worldwide
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight glitch-enhanced" data-text="Zion Tech Group">
                Transform Your Business with 
                <span className="block text-7xl md:text-9xl mt-4 neon-text-enhanced">
                  AI & IT Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth for businesses worldwide. Get results in 30 days or less.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
                <div className="cyber-card-enhanced hologram-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-bold text-white mb-3">AI-Powered Solutions</h3>
                  <p className="text-sm text-gray-300">Transform your business with cutting-edge artificial intelligence</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-white mb-3">Proven Results</h3>
                  <p className="text-sm text-gray-300">Delivering $50M+ annual savings and 95% process automation</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="font-bold text-white mb-3">Enterprise Security</h3>
                  <p className="text-sm text-gray-300">Bank-level security and compliance for your critical data</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="font-bold text-white mb-3">Global Reach</h3>
                  <p className="text-sm text-gray-300">Serving clients worldwide with 24/7 support</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <a 
                  href="/contact" 
                  className="cyber-button-enhanced text-lg px-8 py-4 group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  onClick={handlePhoneClick}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="text-center text-gray-400 text-sm">
                <p className="mb-2">📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </section>

          {/* Statistics Section */}
          <StatisticsSection />

          {/* Featured Services */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Featured <span className="text-cyan-400 neon-text-enhanced">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our most popular AI and IT solutions that have transformed businesses worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularServices.slice(0, 6).map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Service Categories */}
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="text-purple-400 neon-text-enhanced">Service Categories</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive solutions across AI, IT, Micro SAAS, and Emerging Technologies
                </p>
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {Object.entries(serviceCategories).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === key
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {name}
                    <span className="ml-2 text-xs">
                      ({allServices.filter(s => s.category === key).length})
                    </span>
                  </button>
                ))}
              </div>
              
              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.slice(0, 9).map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
              
              {filteredServices.length > 9 && (
                <div className="text-center mt-12">
                  <a
                    href={`/${selectedCategory === 'ai' ? 'ai-services' : selectedCategory === 'it' ? 'it-services' : selectedCategory === 'saas' ? 'micro-saas' : 'services'}`}
                    className="cyber-button-enhanced"
                  >
                    View All {serviceCategories[selectedCategory as keyof typeof serviceCategories]}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <Brain className="w-12 h-12 inline-block mr-4 text-cyan-400" />
                  AI Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Advanced artificial intelligence solutions that learn, adapt, and deliver measurable results
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.slice(0, 6).map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <Cloud className="w-12 h-12 inline-block mr-4 text-purple-400" />
                  IT Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Complete technology infrastructure solutions for modern businesses
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.slice(0, 6).map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <Cpu className="w-12 h-12 inline-block mr-4 text-green-400" />
                  Micro SAAS Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready-to-use business tools with AI and automation capabilities
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasServices.slice(0, 6).map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Emerging Technologies Section */}
          <section className="py-20 px-4 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <Atom className="w-12 h-12 inline-block mr-4 text-orange-400" />
                  Emerging Technologies
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge technology solutions for the future of business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {emergingServices.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="cyber-card-enhanced hologram-card-enhanced p-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join 500+ companies that have already transformed their operations with our AI and IT solutions. 
                  Get started with a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                  <a 
                    href="/contact" 
                    className="cyber-button-enhanced text-lg px-8 py-4 group"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (302) 464-0950
                  </a>
                </div>
                <div className="text-sm text-gray-400">
                  <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;