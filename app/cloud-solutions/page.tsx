import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudSolutionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions for modern businesses. Scalable, secure, and cost-effective cloud services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud infrastructure solutions. 
              Scalable, secure, and cost-effective cloud services designed for modern enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-6">
                Seamlessly migrate your applications and data to the cloud with zero downtime and maximum security.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AWS, Azure, GCP migration</li>
                <li>• Data migration strategies</li>
                <li>• Application modernization</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud Architecture</h3>
              <p className="text-gray-300 mb-6">
                Design and implement robust cloud architectures that scale with your business needs.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Microservices architecture</li>
                <li>• Serverless solutions</li>
                <li>• Container orchestration</li>
                <li>• Auto-scaling systems</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Cloud Security</h3>
              <p className="text-gray-300 mb-6">
                Protect your cloud infrastructure with enterprise-grade security solutions and compliance.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Identity and access management</li>
                <li>• Data encryption</li>
                <li>• Security monitoring</li>
                <li>• Compliance frameworks</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Cloud Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you build a scalable, secure, and cost-effective cloud solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;