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
      description: "Scalable and secure cloud solutions tailored to your business needs.",
      icon: CloudIcon,
      features: [
        "Cloud migration",
        "Infrastructure as Code",
        "Auto-scaling",
        "Disaster recovery",
        "Cost optimization",
        "Security compliance"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["Scalable", "Secure", "Cost-effective"],
      useCases: ["Data storage", "Application hosting", "Backup solutions"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your business from cyber threats and data breaches.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessments",
        "Threat detection",
        "Incident response",
        "Compliance management",
        "Security training",
        "Compliance auditing"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,000/month",
      benefits: ["Zero breaches", "Compliance ready", "24/7 monitoring"],
      useCases: ["Data protection", "Network security", "Compliance"],
      href: "/cybersecurity"
    },
    {
      title: "Network Infrastructure",
      description: "Robust network solutions designed for high performance, reliability, and scalability.",
      icon: ServerIcon,
      features: [
        "Network design & implementation",
        "Wireless solutions",
        "VPN setup",
        "Load balancing",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,000/month",
      benefits: ["High performance", "Reliable connectivity", "Scalable design"],
      useCases: ["Office networks", "Remote work", "Data centers"],
      href: "/network-infrastructure"
    },
    {
      title: "Database Management",
      description: "Expert database administration and optimization services for maximum performance and reliability.",
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
      benefits: ["Optimized performance", "Data integrity", "Automated backups"],
      useCases: ["Business applications", "Data analytics", "E-commerce"],
      href: "/database-management"
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support services to keep your systems running smoothly and efficiently.",
      icon: UserGroupIcon,
      features: [
        "24/7 technical support",
        "System maintenance",
        "Software updates",
        "User training",
        "Help desk services"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $1,200/month",
      benefits: ["24/7 support", "Proactive maintenance", "Fast response"],
      useCases: ["Technical support", "System maintenance", "User assistance"],
      href: "/it-support"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure automation",
        "Container orchestration",
        "Monitoring & logging",
        "Deployment automation"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,200/month",
      benefits: ["Faster deployments", "Reduced errors", "Improved efficiency"],
      useCases: ["Software development", "Deployment automation", "Infrastructure management"],
      href: "/devops-automation"
    }
  ];

  const benefits = [
    "Expert IT professionals with years of experience",
    "24/7 support and monitoring",
    "Scalable solutions that grow with your business",
    "Cost-effective solutions tailored to your needs",
    "Latest technology and best practices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Solutions - Zion Tech Group | Comprehensive IT Services</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network management, and digital transformation services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, network management, database administration, digital transformation" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with comprehensive IT solutions and expert technology services." />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services designed to keep your business running smoothly, securely, and efficiently.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our expert IT team delivers solutions that keep your business running smoothly and securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <div className="text-blue-400 font-semibold mb-2">{service.price}</div>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our IT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT services that help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you build a robust, secure, and scalable IT environment that supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;