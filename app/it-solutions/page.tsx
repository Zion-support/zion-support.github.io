import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';



export default function ITSolutionsPage() {
  const itServices = [
    {
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.",
      icon: CpuChipIcon,
      features: [
        "Server configuration and management",
        "Network setup and optimization",
        "Hardware maintenance and upgrades",
        "Performance monitoring and tuning",
        "Disaster recovery planning",
        "24/7 technical support"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "Scalable infrastructure", "Expert support"],
      useCases: ["Enterprise infrastructure", "Cloud migration", "System optimization"],
      href: "/it-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security solutions to protect your digital assets and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
      features: [
        "Security audits and assessments",
        "Threat detection and prevention",
        "Incident response planning",
        "Compliance management",
        "Security training",
        "Penetration testing"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,200/month",
      benefits: ["Advanced protection", "Compliance ready", "24/7 monitoring"],
      useCases: ["Security audits", "Threat protection", "Compliance"],
      href: "/it-cybersecurity"
    },
    {
      title: "Cloud Solutions",
      description: "Migrate to the cloud with our expert cloud architecture and management services for optimal performance.",
      icon: CloudIcon,
      features: [
        "Cloud migration planning",
        "Multi-cloud strategy",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "Disaster recovery"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $2,800/month",
      benefits: ["Scalable solutions", "Cost effective", "High availability"],
      useCases: ["Cloud migration", "Multi-cloud setup", "Cost optimization"],
      href: "/it-cloud-solutions"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and business intelligence solutions.",
      icon: ChartBarIcon,
      features: [
        "Data warehouse design",
        "ETL process development",
        "Business intelligence dashboards",
        "Predictive analytics",
        "Data visualization",
        "Real-time reporting"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,200/month",
      benefits: ["Data-driven insights", "Real-time analytics", "Custom dashboards"],
      useCases: ["Business intelligence", "Data visualization", "Predictive analytics"],
      href: "/it-data-analytics"
    },
    {
      title: "System Integration",
      description: "Seamlessly integrate different systems and applications for improved efficiency and data flow.",
      icon: CogIcon,
      features: [
        "API development and integration",
        "Data migration services",
        "System customization",
        "Workflow automation",
        "Third-party integrations",
        "Legacy system modernization"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $2,600/month",
      benefits: ["Seamless integration", "Improved efficiency", "Custom solutions"],
      useCases: ["System integration", "API development", "Workflow automation"],
      href: "/it-system-integration"
    },
    {
      title: "Compliance & Governance",
      description: "Ensure your IT systems meet regulatory requirements and industry standards with our compliance solutions.",
      icon: ShieldCheckIcon,
      features: [
        "Compliance assessment",
        "Policy development",
        "Audit preparation",
        "Risk management",
        "Documentation",
        "Training programs"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $2,800/month",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness"],
      useCases: ["SOX compliance", "GDPR compliance", "HIPAA compliance"],
      href: "/it-compliance"
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
      <section className="relativepy-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xlmd:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            IT Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-slate-800rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <service.icon className="w-8h-8 text-white" />
                </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-sm flex items-center">
                        <CheckCircleIcon className="w-4h-4 text-blue-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xlfont-bold text-blue-400 mb-2">{service.price}</div>
                  <div className="text-gray-400text-sm mb-4">Benefits: {service.benefits.join(', ')}</div>
                </div>

                <Link
                  to={service.href}
                  className="w-fullbg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2">
                  Learn More
                  <ArrowRightIcon className="w-4h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our IT solutions can improve your business operations and security.
          </p>
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-rfrom-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
