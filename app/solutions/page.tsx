import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SignalIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      category: 'AI Solutions',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      items: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Automation',
        'Intelligent Chatbots'
      ],
      href: '/ai-solutions'
    },
    {
      category: 'Cloud Infrastructure',
      icon: CloudIcon,
      color: 'from-blue-500 to-cyan-500',
      items: [
        'Cloud Migration',
        'Infrastructure Management',
        'Security & Compliance',
        'Cost Optimization',
        'Multi-cloud Strategy',
        'Disaster Recovery'
      ],
      href: '/cloud-infrastructure'
    },
    {
      category: 'Cybersecurity',
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-emerald-500',
      items: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Penetration Testing',
        'Security Training'
      ],
      href: '/cybersecurity'
    },
    {
      category: 'Data Analytics',
      icon: ChartBarIcon,
      color: 'from-orange-500 to-red-500',
      items: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Custom Dashboards',
        'Data Warehousing',
        'Predictive Modeling'
      ],
      href: '/analytics'
    },
    {
      category: 'Digital Transformation',
      icon: GlobeAltIcon,
      color: 'from-indigo-500 to-purple-500',
      items: [
        'Process Automation',
        'Digital Strategy',
        'Technology Integration',
        'Change Management',
        'Workflow Optimization',
        'Legacy System Modernization'
      ],
      href: '/digital-transformation'
    },
    {
      category: '5G Solutions',
      icon: SignalIcon,
      color: 'from-teal-500 to-blue-500',
      items: [
        '5G Network Design',
        'Edge Computing',
        'IoT Integration',
        'Mobile Applications',
        'Network Optimization',
        'Private Networks'
      ],
      href: '/5g-solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including AI, cloud infrastructure, cybersecurity, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI solutions, cloud infrastructure, cybersecurity, digital transformation, data analytics, 5G solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
                and accelerate digital transformation across all industries.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.category}</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {solution.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={solution.href}
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you choose the right solutions for your specific needs
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
      </div>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;