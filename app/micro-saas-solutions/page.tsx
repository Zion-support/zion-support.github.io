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
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Analytics',
      description: 'Intelligent data analysis and insights for small to medium businesses.',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports'],
      pricing: 'Starting at $99/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Management',
      description: 'Comprehensive security monitoring and threat detection for growing businesses.',
      features: ['24/7 Monitoring', 'Threat Detection', 'Compliance Reports', 'Incident Response'],
      pricing: 'Starting at $149/month'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed for micro SaaS applications.',
      features: ['Auto-scaling', 'Load Balancing', 'Database Management', 'CDN Integration'],
      pricing: 'Starting at $199/month'
    },
    {
      icon: ChartBarIcon,
      title: 'Business Intelligence',
      description: 'Advanced reporting and analytics to drive business growth.',
      features: ['Custom Reports', 'Data Visualization', 'KPI Tracking', 'Trend Analysis'],
      pricing: 'Starting at $79/month'
    },
    {
      icon: GlobeAltIcon,
      title: 'API Management',
      description: 'Secure and scalable API solutions for micro SaaS platforms.',
      features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Documentation'],
      pricing: 'Starting at $129/month'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Growth Automation',
      description: 'Automated marketing and customer acquisition tools.',
      features: ['Email Campaigns', 'Lead Scoring', 'Customer Onboarding', 'Retention Tools'],
      pricing: 'Starting at $89/month'
    }
  ];

  const benefits = [
    'Cost-effective solutions for small businesses',
    'Rapid deployment and implementation',
    'Scalable architecture for growth',
    '24/7 technical support',
    'Regular updates and improvements',
    'Custom integrations available'
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions designed for small to medium businesses. Cost-effective, scalable, and powerful." />
        <meta name="keywords" content="micro SaaS, small business solutions, SaaS development, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Specialized software solutions designed for small to medium businesses. 
              Get enterprise-level features at micro SaaS prices with our tailored solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
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
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of micro SaaS solutions designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
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
                    <span className="text-purple-400 font-semibold">{solution.pricing}</span>
                    <Link 
                      to="/contact" 
                      className="text-purple-400 hover:text-purple-300 font-semibold flex items-center"
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
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300">
                We understand the unique challenges faced by small to medium businesses and have designed our solutions accordingly.
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
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss which micro SaaS solution is right for your business. 
            Our experts are ready to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
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

export default MicroSaaSSolutionsPage;