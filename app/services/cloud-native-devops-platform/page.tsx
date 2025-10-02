import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cloud-Native DevOps Platform - Zion Tech Group',
  description: 'Comprehensive cloud-native DevOps platform with CI/CD automation, infrastructure as code, monitoring, and deployment orchestration for modern applications.',
  keywords: 'cloud-native DevOps, CI/CD automation, infrastructure as code, container orchestration, microservices, cloud deployment',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CloudNativeDevOpsPlatform() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cloud-Native DevOps Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Accelerate your cloud-native journey with our comprehensive DevOps platform. 
          Streamline CI/CD, automate infrastructure, and scale applications with confidence.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Development Workflow</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
            <p className="text-gray-600">Faster deployment cycles</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
            <p className="text-gray-600">Uptime reliability</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
            <p className="text-gray-600">Reduction in operational costs</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">CI/CD Automation</h3>
          <p className="text-gray-600 mb-4">
            End-to-end continuous integration and deployment pipeline with automated testing, building, and deployment to multiple environments.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Automated testing pipelines</li>
            <li>• Multi-environment deployments</li>
            <li>• Blue-green deployments</li>
            <li>• Rollback capabilities</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $1,999/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Infrastructure as Code</h3>
          <p className="text-gray-600 mb-4">
            Manage and provision infrastructure through code with Terraform, Ansible, and Kubernetes for consistent, repeatable deployments.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Terraform automation</li>
            <li>• Ansible configuration</li>
            <li>• Kubernetes orchestration</li>
            <li>• Infrastructure versioning</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $1,499/month</div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Container Orchestration</h3>
          <p className="text-gray-600 mb-4">
            Advanced container orchestration with Kubernetes, Docker, and service mesh for scalable microservices architectures.
          </p>
          <ul className="text-sm text-gray-500 mb-4">
            <li>• Kubernetes management</li>
            <li>• Docker containerization</li>
            <li>• Service mesh implementation</li>
            <li>• Auto-scaling capabilities</li>
          </ul>
          <div className="text-lg font-semibold text-green-600 mb-2">Starting at $2,499/month</div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced DevOps Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Monitoring & Observability</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Application performance monitoring</li>
              <li>• Infrastructure monitoring</li>
              <li>• Log aggregation and analysis</li>
              <li>• Distributed tracing</li>
              <li>• Alerting and notification systems</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Security & Compliance</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Container security scanning</li>
              <li>• Vulnerability management</li>
              <li>• Secrets management</li>
              <li>• Compliance automation</li>
              <li>• Security policy enforcement</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cloud Platform Support</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AWS Services</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• EKS (Elastic Kubernetes Service)</li>
              <li>• ECS (Elastic Container Service)</li>
              <li>• Lambda serverless functions</li>
              <li>• CloudFormation templates</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Azure Services</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• AKS (Azure Kubernetes Service)</li>
              <li>• Container Instances</li>
              <li>• Azure Functions</li>
              <li>• ARM templates</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Cloud</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• GKE (Google Kubernetes Engine)</li>
              <li>• Cloud Run</li>
              <li>• Cloud Functions</li>
              <li>• Deployment Manager</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">DevOps Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">GitOps Workflow</h3>
            <p className="text-gray-600 mb-4">
              Implement GitOps practices with Git as the single source of truth for declarative infrastructure and application deployments.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Git-based deployment workflows</li>
              <li>• Declarative configuration</li>
              <li>• Automated synchronization</li>
              <li>• Rollback and recovery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Microservices Architecture</h3>
            <p className="text-gray-600 mb-4">
              Design and implement microservices architectures with service discovery, load balancing, and distributed systems patterns.
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Service mesh implementation</li>
              <li>• API gateway management</li>
              <li>• Distributed tracing</li>
              <li>• Circuit breaker patterns</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-Cloud Strategy</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Cross-cloud deployments</li>
              <li>• Vendor lock-in avoidance</li>
              <li>• Disaster recovery planning</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Team Collaboration</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• Role-based access control</li>
              <li>• Team workspaces</li>
              <li>• Collaboration tools</li>
              <li>• Knowledge sharing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Integrations</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• API development</li>
              <li>• Third-party tool integration</li>
              <li>• Custom automation scripts</li>
              <li>• Legacy system migration</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your DevOps?</h2>
        <p className="text-gray-600 mb-6">
          Accelerate your cloud-native transformation with our comprehensive DevOps platform and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link 
            href="https://ziontechgroup.com/services/cloud-native-devops-platform" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h3>
        <div className="text-gray-600 space-y-1">
          <p><strong>Mobile:</strong> +1 302 464 0950</p>
          <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
        </div>
      </div>
    </div>
  );
}