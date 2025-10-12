import React from 'react'

import Layout from '../layout'

const DevOpsSolutionsPage: React.FC = () => {
  return (
    <Layout
      title="DevOps Solutions - Zion Tech Group"
      description="Comprehensive DevOps solutions including CI/CD, automation, monitoring, and cloud infrastructure management."
      keywords="DevOps, CI/CD, automation, cloud infrastructure, monitoring, deployment"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              DevOps Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your development and deployment processes with our comprehensive DevOps solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">CI/CD Pipeline</h3>
              <p className="text-gray-300 mb-4">
                Automated continuous integration and deployment pipelines for faster, more reliable releases.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Automated testing</li>
                <li>• Code quality checks</li>
                <li>• Automated deployments</li>
                <li>• Rollback capabilities</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Infrastructure as Code</h3>
              <p className="text-gray-300 mb-4">
                Manage your infrastructure using code for consistency, repeatability, and version control.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Terraform configurations</li>
                <li>• Ansible playbooks</li>
                <li>• CloudFormation templates</li>
                <li>• Kubernetes manifests</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Monitoring & Observability</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive monitoring solutions to ensure your applications run smoothly.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Application performance monitoring</li>
                <li>• Infrastructure monitoring</li>
                <li>• Log aggregation</li>
                <li>• Alerting systems</li>
              </ul>
            </div>
          </div>
        </div>
