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
  CircleStackIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
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
        "Cloud strategy planning",
        "Migration execution",
        "Multi-cloud management",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $3,000/month",
      benefits: ["Reduced costs", "Improved scalability", "Enhanced security"],
      useCases: ["AWS migration", "Azure deployment", "Multi-cloud strategy"],
      href: "/cloud-migration"
    },
    {
      title: "Network Security & Monitoring",
      description: "Advanced network security solutions with 24/7 monitoring and threat detection capabilities.",
      icon: ShieldCheckIcon,
      features: [
        "Firewall management",
        "Intrusion detection",
        "VPN solutions",
        "Security audits",
        "Threat monitoring",
        "Incident response"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $1,800/month",
      benefits: ["Enhanced security", "Threat prevention", "Compliance assurance"],
      useCases: ["Network protection", "Security compliance", "Threat management"],
      href: "/network-security"
    },
    {
      title: "Database Management & Optimization",
      description: "Professional database administration, optimization, and maintenance services for all major database systems.",
      icon: CircleStackIcon,
      features: [
        "Database design & optimization",
        "Performance tuning",
        "Backup & recovery",
        "Security hardening",
        "Migration services",
        "24/7 monitoring"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,200/month",
      benefits: ["Improved performance", "Data security", "Reduced downtime"],
      useCases: ["Database optimization", "Migration projects", "Performance tuning"],
      href: "/database-management"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Comprehensive IT support services with dedicated helpdesk and technical assistance for your team.",
      icon: WrenchScrewdriverIcon,
      features: [
        "24/7 technical support",
        "Remote assistance",
        "Hardware maintenance",
        "Software installation",
        "User training",
        "Issue resolution"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,500/month",
      benefits: ["Quick resolution", "Expert support", "Reduced downtime"],
      useCases: ["Technical support", "Helpdesk services", "User assistance"],
      href: "/it-support"
    },
    {
      title: "IT Compliance & Governance",
      description: "Comprehensive IT compliance management ensuring adherence to industry standards and regulations.",
      icon: DocumentTextIcon,
      features: [
        "Compliance assessment",
        "Policy development",
        "Audit preparation",
        "Risk management",
        "Documentation",
        "Training programs"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $2,800/month",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness"],
      useCases: ["SOX compliance", "GDPR compliance", "HIPAA compliance"],
      href: "/it-compliance"
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Proven Methodologies',
    'Scalable Solutions',
    'Industry Expertise',
    'Cost Optimization',
    'Security First'
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, network security, and database optimization services." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, network security, database management, IT support, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                IT Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Comprehensive IT solutions designed to optimize your infrastructure, enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions tailored to meet your specific business requirements and objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
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
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{feature}</span>
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
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
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