import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function DigitalTransformationPage() {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Complete digital transformation services to modernize your business processes, systems, and customer experience." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Digital Transformation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business for the digital age with our comprehensive digital transformation services. 
              Modernize processes, enhance customer experience, and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Process Automation</h3>
              <p className="text-gray-300 mb-6">
                Automate repetitive tasks and streamline business processes for improved efficiency and accuracy.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Workflow Automation</li>
                <li>• Document Processing</li>
                <li>• Data Entry Automation</li>
                <li>• Approval Workflows</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Customer Experience</h3>
              <p className="text-gray-300 mb-6">
                Enhance customer interactions with digital tools and personalized experiences.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Customer Portals</li>
                <li>• Mobile Applications</li>
                <li>• Chatbots & AI Assistants</li>
                <li>• Personalization Engines</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Data Analytics</h3>
              <p className="text-gray-300 mb-6">
                Transform raw data into actionable insights for better decision-making and business intelligence.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Business Intelligence</li>
                <li>• Predictive Analytics</li>
                <li>• Real-time Dashboards</li>
                <li>• Data Visualization</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Legacy Modernization</h3>
              <p className="text-gray-300 mb-6">
                Modernize outdated systems and applications to improve performance and maintainability.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• System Migration</li>
                <li>• API Development</li>
                <li>• Microservices Architecture</li>
                <li>• Cloud Migration</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Digital Strategy</h3>
              <p className="text-gray-300 mb-6">
                Develop comprehensive digital strategies aligned with your business goals and objectives.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Digital Roadmap Planning</li>
                <li>• Technology Assessment</li>
                <li>• Change Management</li>
                <li>• ROI Analysis</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Integration Services</h3>
              <p className="text-gray-300 mb-6">
                Connect disparate systems and applications for seamless data flow and process integration.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• API Integration</li>
                <li>• System Integration</li>
                <li>• Data Synchronization</li>
                <li>• Third-party Integrations</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Digital Transformation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                <p className="text-gray-300">Analyze current state and identify transformation opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                <p className="text-gray-300">Develop comprehensive digital transformation roadmap.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Implementation</h3>
                <p className="text-gray-300">Execute transformation initiatives with agile methodology.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Optimization</h3>
                <p className="text-gray-300">Monitor, measure, and optimize digital solutions.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our digital transformation experts help you modernize your business and stay competitive in the digital marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </a>
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}