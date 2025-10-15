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
  UserGroupIcon
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
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      icon: ShieldCheckIcon,
      features: [
        "Network security assessment",
        "Penetration testing",
        "Security monitoring",
        "Incident response",
        "Compliance management",
        "Security training"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,200/month",
      benefits: ["Enhanced security", "Compliance", "Risk mitigation"],
      useCases: ["Data protection", "Network security", "Compliance"],
      href: "/cybersecurity"
    },
    {
      title: "Database Management",
      description: "Expert database design, optimization, and management services for optimal performance.",
      icon: DatabaseIcon,
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Data migration",
        "Backup and recovery",
        "Security implementation",
        "Monitoring and maintenance"
      ],
      color: "from-green-500 to-teal-500",
      price: "Starting at $1,800/month",
      benefits: ["Performance", "Reliability", "Security"],
      useCases: ["Data management", "Performance optimization", "Migration"],
      href: "/database-solutions"
    },
    {
      title: "Network Infrastructure",
      description: "Robust network solutions designed for scalability, security, and optimal performance.",
      icon: ServerIcon,
      features: [
        "Network design and implementation",
        "Wireless solutions",
        "VPN setup and management",
        "Network monitoring",
        "Troubleshooting and support",
        "Security implementation"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1,200/month",
      benefits: ["Reliability", "Security", "Performance"],
      useCases: ["Office networking", "Remote access", "Security"],
      href: "/network-solutions"
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support services to keep your systems running smoothly and efficiently.",
      icon: CogIcon,
      features: [
        "24/7 technical support",
        "System maintenance",
        "Software updates",
        "Hardware troubleshooting",
        "User training",
        "Documentation"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $800/month",
      benefits: ["Reliability", "Expertise", "Cost efficiency"],
      useCases: ["Technical support", "System maintenance", "User assistance"],
      href: "/it-support"
    },
    {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies and best practices.",
      icon: GlobeAltIcon,
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "Content management systems",
        "API development",
        "Performance optimization",
        "SEO implementation"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,500/month",
      benefits: ["Modern design", "Performance", "SEO friendly"],
      useCases: ["Business websites", "E-commerce", "Web applications"],
      href: "/web-development"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Team Members" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, database management, and more. Expert services for modern businesses." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, database management, network solutions, IT support, web development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expert IT services to power your business with cutting-edge technology, 
              robust security, and scalable infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs and drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT environment 
            that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;