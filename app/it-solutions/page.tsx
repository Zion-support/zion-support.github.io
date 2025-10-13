import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  CogIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure setup, migration, and management services for AWS, Azure, and Google Cloud platforms.",
      price: "From $199/month",
      features: [
        "Multi-cloud Strategy",
        "Infrastructure as Code",
        "Auto-scaling Solutions",
        "Cost Optimization",
        "24/7 Monitoring",
        "Disaster Recovery"
      ],
      category: "Cloud Services",
      icon: CloudIcon,
      color: "from-blue-500 to-cyan-500",
      popular: true,
      implementation: "2-4 weeks"
    },
    {
      id: 2,
      name: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services including threat assessment, security implementation, and ongoing monitoring.",
      price: "From $299/month",
      features: [
        "Security Assessment",
        "Firewall Configuration",
        "Intrusion Detection",
        "Vulnerability Scanning",
        "Security Training",
        "Incident Response"
      ],
      category: "Security",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500",
      popular: true,
      implementation: "1-3 weeks"
    },
    {
      id: 3,
      name: "Network Infrastructure",
      description: "Design, implementation, and maintenance of robust network infrastructure for optimal performance and security.",
      price: "From $149/month",
      features: [
        "Network Design & Planning",
        "Router & Switch Configuration",
        "Wireless Network Setup",
        "Network Monitoring",
        "Performance Optimization",
        "Troubleshooting Support"
      ],
      category: "Networking",
      icon: GlobeAltIcon,
      color: "from-green-500 to-emerald-500",
      popular: false,
      implementation: "1-2 weeks"
    },
    {
      id: 4,
      name: "Database Management",
      description: "Professional database design, optimization, and management services for MySQL, PostgreSQL, and NoSQL databases.",
      price: "From $179/month",
      features: [
        "Database Design",
        "Performance Optimization",
        "Backup & Recovery",
        "Data Migration",
        "Security Hardening",
        "Monitoring & Maintenance"
      ],
      category: "Database",
      icon: CircleStackIcon,
      color: "from-purple-500 to-pink-500",
      popular: true,
      implementation: "2-3 weeks"
    },
    {
      id: 5,
      name: "IT Support & Helpdesk",
      description: "24/7 IT support services with remote assistance, ticketing system, and proactive monitoring for all your IT needs.",
      price: "From $99/month",
      features: [
        "24/7 Technical Support",
        "Remote Desktop Assistance",
        "Ticket Management System",
        "Proactive Monitoring",
        "Hardware & Software Support",
        "User Training"
      ],
      category: "Support",
      icon: UserGroupIcon,
      color: "from-orange-500 to-red-500",
      popular: true,
      implementation: "1 week"
    },
    {
      id: 6,
      name: "Server Management",
      description: "Complete server administration including setup, configuration, maintenance, and optimization for Windows and Linux servers.",
      price: "From $249/month",
      features: [
        "Server Setup & Configuration",
        "Performance Monitoring",
        "Security Hardening",
        "Backup Management",
        "Patch Management",
        "Capacity Planning"
      ],
      category: "Server Management",
      icon: ServerIcon,
      color: "from-indigo-500 to-purple-500",
      popular: false,
      implementation: "1-2 weeks"
    },
    {
      id: 7,
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting to align technology with business goals, digital transformation, and technology roadmap planning.",
      price: "From $150/hour",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "IT Strategy Planning",
        "Vendor Management",
        "Technology Roadmap",
        "ROI Analysis"
      ],
      category: "Consulting",
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-500",
      popular: false,
      implementation: "Ongoing"
    },
    {
      id: 8,
      name: "Custom IT Solutions",
      description: "Bespoke IT solutions tailored to your specific business requirements and industry needs.",
      price: "Custom Pricing",
      features: [
        "Custom Development",
        "System Integration",
        "API Development",
        "Legacy System Migration",
        "Performance Optimization",
        "Ongoing Support"
      ],
      category: "Custom Solutions",
      icon: CogIcon,
      color: "from-pink-500 to-rose-500",
      popular: false,
      implementation: "4-12 weeks"
    }
  ];

  const itCapabilities = [
    {
      title: "Cloud Computing",
      description: "AWS, Azure, Google Cloud setup, migration, and optimization services",
      icon: CloudIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection and prevention",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and maintenance of robust network systems",
      icon: GlobeAltIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and management for all major platforms",
      icon: CircleStackIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Server Administration",
      description: "Complete server management and optimization services",
      icon: ServerIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "IT Support",
      description: "24/7 technical support and helpdesk services",
      icon: UserGroupIcon,
      color: "from-orange-500 to-red-500"
    }
  ];

  const technologies = [
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", 
    "Ansible", "Jenkins", "GitLab", "MySQL", "PostgreSQL", "MongoDB", 
    "Redis", "Elasticsearch", "Linux", "Windows Server", "Cisco", 
    "Fortinet", "Palo Alto", "Splunk", "Nagios", "Zabbix"
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and database services for modern businesses." />
        <meta name="keywords" content="IT solutions, cloud computing, cybersecurity, network infrastructure, database management, server administration, IT support" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive Technology Infrastructure Services
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our expert IT team provides comprehensive technology solutions 
              that keep your business running smoothly, securely, and efficiently. Trust us to handle your IT needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get IT Consultation
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View IT Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT expertise across all major technology domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 rounded-lg px-6 py-3 text-gray-300 hover:text-white hover:border-purple-500 transition-all duration-300">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to keep your technology running smoothly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="w-5 h-5 text-green-400" />
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm">{service.implementation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to={`/demo?service=${service.id}`} 
                      className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our IT experts bring years of experience and cutting-edge knowledge to solve your technology challenges
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Certified IT professionals with 10+ years of industry experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support for all your IT infrastructure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">99.9% uptime guarantee and 50% cost reduction for our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT solutions can improve your technology infrastructure and business operations
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get IT Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}