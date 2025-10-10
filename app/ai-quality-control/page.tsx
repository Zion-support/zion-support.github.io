'use client';
import React from 'react';
import { Shield, CheckCircle, BarChart, Settings, Zap, Brain } from 'lucide-react';

const AIQualityControlPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Quality Control
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered quality assurance solutions that ensure excellence in every aspect of your business operations.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="cyber-card p-6">
            <Shield className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Automated Testing</h3>
            <p className="text-gray-300">
              AI-driven automated testing that identifies defects and quality issues before they impact your customers.
            </p>
          </div>

          <div className="cyber-card p-6">
            <CheckCircle className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Real-time Monitoring</h3>
            <p className="text-gray-300">
              Continuous monitoring of quality metrics with instant alerts and corrective actions.
            </p>
          </div>

          <div className="cyber-card p-6">
            <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Analytics Dashboard</h3>
            <p className="text-gray-300">
              Comprehensive analytics and reporting to track quality trends and improvements.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Settings className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Custom Rules</h3>
            <p className="text-gray-300">
              Define custom quality rules and standards tailored to your specific business requirements.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Zap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Fast Processing</h3>
            <p className="text-gray-300">
              High-speed quality control processing that doesn't slow down your production pipeline.
            </p>
          </div>

          <div className="cyber-card p-6">
            <Brain className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
            <p className="text-gray-300">
              Self-improving AI models that learn from your data to enhance quality control accuracy.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Quality Control?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our AI Quality Control solutions can improve your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-3 text-center"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Request Demo
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIQualityControlPage;