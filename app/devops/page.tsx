'use client';
import React from 'react';
import { Settings, GitBranch, Container, Monitor, CheckCircle, ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated continuous integration and deployment pipelines',
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities'],
      icon: GitBranch
    },
    {
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes deployment and management',
      features: ['Container Management', 'Scaling Automation', 'Service Discovery', 'Load Balancing'],
      icon: Container
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      features: ['Terraform/CloudFormation', 'Version Control', 'Environment Consistency', 'Cost Optimization'],
      icon: Settings
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions',
      features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Aggregation', 'Alerting Systems'],
      icon: Monitor
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Advanced DevOps solutions including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Streamline your development and deployment processes."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'infrastructure as code', 'monitoring', 'automation']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          <section className="text-center mb-16 cyber-scan-line" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="DevOps & CI/CD"
              >
                DevOps & CI/CD
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Streamlined Development and Deployment
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Accelerate your development process with our comprehensive DevOps solutions. 
                From CI/CD pipelines to container orchestration, we help teams deliver faster and more reliably.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="devops-services-heading">
            <h2 id="devops-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our DevOps Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive DevOps solutions to modernize your development workflow
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {devopsServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="contact-cta-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-cta-heading" className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Modernize Your Development Process?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our DevOps experts help you implement modern development practices 
                that will accelerate your delivery and improve your team's productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free DevOps Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 302 464 0950
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