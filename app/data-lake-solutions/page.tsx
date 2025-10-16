import React from "react";
import { Helmet } from "react-helmet-async";

const DataLakeSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Data Lake Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Build scalable data lakes for big data analytics and AI. Store, process, and analyze massive amounts of structured and unstructured data."
        />
        <meta
          name="keywords"
          content="data lake solutions, big data analytics, data storage, data processing, data warehouse, analytics platform"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/data-lake-solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Data Lake Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build scalable data lakes for big data analytics and AI. Store,
              process, and analyze massive amounts of structured and
              unstructured data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏞️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Data Storage
              </h3>
              <p className="text-gray-300">
                Store massive amounts of structured and unstructured data in a
                centralized repository.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-time Processing
              </h3>
              <p className="text-gray-300">
                Process data in real-time with stream processing and batch
                analytics capabilities.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Data Discovery
              </h3>
              <p className="text-gray-300">
                Discover and catalog data assets with intelligent metadata
                management.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Analytics Platform
              </h3>
              <p className="text-gray-300">
                Build advanced analytics and machine learning models on your
                data lake.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Data Governance
              </h3>
              <p className="text-gray-300">
                Implement data governance, security, and compliance policies.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Cloud Integration
              </h3>
              <p className="text-gray-300">
                Integrate with cloud platforms and services for scalable data
                processing.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Build Your Data Lake?
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

export default DataLakeSolutionsPage;
