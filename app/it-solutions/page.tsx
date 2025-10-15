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
      icon: ServerIcon,
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
      icon: CogIcon,
      features: [
        "Technology assessment",
        "Digital transformation",
        "IT strategy planning",
        "Vendor management",
        "Cost optimization",
        "Best practices guidance"
      ]
    },
    {
      title: "Managed IT Services",
      description: "Complete IT management services to keep your systems running smoothly.",
      icon: UserGroupIcon,
      features: [
        "24/7 technical support",
        "Proactive monitoring",
        "Regular maintenance",
        "Security updates",
        "Performance optimization",
        "Disaster recovery"
      ]
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support to ensure your systems are always running.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Scalable Solutions",
      description: "IT solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Cost Effective",
      description: "Optimized IT solutions that reduce costs while improving performance.",
      icon: <DatabaseIcon className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Security First",
      description: "Comprehensive security measures to protect your data and systems.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network solutions, and managed IT services for modern businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* IT Services Section */}
      <section className="py-20">
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
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-cyan-500 mr-4" />
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
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
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the difference with our comprehensive IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/it-solutions"
              className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
