import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Monitor, 
  GitBranch, 
  Container, 
  Server, 
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react';

const DevOpsServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services including CI/CD, infrastructure automation, cloud deployment, and monitoring solutions. Accelerate your development lifecycle with our expert DevOps team." />
        <meta name="keywords" content="DevOps services, CI/CD, infrastructure automation, cloud deployment, monitoring, containerization, microservices" />
        <meta property="og:title" content="DevOps Services - Zion Tech Group" />
        <meta property="og:description" content="Professional DevOps services including CI/CD, infrastructure automation, cloud deployment, and monitoring solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/devops-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                DevOps Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Accelerate your development lifecycle with our comprehensive DevOps solutions. 
                From CI/CD pipelines to infrastructure automation, we help you achieve faster, 
                more reliable software delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our DevOps Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps services designed to streamline your development process and improve deployment reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CI/CD Pipeline */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">CI/CD Pipeline Setup</h3>
                <p className="text-gray-300 mb-6">
                  Automated continuous integration and deployment pipelines that ensure code quality and faster releases.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automated testing and validation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Multi-environment deployments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Rollback capabilities</span>
                  </li>
                </ul>
              </div>

              {/* Infrastructure as Code */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Infrastructure as Code</h3>
                <p className="text-gray-300 mb-6">
                  Manage and provision infrastructure through code for consistency, version control, and automation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Terraform and CloudFormation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Version-controlled infrastructure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Environment consistency</span>
                  </li>
                </ul>
              </div>

              {/* Container Orchestration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Container className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Container Orchestration</h3>
                <p className="text-gray-300 mb-6">
                  Deploy and manage containerized applications with Kubernetes and Docker for scalable, resilient systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Kubernetes cluster management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Docker containerization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Auto-scaling and load balancing</span>
                  </li>
                </ul>
              </div>

              {/* Monitoring & Observability */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Monitoring & Observability</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive monitoring solutions to track performance, detect issues, and ensure system reliability.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Real-time performance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Log aggregation and analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automated alerting</span>
                  </li>
                </ul>
              </div>

              {/* Cloud Migration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Cloud Migration</h3>
                <p className="text-gray-300 mb-6">
                  Seamless migration to cloud platforms with optimized architecture and cost-effective solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>AWS, Azure, GCP expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Zero-downtime migration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Cost optimization</span>
                  </li>
                </ul>
              </div>

              {/* Security Integration */}
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Integration</h3>
                <p className="text-gray-300 mb-6">
                  Integrate security practices into your DevOps pipeline for secure, compliant deployments.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Automated security scanning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Compliance automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Secrets management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our DevOps Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful DevOps implementation and continuous improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Assessment</h3>
                <p className="text-gray-300">
                  Analyze your current development and deployment processes to identify improvement opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Strategy</h3>
                <p className="text-gray-300">
                  Develop a customized DevOps strategy aligned with your business goals and technical requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Implementation</h3>
                <p className="text-gray-300">
                  Deploy tools, processes, and automation solutions to transform your development workflow.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Optimization</h3>
                <p className="text-gray-300">
                  Continuously monitor, measure, and optimize your DevOps practices for maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you implement DevOps best practices and accelerate your software delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your DevOps Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DevOpsServicesPage;