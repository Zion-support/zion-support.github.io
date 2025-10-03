// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Shield, Users, DollarSign, Clock, BarChart3, Database, Server, GitBranch } from 'lucide-react';

export default function DevOpsAutomationService() {
  return (
    <>
      <Helmet>
        <title>DevOps Automation Service | Zion Tech Group</title>
        <meta name="description" content="Complete DevOps automation solutions. CI/CD pipelines, infrastructure as code, monitoring, and deployment automation for faster releases." />
        <meta name="keywords" content="DevOps automation, CI/CD pipelines, infrastructure as code, deployment automation, DevOps consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/services/devops-automation-service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                DevOps Automation Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete DevOps automation solutions. CI/CD pipelines, infrastructure as code, monitoring, and deployment automation for faster, more reliable releases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive DevOps Solutions</h2>
              <p className="text-xl text-gray-300">End-to-end automation for modern software delivery</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <GitBranch className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">CI/CD Pipelines</h3>
                <p className="text-gray-300">Automated build, test, and deployment pipelines with Jenkins, GitLab CI, or GitHub Actions.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Server className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Infrastructure as Code</h3>
                <p className="text-gray-300">Manage infrastructure with Terraform, Ansible, or CloudFormation for consistency and reliability.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Database className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Container Orchestration</h3>
                <p className="text-gray-300">Docker and Kubernetes deployment with automated scaling and service discovery.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <BarChart3 className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Monitoring & Alerting</h3>
                <p className="text-gray-300">Comprehensive monitoring with Prometheus, Grafana, and ELK stack for full observability.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security Automation</h3>
                <p className="text-gray-300">Automated security scanning, vulnerability management, and compliance checks.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Zap className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Auto-Scaling</h3>
                <p className="text-gray-300">Intelligent auto-scaling based on demand with cost optimization and performance tuning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Transform Your Development Process</h2>
              <p className="text-xl text-gray-300">See how DevOps automation accelerates delivery and improves quality</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Deploy 10x Faster</h3>
                      <p className="text-gray-300">Automated pipelines reduce deployment time from hours to minutes with zero manual intervention.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reduce Errors by 90%</h3>
                      <p className="text-gray-300">Automated testing and deployment eliminate human errors and ensure consistent releases.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Improve Reliability</h3>
                      <p className="text-gray-300">Automated rollbacks and monitoring ensure high availability and quick incident response.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Scale Automatically</h3>
                      <p className="text-gray-300">Intelligent auto-scaling handles traffic spikes without manual intervention or over-provisioning.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">DevOps Impact Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Deployment Frequency:</span>
                    <span className="font-semibold">+500%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Lead Time Reduction:</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>MTTR Improvement:</span>
                    <span className="font-semibold">70%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Change Failure Rate:</span>
                    <span className="font-semibold">-90%</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>Overall Productivity:</span>
                      <span className="text-green-300">+300%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Tools & Technologies</h2>
              <p className="text-xl text-gray-300">We work with the best DevOps tools and platforms</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">J</div>
                <h3 className="text-xl font-semibold text-white mb-3">Jenkins</h3>
                <p className="text-gray-300">Open-source automation server for CI/CD pipelines and workflow orchestration.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">K</div>
                <h3 className="text-xl font-semibold text-white mb-3">Kubernetes</h3>
                <p className="text-gray-300">Container orchestration platform for automated deployment and scaling.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">T</div>
                <h3 className="text-xl font-semibold text-white mb-3">Terraform</h3>
                <p className="text-gray-300">Infrastructure as code tool for provisioning and managing cloud resources.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">D</div>
                <h3 className="text-xl font-semibold text-white mb-3">Docker</h3>
                <p className="text-gray-300">Containerization platform for consistent application deployment across environments.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that matches your DevOps automation needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-orange-400 mb-2">$2,500</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic CI/CD pipeline
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Single environment
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-orange-600 to-red-600 p-8 rounded-lg border-2 border-orange-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-2">$7,500</div>
                  <div className="text-orange-100">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Advanced CI/CD pipelines
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Multi-environment setup
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Container orchestration
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Infrastructure as code
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-white hover:bg-gray-100 text-orange-600 py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">$15,000</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Full DevOps transformation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Custom automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Advanced monitoring
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Security automation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Dedicated team
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your development process with expert DevOps automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Free Consultation
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}