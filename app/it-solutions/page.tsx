import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ServerIcon,
  DatabaseIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ChartBarIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses with 99.9% uptime guarantee.",
      icon: CloudIcon,
      features: [
        "AWS, Azure, and GCP expertise",
        "Auto-scaling infrastructure",
        "Disaster recovery planning",
        "Cost optimization",
        "24/7 monitoring",
        "Security compliance"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,500/month",
      benefits: ["Scalability", "Reliability", "Cost efficiency"],
      useCases: ["Web hosting", "Data storage", "Application hosting"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessments",
        "Penetration testing",
        "Incident response",
        "Compliance management",
        "Security training",
        "Threat monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,000/month",
      benefits: ["Protection", "Compliance", "Peace of mind"],
      useCases: ["Data protection", "Regulatory compliance", "Threat prevention"],
      href: "/cybersecurity"
    },
    {
      title: "Network Solutions",
      description: "Robust network infrastructure designed for performance, security, and scalability.",
      icon: GlobeAltIcon,
      features: [
        "Network design & implementation",
        "Wireless solutions",
        "VPN setup",
        "Load balancing",
        "Network monitoring",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,200/month",
      benefits: ["Reliable connectivity", "Enhanced security", "Performance"],
      useCases: ["Office networking", "Remote work", "Data centers"],
      href: "/network-solutions"
    },
    {
      title: "Database Management",
      description: "Expert database design, optimization, and management services for all your data needs.",
      icon: DatabaseIcon,
      features: [
        "Database design & optimization",
        "Performance tuning",
        "Backup & recovery",
        "Data migration",
        "Security hardening",
        "Monitoring & maintenance"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1,800/month",
      benefits: ["Data integrity", "Performance", "Reliability"],
      useCases: ["Data storage", "Analytics", "Business intelligence"],
      href: "/database-solutions"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: LightBulbIcon,
      features: [
        "Technology assessment",
        "Strategic planning",
        "Vendor evaluation",
        "Cost analysis",
        "Implementation guidance",
        "Ongoing support"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,000/month",
      benefits: ["Expertise", "Strategy", "Cost savings"],
      useCases: ["Digital transformation", "Technology selection", "Process improvement"],
      href: "/it-consulting"
    },
    {
      title: "Data Management",
      description: "Comprehensive data management solutions for storage, processing, and analytics.",
      icon: ChartBarIcon,
      features: [
        "Data storage",
        "Data processing",
        "Analytics and reporting",
        "Data security",
        "Backup and recovery",
        "Data governance"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,000/month",
      benefits: ["Better insights", "Data security", "Compliance"],
      useCases: ["Business intelligence", "Data analytics", "Compliance"],
      href: "/data-management"
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to keep your systems running smoothly.",
      icon: <ClockIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Scalable Solutions",
      description: "IT solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Security First",
      description: "Comprehensive security measures to protect your data and systems.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />
    },
    {
      title: "Cost Effective",
      description: "Optimized solutions that deliver maximum value for your investment.",
      icon: <CurrencyDollarIcon className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network solutions, and database management." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to power your business success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end IT solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-slate-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-slate-900 mb-2">{service.price}</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference with our comprehensive IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our IT solutions can drive efficiency and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/it-solutions"
              className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;