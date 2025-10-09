'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Server, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Smartphone, 
  Monitor, 
  Settings, 
  Users, 
  Zap, 
  Lock, 
  Globe, 
  BarChart, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Award,
  Rocket,
  Target,
  TrendingUp,
  Headphones,
  Code,
  Wrench
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    // Infrastructure Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'infrastructure',
      icon: Cloud,
      description: 'Comprehensive cloud infrastructure setup, migration, and management across AWS, Azure, and Google Cloud.',
      features: [
        'Cloud migration & setup',
        'Auto-scaling configuration',
        'Cost optimization',
        'Security hardening',
        'Disaster recovery',
        '24/7 monitoring'
      ],
      pricing: '$1,999/month',
      popular: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        '99.9% uptime guarantee',
        '50% cost reduction',
        'Automated scaling',
        'Multi-cloud strategy',
        'Compliance ready'
      ]
    },
    {
      id: 'server-management',
      name: 'Server Management & Administration',
      category: 'infrastructure',
      icon: Server,
      description: 'Complete server administration including setup, maintenance, security, and performance optimization.',
      features: [
        'Server setup & configuration',
        'Performance monitoring',
        'Security updates',
        'Backup management',
        'Load balancing',
        'Troubleshooting support'
      ],
      pricing: '$1,499/month',
      popular: true,
      link: 'https://ziontechgroup.com/server-management',
      color: 'from-gray-500 to-slate-500',
      benefits: [
        '99.95% uptime SLA',
        'Proactive monitoring',
        'Automated backups',
        'Security patching',
        'Expert support'
      ]
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Services',
      category: 'infrastructure',
      icon: Network,
      description: 'Design, implement, and maintain secure and scalable network infrastructure for your business.',
      features: [
        'Network design & planning',
        'Firewall configuration',
        'VPN setup',
        'Wireless networking',
        'Network monitoring',
        'Security assessment'
      ],
      pricing: '$1,299/month',
      popular: false,
      link: 'https://ziontechgroup.com/network-infrastructure',
      color: 'from-green-500 to-teal-500',
      benefits: [
        'Enhanced security',
        'Improved performance',
        'Scalable architecture',
        'Remote access',
        'Compliance support'
      ]
    },

    // Security Services
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      category: 'security',
      icon: Shield,
      description: 'Comprehensive cybersecurity services including threat detection, prevention, and incident response.',
      features: [
        'Threat monitoring',
        'Vulnerability assessment',
        'Penetration testing',
        'Security training',
        'Incident response',
        'Compliance management'
      ],
      pricing: '$2,499/month',
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-suite',
      color: 'from-red-500 to-pink-500',
      benefits: [
        'Real-time threat detection',
        'Zero-day protection',
        'SOC 2 compliance',
        '24/7 security monitoring',
        'Incident response team'
      ]
    },
    {
      id: 'data-protection',
      name: 'Data Protection & Backup',
      category: 'security',
      icon: Lock,
      description: 'Advanced data protection services including backup, recovery, and encryption solutions.',
      features: [
        'Automated backups',
        'Data encryption',
        'Disaster recovery',
        'Compliance reporting',
        'Data archiving',
        'Recovery testing'
      ],
      pricing: '$899/month',
      popular: false,
      link: 'https://ziontechgroup.com/data-protection',
      color: 'from-purple-500 to-violet-500',
      benefits: [
        '99.99% data recovery',
        'Encrypted storage',
        'Multi-location backup',
        'GDPR compliance',
        'Automated testing'
      ]
    },

    // Development Services
    {
      id: 'custom-software-development',
      name: 'Custom Software Development',
      category: 'development',
      icon: Code,
      description: 'Custom software solutions tailored to your business needs using modern technologies and best practices.',
      features: [
        'Custom application development',
        'API development',
        'Database design',
        'UI/UX design',
        'Quality assurance',
        'Maintenance & support'
      ],
      pricing: '$3,999/month',
      popular: true,
      link: 'https://ziontechgroup.com/custom-software-development',
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        'Tailored solutions',
        'Modern tech stack',
        'Agile development',
        'Quality assurance',
        'Ongoing support'
      ]
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      category: 'development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'App store deployment',
        'Push notifications',
        'Analytics integration'
      ],
      pricing: '$2,999/month',
      popular: true,
      link: 'https://ziontechgroup.com/mobile-app-development',
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'Modern design',
        'App store optimization',
        'Ongoing updates'
      ]
    },
    {
      id: 'web-development',
      name: 'Web Development Services',
      category: 'development',
      icon: Globe,
      description: 'Modern web applications and websites with responsive design and optimal performance.',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'CMS development',
        'SEO optimization',
        'Performance optimization',
        'Security implementation'
      ],
      pricing: '$1,999/month',
      popular: false,
      link: 'https://ziontechgroup.com/web-development',
      color: 'from-cyan-500 to-blue-500',
      benefits: [
        'Responsive design',
        'Fast loading times',
        'SEO optimized',
        'Secure & scalable',
        'Cross-browser compatible'
      ]
    },

    // Support Services
    {
      id: 'help-desk-support',
      name: '24/7 Help Desk Support',
      category: 'support',
      icon: Headphones,
      description: 'Round-the-clock technical support for all your IT needs with guaranteed response times.',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Ticket management',
        'Knowledge base',
        'User training',
        'Performance reporting'
      ],
      pricing: '$1,199/month',
      popular: true,
      link: 'https://ziontechgroup.com/help-desk-support',
      color: 'from-pink-500 to-rose-500',
      benefits: [
        'Instant response',
        'Expert technicians',
        'Remote resolution',
        'User satisfaction tracking',
        'Proactive support'
      ]
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      category: 'support',
      icon: BarChart,
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.',
      features: [
        'Technology assessment',
        'Strategic planning',
        'Vendor evaluation',
        'Cost optimization',
        'Digital transformation',
        'Compliance consulting'
      ],
      pricing: '$299/hour',
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Expert guidance',
        'Cost savings',
        'Technology roadmap',
        'Vendor management',
        'Strategic planning'
      ]
    },

    // Database Services
    {
      id: 'database-management',
      name: 'Database Management Services',
      category: 'database',
      icon: Database,
      description: 'Comprehensive database administration including design, optimization, and maintenance.',
      features: [
        'Database design & setup',
        'Performance optimization',
        'Backup & recovery',
        'Security hardening',
        'Monitoring & maintenance',
        'Migration services'
      ],
      pricing: '$1,799/month',
      popular: true,
      link: 'https://ziontechgroup.com/database-management',
      color: 'from-emerald-500 to-green-500',
      benefits: [
        'Optimized performance',
        'Data integrity',
        'Automated backups',
        'Security compliance',
        'Expert administration'
      ]
    },

    // Monitoring Services
    {
      id: 'it-monitoring',
      name: 'IT Monitoring & Analytics',
      category: 'monitoring',
      icon: Monitor,
      description: 'Comprehensive IT monitoring and analytics to ensure optimal performance and prevent issues.',
      features: [
        'Real-time monitoring',
        'Performance analytics',
        'Alert management',
        'Capacity planning',
        'Trend analysis',
        'Custom dashboards'
      ],
      pricing: '$899/month',
      popular: false,
      link: 'https://ziontechgroup.com/it-monitoring',
      color: 'from-violet-500 to-purple-500',
      benefits: [
        'Proactive monitoring',
        'Performance insights',
        'Predictive analytics',
        'Custom reporting',
        'Issue prevention'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All IT Services', count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'development', name: 'Development', count: itServices.filter(s => s.category === 'development').length },
    { id: 'support', name: 'Support', count: itServices.filter(s => s.category === 'support').length },
    { id: 'database', name: 'Database', count: itServices.filter(s => s.category === 'database').length },
    { id: 'monitoring', name: 'Monitoring', count: itServices.filter(s => s.category === 'monitoring').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive IT Solutions for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            From infrastructure management to custom development, our IT services provide the foundation 
            for your business success. We deliver reliable, secure, and scalable technology solutions 
            that keep your business running smoothly.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <Target className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                    {service.benefits.length > 2 && (
                      <li className="text-sm text-gray-400">
                        +{service.benefits.length - 2} more benefits
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-gray-300">(4.8)</span>
                  </div>
                </div>
                
                <a
                  href={service.link}
                  className="w-full cyber-button text-center inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our IT Services */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Certified Experts</h3>
              <p className="text-gray-300">
                Our team holds industry certifications and has 15+ years of experience in enterprise IT.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Rocket className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Rapid Response</h3>
              <p className="text-gray-300">
                Get instant support with our 24/7 help desk and guaranteed response times.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with SOC 2 compliance and advanced threat protection.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cost Optimization</h3>
              <p className="text-gray-300">
                Reduce IT costs by up to 40% with our optimization strategies and cloud solutions.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Wrench className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proactive Maintenance</h3>
              <p className="text-gray-300">
                Prevent issues before they occur with our proactive monitoring and maintenance.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
              <p className="text-gray-300">
                Get dedicated account managers and technical specialists for your business.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology foundation 
            that supports your business growth and drives efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 inline" />
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;