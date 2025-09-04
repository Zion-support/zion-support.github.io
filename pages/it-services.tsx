import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Star, Users, Zap, Shield, BarChart3, Settings, Globe, Smartphone, Database, Cloud, Lock, Target, TrendingUp, MessageSquare, FileText, Calendar, CreditCard, ShoppingCart, Camera, Music, Video, Code, Search, Mail, Phone, MapPin, Server, Network, Monitor, HardDrive, Wifi, Cpu, MemoryStick, Router, Database as DatabaseIcon, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon } from 'lucide-react';

export default function ITServices() {
  const title = 'IT Services — Zion Tech Group';
  const description = 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support.';

  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Complete cloud infrastructure migration and ongoing management services',
      icon: Cloud,
      features: [
        'AWS, Azure, and Google Cloud migration',
        'Multi-cloud strategy and optimization',
        'Cost optimization and resource management',
        'Disaster recovery and backup solutions',
        'Cloud security and compliance',
        '24/7 monitoring and support'
      ],
      pricing: '$2,500 - $15,000/month',
      delivery: '4-12 weeks',
      category: 'Cloud Services',
      marketPrice: '$4,000 - $25,000/month',
      benefits: 'Reduce infrastructure costs by 40%, improve scalability by 300%'
    },
    {
      title: 'DevOps & CI/CD Pipeline',
      description: 'Automated development and deployment pipelines for faster, reliable releases',
      icon: Settings,
      features: [
        'Docker containerization and orchestration',
        'Kubernetes cluster management',
        'Automated testing and deployment',
        'Infrastructure as Code (IaC)',
        'Monitoring and logging solutions',
        'Security scanning and compliance'
      ],
      pricing: '$3,000 - $20,000/month',
      delivery: '6-16 weeks',
      category: 'DevOps',
      marketPrice: '$5,000 - $35,000/month',
      benefits: 'Deploy 10x faster, reduce deployment failures by 90%'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and data',
      icon: Shield,
      features: [
        'Security assessment and penetration testing',
        'Firewall and network security configuration',
        'Endpoint protection and antivirus management',
        'Security monitoring and incident response',
        'Compliance auditing (SOC 2, GDPR, HIPAA)',
        'Employee security training and awareness'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '2-8 weeks',
      category: 'Cybersecurity',
      marketPrice: '$3,500 - $20,000/month',
      benefits: 'Prevent 99.9% of security breaches, ensure compliance'
    },
    {
      title: 'Network Infrastructure Design',
      description: 'Enterprise-grade network design, implementation, and optimization',
      icon: Network,
      features: [
        'Network architecture design and planning',
        'Wireless network deployment and optimization',
        'VPN and remote access solutions',
        'Load balancing and traffic management',
        'Network monitoring and performance tuning',
        'Disaster recovery and redundancy planning'
      ],
      pricing: '$1,500 - $10,000/month',
      delivery: '3-10 weeks',
      category: 'Networking',
      marketPrice: '$2,500 - $15,000/month',
      benefits: 'Improve network performance by 200%, reduce downtime by 95%'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Database design, optimization, and management for peak performance',
      icon: Database,
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and recovery strategies',
        'Database migration and upgrades',
        'Monitoring and maintenance',
        'Security and access control'
      ],
      pricing: '$1,000 - $8,000/month',
      delivery: '2-6 weeks',
      category: 'Database',
      marketPrice: '$1,800 - $12,000/month',
      benefits: 'Improve query performance by 500%, ensure 99.9% uptime'
    },
    {
      title: 'IT Support & Help Desk',
      description: '24/7 technical support and help desk services for your organization',
      icon: MessageSquare,
      features: [
        '24/7 technical support and troubleshooting',
        'Remote desktop support and assistance',
        'Software installation and updates',
        'Hardware maintenance and repairs',
        'User training and documentation',
        'IT asset management and tracking'
      ],
      pricing: '$500 - $3,000/month',
      delivery: '1-2 weeks',
      category: 'Support',
      marketPrice: '$800 - $5,000/month',
      benefits: 'Reduce IT issues by 80%, improve user satisfaction by 90%'
    },
    {
      title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration, monitoring, and maintenance services',
      icon: Server,
      features: [
        'Server installation and configuration',
        'Operating system updates and patches',
        'Performance monitoring and optimization',
        'Backup and disaster recovery',
        'Security hardening and compliance',
        'Capacity planning and scaling'
      ],
      pricing: '$800 - $5,000/month',
      delivery: '2-4 weeks',
      category: 'Server Management',
      marketPrice: '$1,200 - $8,000/month',
      benefits: 'Ensure 99.9% server uptime, reduce maintenance costs by 60%'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT planning and technology consulting for business growth',
      icon: Target,
      features: [
        'IT strategy development and planning',
        'Technology roadmap creation',
        'Vendor evaluation and selection',
        'Budget planning and cost optimization',
        'Digital transformation consulting',
        'Technology risk assessment'
      ],
      pricing: '$150 - $500/hour',
      delivery: '1-4 weeks',
      category: 'Consulting',
      marketPrice: '$200 - $800/hour',
      benefits: 'Align IT with business goals, optimize technology investments'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning',
      icon: HardDrive,
      features: [
        'Automated backup systems and scheduling',
        'Off-site and cloud backup storage',
        'Disaster recovery planning and testing',
        'Business continuity planning',
        'Data restoration and recovery services',
        'Compliance and audit support'
      ],
      pricing: '$300 - $2,000/month',
      delivery: '1-3 weeks',
      category: 'Backup & Recovery',
      marketPrice: '$500 - $3,500/month',
      benefits: 'Ensure 99.9% data recovery, minimize business disruption'
    },
    {
      title: 'Email & Communication Systems',
      description: 'Email server setup, migration, and communication platform management',
      icon: Mail,
      features: [
        'Email server installation and configuration',
        'Email migration and data transfer',
        'Spam filtering and security',
        'Mobile device synchronization',
        'Collaboration tools integration',
        'Email archiving and compliance'
      ],
      pricing: '$200 - $1,500/month',
      delivery: '1-2 weeks',
      category: 'Communication',
      marketPrice: '$350 - $2,500/month',
      benefits: 'Improve email reliability by 99%, enhance collaboration'
    },
    {
      title: 'IT Security Auditing',
      description: 'Comprehensive security assessments and compliance auditing services',
      icon: Shield,
      features: [
        'Vulnerability assessments and penetration testing',
        'Security policy development and implementation',
        'Compliance auditing (SOC 2, GDPR, HIPAA)',
        'Security training and awareness programs',
        'Incident response planning',
        'Ongoing security monitoring and reporting'
      ],
      pricing: '$2,000 - $15,000/project',
      delivery: '2-8 weeks',
      category: 'Security Auditing',
      marketPrice: '$3,500 - $25,000/project',
      benefits: 'Identify and fix security vulnerabilities, ensure compliance'
    },
    {
      title: 'IT Infrastructure Monitoring',
      description: '24/7 monitoring and alerting for all IT infrastructure components',
      icon: Monitor,
      features: [
        'Real-time system and network monitoring',
        'Performance metrics and reporting',
        'Automated alerting and escalation',
        'Capacity planning and forecasting',
        'Root cause analysis and troubleshooting',
        'Custom dashboard and reporting'
      ],
      pricing: '$500 - $3,000/month',
      delivery: '1-2 weeks',
      category: 'Monitoring',
      marketPrice: '$800 - $5,000/month',
      benefits: 'Prevent 95% of IT issues, reduce downtime by 90%'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Zion Tech Group
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/ai-services" className="text-gray-700 hover:text-blue-600">AI Services</Link>
                <Link href="/blockchain-solutions" className="text-gray-700 hover:text-blue-600">Blockchain</Link>
                <Link href="/micro-saas-services" className="text-gray-700 hover:text-blue-600">Micro SAAS</Link>
                <Link href="/it-services" className="text-blue-600 font-semibold">IT Services</Link>
                <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
                Comprehensive IT services including cloud migration, DevOps, cybersecurity, 
                infrastructure management, and 24/7 support to keep your business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#services"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15min</div>
                <div className="text-gray-600">Average Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your technology infrastructure, 
                enhance security, and drive business growth with expert support and cutting-edge technology.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold">
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Our Price:</span>
                      <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Market Price:</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Delivery:</span>
                      <span className="text-sm text-gray-600">{service.delivery}</span>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-sm text-green-800 font-medium">{service.benefits}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold text-center block transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional IT services with unmatched expertise, reliability, and value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with SOC 2, GDPR, and HIPAA compliance.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock monitoring and support with 15-minute response time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">500+ successful projects with 99.9% uptime guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our IT services today and experience the power of reliable, secure, and efficient technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call +1 302 464 0950
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 mb-4">
                  Leading provider of IT services, AI solutions, and micro SAAS development.
                </p>
                <div className="flex space-x-4">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <Mail className="w-5 h-5 text-gray-400" />
                  <MapPin className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/blockchain-solutions" className="text-gray-400 hover:text-white">Blockchain</Link></li>
                  <li><Link href="/micro-saas-services" className="text-gray-400 hover:text-white">Micro SAAS</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}