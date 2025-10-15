<<<<<<< HEAD
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Link } from 'react-router-dom';'
import {
  ArrowPathIcon,
  UserGroupIcon,
  CloudIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';'
const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: ArrowPathIcon,
      title: 'Process Automation','
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.','
      features: [
        'Workflow Analysis','
        'Process Mapping','
        'Automation Implementation','
        'Performance Monitoring''
      ]
    },
    {
      icon: UserGroupIcon,
      title: 'Change Management','
      description: 'Guide your team through digital transformation with comprehensive change management strategies.','
      features: [
        'Training Programs','
        'Change Communication','
        'Adoption Strategies','
        'Performance Metrics''
      ]
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration','
      description: 'Migrate your infrastructure to the cloud for improved scalability, security, and cost efficiency.','
      features: [
        'Cloud Strategy','
        'Data Migration','
        'Security Implementation','
        'Cost Optimization''
      ]
    },
    {
      icon: CpuChipIcon,
      title: 'AI Integration','
      description: 'Integrate artificial intelligence into your business processes for enhanced decision-making and automation.','
      features: [
        'AI Strategy','
        'Model Development','
        'Integration Services','
        'Performance Monitoring''
      ]
    }
  ];
  const benefits = [
    {
      title: 'Increased Efficiency','
      description: 'Streamline operations and reduce manual work','
      icon: ChartBarIcon,
      value: '40%''
    },
    {
      title: 'Cost Reduction','
      description: 'Optimize processes and reduce operational costs','
      icon: ChartBarIcon,
      value: '30%''
    },
    {
      title: 'Better Customer Experience','
      description: 'Improve customer satisfaction and engagement','
      icon: ChartBarIcon,
      value: '85%''
    },
    {
      title: 'Data-Driven Decisions','
      description: 'Make informed decisions with real-time analytics','
      icon: ChartBarIcon,
      value: '90%''
    }
  ];
  return (
    <></>
      <Helmet></Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Process automation, cloud migration, AI integration, and change management." />"
        <meta name="keywords" content="digital transformation, process automation, cloud migration, AI integration, change management, business transformation" />"
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">"
        <div className="absolute inset-0 opacity-20">"
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>"
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">"
          <div className="max-w-4xl mx-auto">"
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">"
              Digital Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">"
              Transform Your Business for the Digital Age
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">"
              Embrace digital transformation with our comprehensive services that modernize your business processes,
              improve efficiency, and drive growth in today's competitive landscape.'
            </p>
            <Link
              to="/contact""
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2""
            >
              Start Your Transformation
              <ArrowRightIcon className="w-5 h-5" />"
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-slate-900">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Comprehensive solutions to modernize your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">"
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">"
                <div className="flex items-center mb-6">"
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">"
                    <service.icon className="w-8 h-8 text-white" />"
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>"
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">"
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">"
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />"
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact""
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all""
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />"
                </Link>
=======
import SEOHead from '../components/SEOHead';

const DigitalTransformationPage: React.FC = () => {}
  return ()
    <>{}</>
      <SEOHead>
        title="DigitalTransformationPage - Zion Tech Group"

        description="Zion Tech Group DigitalTransformationPage page"

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="DigitalTransformationPage - Zion Tech Group - Zion Tech Group"";
        description="Zion Tech Group DigitalTransformationPage page"";

      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">DigitalTransformationPage - Zion Tech Group</h1>";
          <p className ="text-gray-300">Coming soon...</p>";
        </div>
      </div>
    </>
  ),
};

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to modernize your business and drive digital growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => ()}
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => ()}
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                  <button className="text-purple-600 hover:text-purple-800 font-medium">
                    Learn More
                  </button>
                </div>
>>>>>>> main
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
              Transformation Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              See the measurable impact of digital transformation on your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">"
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">"
                  <benefit.icon className="w-10 h-10 text-white" />"
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-2">{benefit.value}</div>"
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>"
                <p className="text-gray-300">{benefit.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-slate-900">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
          <div className="text-center mb-16">"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
              Our Transformation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              A structured approach to ensure successful digital transformation
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">"
            {[
              { step: '01', title: 'Assessment', description: 'Analyze current processes and identify transformation opportunities' },'
              { step: '02', title: 'Strategy', description: 'Develop a comprehensive digital transformation roadmap' },'
              { step: '03', title: 'Implementation', description: 'Execute the transformation plan with expert guidance' },'
              { step: '04', title: 'Optimization', description: 'Monitor performance and continuously improve processes' }'
            ].map((phase, index) => (
              <div key={index} className="text-center">"
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">"
                  <span className="text-2xl font-bold text-white">{phase.step}</span>"
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>"
                <p className="text-gray-300">{phase.description}</p>"
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">"
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">"
            Let's discuss how digital transformation can drive your business forward'
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <Link
              to="/contact""
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300""
            >
              Start Your Journey
            </Link>
            <Link
              to="/demo""
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300""
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>)
    </>)
  );
};
export default DigitalTransformationPage;
'
=======

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let our digital transformation experts help you modernize your business and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Your Transformation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

>>>>>>> main
