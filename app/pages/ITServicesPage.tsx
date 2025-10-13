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
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

export default function ITServicesPage() {
  const itServices = [
    {
      title: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including migration, optimization, and management of your IT infrastructure across AWS, Azure, and Google Cloud.",
      icon: CloudIcon,
      features: [
        "Multi-cloud strategy and planning",
        "Automated migration tools",
        "Cost optimization and monitoring",
        "Disaster recovery solutions",
        "Security and compliance",
        "24/7 infrastructure monitoring"
      ],
      pricing: {
        basic: { price: 599, period: "month", features: ["Single cloud platform", "Basic monitoring", "Email support", "Standard SLA"] },
        professional: { price: 1499, period: "month", features: ["Multi-cloud setup", "Advanced monitoring", "Priority support", "99.9% SLA"] },
        enterprise: { price: 3999, period: "month", features: ["Custom cloud architecture", "Dedicated team", "White-glove service", "99.99% SLA"] }
      },
      color: "from-blue-500 to-cyan-500",
      href: "/cloud-infrastructure",
      marketPrice: "$599-3,999/month",
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve system reliability by 99.9%",
        "Scale resources automatically",
        "Enhance security posture"
      ],
      useCases: ["Legacy system migration", "Hybrid cloud setup", "Disaster recovery", "Cost optimization"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, compliance management, and incident response.",
      icon: ShieldCheckIcon,
      features: [
        "Security risk assessment",
        "Penetration testing",
        "Vulnerability management",
        "Compliance auditing (SOC2, GDPR, HIPAA)",
        "Security awareness training",
        "Incident response planning"
      ],
      pricing: {
        basic: { price: 399, period: "month", features: ["Basic security monitoring", "Monthly reports", "Email support", "Standard compliance"] },
        professional: { price: 999, period: "month", features: ["Advanced threat detection", "Weekly reports", "Priority support", "Full compliance suite"] },
        enterprise: { price: 2499, period: "month", features: ["24/7 SOC monitoring", "Real-time alerts", "Dedicated team", "Custom compliance"] }
      },
      color: "from-red-500 to-pink-500",
      href: "/cybersecurity",
      marketPrice: "$399-2,499/month",
      benefits: [
        "Reduce security incidents by 90%",
        "Achieve compliance certification",
        "Improve security posture",
        "Minimize business risk"
      ],
      useCases: ["Security audits", "Compliance management", "Threat monitoring", "Incident response"]
    },
    {
      title: "Network Infrastructure & Support",
      description: "Design, implement, and maintain robust network infrastructure with high availability, security, and performance optimization.",
      icon: GlobeAltIcon,
      features: [
        "Network design and architecture",
        "Wireless network deployment",
        "Network security implementation",
        "Performance monitoring",
        "Bandwidth optimization",
        "Remote access solutions"
      ],
      pricing: {
        basic: { price: 299, period: "month", features: ["Basic network monitoring", "Standard maintenance", "Email support", "Business hours support"] },
        professional: { price: 799, period: "month", features: ["Advanced monitoring", "Proactive maintenance", "Priority support", "Extended hours support"] },
        enterprise: { price: 1999, period: "month", features: ["24/7 monitoring", "Dedicated engineer", "White-glove service", "Custom solutions"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/network-infrastructure",
      marketPrice: "$299-1,999/month",
      benefits: [
        "Improve network uptime by 99.9%",
        "Reduce network issues by 80%",
        "Enhance security posture",
        "Optimize performance"
      ],
      useCases: ["Network upgrades", "Security hardening", "Performance optimization", "Remote work setup"]
    },
    {
      title: "IT Help Desk & Support",
      description: "Comprehensive IT support services including help desk, technical support, user training, and system administration.",
      icon: ComputerDesktopIcon,
      features: [
        "24/7 help desk support",
        "Remote desktop assistance",
        "User account management",
        "Software installation and updates",
        "Hardware troubleshooting",
        "IT training and documentation"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["Business hours support", "Email and phone", "Basic troubleshooting", "Standard SLA"] },
        professional: { price: 499, period: "month", features: ["Extended hours support", "Multiple channels", "Advanced troubleshooting", "Priority SLA"] },
        enterprise: { price: 1299, period: "month", features: ["24/7 support", "Dedicated team", "White-glove service", "Custom SLA"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/it-help-desk",
      marketPrice: "$199-1,299/month",
      benefits: [
        "Reduce IT support tickets by 60%",
        "Improve user satisfaction",
        "Minimize downtime",
        "Increase productivity"
      ],
      useCases: ["User support", "System administration", "Software management", "Training programs"]
    },
    {
      title: "Data Backup & Recovery",
      description: "Comprehensive data protection solutions including automated backups, disaster recovery planning, and business continuity services.",
      icon: ServerIcon,
      features: [
        "Automated backup scheduling",
        "Multi-location data replication",
        "Disaster recovery planning",
        "Data encryption and security",
        "Recovery time optimization",
        "Compliance and auditing"
      ],
      pricing: {
        basic: { price: 149, period: "month", features: ["Daily backups", "Local storage", "Email support", "Basic recovery"] },
        professional: { price: 399, period: "month", features: ["Hourly backups", "Cloud storage", "Priority support", "Advanced recovery"] },
        enterprise: { price: 999, period: "month", features: ["Real-time backups", "Multi-cloud storage", "Dedicated support", "Custom recovery"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/data-backup-recovery",
      marketPrice: "$149-999/month",
      benefits: [
        "Protect critical business data",
        "Minimize data loss risk",
        "Ensure business continuity",
        "Meet compliance requirements"
      ],
      useCases: ["Data protection", "Disaster recovery", "Compliance backup", "Business continuity"]
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT consulting services to align technology with business goals, optimize IT investments, and plan digital transformation.",
      icon: CogIcon,
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Vendor management",
        "IT budget optimization",
        "Change management"
      ],
      pricing: {
        basic: { price: 199, period: "hour", features: ["Strategy sessions", "Basic assessment", "Email follow-up", "Standard deliverables"] },
        professional: { price: 299, period: "hour", features: ["Comprehensive analysis", "Detailed recommendations", "Priority support", "Advanced deliverables"] },
        enterprise: { price: 499, period: "hour", features: ["Custom consulting", "Dedicated consultant", "White-glove service", "Ongoing partnership"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/it-consulting",
      marketPrice: "$199-499/hour",
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Plan successful transformations",
        "Reduce IT complexity"
      ],
      useCases: ["IT strategy", "Digital transformation", "Technology selection", "Process optimization"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, help desk support, and IT consulting." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, network infrastructure, IT support, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services designed to keep your business running smoothly, securely, and efficiently
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our IT experts provide end-to-end solutions 
              that support your business growth and protect your digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {itServices.map((service, index) => {
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

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
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

      {/* IT Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT services across all major technology domains, 
              ensuring your business has the support it needs to thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CloudIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300">
                Complete cloud solutions including migration, optimization, and management across all major platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300">
                Comprehensive security solutions to protect your business from evolving cyber threats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <GlobeAltIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Network Infrastructure</h3>
              <p className="text-gray-300">
                Design, implement, and maintain robust network infrastructure for optimal performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <WrenchScrewdriverIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support & Maintenance</h3>
              <p className="text-gray-300">
                Proactive IT support and maintenance to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver IT solutions 
              that not only work but also drive business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Expertise</h3>
              <p className="text-gray-300">
                Over 4 years of experience delivering successful IT solutions across various industries 
                and business sizes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to ensure your IT systems are always running smoothly 
                and efficiently.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">
                Transparent pricing with no hidden fees. We help you optimize IT costs 
                while improving performance and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT services can improve your business operations and reduce costs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free IT Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule IT Demo
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