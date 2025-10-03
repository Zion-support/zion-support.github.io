import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function CloudNativeDevOpsPage() {
  return (
    <>
      <Helmet>
        <title>Cloud-Native DevOps Platform | Zion Tech Group - Modern Infrastructure Automation</title>
        <meta name="description" content="Comprehensive cloud-native DevOps platform with CI/CD automation, infrastructure as code, and advanced monitoring for modern applications." />
        <meta name="keywords" content="cloud-native DevOps, CI/CD automation, infrastructure as code, container orchestration, Kubernetes, microservices" />
      </Helmet>
      
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud-Native DevOps Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Accelerate your digital transformation with our comprehensive cloud-native DevOps platform featuring automated CI/CD, infrastructure as code, and intelligent monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/case-studies" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">CI/CD Automation</h3>
              <p className="text-gray-600 mb-4">End-to-end continuous integration and deployment pipelines with automated testing, security scanning, and deployment strategies.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Automated testing</li>
                <li>• Security scanning</li>
                <li>• Blue-green deployments</li>
                <li>• Rollback automation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure as Code</h3>
              <p className="text-gray-600 mb-4">Manage your entire infrastructure with code using Terraform, Kubernetes, and cloud-native tools for consistency and scalability.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Terraform automation</li>
                <li>• Kubernetes management</li>
                <li>• Multi-cloud support</li>
                <li>• Environment provisioning</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Monitoring</h3>
              <p className="text-gray-600 mb-4">Comprehensive observability with metrics, logs, traces, and AI-powered insights for optimal application performance.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Real-time monitoring</li>
                <li>• Distributed tracing</li>
                <li>• Log aggregation</li>
                <li>• Performance analytics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Cloud Support</h3>
              <p className="text-gray-600 mb-4">Deploy and manage applications across AWS, Azure, GCP, and hybrid environments with unified management.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AWS integration</li>
                <li>• Azure support</li>
                <li>• Google Cloud Platform</li>
                <li>• Hybrid cloud management</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">Built-in security scanning, compliance monitoring, and automated security policies for enterprise-grade protection.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Vulnerability scanning</li>
                <li>• Compliance automation</li>
                <li>• Security policies</li>
                <li>• Audit logging</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Auto-Scaling</h3>
              <p className="text-gray-600 mb-4">Intelligent auto-scaling based on demand patterns, cost optimization, and performance requirements.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Horizontal scaling</li>
                <li>• Vertical scaling</li>
                <li>• Cost optimization</li>
                <li>• Predictive scaling</li>
              </ul>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise DevOps Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-3xl font-bold mb-4">$1,500<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 5 applications</li>
                  <li>• Basic CI/CD pipelines</li>
                  <li>• Standard monitoring</li>
                  <li>• Email support</li>
                  <li>• Single cloud provider</li>
                </ul>
              </div>
              <div className="bg-white/20 rounded-lg p-6 border-2 border-white">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">$3,500<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Up to 25 applications</li>
                  <li>• Advanced CI/CD features</li>
                  <li>• Comprehensive monitoring</li>
                  <li>• Priority support</li>
                  <li>• Multi-cloud support</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">$7,500<span className="text-lg">/month</span></div>
                <ul className="space-y-2 text-left">
                  <li>• Unlimited applications</li>
                  <li>• Full DevOps suite</li>
                  <li>• AI-powered insights</li>
                  <li>• Dedicated support</li>
                  <li>• Custom integrations</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-blue-100">* Market average: $2,000-10,000/month for enterprise DevOps platforms</p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DevOps Transformation Benefits</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">10x Faster Deployments</h3>
                    <p className="text-gray-600">Automated CI/CD pipelines reduce deployment time from hours to minutes with zero-downtime deployments.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">50% Cost Reduction</h3>
                    <p className="text-gray-600">Infrastructure as code and auto-scaling optimize resource usage and reduce operational costs significantly.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 rounded-full p-2 mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">99.9% Reliability</h3>
                    <p className="text-gray-600">Advanced monitoring and automated failover ensure exceptional application reliability and uptime.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Standards</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600">"DevOps adoption increases deployment frequency by 200x"</p>
                  <p className="text-xs text-gray-500 mt-1">- State of DevOps Report 2024</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-sm text-gray-600">"Cloud-native organizations see 50% faster time-to-market"</p>
                  <p className="text-xs text-gray-500 mt-1">- CNCF Cloud Native Survey</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm text-gray-600">"Infrastructure as code reduces provisioning time by 90%"</p>
                  <p className="text-xs text-gray-500 mt-1">- HashiCorp State of Cloud Strategy</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-900 rounded-xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Accelerate Your DevOps Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading organizations using our cloud-native DevOps platform to achieve faster, more reliable software delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}