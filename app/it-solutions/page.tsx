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
  LightBulbIcon,
  MapPinIcon,
  ServerIcon,
  WifiIcon,
  DatabaseIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  FireIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Enterprise Cloud Infrastructure",
      description: "Comprehensive cloud infrastructure solutions with multi-cloud support, auto-scaling, and enterprise-grade security.",
      icon: CloudIcon,
      features: [
        "Multi-cloud architecture (AWS, Azure, GCP)",
        "Auto-scaling & load balancing",
        "High availability & disaster recovery",
        "Enterprise security & compliance",
        "24/7 monitoring & management",
        "Cost optimization & governance",
        "Container orchestration (Kubernetes)",
        "Serverless computing solutions"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$2,999/month",
      originalPrice: "$4,999/month",
      savings: "Save $2,000/month",
      benefits: ["99.9% uptime", "50% cost reduction", "Unlimited scalability"],
      useCases: ["Web hosting", "Data storage", "Application hosting", "DevOps"],
      href: "/cloud-infrastructure",
      popular: true,
      freeTrial: "30-day free trial"
    },
    {
      title: "Advanced Cybersecurity Suite",
      description: "Comprehensive cybersecurity solutions with threat detection, incident response, and compliance management.",
      icon: ShieldCheckIcon,
      features: [
        "Advanced threat detection & prevention",
        "Real-time security monitoring",
        "Vulnerability assessment & management",
        "Incident response & forensics",
        "Compliance management (SOC2, GDPR, HIPAA)",
        "Security awareness training",
        "Penetration testing & audits",
        "Zero-trust architecture implementation"
      ],
      color: "from-red-500 to-pink-500",
      price: "$3,499/month",
      originalPrice: "$5,999/month",
      savings: "Save $2,500/month",
      benefits: ["99.9% threat detection", "24/7 protection", "Compliance guaranteed"],
      useCases: ["Data protection", "Network security", "Compliance", "Risk management"],
      href: "/cybersecurity",
      popular: true,
      freeTrial: "30-day free trial"
    },
    {
      title: "Strategic IT Consulting",
      description: "Expert IT consulting services to help you make informed technology decisions and digital transformation strategies.",
      icon: LightBulbIcon,
      features: [
        "Technology assessment & audit",
        "Digital transformation strategy",
        "IT roadmap development",
        "Vendor selection & management",
        "Implementation planning & execution",
        "Change management & training",
        "ROI analysis & optimization",
        "Technology governance"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$1,999/month",
      originalPrice: "$3,499/month",
      savings: "Save $1,500/month",
      benefits: ["Expert guidance", "Cost savings", "Risk reduction", "Strategic planning"],
      useCases: ["Technology planning", "Digital transformation", "System integration", "IT strategy"],
      href: "/it-consulting",
      freeTrial: "14-day free trial"
    },
    {
      title: "Enterprise Network Solutions",
      description: "Advanced networking solutions with SD-WAN, network security, and performance optimization for modern businesses.",
      icon: GlobeAltIcon,
      features: [
        "SD-WAN implementation & management",
        "Network security & firewalls",
        "Performance optimization & monitoring",
        "Disaster recovery & redundancy",
        "Remote access & VPN solutions",
        "Network automation & orchestration",
        "Quality of Service (QoS) management",
        "Network analytics & insights"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "$2,499/month",
      originalPrice: "$4,499/month",
      savings: "Save $2,000/month",
      benefits: ["99.9% uptime", "Enhanced security", "Performance optimization"],
      useCases: ["Office networking", "Remote work", "Data centers", "Branch connectivity"],
      href: "/network-solutions",
      freeTrial: "21-day free trial"
    },
    {
      title: "Data Management & Analytics Platform",
      description: "Comprehensive data management solutions with advanced analytics, AI integration, and real-time processing capabilities.",
      icon: ChartBarIcon,
      features: [
        "Data warehousing & lakes",
        "Real-time data processing",
        "Advanced analytics & BI",
        "Data security & encryption",
        "Backup & disaster recovery",
        "Data governance & compliance",
        "Machine learning integration",
        "Data visualization & reporting"
      ],
      color: "from-orange-500 to-red-500",
      price: "$3,999/month",
      originalPrice: "$6,999/month",
      savings: "Save $3,000/month",
      benefits: ["Real-time insights", "Data security", "Compliance", "AI-powered analytics"],
      useCases: ["Business intelligence", "Data analytics", "Compliance", "Machine learning"],
      href: "/data-management",
      freeTrial: "30-day free trial"
    },
    {
      title: "24/7 IT Support & Managed Services",
      description: "Comprehensive IT support services with proactive monitoring, maintenance, and expert technical assistance.",
      icon: UserGroupIcon,
      features: [
        "24/7/365 technical support",
        "Proactive monitoring & maintenance",
        "Remote assistance & troubleshooting",
        "Software updates & patch management",
        "Hardware support & procurement",
        "User training & documentation",
        "Service level agreements (SLA)",
        "IT asset management"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$1,499/month",
      originalPrice: "$2,499/month",
      savings: "Save $1,000/month",
      benefits: ["Reduced downtime", "Expert support", "Cost efficiency", "Proactive maintenance"],
      useCases: ["Help desk", "System maintenance", "User support", "IT operations"],
      href: "/it-support",
      freeTrial: "14-day free trial"
    },
    {
      title: "DevOps & CI/CD Solutions",
      description: "Complete DevOps solutions with continuous integration, deployment automation, and infrastructure as code.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Microservices architecture",
        "Automated testing & quality gates",
        "Deployment automation",
        "Monitoring & observability",
        "Security scanning & compliance"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$2,999/month",
      originalPrice: "$4,999/month",
      savings: "Save $2,000/month",
      benefits: ["10x faster deployments", "Reduced errors", "Improved quality", "Automation"],
      useCases: ["Software development", "Deployment automation", "Infrastructure management", "Quality assurance"],
      href: "/devops-solutions",
      freeTrial: "21-day free trial"
    },
    {
      title: "Mobile & IoT Solutions",
      description: "Comprehensive mobile and IoT solutions with device management, security, and analytics for connected devices.",
      icon: DevicePhoneMobileIcon,
      features: [
        "Mobile device management (MDM)",
        "IoT device connectivity & management",
        "Mobile app development & deployment",
        "Device security & compliance",
        "Real-time monitoring & analytics",
        "Edge computing solutions",
        "API management & integration",
        "Performance optimization"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$2,299/month",
      originalPrice: "$3,999/month",
      savings: "Save $1,700/month",
      benefits: ["Enhanced mobility", "Device security", "Real-time insights", "Scalable solutions"],
      useCases: ["Mobile workforce", "IoT deployments", "Device management", "Edge computing"],
      href: "/mobile-iot-solutions",
      freeTrial: "21-day free trial"
    }
  ];

  const features = [
    {
      title: "Expert IT Solutions",
      description: "Our team of certified professionals delivers cutting-edge IT solutions with deep industry expertise.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Solutions that grow with your business and adapt to changing needs and requirements.",
      icon: CloudIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your systems are always running optimally.",
      icon: UserGroupIcon
    },
    {
      title: "Security First",
      description: "Security is built into every solution we deliver, with enterprise-grade protection and compliance.",
      icon: ShieldCheckIcon
    }
  ];

  const serviceCategories = [
    {
      title: "Infrastructure & Cloud",
      description: "Scalable cloud infrastructure and on-premises solutions",
      icon: ServerIcon,
      services: ["Cloud Migration", "Hybrid Cloud", "Infrastructure as Code", "Disaster Recovery"]
    },
    {
      title: "Security & Compliance",
      description: "Comprehensive security solutions and compliance management",
      icon: ShieldCheckIcon,
      services: ["Threat Detection", "Vulnerability Management", "Compliance Audits", "Security Training"]
    },
    {
      title: "Data & Analytics",
      description: "Advanced data management and analytics solutions",
      icon: DatabaseIcon,
      services: ["Data Warehousing", "Business Intelligence", "Real-time Analytics", "Data Governance"]
    },
    {
      title: "Development & DevOps",
      description: "Modern development practices and deployment automation",
      icon: CogIcon,
      services: ["CI/CD Pipelines", "Container Orchestration", "Microservices", "API Management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, data management, and consulting services. Transform your business with enterprise-grade technology." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, IT consulting, network solutions, data management, DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Enterprise IT Solutions Provider
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              IT Solutions That
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Drive Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with comprehensive IT solutions designed to modernize infrastructure, 
              enhance security, and accelerate digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free IT Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule IT Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">IT Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-gray-600">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our IT Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions across all major technology domains to meet your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT solutions designed to solve real business challenges and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-white border-2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative ${
                  solution.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200 hover:border-blue-300'
                }`}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">{solution.price}</span>
                      {solution.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{solution.originalPrice}</span>
                      )}
                    </div>
                    {solution.savings && (
                      <p className="text-green-600 font-semibold text-sm">{solution.savings}</p>
                    )}
                    {solution.freeTrial && (
                      <p className="text-blue-600 font-medium text-sm">{solution.freeTrial}</p>
                    )}
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link 
                      to={solution.href}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold text-sm"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center font-medium text-sm"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our IT Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our IT Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our IT solutions are built with enterprise-grade technology and designed for maximum performance and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join industry leaders who trust our IT solutions to drive innovation, efficiency, and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Get Free IT Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                Schedule IT Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-100">+1-302-464-0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-100">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPinIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-100">Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;