'use client';
import React from 'react';
import { Settings, Zap, Cloud, Shield, BarChart, GitBranch, Container, Monitor } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated continuous integration and deployment pipelines for faster, reliable releases',
      icon: GitBranch,
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management and orchestration',
      icon: Container,
      features: ['Kubernetes Setup', 'Docker Management', 'Auto-scaling', 'Service Mesh']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and reliability',
      icon: Cloud,
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Infrastructure Monitoring']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring, logging, and alerting systems',
      icon: Monitor,
      features: ['Application Monitoring', 'Log Aggregation', 'Performance Metrics', 'Alert Management']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Solutions - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Streamline your development workflow."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'infrastructure as code', 'monitoring', 'automation']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium">
              Streamline Your Development Workflow
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Accelerate your development process with our comprehensive DevOps solutions. 
              From CI/CD pipelines to container orchestration, we help you deploy faster and more reliably.
            </p>
          </section>

          {/* DevOps Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devopsServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our DevOps Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Faster Deployments</h3>
                <p className="text-gray-300">Automated pipelines that reduce deployment time from hours to minutes.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-white mb-3">Reliable Releases</h3>
                <p className="text-gray-300">Consistent, repeatable deployments with automated testing and quality checks.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-3">Full Visibility</h3>
                <p className="text-gray-300">Comprehensive monitoring and logging for complete system visibility.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your DevOps?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our DevOps experts help you build efficient, automated development workflows. 
              Get a free consultation and discover how we can accelerate your development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevOpsPage;