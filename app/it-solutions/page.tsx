import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.',
      features: [
        'Server configuration and management',
        'Network design and implementation',
        'Hardware maintenance and upgrades',
        'Performance monitoring and optimization'
      ]
    },
    {
      icon: CloudIcon,
      title: 'Cloud Solutions',
      description: 'Complete cloud migration and management services for scalable, secure, and cost-effective solutions.',
      features: [
        'Cloud migration strategies',
        'Multi-cloud architecture',
        'Cost optimization',
        'Security and compliance'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your IT infrastructure from threats and vulnerabilities.',
      features: [
        'Threat detection and prevention',
        'Vulnerability assessments',
        'Security monitoring',
        'Incident response planning'
      ]
    },
    {
      icon: CpuChipIcon,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence into your existing IT infrastructure for enhanced capabilities.',
      features: [
        'Machine learning implementation',
        'Process automation',
        'Data analytics',
        'Predictive maintenance'
      ]
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: [
        'Data warehousing',
        'Business intelligence dashboards',
        'Real-time analytics',
        'Custom reporting solutions'
      ]
    },
    {
      icon: GlobeAltIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your IT infrastructure and processes.',
      features: [
        'Legacy system modernization',
        'Process automation',
        'Technology integration',
        'Change management'
      ]
    }
  ];

  const benefits = [
    '24/7 Expert Support',
    'Proactive Monitoring',
    'Scalable Solutions',
    'Cost Optimization',
    'Security Compliance',
    'Performance Optimization'
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud services, cybersecurity, and digital transformation for modern businesses." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud services, cybersecurity, digital transformation, IT consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From infrastructure management to AI integration, we provide end-to-end IT solutions 
              that keep your business running smoothly and securely in the digital age.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT solutions that keep your business running smoothly
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p className="text-gray-300">
                  Professional IT services that ensure your systems are always running at peak performance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you build a robust, secure, and scalable IT environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;