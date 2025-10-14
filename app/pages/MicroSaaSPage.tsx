import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Custom Micro SaaS Development',
      description: 'Tailored micro SaaS solutions designed to solve specific business challenges with scalable architecture.',
      features: ['Custom development', 'Scalable architecture', 'API integration', 'Multi-tenant support']
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Micro SaaS',
      description: 'Intelligent micro SaaS applications powered by artificial intelligence and machine learning.',
      features: ['AI integration', 'Machine learning', 'Predictive analytics', 'Automated workflows']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting solutions for your micro SaaS applications.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Business intelligence']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Deployment & Scaling',
      description: 'Seamless deployment and automatic scaling solutions for your micro SaaS applications.',
      features: ['Cloud deployment', 'Auto-scaling', 'Load balancing', 'Performance optimization']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Online retail solutions' },
    { name: 'Healthcare', description: 'Medical practice management' },
    { name: 'Finance', description: 'Financial services tools' },
    { name: 'Education', description: 'Learning management systems' },
    { name: 'Real Estate', description: 'Property management tools' },
    { name: 'Manufacturing', description: 'Production optimization' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS development services. Build scalable, AI-powered micro SaaS applications for your business." />
        <meta name="keywords" content="micro SaaS, SaaS development, custom software, AI integration, cloud deployment" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build powerful, scalable micro SaaS applications that solve specific business challenges 
              and drive growth through innovative technology.
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Micro SaaS Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Micro SaaS Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Development</h3>
                <p className="text-gray-300">Fast time-to-market with our proven development methodologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Scalable Architecture</h3>
                <p className="text-gray-300">Built to grow with your business from day one</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Integration</h3>
                <p className="text-gray-300">Leverage artificial intelligence for enhanced functionality</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Build Your Micro SaaS?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your micro SaaS project and create a solution that drives real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
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
        </div>
      </div>
    </>
  );
};

export default MicroSaaSPage;