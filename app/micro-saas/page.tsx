'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  CpuChipIcon,
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
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const microSaaSServices = [
    {
      title: "Custom Micro SaaS Development",
      description: "Tailored micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications.",
      icon: CpuChipIcon,
      features: [
        "Custom web applications",
        "API development",
        "Database design",
        "User authentication",
        "Payment integration",
        "Analytics dashboard"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $5,000",
      benefits: ["Custom solutions", "Scalable architecture", "Cost-effective"],
      useCases: ["Business automation", "Niche solutions", "Startup MVPs"],
      href: "/custom-micro-saas"
    },
    {
      title: "SaaS Platform Development",
      description: "Complete SaaS platform development including multi-tenancy, subscription management, and user management.",
      icon: GlobeAltIcon,
      features: [
        "Multi-tenant architecture",
        "Subscription billing",
        "User management",
        "API development",
        "Admin dashboard",
        "White-label options"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $15,000",
      benefits: ["Multi-tenant", "Subscription management", "Scalable"],
      useCases: ["SaaS platforms", "Multi-tenant apps", "Subscription services"],
      href: "/saas-platform"
    },
    {
      title: "API-First Micro Services",
      description: "API-first micro services that can be easily integrated with existing systems and third-party applications.",
      icon: WifiIcon,
      features: [
        "RESTful API development",
        "GraphQL APIs",
        "API documentation",
        "Rate limiting",
        "Authentication",
        "Monitoring & analytics"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $3,000",
      benefits: ["Easy integration", "Well-documented", "Scalable"],
      useCases: ["API services", "Third-party integrations", "Microservices"],
      href: "/api-micro-services"
    },
    {
      title: "Data Analytics Micro SaaS",
      description: "Specialized data analytics and business intelligence micro SaaS solutions for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "Data visualization",
        "Custom dashboards",
        "Real-time analytics",
        "Report generation",
        "Data export",
        "Predictive analytics"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $4,500",
      benefits: ["Data insights", "Custom dashboards", "Real-time analytics"],
      useCases: ["Business intelligence", "Data visualization", "Analytics platforms"],
      href: "/data-analytics-saas"
    },
    {
      title: "E-commerce Micro SaaS",
      description: "Specialized e-commerce micro SaaS solutions including inventory management, order processing, and customer management.",
      icon: CircleStackIcon,
      features: [
        "Inventory management",
        "Order processing",
        "Customer management",
        "Payment processing",
        "Shipping integration",
        "Analytics & reporting"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $6,000",
      benefits: ["Complete e-commerce", "Payment integration", "Inventory management"],
      useCases: ["Online stores", "Inventory management", "Order processing"],
      href: "/ecommerce-micro-saas"
    },
    {
      title: "Workflow Automation SaaS",
      description: "Workflow automation micro SaaS solutions to streamline business processes and improve efficiency.",
      icon: CogIcon,
      features: [
        "Process automation",
        "Workflow design",
        "Task management",
        "Notification system",
        "Integration capabilities",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $4,000",
      benefits: ["Process automation", "Efficiency gains", "Custom workflows"],
      useCases: ["Process automation", "Workflow management", "Task automation"],
      href: "/workflow-automation-saas"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions including platform development, API services, data analytics, and workflow automation. Scalable SaaS applications for modern businesses." />
        <meta name="keywords" content="micro SaaS, SaaS development, custom SaaS, API development, data analytics, workflow automation, e-commerce SaaS" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Custom micro SaaS solutions designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From custom web applications to API-first micro services, our expert development team 
              creates scalable, cost-effective SaaS solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaaSServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
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
                        <span key={useCaseIndex} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full">
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
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-pink-700 transition-all"
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

      {/* Why Choose Our Micro SaaS */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert SaaS development backed by years of experience and cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Development</h3>
              <p className="text-gray-300">
                Tailored SaaS solutions designed specifically for your business needs and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Development</h3>
              <p className="text-gray-300">
                Fast development cycles with agile methodologies to get your SaaS to market quickly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance with industry standards and regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
              <p className="text-gray-300">
                Scalable SaaS architecture that grows with your business and adapts to changing needs.
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
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our SaaS development experts help you create a custom solution that drives your business forward
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Our Work
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}