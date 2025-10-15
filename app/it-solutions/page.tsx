import { Phone, Database, Cloud } from 'lucide-react';
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
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
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
      ]
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
      ]
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
      ]
    },
    {
      title: "Database Management",
      description: "Expert database solutions for optimal performance, security, and reliability.",
      icon: DatabaseIcon,
      features: [
        "Database design & optimization",
        "Performance tuning",
        "Backup & recovery",
        "Data migration",
        "Security hardening",
        "Monitoring & maintenance"
      ]
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: CpuChipIcon,
      features: [
        "Technology assessment",
        "Digital transformation",
        "IT strategy planning",
        "Vendor evaluation",
        "Cost analysis",
        "Implementation guidance"
      ]
    },
    {
      title: "Server Management",
      description: "Complete server management services for optimal performance and uptime.",
      icon: ServerIcon,
      features: [
        "Server setup & configuration",
        "Performance monitoring",
        "Security updates",
        "Backup management",
        "Troubleshooting",
        "Capacity planning"
      ]
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems run smoothly.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Scalable Solutions",
      description: "IT solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs through efficient resource utilization and smart technology choices.",
      icon: <CogIcon className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Security First",
      description: "Comprehensive security measures to protect your data and systems.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and database services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Solutions That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Scale</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver reliable, secure, and scalable IT solutions that drive business success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you build a robust, secure, and scalable IT environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
            >
              Get Free Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              <PhoneIcon className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <PhoneIcon className="h-8 w-8 text-purple-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <EnvelopeIcon className="h-8 w-8 text-purple-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
              <p className="text-gray-300">info@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="h-8 w-8 text-purple-400 mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;