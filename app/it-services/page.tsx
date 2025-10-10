'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    // Cloud Infrastructure & Services
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud architecture design',
        'Multi-cloud strategies',
        'Cost optimization',
        'Disaster recovery',
        'Auto-scaling solutions',
        'Security compliance'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Cost reduction up to 40%',
        'Scalable infrastructure',
        'Expert migration support'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'cloud-native-development',
      name: 'Cloud-Native Development',
      description: 'Modern cloud-native application development using microservices, containers, and serverless',
      price: '$3,500/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Microservices architecture design',
        'Container orchestration with Kubernetes',
        'Serverless application development',
        'API gateway and service mesh',
        'Cloud-native monitoring and logging',
        'CI/CD pipeline automation',
        'Auto-scaling and load balancing',
        'Multi-cloud deployment strategies'
      ],
      benefits: [
        'Improved scalability and performance',
        'Faster time to market',
        'Reduced operational overhead',
        'Enhanced reliability and availability'
      ],
      category: 'Cloud',
      popular: true,
      icon: Cloud
    },
    {
      id: 'hybrid-cloud-solutions',
      name: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud environments for optimal flexibility',
      price: '$2,800/month',
      marketPrice: '$5000-18000/month',
      features: [
        'Hybrid cloud architecture design',
        'Data synchronization and replication',
        'Cross-cloud workload management',
        'Security and compliance across environments',
        'Cost optimization and governance',
        'Disaster recovery and backup strategies',
        'Network connectivity and VPN setup',
        'Migration and modernization planning'
      ],
      benefits: [
        'Flexible deployment options',
        'Improved data sovereignty',
        'Cost-effective resource utilization',
        'Seamless workload portability'
      ],
      category: 'Cloud',
      popular: false,
      icon: Cloud
    },

    // Cybersecurity & Compliance
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Threat detection & response',
        'Vulnerability assessments',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Employee training'
      ],
      benefits: [
        '24/7 security monitoring',
        'Reduced security incidents',
        'Compliance assurance',
        'Expert security team'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'zero-trust-security',
      name: 'Zero Trust Security Architecture',
      description: 'Comprehensive zero trust security implementation for modern enterprise environments',
      price: '$2,200/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Identity and access management (IAM)',
        'Multi-factor authentication (MFA)',
        'Network segmentation and micro-segmentation',
        'Device trust and compliance verification',
        'Data encryption and tokenization',
        'Continuous security monitoring',
        'Policy enforcement and automation',
        'Threat detection and response'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance',
        'Better visibility and control'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management Services',
      description: 'Comprehensive compliance solutions for GDPR, HIPAA, SOC2, PCI-DSS, and other regulations',
      price: '$1,500/month',
      marketPrice: '$2500-10000/month',
      features: [
        'Compliance gap analysis and assessment',
        'Policy development and implementation',
        'Audit preparation and support',
        'Risk assessment and mitigation',
        'Employee training and awareness',
        'Documentation and evidence collection',
        'Continuous monitoring and reporting',
        'Regulatory change management'
      ],
      benefits: [
        'Reduced compliance risk',
        'Streamlined audit processes',
        'Automated compliance monitoring',
        'Expert regulatory guidance'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },

    // DevOps & Automation
    {
      id: 'devops',
      name: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation'
      ],
      benefits: [
        'Faster deployments',
        'Reduced downtime',
        'Improved code quality',
        'Automated workflows'
      ],
      category: 'DevOps',
      popular: false,
      icon: Settings
    },
    {
      id: 'site-reliability-engineering',
      name: 'Site Reliability Engineering (SRE)',
      description: 'Advanced SRE practices for ensuring system reliability, performance, and scalability',
      price: '$3,000/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Service level objective (SLO) definition',
        'Error budget management',
        'Incident response and post-mortems',
        'Capacity planning and scaling',
        'Performance optimization',
        'Monitoring and alerting systems',
        'Chaos engineering and testing',
        'Documentation and runbooks'
      ],
      benefits: [
        'Improved system reliability',
        'Reduced incident response time',
        'Better performance and scalability',
        'Proactive issue prevention'
      ],
      category: 'DevOps',
      popular: true,
      icon: Settings
    },
    {
      id: 'infrastructure-automation',
      name: 'Infrastructure Automation',
      description: 'Complete infrastructure automation using IaC, configuration management, and orchestration',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Configuration management (Ansible, Puppet)',
        'Container orchestration (Kubernetes)',
        'Service mesh implementation',
        'GitOps workflows',
        'Environment provisioning automation',
        'Backup and disaster recovery automation',
        'Cost optimization and governance'
      ],
      benefits: [
        'Faster infrastructure provisioning',
        'Consistent and repeatable deployments',
        'Reduced manual errors',
        'Improved resource utilization'
      ],
      category: 'DevOps',
      popular: false,
      icon: Settings
    },

    // Database & Data Management
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: [
        'Database design & optimization',
        'Performance tuning',
        'Backup & recovery',
        'Data migration',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      benefits: [
        'Improved performance',
        'Data security',
        'Automated backups',
        'Expert DBA support'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    },
    {
      id: 'data-warehousing',
      name: 'Data Warehousing & Analytics',
      description: 'Enterprise data warehousing solutions with advanced analytics and business intelligence',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Data modeling and architecture',
        'Business intelligence dashboards',
        'Data quality and governance',
        'Real-time analytics processing',
        'Machine learning integration',
        'Cloud data platform migration'
      ],
      benefits: [
        'Centralized data management',
        'Improved business insights',
        'Scalable analytics platform',
        'Data-driven decision making'
      ],
      category: 'Database',
      popular: true,
      icon: Database
    },
    {
      id: 'data-lake-solutions',
      name: 'Data Lake & Big Data Solutions',
      description: 'Modern data lake architecture for storing, processing, and analyzing large-scale data',
      price: '$3,200/month',
      marketPrice: '$6000-20000/month',
      features: [
        'Data lake architecture design',
        'Big data processing frameworks',
        'Stream processing and real-time analytics',
        'Data catalog and metadata management',
        'Data lineage and governance',
        'Machine learning pipeline integration',
        'Multi-format data ingestion',
        'Cost optimization and lifecycle management'
      ],
      benefits: [
        'Scalable data storage and processing',
        'Real-time analytics capabilities',
        'Flexible data schema evolution',
        'Cost-effective data management'
      ],
      category: 'Database',
      popular: false,
      icon: Database
    },

    // Development Services
    {
      id: 'mobile-development',
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      benefits: [
        'Native performance',
        'Cross-platform compatibility',
        'App store success',
        'User engagement'
      ],
      category: 'Development',
      popular: false,
      icon: Smartphone
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: '$5,000/project',
      marketPrice: '$10000-30000/project',
      features: [
        'React/Next.js development',
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Content management'
      ],
      benefits: [
        'Modern technology stack',
        'SEO optimized',
        'Mobile responsive',
        'Fast loading times'
      ],
      category: 'Development',
      popular: false,
      icon: Globe
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      description: 'RESTful and GraphQL API development with comprehensive integration services',
      price: '$3,500/project',
      marketPrice: '$7000-25000/project',
      features: [
        'RESTful API design and development',
        'GraphQL API implementation',
        'API gateway and management',
        'Third-party API integrations',
        'API documentation and testing',
        'Rate limiting and security',
        'API versioning and lifecycle management',
        'Microservices communication'
      ],
      benefits: [
        'Seamless system integration',
        'Improved developer experience',
        'Scalable API architecture',
        'Enhanced security and monitoring'
      ],
      category: 'Development',
      popular: true,
      icon: Globe
    },
    {
      id: 'legacy-modernization',
      name: 'Legacy System Modernization',
      description: 'Modernizing legacy systems with cloud migration, microservices, and modern architectures',
      price: '$15,000/project',
      marketPrice: '$30000-100000/project',
      features: [
        'Legacy system assessment and analysis',
        'Cloud migration strategies',
        'Microservices decomposition',
        'Data migration and transformation',
        'API modernization and integration',
        'User interface modernization',
        'Performance optimization',
        'Security and compliance updates'
      ],
      benefits: [
        'Improved system performance',
        'Reduced maintenance costs',
        'Enhanced scalability',
        'Modern user experience'
      ],
      category: 'Development',
      popular: false,
      icon: Globe
    },

    // Network & Infrastructure
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Design',
      description: 'Enterprise network design, implementation, and optimization for modern business needs',
      price: '$2,000/month',
      marketPrice: '$4000-12000/month',
      features: [
        'Network architecture design',
        'SD-WAN implementation',
        'Network security and segmentation',
        'Load balancing and traffic management',
        'Network monitoring and analytics',
        'Wireless network optimization',
        'Disaster recovery networking',
        'Cloud connectivity solutions'
      ],
      benefits: [
        'Improved network performance',
        'Enhanced security posture',
        'Reduced network complexity',
        'Better user experience'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Globe
    },
    {
      id: 'edge-computing',
      name: 'Edge Computing Solutions',
      description: 'Edge computing infrastructure for low-latency applications and IoT deployments',
      price: '$2,800/month',
      marketPrice: '$5000-18000/month',
      features: [
        'Edge infrastructure deployment',
        'IoT device management',
        'Real-time data processing',
        'Edge-to-cloud connectivity',
        'Latency optimization',
        'Edge security and compliance',
        'Content delivery optimization',
        'Distributed computing management'
      ],
      benefits: [
        'Reduced latency and improved performance',
        'Enhanced IoT capabilities',
        'Better user experience',
        'Cost-effective data processing'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Globe
    },

    // Managed Services
    {
      id: 'managed-it-services',
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services for proactive monitoring, maintenance, and support',
      price: '$1,500/month',
      marketPrice: '$2500-8000/month',
      features: [
        '24/7 system monitoring',
        'Proactive maintenance and updates',
        'Help desk and technical support',
        'Security monitoring and management',
        'Backup and disaster recovery',
        'Performance optimization',
        'Vendor management',
        'IT strategy and planning'
      ],
      benefits: [
        'Reduced IT operational costs',
        'Improved system reliability',
        'Expert technical support',
        'Proactive issue resolution'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Settings
    },
    {
      id: 'cloud-managed-services',
      name: 'Cloud Managed Services',
      description: 'Comprehensive cloud management including monitoring, optimization, and cost management',
      price: '$2,200/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Cloud resource monitoring and optimization',
        'Cost management and optimization',
        'Security and compliance management',
        'Backup and disaster recovery',
        'Performance monitoring and tuning',
        'Automated scaling and management',
        'Multi-cloud governance',
        'Cloud migration and modernization'
      ],
      benefits: [
        'Optimized cloud costs',
        'Improved cloud performance',
        'Enhanced security and compliance',
        'Reduced operational overhead'
      ],
      category: 'Managed Services',
      popular: true,
      icon: Cloud
    },

    // Digital Transformation
    {
      id: 'digital-transformation',
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize business processes and technology',
      price: '$5,000/month',
      marketPrice: '$10000-30000/month',
      features: [
        'Digital strategy development',
        'Process automation and optimization',
        'Technology roadmap planning',
        'Change management and training',
        'Digital culture transformation',
        'Customer experience enhancement',
        'Data-driven decision making',
        'Innovation and experimentation'
      ],
      benefits: [
        'Improved operational efficiency',
        'Enhanced customer experience',
        'Increased competitive advantage',
        'Future-ready business model'
      ],
      category: 'Consulting',
      popular: false,
      icon: TrendingUp
    },
    {
      id: 'it-strategy-consulting',
      name: 'IT Strategy & Architecture',
      description: 'Strategic IT consulting for technology planning, architecture design, and digital innovation',
      price: '$3,500/month',
      marketPrice: '$7000-25000/month',
      features: [
        'IT strategy and roadmap development',
        'Technology architecture design',
        'Digital innovation planning',
        'Technology vendor evaluation',
        'IT governance and standards',
        'Risk assessment and mitigation',
        'Budget planning and optimization',
        'Technology trend analysis'
      ],
      benefits: [
        'Aligned IT and business strategy',
        'Optimized technology investments',
        'Reduced technology risks',
        'Enhanced innovation capabilities'
      ],
      category: 'Consulting',
      popular: false,
      icon: TrendingUp
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'DevOps', name: 'DevOps', count: services.filter(s => s.category === 'DevOps').length },
    { id: 'Database', name: 'Database', count: services.filter(s => s.category === 'Database').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: services.filter(s => s.category === 'Infrastructure').length },
    { id: 'Managed Services', name: 'Managed Services', count: services.filter(s => s.category === 'Managed Services').length },
    { id: 'Consulting', name: 'Consulting', count: services.filter(s => s.category === 'Consulting').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, database management, and web development." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete IT solutions to modernize your infrastructure and drive business growth. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    {service.popular && (
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Ready to Modernize Your IT Infrastructure?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our IT experts help you choose the right solutions for your business needs. 
                  Get a free consultation and see how we can transform your technology infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ItServicesPage;
