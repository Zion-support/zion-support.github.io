import React from 'react'

import Layout from '../layout'

const SystemIntegrationPage: React.FC = () => {
  return (
    <Layout
      title="System Integration - Zion Tech Group"
      description="Seamless system integration services to connect your applications, databases, and third-party services."
      keywords="system integration, API integration, data integration, enterprise integration"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect your systems seamlessly with our comprehensive integration solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">API Integration</h3>
              <p className="text-gray-300 mb-4">
                Connect your applications with external APIs and services for enhanced functionality.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• REST API development</li>
                <li>• GraphQL integration</li>
                <li>• Third-party API connections</li>
                <li>• API gateway management</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Data Integration</h3>
              <p className="text-gray-300 mb-4">
                Synchronize and consolidate data from multiple sources for better insights.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• ETL processes</li>
                <li>• Real-time data sync</li>
                <li>• Data warehousing</li>
                <li>• Data migration</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Integration</h3>
              <p className="text-gray-300 mb-4">
                Connect your enterprise systems for improved efficiency and data flow.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• ERP integration</li>
                <li>• CRM connectivity</li>
                <li>• Legacy system modernization</li>
                <li>• Workflow automation</li>
              </ul>
            </div>
          </div>
        </div>
