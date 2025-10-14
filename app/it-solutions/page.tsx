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
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.",
      icon: CloudIcon,
      features: [
        "Scalable architecture",
        "High availability",
        "Security compliance",
        "Cost optimization",
        "24/7 monitoring",
        "Disaster recovery"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,500/month",
      benefits: ["Scalability", "Reliability", "Cost efficiency"],
      useCases: ["Web hosting", "Data storage", "Application hosting"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Security monitoring",
        "Incident response",
        "Compliance management",
        "Security training"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,200/month",
      benefits: ["Enhanced security", "Risk mitigation", "Compliance"],
      useCases: ["Data protection", "Network security", "Compliance"],
      href: "/cybersecurity"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: LightBulbIcon,
      features: [
        "Technology assessment",
        "Strategic planning",
        "Vendor selection",
        "Implementation guidance",
        "Change management",
        "Training and support"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,200/month",
      benefits: ["Expert guidance", "Cost savings", "Risk reduction"],
      useCases: ["Technology planning", "Digital transformation", "System integration"],
      href: "/it-consulting"
    },
    {
      title: "Network Solutions",
      description: "Advanced networking solutions for reliable and secure connectivity.",
      icon: GlobeAltIcon,
      features: [
        "Network design",
        "Security implementation",
        "Performance optimization",
        "Monitoring and maintenance",
        "Disaster recovery",
        "Remote access"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1,800/month",
      benefits: ["Reliable connectivity", "Enhanced security", "Performance"],
      useCases: ["Office networking", "Remote work", "Data centers"],
      href: "/network-solutions"
    },
    {
      title: "Data Management",
      description: "Comprehensive data management solutions for storage, processing, and analytics.",
      icon: ChartBarIcon,
      features: [
        "Data storage",
        "Data processing",
        "Analytics and reporting",
        "Data security",
        "Backup and recovery",
        "Data governance"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,000/month",
      benefits: ["Better insights", "Data security", "Compliance"],
      useCases: ["Business intelligence", "Data analytics", "Compliance"],
      href: "/data-management"
    },
    {
      title: "IT Support",
      description: "Comprehensive IT support services to keep your systems running smoothly.",
      icon: UserGroupIcon,
      features: [
        "24/7 support",
        "Remote assistance",
        "System maintenance",
        "Software updates",
        "Hardware support",
        "User training"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,000/month",
      benefits: ["Reduced downtime", "Expert support", "Cost efficiency"],
      useCases: ["Help desk", "System maintenance", "User support"],
      href: "/it-support"
    }
  ];

  const features = [
    {
      title: "Expert Solutions",
      description: "Our team of certified professionals delivers cutting-edge IT solutions.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Solutions that grow with your business and adapt to changing needs.",
      icon: CloudIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems are always running.",
      icon: UserGroupIcon
    },
    {
      title: "Security First",
      description: "Security is built into every solution we deliver.",
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, and consulting services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, IT consulting, network solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure,
              enhance security, and drive business growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-purple-400 font-semibold">{solution.price}</p>
                </div>
                
                <Link
                  to={solution.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our IT Solutions?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT solutions can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITSolutionsPage;