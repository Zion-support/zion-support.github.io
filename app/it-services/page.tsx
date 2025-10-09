'use client';

import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Star, 
  CheckCircle, 
  Play, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart,
  Cpu,
  Globe,
  Lock,
  Database,
  Smartphone,
  Code,
  MessageSquare,
  Eye,
  Settings,
  Wifi,
  Server,
  HardDrive,
  FileText,
  PieChart,
  Activity,
  Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headset,
  Gamepad2,
  Network,
  Security,
  Data,
  Analytics,
  Growth,
  Team,
  Achievement,
  Rating,
  Time,
  Goal,
  Success,
  Next,
  Start,
  Magic,
  Call,
  Email,
  Location
} from 'lucide-react';

// Real IT Services Data with detailed information
const itServices = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Solutions',
    description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud. Enterprise-grade security, scalability, and 99.9% uptime guarantee.',
    icon: Cloud,
    price: 'Starting at $2,999/month',
    features: [
      'Multi-cloud strategy & migration',
      'Infrastructure as Code (IaC)',
      'Auto-scaling & load balancing',
      'Disaster recovery & backup',
      'Security compliance (SOC2, ISO27001)',
      '24/7 monitoring & support',
      'Cost optimization',
      'Performance tuning'
    ],
    popular: true,
    category: 'Infrastructure',
    benefits: ['99.9% uptime', '50% cost reduction', 'Unlimited scalability'],
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    demo: 'https://ziontechgroup.com/demo/cloud-infrastructure',
    useCases: [
      'Enterprise application migration to cloud',
      'Hybrid cloud infrastructure setup',
      'Disaster recovery and business continuity',
      'Global application deployment',
      'DevOps and CI/CD pipeline setup'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
    roi: '300% ROI through cost savings and improved performance'
  },
  {
    id: 'cybersecurity-suite',
    name: 'Enterprise Cybersecurity Suite',
    description: 'Comprehensive security solutions including threat detection, vulnerability assessment, incident response, and compliance management.',
    icon: Shield,
    price: 'Starting at $1,999/month',
    features: [
      'Advanced threat detection',
      'Vulnerability assessment & penetration testing',
      'Security incident response',
      'Compliance management (GDPR, HIPAA, SOX)',
      'Security awareness training',
      'Identity & access management',
      'Data encryption & protection',
      'Security monitoring & analytics'
    ],
    popular: true,
    category: 'Security',
    benefits: ['99.8% threat detection', 'Zero data breaches', 'Full compliance'],
    link: 'https://ziontechgroup.com/cybersecurity-suite',
    demo: 'https://ziontechgroup.com/demo/cybersecurity-suite',
    useCases: [
      'Financial services security compliance',
      'Healthcare data protection (HIPAA)',
      'E-commerce fraud prevention',
      'Government security requirements',
      'Enterprise data breach prevention'
    ],
    technologies: ['SIEM', 'EDR', 'XDR', 'Zero Trust', 'PKI', 'Multi-factor Auth'],
    roi: '400% ROI through risk mitigation and compliance'
  },
  {
    id: 'devops-automation',
    name: 'DevOps & CI/CD Automation',
    description: 'Complete DevOps pipeline setup with automated testing, deployment, and monitoring for faster, more reliable software delivery.',
    icon: Settings,
    price: 'Starting at $1,499/month',
    features: [
      'CI/CD pipeline implementation',
      'Automated testing & quality gates',
      'Infrastructure automation',
      'Container orchestration',
      'Monitoring & alerting setup',
      'Security scanning integration',
      'Team training & best practices',
      'Performance optimization'
    ],
    popular: true,
    category: 'DevOps',
    benefits: ['70% faster deployments', '90% error reduction', 'Automated workflows'],
    link: 'https://ziontechgroup.com/devops-automation',
    demo: 'https://ziontechgroup.com/demo/devops-automation',
    useCases: [
      'Microservices deployment automation',
      'Multi-environment release management',
      'Database migration automation',
      'Application performance monitoring',
      'Security vulnerability scanning'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform'],
    roi: '250% ROI through faster delivery and reduced errors'
  },
  {
    id: 'database-management',
    name: 'Database Management & Optimization',
    description: 'Professional database administration with performance optimization, backup solutions, data migration, and 24/7 monitoring.',
    icon: Database,
    price: 'Starting at $999/month',
    features: [
      'Database performance tuning',
      'Automated backup & recovery',
      'Data migration & consolidation',
      'Security hardening',
      '24/7 monitoring & alerting',
      'Capacity planning',
      'Query optimization',
      'Disaster recovery planning'
    ],
    popular: false,
    category: 'Database',
    benefits: ['300% performance improvement', 'Zero data loss', 'Automated backups'],
    link: 'https://ziontechgroup.com/database-management',
    demo: 'https://ziontechgroup.com/demo/database-management',
    useCases: [
      'Legacy database modernization',
      'High-performance data analytics',
      'Real-time data processing',
      'Database consolidation projects',
      'Compliance and audit requirements'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
    roi: '200% ROI through performance optimization and reliability'
  },
  {
    id: 'network-solutions',
    name: 'Network Infrastructure Solutions',
    description: 'Complete network design, implementation, and management with security, monitoring, and optimization for enterprise environments.',
    icon: Wifi,
    price: 'Starting at $1,299/month',
    features: [
      'Network design & architecture',
      'Security implementation (firewalls, VPN)',
      'Performance monitoring & optimization',
      'Troubleshooting & maintenance',
      'Wireless network setup',
      'Load balancing configuration',
      'Network documentation',
      '24/7 support & monitoring'
    ],
    popular: false,
    category: 'Networking',
    benefits: ['99.9% network uptime', 'Enhanced security', 'Optimized performance'],
    link: 'https://ziontechgroup.com/network-solutions',
    demo: 'https://ziontechgroup.com/demo/network-solutions',
    useCases: [
      'Multi-site network connectivity',
      'Remote work infrastructure',
      'Data center network design',
      'Network security implementation',
      'Performance optimization projects'
    ],
    technologies: ['Cisco', 'Juniper', 'Fortinet', 'Palo Alto', 'SD-WAN', '5G'],
    roi: '180% ROI through improved connectivity and security'
  },
  {
    id: 'it-consulting',
    name: 'Strategic IT Consulting',
    description: 'Expert IT strategy consulting to align technology with business goals and drive digital transformation initiatives.',
    icon: Users,
    price: '$300/hour',
    features: [
      'IT strategy & roadmap development',
      'Technology assessment & recommendations',
      'Digital transformation planning',
      'Vendor selection & evaluation',
      'Implementation guidance',
      'Change management',
      'ROI analysis & reporting',
      'Ongoing advisory services'
    ],
    popular: false,
    category: 'Consulting',
    benefits: ['Strategic alignment', 'Cost optimization', 'Technology roadmap'],
    link: 'https://ziontechgroup.com/it-consulting',
    demo: 'https://ziontechgroup.com/demo/it-consulting',
    useCases: [
      'Digital transformation strategy',
      'Technology stack modernization',
      'IT budget planning and optimization',
      'Vendor relationship management',
      'Technology risk assessment'
    ],
    technologies: ['Enterprise Architecture', 'ITIL', 'COBIT', 'Agile', 'Cloud Strategy', 'Security Frameworks'],
    roi: '500% ROI through strategic technology decisions'
  },
  {
    id: 'managed-it-services',
    name: 'Managed IT Services',
    description: 'Comprehensive managed IT services including help desk, system administration, monitoring, and proactive maintenance.',
    icon: Headphones,
    price: 'Starting at $1,799/month',
    features: [
      '24/7 help desk support',
      'Proactive system monitoring',
      'Patch management & updates',
      'Security monitoring & response',
      'Backup & disaster recovery',
      'Asset management',
      'Performance optimization',
      'Monthly reporting & analytics'
    ],
    popular: true,
    category: 'Managed Services',
    benefits: ['99.9% uptime', 'Proactive maintenance', 'Reduced IT costs'],
    link: 'https://ziontechgroup.com/managed-it-services',
    demo: 'https://ziontechgroup.com/demo/managed-it-services',
    useCases: [
      'Small to medium business IT support',
      'Remote workforce management',
      'Multi-location IT coordination',
      'Compliance and security management',
      'IT cost optimization'
    ],
    technologies: ['RMM Tools', 'PSA Systems', 'SIEM', 'Backup Solutions', 'Monitoring Tools', 'Ticketing Systems'],
    roi: '220% ROI through reduced downtime and operational costs'
  },
  {
    id: 'data-center-solutions',
    name: 'Data Center Solutions',
    description: 'Complete data center design, implementation, and management with high availability, security, and energy efficiency.',
    icon: Server,
    price: 'Starting at $4,999/month',
    features: [
      'Data center design & build',
      'High availability architecture',
      'Power & cooling optimization',
      'Security & access control',
      'Disaster recovery planning',
      'Environmental monitoring',
      'Energy efficiency optimization',
      'Compliance & certification'
    ],
    popular: false,
    category: 'Data Center',
    benefits: ['99.99% uptime', 'Energy efficient', 'Secure & compliant'],
    link: 'https://ziontechgroup.com/data-center-solutions',
    demo: 'https://ziontechgroup.com/demo/data-center-solutions',
    useCases: [
      'Enterprise data center construction',
      'Colocation facility management',
      'Hybrid cloud data center',
      'Disaster recovery site setup',
      'Compliance and certification projects'
    ],
    technologies: ['Uptime Institute', 'Tier Standards', 'HVAC Systems', 'UPS Systems', 'Fire Suppression', 'Access Control'],
    roi: '350% ROI through improved reliability and efficiency'
  }
];

// Service Card Component
const ServiceCard = memo(({ service }: { service: any }) => (
  <div className="quantum-card p-8 h-full group hover:scale-105 transition-all duration-300">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-gray-400">{service.category}</p>
        </div>
      </div>
      {service.popular && (
        <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full">
          Popular
        </span>
      )}
    </div>
    
    <p className="text-gray-300 mb-6 text-base leading-relaxed">
      {service.description}
    </p>
    
    <div className="mb-6">
      <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
      <div className="text-sm text-gray-400 mb-4">{service.roi}</div>
      <div className="flex flex-wrap gap-2">
        {service.benefits.map((benefit: string, index: number) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
            {benefit}
          </span>
        ))}
      </div>
    </div>
    
    <div className="space-y-3 mb-8">
      <h4 className="text-sm font-semibold text-cyan-400">Key Features:</h4>
      {service.features.slice(0, 4).map((feature: string, index: number) => (
        <div key={index} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
          {feature}
        </div>
      ))}
    </div>

    <div className="mb-6">
      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech: string, index: number) => (
          <span key={index} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    <div className="flex space-x-3">
      <a
        href={service.link}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all group"
      >
        <span className="flex items-center justify-center">
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </a>
      <a
        href={service.demo}
        className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-all"
      >
        Demo
      </a>
    </div>
  </div>
));

// Industries Section
const IndustriesSection = memo(() => (
  <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
          <span className="holographic-text">Industries We Serve</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our IT solutions are trusted by organizations across various industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Healthcare',
            description: 'HIPAA-compliant IT infrastructure, telemedicine platforms, and patient data security',
            icon: Activity,
            benefits: ['HIPAA compliance', '99.9% uptime', 'Secure patient data']
          },
          {
            title: 'Financial Services',
            description: 'Banking-grade security, compliance management, and high-availability systems',
            icon: BarChart,
            benefits: ['PCI DSS compliance', 'Real-time monitoring', 'Fraud prevention']
          },
          {
            title: 'Manufacturing',
            description: 'Industrial IoT, automation systems, and supply chain optimization',
            icon: Settings,
            benefits: ['IoT integration', 'Process automation', 'Quality control']
          },
          {
            title: 'Education',
            description: 'Learning management systems, student data protection, and remote learning infrastructure',
            icon: GraduationCap,
            benefits: ['FERPA compliance', 'Remote learning', 'Student data security']
          },
          {
            title: 'Government',
            description: 'Secure government networks, citizen services, and compliance with federal standards',
            icon: Shield,
            benefits: ['FedRAMP compliance', 'Security clearance', 'Citizen services']
          },
          {
            title: 'Retail & E-commerce',
            description: 'E-commerce platforms, payment processing, and customer data management',
            icon: ShoppingCart,
            benefits: ['PCI compliance', 'High availability', 'Customer data protection']
          }
        ].map((industry, index) => (
          <div key={index} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <industry.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                {industry.title}
              </h3>
            </div>
            <p className="text-gray-300 mb-4">{industry.description}</p>
            <div className="space-y-2">
              {industry.benefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
));

// Main IT Services Page Component
export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Layers },
    { id: 'Infrastructure', label: 'Infrastructure', icon: Cloud },
    { id: 'Security', label: 'Security', icon: Shield },
    { id: 'DevOps', label: 'DevOps', icon: Settings },
    { id: 'Database', label: 'Database', icon: Database },
    { id: 'Networking', label: 'Networking', icon: Wifi },
    { id: 'Consulting', label: 'Consulting', icon: Users },
    { id: 'Managed Services', label: 'Managed Services', icon: Headphones },
    { id: 'Data Center', label: 'Data Center', icon: Server }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IT Services - Zion Tech Group',
    description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and managed services',
    provider: {
      '@type': 'Organization',
      name: 'Zion Tech Group',
      url: 'https://ziontechgroup.com'
    },
    areaServed: 'Worldwide',
    serviceType: 'Information Technology Services'
  };

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud, Security, DevOps, Managed Services</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps automation, database management, and managed services. Enterprise-grade solutions with 99.9% uptime guarantee."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, DevOps, managed services, database management, network solutions, IT consulting, enterprise IT"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 cyber-grid neural-network-bg overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cyber-text">
              <span className="holographic-text neon-pulse">IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Enterprise-grade IT solutions that keep your business running smoothly. 
              From cloud infrastructure to cybersecurity, we provide comprehensive IT services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Get Started Today
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Request Consultation
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <IndustriesSection />

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Ready to Optimize Your IT?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let our IT experts help you build a robust, secure, and scalable technology infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email kleber@ziontechgroup.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}