import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CogIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const itServices = [
    {
      title: "Infrastructure Management",
      description: "Complete IT infrastructure management including servers, networks, and data centers with 24/7 monitoring and support.",
      icon: ServerIcon,
      features: [
        "Server management and maintenance",
        "Network monitoring and optimization",
        "Data center operations",
        "Backup and disaster recovery",
        "Performance monitoring",
        "Security updates and patches"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "24/7 monitoring", "Proactive maintenance"],
      useCases: ["Enterprise infrastructure", "Cloud migration", "System optimization"],
      href: "/it-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment and auditing",
        "Threat detection and response",
        "Firewall and network security",
        "Data encryption and protection",
        "Security training and awareness",
        "Compliance management"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,000/month",
      benefits: ["Advanced threat protection", "Compliance ready", "Expert security team"],
      useCases: ["Data protection", "Compliance", "Threat prevention"],
      href: "/cybersecurity"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services to optimize performance, reduce costs, and enhance flexibility.",
      icon: CloudIcon,
      features: [
        "Cloud migration and deployment",
        "Multi-cloud management",
        "Cost optimization",
        "Auto-scaling and load balancing",
        "Cloud security and compliance",
        "Backup and disaster recovery"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,200/month",
      benefits: ["Cost effective", "Scalable", "Secure"],
      useCases: ["Cloud migration", "Scalability", "Cost optimization"],
      href: "/cloud-solutions"
    },
    {
      title: "System Integration",
      description: "Seamless integration of disparate systems and applications to create a unified, efficient IT environment.",
      icon: CogIcon,
      features: [
        "API development and integration",
        "Legacy system modernization",
        "Data synchronization",
        "Workflow automation",
        "Third-party integrations",
        "Custom middleware development"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $2,800/month",
      benefits: ["Unified systems", "Improved efficiency", "Custom solutions"],
      useCases: ["System modernization", "Workflow automation", "Data integration"],
      href: "/system-integration"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Professional IT support services to ensure your systems run smoothly and your team stays productive.",
      icon: ComputerDesktopIcon,
      features: [
        "24/7 technical support",
        "Remote troubleshooting",
        "Hardware and software support",
        "User training and onboarding",
        "Incident management",
        "Knowledge base management"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $1,500/month",
      benefits: ["24/7 support", "Fast response", "Expert technicians"],
      useCases: ["Technical support", "User assistance", "System maintenance"],
      href: "/it-support"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development and operations with automated CI/CD pipelines, monitoring, and deployment solutions.",
      icon: WrenchScrewdriverIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Automated testing and deployment",
        "Monitoring and alerting",
        "Container orchestration",
        "Performance optimization"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $3,200/month",
      benefits: ["Faster deployments", "Reduced errors", "Improved efficiency"],
      useCases: ["Development automation", "Deployment optimization", "Monitoring"],
      href: "/devops"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud solutions, and system integration services." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud solutions, system integration, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to keep your business running smoothly, securely, and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/case-studies" 
              className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our IT Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
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
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Monthly subscription</div>
                </div>
                <Link 
                  to={service.href}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust, secure, and efficient technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Start Your IT Transformation
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/consultation" 
              className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}