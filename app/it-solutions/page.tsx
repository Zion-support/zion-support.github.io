'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  WrenchScrewdriverIcon,
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
  ComputerDesktopIcon,
  CpuChipIcon,
  WifiIcon,
  DatabaseIcon,
  DocumentTextIcon,
  KeyIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const itServices = [
    {
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure management including servers, networks, storage, and data centers with 24/7 monitoring and support.",
      icon: ServerIcon,
      features: [
        "Server Management & Maintenance",
        "Network Infrastructure Setup",
        "Storage Solutions & Backup",
        "Data Center Operations",
        "Performance Monitoring",
        "Capacity Planning",
        "Disaster Recovery",
        "Hardware Lifecycle Management"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $1,200/month",
      setupFee: "$2,500",
      benefits: ["99.9% Uptime", "24/7 Monitoring", "Proactive Maintenance"],
      useCases: ["Enterprise Infrastructure", "Data Centers", "Server Farms"],
      href: "/infrastructure-management"
    },
    {
      title: "Cloud Migration & Management",
      description: "Seamless cloud migration services with ongoing management, optimization, and cost control for AWS, Azure, and Google Cloud.",
      icon: CloudIcon,
      features: [
        "Cloud Strategy Planning",
        "Migration Assessment",
        "Data Migration Services",
        "Cloud Architecture Design",
        "Cost Optimization",
        "Security Implementation",
        "Multi-cloud Management",
        "Cloud Monitoring & Support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,500/month",
      setupFee: "$3,000",
      benefits: ["50% Cost Reduction", "Enhanced Security", "Scalable Infrastructure"],
      useCases: ["AWS Migration", "Azure Setup", "Google Cloud", "Hybrid Cloud"],
      href: "/cloud-migration"
    },
    {
      title: "Network Security",
      description: "Advanced network security solutions including firewalls, intrusion detection, VPN setup, and security monitoring.",
      icon: ShieldCheckIcon,
      features: [
        "Firewall Configuration",
        "Intrusion Detection Systems",
        "VPN Setup & Management",
        "Network Segmentation",
        "Security Auditing",
        "Threat Monitoring",
        "Access Control",
        "Security Training"
      ],
      color: "from-red-500 to-rose-500",
      price: "Starting at $800/month",
      setupFee: "$1,500",
      benefits: ["Enhanced Security", "Threat Prevention", "Compliance Ready"],
      useCases: ["Enterprise Networks", "Remote Work", "Branch Offices"],
      href: "/network-security"
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive data backup and disaster recovery solutions ensuring business continuity and data protection.",
      icon: DatabaseIcon,
      features: [
        "Automated Backup Systems",
        "Disaster Recovery Planning",
        "Data Replication",
        "Backup Testing",
        "Recovery Time Optimization",
        "Cloud Backup Solutions",
        "Compliance Backup",
        "24/7 Monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $600/month",
      setupFee: "$1,200",
      benefits: ["Zero Data Loss", "Fast Recovery", "Automated Backups"],
      useCases: ["Critical Data", "Compliance Requirements", "Business Continuity"],
      href: "/data-backup-recovery"
    },
    {
      title: "System Integration",
      description: "Seamless integration of disparate systems, applications, and platforms to create unified, efficient workflows.",
      icon: CogIcon,
      features: [
        "API Integration",
        "Legacy System Integration",
        "Database Integration",
        "Third-party Integrations",
        "Custom Integration Development",
        "Data Synchronization",
        "Workflow Automation",
        "Integration Testing"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,000/month",
      setupFee: "$2,000",
      benefits: ["Unified Systems", "Improved Efficiency", "Reduced Manual Work"],
      useCases: ["ERP Integration", "CRM Systems", "E-commerce Platforms"],
      href: "/system-integration"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting services to help businesses make informed technology decisions and optimize their IT investments.",
      icon: ChartBarIcon,
      features: [
        "Technology Assessment",
        "IT Strategy Development",
        "Vendor Selection",
        "Cost-Benefit Analysis",
        "Technology Roadmapping",
        "Digital Transformation",
        "Compliance Consulting",
        "Change Management"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $150/hour",
      setupFee: "N/A",
      benefits: ["Strategic Guidance", "Cost Optimization", "Risk Mitigation"],
      useCases: ["Technology Planning", "Digital Transformation", "IT Audits"],
      href: "/it-consulting"
    },
    {
      title: "Managed IT Services",
      description: "Comprehensive managed IT services including helpdesk support, system maintenance, and proactive IT management.",
      icon: UserGroupIcon,
      features: [
        "24/7 Helpdesk Support",
        "Proactive Monitoring",
        "System Maintenance",
        "Software Updates",
        "Security Management",
        "Performance Optimization",
        "User Training",
        "IT Documentation"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,800/month",
      setupFee: "$2,500",
      benefits: ["Reduced Downtime", "Lower IT Costs", "Expert Support"],
      useCases: ["Small Businesses", "Medium Enterprises", "Remote Teams"],
      href: "/managed-it-services"
    },
    {
      title: "Technical Support",
      description: "Expert technical support services for hardware, software, and network issues with rapid response times.",
      icon: WrenchScrewdriverIcon,
      features: [
        "Hardware Troubleshooting",
        "Software Support",
        "Network Diagnostics",
        "Remote Support",
        "On-site Support",
        "Issue Resolution",
        "Preventive Maintenance",
        "User Training"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $100/hour",
      setupFee: "N/A",
      benefits: ["Fast Resolution", "Expert Knowledge", "Proactive Support"],
      useCases: ["Hardware Issues", "Software Problems", "Network Troubles"],
      href: "/technical-support"
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive cybersecurity services including vulnerability assessments, penetration testing, and security implementation.",
      icon: ExclamationTriangleIcon,
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Threat Detection",
        "Incident Response",
        "Security Training",
        "Compliance Management",
        "Security Monitoring"
      ],
      color: "from-red-600 to-red-500",
      price: "Starting at $2,000/month",
      setupFee: "$3,500",
      benefits: ["Enhanced Security", "Compliance Ready", "Threat Prevention"],
      useCases: ["Security Audits", "Compliance", "Threat Management"],
      href: "/cybersecurity-services"
    },
    {
      title: "Digital Workspace Solutions",
      description: "Modern digital workspace solutions including remote work tools, collaboration platforms, and productivity optimization.",
      icon: ComputerDesktopIcon,
      features: [
        "Remote Work Setup",
        "Collaboration Tools",
        "Productivity Software",
        "Device Management",
        "Virtual Desktops",
        "Mobile Device Management",
        "User Experience Optimization",
        "Training & Support"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $1,400/month",
      setupFee: "$2,200",
      benefits: ["Improved Productivity", "Better Collaboration", "Enhanced Security"],
      useCases: ["Remote Teams", "Hybrid Work", "Digital Transformation"],
      href: "/digital-workspace"
    },
    {
      title: "IT Asset Management",
      description: "Comprehensive IT asset management including inventory tracking, lifecycle management, and cost optimization.",
      icon: KeyIcon,
      features: [
        "Asset Inventory",
        "Lifecycle Management",
        "License Management",
        "Cost Tracking",
        "Depreciation Analysis",
        "Asset Disposal",
        "Compliance Reporting",
        "Vendor Management"
      ],
      color: "from-amber-500 to-orange-500",
      price: "Starting at $800/month",
      setupFee: "$1,500",
      benefits: ["Cost Optimization", "Compliance Ready", "Better Visibility"],
      useCases: ["Asset Tracking", "License Management", "Cost Control"],
      href: "/it-asset-management"
    },
    {
      title: "Network Infrastructure",
      description: "Complete network infrastructure design, implementation, and management for wired and wireless networks.",
      icon: WifiIcon,
      features: [
        "Network Design",
        "Wireless Solutions",
        "Network Security",
        "Performance Optimization",
        "Network Monitoring",
        "Bandwidth Management",
        "Quality of Service",
        "Network Documentation"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $1,600/month",
      setupFee: "$3,200",
      benefits: ["High Performance", "Reliable Connectivity", "Scalable Design"],
      useCases: ["Office Networks", "Data Centers", "Remote Locations"],
      href: "/network-infrastructure"
    }
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, network security, data backup, system integration, and managed IT services. Transform your business with expert IT support." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, network security, data backup, system integration, managed IT services, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services to power your business with reliable, secure, and scalable technology
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From infrastructure management to cloud migration, our expert IT solutions help businesses 
              optimize their technology investments, enhance security, and drive operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
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
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
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
                    {service.setupFee !== "N/A" && (
                      <span className="text-gray-400 text-sm ml-2">+ {service.setupFee} setup</span>
                    )}
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
                  
                  {/* Features */}
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
                      className="flex-1 inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
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
              Built with enterprise-grade reliability and designed for modern business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Grade</h3>
              <p className="text-gray-300">
                Enterprise-grade solutions designed for reliability, scalability, and performance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support and monitoring to ensure your systems run smoothly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Security-first approach with comprehensive protection and compliance management.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-300">
                Tailored IT solutions designed specifically for your business requirements.
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
              A proven methodology for successful IT implementation and deployment
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
              <p className="text-gray-300">
                We assess your current IT infrastructure and develop a comprehensive implementation plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design & Architecture</h3>
              <p className="text-gray-300">
                We design the optimal IT architecture and select the best technologies for your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
              <p className="text-gray-300">
                Our expert team implements the solution with minimal disruption to your business.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT solutions can optimize your technology and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
              >
                Get Free IT Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2"
              >
                Schedule IT Demo
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