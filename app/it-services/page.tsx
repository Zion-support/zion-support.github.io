import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Cpu, Shield, Globe, Database, Smartphone, Mail, Calendar, DollarSign, Users, BarChart, FileText, Lock, Clock, Star, Sparkles, Server, Cloud, Code, Wifi, HardDrive, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All IT Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Server className="w-4 h-4" /> },
    { id: 'cloud', name: 'Cloud Solutions', icon: <Cloud className="w-4 h-4" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-4 h-4" /> },
    { id: 'support', name: 'Support & Maintenance', icon: <Monitor className="w-4 h-4" /> }
  ];

  const services = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and optimized performance for your applications and data.',
      category: 'cloud',
      price: 'Starting at $2,500',
      features: ['Zero-downtime migration', 'Performance optimization', 'Cost analysis', 'Security implementation', '24/7 monitoring', 'Post-migration support'],
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-cyan-500/25',
      popular: true
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      category: 'security',
      price: '$1,500/month',
      features: ['24/7 threat monitoring', 'Vulnerability scanning', 'Incident response', 'Security training', 'Compliance auditing', 'Penetration testing'],
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      gradient: 'from-emerald-500/20 to-green-500/20',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-emerald-500/25'
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management for faster, more reliable software delivery.',
      category: 'development',
      price: '$3,000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Monitoring & alerting', 'Performance optimization'],
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/50',
      glowColor: 'shadow-purple-500/25'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      category: 'infrastructure',
      price: '$2,000/month',
      features: ['Data warehousing', 'ETL processes', 'Dashboard creation', 'Predictive analytics', 'Real-time reporting', 'Data visualization'],
      icon: <BarChart className="w-8 h-8 text-orange-400" />,
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-400/50',
      glowColor: 'shadow-orange-500/25'
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      category: 'development',
      price: 'Starting at $5,000',
      features: ['Native iOS & Android', 'Cross-platform solutions', 'UI/UX design', 'API integration', 'App store deployment', 'Maintenance & updates'],
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      gradient: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-400/50',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
      category: 'infrastructure',
      price: '$2,200/month',
      features: ['Network design', 'Hardware installation', 'Security configuration', 'Performance monitoring', 'Troubleshooting', '24/7 support'],
      icon: <Wifi className="w-8 h-8 text-pink-400" />,
      gradient: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-400/50',
      glowColor: 'shadow-pink-500/25'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Comprehensive database services including design, optimization, backup, and recovery solutions.',
      category: 'infrastructure',
      price: '$1,800/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring & maintenance', 'Migration services'],
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      gradient: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-400/50',
      glowColor: 'shadow-indigo-500/25'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.',
      category: 'support',
      price: '$200/hour',
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost optimization', 'Risk analysis', 'Implementation guidance'],
      icon: <Users className="w-8 h-8 text-teal-400" />,
      gradient: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-400/50',
      glowColor: 'shadow-teal-500/25'
    },
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Complete IT management including monitoring, maintenance, and support for your entire technology infrastructure.',
      category: 'support',
      price: '$3,500/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support', 'Security management', 'Backup & recovery', 'Software updates'],
      icon: <Monitor className="w-8 h-8 text-rose-400" />,
      gradient: 'from-rose-500/20 to-pink-500/20',
      borderColor: 'border-rose-400/50',
      glowColor: 'shadow-rose-500/25'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.',
      category: 'development',
      price: 'Starting at $3,000',
      features: ['Custom web apps', 'Responsive design', 'E-commerce solutions', 'API development', 'Performance optimization', 'SEO implementation'],
      icon: <Globe className="w-8 h-8 text-violet-400" />,
      gradient: 'from-violet-500/20 to-purple-500/20',
      borderColor: 'border-violet-400/50',
      glowColor: 'shadow-violet-500/25'
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity.',
      category: 'infrastructure',
      price: '$2,800/month',
      features: ['Recovery planning', 'Backup strategies', 'Testing & validation', 'RTO/RPO optimization', 'Documentation', 'Regular testing'],
      icon: <HardDrive className="w-8 h-8 text-amber-400" />,
      gradient: 'from-amber-500/20 to-yellow-500/20',
      borderColor: 'border-amber-400/50',
      glowColor: 'shadow-amber-500/25'
    },
    {
      id: 'it-support',
      name: 'IT Support & Help Desk',
      description: 'Professional IT support services to resolve technical issues and keep your systems running smoothly.',
      category: 'support',
      price: '$1,200/month',
      features: ['24/7 help desk', 'Remote support', 'On-site visits', 'Issue tracking', 'Knowledge base', 'User training'],
      icon: <Clock className="w-8 h-8 text-red-400" />,
      gradient: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-400/50',
      glowColor: 'shadow-red-500/25'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '50+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const technologies = [
    { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', icon: '🔷', description: 'Microsoft Azure' },
    { name: 'Docker', icon: '🐳', description: 'Containerization' },
    { name: 'Kubernetes', icon: '⚙️', description: 'Container Orchestration' },
    { name: 'Terraform', icon: '🏗️', description: 'Infrastructure as Code' },
    { name: 'Jenkins', icon: '🔧', description: 'CI/CD Automation' },
    { name: 'React', icon: '⚛️', description: 'Frontend Framework' },
    { name: 'Node.js', icon: '🟢', description: 'Backend Runtime' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, mobile development, and infrastructure management." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, devops, mobile development, infrastructure" />
      </Helmet>
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_rgba(168,85,247,0.1)_60deg,_transparent_120deg)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 mb-6">
              <Server className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">IT Infrastructure Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete IT Services
              </span>
              <br />
              <span className="text-white">for Modern Business</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 leading-relaxed">
              Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, mobile development, and infrastructure management to power your digital transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/ai-services" 
                className="group border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technologies We Use</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Cutting-edge technologies and tools to deliver robust, scalable solutions
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 mb-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {technologies.map((tech, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-white/5 border border-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {filteredServices.map((service, index) => (
              <div key={service.id} className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:${service.glowColor} hover:shadow-2xl ${service.popular ? 'ring-2 ring-cyan-400/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">per month or project</div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm">
                      Get Quote
                    </button>
                    <button className="px-4 py-2 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 border border-purple-400/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Let our expert team help you build, secure, and optimize your technology infrastructure for maximum performance and reliability.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="relative py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📱 +1 302 464 0950 | 🏢 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;