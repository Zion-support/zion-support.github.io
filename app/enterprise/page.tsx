import React from 'react';
import Link from 'next/link';
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
              <a href="/contact" className="group bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center">
                <span>Schedule Enterprise Demo</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
              <a
                href="#solutions"
                className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-700"
              >
                <span>View Solutions</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  &darr;
                </span>
              </a>
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
              Comprehensive suite of enterprise-grade AI and IT solutions tailored for large organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300">
                Automate complex workflows with advanced AI. Reduce manual work by 70% and improve accuracy.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-grade security with SOC 2 compliance, encryption, and advanced threat detection.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300">
                Real-time insights with predictive analytics. Make data-driven decisions faster.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable, resilient cloud architecture with 99.9% uptime guarantee.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Integration</h3>
              <p className="text-gray-300">
                Seamlessly integrate AI into existing systems. No disruption to operations.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Dedicated enterprise support team available around the clock.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default EnterprisePage;
