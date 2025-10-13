import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Link as LinkIcon, Database, Shield, Zap, Users, Cloud, Settings } from 'lucide-react';

export default function SystemIntegrationPage() {
  return (
    <>
      <Helmet>
        <title>System Integration - Zion Tech Group</title>
        <meta name="description" content="Professional system integration services to connect and optimize your business applications and data." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  System Integration
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Seamlessly connect your business systems, applications, and data sources for improved efficiency, 
                data consistency, and streamlined operations across your organization.
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
                <LinkIcon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">API Integration</h3>
                <p className="text-gray-300 mb-4">
                  Connect disparate systems through robust API integrations and data synchronization.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• RESTful API development</li>
                  <li>• GraphQL integration</li>
                  <li>• Real-time data sync</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Database className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Integration</h3>
                <p className="text-gray-300 mb-4">
                  Unify your data sources and create a single source of truth across your organization.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• ETL/ELT processes</li>
                  <li>• Data warehousing</li>
                  <li>• Master data management</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Cloud className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Integration</h3>
                <p className="text-gray-300 mb-4">
                  Seamlessly integrate cloud and on-premises systems for hybrid environments.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Hybrid cloud solutions</li>
                  <li>• Multi-cloud integration</li>
                  <li>• Cloud migration support</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security Integration</h3>
                <p className="text-gray-300 mb-4">
                  Implement secure integration patterns with proper authentication and authorization.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• SSO implementation</li>
                  <li>• OAuth 2.0 / SAML</li>
                  <li>• Data encryption</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate business processes and workflows across integrated systems.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Business process automation</li>
                  <li>• Event-driven architecture</li>
                  <li>• Workflow orchestration</li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <Settings className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Legacy System Integration</h3>
                <p className="text-gray-300 mb-4">
                  Modernize and integrate legacy systems with modern applications and platforms.
                </p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Legacy system modernization</li>
                  <li>• Data migration</li>
                  <li>• Gradual transformation</li>
                </ul>
              </div>
            </div>

            {/* Integration Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Our Integration Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Assessment</h3>
                  <p className="text-gray-300 text-sm">Analyze existing systems and requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Design</h3>
                  <p className="text-gray-300 text-sm">Create integration architecture and strategy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Develop</h3>
                  <p className="text-gray-300 text-sm">Build and configure integration solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Test</h3>
                  <p className="text-gray-300 text-sm">Comprehensive testing and validation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-cyan-400">5</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deploy</h3>
                  <p className="text-gray-300 text-sm">Deploy and provide ongoing support</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Integration Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Improved Efficiency</h3>
                  <p className="text-gray-300">Streamlined processes and reduced manual work</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Consistency</h3>
                  <p className="text-gray-300">Unified data across all systems</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Better User Experience</h3>
                  <p className="text-gray-300">Seamless workflows for your team</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3>
                  <p className="text-gray-300">Centralized security and compliance</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Integrate Your Systems?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let our integration experts help you connect your systems and unlock the full potential of your business data and processes.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Start Integration Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}