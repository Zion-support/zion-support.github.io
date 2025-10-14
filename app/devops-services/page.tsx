import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Server, Cloud, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group | CI/CD, Automation & Cloud Infrastructure</title>
        <meta name="description" content="Professional DevOps services including CI/CD pipeline setup, infrastructure automation, cloud migration, and continuous monitoring solutions for modern businesses." />
        <meta name="keywords" content="DevOps services, CI/CD, infrastructure automation, cloud migration, continuous monitoring, deployment automation" />
        <link rel="canonical" href="https://ziontechgroup.com/devops-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              DevOps Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Accelerate your software delivery with our comprehensive DevOps solutions. 
              From CI/CD pipelines to cloud infrastructure, we help you achieve faster, 
              more reliable deployments.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">CI/CD Pipeline Setup</h3>
              </div>
              <p className="text-gray-300">
                Automated build, test, and deployment pipelines for faster, more reliable software delivery.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Infrastructure as Code</h3>
              </div>
              <p className="text-gray-300">
                Manage and provision infrastructure through code for consistency and scalability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Cloud Migration</h3>
              </div>
              <p className="text-gray-300">
                Seamless migration to cloud platforms with minimal downtime and maximum efficiency.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Automation</h3>
              </div>
              <p className="text-gray-300">
                Automate repetitive tasks and processes to improve efficiency and reduce errors.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Security Integration</h3>
              </div>
              <p className="text-gray-300">
                Integrate security practices throughout your development and deployment lifecycle.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <BarChart3 className="w-8 h-8 text-indigo-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Monitoring & Analytics</h3>
              </div>
              <p className="text-gray-300">
                Comprehensive monitoring and analytics to ensure optimal performance and reliability.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team help you implement modern DevOps practices 
              that will accelerate your development and improve your deployment reliability.
            </p>
            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsServicesPage;