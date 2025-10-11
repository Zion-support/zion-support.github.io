import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Brain, Cpu, Shield, Globe, Database, Smartphone, Mail, Calendar, DollarSign, Users, BarChart, FileText, Lock, Clock, Star, Sparkles, Cloud, Server, HardDrive, Wifi, Monitor, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Cloud Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'migration', name: 'Migration', icon: <ArrowRight className="w-4 h-4" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Server className="w-4 h-4" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'optimization', name: 'Optimization', icon: <Settings className="w-4 h-4" /> }
  ];

  const services = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and optimized performance.',
      category: 'migration',
      price: 'Starting at $1,500',
      features: ['Zero-downtime migration', 'Multi-cloud strategy', 'Cost optimization', 'Security implementation', 'Performance tuning', '24/7 support'],
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-400/50',
      glowColor: 'shadow-cyan-500/25',
      popular: true
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Setup',
      description: 'Design and implement scalable cloud infrastructure tailored to your business needs.',
      category: 'infrastructure',
      price: '$3,000/month',
      features: ['Infrastructure design', 'Auto-scaling setup', 'Load balancing', 'Monitoring & alerting', 'Backup strategies', 'Disaster recovery'],
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      gradient: 'from-emerald-500/20 to-green-500/20',
      borderColor: 'border-emerald-400/50',
      glowColor: 'shadow-emerald-500/25'
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security Solutions',
      description: 'Comprehensive security services to protect your cloud infrastructure and data.',
      category: 'security',
      price: '$2,000/month',
      features: ['Identity & access management', 'Data encryption', 'Security monitoring', 'Compliance auditing', 'Threat detection', 'Incident response'],
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-400/50',
      glowColor: 'shadow-purple-500/25'
    },
    {
      id: 'cost-optimization',
      name: 'Cloud Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource management and optimization strategies.',
      category: 'optimization',
      price: '$500/month',
      features: ['Cost analysis', 'Resource optimization', 'Reserved instances', 'Auto-scaling policies', 'Cost monitoring', 'Budget alerts'],
      icon: <DollarSign className="w-8 h-8 text-orange-400" />,
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-400/50',
      glowColor: 'shadow-orange-500/25'
    },
    {
      id: 'managed-cloud',
      name: 'Managed Cloud Services',
      description: 'Complete cloud management including monitoring, maintenance, and optimization.',
      category: 'infrastructure',
      price: '$2,500/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Performance optimization', 'Security updates', 'Backup management', 'Support & troubleshooting'],
      icon: <Monitor className="w-8 h-8 text-yellow-400" />,
      gradient: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-400/50',
      glowColor: 'shadow-yellow-500/25'
    },
    {
      id: 'cloud-storage',
      name: 'Cloud Storage Solutions',
      description: 'Secure, scalable cloud storage with advanced data management and backup capabilities.',
      category: 'infrastructure',
      price: '$800/month',
      features: ['Unlimited storage', 'Data encryption', 'Automated backups', 'Version control', 'Access management', 'CDN integration'],
      icon: <HardDrive className="w-8 h-8 text-pink-400" />,
      gradient: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-400/50',
      glowColor: 'shadow-pink-500/25'
    },
    {
      id: 'cloud-consulting',
      name: 'Cloud Strategy Consulting',
      description: 'Strategic cloud consulting to help you make informed decisions about your cloud journey.',
      category: 'migration',
      price: '$300/hour',
      features: ['Cloud assessment', 'Strategy planning', 'Vendor evaluation', 'ROI analysis', 'Risk assessment', 'Implementation roadmap'],
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      gradient: 'from-indigo-500/20 to-purple-500/20',
      borderColor: 'border-indigo-400/50',
      glowColor: 'shadow-indigo-500/25'
    },
    {
      id: 'cloud-monitoring',
      name: 'Cloud Monitoring & Analytics',
      description: 'Advanced monitoring and analytics for your cloud infrastructure with real-time insights.',
      category: 'optimization',
      price: '$1,200/month',
      features: ['Real-time monitoring', 'Performance analytics', 'Cost tracking', 'Alert management', 'Custom dashboards', 'Reporting'],
      icon: <BarChart className="w-8 h-8 text-teal-400" />,
      gradient: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-400/50',
      glowColor: 'shadow-teal-500/25'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const stats = [
    { number: '200+', label: 'Cloud Migrations', icon: <Cloud className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Shield className="w-6 h-6 text-emerald-400" /> },
    { number: '40%', label: 'Cost Savings', icon: <DollarSign className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Cloud Support', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const cloudProviders = [
    { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', icon: '🔷', description: 'Microsoft Azure' },
    { name: 'GCP', icon: '🌐', description: 'Google Cloud Platform' },
    { name: 'DigitalOcean', icon: '🌊', description: 'DigitalOcean' },
    { name: 'Linode', icon: '🟢', description: 'Linode' },
    { name: 'Vultr', icon: '⚡', description: 'Vultr' }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure setup, security, and optimization for scalable business solutions." />
        <meta name="keywords" content="cloud services, cloud migration, aws, azure, gcp, cloud infrastructure, cloud security" />
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
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Cloud Infrastructure Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Professional Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 leading-relaxed">
              Scalable, secure, and cost-effective cloud solutions to power your digital transformation and accelerate business growth.
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
                to="/it-services" 
                className="group border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
              >
                Explore IT Services
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

      {/* Cloud Providers Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Cloud Providers</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We work with all major cloud providers to give you the best solution
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {cloudProviders.map((provider, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 border border-cyan-400/30">
                  <span className="text-2xl">{provider.icon}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">{provider.name}</h3>
                <p className="text-xs text-gray-400">{provider.description}</p>
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
                  Ready to Move to the Cloud?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Let our cloud experts help you migrate, optimize, and secure your infrastructure in the cloud.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <span className="flex items-center">
                      Get Free Cloud Assessment
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link 
                    to="/digital-transformation" 
                    className="group border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                  >
                    Digital Transformation
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

export default CloudServicesPage;