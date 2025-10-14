import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Performance optimization']
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Complete management of your cloud infrastructure with 24/7 monitoring and support.',
      features: ['Server provisioning', 'Load balancing', 'Auto-scaling', 'Backup & recovery']
    },
    {
      icon: CpuChipIcon,
      title: 'Container Solutions',
      description: 'Modern containerized applications with Kubernetes orchestration and microservices architecture.',
      features: ['Docker containers', 'Kubernetes orchestration', 'Microservices', 'Service mesh']
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring solutions for your cloud infrastructure and applications.',
      features: ['Performance monitoring', 'Cost optimization', 'Usage analytics', 'Predictive scaling']
    }
  ];

  const features = [
    'Scalable Infrastructure',
    '24/7 Monitoring',
    'Auto-scaling',
    'High Availability',
    'Cost Optimization',
    'Security Compliance'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions from Zion Tech Group including migration, infrastructure management, and container solutions." />
        <meta name="keywords" content="cloud solutions, cloud migration, infrastructure management, container solutions, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions designed for scalability, security, and performance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-slate-800/30 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Cloud Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud solutions can transform your business infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Cloud Assessment
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;