import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { Satellite, CheckCircle, Globe2 } from 'lucide-react';

const features = [
  "Mission Control Systems",
  "Satellite Operations",
  "Secure Communications",
  "Earth Observation",
  "Space Data Analytics",
  "Mission Planning"
];

export default function SpaceTechPage() {
  return (
    <Layout>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta
          name="description"
          content="Space mission control, satellite operations, and secure communications consulting."
        />
        <link rel="canonical" href="https://ziontechgroup.com/space-tech" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Satellite className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Space Technology
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Secure, reliable operations for space and earth observation missions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Discuss a Mission
              </a>
              <a href="/market-pricing" className="px-8 py-4 border border-cyan-500 text-cyan-300 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                See Market Pricing
              </a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-2xl p-8">
            <div className="text-center">
              <Globe2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Global Space Operations</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Supporting space missions worldwide with cutting-edge technology and expertise.
              </p>
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Contact Our Space Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}