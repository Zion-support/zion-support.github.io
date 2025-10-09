'use client';
import React from 'react';
import { Settings, Zap, BarChart, Shield, Code, Cloud } from 'lucide-react';
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
      description: 'Automated continuous integration and deployment pipelines for faster, reliable releases',
      icon: Zap,
      features: ['Automated Testing', 'Build Automation', 'Deployment Automation', 'Rollback Capabilities'],
      benefits: ['80% faster deployments', '90% fewer errors', 'Automated workflows']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management for scalable, portable applications',
      icon: Cloud,
      features: ['Kubernetes Setup', 'Docker Management', 'Auto-scaling', 'Service Mesh'],
      benefits: ['Scalable infrastructure', 'Portable applications', 'Resource optimization']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions for application performance and reliability',
      icon: BarChart,
      features: ['APM Monitoring', 'Log Aggregation', 'Alerting Systems', 'Performance Metrics'],
      benefits: ['Proactive monitoring', 'Faster issue resolution', 'Performance optimization']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code for consistency and reliability',
      icon: Code,
      features: ['Terraform', 'Ansible', 'CloudFormation', 'Version Control'],
      benefits: ['Consistent deployments', 'Version control', 'Disaster recovery']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Solutions - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, container orchestration, monitoring, and infrastructure as code. Streamline your development workflows."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'monitoring', 'infrastructure as code', 'Kubernetes']}
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
              DevOps & CI/CD Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Streamline Your Development Workflows
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our DevOps solutions help you build, test, and deploy applications faster and more reliably 
              with automated pipelines, container orchestration, and comprehensive monitoring.
            </p>
          </section>

          {/* DevOps Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devopsServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
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
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Development Process?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our DevOps experts help you build efficient, reliable development workflows that accelerate your time to market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get DevOps Consultation
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