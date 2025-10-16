import React from "react";
import { Helmet } from "react-helmet-async";

const AIInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Infrastructure Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Build and deploy AI infrastructure at scale. GPU clusters, ML pipelines, and AI infrastructure management for enterprise AI applications."
        />
        <meta
          name="keywords"
          content="AI infrastructure, GPU clusters, machine learning infrastructure, AI deployment, ML pipelines"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/ai-infrastructure"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build and deploy AI infrastructure at scale with our comprehensive
              solutions. GPU clusters, ML pipelines, and infrastructure
              management for enterprise AI applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🖥️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                GPU Clusters
              </h3>
              <p className="text-gray-300">
                Deploy high-performance GPU clusters for training and inference
                workloads.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                ML Pipelines
              </h3>
              <p className="text-gray-300">
                Build end-to-end machine learning pipelines for data processing
                and model deployment.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Cloud AI Services
              </h3>
              <p className="text-gray-300">
                Leverage cloud AI services and managed ML platforms for scalable
                solutions.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Model Management
              </h3>
              <p className="text-gray-300">
                Manage ML models with versioning, monitoring, and automated
                deployment.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI Security
              </h3>
              <p className="text-gray-300">
                Implement security best practices for AI infrastructure and data
                protection.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Performance Optimization
              </h3>
              <p className="text-gray-300">
                Optimize AI workloads for maximum performance and cost
                efficiency.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Build AI Infrastructure?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIInfrastructurePage;
