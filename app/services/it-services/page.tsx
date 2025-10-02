import React from 'react';
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Lock, 
  Monitor, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Network,
  Settings,
  BarChart3,
  Users,
  Globe,
  Smartphone
} from 'lucide-react';

export default function ITServices() {
  const title = 'IT Services & Solutions — Zion Tech Group';
  const description = 'Enterprise-grade IT services including cloud migration, DevOps, cybersecurity, and infrastructure management.';

  const itServices = [
    {
      name: 'Cloud Migration & Architecture',
      description: 'Seamless migration to AWS, Azure, or GCP with optimized architecture',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture design',
        'Automated migration with zero downtime',
        'Cost optimization and rightsizing',
        'Security and compliance implementation',
        '24/7 monitoring and support'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '2-8 weeks',
      category: 'Cloud Services',
      marketPrice: '$10,000-100,000/project',
      benefits: 'Reduce infrastructure costs by 30-50%'
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated deployment pipelines',
      icon: Zap,
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration with Kubernetes',
        'Automated testing and quality gates',
        'Monitoring and alerting systems'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '2-6 weeks',
      category: 'DevOps',
      marketPrice: '$8,000-40,000/project',
      benefits: 'Deploy 10x faster with 99.9% reliability'
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Comprehensive security implementation and compliance management',
      icon: Shield,
      features: [
        'Security assessment and penetration testing',
        'SOC 2, HIPAA, GDPR compliance implementation',
        'Identity and access management (IAM)',
        'Security monitoring and incident response',
        'Security training and awareness programs'
      ],
      pricing: '$2,500 - $30,000/project',
      delivery: '3-12 weeks',
      category: 'Security',
      marketPrice: '$5,000-60,000/project',
      benefits: 'Achieve compliance and reduce security risks by 90%'
    },
    {
      name: 'Infrastructure Management',
      description: '24/7 infrastructure monitoring, maintenance, and optimization',
      icon: Server,
      features: [
        'Proactive monitoring and alerting',
        'Performance optimization and tuning',
        'Backup and disaster recovery planning',
        'Capacity planning and scaling',
        'Incident response and resolution'
      ],
      pricing: '$1,500 - $15,000/month',
      delivery: '1-2 weeks',
      category: 'Infrastructure',
      marketPrice: '$3,000-25,000/month',
      benefits: '99.9% uptime with proactive maintenance'
    },
    {
      name: 'Database Management & Optimization',
      description: 'Database design, optimization, and migration services',
      icon: Database,
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and recovery strategies',
        'Database security and compliance'
      ],
      pricing: '$2,000 - $20,000/project',
      delivery: '2-8 weeks',
      category: 'Database',
      marketPrice: '$5,000-40,000/project',
      benefits: 'Improve query performance by 5-10x'
    },
    {
      name: 'Network Security & Management',
      description: 'Secure network design, implementation, and management',
      icon: Network,
      features: [
        'Network architecture and design',
        'Firewall configuration and management',
        'VPN setup and remote access solutions',
        'Network monitoring and optimization',
        'Security policies and procedures'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '2-6 weeks',
      category: 'Networking',
      marketPrice: '$6,000-50,000/project',
      benefits: 'Secure, high-performance network infrastructure'
    },
    {
      name: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support and helpdesk services',
      icon: Users,
      features: [
        '24/7 technical support and helpdesk',
        'Remote desktop and troubleshooting',
        'Software installation and updates',
        'User training and documentation',
        'IT asset management and inventory'
      ],
      pricing: '$500 - $5,000/month',
      delivery: '1 week',
      category: 'Support',
      marketPrice: '$1,000-10,000/month',
      benefits: 'Reduce IT support tickets by 60%'
    },
    {
      name: 'Mobile & Web Development',
      description: 'Custom web and mobile application development',
      icon: Smartphone,
      features: [
        'Responsive web application development',
        'Native and cross-platform mobile apps',
        'API development and integration',
        'Performance optimization',
        'Maintenance and support'
      ],
      pricing: '$5,000 - $100,000/project',
      delivery: '4-16 weeks',
      category: 'Development',
      marketPrice: '$15,000-200,000/project',
      benefits: 'Modern, scalable applications with great UX'
    },
    {
      name: 'Business Intelligence & Analytics',
      description: 'Data analytics and business intelligence solutions',
      icon: BarChart3,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Dashboard and reporting solutions',
        'Predictive analytics and machine learning',
        'Data governance and quality management'
      ],
      pricing: '$8,000 - $75,000/project',
      delivery: '6-20 weeks',
      category: 'Analytics',
      marketPrice: '$20,000-150,000/project',
      benefits: 'Make data-driven decisions with real-time insights'
    },
    {
      name: 'Edge Computing Infrastructure',
      description: 'Distributed computing infrastructure for low-latency applications',
      icon: Server,
      features: [
        'Edge node deployment and management',
        'Content delivery network optimization',
        'Real-time data processing at the edge',
        'IoT device connectivity and management',
        'Edge security and access control'
      ],
      pricing: '$10,000 - $80,000/project',
      delivery: '8-16 weeks',
      category: 'Edge Computing',
      marketPrice: '$20,000-150,000/project',
      benefits: 'Reduce latency by 70% and improve user experience'
    },
    {
      name: 'Quantum Computing Integration',
      description: 'Quantum computing infrastructure and algorithm development',
      icon: Cpu,
      features: [
        'Quantum algorithm development and optimization',
        'Quantum hardware integration and management',
        'Hybrid classical-quantum system design',
        'Quantum cryptography implementation',
        'Performance benchmarking and optimization'
      ],
      pricing: '$50,000 - $500,000/project',
      delivery: '12-36 weeks',
      category: 'Quantum Computing',
      marketPrice: '$100,000-1,000,000/project',
      benefits: 'Achieve exponential speedup for complex computational problems'
    },
    {
      name: 'Blockchain Infrastructure Services',
      description: 'Enterprise blockchain development and infrastructure management',
      icon: Shield,
      features: [
        'Private blockchain network setup',
        'Smart contract development and deployment',
        'Consensus mechanism implementation',
        'Blockchain security and monitoring',
        'Integration with existing systems'
      ],
      pricing: '$15,000 - $120,000/project',
      delivery: '10-24 weeks',
      category: 'Blockchain',
      marketPrice: '$30,000-200,000/project',
      benefits: 'Increase transparency and reduce transaction costs by 60%'
    },
    {
      name: '5G Network Implementation',
      description: '5G network infrastructure design and implementation services',
      icon: Network,
      features: [
        '5G network architecture design',
        'Small cell deployment and optimization',
        'Network slicing and virtualization',
        'Performance monitoring and optimization',
        'Integration with existing infrastructure'
      ],
      pricing: '$25,000 - $200,000/project',
      delivery: '12-32 weeks',
      category: '5G Networks',
      marketPrice: '$50,000-400,000/project',
      benefits: 'Enable ultra-fast connectivity with 10x speed improvement'
    },
    {
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation and management',
      icon: Shield,
      features: [
        'Identity and access management (IAM)',
        'Micro-segmentation implementation',
        'Continuous security monitoring',
        'Privileged access management',
        'Security orchestration and automation'
      ],
      pricing: '$20,000 - $150,000/project',
      delivery: '12-24 weeks',
      category: 'Zero Trust Security',
      marketPrice: '$40,000-300,000/project',
      benefits: 'Reduce security breaches by 90% with comprehensive protection'
    },
    {
      name: 'Hybrid Cloud Management',
      description: 'Seamless hybrid cloud infrastructure management and optimization',
      icon: Cloud,
      features: [
        'Multi-cloud orchestration and management',
        'Workload placement optimization',
        'Cost optimization across cloud providers',
        'Disaster recovery and backup strategies',
        'Compliance and governance management'
      ],
      pricing: '$12,000 - $100,000/project',
      delivery: '8-20 weeks',
      category: 'Hybrid Cloud',
      marketPrice: '$25,000-180,000/project',
      benefits: 'Optimize costs by 40% while improving flexibility and performance'
    },
    {
      name: 'IoT Platform Development',
      description: 'Comprehensive IoT platform development and device management',
      icon: Zap,
      features: [
        'IoT device connectivity and management',
        'Data ingestion and processing pipelines',
        'Real-time analytics and monitoring',
        'Device security and firmware management',
        'Integration with business applications'
      ],
      pricing: '$18,000 - $140,000/project',
      delivery: '10-24 weeks',
      category: 'IoT Platform',
      marketPrice: '$35,000-250,000/project',
      benefits: 'Connect and manage thousands of devices with 99.9% reliability'
    },
    {
      name: 'API Gateway & Management',
      description: 'Enterprise API gateway setup and comprehensive API management',
      icon: Globe,
      features: [
        'API gateway configuration and optimization',
        'API security and authentication',
        'Rate limiting and traffic management',
        'API analytics and monitoring',
        'Developer portal and documentation'
      ],
      pricing: '$8,000 - $60,000/project',
      delivery: '6-12 weeks',
      category: 'API Management',
      marketPrice: '$15,000-100,000/project',
      benefits: 'Improve API performance by 50% and reduce security risks'
    },
    {
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      icon: Shield,
      features: [
        'Business continuity planning and testing',
        'Backup and recovery system implementation',
        'Failover and redundancy setup',
        'Recovery time objective (RTO) optimization',
        'Disaster recovery testing and validation'
      ],
      pricing: '$15,000 - $120,000/project',
      delivery: '8-16 weeks',
      category: 'Disaster Recovery',
      marketPrice: '$30,000-200,000/project',
      benefits: 'Minimize downtime to less than 4 hours with 99.9% recovery success'
    },
    {
      name: 'IT Governance & Compliance',
      description: 'Comprehensive IT governance framework and compliance management',
      icon: Shield,
      features: [
        'IT governance framework implementation',
        'Compliance monitoring and reporting',
        'Risk assessment and management',
        'Policy development and enforcement',
        'Audit preparation and support'
      ],
      pricing: '$10,000 - $80,000/project',
      delivery: '6-16 weeks',
      category: 'IT Governance',
      marketPrice: '$20,000-140,000/project',
      benefits: 'Ensure 100% compliance with industry standards and regulations'
    },
    {
      name: 'Digital Transformation Consulting',
      description: 'End-to-end digital transformation strategy and implementation',
      icon: Zap,
      features: [
        'Digital strategy development and planning',
        'Technology assessment and roadmap creation',
        'Change management and training',
        'Process automation and optimization',
        'Performance measurement and optimization'
      ],
      pricing: '$25,000 - $200,000/project',
      delivery: '16-40 weeks',
      category: 'Digital Transformation',
      marketPrice: '$50,000-400,000/project',
      benefits: 'Achieve 300% improvement in operational efficiency and customer satisfaction'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Settings className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-lg font-semibold text-blue-600">IT Services & Solutions</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade IT Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions for modern businesses. From cloud migration to cybersecurity, 
                we provide end-to-end IT services with proven results.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {contactInfo.phone}
                </a>
                <span className="text-gray-400 hidden sm:block">•</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700 font-semibold">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Our Pricing:</span>
                      <span className="font-semibold text-green-600">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-500">Market Rate:</span>
                      <span className="text-gray-700">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-gray-500">Delivery:</span>
                      <span className="text-blue-600 font-medium">{service.delivery}</span>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-green-800 font-medium">
                        💡 {service.benefits}
                      </p>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>
              <p className="text-xl text-gray-600">How we deliver exceptional IT solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Comprehensive analysis of your current IT infrastructure and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
                <p className="text-gray-600">Detailed project plan with timelines, milestones, and deliverables</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Professional execution with minimal disruption to your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">Ongoing maintenance, monitoring, and optimization services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and customized proposal within 48 hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-blue-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <p className="text-blue-100 text-sm">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}