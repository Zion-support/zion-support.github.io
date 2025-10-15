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
  SignalIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions to transform your business operations and drive innovation.",
      icon: CpuChipIcon,
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Automation",
        "AI Consulting"
      ],
      color: "from-purple-500 to-pink-500",
      href: "/ai-solutions"
    },
    {
      title: "IT Solutions",
      description: "Comprehensive IT solutions including cloud infrastructure, cybersecurity, and network management.",
      icon: CloudIcon,
      features: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "Network Solutions",
        "Data Management",
        "IT Support",
        "IT Consulting"
      ],
      color: "from-blue-500 to-cyan-500",
      href: "/it-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to protect your business from cyber threats and ensure data security.",
      icon: ShieldCheckIcon,
      features: [
        "Threat Detection",
        "Security Assessment",
        "Identity Management",
        "Security Training",
        "Incident Response",
        "Compliance Management"
      ],
      color: "from-red-500 to-pink-500",
      href: "/cybersecurity"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Comprehensive micro SaaS solutions designed to streamline your business operations with AI-powered tools.",
      icon: SignalIcon,
      features: [
        "AI Analytics Dashboard",
        "AI Content Generator",
        "AI Customer Support",
        "AI Project Manager",
        "AI Inventory Manager",
        "AI Expense Tracker"
      ],
      color: "from-green-500 to-emerald-500",
      href: "/micro-saas-solutions"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology infrastructure.",
      icon: RocketLaunchIcon,
      features: [
        "Process Automation",
        "Technology Integration",
        "Change Management",
        "Digital Strategy",
        "Performance Optimization",
        "Training & Support"
      ],
      color: "from-orange-500 to-red-500",
      href: "/digital-transformation"
    },
    {
      title: "5G Solutions",
      description: "Advanced 5G solutions for next-generation connectivity, IoT, and mobile applications.",
      icon: GlobeAltIcon,
      features: [
        "5G Network Infrastructure",
        "IoT Solutions",
        "Edge Computing",
        "Mobile Applications",
        "Data Analytics",
        "Smart City Solutions"
      ],
      color: "from-indigo-500 to-purple-500",
      href: "/5g-solutions"
    }
  ];

  const features = [
    "Expert Solutions",
    "24/7 Support",
    "Scalable Architecture",
    "Security First",
    "Custom Development",
    "Proven Results"
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cybersecurity, cloud infrastructure, micro SaaS, and digital transformation." />
        <meta name="keywords" content="AI services, IT services, cybersecurity, cloud solutions, micro SaaS, digital transformation, 5G solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT services designed to transform your business and drive innovation. 
              From artificial intelligence to cybersecurity, we deliver solutions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.href}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
