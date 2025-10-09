'use client';
import React from 'react';
import { Settings, Zap, Cloud, GitBranch, Shield, BarChart, Cpu, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const DevOpsPage: React.FC = () => {
  const services = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines',
      icon: GitBranch,
      features: ['Automated testing', 'Continuous deployment', 'Version control', 'Rollback capabilities']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management',
      icon: Cpu,
      features: ['Kubernetes setup', 'Docker optimization', 'Service mesh', 'Auto-scaling']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      icon: Cloud,
      features: ['Terraform', 'Ansible', 'CloudFormation', 'Infrastructure monitoring']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions',
      icon: BarChart,
      features: ['APM monitoring', 'Log aggregation', 'Alerting systems', 'Performance metrics']
    }
  ];

  const benefits = [
    {
      title: 'Faster Deployments',
      description: 'Reduce deployment time from hours to minutes',
      icon: Zap,
      metric: '90% faster'
    },
    {
      title: 'Improved Reliability',
      description: 'Automated testing and rollback capabilities',
      icon: Shield,
      metric: '99.9% uptime'
    },
    {
      title: 'Cost Optimization',
      description: 'Efficient resource utilization and scaling',
      icon: BarChart,
      metric: '40% cost savings'
    },
    {
      title: 'Enhanced Security',
      description: 'Automated security scanning and compliance',
      icon: Shield,
      metric: 'Zero security incidents'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Accelerate your development lifecycle."
        keywords={['DevOps', 'CI/CD', 'Kubernetes', 'Docker', 'infrastructure as code', 'automated deployment', 'container orchestration']}
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
            <p className="text-xl md:text-2xl text-green-400 mb-8 font-medium">
              Streamlined Development Workflows and Automated Deployment
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Accelerate your development lifecycle with our comprehensive DevOps solutions. 
              From CI/CD pipelines to container orchestration, we help you build, test, 
              and deploy faster while maintaining high quality and security.
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
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our DevOps Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our DevOps Solutions?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{benefit.description}</p>
                  <div className="text-green-400 font-bold text-lg">{benefit.metric}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              DevOps Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Starter</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$1,199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Basic CI/CD setup</li>
                  <li>Docker containerization</li>
                  <li>Basic monitoring</li>
                  <li>Git integration</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-green-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">$2,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Advanced CI/CD pipelines</li>
                  <li>Kubernetes orchestration</li>
                  <li>Infrastructure as Code</li>
                  <li>Advanced monitoring</li>
                  <li>Security scanning</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-green-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom DevOps platform</li>
                  <li>Multi-cloud deployment</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated team</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Development Process?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our DevOps experts help you build a modern, efficient development workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your DevOps Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
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