import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c

const RoboticProcessAutomationPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Robotic Process Automation (RPA) Solutions - Zion Tech Group</title>
        <meta name="description" content="Automate repetitive business processes with our advanced RPA solutions. Increase efficiency, reduce errors, and free up your team for higher-value work." />
        <meta name="keywords" content="robotic process automation, RPA solutions, business process automation, workflow automation, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/robotic-process-automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Robotic Process Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate repetitive business processes with our advanced RPA solutions. 
              Increase efficiency, reduce errors, and free up your team for higher-value work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-4">Process Automation</h3>
              <p className="text-gray-300">
                Automate repetitive tasks across multiple systems and applications seamlessly.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Processing</h3>
              <p className="text-gray-300">
                Automate data entry, validation, and processing tasks with high accuracy.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-white mb-4">Email Automation</h3>
              <p className="text-gray-300">
                Automate email processing, responses, and follow-up workflows.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">Document Processing</h3>
              <p className="text-gray-300">
                Automate document creation, formatting, and distribution processes.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Financial Automation</h3>
              <p className="text-gray-300">
                Automate invoice processing, payment reconciliation, and financial reporting.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300">
                Generate automated reports and analytics from multiple data sources.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Automate Your Processes?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
=======
      <SEOHead
        title="Robotic Process Automation (RPA) - Zion Tech Group"
        description="Automate repetitive business processes with RPA solutions. Improve efficiency, reduce errors, and free up human resources for strategic tasks."
        keywords="robotic process automation, RPA, business process automation, workflow automation, digital transformation, process optimization"
        canonicalUrl="https://ziontechgroup.com/robotic-process-automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Robotic Process Automation (RPA)
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate repetitive business processes with intelligent RPA solutions. Improve efficiency, reduce errors, and free up human resources for strategic tasks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">RPA Capabilities</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Data entry and processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Document processing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Email and communication automation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Report generation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  System integration
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Business Benefits</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Cost reduction and efficiency
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Error reduction and accuracy
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  24/7 operation capability
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Scalable automation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Compliance and audit trails
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">RPA Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Finance & Accounting</h3>
                <p className="text-gray-300">Invoice processing, financial reporting, and reconciliation.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Human Resources</h3>
                <p className="text-gray-300">Employee onboarding, payroll processing, and benefits administration.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛒</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Customer Service</h3>
                <p className="text-gray-300">Order processing, customer inquiries, and support ticket management.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="/contact?service=robotic-process-automation"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
            >
              Automate Your Processes
            </a>
          </div>
>>>>>>> 3e7075f2d303b69bada60593f443b930d055071c
        </div>
      </div>
    </>
  );
};

export default RoboticProcessAutomationPage;