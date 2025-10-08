import React from 'react';
import { Link } from 'react-router-dom';

export default function EnterprisePage() {
  const solutions = [
    {
      icon: '🤖',
      title: 'AI-Powered Automation',
      description: 'Transform your business processes with intelligent automation'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Data-driven insights for strategic decision making'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'World-class security solutions for your business'
    }
  ];

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your enterprise with cutting-edge AI and automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
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
                  to="tel:+13024640950"
                  className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="text-xl">📞</span>
                  <span>Call Now</span>
                </Link>
                <Link
                  to="/contact"
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
}