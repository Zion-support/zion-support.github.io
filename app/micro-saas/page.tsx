import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const microSaaSServices = [
    {
      title: "Custom SaaS Development",
      description: "Build custom micro SaaS applications tailored to your specific business needs and market requirements.",
      icon: CpuChipIcon,
      features: [
        "Custom application development",
        "Scalable architecture design",
        "API development",
        "Database design",
        "User authentication",
        "Payment integration"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $15,000",
      benefits: ["Custom solution", "Scalable architecture", "Full ownership"],
      useCases: ["Niche markets", "Specific workflows", "Competitive advantage"]
    },
    {
      title: "SaaS Platform Setup",
      description: "Complete SaaS platform setup with multi-tenancy, user management, and subscription billing.",
      icon: GlobeAltIcon,
      features: [
        "Multi-tenant architecture",
        "User management system",
        "Subscription billing",
        "Analytics dashboard",
        "API documentation",
        "Admin panel"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $25,000",
      benefits: ["Multi-tenancy", "Subscription management", "Scalable platform"],
      useCases: ["SaaS startups", "Platform businesses", "Subscription models"]
    },
    {
      title: "API Development",
      description: "Robust API development for your micro SaaS with comprehensive documentation and testing.",
      icon: CogIcon,
      features: [
        "RESTful API design",
        "GraphQL APIs",
        "API documentation",
        "Rate limiting",
        "Authentication & authorization",
        "API testing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $8,000",
      benefits: ["Well-documented APIs", "Secure endpoints", "Developer-friendly"],
      useCases: ["Third-party integrations", "Mobile apps", "Partner ecosystems"]
    },
    {
      title: "SaaS Analytics",
      description: "Comprehensive analytics and reporting for your micro SaaS to track usage and performance.",
      icon: ChartBarIcon,
      features: [
        "Usage analytics",
        "Performance monitoring",
        "User behavior tracking",
        "Revenue analytics",
        "Custom dashboards",
        "Automated reports"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $5,000",
      benefits: ["Data-driven insights", "Performance optimization", "Business intelligence"],
      useCases: ["Performance monitoring", "User insights", "Business optimization"]
    },
    {
      title: "SaaS Security",
      description: "Enterprise-grade security implementation for your micro SaaS to protect user data and ensure compliance.",
      icon: ShieldCheckIcon,
      features: [
        "Data encryption",
        "Security audits",
        "Compliance implementation",
        "Vulnerability testing",
        "Access controls",
        "Security monitoring"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $7,500",
      benefits: ["Enterprise security", "Compliance ready", "Data protection"],
      useCases: ["Data protection", "Compliance requirements", "Enterprise customers"]
    },
    {
      title: "SaaS Maintenance",
      description: "Ongoing maintenance and support for your micro SaaS to ensure optimal performance and reliability.",
      icon: LightBulbIcon,
      features: [
        "Bug fixes & updates",
        "Performance optimization",
        "Security patches",
        "Feature enhancements",
        "24/7 monitoring",
        "Technical support"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,000/month",
      benefits: ["Reliable service", "Continuous improvement", "Peace of mind"],
      useCases: ["Ongoing support", "Performance maintenance", "Feature updates"]
    }
  ];

  const microSaaSStats = [
    { label: "Time to Market", value: "3-6 months", color: "text-green-400" },
    { label: "Success Rate", value: "95%", color: "text-blue-400" },
    { label: "Client Satisfaction", value: "100%", color: "text-purple-400" },
    { label: "ROI", value: "400%", color: "text-yellow-400" }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS development services including platform setup, API development, analytics, and maintenance." />
        <meta name="keywords" content="micro SaaS, SaaS development, custom applications, API development, SaaS platform, subscription billing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build and scale custom micro SaaS applications that solve specific business problems
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From concept to launch, we help you create powerful micro SaaS solutions that 
              generate recurring revenue and provide value to your target market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your SaaS Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {microSaaSStats.map((stat, _index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SaaS Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SaaS development services to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaaSServices.map((service, _index) => {
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
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to="/demo" 
                      className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide end-to-end micro SaaS development with proven expertise and dedicated support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CpuChipIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Rapid Development</h3>
                <p className="text-gray-300">
                  Fast-track your micro SaaS development with our proven methodologies and experienced team.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GlobeAltIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-gray-300">
                  Built for scale from day one with cloud-native architecture and best practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300">
                  Continuous support and maintenance to ensure your micro SaaS runs smoothly and efficiently.
                </p>
              </div>
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
              Get a free consultation and discover how we can help you build a successful micro SaaS business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}