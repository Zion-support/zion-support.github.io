import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings, Wifi, Lock, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance', '24/7 monitoring', 'Auto-scaling'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      category: 'Cloud Services'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: ['Security assessment', 'Penetration testing', 'Compliance audit', '24/7 monitoring', 'Incident response', 'Security training'],
      pricing: 'Starting at $1,800/month',
      link: '/cybersecurity',
      popular: true,
      category: 'Security'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      features: ['Web applications', 'Mobile apps', 'API development', 'Database design', 'UI/UX design', 'Quality assurance'],
      pricing: 'Starting at $3,500',
      link: '/custom-development',
      popular: false,
      category: 'Development'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance tuning', 'Backup strategies', 'Data migration', 'Security hardening', 'Monitoring', 'Disaster recovery'],
      pricing: 'Starting at $1,200/month',
      link: '/database-management',
      popular: false,
      category: 'Data Management'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS development', 'Android development', 'Cross-platform', 'App store deployment', 'Push notifications', 'Offline support'],
      pricing: 'Starting at $4,000',
      link: '/mobile-solutions',
      popular: false,
      category: 'Mobile Development'
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for your organization.',
      features: ['Network design', 'Hardware installation', 'Security configuration', 'Performance monitoring', 'VPN setup', 'Load balancing'],
      pricing: 'Starting at $2,000',
      link: '/network-infrastructure',
      popular: false,
      category: 'Infrastructure'
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure as code', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      pricing: 'Starting at $2,500/month',
      link: '/devops-cicd',
      popular: false,
      category: 'DevOps'
    },
    {
      icon: <Wifi className="w-8 h-8 text-pink-500" />,
      title: '5G Implementation',
      description: 'Deploy next-generation 5G networks for ultra-fast connectivity and IoT integration.',
      features: ['5G network design', 'IoT integration', 'Edge computing', 'Ultra-low latency', 'Massive connectivity', 'Network slicing'],
      pricing: 'Starting at $5,000',
      link: '/5g-implementation',
      popular: false,
      category: '5G Technology'
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-500" />,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection and disaster recovery solutions for business continuity.',
      features: ['Automated backups', 'Disaster recovery', 'Data encryption', 'Cloud storage', 'Recovery testing', 'Compliance support'],
      pricing: 'Starting at $800/month',
      link: '/data-backup-recovery',
      popular: false,
      category: 'Data Protection'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 40% through efficient solutions and automation'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Flexible solutions that grow with your business needs'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'Data Management', 'Mobile Development', 'Infrastructure', 'DevOps', '5G Technology', 'Data Protection'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and network infrastructure solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, database management, mobile solutions" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Professional IT Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                End-to-end IT solutions to power your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">{service.pricing}</div>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the difference with our comprehensive IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Modernize Your IT Infrastructure?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our IT services can transform your business operations and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore Micro SAAS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;
