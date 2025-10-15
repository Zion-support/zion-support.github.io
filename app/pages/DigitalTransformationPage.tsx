import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react;
=======
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with effective change management strategies.',
      features: ['Training Programs', 'Stakeholder Engagement', 'Communication Plans', 'Resistance Management']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital transformation roadmaps aligned with your business goals.',
      features: ['Technology Assessment', 'Gap Analysis', 'Implementation Roadmap', 'Success Metrics']
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Leverage data-driven insights to make informed business decisions and drive growth.',
      features: ['Data Collection', 'Analytics Setup', 'Dashboard Creation', 'Insight Generation']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to give your business a competitive edge.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Scalability Planning']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure the quality and reliability of your digital transformation initiatives.',
      features: ['Testing Strategies', 'Quality Metrics', 'Performance Monitoring', 'Continuous Improvement']
    }
  ];

  const benefits = [
    'Increased operational efficiency and productivity',
    'Improved customer experience and satisfaction',
    'Reduced operational costs and manual errors',
    'Better data-driven decision making',
    'Enhanced competitive advantage',
    'Future-ready business processes'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes and drive growth." />
        <meta name="keywords" content="digital transformation, process automation, change management, business modernization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive digital transformation services. 
            From strategy to implementation, we help you modernize and optimize your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Benefits of Digital Transformation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our digital transformation services can help modernize your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300">
                Start Transformation
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
<<<<<<< HEAD
                Get Assessment;
=======

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our digital transformation services." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with our comprehensive digital transformation services.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Strategy & Planning
                </h3>
                <p className="text-blue-700">
                  Develop a comprehensive digital transformation strategy tailored to your business.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Technology Implementation
                </h3>
                <p className="text-green-700">
                  Implement cutting-edge technologies to modernize your operations.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  Change Management
                </h3>
                <p className="text-purple-700">
                  Guide your team through the transformation process with expert support.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
                Get Assessment
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
              </button>
            </div>
          </div>
=======

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DigitalTransformationPage - Zion Tech Group</title>
        <meta name="description" content="DigitalTransformationPage - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">DigitalTransformationPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
        </div>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </div>;  );
}
export default DigitalTransformationPage;
=======
    </>
  );
};

export default DigitalTransformationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
    </div>
  );
};

export default DigitalTransformationPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
