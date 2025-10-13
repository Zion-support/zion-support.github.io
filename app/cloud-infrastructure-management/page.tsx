import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function CloudInfrastructureManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
export default function CloudInfrastructureManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Advanced cloud infrastructure management solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Optimize and manage your cloud infrastructure with our comprehensive management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Infrastructure Monitoring</h3>
            <p className="text-gray-300 mb-6">
              Real-time monitoring and alerting for your cloud infrastructure performance.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Cost Optimization</h3>
            <p className="text-gray-300 mb-6">
              Reduce cloud costs with intelligent resource optimization and right-sizing.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Security Management</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive security policies and compliance management for your cloud environment.
            </p>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Infrastructure Management
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Optimize and manage your cloud infrastructure with our comprehensive solutions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600">
                Seamlessly migrate your infrastructure to the cloud with minimal downtime.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Optimization</h3>
              <p className="text-gray-600">
                Reduce cloud costs with intelligent resource management and optimization.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring & Analytics</h3>
              <p className="text-gray-600">
                Real-time monitoring and analytics for optimal cloud performance.
              </p>
            </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
          </div>
        </div>
      </div>
    </div>
  );
}