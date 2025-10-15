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
      title: "Cloud Computing Solutions",
      description: "Comprehensive cloud migration, management, and optimization services for modern businesses.",
      icon: CloudIcon,
      features: [
        "Cloud migration strategy",
        "Multi-cloud management",
        "Cost optimization",
        "Security implementation",
        "Disaster recovery",
        "Performance monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month"
    },
    {
      title: "Database Management",
      description: "Expert database design, optimization, and maintenance services for optimal performance.",
      icon: DatabaseIcon,
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration",
        "Backup & recovery",
        "Security implementation",
        "Monitoring & maintenance"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month"
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment",
        "Threat detection",
        "Incident response",
        "Compliance management",
        "Security training",
        "Vulnerability management"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,200/month"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Monitoring & logging",
        "Automated testing",
        "Deployment automation"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,200/month"
    },
    {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies and best practices.",
      icon: GlobeAltIcon,
      features: [
        "Responsive design",
        "Performance optimization",
        "SEO implementation",
        "Security best practices",
        "Cross-browser compatibility",
        "Mobile optimization"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $1,500/month"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions and optimize your infrastructure.",
      icon: UserGroupIcon,
      features: [
        "Technology assessment",
        "Strategic planning",
        "Vendor evaluation",
        "Cost analysis",
        "Implementation guidance",
        "Training & support"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,200/month"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud computing, database management, cybersecurity, and DevOps services." />
        <meta name="keywords" content="IT solutions, cloud computing, database management, cybersecurity, DevOps, web development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions to power your business forward
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud computing to cybersecurity, our expert team delivers reliable, scalable, 
              and secure IT solutions that drive business growth and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/it-solutions#services"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-blue-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our IT Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us for reliable, scalable, and secure technology solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ServerIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Reliable Infrastructure</h3>
                <p className="text-gray-300">
                  Robust, scalable infrastructure solutions that ensure maximum uptime and performance.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Comprehensive security measures to protect your data and systems from threats.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CogIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock technical support to keep your systems running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/it-solutions#services"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
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
