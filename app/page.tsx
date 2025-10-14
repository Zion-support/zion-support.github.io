'use client'
import React, { useState, useEffect, memo, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  Star
} from 'lucide-react'

// Preload critical components for better performance
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      import('./components/ContentCarousel');
    }, 100);
  }
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent chatbots and automated support systems that provide 24/7 customer assistance.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Integration APIs'],
      price: 'Starting at $299/month'
    },
    {
      icon: Cloud,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      price: 'Starting at $499/month'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions that detect and prevent cyber threats in real-time.',
      features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Monitoring'],
      price: 'Starting at $799/month'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management systems.',
      features: ['Process Automation', 'Smart Routing', 'Exception Handling', 'Performance Monitoring'],
      price: 'Starting at $399/month'
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Delivered' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '24/7', label: 'Support Available' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5★', label: 'Client Rating' }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Enterprise Technology Services</title>
        <meta 
          name="description" 
          content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." 
        />
        <meta 
          name="keywords" 
          content="AI solutions, IT services, quantum computing, digital transformation, enterprise software, automation, machine learning, cloud computing, cybersecurity" 
        />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
                  <p className="text-xs text-cyan-400">AI & IT SOLUTIONS</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</a>
                <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
                <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</a>
                <a href="#demo" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all">
                  Get Demo
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Next-Gen AI Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your Business with
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent block">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                and digital transformation services. Transform your business with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#services" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="tel:+1-555-0123" 
                  onClick={handlePhoneClick}
                  className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI & IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI and IT solutions today. Contact our experts for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-555-0123" 
                onClick={handlePhoneClick}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
              <a 
                href="mailto:info@ziontechgroup.com" 
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zion Tech Group</h3>
                  <p className="text-sm text-gray-400">AI & IT Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default HomePage