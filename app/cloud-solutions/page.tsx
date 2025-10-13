'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  WifiIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const cloudServices = [
    {
      title: "Cloud Migration & Strategy",
      description: "Seamless cloud migration services and strategic planning to optimize your cloud infrastructure.",
      icon: CloudIcon,
      features: [
        "Migration planning",
        "Cloud architecture design",
        "Data migration",
        "Application modernization",
        "Cost optimization",
        "Performance tuning"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $3,000/month",
      benefits: ["Seamless migration", "Cost reduction", "Improved performance"],
      useCases: ["AWS migration", "Azure deployment", "Google Cloud setup"],
      href: "/cloud-migration"
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure management including servers, storage, and networking.",
      icon: ServerIcon,
      features: [
        "Server management",
        "Storage optimization",
        "Network configuration",
        "Load balancing",
        "Auto-scaling",
        "Monitoring & alerting"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,500/month",
      benefits: ["Optimized performance", "Cost efficiency", "Scalability"],
      useCases: ["Infrastructure management", "Performance optimization", "Cost control"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Advanced cloud security solutions to protect your data and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessments",
        "Compliance management",
        "Access controls",
        "Data encryption",
        "Threat monitoring",
        "Incident response"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,200/month",
      benefits: ["Enhanced security", "Compliance", "Risk mitigation"],
      useCases: ["Security compliance", "Data protection", "Risk management"],
      href: "/cloud-security"
    },
    {
      title: "Cloud Analytics & Monitoring",
      description: "Advanced cloud analytics and monitoring solutions for optimal performance and insights.",
      icon: ChartBarIcon,
      features: [
        "Performance monitoring",
        "Cost analytics",
        "Usage tracking",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,800/month",
      benefits: ["Performance insights", "Cost optimization", "Predictive analytics"],
      useCases: ["Performance monitoring", "Cost analysis", "Usage optimization"],
      href: "/cloud-analytics"
    },
    {
      title: "Multi-Cloud Solutions",
      description: "Comprehensive multi-cloud strategies to leverage the best of different cloud providers.",
      icon: GlobeAltIcon,
      features: [
        "Multi-cloud strategy",
        "Provider optimization",
        "Cross-cloud integration",
        "Disaster recovery",
        "Vendor management",
        "Cost optimization"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $4,000/month",
      benefits: ["Vendor flexibility", "Risk distribution", "Cost optimization"],
      useCases: ["Multi-cloud strategy", "Vendor management", "Risk mitigation"],
      href: "/multi-cloud"
    },
    {
      title: "Cloud DevOps & Automation",
      description: "Cloud DevOps services including CI/CD, automation, and infrastructure as code.",
      icon: CogIcon,
      features: [
        "CI/CD pipelines",
        "Infrastructure as code",
        "Automated deployments",
        "Container orchestration",
        "Monitoring automation",
        "DevOps consulting"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,800/month",
      benefits: ["Faster deployments", "Automation", "Improved reliability"],
      useCases: ["DevOps automation", "CI/CD setup", "Infrastructure automation"],
      href: "/cloud-devops"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, infrastructure management, security, and analytics. Expert cloud services for modern businesses." />
        <meta name="keywords" content="cloud solutions, cloud migration, cloud infrastructure, cloud security, cloud analytics, multi-cloud, DevOps" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with comprehensive cloud solutions and expert cloud services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud migration to infrastructure management, our expert cloud team ensures 
              your business leverages the full power of cloud technology for growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cloudServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-cyan-900/30 text-cyan-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-blue-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Cloud Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert cloud services backed by years of experience and cutting-edge cloud technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CloudIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Experts</h3>
              <p className="text-gray-300">
                Certified cloud professionals with expertise across all major cloud platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock cloud support and monitoring to ensure optimal performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance with industry standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Cloud solutions that scale with your business and adapt to changing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our cloud experts help you build a robust, scalable, and secure cloud infrastructure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Cloud Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Cloud Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-cyan-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}