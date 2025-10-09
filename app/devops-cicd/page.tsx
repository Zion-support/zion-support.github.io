'use client';
import React from 'react';
import { GitBranch, Zap, ArrowRight, CheckCircle, Clock, Users, TrendingUp, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsCICDPage: React.FC = () => {
  const features = [
    {
      icon: GitBranch,
      title: 'Automated CI/CD Pipelines',
      description: 'Build, test, and deploy your applications automatically with intelligent pipeline orchestration.'
    },
    {
      icon: Zap,
      title: 'Fast Deployments',
      description: 'Deploy code changes in minutes with automated testing, validation, and rollback capabilities.'
    },
    {
      icon: Code,
      title: 'Code Quality Gates',
      description: 'Automated code quality checks, security scanning, and performance testing in every pipeline.'
    },
    {
      icon: Shield,
      title: 'Infrastructure as Code',
      description: 'Manage your infrastructure with code using Terraform, Ansible, and other IaC tools.'
    }
  ];

  const benefits = [
    'Deploy 10x faster with automation',
    'Reduce deployment failures by 90%',
    'Improve code quality and security',
    'Enable continuous integration',
    'Scale infrastructure automatically',
    'Monitor and optimize performance'
  ];

  const pipelineSteps = [
    {
      step: 'Code Commit',
      description: 'Developer commits code to repository',
      icon: GitBranch,
      color: 'text-blue-400'
    },
    {
      step: 'Build & Test',
      description: 'Automated build and comprehensive testing',
      icon: Code,
      color: 'text-green-400'
    },
    {
      step: 'Security Scan',
      description: 'Automated security and vulnerability scanning',
      icon: Shield,
      color: 'text-yellow-400'
    },
    {
      step: 'Deploy',
      description: 'Automated deployment to staging/production',
      icon: Zap,
      color: 'text-purple-400'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Accelerate your development with automated CI/CD pipelines. Deploy 10x faster and reduce failures by 90% with our DevOps solutions."
        keywords={['DevOps', 'CI/CD', 'continuous integration', 'continuous deployment', 'automated pipelines', 'infrastructure as code']}
        canonicalUrl="https://ziontechgroup.com/devops-cicd"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <GitBranch className="w-4 h-4" />
                  <span>DevOps & CI/CD</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Accelerate
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Development</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your development process with automated CI/CD pipelines. Deploy 10x faster, reduce failures by 90%, and enable continuous innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Start CI/CD Setup
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  View Pipeline Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10x</div>
                  <div className="text-sm text-gray-400">Faster Deploy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">90%</div>
                  <div className="text-sm text-gray-400">Fewer Failures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Automation</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Pipeline Active</span>
                  </div>
                  <div className="space-y-4">
                    {pipelineSteps.map((step, index) => (
                      <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <step.icon className={`w-5 h-5 ${step.color}`} />
                          <div className="flex-1">
                            <div className="text-white font-medium text-sm">{step.step}</div>
                            <div className="text-gray-400 text-xs">{step.description}</div>
                          </div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete DevOps & CI/CD Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive DevOps services cover everything from pipeline automation to infrastructure management and monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our DevOps and CI/CD services deliver measurable improvements in development speed, quality, and reliability.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">10x</div>
                  <div className="text-white text-xl">Faster Deployments</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-sm text-gray-300">Fewer Failures</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-300">Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your development process with automated CI/CD pipelines. Deploy faster, fail less, and innovate continuously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Start DevOps Setup
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DevOpsCICDPage;