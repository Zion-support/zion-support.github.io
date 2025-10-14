import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  WrenchIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const itServices = [
    {
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.",
      icon: ServerIcon,
      features: [
        "Server configuration and management",
        "Network setup and monitoring",
        "Hardware maintenance and upgrades",
        "Performance optimization",
        "Disaster recovery planning",
        "24/7 system monitoring"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "Proactive monitoring", "Expert support"],
      useCases: ["Enterprise infrastructure", "Data center management", "Server optimization"],
      href: "/it-infrastructure"
    },
    {
      title: "Cloud Solutions",
      description: "Migrate to the cloud and optimize your cloud infrastructure for scalability, security, and cost-effectiveness.",
      icon: CloudIcon,
      features: [
        "Cloud migration strategy",
        "Multi-cloud architecture",
        "Cost optimization",
        "Security implementation",
        "Auto-scaling setup",
        "Cloud monitoring"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,200/month",
      benefits: ["Scalable infrastructure", "Cost savings", "Enhanced security"],
      useCases: ["AWS migration", "Azure setup", "Google Cloud optimization"],
      href: "/cloud-solutions"
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive security solutions and threat monitoring to keep your data safe.",
      icon: ShieldCheckIcon,
      features: [
        "Security assessment and auditing",
        "Threat detection and response",
        "Compliance management",
        "Incident response planning",
        "Security training",
        "Vulnerability management"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,800/month",
      benefits: ["Enhanced security", "Compliance ready", "Threat protection"],
      useCases: ["SOC 2 compliance", "GDPR compliance", "Security audits"],
      href: "/cybersecurity"
    },
    {
      title: "System Integration",
      description: "Seamlessly integrate different systems and applications for improved workflow efficiency and data consistency.",
      icon: CogIcon,
      features: [
        "API development and integration",
        "Data synchronization",
        "Workflow automation",
        "Legacy system modernization",
        "Third-party integrations",
        "Custom connector development"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,500/month",
      benefits: ["Streamlined workflows", "Data consistency", "Automated processes"],
      useCases: ["ERP integration", "CRM integration", "API development"],
      href: "/system-integration"
    },
    {
      title: "Data Management",
      description: "Organize, secure, and optimize your data infrastructure for better insights and compliance.",
      icon: ChartBarIcon,
      features: [
        "Database design and optimization",
        "Data backup and recovery",
        "Data migration services",
        "Performance tuning",
        "Data governance",
        "Analytics implementation"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $2,200/month",
      benefits: ["Optimized performance", "Data security", "Better insights"],
      useCases: ["Database optimization", "Data migration", "Analytics setup"],
      href: "/data-management"
    },
    {
      title: "Technical Support",
      description: "24/7 technical support and maintenance to keep your systems running smoothly and efficiently.",
      icon: WrenchIcon,
      features: [
        "Help desk support",
        "Remote monitoring",
        "Preventive maintenance",
        "Emergency response",
        "User training",
        "Documentation and knowledge base"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,800/month",
      benefits: ["24/7 support", "Quick response", "Proactive maintenance"],
      useCases: ["Help desk", "System maintenance", "User support"],
      href: "/technical-support"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "We analyze your current IT infrastructure and identify areas for improvement and optimization."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive IT strategy aligned with your business objectives and technology needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the IT solutions with careful planning and minimal disruption to your operations."
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance."
    }
  ];

  const stats = [
    { number: "200+", label: "IT Projects Completed" },
    { number: "99.9%", label: "System Uptime" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud services, cybersecurity, and technical support." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud services, cybersecurity, technical support" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services to keep your business running efficiently and securely
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              From infrastructure management to cybersecurity, we provide end-to-end IT solutions 
              that ensure your technology infrastructure is robust, secure, and optimized for growth.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services designed to optimize your technology infrastructure
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="text-blue-400 font-semibold mb-4">{service.price}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={service.href}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful IT implementation and ongoing support
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT solutions can improve your technology infrastructure and support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get IT Consultation
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}