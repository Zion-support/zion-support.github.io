'use client';
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
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaaSProducts = [
    {
      title: "AI Content Generator",
      description: "Automated content creation for blogs, social media, and marketing materials",
      icon: CpuChipIcon,
      price: "$99/month",
      setupFee: "$500",
      benefits: ["Save 80% time", "Consistent quality", "SEO optimized"],
      useCases: ["Blog writing", "Social media", "Email campaigns"],
      href: "/ai-content-generator"
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time business intelligence and performance tracking",
      icon: ChartBarIcon,
      price: "$149/month",
      setupFee: "$800",
      benefits: ["Real-time insights", "Custom reports", "Predictive analytics"],
      useCases: ["Sales tracking", "Marketing ROI", "Customer behavior"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot for 24/7 customer service automation",
      icon: ShieldCheckIcon,
      price: "$199/month",
      setupFee: "$1,000",
      benefits: ["24/7 availability", "Instant responses", "Multilingual support"],
      useCases: ["Customer service", "Lead qualification", "FAQ handling"],
      href: "/ai-customer-support-bot"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our range of micro SaaS solutions designed to automate and optimize your business processes." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, software as a service" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, focused software solutions that solve specific business problems with AI-powered automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each solution is designed to address specific business challenges with cutting-edge AI technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{product.price}</div>
                    <div className="text-sm text-gray-400">Setup fee: {product.setupFee}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, idx) => (
                        <span key={idx} className="bg-slate-700 text-xs px-3 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={product.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our micro SaaS solutions can help you automate processes, 
              increase efficiency, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;