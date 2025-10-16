import React from "react";
import { Helmet } from "react-helmet-async";

const EdgeComputingSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Edge Computing Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced edge computing solutions for real-time processing, IoT applications, and distributed computing. Reduce latency and improve performance with edge technology."
        />
        <meta
          name="keywords"
          content="edge computing, IoT solutions, real-time processing, distributed computing, edge infrastructure"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/edge-computing-solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Edge Computing Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bring computing power closer to your data sources with our
              advanced edge computing solutions. Reduce latency, improve
              performance, and enable real-time processing for IoT and AI
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Real-time Processing
              </h3>
              <p className="text-gray-300">
                Process data at the edge for ultra-low latency and real-time
                decision making.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                IoT Integration
              </h3>
              <p className="text-gray-300">
                Seamlessly integrate with IoT devices and sensors for
                comprehensive edge solutions.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Enhanced Security
              </h3>
              <p className="text-gray-300">
                Keep sensitive data local with advanced security and privacy
                protection.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Data Analytics
              </h3>
              <p className="text-gray-300">
                Analyze data locally before sending to the cloud for efficient
                bandwidth usage.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                AI at the Edge
              </h3>
              <p className="text-gray-300">
                Run AI models locally for instant inference without cloud
                dependency.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Hybrid Cloud
              </h3>
              <p className="text-gray-300">
                Seamlessly connect edge devices with cloud infrastructure for
                optimal performance.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Deploy Edge Computing?
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

export default EdgeComputingSolutionsPage;
