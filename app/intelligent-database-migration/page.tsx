import React from 'react';
import { Helmet } from 'react-helmet-async';

const intelligentdatabasemigrationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Intelligent Database Migration | Zion Tech Group</title>
        <meta name="description" content="Professional intelligent database migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="intelligent database migration, AI solutions, IT services, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Intelligent Database Migration<p className="text-xl text-gray-300 mb-8">Professional intelligent database migration services powered by advanced AI and cutting-edge technology.</p>
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-cyan-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Advanced AI<p className="text-gray-300">Cutting-edge artificial intelligence solutions</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Expert Team<p className="text-gray-300">Experienced professionals with proven track record</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">24/7 Support<p className="text-gray-300">Round-the-clock technical support and monitoring</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >Get Started Today</a>
              </a>
              <div>
                <a
                  href="/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >← Back to Home</a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default intelligentdatabasemigrationPage;
