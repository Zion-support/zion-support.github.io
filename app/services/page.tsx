import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link } from 'lucide-react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Marketing',
      description: 'Revolutionize your marketing with AI-powered automation, personalization, and analytics.',
      icon: Target,
      features: ['Automated Campaign Management', 'Predictive Analytics', 'Personalized Content', 'ROI Optimization'],
      path: '/ai-marketing'
    },
    {
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      icon: Settings,
      features: ['Workflow Automation', 'Process Optimization', 'Smart Scheduling', 'Data Processing'],
      path: '/ai-automation'
    },
    {
      title: 'AI Analytics',
      description: 'Transform data into actionable insights with advanced AI analytics.',
      icon: BarChart,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
      path: '/ai-analytics'
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent support solutions.',
      icon: Bot,
      features: ['Chatbot Integration', 'Sentiment Analysis', 'Automated Responses', '24/7 Support'],
      path: '/ai-customer-service'
    }
  ];

  const microSaasServices = [
    {
      title: 'Analytics Dashboard',
      description: 'Real-time business intelligence with customizable dashboards.',
      icon: BarChart,
      features: ['Real-time Data', 'Custom Dashboards', 'Export Reports', 'Mobile Access'],
      path: '/micro-saas/analytics-dashboard'
    },
    {
      title: 'Email Marketing Suite',
      description: 'AI-powered email marketing with advanced automation.',
      icon: Mail,
      features: ['Email Automation', 'A/B Testing', 'Analytics', 'Template Library'],
      path: '/micro-saas/email-marketing'
    },
    {
      title: 'Project Management',
      description: 'Streamlined project management with AI assistance.',
      icon: Calendar,
      features: ['Task Management', 'Team Collaboration', 'Progress Tracking', 'Resource Planning'],
      path: '/micro-saas/project-management'
    },
    {
      title: 'Inventory Management',
      description: 'Smart inventory tracking and optimization.',
      icon: Package,
      features: ['Stock Tracking', 'Demand Forecasting', 'Automated Reordering', 'Analytics'],
      path: '/micro-saas/inventory-management'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure Setup', 'Security Implementation', '24/7 Monitoring'],
      path: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      path: '/cybersecurity'
    },
    {
      title: 'IT Support',
      description: 'Professional IT support and maintenance services.',
      icon: Headphones,
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Maintenance', 'Software Updates'],
      path: '/it-support'
    },
    {
      title: 'Database Management',
      description: 'Expert database design, optimization, and management.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup Solutions', 'Data Migration'],
      path: '/database-management'
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Micro SAAS, IT Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, Micro SAAS applications, and IT consulting. Call (302) 464-0950 for custom solutions." />
        <meta name="keywords" content="AI services, micro saas, IT consulting, cloud infrastructure, cybersecurity, technology solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid neural-network-bg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                  🚀 Comprehensive Technology Solutions
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
                Our <span className="holographic-text">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
                Transform your business with our comprehensive suite of AI, Micro SAAS, and IT solutions designed to drive growth and innovation.
              </p>
              
              {/* Contact Info Banner */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">{contactInfo.phone}</div>
                      <div className="text-gray-400 text-sm">Call for consultation</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">{contactInfo.email}</div>
                      <div className="text-gray-400 text-sm">Email for quotes</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium text-sm">{contactInfo.address}</div>
                      <div className="text-gray-400 text-sm">Visit our office</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6">
                  <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                    🤖 AI Services
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text">
                  Artificial <span className="holographic-text">Intelligence</span>
                </h2>
                <p className="text-xl text-cyan-400 max-w-3xl mx-auto neon-glow">
                  Harness the power of AI to automate processes, gain insights, and transform your business operations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors animate-float">
                      <service.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.path}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 neural-pattern">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full border border-green-400/30 mb-6">
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                    ⚡ Micro SAAS Solutions
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text">
                  Micro <span className="holographic-text">SAAS</span>
                </h2>
                <p className="text-xl text-cyan-400 max-w-3xl mx-auto neon-glow">
                  Powerful, focused applications that solve specific business challenges with minimal complexity.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {microSaasServices.map((service, index) => (
                  <div key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors animate-float">
                      <service.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.path}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 mb-6">
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                    💻 IT Services
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text">
                  IT <span className="holographic-text">Solutions</span>
                </h2>
                <p className="text-xl text-cyan-400 max-w-3xl mx-auto neon-glow">
                  Comprehensive IT services to optimize your infrastructure, enhance security, and support your business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors animate-float">
                      <service.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.path}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Get <span className="holographic-text">Started?</span>
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                Let's discuss how our services can transform your business and drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
