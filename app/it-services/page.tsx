import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Server, Cloud, Database, Network, Code, Smartphone, Monitor, HardDrive, Wifi, Lock, Settings, Bell, Heart, ThumbsUp, MessageCircle, Phone, MapPin, ExternalLink, ChevronRight, Cpu, HardDriveIcon, Globe, ShieldCheck } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All IT Services', icon: '💻' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '🏗️' },
    { id: 'security', name: 'Cybersecurity', icon: '🔒' },
    { id: 'development', name: 'Development', icon: '⚙️' },
    { id: 'support', name: 'IT Support', icon: '🎧' },
    { id: 'consulting', name: 'Consulting', icon: '📊' },
    { id: 'migration', name: 'Migration', icon: '🚀' }
  ];

  const itServices = [
    // Cloud Services
    {
      id: 1,
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, management, and optimization across AWS, Azure, and Google Cloud platforms.',
      category: 'cloud',
      price: '$1,200/month',
      features: [
        'Multi-cloud architecture design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Backup & disaster recovery',
        'Performance optimization'
      ],
      icon: '☁️',
      color: 'from-blue-500 to-cyan-600',
      popular: true,
      rating: 4.9,
      users: '800+',
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 2,
      name: 'Cloud Migration Services',
      description: 'Seamless migration of your applications and data to the cloud with zero downtime and minimal disruption.',
      category: 'migration',
      price: '$2,500/project',
      features: [
        'Migration planning & strategy',
        'Data migration automation',
        'Application modernization',
        'Zero-downtime migration',
        'Testing & validation',
        'Go-live support',
        'Performance optimization',
        'Training & documentation'
      ],
      icon: '🚀',
      color: 'from-purple-500 to-pink-600',
      popular: false,
      rating: 4.8,
      users: '300+',
      link: 'https://ziontechgroup.com/cloud-migration'
    },

    // Infrastructure Services
    {
      id: 3,
      name: 'Network Infrastructure Setup',
      description: 'Complete network infrastructure design, implementation, and management for enterprise environments.',
      category: 'infrastructure',
      price: '$1,800/month',
      features: [
        'Network design & architecture',
        'Router & switch configuration',
        'Wireless network setup',
        'VPN implementation',
        'Network security',
        'Performance monitoring',
        'Troubleshooting & support',
        'Documentation & training'
      ],
      icon: '🌐',
      color: 'from-green-500 to-teal-600',
      popular: true,
      rating: 4.7,
      users: '600+',
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 4,
      name: 'Server Management & Maintenance',
      description: 'Comprehensive server administration, maintenance, and optimization for Windows and Linux environments.',
      category: 'infrastructure',
      price: '$1,500/month',
      features: [
        'Server installation & configuration',
        'OS updates & patching',
        'Performance monitoring',
        'Backup & recovery',
        'Security hardening',
        'Capacity planning',
        'Troubleshooting & support',
        'Documentation & reporting'
      ],
      icon: '🖥️',
      color: 'from-orange-500 to-red-600',
      popular: false,
      rating: 4.6,
      users: '500+',
      link: 'https://ziontechgroup.com/server-management'
    },

    // Cybersecurity Services
    {
      id: 5,
      name: 'Cybersecurity Assessment',
      description: 'Comprehensive security assessment and penetration testing to identify vulnerabilities and strengthen your defenses.',
      category: 'security',
      price: '$2,200/assessment',
      features: [
        'Vulnerability assessment',
        'Penetration testing',
        'Security audit',
        'Compliance checking',
        'Risk analysis',
        'Remediation guidance',
        'Security training',
        'Ongoing monitoring'
      ],
      icon: '🔒',
      color: 'from-red-500 to-pink-600',
      popular: true,
      rating: 4.9,
      users: '400+',
      link: 'https://ziontechgroup.com/cybersecurity-assessment'
    },
    {
      id: 6,
      name: 'Managed Security Services',
      description: '24/7 security monitoring, threat detection, and incident response to protect your organization.',
      category: 'security',
      price: '$1,999/month',
      features: [
        '24/7 security monitoring',
        'Threat detection & response',
        'SIEM management',
        'Incident response',
        'Security updates',
        'Compliance management',
        'Security training',
        'Regular reporting'
      ],
      icon: '🛡️',
      color: 'from-indigo-500 to-purple-600',
      popular: false,
      rating: 4.8,
      users: '350+',
      link: 'https://ziontechgroup.com/managed-security'
    },

    // Development Services
    {
      id: 7,
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      category: 'development',
      price: '$3,500/month',
      features: [
        'Custom application development',
        'Web & mobile applications',
        'API development',
        'Database design',
        'UI/UX design',
        'Testing & quality assurance',
        'Deployment & maintenance',
        'Documentation & training'
      ],
      icon: '💻',
      color: 'from-cyan-500 to-blue-600',
      popular: true,
      rating: 4.7,
      users: '200+',
      link: 'https://ziontechgroup.com/custom-development'
    },
    {
      id: 8,
      name: 'System Integration',
      description: 'Seamless integration of disparate systems and applications to create a unified technology ecosystem.',
      category: 'development',
      price: '$2,800/month',
      features: [
        'System integration planning',
        'API development & management',
        'Data synchronization',
        'Workflow automation',
        'Legacy system integration',
        'Testing & validation',
        'Performance optimization',
        'Ongoing support'
      ],
      icon: '🔗',
      color: 'from-emerald-500 to-green-600',
      popular: false,
      rating: 4.6,
      users: '250+',
      link: 'https://ziontechgroup.com/system-integration'
    },

    // IT Support Services
    {
      id: 9,
      name: '24/7 IT Support',
      description: 'Round-the-clock technical support and helpdesk services to keep your systems running smoothly.',
      category: 'support',
      price: '$899/month',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Hardware & software support',
        'User training',
        'Issue tracking & resolution',
        'Preventive maintenance',
        'Performance monitoring',
        'Regular reporting'
      ],
      icon: '🎧',
      color: 'from-violet-500 to-purple-600',
      popular: true,
      rating: 4.8,
      users: '1.2K+',
      link: 'https://ziontechgroup.com/it-support'
    },
    {
      id: 10,
      name: 'IT Consulting Services',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT investments.',
      category: 'consulting',
      price: '$1,500/month',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Vendor evaluation',
        'Cost optimization',
        'Digital transformation',
        'Compliance guidance',
        'Project management',
        'Change management'
      ],
      icon: '📊',
      color: 'from-yellow-500 to-orange-600',
      popular: false,
      rating: 4.7,
      users: '180+',
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-intense">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From cloud infrastructure to cybersecurity, our expert IT services help you build, 
              secure, and optimize your technology environment for maximum efficiency and growth.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300">IT Service Categories</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2K+</div>
                <div className="text-gray-300">Systems Managed</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free IT Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full mt-1">
                          ⭐ POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.users}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our IT Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300">
                Complete cloud infrastructure management across AWS, Azure, and Google Cloud platforms.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions including assessment, monitoring, and incident response.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-white mb-4">Infrastructure</h3>
              <p className="text-gray-300">
                Network design, server management, and infrastructure optimization services.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-300">
                Custom software development and system integration solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Our IT Service Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-4">1. Assessment</h3>
              <p className="text-gray-300">
                We analyze your current IT infrastructure and identify areas for improvement and optimization.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-white mb-4">2. Planning</h3>
              <p className="text-gray-300">
                We develop a comprehensive IT strategy and implementation plan tailored to your needs.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">3. Implementation</h3>
              <p className="text-gray-300">
                Our experts implement the solution with minimal disruption to your business operations.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">4. Support</h3>
              <p className="text-gray-300">
                Ongoing monitoring, maintenance, and support to ensure optimal performance and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free IT Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free IT assessment</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 technical support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;