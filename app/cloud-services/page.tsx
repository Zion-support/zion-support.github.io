import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Infrastructure</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Expert cloud migration, infrastructure management, and security solutions from Zion Tech Group."
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
              Transform your business with our comprehensive cloud services. Expert cloud migration, 
              infrastructure management, and security solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration to cloud platforms with zero downtime and maximum efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• AWS Migration</li>
                <li>• Azure Migration</li>
                <li>• Google Cloud Migration</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Infrastructure Management</h3>
              <p className="text-gray-300 mb-4">
                Complete cloud infrastructure setup, monitoring, and optimization services.
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
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started with Cloud Services
            </button>
          </div>
        </div>
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your cloud strategy and help you choose the best platform for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Cloud Migration
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Get Free Assessment
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;
