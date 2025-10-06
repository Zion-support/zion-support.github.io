import React from 'react';
import { Link } from 'react-router-dom';

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-2xl">🏢</span>
              <span className="text-cyan-400 font-bold text-xl">
                Enterprise AI Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Trusted by 500+ Fortune 500 Companies Worldwide
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <span>Schedule Enterprise Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                to="#solutions"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
              >
                <span>View Solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">Fortune 500 Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">$2.5T+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500%</div>
              <div className="text-gray-300">Productivity Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for enterprise-scale
              operations and Fortune 500 requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Operations',
                description:
                  'Self-healing infrastructure with 99.99% uptime and 95% cost reduction.',
                icon: '🤖',
                metrics: [
                  '99.99% Uptime',
                  '95% Cost Reduction',
                  'Zero Touch Operations',
                ],
              },
              {
                title: 'Business Intelligence',
                description:
                  'AI-powered analytics delivering 30,000% ROI and real-time insights.',
                icon: '📊',
                metrics: [
                  '30,000% ROI',
                  '$750B+ Savings',
                  'Real-time Analytics',
                ],
              },
              {
                title: 'Quantum Security',
                description:
                  'Quantum-resistant cryptography with 99.99% security against attacks.',
                icon: '🔒',
                metrics: ['99.99% Security', '<1ms Overhead', 'Zero Breaches'],
              },
              {
                title: 'Predictive Analytics',
                description:
                  'Advanced ML models with 99.7% accuracy for business forecasting.',
                icon: '🔮',
                metrics: ['99.7% Accuracy', 'Real-time Predictions', 'Auto-scaling'],
              },
              {
                title: 'Process Automation',
                description:
                  'End-to-end automation reducing manual work by 90% and errors by 99%.',
                icon: '⚡',
                metrics: ['90% Work Reduction', '99% Error Reduction', '24/7 Operations'],
              },
              {
                title: 'Cloud Migration',
                description:
                  'Seamless cloud transformation with zero downtime and 50% cost savings.',
                icon: '☁️',
                metrics: ['Zero Downtime', '50% Cost Savings', 'Auto-scaling'],
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <div className="space-y-2">
                  {solution.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-cyan-400"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join 500+ Fortune 500 companies already using our AI solutions to
            drive unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span>Get Started Today</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}