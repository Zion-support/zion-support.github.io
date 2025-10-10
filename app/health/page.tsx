import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { Activity, Shield, CheckCircle, Star, ArrowRight, Zap, Brain, Globe, Phone, Mail, MapPin, Award, TrendingUp, MessageSquare, Cpu, Database, Smartphone, Settings, FileText, Star as StarIcon, Award as AwardIcon, Shield as ShieldIcon, Users as UsersIcon } from 'lucide-react';

export default function HealthPage() {
  const features = [
    {
      icon: Activity,
      title: 'System Health Monitoring',
      description: 'Real-time monitoring of all system components with automated alerts and reporting.'
    },
    {
      icon: Shield,
      title: 'Security Health Checks',
      description: 'Comprehensive security assessments and vulnerability scanning to ensure system protection.'
    },
    {
      icon: Database,
      title: 'Database Health',
      description: 'Monitor database performance, optimization, and health metrics for optimal operation.'
    },
    {
      icon: Globe,
      title: 'Network Health',
      description: 'Continuous network monitoring and health assessment to prevent downtime.'
    },
    {
      icon: Cpu,
      title: 'Server Performance',
      description: 'Monitor server resources, CPU usage, memory, and disk space for optimal performance.'
    },
    {
      icon: Settings,
      title: 'Automated Remediation',
      description: 'AI-powered automated fixes for common issues to maintain system health.'
    }
  ];

  const healthMetrics = [
    {
      metric: 'System Uptime',
      value: '99.9%',
      description: 'Average uptime across all monitored systems'
    },
    {
      metric: 'Response Time',
      value: '< 100ms',
      description: 'Average response time for critical applications'
    },
    {
      metric: 'Security Score',
      value: '98/100',
      description: 'Overall security health rating'
    },
    {
      metric: 'Issue Resolution',
      value: '< 5 min',
      description: 'Average time to resolve automated issues'
    }
  ];

  const services = [
    {
      title: 'Health Assessment',
      description: 'Comprehensive system health evaluation and recommendations.',
      price: 'Starting at $1,500'
    },
    {
      title: 'Continuous Monitoring',
      description: '24/7 system health monitoring with real-time alerts.',
      price: 'Starting at $500/month'
    },
    {
      title: 'Health Optimization',
      description: 'Proactive optimization to improve system performance and reliability.',
      price: 'Starting at $2,000'
    },
    {
      title: 'Emergency Response',
      description: 'Rapid response team for critical system health issues.',
      price: 'Starting at $300/hour'
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'IT Manager, TechCorp',
      content: 'The health monitoring system has prevented multiple outages. We now have complete visibility into our infrastructure.',
      rating: 5,
      avatar: '/images/testimonials/david-kim.jpg'
    },
    {
      name: 'Lisa Anderson',
      role: 'CTO, DataFlow Inc',
      content: 'The automated remediation features are incredible. Issues are fixed before they become problems.',
      rating: 5,
      avatar: '/images/testimonials/lisa-anderson.jpg'
    },
    {
      name: 'James Wilson',
      role: 'System Administrator, CloudTech',
      content: 'Our system reliability has improved dramatically since implementing their health monitoring solution.',
      rating: 5,
      avatar: '/images/testimonials/james-wilson.jpg'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="System Health Monitoring - IT Infrastructure Health Management | Zion Tech Group"
        description="Comprehensive system health monitoring with real-time alerts, automated remediation, and performance optimization. Ensure 99.9% uptime with our health management solutions."
        keywords="system health monitoring, IT health management, infrastructure monitoring, system performance, automated remediation, uptime monitoring"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-6">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">System Health Monitoring</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              System Health Monitoring
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive system health monitoring with real-time alerts, automated remediation, 
              and performance optimization. Ensure 99.9% uptime with our health management solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Activity className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">1,000+ Systems Monitored</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">99.9% Uptime Guarantee</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Get Health Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Health Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Health Metrics
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real-time performance indicators that demonstrate our commitment to system health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-xl font-semibold text-white mb-2">{metric.metric}</div>
                <div className="text-gray-300 text-sm">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Health Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to maintain optimal system health and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Health Management Services
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Professional health management solutions tailored to your infrastructure needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust us with their system health
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your System Health?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get a free health assessment and discover how we can improve your system reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Activity className="w-5 h-5 mr-2" />
              Get Health Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}