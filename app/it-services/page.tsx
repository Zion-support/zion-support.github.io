import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  BarChart, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Server,
  Network,
  Lock,
  Settings,
  Monitor,
  HardDrive,
  Wifi,
  Smartphone as Mobile,
  Laptop,
  Headphones
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including migration, optimization, and management of cloud infrastructure.',
      price: '$2,200/month',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration planning',
        'Infrastructure as Code (IaC)',
        'Auto-scaling solutions',
        'Disaster recovery setup',
        'Cost optimization',
        'Security hardening',
        '24/7 monitoring'
      ],
      icon: Cloud,
      category: 'Infrastructure',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Achieve 99.9% uptime guarantee',
        'Enable global deployment'
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, prevention, and incident response.',
      price: '$3,500/month',
      features: [
        'Security assessment & audit',
        'Penetration testing',
        'Vulnerability management',
        'SIEM implementation',
        'Incident response planning',
        'Security training',
        'Compliance management',
        '24/7 security monitoring'
      ],
      icon: Shield,
      category: 'Security',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/cybersecurity',
      benefits: [
        'Prevent 99% of security breaches',
        'Reduce security incidents by 85%',
        'Ensure compliance with regulations',
        'Protect sensitive data effectively'
      ]
    },
    {
      id: 'network-management',
      name: 'Network Management & Optimization',
      description: 'Complete network design, implementation, and ongoing management services.',
      price: '$1,800/month',
      features: [
        'Network design & planning',
        'Router & switch configuration',
        'Wireless network setup',
        'Network monitoring',
        'Performance optimization',
        'Troubleshooting & support',
        'Security implementation',
        'Documentation & reporting'
      ],
      icon: Network,
      category: 'Networking',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/network-management',
      benefits: [
        'Improve network performance by 60%',
        'Reduce downtime by 70%',
        'Enhance security posture',
        'Optimize bandwidth utilization'
      ]
    },
    {
      id: 'data-management',
      name: 'Data Management & Analytics',
      description: 'Comprehensive data solutions including storage, processing, and analytics platforms.',
      price: '$2,500/month',
      features: [
        'Database design & optimization',
        'Data warehousing',
        'ETL/ELT processes',
        'Data governance',
        'Business intelligence',
        'Data visualization',
        'Backup & recovery',
        'Data security'
      ],
      icon: Database,
      category: 'Data',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/data-management',
      benefits: [
        'Improve data quality by 80%',
        'Reduce data processing time by 50%',
        'Enable data-driven decisions',
        'Ensure data compliance'
      ]
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated deployment and continuous integration.',
      price: '$2,000/month',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & logging',
        'Security integration',
        'Performance optimization',
        'Team training',
        'Best practices implementation'
      ],
      icon: Settings,
      category: 'DevOps',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/devops-cicd',
      benefits: [
        'Reduce deployment time by 90%',
        'Improve code quality',
        'Enable faster releases',
        'Increase team productivity'
      ]
    },
    {
      id: 'helpdesk-support',
      name: 'IT Helpdesk & Support',
      description: 'Comprehensive IT support services for end-users and technical troubleshooting.',
      price: '$1,200/month',
      features: [
        '24/7 helpdesk support',
        'Remote troubleshooting',
        'Hardware & software support',
        'User training',
        'Ticket management',
        'Knowledge base',
        'Mobile device support',
        'Performance reporting'
      ],
      icon: Headphones,
      category: 'Support',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/helpdesk-support',
      benefits: [
        'Resolve 95% of issues remotely',
        'Reduce support tickets by 60%',
        'Improve user satisfaction',
        'Minimize downtime'
      ]
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      price: '$3,000/month',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development',
        'UI/UX design',
        'API integration',
        'App store deployment',
        'Performance optimization',
        'Security implementation',
        'Maintenance & updates'
      ],
      icon: Mobile,
      category: 'Development',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/mobile-app-development',
      benefits: [
        'Reach mobile users effectively',
        'Improve customer engagement',
        'Increase business accessibility',
        'Enable offline functionality'
      ]
    },
    {
      id: 'web-development',
      name: 'Web Development & E-commerce',
      description: 'Custom web applications and e-commerce solutions with modern technologies.',
      price: '$2,800/month',
      features: [
        'Custom web applications',
        'E-commerce platforms',
        'Responsive design',
        'SEO optimization',
        'Performance optimization',
        'Security implementation',
        'Content management',
        'Analytics integration'
      ],
      icon: Globe,
      category: 'Development',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/web-development',
      benefits: [
        'Increase online presence',
        'Improve user experience',
        'Boost conversion rates',
        'Enable online sales'
      ]
    },
    {
      id: 'system-administration',
      name: 'System Administration',
      description: 'Complete system administration services for servers, workstations, and IT infrastructure.',
      price: '$1,500/month',
      features: [
        'Server management',
        'User account management',
        'System monitoring',
        'Backup & recovery',
        'Security updates',
        'Performance tuning',
        'Disaster recovery',
        'Documentation'
      ],
      icon: Server,
      category: 'Administration',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/system-administration',
      benefits: [
        'Ensure system reliability',
        'Improve security posture',
        'Optimize performance',
        'Reduce maintenance costs'
      ]
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting to align technology with business objectives and goals.',
      price: '$2,000/month',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation',
        'Vendor evaluation',
        'Cost optimization',
        'Risk assessment',
        'Compliance planning',
        'Implementation roadmap'
      ],
      icon: BarChart,
      category: 'Consulting',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/it-consulting',
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce IT costs by 30%',
        'Improve operational efficiency'
      ]
    },
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your data.',
      price: '$1,800/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data replication',
        'Recovery testing',
        'Offsite storage',
        'Compliance backup',
        'Recovery time optimization',
        '24/7 monitoring'
      ],
      icon: HardDrive,
      category: 'Backup',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/backup-disaster-recovery',
      benefits: [
        'Protect critical data',
        'Minimize downtime',
        'Ensure business continuity',
        'Meet compliance requirements'
      ]
    },
    {
      id: 'it-audit-compliance',
      name: 'IT Audit & Compliance',
      description: 'IT compliance services including audits, assessments, and regulatory compliance.',
      price: '$2,200/month',
      features: [
        'Compliance assessment',
        'Security audits',
        'Risk evaluation',
        'Policy development',
        'Training programs',
        'Documentation',
        'Remediation planning',
        'Ongoing monitoring'
      ],
      icon: Lock,
      category: 'Compliance',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/it-audit-compliance',
      benefits: [
        'Ensure regulatory compliance',
        'Identify security gaps',
        'Reduce compliance risks',
        'Improve security posture'
      ]
    }
  ];

  const categories = [
    'All',
    'Infrastructure',
    'Security',
    'Networking',
    'Data',
    'DevOps',
    'Support',
    'Development',
    'Administration',
    'Consulting',
    'Backup',
    'Compliance'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Comprehensive IT services to keep your business running smoothly. From cloud infrastructure 
            to cybersecurity, we provide end-to-end IT solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">IT Projects Completed</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Expert Technicians</div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </a>
                  
                  {service.freeTrial && (
                    <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200">
                      Start Free Trial
                    </button>
                  )}
                </div>

                {/* Benefits */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-400 flex items-start">
                        <span className="text-green-400 mr-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Capabilities Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our IT Capabilities</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT services across all major technology domains, 
              ensuring your business has the infrastructure and support it needs to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Cloud Solutions</h3>
              <p className="text-gray-300 text-sm">
                Complete cloud infrastructure, migration, and management services.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive security solutions to protect your digital assets.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-white mb-3">Networking</h3>
              <p className="text-gray-300 text-sm">
                Network design, implementation, and ongoing management services.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Data Management</h3>
              <p className="text-gray-300 text-sm">
                Data storage, processing, and analytics solutions.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-3">DevOps</h3>
              <p className="text-gray-300 text-sm">
                DevOps transformation and CI/CD implementation.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-3">Development</h3>
              <p className="text-gray-300 text-sm">
                Custom web and mobile application development.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Flexible IT Service Plans</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose the IT service plan that matches your business needs and budget. 
              All plans include implementation, training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic IT</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,200<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly reporting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard monitoring
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center relative border-2 border-cyan-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional IT</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 8 IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced security
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise IT</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-site support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantees
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your IT operations with our comprehensive services. Get started with a free consultation 
            and discover how we can improve your technology infrastructure and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;