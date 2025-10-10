'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  Search,
  CheckCircle,
  Server,
  Network,
  Lock,
  Code,
  BarChart3,
  Users,
  Headphones,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Cpu,
  HardDrive as Storage
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const itServices = [
    { 
      name: 'Cloud Infrastructure & Migration', 
      icon: Cloud, 
      description: 'Complete cloud solutions including AWS, Azure, GCP setup, migration, and optimization',
      price: '$2,000 - $50,000',
      features: ['Cloud architecture design', 'Migration planning & execution', 'Cost optimization', 'Security compliance'],
      category: 'Infrastructure',
      popular: true
    },
    { 
      name: 'DevOps & CI/CD', 
      icon: Settings, 
      description: 'Automated deployment pipelines, infrastructure as code, and continuous integration',
      price: '$3,000 - $25,000',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Container orchestration', 'Monitoring & logging'],
      category: 'Development',
      popular: true
    },
    { 
      name: 'Database Management', 
      icon: Database, 
      description: 'Comprehensive database solutions including design, optimization, and maintenance',
      price: '$1,500 - $20,000',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup & recovery'],
      category: 'Data',
      popular: false
    },
    { 
      name: 'Cybersecurity', 
      icon: Shield, 
      description: 'Comprehensive security assessment, implementation, and monitoring services',
      price: '$5,000 - $100,000',
      features: ['Security audits', 'Penetration testing', 'Compliance (SOC2, GDPR)', 'Incident response'],
      category: 'Security',
      popular: true
    },
    { 
      name: 'Managed IT Services', 
      icon: Settings, 
      description: '24/7 IT support, monitoring, and maintenance for your entire infrastructure',
      price: '$500 - $5,000/month',
      features: ['24/7 monitoring', 'Proactive maintenance', 'Help desk support', 'Security updates'],
      category: 'Support',
      popular: false
    },
    { 
      name: 'IT Consulting', 
      icon: Globe, 
      description: 'Strategic IT planning, digital transformation, and technology roadmap development',
      price: '$2,000 - $30,000',
      features: ['Technology strategy', 'Digital transformation', 'Vendor selection', 'ROI analysis'],
      category: 'Consulting',
      popular: false
    },
    { 
      name: 'Mobile App Development', 
      icon: Mobile, 
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$10,000 - $150,000',
      features: ['Native iOS/Android', 'Cross-platform (React Native)', 'UI/UX design', 'App store deployment'],
      category: 'Development',
      popular: true
    },
    { 
      name: 'Web Development', 
      icon: Globe, 
      description: 'Custom web applications, e-commerce platforms, and enterprise solutions',
      price: '$5,000 - $100,000',
      features: ['Custom web apps', 'E-commerce platforms', 'API development', 'Performance optimization'],
      category: 'Development',
      popular: false
    },
    { 
      name: 'Network Infrastructure', 
      icon: Network, 
      description: 'Design, implementation, and management of secure network infrastructure',
      price: '$3,000 - $40,000',
      features: ['Network design', 'Security implementation', 'Performance optimization', 'Monitoring'],
      category: 'Infrastructure',
      popular: false
    },
    { 
      name: 'Data Backup & Recovery', 
      icon: HardDrive, 
      description: 'Comprehensive backup solutions and disaster recovery planning',
      price: '$1,000 - $15,000',
      features: ['Backup solutions', 'Disaster recovery planning', 'Business continuity', 'Testing & validation'],
      category: 'Data',
      popular: false
    }
  ];

  const categories = ['all', 'Infrastructure', 'Development', 'Data', 'Security', 'Support', 'Consulting'];

  const benefits = [
    '24/7 technical support',
    'Proactive monitoring and maintenance',
    'Scalable solutions that grow with your business',
    'Expert team with years of experience',
    'Cost-effective pricing plans',
    'Quick implementation and deployment'
  ];

  const stats = [
    { icon: <Server className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8 text-green-500" />, value: '200+', label: 'Happy Clients' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '24/7', label: 'Support' }
  ];

  const filteredServices = itServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Information Technology Solutions</title>
        <meta name="description" content="Complete IT services including cloud solutions, cybersecurity, managed IT, and custom development. Transform your business with our expert technology solutions." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps, database management, web development" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete information technology solutions to power your business. From cloud infrastructure to cybersecurity, we provide comprehensive IT services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                  service.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover:border-cyan-500/30'
                }`}>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6">
                      Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Get Quote
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT services are designed to provide reliable, scalable, and cost-effective solutions for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT services can help you achieve your business goals and improve efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ItServicesPage;