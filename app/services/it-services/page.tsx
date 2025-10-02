import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Server, 
  Cloud, 
  Shield, 
  Network, 
  Database, 
  Settings, 
  Monitor, 
  Code, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin,
  Users,
  Globe,
  Zap,
  HardDrive,
  Router,
  Cpu,
  Smartphone,
  Laptop,
  Building,
  Lock,
  BarChart3,
  FileText,
  MessageSquare,
  Search,
  TrendingUp,
  Target,
  Eye,
  Key,
  Wifi,
  Battery,
  Headphones,
  Printer,
  Scanner,
  Camera,
  Video,
  Mic,
  Calendar,
  ShoppingCart,
  CreditCard,
  Heart,
  Car,
  Plane,
  Gamepad2,
  Music,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home
} from 'lucide-react';

export default function ITServicesPage() {
  const title = 'Comprehensive IT Services & Solutions — Zion Tech Group';
  const description = 'Complete IT services including cloud migration, cybersecurity, infrastructure management, DevOps, data analytics, and digital transformation. Expert IT solutions for modern businesses.';

  const itServices = [
    {
      name: 'Cloud Migration & Infrastructure Services',
      description: 'Complete cloud migration services with multi-cloud strategy, security, and optimization',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture design',
        'Automated migration tools and processes',
        'Legacy system modernization and integration',
        'Cloud security and compliance implementation',
        'Performance optimization and cost management',
        'Disaster recovery and backup solutions',
        '24/7 cloud monitoring and support',
        'Training and knowledge transfer'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '4-12 weeks',
      category: 'Cloud Services',
      benefits: 'Reduce infrastructure costs by 40% and improve scalability by 300%',
      marketPrice: '$10,000 - $100,000/project',
      link: '/services/it-services/cloud-migration',
      useCases: ['Enterprise Migration', 'Startup Infrastructure', 'Hybrid Cloud', 'Disaster Recovery'],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform']
    },
    {
      name: 'Advanced Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, incident response, and compliance',
      icon: Shield,
      features: [
        'Zero-trust security architecture implementation',
        'Advanced threat detection and response',
        'Security awareness training and testing',
        'Compliance management (SOC2, ISO27001, GDPR)',
        'Penetration testing and vulnerability assessments',
        'Security operations center (SOC) services',
        'Identity and access management (IAM)',
        'Incident response and forensic analysis'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '2-8 weeks',
      category: 'Cybersecurity',
      benefits: 'Reduce security incidents by 95% and ensure compliance',
      marketPrice: '$6,000 - $50,000/month',
      link: '/services/it-services/cybersecurity',
      useCases: ['Enterprise Security', 'Compliance', 'Risk Management', 'Incident Response'],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Encryption', 'Identity Management']
    },
    {
      name: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, monitoring, and deployment',
      icon: Settings,
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (IaC) automation',
        'Container orchestration and management',
        'Automated testing and quality gates',
        'Monitoring and observability setup',
        'Release management and deployment strategies',
        'Team training and best practices',
        'Performance optimization and scaling'
      ],
      pricing: '$8,000 - $60,000/project',
      delivery: '6-16 weeks',
      category: 'DevOps',
      benefits: 'Reduce deployment time by 80% and improve reliability by 90%',
      marketPrice: '$15,000 - $120,000/project',
      link: '/services/it-services/devops',
      useCases: ['Software Development', 'Application Deployment', 'Infrastructure Automation', 'Team Collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'Kubernetes', 'Docker', 'Terraform', 'Prometheus']
    },
    {
      name: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics solutions with real-time insights and predictive modeling',
      icon: BarChart3,
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Real-time analytics and dashboards',
        'Machine learning model deployment',
        'Data visualization and reporting',
        'Data governance and quality management',
        'Business intelligence platform setup',
        'Advanced analytics and forecasting'
      ],
      pricing: '$10,000 - $75,000/project',
      delivery: '8-20 weeks',
      category: 'Data Analytics',
      benefits: 'Improve decision-making speed by 70% and data accuracy by 95%',
      marketPrice: '$20,000 - $150,000/project',
      link: '/services/it-services/data-analytics',
      useCases: ['Business Intelligence', 'Predictive Analytics', 'Data Warehousing', 'Reporting'],
      technologies: ['Python', 'R', 'SQL', 'Power BI', 'Tableau', 'Apache Spark']
    },
    {
      name: 'Network Infrastructure & Security',
      description: 'Complete network design, implementation, and security solutions',
      icon: Network,
      features: [
        'Network architecture design and implementation',
        'SD-WAN and hybrid network solutions',
        'Network security and firewall management',
        'Wireless network design and optimization',
        'Network monitoring and performance management',
        'VoIP and unified communications setup',
        'Network documentation and training',
        '24/7 network support and maintenance'
      ],
      pricing: '$5,000 - $40,000/project',
      delivery: '3-10 weeks',
      category: 'Networking',
      benefits: 'Improve network performance by 60% and reduce downtime by 85%',
      marketPrice: '$10,000 - $80,000/project',
      link: '/services/it-services/network-infrastructure',
      useCases: ['Enterprise Networks', 'Remote Work', 'Branch Connectivity', 'Network Security'],
      technologies: ['Cisco', 'Juniper', 'SD-WAN', 'Firewall', 'WiFi', 'VoIP']
    },
    {
      name: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, and migration',
      icon: Database,
      features: [
        'Database architecture design and implementation',
        'Performance tuning and optimization',
        'Database migration and consolidation',
        'Backup and disaster recovery solutions',
        'Database security and access control',
        'Monitoring and alerting setup',
        'Data archiving and lifecycle management',
        'Database administration and support'
      ],
      pricing: '$3,000 - $30,000/project',
      delivery: '2-8 weeks',
      category: 'Database Services',
      benefits: 'Improve database performance by 50% and reduce maintenance costs by 40%',
      marketPrice: '$6,000 - $60,000/project',
      link: '/services/it-services/database-management',
      useCases: ['Database Migration', 'Performance Optimization', 'Data Management', 'Backup Solutions'],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server', 'Redis']
    },
    {
      name: 'IT Infrastructure Management',
      description: 'Complete IT infrastructure management including servers, storage, and virtualization',
      icon: Server,
      features: [
        'Server infrastructure design and deployment',
        'Virtualization and containerization',
        'Storage solutions and data management',
        'Server monitoring and maintenance',
        'Capacity planning and scaling',
        'Hardware lifecycle management',
        'Infrastructure automation and orchestration',
        'Proactive support and maintenance'
      ],
      pricing: '$2,000 - $20,000/month',
      delivery: '1-4 weeks',
      category: 'Infrastructure',
      benefits: 'Reduce infrastructure costs by 35% and improve uptime by 99.9%',
      marketPrice: '$4,000 - $40,000/month',
      link: '/services/it-services/infrastructure-management',
      useCases: ['Server Management', 'Virtualization', 'Storage Solutions', 'Infrastructure Monitoring'],
      technologies: ['VMware', 'Hyper-V', 'Docker', 'Kubernetes', 'SAN', 'NAS']
    },
    {
      name: 'Digital Transformation Consulting',
      description: 'Strategic digital transformation services to modernize business processes and technology',
      icon: TrendingUp,
      features: [
        'Digital strategy and roadmap development',
        'Process automation and optimization',
        'Legacy system modernization',
        'Change management and training',
        'Technology stack evaluation and selection',
        'Digital workplace solutions',
        'Customer experience optimization',
        'ROI measurement and optimization'
      ],
      pricing: '$15,000 - $100,000/project',
      delivery: '12-24 weeks',
      category: 'Digital Transformation',
      benefits: 'Increase operational efficiency by 60% and customer satisfaction by 45%',
      marketPrice: '$30,000 - $200,000/project',
      link: '/services/it-services/digital-transformation',
      useCases: ['Business Modernization', 'Process Automation', 'Customer Experience', 'Operational Excellence'],
      technologies: ['Workflow Automation', 'Low-Code Platforms', 'RPA', 'Integration Platforms']
    },
    {
      name: 'Managed IT Services',
      description: 'Comprehensive managed IT services including helpdesk, monitoring, and support',
      icon: Monitor,
      features: [
        '24/7 helpdesk and technical support',
        'Proactive monitoring and maintenance',
        'Software and hardware management',
        'Security updates and patch management',
        'Backup and disaster recovery',
        'IT asset management and tracking',
        'User training and support',
        'IT consulting and strategic planning'
      ],
      pricing: '$50 - $200/user/month',
      delivery: '1-2 weeks',
      category: 'Managed Services',
      benefits: 'Reduce IT costs by 30% and improve system reliability by 95%',
      marketPrice: '$100 - $400/user/month',
      link: '/services/it-services/managed-services',
      useCases: ['Small Business IT', 'Enterprise Support', 'Remote Work', 'IT Outsourcing'],
      technologies: ['RMM Tools', 'PSA Platforms', 'Monitoring Solutions', 'Backup Systems']
    },
    {
      name: 'Application Development & Integration',
      description: 'Custom application development and system integration services',
      icon: Code,
      features: [
        'Custom web and mobile application development',
        'API development and integration',
        'Legacy system integration',
        'Microservices architecture implementation',
        'Cloud-native application development',
        'Third-party system integration',
        'Application testing and quality assurance',
        'Maintenance and ongoing support'
      ],
      pricing: '$10,000 - $100,000/project',
      delivery: '8-24 weeks',
      category: 'Application Development',
      benefits: 'Reduce development time by 40% and improve system integration by 80%',
      marketPrice: '$20,000 - $200,000/project',
      link: '/services/it-services/application-development',
      useCases: ['Custom Applications', 'System Integration', 'API Development', 'Mobile Apps'],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'API Gateway', 'Microservices']
    },
    {
      name: 'IT Compliance & Governance',
      description: 'Comprehensive IT compliance services for regulatory requirements and best practices',
      icon: FileText,
      features: [
        'Compliance framework implementation (SOX, GDPR, HIPAA)',
        'IT governance and policy development',
        'Risk assessment and management',
        'Audit preparation and support',
        'Documentation and process mapping',
        'Training and awareness programs',
        'Compliance monitoring and reporting',
        'Remediation and improvement planning'
      ],
      pricing: '$5,000 - $40,000/project',
      delivery: '4-16 weeks',
      category: 'Compliance',
      benefits: 'Ensure 100% compliance and reduce audit preparation time by 70%',
      marketPrice: '$10,000 - $80,000/project',
      link: '/services/it-services/compliance',
      useCases: ['Regulatory Compliance', 'Audit Preparation', 'Risk Management', 'Governance'],
      technologies: ['GRC Platforms', 'Documentation Tools', 'Risk Assessment Tools', 'Compliance Monitoring']
    },
    {
      name: 'IT Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery and business continuity planning and implementation',
      icon: Shield,
      features: [
        'Business continuity planning and documentation',
        'Disaster recovery strategy development',
        'Backup and replication solutions',
        'Failover and recovery testing',
        'Emergency response procedures',
        'Communication and notification systems',
        'Recovery time and point objectives',
        'Ongoing testing and maintenance'
      ],
      pricing: '$8,000 - $60,000/project',
      delivery: '6-16 weeks',
      category: 'Disaster Recovery',
      benefits: 'Reduce recovery time by 80% and minimize business impact during outages',
      marketPrice: '$15,000 - $120,000/project',
      link: '/services/it-services/disaster-recovery',
      useCases: ['Business Continuity', 'Data Protection', 'System Recovery', 'Risk Mitigation'],
      technologies: ['Backup Solutions', 'Replication Tools', 'Cloud DR', 'Monitoring Systems']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'IT Projects Completed', value: '500+', icon: Server },
    { label: 'Average ROI', value: '250%', icon: DollarSign },
    { label: 'Client Satisfaction', value: '97%', icon: Star },
    { label: 'Project Delivery', value: 'On Time', icon: Clock }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'HIPAA compliance, telemedicine, patient data management' },
    { name: 'Finance', icon: CreditCard, description: 'Security, compliance, trading systems, risk management' },
    { name: 'Manufacturing', icon: Settings, description: 'IoT integration, supply chain, automation' },
    { name: 'Education', icon: BookOpen, description: 'Learning management, remote education, student systems' },
    { name: 'Retail', icon: ShoppingCart, description: 'E-commerce, inventory, customer analytics' },
    { name: 'Government', icon: Building, description: 'Security, compliance, citizen services, data management' }
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified IT professionals with deep industry expertise',
      icon: Users,
      details: ['Certified Engineers', 'Industry Experience', 'Continuous Training', 'Best Practices']
    },
    {
      title: 'Proven Methodologies',
      description: 'Established processes and frameworks for successful project delivery',
      icon: Target,
      details: ['Agile Development', 'ITIL Framework', 'Quality Assurance', 'Risk Management']
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring for your IT infrastructure',
      icon: Clock,
      details: ['24/7 Monitoring', 'Rapid Response', 'Proactive Maintenance', 'Expert Support']
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize IT costs while improving performance and reliability',
      icon: TrendingUp,
      details: ['Cost Analysis', 'Resource Optimization', 'Efficiency Improvements', 'ROI Tracking']
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services/it-services`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Server className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">IT Services & Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete IT solutions that modernize your infrastructure, enhance security, and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-green-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-green-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-green-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={service.link}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our IT solutions are tailored for specific industry requirements and compliance needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver comprehensive IT solutions with proven methodologies and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free IT consultation and discover how our comprehensive services can modernize your technology infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-green-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-green-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-green-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Free IT Consultation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>IT infrastructure assessment and analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Technology roadmap and strategy development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Cost optimization and efficiency recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Security and compliance evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}