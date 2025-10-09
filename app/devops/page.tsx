'use client';
import React from 'react';
import { Settings, ArrowRight, CheckCircle, Star, Zap, GitBranch, Container, Monitor } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster software delivery',
      icon: GitBranch,
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities']
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes and Docker container management for scalable applications',
      icon: Container,
      features: ['Kubernetes Setup', 'Docker Optimization', 'Auto-scaling', 'Service Mesh']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management using code',
      icon: Settings,
      features: ['Terraform', 'Ansible', 'CloudFormation', 'Infrastructure Monitoring']
    },
    {
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions for application performance',
      icon: Monitor,
      features: ['APM Tools', 'Log Aggregation', 'Alerting Systems', 'Performance Metrics']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Comprehensive DevOps services including CI/CD pipelines, container orchestration, infrastructure as code, and monitoring. Streamline your development and deployment processes."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'infrastructure as code', 'monitoring']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD Services
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium neon-pulse">
              Streamline Your Development and Deployment Processes
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our DevOps services help you build, test, and deploy software faster and more reliably. 
              From CI/CD pipelines to container orchestration, we optimize your entire development workflow.
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
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our DevOps Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Faster Deployments</h3>
                <p className="text-gray-300">
                  Reduce deployment time by 80% and increase deployment frequency with automated pipelines.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Higher Reliability</h3>
                <p className="text-gray-300">
                  Achieve 99.9% uptime with automated testing, monitoring, and rollback capabilities.
                </p>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Cost Optimization</h3>
                <p className="text-gray-300">
                  Reduce infrastructure costs by 40% through efficient resource utilization and automation.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our DevOps experts today to discuss how we can streamline your development and deployment processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                +1 302 464 0950
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