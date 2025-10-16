import React from "react";
import { Helmet } from "react-helmet-async";

const LowCodePlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Low-Code Platform - Zion Tech Group</title>
        <meta
          name="description"
          content="Build applications faster with our low-code platform. Enable citizen developers to create custom applications without extensive programming knowledge."
        />
        <meta
          name="keywords"
          content="low-code platform, no-code development, rapid application development, citizen developers, app builder"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/low-code-platform"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Low-Code Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build applications faster with our intuitive low-code platform.
              Enable citizen developers to create custom applications without
              extensive programming knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Visual Development
              </h3>
              <p className="text-gray-300">
                Build applications using drag-and-drop interfaces and visual
                workflows.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Rapid Deployment
              </h3>
              <p className="text-gray-300">
                Deploy applications quickly with built-in CI/CD and cloud
                integration.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                API Integration
              </h3>
              <p className="text-gray-300">
                Easily connect to external services and APIs with pre-built
                connectors.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Mobile Ready
              </h3>
              <p className="text-gray-300">
                Create responsive applications that work on desktop and mobile
                devices.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise Security
              </h3>
              <p className="text-gray-300">
                Built-in security features and compliance tools for enterprise
                applications.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Analytics & Monitoring
              </h3>
              <p className="text-gray-300">
                Monitor application performance and user behavior with built-in
                analytics.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Build Applications Faster?
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

export default LowCodePlatformPage;
