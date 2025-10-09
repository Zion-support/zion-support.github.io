'use client';
import React from 'react';
import { Settings, Zap, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines',
      features: ['Automated Testing', 'Continuous Integration', 'Continuous Deployment', 'Quality Gates']
    },
    {
      title: 'Container Orchestration',
      description: 'Manage and scale containerized applications',
      features: ['Kubernetes Setup', 'Docker Management', 'Service Mesh', 'Auto-scaling']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code and automation',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Infrastructure Automation']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and logging solutions',
      features: ['Application Monitoring', 'Log Aggregation', 'Performance Metrics', 'Alerting Systems']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="DevOps & CI/CD Solutions - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Streamline your development workflow."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'infrastructure as code', 'monitoring', 'automation']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              DevOps & CI/CD Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your development workflow with our comprehensive DevOps solutions.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devopsServices.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your DevOps?</h2>
            <p className="text-gray-300 mb-6">Let's discuss your DevOps needs.</p>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
              Contact Us
            </a>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevOpsPage;