import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CloudIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      title: "SaaS Development",
      description: "Custom SaaS applications built with modern technologies and scalable architecture.",
      icon: RocketLaunchIcon,
      features: [
        "Custom SaaS development",
        "Multi-tenant architecture",
        "API development",
        "User management",
        "Subscription billing",
        "Analytics integration"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000/month"
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices solutions that grow with your business needs.",
      icon: CogIcon,
      features: [
        "Microservices design",
        "Service orchestration",
        "API gateway setup",
        "Container deployment",
        "Service monitoring",
        "Load balancing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,500/month"
    },
    {
      title: "Cloud Infrastructure",
      description: "Robust cloud infrastructure solutions for scalable SaaS applications.",
      icon: CloudIcon,
      features: [
        "Cloud architecture design",
        "Auto-scaling setup",
        "Database optimization",
        "CDN implementation",
        "Security configuration",
        "Cost optimization"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,800/month"
    },
    {
      title: "Analytics & Monitoring",
      description: "Comprehensive analytics and monitoring solutions for your SaaS platform.",
      icon: ChartBarIcon,
      features: [
        "User analytics",
        "Performance monitoring",
        "Business intelligence",
        "Custom dashboards",
        "Alert systems",
        "Reporting tools"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,500/month"
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions to protect your SaaS platform.",
      icon: ShieldCheckIcon,
      features: [
        "Security audit",
        "Compliance management",
        "Data encryption",
        "Access control",
        "Vulnerability testing",
        "Security monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,200/month"
    },
    {
      title: "Payment Integration",
      description: "Seamless payment processing and subscription management solutions.",
      icon: CurrencyDollarIcon,
      features: [
        "Payment gateway integration",
        "Subscription management",
        "Billing automation",
        "Tax calculation",
        "Invoice generation",
        "Revenue analytics"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,800/month"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions including development, architecture, cloud infrastructure, and analytics services." />
        <meta name="keywords" content="micro SaaS, SaaS development, microservices, cloud infrastructure, analytics, subscription management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build, scale, and optimize your micro SaaS platform with our expert solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From custom SaaS development to microservices architecture, we help you create 
              scalable, secure, and profitable micro SaaS applications that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/micro-saas-solutions#services"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
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
              <h2 className="text-4xl font-bold text-white mb-6">Our Micro SaaS Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to build and scale your micro SaaS platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-purple-400 font-semibold">{service.price}</p>
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
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Partner with us to build a successful micro SaaS platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Development</h3>
                <p className="text-gray-300">
                  Fast-track your micro SaaS development with our proven methodologies and tools.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-gray-300">
                  Built to scale with your business growth and user demand.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  Bank-level security to protect your users' data and your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Micro SaaS Platform?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our experts help you create a successful micro SaaS application that generates recurring revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/micro-saas-solutions#services"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;
