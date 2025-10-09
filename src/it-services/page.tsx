'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Calculator, TrendingUp, CheckCircle, Star, Award, Clock, DollarSign, Truck, Wifi, Bluetooth, Battery, Cpu as Processor, Database as DataIcon, Cloud as CloudIcon, Code as CodeIcon, Smartphone as MobileIcon, Settings as SettingsIcon, FileText as DocumentIcon, Search as SearchIcon, Bot as BotIcon, Palette as DesignIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as GamingIcon, ShoppingCart as CartIcon, CreditCard as PaymentIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HealthIcon, Stethoscope as MedicalIcon, GraduationCap as EducationIcon, Briefcase as BusinessIcon, Wrench as ToolIcon, Hammer as ConstructionIcon, Paintbrush as ArtIcon, Scissors as CutIcon, BookOpen as BookIcon, Calculator as CalcIcon, Calendar as CalendarIcon, Clock3 as TimeIcon, Compass as NavigationIcon, Navigation as NavIcon, PieChart as ChartIcon, TrendingDown as DownIcon, Activity as ActivityIcon, Atom as ScienceIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, management, and optimization',
      icon: Cloud,
      price: '$1,999/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Monitoring & Alerting', 'Backup & Recovery'],
      color: 'text-blue-400',
      benefits: ['99.9% uptime', 'Cost optimization', 'Scalable infrastructure', 'Expert support']
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services with threat detection and prevention',
      icon: Shield,
      price: '$2,499/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Security Training'],
      color: 'text-red-400',
      benefits: ['Advanced protection', '24/7 monitoring', 'Compliance assurance', 'Risk mitigation']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing and deployment',
      icon: Settings,
      price: '$1,799/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'Performance Optimization'],
      color: 'text-green-400',
      benefits: ['Faster deployments', 'Reduced errors', 'Better collaboration', 'Scalable processes']
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning',
      icon: Database,
      price: '$1,299/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services', 'Monitoring & Analytics'],
      color: 'text-purple-400',
      benefits: ['Optimized performance', 'Data security', 'Reliable backups', 'Expert management']
    },
    {
      title: 'Network Infrastructure',
      description: 'Network design, implementation, and monitoring solutions',
      icon: Wifi,
      price: '$1,599/month',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Troubleshooting', 'Security Configuration', 'Performance Optimization'],
      color: 'text-cyan-400',
      benefits: ['Reliable connectivity', 'Security', 'Performance', 'Expert support']
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and maintenance services',
      icon: Wrench,
      price: '$999/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'User Training', 'Troubleshooting'],
      color: 'text-orange-400',
      benefits: ['Minimal downtime', 'Proactive maintenance', 'Expert support', 'Cost savings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services and solutions for your business. Cloud infrastructure, cybersecurity, DevOps, database services, and more. Contact us at +1 302 464 0950."
        keywords={['IT services', 'cloud infrastructure', 'cybersecurity', 'DevOps', 'database services', 'IT consulting']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT services to support your digital transformation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Phone className="inline w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="inline w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                IT Services & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to support your digital transformation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-4 neon-text">{service.price}</div>
                    <a 
                      href="mailto:kleber@ziontechgroup.com?subject=Interest in IT Services"
                      className="cyber-button px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Get started with our IT services today. Contact us for a free consultation and see how we can help your business achieve 300% ROI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-cyan-200 hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-200 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-cyan-200 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:scale-105"
              >
                Call Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;