import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  ServerIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with zero downtime and enhanced security.",
      icon: CloudIcon,
      features: [
        "AWS, Azure, GCP migration",
        "Zero-downtime migration",
        "Data security & compliance",
        "Cost optimization",
        "Performance monitoring",
        "24/7 support"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000/month",
      href: "/cloud-migration"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your business from cyber threats.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection & prevention",
        "Security audits",
        "Compliance management",
        "Incident response",
        "Security training",
        "Penetration testing"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,500/month",
      href: "/cybersecurity-solutions"
    },
    {
      title: "DevOps Services",
      description: "Streamline development and deployment with modern DevOps practices.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Monitoring & logging",
        "Automated testing",
        "Performance optimization"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      href: "/devops-services"
    },
    {
      title: "Infrastructure Management",
      description: "Complete infrastructure management and optimization services.",
      icon: ServerIcon,
      features: [
        "Server management",
        "Network optimization",
        "Backup & recovery",
        "Performance tuning",
        "Capacity planning",
        "Disaster recovery"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,800/month",
      href: "/infrastructure-management"
    },
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business requirements.",
      icon: ComputerDesktopIcon,
      features: [
        "Custom applications",
        "Web development",
        "Mobile apps",
        "API development",
        "Database design",
        "Quality assurance"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $6,000/month",
      href: "/software-development"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics.",
      icon: ChartBarIcon,
      features: [
        "Data visualization",
        "Business intelligence",
        "Predictive analytics",
        "Data warehousing",
        "ETL processes",
        "Reporting dashboards"
      ],
      color: "from-teal-500 to-blue-500",
      price: "Starting at $3,800/month",
      href: "/data-analytics"
    }
  ];

  const benefits = [
    "Expert IT professionals with 10+ years experience",
    "24/7 monitoring and support",
    "Scalable solutions that grow with your business",
    "Proven track record with 500+ successful projects",
    "Cutting-edge technology and best practices",
    "Cost-effective solutions with transparent pricing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for modern businesses. Cloud migration, cybersecurity, DevOps, and more." />
        <meta name="keywords" content="IT solutions, cloud migration, cybersecurity, DevOps, software development, infrastructure" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to modernize your business infrastructure, enhance security, 
            and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {itServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <div className="text-blue-400 font-bold text-lg mb-2">{service.price}</div>
              </div>
              <Link 
                to={service.href}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
              >
                Learn More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Our IT Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our IT solutions can help your business achieve operational excellence and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Start Your IT Transformation
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSolutionsPage;