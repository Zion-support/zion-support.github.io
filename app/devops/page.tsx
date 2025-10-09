'use client';
import React from 'react';
import { Settings, Zap, CheckCircle, TrendingUp, Star, Users, Award, Target, ArrowRight, Search, Eye, Database, Cloud, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated continuous integration and deployment pipelines',
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities'],
      benefits: ['80% faster deployment', 'Zero downtime', 'Automated testing']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management and orchestration',
      features: ['Kubernetes Setup', 'Docker Optimization', 'Service Mesh', 'Auto-scaling'],
      benefits: ['99.9% uptime', 'Auto-scaling', 'Resource optimization']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code with Terraform and Ansible',
      features: ['Terraform Modules', 'Ansible Playbooks', 'Version Control', 'Environment Management'],
      benefits: ['Consistent environments', 'Version control', 'Reproducible deployments']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions',
      features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Aggregation', 'Alerting Systems'],
      benefits: ['Proactive monitoring', 'Real-time alerts', 'Performance insights']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      application: 'Microservices Architecture',
      result: '90% faster feature delivery',
      description: 'Containerized microservices with automated CI/CD for rapid feature deployment'
    },
    {
      industry: 'FinTech',
      application: 'High Availability Systems',
      result: '99.99% uptime achieved',
      description: 'Mission-critical financial systems with zero-downtime deployments and monitoring'
    },
    {
      industry: 'Healthcare',
      application: 'Compliance & Security',
      result: '100% HIPAA compliance',
      description: 'Secure, compliant infrastructure with automated security scanning and monitoring'
    },
    {
      industry: 'SaaS',
      application: 'Multi-tenant Architecture',
      result: '50% cost reduction',
      description: 'Efficient multi-tenant infrastructure with auto-scaling and resource optimization'
    }
  ];

  const technologies = [
    'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins', 'GitLab CI',
    'GitHub Actions', 'AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana',
    'ELK Stack', 'Istio', 'Helm', 'ArgoCD', 'Vault', 'Consul'
  ];

  const stats = [
    { label: 'Deployment Speed', value: '80%', icon: Zap },
    { label: 'Uptime Achieved', value: '99.9%', icon: Target },
    { label: 'Cost Reduction', value: '50%', icon: TrendingUp },
    { label: 'Automation Rate', value: '95%', icon: Settings }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Solutions - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Streamline your development workflow."
        keywords={['DevOps', 'CI/CD', 'Kubernetes', 'Docker', 'infrastructure as code', 'automation', 'monitoring']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Streamline Your Development Workflow
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Our DevOps solutions help teams deliver software faster, more reliably, and with 
              higher quality through automation, containerization, and continuous integration.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* DevOps Services */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our DevOps Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devopsServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                      <p className="text-cyan-400 font-medium">{useCase.application}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-3">
                    <p className="text-green-400 font-semibold">Result: {useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <span className="text-gray-300 font-medium text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our DevOps Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Assessment', description: 'Analyze current development workflow', icon: Search },
                { step: '2', title: 'Design', description: 'Design CI/CD and infrastructure', icon: Code },
                { step: '3', title: 'Implementation', description: 'Implement automation and tools', icon: Settings },
                { step: '4', title: 'Optimization', description: 'Monitor and optimize performance', icon: TrendingUp }
              ].map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Development Process?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our DevOps experts help you build a modern, automated development workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevOpsPage;