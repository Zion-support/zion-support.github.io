'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WifiIcon,
  CircleStackIcon,
  BuildingOfficeIcon,
  SparklesIcon,
  PlayIcon,
  BeakerIcon,
  CommandLineIcon,
  CircleStackIcon,
  PresentationChartLineIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  KeyIcon,
  AcademicCapIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  HeartIcon,
  BoltIcon,
  FireIcon,
  PuzzlePieceIcon,
  CubeIcon,
  Squares2X2Icon,
  ChartPieIcon,
  TruckIcon,
  HomeIcon,
  SignalIcon,
  MicrophoneIcon,
  CameraIcon,
  DocumentIcon,
  LanguageIcon,
  ScaleIcon,
  CpuChipIcon as AIIcon,
  ChartBarIcon as AnalyticsIcon,
  CogIcon as AutomationIcon,
  LightBulbIcon as InnovationIcon,
  BeakerIcon as ResearchIcon,
  CommandLineIcon as DevIcon,
  CircleStackIcon as DataIcon,
  PresentationChartLineIcon as ReportingIcon,
  ChatBubbleLeftRightIcon as CommunicationIcon,
  EyeIcon as MonitoringIcon,
  KeyIcon as AccessIcon,
  ServerIcon as InfrastructureIcon,
  WrenchScrewdriverIcon as MaintenanceIcon,
  AcademicCapIcon as EducationIcon,
  PaintBrushIcon as DesignIcon,
  CodeBracketIcon as CodeIcon,
  MagnifyingGlassIcon as SearchIcon,
  ClipboardDocumentListIcon as ManagementIcon,
  BanknotesIcon as FinanceIcon,
  ShoppingCartIcon as EcommerceIcon,
  BuildingOfficeIcon as BusinessIcon,
  HeartIcon as HealthIcon,
  SparklesIcon as MagicIcon,
  BoltIcon as PowerIcon,
  FireIcon as HotIcon,
  PuzzlePieceIcon as IntegrationIcon,
  RocketLaunchIcon as LaunchIcon,
  CubeIcon as BlockIcon,
  Squares2X2Icon as GridIcon,
  ChartPieIcon as PieChartIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "IT Infrastructure Management Pro",
      description: "Comprehensive IT infrastructure management including servers, networks, storage, and data center operations with 24/7 monitoring and optimization.",
      icon: InfrastructureIcon,
      features: [
        "Server management & monitoring",
        "Network infrastructure design",
        "Storage solutions & optimization",
        "Data center operations",
        "Performance optimization",
        "Disaster recovery planning",
        "Capacity planning",
        "Hardware lifecycle management",
        "Virtualization services",
        "Backup & recovery solutions"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,999/month",
      category: "Infrastructure",
      marketPrice: "$4,999-8,999/month",
      benefits: ["99.9% uptime SLA", "24/7 monitoring", "Proactive maintenance", "Reduced downtime by 80%"],
      useCases: ["Enterprise infrastructure", "Data center management", "Server optimization", "Cloud migration"],
      href: "/it-infrastructure-pro"
    },
    {
      title: "Cloud Migration & Management Pro",
      description: "Seamless cloud migration services and ongoing cloud infrastructure management for optimal performance, security, and cost efficiency.",
      icon: CloudIcon,
      features: [
        "Cloud strategy planning",
        "Migration execution & testing",
        "Multi-cloud management",
        "Cost optimization & monitoring",
        "Security implementation",
        "Performance monitoring",
        "Compliance management",
        "Disaster recovery",
        "Auto-scaling solutions",
        "Cloud governance"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $3,499/month",
      category: "Cloud Services",
      marketPrice: "$5,999-12,999/month",
      benefits: ["Reduced costs by 40%", "Improved scalability", "Enhanced security", "Faster deployment"],
      useCases: ["AWS migration", "Azure deployment", "Multi-cloud strategy", "Hybrid cloud solutions"],
      href: "/cloud-migration-pro"
    },
    {
      title: "Network Security & Monitoring Pro",
      description: "Advanced network security solutions with 24/7 monitoring, threat detection, and automated response capabilities.",
      icon: SecurityIcon,
      features: [
        "Firewall management & optimization",
        "Intrusion detection & prevention",
        "VPN solutions & management",
        "Security audits & assessments",
        "Threat monitoring & analysis",
        "Incident response automation",
        "Compliance monitoring",
        "Security training",
        "Vulnerability management",
        "Security reporting"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,199/month",
      category: "Cybersecurity",
      marketPrice: "$3,999-7,999/month",
      benefits: ["Enhanced security posture", "Threat prevention", "Compliance assurance", "Reduced security incidents"],
      useCases: ["Network protection", "Security compliance", "Threat management", "Incident response"],
      href: "/network-security-pro"
    },
    {
      title: "Database Management & Optimization Pro",
      description: "Professional database administration, optimization, and maintenance services for all major database systems with performance tuning.",
      icon: DataIcon,
      features: [
        "Database design & optimization",
        "Performance tuning & monitoring",
        "Backup & recovery solutions",
        "Security hardening",
        "Migration services",
        "24/7 monitoring & support",
        "Capacity planning",
        "Query optimization",
        "Index management",
        "Compliance reporting"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,699/month",
      category: "Database Services",
      marketPrice: "$4,499-8,999/month",
      benefits: ["Improved performance by 60%", "Data security", "Reduced downtime", "Optimized costs"],
      useCases: ["Database optimization", "Migration projects", "Performance tuning", "Data management"],
      href: "/database-management-pro"
    },
    {
      title: "IT Support & Helpdesk Pro",
      description: "Comprehensive IT support services with dedicated helpdesk, technical assistance, and proactive maintenance for your team.",
      icon: MaintenanceIcon,
      features: [
        "24/7 technical support",
        "Remote assistance & troubleshooting",
        "Hardware maintenance & repair",
        "Software installation & updates",
        "User training & onboarding",
        "Issue resolution & tracking",
        "Asset management",
        "License management",
        "Change management",
        "Knowledge base management"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,899/month",
      category: "Support Services",
      marketPrice: "$2,999-5,999/month",
      benefits: ["Quick resolution", "Expert support", "Reduced downtime", "Improved productivity"],
      useCases: ["Technical support", "Helpdesk services", "User assistance", "IT operations"],
      href: "/it-support-pro"
    },
    {
      title: "IT Compliance & Governance Pro",
      description: "Comprehensive IT compliance management ensuring adherence to industry standards and regulations with automated monitoring.",
      icon: ManagementIcon,
      features: [
        "Compliance assessment & auditing",
        "Policy development & management",
        "Audit preparation & support",
        "Risk management & mitigation",
        "Documentation & reporting",
        "Training programs",
        "Regulatory monitoring",
        "Control testing",
        "Remediation planning",
        "Continuous monitoring"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $3,299/month",
      category: "Compliance",
      marketPrice: "$5,499-9,999/month",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness", "Reduced penalties"],
      useCases: ["SOX compliance", "GDPR compliance", "HIPAA compliance", "Industry standards"],
      href: "/it-compliance-pro"
    },
    {
      title: "DevOps & CI/CD Pipeline Pro",
      description: "Advanced DevOps services with continuous integration, deployment automation, and infrastructure as code solutions.",
      icon: DevIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Automated testing",
        "Deployment automation",
        "Monitoring & alerting",
        "Version control management",
        "Environment management",
        "Security scanning",
        "Performance optimization"
      ],
      color: "from-purple-500 to-violet-500",
      price: "Starting at $2,499/month",
      category: "DevOps",
      marketPrice: "$4,199-7,999/month",
      benefits: ["Faster deployments", "Reduced errors", "Improved collaboration", "Better quality"],
      useCases: ["Software development", "Release management", "Infrastructure automation", "Quality assurance"],
      href: "/devops-cicd-pro"
    },
    {
      title: "IT Consulting & Strategy Pro",
      description: "Strategic IT consulting services to align technology with business objectives and drive digital transformation.",
      icon: InnovationIcon,
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Architecture design",
        "Vendor evaluation",
        "Cost optimization",
        "Risk assessment",
        "Change management",
        "Training & development",
        "Ongoing advisory"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,999/month",
      category: "Consulting",
      marketPrice: "$3,499-6,999/month",
      benefits: ["Strategic alignment", "Cost optimization", "Risk reduction", "Competitive advantage"],
      useCases: ["IT strategy", "Digital transformation", "Technology selection", "Process improvement"],
      href: "/it-consulting-pro"
    },
    {
      title: "IT Security Audit & Assessment Pro",
      description: "Comprehensive security auditing and assessment services to identify vulnerabilities and strengthen your security posture.",
      icon: SecurityIcon,
      features: [
        "Security vulnerability assessment",
        "Penetration testing",
        "Compliance auditing",
        "Risk assessment",
        "Security policy review",
        "Incident response planning",
        "Security training",
        "Remediation planning",
        "Ongoing monitoring",
        "Certification support"
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $2,799/month",
      category: "Security Audit",
      marketPrice: "$4,999-9,999/month",
      benefits: ["Enhanced security", "Compliance assurance", "Risk mitigation", "Peace of mind"],
      useCases: ["Security assessment", "Compliance audit", "Penetration testing", "Risk management"],
      href: "/it-security-audit-pro"
    },
    {
      title: "IT Training & Certification Pro",
      description: "Comprehensive IT training programs and certification support to upskill your team and improve technical capabilities.",
      icon: EducationIcon,
      features: [
        "Custom training programs",
        "Certification preparation",
        "Hands-on workshops",
        "Online learning platforms",
        "Skill assessments",
        "Progress tracking",
        "Certification support",
        "Mentoring programs",
        "Technology updates",
        "Best practices training"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,499/month",
      category: "Training",
      marketPrice: "$2,499-4,999/month",
      benefits: ["Improved skills", "Higher productivity", "Better performance", "Career development"],
      useCases: ["Team training", "Certification prep", "Skill development", "Technology adoption"],
      href: "/it-training-pro"
    },
    {
      title: "IT Project Management Pro",
      description: "Professional IT project management services to ensure successful delivery of technology projects on time and within budget.",
      icon: ManagementIcon,
      features: [
        "Project planning & execution",
        "Resource management",
        "Timeline & milestone tracking",
        "Risk management",
        "Quality assurance",
        "Stakeholder communication",
        "Budget management",
        "Change management",
        "Documentation",
        "Post-implementation support"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,299/month",
      category: "Project Management",
      marketPrice: "$3,999-7,999/month",
      benefits: ["On-time delivery", "Budget control", "Quality assurance", "Risk mitigation"],
      useCases: ["Software implementation", "Infrastructure projects", "System upgrades", "Digital transformation"],
      href: "/it-project-management-pro"
    },
    {
      title: "IT Disaster Recovery Pro",
      description: "Comprehensive disaster recovery planning and implementation services to ensure business continuity and data protection.",
      icon: InfrastructureIcon,
      features: [
        "Disaster recovery planning",
        "Backup strategy development",
        "Recovery testing",
        "Business continuity planning",
        "Data replication",
        "Failover systems",
        "Recovery procedures",
        "Testing & validation",
        "Documentation",
        "Ongoing maintenance"
      ],
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $1,799/month",
      category: "Disaster Recovery",
      marketPrice: "$2,999-5,999/month",
      benefits: ["Business continuity", "Data protection", "Minimal downtime", "Peace of mind"],
      useCases: ["Business continuity", "Data protection", "System recovery", "Risk mitigation"],
      href: "/it-disaster-recovery-pro"
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Proven Methodologies',
    'Scalable Solutions',
    'Industry Expertise',
    'Cost Optimization',
    'Security First',
    'Proactive Monitoring',
    'Rapid Response',
    'Custom Solutions',
    'Compliance Ready'
  ];

  const stats = [
    { number: '1000+', label: 'IT Projects Completed' },
    { number: '200+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  const categories = [
    'Infrastructure',
    'Cloud Services',
    'Cybersecurity',
    'Database Services',
    'Support Services',
    'Compliance',
    'DevOps',
    'Consulting',
    'Security Audit',
    'Training',
    'Project Management',
    'Disaster Recovery'
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group | Comprehensive IT Services & Infrastructure</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, network security, database optimization, and DevOps services. Enterprise-grade IT solutions starting from $1,499/month." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, network security, database management, IT support, DevOps, IT consulting, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-50">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8">
                <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">12 Categories • 1000+ Projects</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                IT Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth with enterprise-grade reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/demo"
                  className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center">
                    Schedule Demo
                    <PlayIcon className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </span>
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <a href="tel:+13024640950" className="hover:text-white transition-colors">+1 302 464 0950</a>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">kleber@ziontechgroup.com</a>
                </div>
                <div className="flex items-center">
                  <BuildingOfficeIcon className="w-4 h-4 mr-2 text-purple-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-slate-800/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-full bg-slate-800/50 text-gray-300 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-slate-700 hover:border-purple-500"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to meet your specific business requirements and objectives with enterprise-grade reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full bg-slate-700 text-gray-300">
                      {service.category}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400 font-semibold text-lg">
                        {service.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {service.marketPrice}
                      </span>
                    </div>
                    <div className="text-xs text-green-400 font-medium">
                      Save up to 50% vs market price
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                    {service.features.slice(0, 5).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-xs text-purple-400 font-medium">
                        +{service.features.length - 5} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="space-y-3">
                    <div className="text-xs text-gray-500">
                      <strong>Key Benefits:</strong> {service.benefits.slice(0, 2).join(' • ')}
                    </div>
                    <div className="flex gap-2">
                      <Link
                        to={service.href}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 border border-purple-500 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT solutions are built on industry best practices and cutting-edge technology to ensure optimal performance and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 group">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your IT requirements and create a comprehensive solution that drives efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;