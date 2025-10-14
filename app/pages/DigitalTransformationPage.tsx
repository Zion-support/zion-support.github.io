import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowPathIcon, 
  UserGroupIcon, 
  TargetIcon, 
  ChartBarIcon, 
  LightBulbIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: ArrowPathIcon,
      title: 'Process Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow Automation', 'Document Processing', 'Data Integration', 'Task Optimization']
    },
    {
      icon: UserGroupIcon,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with expert change management.',
      features: ['Training Programs', 'Adoption Strategies', 'Communication Plans', 'Support Systems']
    },
    {
      icon: TargetIcon,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital transformation strategies aligned with your business goals.',
      features: ['Technology Roadmap', 'Digital Strategy', 'Implementation Planning', 'Performance Metrics']
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Reporting Systems']
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to drive business growth.',
      features: ['Technology Assessment', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: CheckCircleIcon,
      title: 'Quality Assurance',
      description: 'Ensure the success of your digital transformation with comprehensive QA processes.',
      features: ['Testing Strategies', 'Performance Monitoring', 'User Acceptance', 'Continuous Improvement']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes and drive growth with Zion Tech Group." />
        <meta name="keywords" content="digital transformation, process automation, change management, business modernization, Zion Tech Group" />
        <meta property="og:title" content="Digital Transformation - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive digital transformation services to modernize your business processes and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/digital-transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Transformation
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge digital solutions. We help you modernize processes, 
                improve efficiency, and drive innovation across your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our digital transformation experts help you modernize your business and stay competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Transformation
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;
