import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  RocketLaunchIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CloudIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const MicroSaasSolutionsPage: React.FC = () => {
  const saasServices = [
    {
      title: "SaaS MVP Development",
      description: "Rapid development of minimum viable products for SaaS businesses with modern tech stacks.",
      icon: RocketLaunchIcon,
      features: [
        "Rapid prototyping",
        "Modern tech stack",
        "Scalable architecture",
        "User authentication",
        "Payment integration",
        "Analytics dashboard"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $15,000",
      benefits: ["Fast to market", "Scalable design", "Modern UI/UX"],
      useCases: ["Startups", "MVP development", "Proof of concept"],
      href: "/saas-mvp-development"
    },
    {
      title: "Micro-SaaS Platforms",
      description: "Specialized micro-SaaS solutions focused on specific business needs and niche markets.",
      icon: CogIcon,
      features: [
        "Niche-focused solutions",
        "Lightweight architecture",
        "Quick deployment",
        "Low maintenance",
        "High performance",
        "Easy integration"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $8,000",
      benefits: ["Focused solution", "Low overhead", "Quick ROI"],
      useCases: ["Niche markets", "Specialized tools", "Quick solutions"],
      href: "/micro-saas-platforms"
    },
    {
      title: "SaaS Analytics & Insights",
      description: "Comprehensive analytics solutions to track user behavior, performance metrics, and business KPIs.",
      icon: ChartBarIcon,
      features: [
        "User behavior tracking",
        "Performance metrics",
        "Custom dashboards",
        "Real-time reporting",
        "Data visualization",
        "Business intelligence"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $5,000",
      benefits: ["Data-driven decisions", "Real-time insights", "Custom dashboards"],
      useCases: ["Analytics", "Reporting", "Business intelligence"],
      href: "/saas-analytics"
    },
    {
      title: "SaaS Security & Compliance",
      description: "Enterprise-grade security solutions to protect your SaaS platform and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Data encryption",
        "Access control",
        "Compliance auditing",
        "Security monitoring",
        "Penetration testing",
        "GDPR compliance"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $10,000",
      benefits: ["Enterprise security", "Compliance ready", "Data protection"],
      useCases: ["Security", "Compliance", "Data protection"],
      href: "/saas-security"
    },
    {
      title: "SaaS Integration Services",
      description: "Seamless integration with third-party services, APIs, and existing business systems.",
      icon: CloudIcon,
      features: [
        "API development",
        "Third-party integrations",
        "Webhook implementation",
        "Data synchronization",
        "Custom connectors",
        "Real-time updates"
      ],
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $6,000",
      benefits: ["Seamless integration", "API-first design", "Real-time sync"],
      useCases: ["API development", "System integration", "Data sync"],
      href: "/saas-integration"
    },
    {
      title: "SaaS Maintenance & Support",
      description: "Ongoing maintenance, updates, and support services to keep your SaaS platform running smoothly.",
      icon: UserGroupIcon,
      features: [
        "24/7 monitoring",
        "Regular updates",
        "Bug fixes",
        "Performance optimization",
        "User support",
        "Feature enhancements"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000/month",
      benefits: ["24/7 support", "Proactive maintenance", "Continuous improvement"],
      useCases: ["Maintenance", "Support", "Updates"],
      href: "/saas-maintenance"
    }
  ];

  const benefits = [
    "Rapid development and deployment",
    "Scalable and maintainable architecture",
    "Modern tech stack and best practices",
    "Cost-effective solutions for startups",
    "Expert development team",
    "Ongoing support and maintenance"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Micro-SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro-SaaS development services including MVP development, analytics, security, and integration solutions." />
        <meta name="keywords" content="micro-SaaS, SaaS development, MVP development, SaaS analytics, SaaS security, SaaS integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              Micro-SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Specialized micro-SaaS development services to help you build, launch, and scale your software business
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From MVP development to full-scale SaaS platforms, we deliver solutions that are fast, scalable, and designed for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your SaaS Journey
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of micro-SaaS solutions designed to accelerate your business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold mb-2">{service.price}</div>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={service.href} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300">
                We deliver SaaS solutions that are fast, scalable, and designed to help your business succeed.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your SaaS Platform?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our micro-SaaS solutions can help you build, launch, and scale your software business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Building Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Our Work
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasSolutionsPage;
