'use client';
import React from 'react';
import { Settings, GitBranch, Zap, Monitor, Cloud, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DevOpsPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="DevOps & CI/CD Solutions - Zion Tech Group"
        description="Streamlined DevOps and CI/CD solutions for automated testing, deployment, and monitoring. Accelerate your development workflow with our DevOps expertise."
        keywords={['DevOps', 'CI/CD', 'automated deployment', 'infrastructure as code', 'container orchestration', 'DevOps consulting']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              DevOps & CI/CD Solutions
            </h1>
            <p className="text-xl text-green-400 mb-8 font-medium neon-pulse">
              Accelerate Your Development Workflow
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our DevOps solutions streamline your development process with automated testing, 
              continuous integration, and deployment pipelines that accelerate delivery and improve quality.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <GitBranch className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">CI/CD Pipelines</h3>
                <p className="text-gray-300">Automated build, test, and deployment pipelines for faster, more reliable releases</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Testing</h3>
                <p className="text-gray-300">Comprehensive automated testing strategies to ensure code quality and reliability</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Container Orchestration</h3>
                <p className="text-gray-300">Kubernetes and Docker solutions for scalable, containerized applications</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Development Process?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our DevOps experts help you build efficient, automated development workflows.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get DevOps Consultation
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