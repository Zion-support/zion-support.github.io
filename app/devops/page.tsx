'use client';
import React from 'react';
import { Settings, Zap, Cloud, GitBranch, Monitor, Wrench } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Services - Zion Tech Group"
        description="Streamlined DevOps and CI/CD solutions including automated pipelines, testing, container orchestration, and monitoring. Accelerate your development workflow."
        keywords={['DevOps', 'CI/CD', 'automated testing', 'container orchestration', 'monitoring', 'deployment automation']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium">
              Streamlined Development Workflows
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Accelerate your development process with our comprehensive DevOps and CI/CD solutions. 
              From automated testing to container orchestration, we optimize your entire development pipeline.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">DevOps Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">CI/CD Pipelines</h3>
                <p className="text-gray-300">Automated build, test, and deployment pipelines</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Container Orchestration</h3>
                <p className="text-gray-300">Kubernetes and Docker container management</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Monitor className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Monitoring Setup</h3>
                <p className="text-gray-300">Comprehensive application and infrastructure monitoring</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Optimize Your Development?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our DevOps experts today to discuss how we can streamline your development workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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