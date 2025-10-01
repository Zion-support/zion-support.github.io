import React from 'react';

export default function October2025MLOpsPlatformSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-y border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* New Content Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-300 font-bold text-sm tracking-wider uppercase">
                💼 NEW CASE STUDY: October 1, 2025 — Fortune 500 MLOps Success
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              $43M ROI from Enterprise MLOps Platform
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
              How a Fortune 500 global retailer deployed 200+ ML models, reduced time-to-production 
              by 85%, and achieved massive business impact.
            </p>
          </div>

          {/* Key Results */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30">
              <div className="text-3xl font-extrabold text-emerald-400 mb-2">$43M</div>
              <div className="text-sm text-emerald-300">Annual Value</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30">
              <div className="text-3xl font-extrabold text-teal-400 mb-2">85%</div>
              <div className="text-sm text-teal-300">Faster Deployment</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
              <div className="text-3xl font-extrabold text-cyan-400 mb-2">200+</div>
              <div className="text-sm text-cyan-300">Models in Production</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">23%</div>
              <div className="text-sm text-blue-300">Conversion Increase</div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Personalization</h3>
              <p className="text-gray-300 text-sm mb-4">
                Deep learning recommendation system serving 15M+ predictions daily with &lt;50ms latency.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Conversion lift:</span>
                  <span className="text-emerald-400 font-bold">+23%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Revenue impact:</span>
                  <span className="text-emerald-400 font-bold">$18M/year</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Demand Forecasting</h3>
              <p className="text-gray-300 text-sm mb-4">
                Ensemble models forecasting 50,000+ SKUs across 2,000+ stores with high accuracy.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Accuracy improvement:</span>
                  <span className="text-teal-400 font-bold">+31%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Cost savings:</span>
                  <span className="text-teal-400 font-bold">$12M/year</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3">Dynamic Pricing</h3>
              <p className="text-gray-300 text-sm mb-4">
                RL-powered pricing optimization for 100,000+ products updated every 15 minutes.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Margin improvement:</span>
                  <span className="text-cyan-400 font-bold">+12%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Profit increase:</span>
                  <span className="text-cyan-400 font-bold">$8M/year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Components */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Complete MLOps Platform Stack</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🗄️', name: 'Feature Store (Feast)', desc: 'Centralized features' },
                { icon: '🚀', name: 'Training (Kubeflow)', desc: 'Distributed training' },
                { icon: '📦', name: 'Model Registry (MLflow)', desc: 'Version control' },
                { icon: '🔄', name: 'CI/CD (GitOps)', desc: 'Automated deployment' },
                { icon: '⚡', name: 'Serving (KServe)', desc: 'Multi-framework' },
                { icon: '📊', name: 'Monitoring (Prometheus)', desc: 'Drift detection' }
              ].map((component) => (
                <div key={component.name} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-2xl">{component.icon}</div>
                  <div>
                    <div className="font-bold text-white text-sm">{component.name}</div>
                    <div className="text-gray-400 text-xs">{component.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/case-studies/retail-ai-mlops-platform-success"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              <span>Read Full Case Study</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              <span>Build Your MLOps Platform</span>
            </a>
          </div>

          {/* Technical Details */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-center text-gray-400 text-sm mb-4">Technical Architecture Includes:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Kubernetes on AWS/GCP',
                'Kubeflow Pipelines',
                'MLflow Registry',
                'Feast Feature Store',
                'KServe Inference',
                'Prometheus Monitoring',
                'ArgoCD GitOps',
                'A/B Testing Framework'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
