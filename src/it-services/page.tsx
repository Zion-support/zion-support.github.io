'use client';
import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Server, 
  Smartphone, 
  Settings, 
  FileText, 
  Users, 
  Lock, 
  Globe,
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Zap,
  BarChart,
  Code,
  HardDrive,
  Wifi,
  Monitor,
  Printer,
  Router,
  HardDrive as Storage,
  Activity,
  AlertTriangle,
  Clock,
  RefreshCw,
  TrendingUp,
  Award,
  Star
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const itServices = [
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      description: 'Seamless migration to cloud platforms with zero downtime and enhanced security.',
      icon: Cloud,
      price: 'Starting at $2,500/month',
      features: [
        'AWS, Azure, GCP migration',
        'Zero-downtime migration',
        'Data security & compliance',
        'Cost optimization',
        'Performance monitoring',
        '24/7 support'
      ],
      category: 'Cloud Services',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-400',
      benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and data.',
      icon: Shield,
      price: 'Starting at $1,800/month',
      features: [
        'Threat detection & prevention',
        'Security audits & assessments',
        'Penetration testing',
        'Incident response',
        'Compliance management',
        'Security training'
      ],
      category: 'Security',
      color: 'from-red-500 to-pink-600',
      textColor: 'text-red-400',
      benefits: ['Data Protection', 'Regulatory Compliance', 'Risk Mitigation', 'Business Continuity']
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
      icon: Network,
      price: 'Starting at $1,200/month',
      features: [
        'Network design & implementation',
        'Wireless network setup',
        'VPN configuration',
        'Network monitoring',
        'Performance optimization',
        'Troubleshooting & support'
      ],
      category: 'Infrastructure',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-400',
      benefits: ['Improved Connectivity', 'Enhanced Security', 'Better Performance', 'Reduced Downtime']
    },
    {
      id: 'data-management',
      name: 'Data Management Solutions',
      description: 'Comprehensive data management including storage, backup, and recovery services.',
      icon: Database,
      price: 'Starting at $1,500/month',
      features: [
        'Database design & optimization',
        'Data backup & recovery',
        'Data migration services',
        'Data quality management',
        'Compliance & governance',
        'Real-time monitoring'
      ],
      category: 'Data Services',
      color: 'from-purple-500 to-violet-600',
      textColor: 'text-purple-400',
      benefits: ['Data Security', 'Improved Performance', 'Regulatory Compliance', 'Business Intelligence']
    },
    {
      id: 'it-support',
      name: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for all your IT needs.',
      icon: Users,
      price: 'Starting at $800/month',
      features: [
        '24/7 technical support',
        'Remote troubleshooting',
        'Hardware & software support',
        'User training & onboarding',
        'Ticket management system',
        'SLA guarantees'
      ],
      category: 'Support',
      color: 'from-orange-500 to-red-600',
      textColor: 'text-orange-400',
      benefits: ['Reduced Downtime', 'Improved Productivity', 'Cost Savings', 'Expert Support']
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD',
      description: 'Streamline development and deployment with modern DevOps practices and automation.',
      icon: Code,
      price: 'Starting at $2,000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Automated testing',
        'Deployment automation',
        'Monitoring & logging'
      ],
      category: 'Development',
      color: 'from-indigo-500 to-blue-600',
      textColor: 'text-indigo-400',
      benefits: ['Faster Deployments', 'Improved Quality', 'Reduced Errors', 'Better Collaboration']
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery solutions to ensure business continuity.',
      icon: RefreshCw,
      price: 'Starting at $1,600/month',
      features: [
        'Backup strategy development',
        'Recovery time optimization',
        'Business continuity planning',
        'Regular testing & validation',
        'Off-site data storage',
        'Emergency response procedures'
      ],
      category: 'Business Continuity',
      color: 'from-yellow-500 to-orange-600',
      textColor: 'text-yellow-400',
      benefits: ['Business Continuity', 'Data Protection', 'Risk Mitigation', 'Peace of Mind']
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business objectives.',
      icon: Settings,
      price: 'Starting at $300/hour',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation',
        'Vendor evaluation',
        'Project management',
        'Change management'
      ],
      category: 'Consulting',
      color: 'from-teal-500 to-cyan-600',
      textColor: 'text-teal-400',
      benefits: ['Strategic Planning', 'Cost Optimization', 'Technology Alignment', 'Competitive Advantage']
    },
    {
      id: 'mobile-solutions',
      name: 'Mobile Solutions',
      description: 'Mobile app development and enterprise mobility solutions.',
      icon: Smartphone,
      price: 'Starting at $1,400/month',
      features: [
        'Mobile app development',
        'Cross-platform solutions',
        'Enterprise mobility',
        'Mobile security',
        'App store deployment',
        'Maintenance & updates'
      ],
      category: 'Mobile',
      color: 'from-pink-500 to-rose-600',
      textColor: 'text-pink-400',
      benefits: ['Increased Accessibility', 'Better User Experience', 'Improved Productivity', 'Market Reach']
    },
    {
      id: 'it-monitoring',
      name: 'IT Monitoring & Analytics',
      description: 'Comprehensive monitoring and analytics for IT infrastructure and applications.',
      icon: Activity,
      price: 'Starting at $900/month',
      features: [
        '24/7 infrastructure monitoring',
        'Performance analytics',
        'Alert management',
        'Capacity planning',
        'Trend analysis',
        'Custom dashboards'
      ],
      category: 'Monitoring',
      color: 'from-emerald-500 to-green-600',
      textColor: 'text-emerald-400',
      benefits: ['Proactive Management', 'Performance Optimization', 'Reduced Downtime', 'Data-Driven Decisions']
    },
    {
      id: 'compliance',
      name: 'Compliance & Governance',
      description: 'Ensure regulatory compliance and implement IT governance frameworks.',
      icon: Lock,
      price: 'Starting at $1,300/month',
      features: [
        'Regulatory compliance',
        'IT governance frameworks',
        'Policy development',
        'Risk assessment',
        'Audit preparation',
        'Training & awareness'
      ],
      category: 'Compliance',
      color: 'from-slate-500 to-gray-600',
      textColor: 'text-slate-400',
      benefits: ['Regulatory Compliance', 'Risk Management', 'Audit Readiness', 'Business Protection']
    },
    {
      id: 'hardware-procurement',
      name: 'Hardware Procurement',
      description: 'End-to-end hardware procurement and lifecycle management services.',
      icon: Server,
      price: 'Starting at $500/month',
      features: [
        'Hardware sourcing',
        'Vendor management',
        'Asset tracking',
        'Lifecycle management',
        'Disposal services',
        'Cost optimization'
      ],
      category: 'Hardware',
      color: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-400',
      benefits: ['Cost Savings', 'Quality Assurance', 'Simplified Management', 'Vendor Relationships']
    }
  ];

  const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Data Services', 'Support', 'Development', 'Business Continuity', 'Consulting', 'Mobile', 'Monitoring', 'Compliance', 'Hardware'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = itServices.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-flicker-enhanced">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium cyber-glow-enhanced">
            Comprehensive IT services for modern businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            From cloud migration and cybersecurity to network infrastructure and data management, 
            we provide end-to-end IT solutions that keep your business running smoothly and securely.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>

        {/* Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  className="cyber-card-enhanced holographic-card quantum-field p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} mr-6 flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className={`text-xl font-bold ${service.textColor}`}>
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">Key Features:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">Business Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href="/contact"
                      className={`inline-flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:scale-105`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* IT Capabilities Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our IT Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-300 text-sm">Migration, optimization, and management of cloud infrastructure</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">Comprehensive security solutions to protect your digital assets</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Network className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Network Infrastructure</h3>
              <p className="text-gray-300 text-sm">Design, implementation, and maintenance of network systems</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data Management</h3>
              <p className="text-gray-300 text-sm">Complete data lifecycle management and optimization</p>
            </div>
          </div>
        </section>

        {/* Service Level Agreements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Service Level Agreements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Response Time</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">15 min</div>
              <p className="text-gray-300">Average response time for critical issues</p>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Uptime Guarantee</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">99.9%</div>
              <p className="text-gray-300">Service availability guarantee</p>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Resolution Time</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">4 hours</div>
              <p className="text-gray-300">Average resolution time for standard issues</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            IT Service Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$800<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• 8x5 Support</li>
                <li>• Remote Assistance</li>
                <li>• Basic Monitoring</li>
                <li>• Email Support</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• 24/7 Support</li>
                <li>• Proactive Monitoring</li>
                <li>• On-site Support</li>
                <li>• Priority Response</li>
                <li>• Monthly Reports</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>• Dedicated Team</li>
                <li>• Custom Solutions</li>
                <li>• SLA Guarantees</li>
                <li>• Strategic Planning</li>
                <li>• White-glove Service</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Optimize Your IT?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT services can improve your infrastructure, security, and operational efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                (302) 464-0950
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;