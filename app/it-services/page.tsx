import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  DatabaseIcon,
  WifiIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function ITServicesPage() {
  const itServices = [
    {
      name: "IT Infrastructure Management",
      description: "Complete IT infrastructure setup, management, and optimization for modern businesses.",
      icon: ServerIcon,
      features: [
        "Server Management & Monitoring",
        "Network Security & Firewall",
        "Backup & Disaster Recovery",
        "24/7 System Monitoring",
        "Performance Optimization",
        "Hardware Maintenance",
        "Software Updates & Patches",
        "Capacity Planning"
      ],
      pricing: "Starting at $499/month",
      href: "/it-infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cloud Migration & Management",
      description: "Seamless cloud migration services with zero downtime and comprehensive cloud management.",
      icon: CloudIcon,
      features: [
        "Zero Downtime Migration",
        "Multi-cloud Strategy",
        "Cost Optimization",
        "Security & Compliance",
        "Performance Monitoring",
        "Auto-scaling Solutions",
        "Disaster Recovery",
        "Cloud Cost Management"
      ],
      pricing: "Starting at $2,999/project",
      href: "/cloud-migration-pro",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services to protect your digital assets and data.",
      icon: ShieldCheckIcon,
      features: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Vulnerability Management",
        "Incident Response",
        "Security Training",
        "Compliance Management",
        "Threat Detection",
        "Security Policy Development"
      ],
      pricing: "Starting at $1,299/month",
      href: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Database Management",
      description: "Database design, optimization, and management services for optimal performance.",
      icon: DatabaseIcon,
      features: [
        "Database Design & Architecture",
        "Performance Tuning",
        "Security Hardening",
        "Backup & Recovery",
        "Scalability Planning",
        "Data Migration",
        "Monitoring & Maintenance",
        "Query Optimization"
      ],
      pricing: "Starting at $299/month",
      href: "/database-management",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Network Solutions",
      description: "Complete network infrastructure design, implementation, and management services.",
      icon: WifiIcon,
      features: [
        "Network Design & Planning",
        "Wireless Network Setup",
        "Network Security",
        "VPN Configuration",
        "Load Balancing",
        "Network Monitoring",
        "Bandwidth Management",
        "Troubleshooting & Support"
      ],
      pricing: "Starting at $399/month",
      href: "/network-solutions",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Mobile App Development",
      description: "Custom mobile application development for iOS and Android platforms.",
      icon: DevicePhoneMobileIcon,
      features: [
        "iOS & Android Development",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Publishing",
        "Performance Optimization",
        "Security Implementation",
        "Push Notifications",
        "Analytics Integration"
      ],
      pricing: "Starting at $4,999/project",
      href: "/mobile-development",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Web Development",
      description: "Custom web application development with modern technologies and frameworks.",
      icon: CodeBracketIcon,
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "API Development",
        "Responsive Design",
        "Performance Optimization",
        "Security Implementation",
        "SEO Optimization",
        "Maintenance & Support"
      ],
      pricing: "Starting at $2,999/project",
      href: "/web-development",
      color: "from-teal-500 to-cyan-500"
    },
    {
      name: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: ChartBarIcon,
      features: [
        "Technology Strategy",
        "Digital Transformation",
        "IT Roadmap Planning",
        "Technology Assessment",
        "Vendor Selection",
        "Cost Analysis",
        "Risk Assessment",
        "Implementation Planning"
      ],
      pricing: "Starting at $199/hour",
      href: "/it-consulting",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const industrySolutions = [
    {
      name: "Healthcare IT",
      description: "HIPAA-compliant IT solutions for healthcare organizations",
      icon: BuildingOfficeIcon,
      features: ["HIPAA Compliance", "Electronic Health Records", "Telemedicine Solutions", "Data Security"]
    },
    {
      name: "Financial Services",
      description: "Secure IT infrastructure for financial institutions",
      icon: CurrencyDollarIcon,
      features: ["PCI DSS Compliance", "Fraud Detection", "Risk Management", "Secure Transactions"]
    },
    {
      name: "E-commerce",
      description: "Scalable IT solutions for online businesses",
      icon: GlobeAltIcon,
      features: ["High Availability", "Scalable Infrastructure", "Payment Processing", "Inventory Management"]
    },
    {
      name: "Manufacturing",
      description: "Industrial IT solutions for manufacturing companies",
      icon: CogIcon,
      features: ["IoT Integration", "Process Automation", "Quality Control", "Supply Chain Management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud migration, cybersecurity, and custom development. Expert IT solutions for modern businesses." />
        <meta name="keywords" content="IT services, infrastructure management, cloud migration, cybersecurity, web development, mobile development, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions to modernize your business infrastructure. 
              From cloud migration to cybersecurity, we provide expert IT services that keep your business running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free IT Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Pricing
                <CurrencyDollarIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.name}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <div className="flex items-center text-blue-400 font-semibold mb-2">
                      <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                      <span>{service.pricing}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={service.href}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-400 hover:text-white transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored IT solutions designed for specific industries and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industrySolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={solution.name} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{solution.name}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide reliable, secure, and scalable IT solutions that help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Certified IT professionals with years of experience in enterprise-level solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and support to ensure your systems run smoothly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Security and compliance are built into every solution we design and implement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of successful IT implementations and satisfied clients across industries.
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
              Let's discuss your IT needs and create a comprehensive solution that drives efficiency and growth.
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