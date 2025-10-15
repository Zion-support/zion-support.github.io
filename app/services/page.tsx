import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  BoltIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesPage = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for business automation and optimization.',
      icon: CpuChipIcon,
      gradient: 'from-blue-500 to-purple-600',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-solutions'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for modern business needs and digital transformation.',
      icon: CloudIcon,
      gradient: 'from-green-500 to-blue-600',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Serverless Architecture', 'Cloud Migration'],
      href: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and infrastructure.',
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-pink-600',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for ultra-fast connectivity.',
      icon: BoltIcon,
      gradient: 'from-yellow-500 to-orange-600',
      features: ['Network Design', 'IoT Integration', 'Edge Computing', 'Performance Optimization'],
      href: '/5g-solutions'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      icon: ChartBarIcon,
      gradient: 'from-purple-500 to-indigo-600',
      features: ['Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Predictive Modeling'],
      href: '/data-analytics'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      icon: CogIcon,
      gradient: 'from-teal-500 to-cyan-600',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Technology Strategy'],
      href: '/digital-transformation'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cloud infrastructure, cybersecurity, 5G technology, and digital transformation." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation 
                and drive business growth across all industries.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <service.icon className="h-12 w-12 text-blue-400" />
                      <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and maximum value.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'We analyze your business needs and technical requirements to understand your goals.'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'We develop a comprehensive strategy and roadmap tailored to your specific objectives.'
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Our expert team implements the solution with regular updates and quality assurance.'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'We continuously monitor and optimize the solution to ensure peak performance.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;