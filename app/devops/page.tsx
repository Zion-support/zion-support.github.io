'use client';
import React from 'react';
import { Settings, Zap, Target, BarChart, Cloud, Database, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsPage: React.FC = () => {
  const features = [
    {
      title: 'CI/CD Pipelines',
      description: 'Automated continuous integration and deployment pipelines',
      icon: Zap,
      benefits: ['Automated builds', 'Fast deployments', 'Quality gates']
    },
    {
      title: 'Automated Testing',
      description: 'Comprehensive automated testing strategies and implementation',
      icon: Target,
      benefits: ['Unit testing', 'Integration testing', 'Performance testing']
    },
    {
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes deployment and management',
      icon: Cloud,
      benefits: ['Container management', 'Scaling', 'Service discovery']
    },
    {
      title: 'Monitoring Setup',
      description: 'Comprehensive monitoring and alerting systems',
      icon: BarChart,
      benefits: ['Application monitoring', 'Infrastructure monitoring', 'Alerting']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Comprehensive DevOps solutions including CI/CD pipelines, automated testing, container orchestration, and monitoring. Streamline your development workflow."
        keywords={['devops', 'CI/CD', 'continuous integration', 'continuous deployment', 'container orchestration', 'automated testing']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              DevOps & CI/CD Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your development workflow with our comprehensive DevOps solutions. 
              From CI/CD pipelines to container orchestration, we accelerate your development process.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,199/month</div>
            <p className="text-gray-300">Complete DevOps transformation</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">DevOps Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Transform Your Development Process</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our DevOps solutions have reduced deployment time by 90% and increased development velocity by 300%. 
                Let's accelerate your development process.
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