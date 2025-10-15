import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, Globe, BarChart3, Users } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Professional cloud services including migration, infrastructure, security, and optimization solutions for modern businesses."
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
              Transform your business with our comprehensive cloud solutions. From migration to optimization, 
              we provide end-to-end cloud services that scale with your needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration to the cloud with minimal downtime and maximum efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cloud Architecture Design</li>
                <li>• Auto-scaling Solutions</li>
                <li>• Performance Optimization</li>
                <li>• 24/7 Monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
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
              <Zap className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-green-400">Cloud Optimization</h3>
              <p className="text-gray-300 mb-4">
                Optimize your cloud resources for better performance and cost efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cost Optimization</li>
                <li>• Performance Tuning</li>
                <li>• Resource Management</li>
                <li>• Automated Scaling</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Globe className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Multi-Cloud Strategy</h3>
              <p className="text-gray-300 mb-4">
                Leverage multiple cloud providers for maximum flexibility and redundancy.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• AWS Solutions</li>
                <li>• Azure Integration</li>
                <li>• Google Cloud</li>
                <li>• Hybrid Cloud</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <BarChart3 className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Cloud Analytics</h3>
              <p className="text-gray-300 mb-4">
                Advanced analytics and monitoring for your cloud infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time Monitoring</li>
                <li>• Performance Analytics</li>
                <li>• Cost Analysis</li>
                <li>• Predictive Insights</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <Users className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Cloud Support</h3>
              <p className="text-gray-300 mb-4">
                Dedicated support and maintenance for your cloud infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 24/7 Support</li>
                <li>• Proactive Monitoring</li>
                <li>• Incident Response</li>
                <li>• Training & Documentation</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you migrate, optimize, and secure your cloud environment 
              for maximum performance and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;