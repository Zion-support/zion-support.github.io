import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Target, Users, BarChart, Smartphone, Globe } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const transformationAreas = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce costs.',
      features: ['Workflow Automation', 'Document Management', 'Approval Processes', 'Task Automation']
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Develop comprehensive digital strategies aligned with your business objectives.',
      features: ['Digital Roadmap', 'Technology Assessment', 'Change Management', 'ROI Planning']
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Enhance customer interactions through digital channels and personalized experiences.',
      features: ['Omnichannel Strategy', 'Customer Journey Mapping', 'Personalization', 'Feedback Systems']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Leverage data to make informed decisions and drive business growth.',
      features: ['Data Strategy', 'Analytics Implementation', 'Business Intelligence', 'Predictive Analytics']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Develop mobile-first solutions to engage customers and employees anywhere.',
      features: ['Mobile Apps', 'Progressive Web Apps', 'Mobile Strategy', 'Cross-platform Development']
    },
    {
      icon: Globe,
      title: 'Digital Integration',
      description: 'Integrate disparate systems and create a unified digital ecosystem.',
      features: ['System Integration', 'API Development', 'Data Synchronization', 'Legacy Modernization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, strategy development, and technology integration." />
        <meta name="keywords" content="digital transformation, process automation, digital strategy, customer experience, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Transformation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business for the digital age with our comprehensive digital transformation solutions. 
                Drive growth, efficiency, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </a>
                <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Areas */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transformation Areas</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive digital transformation solutions across all business functions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{area.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{area.description}</p>
                    <ul className="space-y-2">
                      {area.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you navigate your digital transformation journey and unlock new opportunities.
            </p>
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
              Start Your Transformation
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;