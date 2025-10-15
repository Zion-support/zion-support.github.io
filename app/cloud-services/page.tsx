import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Professional cloud services including migration, infrastructure, and security solutions for modern businesses."
        />
        <meta 
          name="keywords" 
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. 
              From migration to optimization, we provide end-to-end cloud services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamlessly migrate your applications and data to the cloud with minimal downtime.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cloud Architecture Design</li>
                <li>• Auto-scaling Solutions</li>
                <li>• Performance Optimization</li>
                <li>• 24/7 Monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cloud Security</h3>
              <p className="text-gray-300 mb-4">
                Advanced security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Security Assessment</li>
                <li>• Compliance Management</li>
                <li>• Data Encryption</li>
                <li>• Threat Detection</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Cloud Optimization</h3>
              <p className="text-gray-300 mb-4">
                Optimize your cloud resources for maximum performance and cost efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cost Optimization</li>
                <li>• Performance Tuning</li>
                <li>• Resource Management</li>
                <li>• Monitoring & Analytics</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Our Cloud Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast Migration</h3>
                <p className="text-gray-400 text-sm">Quick and efficient cloud migration process</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure</h3>
                <p className="text-gray-400 text-sm">Enterprise-grade security measures</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Scalable</h3>
                <p className="text-gray-400 text-sm">Grow with your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-400 text-sm">Optimize costs and maximize value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;