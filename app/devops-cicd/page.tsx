'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Zap, Shield, CheckCircle, ArrowRight, Star, Globe, Smartphone, Database, Cloud, Lock, Users, Target, TrendingUp, Brain, GitBranch, Settings } from 'lucide-react';

const DevOpsCICDPage: React.FC = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Continuous Integration',
      description: 'Automate code integration, testing, and validation with every commit to ensure code quality.'
    },
    {
      icon: Zap,
      title: 'Continuous Deployment',
      description: 'Automatically deploy applications to production with zero-downtime deployments and rollback capabilities.'
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Integrate security scanning, vulnerability assessment, and compliance checks into your CI/CD pipeline.'
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code with Terraform, CloudFormation, and other IaC tools.'
    },
    {
      icon: Settings,
      title: 'Pipeline Orchestration',
      description: 'Design and manage complex deployment pipelines with parallel execution and conditional logic.'
    },
    {
      icon: Target,
      title: 'Environment Management',
      description: 'Automate environment provisioning, configuration, and management across dev, staging, and production.'
    }
  ];

  const capabilities = [
    {
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and Bitbucket for source code management.',
      icon: GitBranch
    },
    {
      title: 'Automated Testing',
      description: 'Run unit tests, integration tests, and end-to-end tests automatically in your pipeline.',
      icon: CheckCircle
    },
    {
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications with Kubernetes, Docker Swarm, and other orchestration tools.',
      icon: Cloud
    },
    {
      title: 'Monitoring & Logging',
      description: 'Integrate monitoring, logging, and alerting into your deployment pipeline for better observability.',
      icon: TrendingUp
    },
    {
      title: 'Multi-Cloud Support',
      description: 'Deploy applications across AWS, Azure, Google Cloud, and on-premises environments.',
      icon: Globe
    },
    {
      title: 'Team Collaboration',
      description: 'Enable collaboration between development and operations teams with shared tools and processes.',
      icon: Users
    }
  ];

  const benefits = [
    'Reduce deployment time by up to 80%',
    'Improve code quality and reliability',
    'Enable faster feature delivery',
    'Reduce manual errors and downtime',
    'Increase team productivity',
    'Enhance security and compliance'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
              <GitBranch className="w-4 h-4 mr-2" />
              DevOps & CI/CD
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Streamlined DevOps
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"> & CI/CD</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Accelerate your software delivery with automated CI/CD pipelines, infrastructure as code, and DevOps best practices that ensure reliable, secure deployments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Implementation
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive DevOps Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our DevOps and CI/CD services help you build, test, and deploy software faster and more reliably than ever before.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced DevOps Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From code commit to production deployment, our DevOps solutions cover every aspect of the software delivery lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable DevOps Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our DevOps and CI/CD solutions deliver quantifiable results that transform your software delivery process.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl p-8 border border-green-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">80%</div>
                <div className="text-gray-300 mb-6">Faster Deployments</div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 mb-6">Deployment Success Rate</div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300">Reduced Downtime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of teams already using our DevOps solutions to deliver software faster, more reliably, and with better quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Implementation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DevOpsCICDPage;