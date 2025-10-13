<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DevOpsServices() {
  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional DevOps services from Zion Tech Group"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">DevOps Services</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional DevOps services coming soon.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Server, Cloud, Zap, Shield, BarChart3, Users, ArrowRight } from 'lucide-react';
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                DevOps Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Accelerate your software delivery with our comprehensive DevOps solutions. 
              From CI/CD pipelines to infrastructure automation, we help you achieve faster, more reliable deployments.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipeline Setup</h3>
                <p className="text-gray-300 mb-4">
                  Automated build, test, and deployment pipelines that ensure code quality and faster releases.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code</h3>
                <p className="text-gray-300 mb-4">
                  Manage and provision infrastructure through code for consistency and scalability.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
                <p className="text-gray-300 mb-4">
                  Seamless migration to cloud platforms with optimized architecture and cost management.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automation Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive automation of deployment, monitoring, and operational tasks.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security Integration</h3>
                <p className="text-gray-300 mb-4">
                  Built-in security practices and compliance monitoring throughout the DevOps pipeline.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Real-time monitoring, logging, and analytics for better visibility and performance.
                </p>
                <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you build a robust DevOps culture and infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
      </div>
    </>
  );
}