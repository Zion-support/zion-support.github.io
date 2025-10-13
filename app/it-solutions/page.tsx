<<<<<<< HEAD
=======
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-5fc3
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
  CircleStackIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage()   {
  const itServices = [
    {
      title: "IT Infrastructure Management",
      description: "Comprehensive IT infrastructure management including servers, networks, storage, and data center operations.",
      icon: ServerIcon,
      features: [
        "Server management & monitoring",
        "Network infrastructure",
        "Storage solutions",
        "Data center operations",
        "Performance optimization",
        "Disaster recovery planning"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "24/7 monitoring", "Proactive maintenance"],
      useCases: ["Enterprise infrastructure", "Data center management", "Server optimization"],
      href: "/it-infrastructure"
    },
    {
      title: "Cloud Migration & Management",
      description: "Seamless cloud migration services and ongoing cloud infrastructure management for optimal performance.",
      icon: CloudIcon,
      features: [
        "Cloud migration planning",
        "Multi-cloud strategies",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "Backup & recovery"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $3,000/month",
      benefits: ["50% cost reduction", "Scalable infrastructure", "Enhanced security"],
      useCases: ["AWS migration", "Azure deployment", "Google Cloud setup"],
      href: "/cloud-migration"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services to protect your digital assets and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessments",
        "Threat monitoring",
        "Incident response",
        "Compliance management",
        "Security training",
        "Penetration testing"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,200/month",
      benefits: ["Zero breach guarantee", "24/7 monitoring", "SOC 2 compliance"],
      useCases: ["Security audits", "Compliance", "Threat protection"],
      href: "/cybersecurity-solutions"
    },
    {
      title: "Database Management",
      description: "Expert database administration, optimization, and management services for all major database systems.",
      icon: CircleStackIcon,
      features: [
        "Database design & optimization",
        "Performance tuning",
        "Backup & recovery",
        "Security implementation",
        "Migration services",
        "24/7 monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month",
      benefits: ["Optimized performance", "Zero data loss", "Automated backups"],
      useCases: ["MySQL optimization", "PostgreSQL management", "MongoDB administration"],
      href: "/database-management"
    },
    {
      title: "Network Security & Monitoring",
      description: "Advanced network security solutions with real-time monitoring and threat detection capabilities.",
      icon: WifiIcon,
      features: [
        "Network monitoring",
        "Firewall management",
        "Intrusion detection",
        "VPN solutions",
        "Traffic analysis",
        "Security policies"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $1,500/month",
      benefits: ["Real-time monitoring", "Threat prevention", "Network optimization"],
      useCases: ["Network security", "VPN management", "Traffic monitoring"],
      href: "/network-security"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Comprehensive IT support services with 24/7 helpdesk and technical assistance for all IT needs.",
      icon: PhoneIcon,
      features: [
        "24/7 technical support",
        "Remote assistance",
        "Hardware maintenance",
        "Software installation",
        "User training",
        "Issue resolution"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $1,200/month",
      benefits: ["24/7 availability", "Quick response", "Expert technicians"],
      useCases: ["Technical support", "Helpdesk services", "User assistance"],
      href: "/it-support"
    },
    {
      title: "Software Development",
      description: "Custom software development services for web applications, mobile apps, and enterprise solutions.",
      icon: CogIcon,
      features: [
        "Custom web applications",
        "Mobile app development",
        "API development",
        "Legacy system modernization",
        "Quality assurance",
        "Maintenance & support"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,000/month",
      benefits: ["Custom solutions", "Modern technology", "Ongoing support"],
      useCases: ["Web development", "Mobile apps", "API development"],
      href: "/software-development"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting services to align technology with business objectives and drive digital transformation.",
      icon: LightBulbIcon,
      features: [
        "IT strategy planning",
        "Technology assessment",
        "Digital transformation",
        "Process optimization",
        "Vendor management",
        "ROI analysis"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,000/month",
      benefits: ["Strategic guidance", "Cost optimization", "Technology alignment"],
      useCases: ["IT strategy", "Digital transformation", "Technology planning"],
      href: "/it-consulting"
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive data backup and disaster recovery solutions to ensure business continuity and data protection.",
      icon: DocumentTextIcon,
      features: [
        "Automated backups",
        "Disaster recovery planning",
        "Data encryption",
        "Offsite storage",
        "Recovery testing",
        "Compliance support"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $800/month",
      benefits: ["Zero data loss", "Quick recovery", "Automated backups"],
      useCases: ["Data protection", "Disaster recovery", "Compliance"],
      href: "/data-backup-recovery"
    },
    {
      title: "IT Asset Management",
      description: "Complete IT asset management services including inventory, lifecycle management, and cost optimization.",
      icon: WrenchScrewdriverIcon,
      features: [
        "Asset inventory",
        "Lifecycle management",
        "Cost tracking",
        "License management",
        "Depreciation tracking",
        "Procurement support"
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $1,000/month",
      benefits: ["Cost optimization", "Asset tracking", "License compliance"],
      useCases: ["Asset tracking", "Cost management", "License compliance"],
      href: "/it-asset-management"
    },
    {
      title: "Remote Work Solutions",
      description: "Complete remote work infrastructure including VPN, collaboration tools, and security solutions.",
      icon: UserGroupIcon,
      features: [
        "VPN setup & management",
        "Collaboration tools",
        "Security solutions",
        "Device management",
        "Training & support",
        "Performance monitoring"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $1,500/month",
      benefits: ["Secure remote access", "Productivity tools", "Seamless collaboration"],
      useCases: ["Remote work setup", "VPN management", "Collaboration tools"],
      href: "/remote-work-solutions"
    },
    {
      title: "IT Compliance & Governance",
      description: "Comprehensive IT compliance and governance services to ensure regulatory compliance and best practices.",
      icon: ShieldCheckIcon,
      features: [
        "Compliance auditing",
        "Policy development",
        "Risk assessment",
        "Regulatory reporting",
        "Training programs",
        "Documentation"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $2,800/month",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness"],
      useCases: ["SOX compliance", "GDPR compliance", "HIPAA compliance"],
      href: "/it-compliance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud services, cybersecurity, database management, and more. Expert IT services for modern businesses." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud services, cybersecurity, database management, IT support, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services to power your business success
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, our expert IT solutions 
              ensure your technology infrastructure is secure, scalable, and optimized for performance.
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
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all"
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
              Expert IT services backed by years of experience and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Certified IT professionals with years of experience in enterprise-level solutions.
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
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance with industry standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                IT solutions that grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Service Levels */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service Level Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service level that best fits your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$1,200<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Business hours support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Remote assistance</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic monitoring</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Monthly reports</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-indigo-800 p-8 rounded-xl border border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$2,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Proactive monitoring</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority response</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Weekly reports</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>On-site visits</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated team</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>White-label support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Daily reports</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Strategic consulting</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our expert IT team help you build a robust, secure, and scalable technology foundation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free IT Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
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