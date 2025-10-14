import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CodeBracketIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  ServerIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'IT Solutions',
      description: 'Comprehensive IT services including system integration, network management, and technical support.',
      href: '/it-solutions',
      icon: CodeBracketIcon,
      features: ['System Integration', 'Network Management', 'Technical Support', 'Software Development']
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and ensure data protection.',
      href: '/cybersecurity',
      icon: ShieldCheckIcon,
      features: ['Threat Detection', 'Security Audits', 'Data Protection', 'Incident Response']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with high availability and performance.',
      href: '/cloud-infrastructure',
      icon: CloudIcon,
      features: ['Cloud Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization']
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS applications tailored to your specific business needs and requirements.',
      href: '/micro-saas-solutions',
      icon: ServerIcon,
      features: ['Custom Development', 'API Integration', 'User Management', 'Analytics Dashboard']
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and operations.',
      href: '/digital-transformation',
      icon: GlobeAltIcon,
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Integration']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, IT services, cybersecurity, cloud infrastructure, and digital transformation." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <Link
                    key={index}
                    to={solution.href}
                    className="group bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {solution.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-gray-400">
                          • {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-medium group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SolutionsPage;