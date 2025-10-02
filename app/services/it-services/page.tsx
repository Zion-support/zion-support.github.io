import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Cloud, 
  Shield, 
  BarChart3, 
  Users, 
  FileText, 
  Zap, 
  Monitor, 
  Search, 
  MessageSquare, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Globe,
  Lock,
  Target,
  TrendingUp,
  Settings,
  Database,
  Bot,
  Smartphone,
  Mail,
  Phone,
  Calendar,
  CreditCard,
  Headphones,
  Code,
  Layers,
  Wifi,
  Camera,
  Mic,
  MapPin,
  ShoppingCart,
  Package,
  Truck,
  Building,
  Home,
  Car,
  Plane,
  Ship,
  Server,
  Network,
  HardDrive,
  Cpu,
  MemoryStick,
  Router,
  Terminal,
  GitBranch,
  Container,
  Docker,
  Kubernetes,
  Database as DB,
  Key,
  Eye,
  AlertTriangle,
  Activity,
  PieChart,
  LineChart,
  RefreshCw,
  Download,
  Upload,
  Play,
  Pause,
  Square,
  Triangle,
  Circle,
  Hexagon
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Services & Solutions | Zion Tech Group - Enterprise IT Consulting',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, platform engineering, and infrastructure automation. Transform your IT operations.',
  keywords: 'IT consulting, cloud migration, DevOps, cybersecurity, platform engineering, infrastructure automation, IT services',
};

export default function ITServicesPage() {
  const itServices = [
    {
      id: 'platform-engineering-kubernetes',
      title: 'Platform Engineering for Kubernetes',
      subtitle: 'Golden Paths & Developer Experience',
      description: 'Build internal developer platforms with golden paths, templates, and paved roads for secure, fast delivery.',
      icon: Kubernetes,
      category: 'Platform Engineering',
      pricing: '$6,000 - $28,000/month',
      delivery: '4-10 weeks',
      features: [
        'Internal Developer Platform (IDP) setup',
        'Backstage/Score templates and catalogs',
        'Multi-tenant Kubernetes clusters with policy guardrails',
        'GitOps workflows with ArgoCD/Flux',
        'Secrets management and SSO integration',
        'SRE dashboards and runbooks',
        'Self-service provisioning and deployments',
        'Cost optimization and resource management'
      ],
      benefits: [
        '5x faster developer onboarding',
        '90% reduction in deployment errors',
        'Consistent security and compliance',
        'Improved developer productivity'
      ],
      useCases: [
        'Enterprise Kubernetes adoption',
        'Developer platform modernization',
        'Microservices architecture',
        'Cloud-native transformation'
      ],
      link: '/services/it-services/platform-engineering-kubernetes',
      popularity: 94,
      savings: '$200K+ annually'
    },
    {
      id: 'data-compliance-toolkit',
      title: 'Data Compliance Toolkit',
      subtitle: 'SOC 2, HIPAA & GDPR Automation',
      description: 'Automated compliance management with policy templates, evidence collection, and audit-ready reporting.',
      icon: Shield,
      category: 'Compliance & Security',
      pricing: '$2,500 - $14,000/month',
      delivery: '3-8 weeks',
      features: [
        'Pre-built policy packs for SOC 2, HIPAA, GDPR, ISO 27001',
        'Automated access reviews and permission audits',
        'Evidence collection and documentation workflows',
        'Continuous controls monitoring and alerting',
        'Audit-ready reports and gap analysis',
        'Integration with existing security tools',
        'Compliance training and awareness programs',
        'Risk assessment and mitigation strategies'
      ],
      benefits: [
        '80% reduction in compliance preparation time',
        'Automated evidence collection',
        'Continuous compliance monitoring',
        'Audit-ready documentation'
      ],
      useCases: [
        'SaaS company SOC 2 certification',
        'Healthcare HIPAA compliance',
        'GDPR data protection',
        'Enterprise security frameworks'
      ],
      link: '/services/it-services/data-compliance-toolkit',
      popularity: 87,
      savings: '$150K+ annually'
    },
    {
      id: 'observability-stack',
      title: 'Observability Stack',
      subtitle: 'OpenTelemetry + Grafana Platform',
      description: 'Unified logs, metrics, traces, and SLOs with cost-efficient pipelines and intelligent alerting.',
      icon: Activity,
      category: 'Monitoring & Observability',
      pricing: '$1,800 - $9,500/month',
      delivery: '2-5 weeks',
      features: [
        'OpenTelemetry auto-instrumentation and sampling',
        'SLO/SLA error budget burn rate alerts',
        'Cost controls and retention policies',
        'Incident response workflows with on-call integration',
        'Custom dashboards and visualization',
        'Log aggregation and analysis',
        'Distributed tracing and performance insights',
        'Capacity planning and forecasting'
      ],
      benefits: [
        '50% faster incident resolution',
        'Proactive issue detection',
        'Reduced monitoring costs',
        'Better system reliability'
      ],
      useCases: [
        'Microservices monitoring',
        'Application performance management',
        'Infrastructure observability',
        'SRE and DevOps automation'
      ],
      link: '/services/it-services/observability-stack',
      popularity: 91,
      savings: '$100K+ annually'
    },
    {
      id: 'cloud-migration-expert',
      title: 'Cloud Migration Expert',
      subtitle: 'Multi-Cloud Strategy & Execution',
      description: 'Complete cloud migration services with strategy, planning, execution, and optimization across AWS, Azure, and GCP.',
      icon: Cloud,
      category: 'Cloud Services',
      pricing: '$8,000 - $50,000/month',
      delivery: '8-16 weeks',
      features: [
        'Cloud strategy and architecture design',
        'Migration planning and risk assessment',
        'Data migration and synchronization',
        'Application refactoring and optimization',
        'Security and compliance implementation',
        'Performance optimization and cost management',
        'Training and knowledge transfer',
        'Ongoing support and maintenance'
      ],
      benefits: [
        '40% reduction in infrastructure costs',
        'Improved scalability and performance',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities'
      ],
      useCases: [
        'Legacy system modernization',
        'Multi-cloud strategy implementation',
        'Hybrid cloud architecture',
        'Cloud-native application development'
      ],
      link: '/services/it-services/cloud-migration-expert',
      popularity: 89,
      savings: '$300K+ annually'
    },
    {
      id: 'devops-automation-platform',
      title: 'DevOps Automation Platform',
      subtitle: 'CI/CD & Infrastructure as Code',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and deployment automation.',
      icon: GitBranch,
      category: 'DevOps & Automation',
      pricing: '$4,000 - $20,000/month',
      delivery: '6-12 weeks',
      features: [
        'CI/CD pipeline design and implementation',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Container orchestration with Kubernetes',
        'Configuration management and secrets',
        'Automated testing and quality gates',
        'Deployment strategies and rollbacks',
        'Environment management and promotion',
        'DevOps culture and practices training'
      ],
      benefits: [
        '10x faster deployment cycles',
        '99.9% deployment success rate',
        'Reduced manual errors',
        'Improved team collaboration'
      ],
      useCases: [
        'Software development acceleration',
        'Infrastructure automation',
        'Release management optimization',
        'Quality assurance automation'
      ],
      link: '/services/it-services/devops-automation-platform',
      popularity: 93,
      savings: '$180K+ annually'
    },
    {
      id: 'cybersecurity-operations',
      title: 'Cybersecurity Operations Center',
      subtitle: 'SOC-as-a-Service & Threat Detection',
      description: '24/7 security monitoring, threat detection, incident response, and security operations center services.',
      icon: Shield,
      category: 'Cybersecurity',
      pricing: '$5,000 - $25,000/month',
      delivery: '4-8 weeks',
      features: [
        '24/7 security monitoring and alerting',
        'Threat detection and response automation',
        'Vulnerability management and patching',
        'Security incident investigation and response',
        'Compliance monitoring and reporting',
        'Security awareness training programs',
        'Penetration testing and assessments',
        'Security architecture reviews'
      ],
      benefits: [
        '90% faster threat detection',
        'Reduced security incident impact',
        'Improved compliance posture',
        'Enhanced security awareness'
      ],
      useCases: [
        'Enterprise security monitoring',
        'Compliance and audit support',
        'Incident response automation',
        'Security program maturity'
      ],
      link: '/services/it-services/cybersecurity-operations',
      popularity: 88,
      savings: '$250K+ annually'
    },
    {
      id: 'data-analytics-platform',
      title: 'Data Analytics Platform',
      subtitle: 'Modern Data Stack & BI Solutions',
      description: 'End-to-end data platform with ETL pipelines, data warehousing, analytics, and business intelligence.',
      icon: BarChart3,
      category: 'Data & Analytics',
      pricing: '$3,500 - $18,000/month',
      delivery: '6-14 weeks',
      features: [
        'Data pipeline design and implementation',
        'Cloud data warehouse setup (Snowflake, BigQuery)',
        'ETL/ELT automation and orchestration',
        'Real-time analytics and streaming',
        'Business intelligence dashboards',
        'Data governance and quality management',
        'Machine learning model deployment',
        'Data visualization and reporting'
      ],
      benefits: [
        '5x faster data insights',
        'Improved decision-making capabilities',
        'Reduced data processing costs',
        'Enhanced data quality and governance'
      ],
      useCases: [
        'Business intelligence modernization',
        'Real-time analytics implementation',
        'Data-driven decision making',
        'Machine learning operations'
      ],
      link: '/services/it-services/data-analytics-platform',
      popularity: 85,
      savings: '$120K+ annually'
    },
    {
      id: 'api-management-gateway',
      title: 'API Management Gateway',
      subtitle: 'Enterprise API Strategy & Platform',
      description: 'Complete API management with gateway, security, monitoring, and developer portal for enterprise API strategy.',
      icon: Network,
      category: 'API Management',
      pricing: '$2,000 - $12,000/month',
      delivery: '3-6 weeks',
      features: [
        'API gateway setup and configuration',
        'API security and authentication',
        'Rate limiting and throttling',
        'API monitoring and analytics',
        'Developer portal and documentation',
        'API versioning and lifecycle management',
        'Integration with existing systems',
        'API monetization and billing'
      ],
      benefits: [
        '3x faster API development',
        'Improved API security and governance',
        'Better developer experience',
        'Enhanced API performance'
      ],
      useCases: [
        'Microservices API management',
        'Legacy system integration',
        'Partner and third-party APIs',
        'Internal API governance'
      ],
      link: '/services/it-services/api-management-gateway',
      popularity: 82,
      savings: '$80K+ annually'
    },
    {
      id: 'disaster-recovery-backup',
      title: 'Disaster Recovery & Backup',
      subtitle: 'Business Continuity Solutions',
      description: 'Comprehensive disaster recovery planning, backup strategies, and business continuity solutions.',
      icon: HardDrive,
      category: 'Business Continuity',
      pricing: '$1,500 - $8,000/month',
      delivery: '2-4 weeks',
      features: [
        'Disaster recovery strategy and planning',
        'Automated backup solutions and testing',
        'High availability and failover systems',
        'Recovery time and point objectives',
        'Cross-region replication and sync',
        'Backup validation and restoration testing',
        'Business continuity planning',
        'Emergency response procedures'
      ],
      benefits: [
        '99.9% uptime guarantee',
        'Minimal data loss (RPO < 1 hour)',
        'Fast recovery times (RTO < 4 hours)',
        'Reduced business disruption'
      ],
      useCases: [
        'Critical system protection',
        'Regulatory compliance requirements',
        'Business continuity planning',
        'Risk mitigation strategies'
      ],
      link: '/services/it-services/disaster-recovery-backup',
      popularity: 79,
      savings: '$200K+ annually'
    },
    {
      id: 'network-security-architecture',
      title: 'Network Security Architecture',
      subtitle: 'Zero Trust & Network Defense',
      description: 'Modern network security with zero trust architecture, micro-segmentation, and advanced threat protection.',
      icon: Lock,
      category: 'Network Security',
      pricing: '$4,500 - $22,000/month',
      delivery: '6-10 weeks',
      features: [
        'Zero trust network architecture design',
        'Network micro-segmentation',
        'Advanced threat detection and prevention',
        'Network access control (NAC)',
        'VPN and remote access solutions',
        'Network monitoring and analytics',
        'Firewall management and optimization',
        'Security policy implementation'
      ],
      benefits: [
        'Enhanced network security posture',
        'Reduced attack surface',
        'Improved compliance and governance',
        'Better threat visibility'
      ],
      useCases: [
        'Enterprise network modernization',
        'Remote work security',
        'Compliance requirements',
        'Advanced threat protection'
      ],
      link: '/services/it-services/network-security-architecture',
      popularity: 84,
      savings: '$150K+ annually'
    },
    {
      id: 'identity-access-management',
      title: 'Identity & Access Management',
      subtitle: 'IAM & Privileged Access Solutions',
      description: 'Comprehensive identity and access management with SSO, MFA, and privileged access management.',
      icon: Key,
      category: 'Identity Management',
      pricing: '$2,000 - $10,000/month',
      delivery: '3-6 weeks',
      features: [
        'Single Sign-On (SSO) implementation',
        'Multi-factor authentication (MFA)',
        'Privileged access management (PAM)',
        'Identity governance and lifecycle',
        'Access reviews and certifications',
        'Directory services integration',
        'Role-based access control (RBAC)',
        'Audit and compliance reporting'
      ],
      benefits: [
        'Enhanced security and compliance',
        'Improved user experience',
        'Reduced administrative overhead',
        'Better access governance'
      ],
      useCases: [
        'Enterprise identity management',
        'Compliance and audit requirements',
        'Privileged access security',
        'User experience optimization'
      ],
      link: '/services/it-services/identity-access-management',
      popularity: 81,
      savings: '$90K+ annually'
    },
    {
      id: 'it-service-management',
      title: 'IT Service Management',
      subtitle: 'ITIL & Service Operations',
      description: 'Complete IT service management with ITIL processes, service desk, and operational excellence.',
      icon: Settings,
      category: 'Service Management',
      pricing: '$1,800 - $9,000/month',
      delivery: '4-8 weeks',
      features: [
        'ITIL process implementation',
        'Service desk and ticketing system',
        'Incident and problem management',
        'Change and release management',
        'Configuration management database',
        'Service level agreements (SLA)',
        'Knowledge management system',
        'IT service catalog and automation'
      ],
      benefits: [
        'Improved service quality',
        'Reduced downtime and incidents',
        'Better change management',
        'Enhanced user satisfaction'
      ],
      useCases: [
        'IT operations optimization',
        'Service quality improvement',
        'Change management maturity',
        'User support enhancement'
      ],
      link: '/services/it-services/it-service-management',
      popularity: 77,
      savings: '$70K+ annually'
    }
  ];

  const categories = [
    { name: 'Platform Engineering', icon: Kubernetes, count: 1 },
    { name: 'Compliance & Security', icon: Shield, count: 2 },
    { name: 'Monitoring & Observability', icon: Activity, count: 1 },
    { name: 'Cloud Services', icon: Cloud, count: 1 },
    { name: 'DevOps & Automation', icon: GitBranch, count: 1 },
    { name: 'Cybersecurity', icon: Shield, count: 1 },
    { name: 'Data & Analytics', icon: BarChart3, count: 1 },
    { name: 'API Management', icon: Network, count: 1 },
    { name: 'Business Continuity', icon: HardDrive, count: 1 },
    { name: 'Network Security', icon: Lock, count: 1 },
    { name: 'Identity Management', icon: Key, count: 1 },
    { name: 'Service Management', icon: Settings, count: 1 }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Server className="w-4 h-4" />
                Enterprise IT Solutions
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IT Services & Solutions
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Transform Your IT Operations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services including cloud migration, DevOps, cybersecurity, platform engineering, and infrastructure automation. Modernize your IT operations with proven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-sm text-gray-600">IT Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2-16</div>
              <div className="text-sm text-gray-600">Weeks Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$70K+</div>
              <div className="text-sm text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">94%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            IT Services by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                <category.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} service{category.count !== 1 ? 's' : ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our IT Services & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{service.popularity}%</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        Pricing
                      </span>
                      <span className="font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        Delivery
                      </span>
                      <span className="font-semibold text-green-600">{service.delivery}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <TrendingUp className="w-4 h-4" />
                        Savings
                      </span>
                      <span className="font-semibold text-purple-600">{service.savings}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href={service.link}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a 
                      href={`mailto:${contactInfo.email}?subject=Interest in ${service.title}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a comprehensive IT assessment and roadmap for your digital transformation. Most projects deliver within 2-16 weeks with immediate ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}?subject=IT Services Consultation Request`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-semibold mb-2">📍 Address:</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes your IT services different?</h3>
              <p className="text-gray-600">
                Our IT services are designed for modern, cloud-native environments. We focus on automation, security, and scalability while maintaining operational excellence. All solutions include comprehensive training and ongoing support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you work with existing IT infrastructure?</h3>
              <p className="text-gray-600">
                Yes! We specialize in modernizing existing infrastructure and integrating with legacy systems. Our approach minimizes disruption while maximizing the value of your current investments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-600">
                We provide comprehensive support including 24/7 monitoring, incident response, regular maintenance, and strategic consulting. Our support includes training, documentation, and knowledge transfer to your team.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure security and compliance?</h3>
              <p className="text-gray-600">
                Security and compliance are built into every solution. We follow industry best practices, implement zero-trust architectures, and ensure compliance with SOC 2, HIPAA, GDPR, and other relevant frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}