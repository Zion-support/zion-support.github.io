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
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  ServerIcon,
  DatabaseIcon,
  NetworkIcon,
  LockClosedIcon,
  DocumentTextIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const itServices = [
    {
      title: "Cloud Infrastructure & Migration",
      description: "Complete cloud infrastructure setup, migration, and management services for AWS, Azure, and Google Cloud platforms.",
      icon: CloudIcon,
      features: [
        "Cloud architecture design",
        "Migration planning & execution",
        "Multi-cloud strategies",
        "Cost optimization",
        "Security implementation",
        "24/7 monitoring & support"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["50% cost reduction", "99.9% uptime", "Scalable infrastructure"],
      useCases: ["Enterprise migration", "Hybrid cloud setup", "Disaster recovery"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment & audit",
        "Threat detection & response",
        "Vulnerability management",
        "Compliance (SOC2, ISO27001)",
        "Security training",
        "Incident response"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $1,800/month",
      benefits: ["Zero breaches", "Compliance ready", "24/7 monitoring"],
      useCases: ["Financial services", "Healthcare", "E-commerce"],
      href: "/cybersecurity"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and management of secure, high-performance network infrastructure solutions.",
      icon: NetworkIcon,
      features: [
        "Network design & planning",
        "WAN/LAN implementation",
        "Wireless solutions",
        "Network security",
        "Performance optimization",
        "Remote access solutions"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,200/month",
      benefits: ["Enhanced performance", "Secure connectivity", "Reduced downtime"],
      useCases: ["Office networks", "Data centers", "Remote work"],
      href: "/network-infrastructure"
    },
    {
      title: "Data Center Solutions",
      description: "Complete data center services including colocation, managed hosting, and disaster recovery solutions.",
      icon: ServerIcon,
      features: [
        "Data center design",
        "Colocation services",
        "Managed hosting",
        "Disaster recovery",
        "Backup solutions",
        "Hardware management"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $3,000/month",
      benefits: ["High availability", "Secure environment", "Cost effective"],
      useCases: ["Enterprise hosting", "Disaster recovery", "Compliance"],
      href: "/data-center-solutions"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.",
      icon: Cog6ToothIcon,
      features: [
        "IT strategy development",
        "Technology assessment",
        "Vendor evaluation",
        "Cost optimization",
        "Digital transformation",
        "Change management"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $200/hour",
      benefits: ["Strategic guidance", "Cost savings", "Risk reduction"],
      useCases: ["IT planning", "Technology selection", "Digital transformation"],
      href: "/it-consulting"
    },
    {
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications to create unified, efficient workflows.",
      icon: CogIcon,
      features: [
        "API development",
        "System integration",
        "Data synchronization",
        "Workflow automation",
        "Legacy system modernization",
        "Third-party integrations"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,200/month",
      benefits: ["Unified systems", "Improved efficiency", "Reduced complexity"],
      useCases: ["ERP integration", "CRM systems", "Legacy modernization"],
      href: "/system-integration"
    },
    {
      title: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, and ongoing management.",
      icon: DatabaseIcon,
      features: [
        "Database design",
        "Performance optimization",
        "Data migration",
        "Backup & recovery",
        "Security implementation",
        "Monitoring & maintenance"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,500/month",
      benefits: ["Optimized performance", "Data security", "High availability"],
      useCases: ["Data warehousing", "Application databases", "Analytics"],
      href: "/database-management"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Comprehensive IT support services including helpdesk, technical support, and user training.",
      icon: UserGroupIcon,
      features: [
        "24/7 helpdesk support",
        "Remote technical support",
        "User training",
        "Software installation",
        "Hardware troubleshooting",
        "IT documentation"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $800/month",
      benefits: ["24/7 support", "Fast response", "User satisfaction"],
      useCases: ["End-user support", "Technical assistance", "Training"],
      href: "/it-support"
    },
    {
      title: "Software Development",
      description: "Custom software development services for web applications, mobile apps, and enterprise solutions.",
      icon: DocumentTextIcon,
      features: [
        "Custom web applications",
        "Mobile app development",
        "API development",
        "Legacy system modernization",
        "Quality assurance",
        "Maintenance & support"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $4,000/month",
      benefits: ["Custom solutions", "Scalable architecture", "Modern technology"],
      useCases: ["Business applications", "Mobile solutions", "API development"],
      href: "/software-development"
    },
    {
      title: "IT Security Audit",
      description: "Comprehensive security audits to identify vulnerabilities and ensure compliance with industry standards.",
      icon: LockClosedIcon,
      features: [
        "Security assessment",
        "Vulnerability scanning",
        "Penetration testing",
        "Compliance audit",
        "Risk assessment",
        "Remediation planning"
      ],
      color: "from-red-600 to-orange-500",
      price: "Starting at $3,500/project",
      benefits: ["Security assurance", "Compliance ready", "Risk mitigation"],
      useCases: ["Security compliance", "Risk assessment", "Audit preparation"],
      href: "/security-audit"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to protect your critical business data.",
      icon: ShieldCheckIcon,
      features: [
        "Automated backups",
        "Disaster recovery planning",
        "Data replication",
        "Recovery testing",
        "Cloud backup solutions",
        "Business continuity"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $1,000/month",
      benefits: ["Data protection", "Quick recovery", "Business continuity"],
      useCases: ["Data protection", "Disaster recovery", "Compliance"],
      href: "/backup-disaster-recovery"
    },
    {
      title: "IT Asset Management",
      description: "Complete IT asset lifecycle management including procurement, deployment, maintenance, and disposal.",
      icon: BuildingOfficeIcon,
      features: [
        "Asset inventory",
        "Lifecycle management",
        "Procurement optimization",
        "License management",
        "Maintenance scheduling",
        "Disposal planning"
      ],
      color: "from-slate-500 to-gray-500",
      price: "Starting at $1,200/month",
      benefits: ["Cost optimization", "Asset visibility", "Compliance"],
      useCases: ["Asset tracking", "License management", "Cost control"],
      href: "/it-asset-management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, data center services, and system integration. Transform your IT infrastructure with expert solutions." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, network management, data center, system integration, IT consulting, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT infrastructure and technology solutions for modern businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our IT solutions help businesses build robust, secure, and scalable technology foundations that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-3 transition-all border border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with enterprise-grade technology and designed for reliability and performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Infrastructure</h3>
              <p className="text-gray-300">
                Robust, scalable infrastructure solutions designed to handle enterprise workloads and requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Security is built into every solution with comprehensive protection and compliance features.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring, support, and maintenance to ensure optimal performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored IT solutions designed specifically for your business needs and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering successful IT solutions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
              <p className="text-gray-300">
                We analyze your current IT infrastructure and requirements to develop a comprehensive solution plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design & Architecture</h3>
              <p className="text-gray-300">
                We design a robust IT architecture that meets your current needs and future growth requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">
                Our expert team implements the solution with minimal disruption to your business operations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support & Optimization</h3>
              <p className="text-gray-300">
                We provide ongoing support, monitoring, and optimization to ensure peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT solutions can transform your technology foundation and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free IT Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}