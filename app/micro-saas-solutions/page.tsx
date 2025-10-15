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

const MicroSAASSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "SaaS Platform Development",
      description: "Custom SaaS platforms built with modern technologies for scalability and performance.",
      icon: CloudIcon,
      features: [
        "Multi-tenant architecture",
        "User management system",
        "Subscription billing",
        "API integration",
        "Real-time analytics",
        "Mobile responsiveness"
      ]
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices solutions for complex business applications.",
      icon: ServerIcon,
      features: [
        "Service decomposition",
        "API gateway setup",
        "Load balancing",
        "Service discovery",
        "Container orchestration",
        "Monitoring & logging"
      ]
    },
    {
      title: "Database Solutions",
      description: "Optimized database design and management for SaaS applications.",
      icon: DatabaseIcon,
      features: [
        "Database design",
        "Performance optimization",
        "Data migration",
        "Backup strategies",
        "Security implementation",
        "Scalability planning"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Comprehensive security measures to protect your SaaS platform.",
      icon: ShieldCheckIcon,
      features: [
        "Authentication systems",
        "Authorization controls",
        "Data encryption",
        "Compliance management",
        "Security audits",
        "Threat monitoring"
      ]
    },
    {
      title: "DevOps & Deployment",
      description: "Automated deployment and monitoring solutions for SaaS platforms.",
      icon: CogIcon,
      features: [
        "CI/CD pipelines",
        "Container deployment",
        "Infrastructure as code",
        "Monitoring setup",
        "Log management",
        "Performance optimization"
      ]
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance for your SaaS platform.",
      icon: UserGroupIcon,
      features: [
        "24/7 technical support",
        "Regular updates",
        "Performance monitoring",
        "Bug fixes",
        "Feature enhancements",
        "User training"
      ]
    }
  ];

  const benefits = [
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business needs and user base.",
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />
    },
    {
      title: "Cost Effective",
      description: "Optimized solutions that reduce operational costs.",
      icon: <CpuChipIcon className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Fast Time to Market",
      description: "Rapid development and deployment of your SaaS solution.",
      icon: <DatabaseIcon className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Enterprise Ready",
      description: "Built with enterprise-grade security and compliance.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including platform development, microservices architecture, and cloud deployment for modern businesses." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Build scalable and efficient micro SAAS platforms with our expert solutions
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

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to build and scale your SAAS platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <solution.icon className="w-12 h-12 text-cyan-500 mr-4" />
                  <h3 className="text-2xl font-bold text-slate-900">{solution.title}</h3>
                </div>
                <p className="text-slate-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Experience the benefits of our comprehensive SAAS development approach
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
            Ready to Build Your Micro SAAS Platform?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our micro SAAS solutions can help you build and scale your platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Building Today
            </Link>
            <Link
              to="/micro-saas-solutions"
              className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASSolutionsPage;
