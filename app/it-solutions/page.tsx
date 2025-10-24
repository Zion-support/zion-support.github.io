import React from 'react';
import Link from 'next/link';
import { Server, Shield, Settings, CheckCircle, ArrowRight, Users, Globe, Database, Cloud, Zap, Target } from 'lucide-react';

const ITSolutionsPage = () => {
  const solutions = [
    {
      icon: Server,
      title: 'Infrastructure Solutions',
      description: 'Comprehensive IT infrastructure solutions designed for scalability and reliability.',
      features: ['Server Solutions', 'Network Design', 'Storage Solutions', 'Backup & Recovery'],
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Advanced security solutions to protect your IT infrastructure and data.',
      features: ['Firewall Solutions', 'Intrusion Detection', 'Security Monitoring', 'Compliance'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud-based solutions for modern, scalable IT infrastructure.',
      features: ['Cloud Migration', 'Hybrid Cloud', 'Cloud Management', 'Cost Optimization'],
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of various IT systems and applications.',
      features: ['API Integration', 'Data Integration', 'System Migration', 'Legacy Modernization'],
    },
  ];

  const technologies = [
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Robust database solutions for data management and analytics.',
    },
    {
      icon: Globe,
      title: 'Web Solutions',
      description: 'Modern web applications and websites for your business.',
    },
    {
      icon: Zap,
      title: 'Performance Solutions',
      description: 'Optimize your IT systems for maximum performance.',
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored IT solutions for your specific business needs.',
    },
  ];

  const benefits = [
    'Scalable Solutions',
    'Enhanced Security',
    'Cost Efficiency',
    'Improved Performance',
    'Expert Support',
    'Future-Proof Technology',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT <span className="text-blue-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business needs. From infrastructure 
              to security, we provide end-to-end IT solutions that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to solve complex business challenges.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <solution.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver the best IT solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <tech.icon className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Professional IT solutions that deliver results and drive business success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for IT Solutions?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get IT Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;