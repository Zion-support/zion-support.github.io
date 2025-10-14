import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  LightBulbIcon,
  NetworkIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const CloudInfrastructurePage: React.FC = () => {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud.",
      icon: CloudIcon,
      features: ["Application migration", "Data migration", "Zero downtime", "Performance optimization"],
      color: "from-blue-500 to-purple-500",
      price: "Starting at $5,000/project",
      benefits: ["Reduced costs", "Improved scalability", "Enhanced security", "Better performance"],
      useCases: ["Legacy system migration", "Application modernization", "Data center migration", "Hybrid cloud setup"],
      href: "/cloud-migration"
    },
    {
      title: "Cloud Architecture",
      description: "Design and implement scalable, secure cloud architectures.",
      icon: ServerIcon,
      features: ["Architecture design", "Security implementation", "Scalability planning", "Cost optimization"],
      color: "from-green-500 to-teal-500",
      price: "Starting at $3,500/project",
      benefits: ["Scalable solutions", "Cost efficiency", "High availability", "Security compliance"],
      useCases: ["New cloud deployments", "Architecture redesign", "Security hardening", "Performance optimization"],
      href: "/cloud-architecture"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions for your cloud infrastructure.",
      icon: ShieldCheckIcon,
      features: ["Security assessment", "Compliance management", "Threat monitoring", "Incident response"],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $2,800/month",
      benefits: ["Enhanced security", "Compliance", "Risk mitigation", "Peace of mind"],
      useCases: ["Security audits", "Compliance", "Threat monitoring", "Incident response"],
      href: "/cloud-security"
    },
    {
      title: "Cloud Monitoring",
      description: "24/7 monitoring and management of your cloud infrastructure.",
      icon: EyeIcon,
      features: ["Performance monitoring", "Cost tracking", "Alert management", "Automated scaling"],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,200/month",
      benefits: ["Proactive management", "Cost optimization", "Performance optimization", "Reduced downtime"],
      useCases: ["Infrastructure monitoring", "Cost management", "Performance optimization", "Automated scaling"],
      href: "/cloud-monitoring"
    },
    {
      title: "Multi-Cloud Management",
      description: "Unified management across multiple cloud platforms.",
      icon: GlobeAltIcon,
      features: ["Multi-cloud strategy", "Unified management", "Cost optimization", "Vendor management"],
      color: "from-orange-500 to-red-500",
      price: "Starting at $4,000/month",
      benefits: ["Vendor flexibility", "Cost optimization", "Risk mitigation", "Best-of-breed solutions"],
      useCases: ["Multi-cloud strategy", "Vendor management", "Cost optimization", "Risk mitigation"],
      href: "/multi-cloud-management"
    },
    {
      title: "Cloud Optimization",
      description: "Continuous optimization of your cloud infrastructure for cost and performance.",
      icon: CogIcon,
      features: ["Cost optimization", "Performance tuning", "Resource right-sizing", "Automated scaling"],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,000/month",
      benefits: ["Cost savings", "Better performance", "Resource efficiency", "Automated optimization"],
      useCases: ["Cost reduction", "Performance improvement", "Resource optimization", "Automated scaling"],
      href: "/cloud-optimization"
    }
  ];

  const cloudProviders = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform",
    "IBM Cloud",
    "Oracle Cloud",
    "Alibaba Cloud"
  ];

  const benefits = [
    "Scalable infrastructure",
    "Cost optimization",
    "Enhanced security",
    "High availability",
    "Global reach",
    "Automated management",
    "Disaster recovery",
    "Compliance support"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture, security, and management. Expert cloud solutions for modern businesses." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, cloud security, cloud management, AWS, Azure, GCP" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Scalable, secure, and cost-effective cloud solutions
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud infrastructure services.
                From migration to management, we help you leverage the full potential of cloud computing.
              </p>
            </div>
          </div>
        </section>

        {/* Cloud Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">Professional service</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Providers We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver the best solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <span className="text-gray-300 font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Benefits of Cloud Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Why choose cloud infrastructure for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our cloud infrastructure services can transform your business
              and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;