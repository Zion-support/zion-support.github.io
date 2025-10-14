import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeAltIcon,
  CogIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: GlobeAltIcon,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategy tailored to your business goals.'
    },
    {
      icon: CogIcon,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure for scalability and efficiency.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Modernize operations, improve efficiency, and drive growth." />
        <meta name="keywords" content="digital transformation, business modernization, process automation, cloud migration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with comprehensive digital solutions that modernize operations, 
              improve efficiency, and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link 
                to="/services" 
                className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Digital Transformation Services</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We help businesses embrace digital technologies to improve operations, enhance customer experience, and drive innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link
                    to="/contact"
                    className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Our Transformation Process</h2>
              <p className="text-lg text-gray-300">A structured approach to ensure successful digital transformation.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                <p className="text-gray-300 text-sm">Analyze current systems and identify transformation opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
                <p className="text-gray-300 text-sm">Develop a comprehensive digital transformation roadmap.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
                <p className="text-gray-300 text-sm">Execute the transformation with minimal disruption to operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
                <p className="text-gray-300 text-sm">Continuously monitor and optimize for maximum results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Digital Transformation Services?</h2>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span>Proven expertise in modern technologies</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span>Minimal disruption to your operations</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span>Scalable solutions that grow with your business</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3" />
                    <span>Ongoing support and optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-cyan-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
                <p className="mb-6">
                  Let's discuss how digital transformation can revolutionize your business operations.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Digital Transformation Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't let outdated systems hold your business back. Embrace the future with our digital transformation solutions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Begin Transformation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}