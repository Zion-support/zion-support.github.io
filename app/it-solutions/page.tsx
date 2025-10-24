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
        "Auto-scaling and load balancing",
        "Disaster recovery planning",
        "Cost optimization",
        "Security compliance",
        "24/7 monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "Cost savings", "Scalability"],
      useCases: ["Web applications", "Data storage", "Backup solutions"],
      href: "/cloud-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment",
        "Threat monitoring",
        "Incident response",
        "Compliance management",
        "Employee training",
        "Security audits"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,000/month",
      benefits: ["Advanced protection", "Compliance ready", "Expert support"],
      useCases: ["Data protection", "Network security", "Compliance"],
      href: "/cybersecurity"
    },
    {
      title: "Network Solutions",
      description: "Robust network infrastructure designed for performance, security, and reliability.",
      icon: GlobeAltIcon,
      features: [
        "Network design and implementation",
        "Wireless solutions",
        "VPN and remote access",
        "Network monitoring",
        "Performance optimization",
        "Troubleshooting support"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month",
      benefits: ["High performance", "Secure connections", "Reliable uptime"],
      useCases: ["Office networks", "Remote work", "Data centers"],
      href: "/network-solutions"
    },
    {
      title: "Database Management",
      description: "Expert database administration and optimization services for all major database platforms.",
      icon: DatabaseIcon,
      features: [
        "Database design and optimization",
        "Performance tuning",
        "Backup and recovery",
        "Security hardening",
        "Migration services",
        "24/7 monitoring"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,200/month",
      benefits: ["Optimized performance", "Data security", "Expert management"],
      useCases: ["Data storage", "Application databases", "Analytics"],
      href: "/database-solutions"
    },
    {
      title: "IT Support",
      description: "Comprehensive IT support services to keep your systems running smoothly and efficiently.",
      icon: CogIcon,
      features: [
        "Help desk support",
        "System maintenance",
        "Software updates",
        "Hardware support",
        "User training",
        "Proactive monitoring"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $1,500/month",
      benefits: ["Quick response", "Proactive maintenance", "Expert knowledge"],
      useCases: ["Technical support", "System maintenance", "User assistance"],
      href: "/it-support"
    },
    {
      title: "DevOps Services",
      description: "Streamline your development and deployment processes with our DevOps expertise.",
      icon: ServerIcon,
      features: [
        "CI/CD pipeline setup",
        "Container orchestration",
        "Infrastructure as Code",
        "Monitoring and logging",
        "Automated testing",
        "Deployment automation"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $3,500/month",
      benefits: ["Faster deployments", "Improved reliability", "Automated processes"],
      useCases: ["Software development", "Cloud deployment", "Process automation"],
      href: "/devops-services"
    }
  ];

  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience in enterprise IT solutions.",
      icon: <UserGroupIcon className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your systems are always running.",
      icon: <CheckCircleIcon className="w-8 h-8" />
    },
    {
      title: "Scalable Solutions",
      description: "IT solutions that grow with your business and adapt to changing needs.",
      icon: <CpuChipIcon className="w-8 h-8" />
    },
    {
      title: "Cost Effective",
      description: "Optimized solutions that deliver maximum value while minimizing costs.",
      icon: <CogIcon className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and DevOps services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services to modernize your infrastructure, enhance security, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-cyan-600 text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-cyan-400 font-semibold mb-4">
                    {service.price}
                  </div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our IT Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our IT experts help you build a robust, secure, and scalable technology foundation.
            </p>
            <button className="px-8 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center">
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;