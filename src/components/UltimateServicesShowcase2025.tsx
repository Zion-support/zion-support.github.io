import React from 'react';

const UltimateServicesShowcase2025 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Ultimate Services Showcase 2025
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered platforms. 
            Transform your business with cutting-edge technology solutions designed for the future.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-6 mb-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Contact Zion Tech Group</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Phone</h3>
                <p className="text-lg">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Email</h3>
                <p className="text-lg">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Address</h3>
                <p className="text-lg">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-4">
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                Visit Our Website
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-4">
              Advanced artificial intelligence solutions for business automation and insights
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Predictive Analytics</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Automated Decision Making</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud & DevOps</h3>
            <p className="text-gray-300 mb-4">
              Scalable cloud infrastructure and modern development practices
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Cloud Migration</li>
              <li>• Container Orchestration</li>
              <li>• CI/CD Pipelines</li>
              <li>• Infrastructure as Code</li>
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cybersecurity</h3>
            <p className="text-gray-300 mb-4">
              Comprehensive security solutions to protect your digital assets
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Threat Detection</li>
              <li>• Identity Management</li>
              <li>• Compliance</li>
              <li>• Incident Response</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateServicesShowcase2025;