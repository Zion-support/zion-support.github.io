'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ServerIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon,
  BeakerIcon,
  CommandLineIcon,
  DatabaseIcon,
  LockClosedIcon,
  KeyIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  CheckBadgeIcon,
  TrophyIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Solutions",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, system integration, and digital transformation",
    "serviceType": "Information Technology Services",
    "areaServed": "Worldwide"
  };

  const itServices = [
    {
      title: "Cloud Infrastructure",
      description: "Comprehensive cloud solutions including migration, optimization, and management of cloud environments. Scale your business with reliable, secure, and cost-effective cloud infrastructure.",
      icon: CloudIcon,
      price: "$3,000/month",
      features: [
        "Cloud migration strategy",
        "Infrastructure optimization",
        "Cost management",
        "Security compliance",
        "Disaster recovery",
        "Auto-scaling",
        "Multi-cloud management",
        "24/7 monitoring"
      ],
      benefits: [
        "50% cost reduction",
        "99.9% uptime",
        "Scalable infrastructure",
        "Enhanced security"
      ],
      useCases: [
        "Application hosting",
        "Data storage",
        "Backup solutions",
        "Development environments"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and incident response. Protect your business with comprehensive cybersecurity solutions.",
      icon: ShieldCheckIcon,
      price: "$4,000/month",
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Incident response",
        "Security training",
        "Penetration testing",
        "Compliance auditing",
        "Security monitoring",
        "Risk management"
      ],
      benefits: [
        "Zero breaches",
        "24/7 monitoring",
        "Compliance ready",
        "Reduced risk"
      ],
      useCases: [
        "Network security",
        "Data protection",
        "Compliance",
        "Threat prevention"
      ],
      technologies: ["SIEM", "Firewall", "IDS/IPS", "VPN", "MFA", "Encryption"],
      href: "/cybersecurity-solutions"
    },
    {
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications for improved efficiency and data flow. Connect your business systems for maximum productivity.",
      icon: CogIcon,
      price: "$2,500/month",
      features: [
        "API integration",
        "Data synchronization",
        "Workflow automation",
        "Legacy system modernization",
        "Real-time data flow",
        "Custom connectors",
        "Error handling",
        "Performance optimization"
      ],
      benefits: [
        "40% efficiency gain",
        "Unified data",
        "Automated workflows",
        "Reduced errors"
      ],
      useCases: [
        "ERP integration",
        "CRM connectivity",
        "Data migration",
        "Process automation"
      ],
      technologies: ["REST APIs", "GraphQL", "Webhooks", "ETL", "Message Queues", "Microservices"],
      href: "/system-integration"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize business processes and technology infrastructure. Transform your business for the digital age.",
      icon: RocketLaunchIcon,
      price: "$5,000/month",
      features: [
        "Process optimization",
        "Technology modernization",
        "Change management",
        "Training and support",
        "Digital strategy",
        "Legacy modernization",
        "User adoption",
        "ROI measurement"
      ],
      benefits: [
        "60% efficiency gain",
        "Modern infrastructure",
        "Competitive advantage",
        "Future-ready"
      ],
      useCases: [
        "Process automation",
        "Technology upgrade",
        "Digital workflows",
        "Customer experience"
      ],
      technologies: ["Cloud", "AI/ML", "Automation", "Analytics", "Mobile", "IoT"],
      href: "/digital-transformation"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and management of robust network infrastructure for optimal performance and security. Build a foundation for digital success.",
      icon: ServerIcon,
      price: "$2,200/month",
      features: [
        "Network design",
        "Wireless solutions",
        "VPN implementation",
        "Load balancing",
        "Network monitoring",
        "Performance optimization",
        "Security hardening",
        "Disaster recovery"
      ],
      benefits: [
        "High performance",
        "Secure connectivity",
        "Scalable design",
        "Reliable operation"
      ],
      useCases: [
        "Office networks",
        "Remote work",
        "Data centers",
        "Branch connectivity"
      ],
      technologies: ["Cisco", "Juniper", "Fortinet", "Aruba", "SD-WAN", "5G"],
      href: "/network-infrastructure"
    },
    {
      title: "Data Management",
      description: "Comprehensive data management solutions including storage, backup, analytics, and governance. Turn your data into a strategic asset.",
      icon: DatabaseIcon,
      price: "$2,800/month",
      features: [
        "Data storage solutions",
        "Backup and recovery",
        "Data analytics",
        "Data governance",
        "Data quality",
        "Data security",
        "Compliance management",
        "Performance tuning"
      ],
      benefits: [
        "Data security",
        "Improved performance",
        "Compliance ready",
        "Better insights"
      ],
      useCases: [
        "Data warehousing",
        "Business intelligence",
        "Compliance",
        "Data migration"
      ],
      technologies: ["SQL Server", "Oracle", "MongoDB", "PostgreSQL", "Hadoop", "Spark"],
      href: "/data-management"
    },
    {
      title: "IT Support & Helpdesk",
      description: "24/7 IT support and helpdesk services to keep your business running smoothly. Professional support when you need it most.",
      icon: UserGroupIcon,
      price: "$1,500/month",
      features: [
        "24/7 support",
        "Remote assistance",
        "Ticket management",
        "Knowledge base",
        "User training",
        "System maintenance",
        "Performance monitoring",
        "Proactive support"
      ],
      benefits: [
        "24/7 availability",
        "Fast resolution",
        "Reduced downtime",
        "User satisfaction"
      ],
      useCases: [
        "Technical support",
        "System maintenance",
        "User assistance",
        "Problem resolution"
      ],
      technologies: ["ServiceNow", "Jira", "Remote Desktop", "Monitoring Tools", "Ticketing Systems"],
      href: "/it-support"
    },
    {
      title: "Software Development",
      description: "Custom software development services for web applications, mobile apps, and enterprise solutions. Build the software your business needs.",
      icon: CodeBracketIcon,
      price: "$3,500/month",
      features: [
        "Custom development",
        "Web applications",
        "Mobile apps",
        "API development",
        "Database design",
        "Testing and QA",
        "Deployment",
        "Maintenance"
      ],
      benefits: [
        "Custom solutions",
        "Modern technology",
        "Scalable architecture",
        "Quality assurance"
      ],
      useCases: [
        "Business applications",
        "E-commerce platforms",
        "Mobile solutions",
        "Integration tools"
      ],
      technologies: ["React", "Node.js", "Python", "Java", "C#", "Swift", "Kotlin"],
      href: "/software-development"
    }
  ];

  const pricingTiers = [
    {
      name: "Basic IT",
      price: "$1,500",
      period: "per month",
      description: "Perfect for small businesses with basic IT needs",
      features: [
        "1 IT service",
        "Basic support",
        "Email support",
        "Standard monitoring",
        "Up to 10 users",
        "Basic security"
      ],
      popular: false
    },
    {
      name: "Professional IT",
      price: "$3,000",
      period: "per month",
      description: "Ideal for growing businesses with comprehensive IT requirements",
      features: [
        "3 IT services",
        "Priority support",
        "Advanced monitoring",
        "Security solutions",
        "Up to 50 users",
        "Advanced features",
        "Custom solutions"
      ],
      popular: true
    },
    {
      name: "Enterprise IT",
      price: "Custom",
      period: "per month",
      description: "For large organizations requiring enterprise-grade IT solutions",
      features: [
        "Unlimited services",
        "24/7 dedicated support",
        "Enterprise monitoring",
        "Advanced security",
        "Unlimited users",
        "Custom development",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, system integration, and digital transformation. IT solutions starting at $1,500/month." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, system integration, digital transformation, IT services, network infrastructure, data management" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              IT <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive Technology Services for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business with our comprehensive IT solutions including cloud infrastructure, 
              cybersecurity, system integration, and digital transformation services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Pricing
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize and secure your business infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-green-400 font-semibold text-xl mb-3">{service.price}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircleIcon className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={service.href} className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect IT plan for your business needs. All plans include 24/7 support and regular updates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                tier.popular 
                  ? 'border-green-500 ring-2 ring-green-500/20' 
                  : 'border-slate-600 hover:border-green-500'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-400 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-2">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our IT solutions can transform your business and drive efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="group bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us: +1-302-464-0950
            </Link>
            <Link 
              to="/contact" 
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover-lift flex items-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;
