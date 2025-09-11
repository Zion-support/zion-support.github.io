import React from 'react';

const ServicesAdvertising: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Comprehensive IT Services & Solutions
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Professional technology services designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning Services */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">AI & Machine Learning</h3>
            <p className="text-slate-300 mb-4">
              Custom AI solutions, machine learning models, and intelligent automation.
            </p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Custom AI Development</li>
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision Solutions</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
            <p className="text-slate-300 mb-4">
              Scalable cloud infrastructure and streamlined development operations.
            </p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Cloud Migration</li>
              <li>• Container Orchestration</li>
              <li>• CI/CD Pipeline Setup</li>
              <li>• Infrastructure as Code</li>
            </ul>
          </div>

          {/* Cybersecurity */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
            <p className="text-slate-300 mb-4">
              Comprehensive security solutions to protect your digital assets.
            </p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Security Audits</li>
              <li>• Penetration Testing</li>
              <li>• Compliance Management</li>
              <li>• Incident Response</li>
            </ul>
          </div>

          {/* Blockchain & Web3 */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Blockchain & Web3</h3>
            <p className="text-slate-300 mb-4">
              Decentralized applications and blockchain technology solutions.
            </p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Smart Contract Development</li>
              <li>• DeFi Applications</li>
              <li>• NFT Platforms</li>
              <li>• Blockchain Integration</li>
            </ul>
          </div>

          {/* Data Analytics */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-slate-300 mb-4">
              Transform your data into actionable business insights.
            </p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Business Intelligence</li>
              <li>• Data Visualization</li>
              <li>• Predictive Analytics</li>
              <li>• Real-time Dashboards</li>
            </ul>
          </div>

          {/* Mobile Development */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white mb-4">Mobile Development</h3>
            <p className="text-slate-300 mb-4">
              Native and cross-platform mobile applications.
            </p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• iOS & Android Apps</li>
              <li>• React Native Development</li>
              <li>• Flutter Applications</li>
              <li>• Progressive Web Apps</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive IT services and take your business to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesAdvertising;