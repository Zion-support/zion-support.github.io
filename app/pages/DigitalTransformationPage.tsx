import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: UserGroupIcon,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with effective change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: TargetIcon,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Digital Assessment', 'Technology Roadmap', 'Implementation Planning', 'ROI Analysis']
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights to drive better business decisions.',
      features: ['Data Collection', 'Analytics Platforms', 'Dashboard Development', 'Insight Generation']
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to stay competitive in the digital age.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: CheckCircleIcon,
      title: 'Digital Maturity',
      description: 'Assess and improve your organization\'s digital maturity across all business functions.',
      features: ['Maturity Assessment', 'Gap Analysis', 'Improvement Plans', 'Progress Tracking']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes and technology infrastructure." />
        <meta name="keywords" content="digital transformation, process automation, change management, digital strategy, innovation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transformation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive strategies,
              modern technologies, and innovative solutions.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-emerald-500 transition-all duration-300 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our digital transformation experts can help you modernize your operations and stay competitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Transformation
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  Get Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;