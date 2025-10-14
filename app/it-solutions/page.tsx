'use client';

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
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  DocumentCheckIcon,
  LightBulbIcon,
  WifiIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "IT Infrastructure Management",
      description: "Comprehensive IT infrastructure management including servers, networks, storage, and data center operations.",
      icon: ServerIcon,
      features: [
        "Server administration and maintenance",
        "Network design and optimization",
        "Storage management and backup solutions",
        "Data center operations and monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $3,500/month",
      benefits: ["Improved uptime", "Reduced costs", "Better security"],
      useCases: ["Enterprise infrastructure", "Cloud migration", "Disaster recovery"],
      href: "/it-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity services to protect your business from threats and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment and auditing",
        "Threat detection and response",
        "Compliance management (SOX, GDPR, HIPAA)",
        "Security training and awareness"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,800/month",
      benefits: ["Enhanced security", "Compliance assurance", "Risk mitigation"],
      useCases: ["Financial services", "Healthcare", "E-commerce"],
      href: "/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.",
      icon: CloudIcon,
      features: [
        "Cloud migration and optimization",
        "Multi-cloud strategy and management",
        "Container orchestration (Kubernetes)",
        "Serverless architecture implementation"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,200/month",
      benefits: ["Scalability", "Cost optimization", "High availability"],
      useCases: ["Startups", "SMBs", "Enterprise"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      icon: ChartBarIcon,
      features: [
        "Data warehouse design and implementation",
        "ETL/ELT pipeline development",
        "Business intelligence dashboards",
        "Predictive analytics and machine learning"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,200/month",
      benefits: ["Data-driven decisions", "Improved efficiency", "Competitive advantage"],
      useCases: ["Retail analytics", "Financial reporting", "Operations optimization"],
      href: "/data-analytics"
    },
    {
      title: "DevOps & CI/CD",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      icon: RocketLaunchIcon,
      features: [
        "CI/CD pipeline setup and optimization",
        "Infrastructure as Code (IaC)",
        "Containerization and orchestration",
        "Monitoring and logging solutions"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["Faster deployments", "Reduced errors", "Better collaboration"],
      useCases: ["Software development", "Mobile apps", "Web applications"],
      href: "/devops"
    },
    {
      title: "IT Support & Maintenance",
      description: "Comprehensive IT support and maintenance services to keep your systems running smoothly.",
      icon: WrenchScrewdriverIcon,
      features: [
        "24/7 technical support",
        "System monitoring and maintenance",
        "Software updates and patches",
        "Hardware procurement and management"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,800/month",
      benefits: ["Reduced downtime", "Proactive maintenance", "Cost savings"],
      useCases: ["Small businesses", "Remote teams", "Growing companies"],
      href: "/it-support"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud services, and more." />
      </Helmet>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. From infrastructure 
              management to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our IT Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-3 h-3 mr-2 text-cyan-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold mb-2">{service.price}</div>
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can help streamline your operations and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Consultation
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ITSolutionsPage;
