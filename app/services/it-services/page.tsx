import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  GitBranch, 
  Lock, 
  Database, 
  Layers, 
  Activity, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Server,
  Shield,
  Network,
  Settings,
  Monitor,
  Code,
  Building,
  Users,
  Globe,
  Award,
  Rocket,
  TrendingUp,
  AlertTriangle,
  CheckSquare,
  PieChart,
  Cpu,
  HardDrive,
  Wifi,
  Key,
  Eye,
  BarChart3,
  FileText,
  Smartphone,
  Laptop
} from 'lucide-react';

export default function ITServicesPage() {
  const title = 'IT Services & Solutions — Zion Tech Group';
  const description = 'Enterprise-grade IT services including cloud migration, DevOps, cybersecurity, data engineering, platform engineering, and observability. Modern architecture with proven results.';

  const itServices = [
    {
      name: 'Cloud Migration & Architecture',
      description: 'Complete cloud transformation with modern architecture, best practices, and cost optimization',
      icon: Cloud,
      features: [
        'Multi-cloud strategy and architecture design',
        'Legacy system modernization and migration',
        'Container orchestration (Kubernetes, Docker)',
        'Microservices architecture implementation',
        'Performance optimization and scaling',
        'Cost optimization and monitoring',
        'Disaster recovery and backup solutions',
        'Security and compliance implementation'
      ],
      pricing: '$8,000 - $75,000/project',
      delivery: '8-20 weeks',
      category: 'Cloud Services',
      benefits: 'Reduce infrastructure costs by 40%, improve scalability and reliability',
      marketPrice: '$15,000 - $150,000/project',
      link: '/services/it-services/cloud-migration',
      useCases: ['Legacy Modernization', 'Multi-Cloud Strategy', 'Cost Optimization', 'Disaster Recovery'],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker']
    },
    {
      name: 'DevOps & CI/CD Pipeline',
      description: 'Automated deployment pipelines with monitoring, security integration, and best practices',
      icon: GitBranch,
      features: [
        'Automated CI/CD pipeline setup and optimization',
        'Infrastructure as Code (IaC) implementation',
        'Container orchestration and management',
        'Monitoring and alerting systems',
        'Security scanning and compliance automation',
        'Performance optimization and testing',
        'Blue-green and canary deployments',
        'GitOps workflow implementation'
      ],
      pricing: '$5,000 - $35,000/project',
      delivery: '4-12 weeks',
      category: 'DevOps',
      benefits: 'Deploy 5x faster, reduce deployment failures by 90%',
      marketPrice: '$10,000 - $70,000/project',
      link: '/services/it-services/devops-pipeline',
      useCases: ['Automated Deployments', 'Infrastructure Automation', 'Quality Assurance', 'Security Integration'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible', 'Prometheus']
    },
    {
      name: 'Cybersecurity & Compliance',
      description: 'Comprehensive security assessment, implementation, and compliance management',
      icon: Lock,
      features: [
        'Security assessment and penetration testing',
        'Compliance framework implementation (SOC 2, HIPAA, GDPR)',
        'Security monitoring and incident response',
        'Identity and access management (IAM)',
        'Data protection and encryption',
        'Security training and awareness programs',
        'Vulnerability management and patching',
        'Security architecture design'
      ],
      pricing: '$3,000 - $50,000/project',
      delivery: '4-16 weeks',
      category: 'Security',
      benefits: 'Achieve compliance faster, reduce security risks by 85%',
      marketPrice: '$6,000 - $100,000/project',
      link: '/services/it-services/cybersecurity',
      useCases: ['Compliance Management', 'Security Assessment', 'Incident Response', 'Risk Management'],
      technologies: ['SIEM', 'WAF', 'VPN', 'MFA', 'DLP', 'Security Frameworks']
    },
    {
      name: 'Data Engineering & Analytics',
      description: 'Modern data platform with real-time processing, analytics, and business intelligence',
      icon: Database,
      features: [
        'Data lake and warehouse design and implementation',
        'Real-time data processing and streaming',
        'ETL/ELT pipeline development and optimization',
        'Business intelligence dashboards and reporting',
        'Machine learning data preparation',
        'Data governance and quality management',
        'Data visualization and analytics',
        'Cloud data platform migration'
      ],
      pricing: '$6,000 - $45,000/project',
      delivery: '6-18 weeks',
      category: 'Data Services',
      benefits: 'Unlock data insights, improve decision-making by 60%',
      marketPrice: '$12,000 - $90,000/project',
      link: '/services/it-services/data-engineering',
      useCases: ['Data Warehousing', 'Real-time Analytics', 'Business Intelligence', 'Data Migration'],
      technologies: ['Snowflake', 'BigQuery', 'Apache Spark', 'Kafka', 'Tableau', 'Power BI']
    },
    {
      name: 'Platform Engineering',
      description: 'Internal developer platform with golden paths, self-service capabilities, and automation',
      icon: Layers,
      features: [
        'Developer portal and self-service tools',
        'Golden path templates and standards',
        'Multi-tenant infrastructure management',
        'GitOps and automated deployments',
        'Monitoring and observability platform',
        'Security and compliance automation',
        'API management and gateway',
        'Developer experience optimization'
      ],
      pricing: '$10,000 - $60,000/project',
      delivery: '8-20 weeks',
      category: 'Platform Engineering',
      benefits: 'Accelerate development by 3x, improve consistency and reliability',
      marketPrice: '$20,000 - $120,000/project',
      link: '/services/it-services/platform-engineering',
      useCases: ['Developer Productivity', 'Self-Service Infrastructure', 'Standardization', 'Automation'],
      technologies: ['Kubernetes', 'Helm', 'ArgoCD', 'Backstage', 'API Gateway', 'Service Mesh']
    },
    {
      name: 'Observability & Monitoring',
      description: 'Comprehensive monitoring solution with logs, metrics, traces, and intelligent alerting',
      icon: Activity,
      features: [
        'Unified observability platform setup',
        'Application performance monitoring (APM)',
        'Infrastructure monitoring and alerting',
        'Log aggregation and analysis',
        'Distributed tracing and debugging',
        'Intelligent alerting and incident management',
        'SLA/SLO monitoring and reporting',
        'Cost optimization and capacity planning'
      ],
      pricing: '$2,000 - $25,000/project',
      delivery: '2-8 weeks',
      category: 'Monitoring',
      benefits: 'Reduce MTTR by 70%, improve system reliability and performance',
      marketPrice: '$4,000 - $50,000/project',
      link: '/services/it-services/observability',
      useCases: ['Performance Monitoring', 'Incident Management', 'Capacity Planning', 'Cost Optimization'],
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Jaeger', 'New Relic', 'DataDog']
    },
    {
      name: 'Network Security & Management',
      description: 'Comprehensive network security, monitoring, and optimization solutions',
      icon: Network,
      features: [
        'Network architecture design and implementation',
        'Firewall configuration and management',
        'VPN and remote access solutions',
        'Network monitoring and performance optimization',
        'Intrusion detection and prevention',
        'Network segmentation and micro-segmentation',
        'Load balancing and traffic management',
        'Network automation and orchestration'
      ],
      pricing: '$4,000 - $30,000/project',
      delivery: '3-10 weeks',
      category: 'Network Services',
      benefits: 'Improve network performance by 50%, enhance security posture',
      marketPrice: '$8,000 - $60,000/project',
      link: '/services/it-services/network-security',
      useCases: ['Network Design', 'Security Implementation', 'Performance Optimization', 'Remote Access'],
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'F5', 'SD-WAN', 'Zero Trust']
    },
    {
      name: 'Database Management & Optimization',
      description: 'Database design, optimization, migration, and performance tuning services',
      icon: Database,
      features: [
        'Database architecture design and optimization',
        'Performance tuning and query optimization',
        'Database migration and modernization',
        'Backup and disaster recovery solutions',
        'Database security and compliance',
        'High availability and clustering',
        'Database monitoring and alerting',
        'Cloud database migration'
      ],
      pricing: '$3,000 - $25,000/project',
      delivery: '2-8 weeks',
      category: 'Database Services',
      benefits: 'Improve database performance by 80%, reduce costs by 30%',
      marketPrice: '$6,000 - $50,000/project',
      link: '/services/it-services/database-management',
      useCases: ['Performance Optimization', 'Migration', 'High Availability', 'Security'],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Infrastructure Projects', value: '300+', icon: Server },
    { label: 'Uptime Achieved', value: '99.9%', icon: Target },
    { label: 'Cost Savings', value: '45%', icon: DollarSign },
    { label: 'Implementation Time', value: '6 weeks', icon: Clock }
  ];

  const methodologies = [
    { 
      name: 'Agile DevOps', 
      icon: GitBranch, 
      description: 'Iterative development with continuous integration and deployment',
      benefits: ['Faster delivery', 'Better quality', 'Reduced risk', 'Improved collaboration']
    },
    { 
      name: 'Infrastructure as Code', 
      icon: Code, 
      description: 'Automated infrastructure provisioning and management',
      benefits: ['Consistency', 'Version control', 'Reproducibility', 'Scalability']
    },
    { 
      name: 'Zero Trust Security', 
      icon: Shield, 
      description: 'Security model based on never trust, always verify',
      benefits: ['Enhanced security', 'Reduced attack surface', 'Better compliance', 'Improved visibility']
    },
    { 
      name: 'Cloud-Native Architecture', 
      icon: Cloud, 
      description: 'Modern architecture designed for cloud environments',
      benefits: ['Scalability', 'Resilience', 'Cost efficiency', 'Innovation']
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
              <Cloud className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">IT Services & Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise IT Solutions
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
                Comprehensive IT solutions with modern architecture, best practices, and proven results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
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

        {/* Methodologies Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Methodologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow industry best practices and modern methodologies to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {methodologies.map((methodology, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <methodology.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{methodology.name}</h3>
                      <p className="text-gray-600">{methodology.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {methodology.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver enterprise-grade IT solutions with proven methodologies and ongoing support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise-Grade</h3>
                <p className="text-gray-600">All solutions are designed for enterprise scale with high availability and security.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">Most IT projects completed in 6-12 weeks with agile methodology and regular updates.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Average 45% cost reduction with 99.9% uptime and documented ROI improvements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free IT consultation and custom solution proposal tailored to your business needs.
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
                  <span>Infrastructure assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Architecture recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Cost optimization analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}