import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, Zap, TrendingUp, Users, Lock, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description:
    'Enterprise-grade AI and IT solutions designed for large organizations. Scalable, secure, and reliable technology solutions.',
};

export default function EnterprisePage() {
  const solutions = [
    {
      title: 'Autonomous Operations',
      description: 'Self-managing and self-optimizing systems that reduce operational costs by 80% while improving efficiency.',
      icon: '🤖',
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and AI-driven insights that enable data-driven decision making at scale.',
      icon: '📊',
    },
    {
      title: 'Quantum Security',
      description: 'Next-generation quantum-resistant encryption to protect your critical business data.',
      icon: '🔐',
    },
  ];

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
        {/* Hero Section */}
        <div className='container mx-auto px-4 py-20'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h1 className='text-5xl font-bold text-white mb-6'>
                Enterprise Solutions
              </h1>
              <p className='text-xl text-gray-300 mb-8'>
                Advanced AI and IT solutions designed for large organizations
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Transform your enterprise with our proven AI solutions. Achieve
                $100M+ cost savings, 500% productivity gains, and 99.9% system
                uptime with enterprise-grade security and compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span>Schedule Enterprise Demo</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
                <Link
                  href="#solutions"
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
        </div>

        {/* Solutions Section */}
        <section id="solutions" className="py-24 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Enterprise Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered solutions designed for enterprise scale and complexity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">
                Enterprise-Grade Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-300">
                    Bank-level security with SOC 2 compliance and quantum-resistant encryption.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    High Performance
                  </h3>
                  <p className="text-gray-300">
                    99.9% uptime SLA with millisecond response times at enterprise scale.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Scalability
                  </h3>
                  <p className="text-gray-300">
                    Seamlessly scale from thousands to millions of users without degradation.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <Users className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    24/7 Support
                  </h3>
                  <p className="text-gray-300">
                    Dedicated support team available around the clock for enterprise clients.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <Lock className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Compliance
                  </h3>
                  <p className="text-gray-300">
                    GDPR, HIPAA, and SOC 2 compliant with comprehensive audit trails.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                  <Clock className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Fast Deployment
                  </h3>
                  <p className="text-gray-300">
                    Go live in weeks, not months, with our streamlined deployment process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Enterprise?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 500+ Fortune 500 companies achieving unprecedented
                transformation with our enterprise AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="tel:+13024640950"
                  className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="text-xl">📞</span>
                  <span>Call: (302) 464-0950</span>
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/30"
                >
                  <span className="text-xl">📧</span>
                  <span>Get Enterprise Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}