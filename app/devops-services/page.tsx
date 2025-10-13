import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Shield, Zap, Database, Monitor, GitBranch } from 'lucide-react';

export default function DevOpsServicesPage() {
  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services including CI/CD, infrastructure automation, and cloud deployment solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  DevOps Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your development and deployment processes with our comprehensive DevOps solutions. 
                From CI/CD pipelines to infrastructure automation, we help you achieve faster, more reliable software delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
                <p className="text-gray-300 mb-4">
                  Automated continuous integration and deployment pipelines for faster, more reliable releases.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Jenkins, GitLab CI, GitHub Actions</li>
                  <li>• Automated testing and quality gates</li>
                  <li>• Blue-green and canary deployments</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Cloud className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable and secure cloud infrastructure setup and management across all major providers.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• AWS, Azure, Google Cloud</li>
                  <li>• Infrastructure as Code (IaC)</li>
                  <li>• Auto-scaling and load balancing</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security practices and compliance frameworks for your DevOps environment.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Security scanning and monitoring</li>
                  <li>• Compliance automation</li>
                  <li>• Secrets management</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automation</h3>
                <p className="text-gray-300 mb-4">
                  Complete automation of your development, testing, and deployment processes.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Infrastructure provisioning</li>
                  <li>• Application deployment</li>
                  <li>• Monitoring and alerting</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Database className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Database Management</h3>
                <p className="text-gray-300 mb-4">
                  Database automation, migration, and management solutions for optimal performance.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Database migrations</li>
                  <li>• Backup and recovery</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Monitor className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Logging</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive monitoring, logging, and alerting solutions for your applications.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Application performance monitoring</li>
                  <li>• Centralized logging</li>
                  <li>• Real-time alerting</li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your DevOps?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our expert team help you implement modern DevOps practices that will accelerate your development cycle and improve reliability.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your DevOps Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}