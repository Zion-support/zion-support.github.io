import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, Code, Smartphone, Globe, Lock } from 'lucide-react';

const services = [
  {
    icon: Server,
    name: 'Cloud Infrastructure Setup',
    description: 'Complete cloud infrastructure design, implementation, and migration services for AWS, Azure, and Google Cloud.',
    features: [
      'Multi-cloud architecture design',
      'Infrastructure as Code (IaC)',
      'Auto-scaling and load balancing',
      'Disaster recovery planning',
      'Cost optimization strategies',
      'Security best practices implementation'
    ],
    pricing: '$150 – $300/hour',
    projectPricing: '$25,000 – $100,000/project',
    timeline: '4–12 weeks',
    benefits: [
      'Scalable and reliable infrastructure',
      'Reduced operational costs',
      'Improved performance and availability',
      'Enhanced security posture'
    ],
    category: 'Cloud Infrastructure'
  },
  {
    icon: Shield,
    name: 'Cybersecurity Solutions',
    description: 'Comprehensive cybersecurity services including threat assessment, security implementation, and ongoing monitoring.',
    features: [
      'Security risk assessment',
      'Penetration testing',
      'Security policy development',
      'Incident response planning',
      'Security awareness training',
      'Compliance management (SOC 2, ISO 27001)'
    ],
    pricing: '$200 – $400/hour',
    projectPricing: '$15,000 – $75,000/project',
    timeline: '2–8 weeks',
    benefits: [
      'Protection against cyber threats',
      'Compliance with regulations',
      'Reduced security risks',
      'Peace of mind for stakeholders'
    ],
    category: 'Cybersecurity'
  },
  {
    icon: Code,
    name: 'Custom Software Development',
    description: 'Tailored software solutions built with modern technologies to meet your specific business requirements.',
    features: [
      'Full-stack web applications',
      'Mobile app development',
      'API development and integration',
      'Database design and optimization',
      'Third-party integrations',
      'Performance optimization'
    ],
    pricing: '$120 – $250/hour',
    projectPricing: '$10,000 – $200,000/project',
    timeline: '6–24 weeks',
    benefits: [
      'Customized solutions for your needs',
      'Competitive advantage',
      'Scalable and maintainable code',
      'Ongoing support and updates'
    ],
    category: 'Software Development'
  },
  {
    icon: Database,
    name: 'Data Analytics & Business Intelligence',
    description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
    features: [
      'Data warehouse design',
      'ETL/ELT pipeline development',
      'Real-time analytics dashboards',
      'Machine learning model development',
      'Data visualization and reporting',
      'Data governance and quality management'
    ],
    pricing: '$150 – $300/hour',
    projectPricing: '$20,000 – $150,000/project',
    timeline: '8–20 weeks',
    benefits: [
      'Data-driven decision making',
      'Improved operational efficiency',
      'Better customer insights',
      'Competitive intelligence'
    ],
    category: 'Data & Analytics'
  },
  {
    icon: Network,
    name: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
    features: [
      'Network architecture design',
      'Wireless network setup',
      'VPN and remote access solutions',
      'Network security implementation',
      'Performance monitoring and optimization',
      'Disaster recovery planning'
    ],
    pricing: '$100 – $200/hour',
    projectPricing: '$5,000 – $50,000/project',
    timeline: '2–8 weeks',
    benefits: [
      'Reliable and secure connectivity',
      'Improved network performance',
      'Reduced downtime',
      'Scalable infrastructure'
    ],
    category: 'Network & Infrastructure'
  },
  {
    icon: Monitor,
    name: 'IT Support & Maintenance',
    description: 'Comprehensive IT support services to keep your systems running smoothly and efficiently.',
    features: [
      '24/7 technical support',
      'System monitoring and maintenance',
      'Software updates and patches',
      'Hardware troubleshooting',
      'User training and support',
      'Proactive issue prevention'
    ],
    pricing: '$80 – $150/hour',
    projectPricing: '$2,000 – $10,000/month',
    timeline: 'Ongoing',
    benefits: [
      'Minimized downtime',
      'Improved system reliability',
      'Reduced IT costs',
      'Expert technical support'
    ],
    category: 'Support & Maintenance'
  },
  {
    icon: Settings,
    name: 'Digital Transformation',
    description: 'Comprehensive digital transformation services to modernize your business processes and technology stack.',
    features: [
      'Process automation',
      'Legacy system modernization',
      'Cloud migration strategies',
      'Workflow optimization',
      'Change management',
      'Technology roadmap development'
    ],
    pricing: '$200 – $350/hour',
    projectPricing: '$50,000 – $500,000/project',
    timeline: '12–36 weeks',
    benefits: [
      'Improved operational efficiency',
      'Enhanced customer experience',
      'Reduced operational costs',
      'Future-ready technology stack'
    ],
    category: 'Digital Transformation'
  },
  {
    icon: Smartphone,
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
    features: [
      'Native iOS and Android apps',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design and optimization',
      'App store optimization',
      'Push notifications and analytics',
      'Backend API integration'
    ],
    pricing: '$100 – $250/hour',
    projectPricing: '$15,000 – $100,000/project',
    timeline: '8–20 weeks',
    benefits: [
      'Enhanced customer engagement',
      'Increased brand visibility',
      'Improved user experience',
      'Cross-platform compatibility'
    ],
    category: 'Mobile & Web'
  },
  {
    icon: Globe,
    name: 'Web Development',
    description: 'Modern, responsive web applications and websites built with the latest technologies and best practices.',
    features: [
      'Responsive web design',
      'E-commerce solutions',
      'Content management systems',
      'Progressive Web Apps (PWA)',
      'SEO optimization',
      'Performance optimization'
    ],
    pricing: '$80 – $200/hour',
    projectPricing: '$5,000 – $75,000/project',
    timeline: '4–16 weeks',
    benefits: [
      'Professional online presence',
      'Improved user experience',
      'Better search engine visibility',
      'Mobile-friendly design'
    ],
    category: 'Mobile & Web'
  },
  {
    icon: Lock,
    name: 'Compliance & Governance',
    description: 'Ensure your organization meets regulatory requirements and industry standards with comprehensive compliance services.',
    features: [
      'GDPR compliance implementation',
      'HIPAA compliance for healthcare',
      'SOX compliance for public companies',
      'PCI DSS for payment processing',
      'Audit preparation and support',
      'Policy development and training'
    ],
    pricing: '$150 – $300/hour',
    projectPricing: '$10,000 – $100,000/project',
    timeline: '4–16 weeks',
    benefits: [
      'Regulatory compliance',
      'Reduced legal risks',
      'Enhanced data protection',
      'Improved business reputation'
    ],
    category: 'Security & Compliance'
  }
];

const categories = [
  'All',
  'Cloud Infrastructure',
  'Cybersecurity',
  'Software Development',
  'Data & Analytics',
  'Network & Infrastructure',
  'Support & Maintenance',
  'Digital Transformation',
  'Mobile & Web',
  'Security & Compliance'
];

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'pricing':
        return a.pricing.localeCompare(b.pricing);
      case 'timeline':
        return a.timeline.localeCompare(b.timeline);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and digital transformation solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, software development, digital transformation, infrastructure, consulting" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and digital transformation solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, software development, and digital transformation solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
      </Head>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to transform your business. From cloud infrastructure to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
              <Link href="/portfolio" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="pricing">Sort by Pricing</option>
                  <option value="timeline">Sort by Timeline</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Pricing:</span>
                      <span className="text-sm font-medium text-gray-900">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Project:</span>
                      <span className="text-sm font-medium text-gray-900">{service.projectPricing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Timeline:</span>
                      <span className="text-sm font-medium text-gray-900">{service.timeline}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-blue-600 text-xs">+{service.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Link href="/contact" className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Get Quote
                    </Link>
                    <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our experts help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}