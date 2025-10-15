import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ServerIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for micro-SaaS applications with auto-scaling and high availability.",
      icon: CloudIcon,
      features: [
        "Auto-scaling infrastructure",
        "High availability",
        "Cost optimization",
        "Global CDN"
      ]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration and data exchange.",
      icon: CogIcon,
      features: [
        "RESTful APIs",
        "GraphQL endpoints",
        "API documentation",
        "Rate limiting"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics and reporting dashboard for business insights.",
      icon: ChartBarIcon,
      features: [
        "Real-time analytics",
        "Custom reports",
        "Data visualization",
        "Export capabilities"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security features and compliance management.",
      icon: ShieldCheckIcon,
      features: [
        "Data encryption",
        "Access control",
        "Audit logging",
        "GDPR compliance"
      ]
    },
    {
      title: "Database Management",
      description: "Optimized database solutions for performance and scalability.",
      icon: ServerIcon,
      features: [
        "Database optimization",
        "Backup & recovery",
        "Performance monitoring",
        "Data migration"
      ]
    },
    {
      title: "Multi-tenant Architecture",
      description: "Secure multi-tenant architecture for SaaS applications.",
      icon: GlobeAltIcon,
      features: [
        "Tenant isolation",
        "Resource sharing",
        "Custom branding",
        "Scalable pricing"
      ]
    }
  ];

  const benefits = [
    "Rapid development and deployment",
    "Scalable architecture from day one",
    "Cost-effective solutions",
    "24/7 monitoring and support",
    "Easy integration with existing systems",
    "Regular updates and maintenance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro-SaaS solutions including cloud infrastructure, API development, analytics, and security for modern businesses." />
        <meta name="keywords" content="micro SaaS, cloud infrastructure, API development, analytics dashboard, security compliance, multi-tenant" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-cyan-50 to-blue-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build and scale your micro-SaaS application with our comprehensive 
              development and infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide end-to-end solutions for building and scaling micro-SaaS applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-cyan-100 rounded-lg">
                      <solution.icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through our expertise and commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Micro SAAS?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let our experts help you build and scale your micro-SaaS application
            </p>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicroSAASSolutionsPage;