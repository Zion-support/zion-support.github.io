import React from 'react';
import { Link } from 'react-router-dom';

const EnterprisePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-600">
                Advanced AI and IT solutions designed for large organizations
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              Transform your enterprise with our proven AI solutions. Achieve
              $100M+ cost savings, 500% productivity gains, and 99.9% system
              uptime with enterprise-grade security and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-700"
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
      <section id="solutions" className="py-24 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed for enterprise-scale operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Autonomous Operations',
                description: 'Self-managing systems that optimize operations 24/7',
                icon: '🤖'
              },
              {
                title: 'Business Intelligence',
                description: 'Advanced analytics and insights for strategic decisions',
                icon: '📊'
              },
              {
                title: 'Quantum Security',
                description: 'Next-generation security with quantum encryption',
                icon: '🔒'
              },
              {
                title: 'Quantum Computing',
                description: 'Next-generation computing power for complex business problems',
                icon: '⚛️'
              },
              {
                title: 'Enterprise AI',
                description: 'Custom AI solutions tailored to your business needs',
                icon: '🧠'
              },
              {
                title: 'Cloud Infrastructure',
                description: 'Scalable and secure cloud architecture',
                icon: '☁️'
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-300">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24">
            <div className="text-center bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
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
                  <span>Call Now</span>
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
        </div>
      </section>
    </>
  );
};

export default EnterprisePage;