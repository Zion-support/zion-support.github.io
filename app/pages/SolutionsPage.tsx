import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and threat monitoring.',
      features: ['Threat Detection', 'Security Audits', 'Incident Response', 'Compliance Management'],
      href: '/cybersecurity',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with secure and reliable cloud computing solutions.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
      href: '/cloud-solutions',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with comprehensive digital transformation services.',
      features: ['Process Automation', 'Legacy Modernization', 'Data Strategy', 'Change Management'],
      href: '/digital-transformation',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, patient management, and medical research solutions.',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, algorithmic trading, and risk management systems.',
      icon: '💰'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: '🏭'
    },
    {
      name: 'Retail',
      description: 'Personalized shopping experiences, inventory management, and demand forecasting.',
      icon: '🛍️'
    },
    {
      name: 'Education',
      description: 'Learning management systems, student analytics, and virtual classrooms.',
      icon: '🎓'
    },
    {
      name: 'Government',
      description: 'Citizen services, data analytics, and public safety solutions.',
      icon: '🏛️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, cybersecurity, cloud computing, and digital transformation." />
        <meta name="keywords" content="solutions, AI, cybersecurity, cloud computing, digital transformation, technology" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Technology <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business, 
              enhance security, and drive innovation across all industries.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={solution.href} 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-colors group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
                <p className="text-gray-300">Years of experience delivering successful technology solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
                <p className="text-gray-300">Rigorous testing and quality control processes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                <p className="text-gray-300">Solutions that grow with your business needs</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific needs and create a customized solution that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
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

export default SolutionsPage;