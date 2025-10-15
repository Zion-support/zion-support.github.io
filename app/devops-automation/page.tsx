import React from 'react';
import { Helmet } from 'react-helmet-async';

const DevOpsAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DevOps & Automation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive DevOps and automation services including CI/CD pipelines, infrastructure as code, monitoring, and deployment automation." />
        <meta name="keywords" content="DevOps, automation, CI/CD, infrastructure as code, deployment, monitoring, cloud automation" />
        <meta property="og:title" content="DevOps & Automation - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive DevOps and automation services for modern software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/devops-automation" />
        <link rel="canonical" href="https://ziontechgroup.com/devops-automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="text-8xl mb-8">⚙️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">DevOps & Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Streamline your development and deployment processes with our comprehensive DevOps and automation solutions. 
              Accelerate delivery while maintaining quality and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">CI/CD Pipelines</h3>
              <p className="text-gray-300">
                Automated build, test, and deployment pipelines for faster, more reliable software delivery.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">🏗️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure as Code</h3>
              <p className="text-gray-300">
                Manage and provision infrastructure through code for consistency and repeatability.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Monitoring & Alerting</h3>
              <p className="text-gray-300">
                Comprehensive monitoring solutions with real-time alerts and performance analytics.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Automate Your DevOps?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your development workflow with our expert DevOps and automation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+13024640950"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                📞 Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsAutomationPage;