import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CloudIcon,
  ServerIcon,
  CogIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const cloudServices = [
    {
      title: "Cloud Migration & Modernization",
      description: "Seamlessly migrate your applications and infrastructure to the cloud with zero downtime and maximum efficiency.",
      icon: CloudIcon,
      features: [
        "Zero-downtime migration",
        "Application modernization",
        "Data migration and synchronization",
        "Performance optimization",
        "Cost analysis and optimization",
        "Security and compliance"
      ],
      pricing: {
        basic: { price: 299, period: "month", features: ["Single application", "Basic monitoring", "Email support"] },
        professional: { price: 799, period: "month", features: ["Multiple applications", "Advanced monitoring", "Priority support"] },
        enterprise: { price: 1999, period: "month", features: ["Full infrastructure", "Dedicated team", "White-glove service"] }
      },
      color: "from-blue-500 to-cyan-500",
      href: "/cloud-migration",
      marketPrice: "$299-1,999/month",
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability and performance",
        "Enhance security and compliance",
        "Enable remote work capabilities"
      ]
    },
    {
      title: "Multi-Cloud Management",
      description: "Manage and optimize your cloud infrastructure across AWS, Azure, and Google Cloud from a single platform.",
      icon: GlobeAltIcon,
      features: [
        "Unified cloud dashboard",
        "Cost optimization across providers",
        "Automated resource management",
        "Security policy enforcement",
        "Performance monitoring",
        "Disaster recovery planning"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["2 cloud providers", "Basic monitoring", "Email support"] },
        professional: { price: 599, period: "month", features: ["3 cloud providers", "Advanced analytics", "Priority support"] },
        enterprise: { price: 1499, period: "month", features: ["Unlimited providers", "Custom integrations", "Dedicated support"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/multi-cloud-management",
      marketPrice: "$199-1,499/month",
      benefits: [
        "Optimize costs across all cloud providers",
        "Improve operational efficiency",
        "Reduce vendor lock-in",
        "Enhance disaster recovery capabilities"
      ]
    },
    {
      title: "Cloud Security & Compliance",
      description: "Comprehensive security solutions to protect your cloud infrastructure and ensure compliance with industry standards.",
      icon: ShieldCheckIcon,
      features: [
        "Identity and access management",
        "Data encryption and protection",
        "Compliance monitoring",
        "Threat detection and response",
        "Security auditing",
        "Incident response planning"
      ],
      pricing: {
        basic: { price: 149, period: "month", features: ["Basic security monitoring", "Standard compliance", "Email support"] },
        professional: { price: 399, period: "month", features: ["Advanced security", "Full compliance suite", "Priority support"] },
        enterprise: { price: 999, period: "month", features: ["Custom security policies", "Dedicated security team", "24/7 monitoring"] }
      },
      color: "from-red-500 to-pink-500",
      href: "/cloud-security",
      marketPrice: "$149-999/month",
      benefits: [
        "Protect sensitive data and applications",
        "Meet compliance requirements",
        "Reduce security risks",
        "Improve audit readiness"
      ]
    },
    {
      title: "Cloud DevOps & Automation",
      description: "Streamline your development and deployment processes with automated CI/CD pipelines and infrastructure as code.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Automated testing and deployment",
        "Container orchestration",
        "Monitoring and alerting",
        "Performance optimization"
      ],
      pricing: {
        basic: { price: 249, period: "month", features: ["Basic CI/CD", "Standard monitoring", "Email support"] },
        professional: { price: 699, period: "month", features: ["Advanced automation", "Custom pipelines", "Priority support"] },
        enterprise: { price: 1799, period: "month", features: ["Full automation suite", "Custom integrations", "Dedicated team"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/cloud-devops",
      marketPrice: "$249-1,799/month",
      benefits: [
        "Accelerate development cycles",
        "Reduce deployment errors",
        "Improve team productivity",
        "Enable continuous delivery"
      ]
    },
    {
      title: "Cloud Analytics & Monitoring",
      description: "Gain deep insights into your cloud infrastructure performance with advanced analytics and monitoring solutions.",
      icon: ChartBarIcon,
      features: [
        "Real-time performance monitoring",
        "Cost analytics and optimization",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting",
        "Alert management"
      ],
      pricing: {
        basic: { price: 99, period: "month", features: ["Basic monitoring", "Standard reports", "Email support"] },
        professional: { price: 299, period: "month", features: ["Advanced analytics", "Custom dashboards", "Priority support"] },
        enterprise: { price: 799, period: "month", features: ["Full analytics suite", "Custom integrations", "Dedicated support"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/cloud-analytics",
      marketPrice: "$99-799/month",
      benefits: [
        "Optimize cloud performance",
        "Reduce operational costs",
        "Improve decision making",
        "Prevent issues before they occur"
      ]
    },
    {
      title: "Cloud Backup & Disaster Recovery",
      description: "Protect your data and ensure business continuity with comprehensive backup and disaster recovery solutions.",
      icon: ServerIcon,
      features: [
        "Automated backup scheduling",
        "Multi-region data replication",
        "Disaster recovery planning",
        "Data encryption and security",
        "Recovery time optimization",
        "Compliance and auditing"
      ],
      pricing: {
        basic: { price: 79, period: "month", features: ["Daily backups", "Basic recovery", "Email support"] },
        professional: { price: 199, period: "month", features: ["Hourly backups", "Advanced recovery", "Priority support"] },
        enterprise: { price: 499, period: "month", features: ["Real-time backups", "Custom recovery", "Dedicated support"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/cloud-backup",
      marketPrice: "$79-499/month",
      benefits: [
        "Protect critical business data",
        "Minimize downtime and data loss",
        "Ensure business continuity",
        "Meet compliance requirements"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, multi-cloud management, security, DevOps, analytics, and disaster recovery." />
        <meta name="keywords" content="cloud solutions, cloud migration, multi-cloud, cloud security, DevOps, cloud analytics" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with comprehensive cloud solutions designed for scalability, security, and efficiency
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From migration to management, our cloud experts help you leverage the full power 
              of cloud computing to drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {cloudServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.marketPrice}</div>
                      <div className="text-sm text-gray-400">Starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <StarIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-lg font-bold text-white">${details.price}</div>
                        <div className="text-xs text-gray-400">/{details.period}</div>
                        <div className="text-xs text-gray-300 capitalize">{plan}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cloud Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers and have deep expertise in cloud-native 
              technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CloudIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AWS Expertise</h3>
              <p className="text-gray-300">
                Certified AWS solutions architects with expertise in EC2, S3, Lambda, and more.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Azure Solutions</h3>
              <p className="text-gray-300">
                Microsoft Azure specialists with experience in App Services, Functions, and DevOps.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Cloud</h3>
              <p className="text-gray-300">
                Google Cloud Platform experts with knowledge of BigQuery, Kubernetes, and AI services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Multi-Cloud</h3>
              <p className="text-gray-300">
                Cross-platform expertise to help you leverage the best of all cloud providers.
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
              Let's discuss your cloud strategy and find the perfect solution for your business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Cloud Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Cloud Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}