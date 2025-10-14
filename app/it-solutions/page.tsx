import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server Setup', 'Network Configuration', 'Performance Monitoring', '24/7 Support'],
      pricing: 'Starting at $299/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your business from cyber threats.',
      features: ['Firewall Setup', 'Antivirus Management', 'Security Audits', 'Incident Response'],
      pricing: 'Starting at $199/month'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime.',
      features: ['Assessment', 'Migration Planning', 'Data Transfer', 'Post-Migration Support'],
      pricing: 'Starting at $499/project'
    },
    {
      icon: CogIcon,
      title: 'System Integration',
      description: 'Connect and integrate your existing systems for better efficiency.',
      features: ['API Development', 'Database Integration', 'Workflow Automation', 'Custom Solutions'],
      pricing: 'Starting at $399/project'
    },
    {
      icon: ChartBarIcon,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
      pricing: 'Starting at $150/hour'
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Custom web applications and websites for your business needs.',
      features: ['Custom Development', 'Responsive Design', 'SEO Optimization', 'Maintenance'],
      pricing: 'Starting at $2,999/project'
    }
  ];

  const benefits = [
    'Expert IT professionals with years of experience',
    '24/7 technical support and monitoring',
    'Scalable solutions that grow with your business',
    'Proactive maintenance and updates',
    'Cost-effective solutions tailored to your budget',
    'Compliance with industry standards and regulations'
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud migration, and system integration." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud migration, system integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services to keep your business running smoothly and securely. 
              From infrastructure management to cybersecurity, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT solutions designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{solution.pricing}</span>
                    <Link 
                      to="/contact" 
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300">
                We provide reliable, secure, and scalable IT solutions that help your business thrive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can help improve your business operations and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Pricing
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;