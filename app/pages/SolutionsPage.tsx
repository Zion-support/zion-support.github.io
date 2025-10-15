import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting",
        "Machine learning models",
        "Data visualization"
      ],
      price: "Starting at $2,500/month",
      href: "/ai-solutions"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with comprehensive cybersecurity solutions and threat detection.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Security monitoring",
        "Incident response",
        "Compliance management",
        "Security training",
        "Risk assessment"
      ],
      price: "Starting at $1,800/month",
      href: "/cybersecurity"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions to support your business growth and operations.",
      icon: CloudIcon,
      features: [
        "Cloud migration",
        "Infrastructure management",
        "Scalability solutions",
        "Security implementation",
        "Performance optimization",
        "Cost management"
      ],
      price: "Starting at $3,000/month",
      href: "/it-solutions"
    },
    {
      title: "Micro SaaS Platform",
      description: "Build and scale your software business with our comprehensive micro SaaS solutions.",
      icon: SignalIcon,
      features: [
        "AI-powered tools",
        "Automation solutions",
        "Custom development",
        "Scalable architecture",
        "Integration APIs",
        "Analytics dashboard"
      ],
      price: "Starting at $99/month",
      href: "/micro-saas-solutions"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes.",
      icon: RocketLaunchIcon,
      features: [
        "Process automation",
        "Technology integration",
        "Change management",
        "Digital strategy",
        "Performance optimization",
        "Training & support"
      ],
      price: "Starting at $2,000/month",
      href: "/digital-transformation"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity solutions for IoT, mobile applications, and smart systems.",
      icon: GlobeAltIcon,
      features: [
        "5G network infrastructure",
        "IoT solutions",
        "Edge computing",
        "Mobile applications",
        "Data analytics",
        "Smart city solutions"
      ],
      price: "Starting at $4,000/month",
      href: "/5g-solutions"
    }
  ];

  const industries = [
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Government"
  ];

  const benefits = [
    "Scalable Solutions",
    "24/7 Support",
    "Security First",
    "Custom Development",
    "Proven Results",
    "Future-Ready"
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions for businesses of all sizes. From AI analytics to cybersecurity, we deliver results that matter." />
        <meta name="keywords" content="AI solutions, IT solutions, cybersecurity, cloud infrastructure, micro SaaS, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI and IT solutions designed to transform your business 
              and drive innovation across every industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="mb-6">
                    <p className="text-purple-400 font-semibold text-lg">{solution.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={solution.href}
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our solutions can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
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
        </section>
      </div>
    </>
  );
};

export default SolutionsPage;
