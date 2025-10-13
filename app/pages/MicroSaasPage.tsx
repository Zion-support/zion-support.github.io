import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon,
  CreditCardIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications designed to solve specific business challenges efficiently.",
      icon: GlobeAltIcon,
      features: ["Responsive Design", "Cross-Platform Compatibility", "User-Friendly Interface", "Scalable Architecture"]
    },
    {
      title: "API Development",
      description: "Robust APIs that enable seamless integration with existing systems and third-party services.",
      icon: CogIcon,
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting"]
    },
    {
      title: "Database Design",
      description: "Optimized database solutions for efficient data storage, retrieval, and management.",
      icon: ChartBarIcon,
      features: ["Database Optimization", "Data Modeling", "Backup Solutions", "Performance Tuning"]
    },
    {
      title: "User Management",
      description: "Comprehensive user authentication, authorization, and profile management systems.",
      icon: UserGroupIcon,
      features: ["Authentication", "Role-Based Access", "User Profiles", "Security Features"]
    },
    {
      title: "Payment Integration",
      description: "Secure payment processing solutions integrated with popular payment gateways.",
      icon: CreditCardIcon,
      features: ["Multiple Payment Methods", "Secure Processing", "Subscription Management", "Invoice Generation"]
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics and reporting dashboards to track performance and insights.",
      icon: ChartBarIcon,
      features: ["Real-time Data", "Custom Reports", "Data Visualization", "Export Capabilities"]
    }
  ];

  const industries = [
    "E-commerce",
    "Healthcare",
    "Education",
    "Real Estate",
    "Finance",
    "Manufacturing",
    "Retail",
    "Professional Services"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions including web applications, API development, and analytics dashboards for specific business needs." />
        <meta name="keywords" content="micro SaaS, custom web applications, API development, SaaS solutions, business applications" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Custom micro SaaS applications designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our micro SaaS solutions are tailored, cost-effective applications that address 
              specific business needs with scalable, maintainable, and user-friendly interfaces.
            </p>
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
              Comprehensive micro SaaS development services for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Build Your SaaS <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS solutions are tailored for various industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={industry}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600 text-center hover:border-pink-500 transition-all duration-300"
              >
                <GlobeAltIcon className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A streamlined approach to building successful micro SaaS applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
              <p className="text-gray-300">
                We understand your business needs and define the micro SaaS requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-300">
                We create user-friendly interfaces and intuitive user experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Development</h3>
              <p className="text-gray-300">
                We build robust, scalable applications using modern technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deployment</h3>
              <p className="text-gray-300">
                We deploy and maintain your micro SaaS application with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you create a custom micro SaaS solution that addresses your specific business needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-pink-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-pink-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}