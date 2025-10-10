'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

// Loading skeleton component
const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

// Content promotion banner component
const ContentPromotionBanner = () => (
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center">
    <p className="text-sm font-medium">
      🚀 New: AI-Powered Business Solutions - Transform Your Operations Today!
    </p>
  </div>
);

// Accessibility enhancer component
const AccessibilityEnhancer = ({ 
  enableKeyboardNavigation, 
  enableScreenReaderSupport, 
  enableHighContrast, 
  enableFocusManagement 
}: {
  enableKeyboardNavigation: boolean;
  enableScreenReaderSupport: boolean;
  enableHighContrast: boolean;
  enableFocusManagement: boolean;
}) => {
  useEffect(() => {
    if (enableHighContrast) {
      document.documentElement.classList.add('high-contrast');
    }
    if (enableFocusManagement) {
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });
      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    }
  }, [enableHighContrast, enableFocusManagement]);

  return null;
};

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Delivered' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support Available' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5★', label: 'Client Rating' }
  ];

  const aiServices = [
    { name: 'AI-Powered Chatbots', href: '/ai-chatbot-builder', icon: Brain, description: 'Advanced conversational AI with NLP', price: 'Starting at $299/month' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content creation', price: 'Starting at $199/month' },
    { name: 'AI Data Analytics', href: '/ai-analytics-dashboard', icon: BarChart, description: 'Predictive analytics & insights', price: 'Starting at $399/month' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis', price: 'Starting at $599/month' },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield, description: 'Real-time fraud prevention', price: 'Starting at $799/month' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions', price: 'Starting at $999/month' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'AWS, Azure, GCP migration', price: 'Starting at $2,500/month' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security', price: 'Starting at $1,800/month' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automation pipelines', price: 'Starting at $2,200/month' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Modern web applications', price: 'Starting at $5,000/project' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps', price: 'Starting at $8,000/project' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Expert database solutions', price: 'Starting at $1,200/month' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform', price: 'Starting at $89/month' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageSquare, description: 'AI customer support', price: 'Starting at $149/month' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'AI invoice generation', price: 'Starting at $49/month' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform', price: 'Starting at $99/month' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring', price: 'Starting at $199/month' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation', price: 'Starting at $129/month' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, digital transformation, enterprise software, cloud computing, cybersecurity" />
      </Helmet>
      
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth. We serve Fortune 500 companies,
                startups, and enterprises worldwide with proven results and 24/7 expert support.
              </p>
              
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 border border-white/20 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  📍 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300 text-sm">
                  ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              AI Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations with cutting-edge technology
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h3>
                      <div className="text-cyan-400 font-semibold text-sm">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/services"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View All AI Services
              </a>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              IT Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure and drive business growth
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h3>
                      <div className="text-purple-400 font-semibold text-sm">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/services"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                View All IT Services
              </a>
            </div>
          </section>

          {/* Micro SaaS Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Micro SaaS Solutions
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Ready-to-use business tools with AI and automation to streamline your operations
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {service.name}
                      </h3>
                      <div className="text-green-400 font-semibold text-sm">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <a
                    href={service.href}
                    className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/services"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
              >
                View All Micro SaaS
              </a>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16" aria-labelledby="cta-heading">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <h2 id="cta-heading" className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your business with our cutting-edge AI and IT solutions. Get a free consultation and discover how we can help you achieve unprecedented growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  aria-label="Call us at (302) 464-0950"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default HomePage;
