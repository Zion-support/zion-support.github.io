import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  CogIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: CogIcon,
      title: 'AI-Powered Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Intelligence', 'Exception Handling'],
      href: '/ai-automation'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['Cloud Migration', 'Infrastructure Management', 'Scalability', 'Cost Optimization'],
      href: '/cloud-infrastructure'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance'],
      href: '/cybersecurity'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable business insights.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      href: '/ai-analytics'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Solutions',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization'],
      href: '/mobile-development'
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO', 'Accessibility'],
      href: '/web-development'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered healthcare solutions for better patient care',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Secure fintech solutions and fraud detection systems',
      icon: '💳'
    },
    {
      name: 'E-commerce',
      description: 'Complete e-commerce platforms with AI recommendations',
      icon: '🛒'
    },
    {
      name: 'Manufacturing',
      description: 'IoT and AI solutions for smart manufacturing',
      icon: '🏭'
    },
    {
      name: 'Education',
      description: 'Learning management systems and educational AI tools',
      icon: '🎓'
    },
    {
      name: 'Real Estate',
      description: 'Property management and virtual tour solutions',
      icon: '🏠'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - AI & IT Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT solutions for businesses. From automation to cloud infrastructure, we provide tailored solutions for every industry." />
        <meta name="keywords" content="AI solutions, IT solutions, automation, cloud infrastructure, cybersecurity, data analytics, mobile development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business. 
              From automation to cloud infrastructure, we have the expertise to deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI and IT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Link
                    key={index}
                    to={solution.href}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored solutions for different industries and business verticals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Implement Your Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your specific requirements and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SolutionsPage;