import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function CloudInfrastructurePage() {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including AWS, Azure, Google Cloud, and hybrid cloud management services." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Cloud Infrastructure Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build, deploy, and manage scalable cloud infrastructure that grows with your business. 
              From migration to optimization, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-6">
                Seamless migration of your applications and data to the cloud with minimal downtime.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Lift & Shift Migration</li>
                <li>• Cloud-Native Development</li>
                <li>• Data Migration</li>
                <li>• Application Modernization</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Multi-Cloud Management</h3>
              <p className="text-gray-300 mb-6">
                Manage multiple cloud providers from a single platform for optimal performance and cost.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• AWS Management</li>
                <li>• Azure Administration</li>
                <li>• Google Cloud Platform</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Infrastructure as Code</h3>
              <p className="text-gray-300 mb-6">
                Automated infrastructure provisioning and management using modern DevOps practices.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Terraform Automation</li>
                <li>• Kubernetes Orchestration</li>
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure Monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cloud Security</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Identity & Access Management</li>
                <li>• Network Security</li>
                <li>• Data Encryption</li>
                <li>• Compliance Management</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cost Optimization</h3>
              <p className="text-gray-300 mb-6">
                Optimize your cloud spending with intelligent resource management and cost analysis.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Cost Analysis & Reporting</li>
                <li>• Resource Right-Sizing</li>
                <li>• Reserved Instance Planning</li>
                <li>• Budget Management</li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Disaster Recovery</h3>
              <p className="text-gray-300 mb-6">
                Robust disaster recovery solutions to ensure business continuity and data protection.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Backup & Recovery</li>
                <li>• Business Continuity Planning</li>
                <li>• RTO/RPO Optimization</li>
                <li>• Testing & Validation</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Cloud Platform Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">AWS</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Amazon Web Services</h3>
                <p className="text-gray-300">Certified AWS solutions architect with expertise in EC2, S3, Lambda, and more.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">Azure</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Microsoft Azure</h3>
                <p className="text-gray-300">Azure-certified professionals with deep knowledge of Microsoft cloud services.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">GCP</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Google Cloud Platform</h3>
                <p className="text-gray-300">Google Cloud certified experts specializing in data analytics and AI services.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Scale Your Cloud Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud experts help you build a robust, scalable, and cost-effective cloud infrastructure for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started Today
              </a>
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}