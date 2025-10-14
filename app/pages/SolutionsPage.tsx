import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, natural language processing, and predictive analytics.',
      icon: CpuChipIcon,
      href: '/ai-solutions',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'IT Solutions',
      description: 'Complete IT infrastructure management, cloud migration, and technology consulting services.',
      icon: ServerIcon,
      href: '/it-solutions',
      features: [
        'Infrastructure Management',
        'Cloud Migration',
        'Network Security',
        'System Monitoring',
        'Backup & Recovery',
        '24/7 Support'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions across AWS, Azure, and Google Cloud platforms.',
      icon: CloudIcon,
      href: '/cloud-infrastructure',
      features: [
        'Multi-Cloud Architecture',
        'Auto-scaling Solutions',
        'Cost Optimization',
        'Security Configuration',
        'Disaster Recovery',
        'Performance Monitoring'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving cyber threats.',
      icon: ShieldCheckIcon,
      href: '/cybersecurity',
      features: [
        'Threat Detection',
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Firewall Setup',
        'Security Training'
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      icon: RocketLaunchIcon,
      href: '/digital-transformation',
      features: [
        'Process Automation',
        'Legacy Modernization',
        'Workflow Optimization',
        'Change Management',
        'Technology Integration',
        'Performance Monitoring'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS applications tailored to your specific business needs.',
      icon: CodeBracketIcon,
      href: '/micro-saas-solutions',
      features: [
        'Custom Development',
        'API Integration',
        'User Management',
        'Payment Processing',
        'Analytics Dashboard',
        'Mobile Apps'
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      description: 'AI-powered diagnostics, patient management, and medical data analysis',
      icon: '🏥'
    },
    {
      name: 'Finance',
      description: 'Fraud detection, risk assessment, and automated trading systems',
      icon: '💼'
    },
    {
      name: 'E-commerce',
      description: 'Personalized recommendations, inventory management, and customer analytics',
      icon: '🛒'
    },
    {
      name: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: '🏭'
    },
    {
      name: 'Education',
      description: 'Learning analytics, personalized education, and administrative automation',
      icon: '🎓'
    },
    {
      name: 'Real Estate',
      description: 'Property valuation, market analysis, and customer relationship management',
      icon: '🏠'
    }
  ];

  const benefits = [
    'Customized Solutions',
    'Expert Implementation',
    'Scalable Architecture',
    '24/7 Support',
    'Proven Results',
    'Continuous Optimization'
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, IT services, cloud infrastructure, cybersecurity, and digital transformation." />
        <meta name="keywords" content="solutions, AI solutions, IT solutions, cloud solutions, cybersecurity, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technology Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your business and drive growth 
                through innovation, efficiency, and cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end technology solutions tailored to your specific business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.href}
                  className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are designed to meet the unique needs of various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver measurable results that drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
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