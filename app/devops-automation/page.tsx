import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DevOpsAutomationPage() {
  return (
    <>
      <Helmet>
        <title>DevOps Automation Services - Streamline Your Development | Zion Tech Group</title>
        <meta name="description" content="Comprehensive DevOps automation services including CI/CD pipelines, infrastructure as code, monitoring, and deployment automation. Accelerate your development lifecycle." />
        <meta name="keywords" content="DevOps automation, CI/CD pipelines, infrastructure as code, deployment automation, monitoring, cloud DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              DevOps Automation Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your development lifecycle with comprehensive DevOps automation. From CI/CD pipelines to infrastructure as code, we accelerate your delivery while ensuring quality and reliability.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Free Assessment
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">DevOps Automation Features</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">CI/CD Pipeline Automation</h3>
                    <p className="text-gray-600">Automated build, test, and deployment pipelines that ensure code quality and faster delivery.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Infrastructure as Code</h3>
                    <p className="text-gray-600">Manage and provision infrastructure using code for consistency, repeatability, and version control.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Container Orchestration</h3>
                    <p className="text-gray-600">Deploy and manage containerized applications with Kubernetes and Docker orchestration.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Monitoring & Alerting</h3>
                    <p className="text-gray-600">Comprehensive monitoring solutions with real-time alerts and performance analytics.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Pricing Plans</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$399/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Basic CI/CD setup</li>
                    <li>Infrastructure automation</li>
                    <li>Basic monitoring</li>
                    <li>Email support</li>
                    <li>Monthly reports</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$999/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Advanced CI/CD pipelines</li>
                    <li>Container orchestration</li>
                    <li>Advanced monitoring</li>
                    <li>Priority support</li>
                    <li>Weekly reports</li>
                    <li>Custom integrations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$2,499/month</div>
                  <ul className="space-y-2 text-gray-600">
                    <li>Full DevOps transformation</li>
                    <li>Custom automation</li>
                    <li>24/7 monitoring</li>
                    <li>Dedicated team</li>
                    <li>Real-time support</li>
                    <li>White-label options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our DevOps Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">CI/CD Pipeline Setup</h3>
                <p className="text-gray-600 mb-4">Design and implement automated continuous integration and deployment pipelines for faster, reliable releases.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Automated testing</li>
                  <li>• Code quality checks</li>
                  <li>• Automated deployments</li>
                  <li>• Rollback capabilities</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Infrastructure Automation</h3>
                <p className="text-gray-600 mb-4">Automate infrastructure provisioning and management using Terraform, Ansible, and cloud-native tools.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Infrastructure as Code</li>
                  <li>• Cloud provisioning</li>
                  <li>• Configuration management</li>
                  <li>• Environment consistency</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Container Management</h3>
                <p className="text-gray-600 mb-4">Deploy and manage containerized applications with Docker and Kubernetes orchestration.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Docker containerization</li>
                  <li>• Kubernetes orchestration</li>
                  <li>• Service mesh</li>
                  <li>• Auto-scaling</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Monitoring & Observability</h3>
                <p className="text-gray-600 mb-4">Implement comprehensive monitoring, logging, and alerting solutions for better visibility.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Application monitoring</li>
                  <li>• Infrastructure monitoring</li>
                  <li>• Log aggregation</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Integration</h3>
                <p className="text-gray-600 mb-4">Integrate security practices into your DevOps pipeline with automated security scanning and compliance.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Security scanning</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Compliance automation</li>
                  <li>• Secret management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
                <p className="text-gray-600 mb-4">Migrate your applications and infrastructure to the cloud with minimal downtime and maximum efficiency.</p>
                <ul className="text-sm text-gray-500">
                  <li>• Cloud strategy</li>
                  <li>• Migration planning</li>
                  <li>• Data migration</li>
                  <li>• Post-migration optimization</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Jenkins</span>
                </div>
                <p className="text-sm text-gray-600">CI/CD</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">GitLab</span>
                </div>
                <p className="text-sm text-gray-600">DevOps Platform</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Docker</span>
                </div>
                <p className="text-sm text-gray-600">Containers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">K8s</span>
                </div>
                <p className="text-sm text-gray-600">Orchestration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Terraform</span>
                </div>
                <p className="text-sm text-gray-600">IaC</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold">Ansible</span>
                </div>
                <p className="text-sm text-gray-600">Automation</p>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose Our DevOps Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Deploy 10x Faster</h3>
                <p className="text-gray-600">Automate your deployment process to release software 10 times faster with confidence.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Errors by 80%</h3>
                <p className="text-gray-600">Automated testing and deployment processes significantly reduce human errors and improve reliability.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 30 Hours/Week</h3>
                <p className="text-gray-600">Automate repetitive tasks to free up your team for more strategic work and innovation.</p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your DevOps?</h2>
            <p className="text-xl mb-8 opacity-90">Accelerate your development lifecycle with our comprehensive DevOps automation services.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Free Assessment
              </a>
              <a href="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}