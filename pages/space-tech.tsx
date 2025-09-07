// import React from "react";
// import Head from "next/head";
// import Layout from "../components/layout/Layout";

export default function SpaceTech() {
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
              <div className="w-8 h-8 text-white">🚀</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Space Technology
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Secure, reliable operations for space and earth observation missions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700">
                Discuss a Mission
              </a>
              <a href="/market-pricing" className="px-8 py-4 border border-cyan-600 text-cyan-300 rounded-lg hover:bg-cyan-600/10">
                See Market Pricing
              </a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Mission Control', 'Satellite Operations', 'Secure Communications', 'Earth Observation'].map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60"
                >
                  <div className="w-5 h-5 text-emerald-400 mt-0.5">✓</div>
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <a
              href="/space-technology"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
            >
              <div className="w-4 h-4">🌐</div>
              <span>Explore detailed Space Technology offerings</span>
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
}
