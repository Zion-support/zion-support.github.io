import React from "react";
import { Helmet } from "react-helmet-async";

const RoboticProcessAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Robotic Process Automation (RPA) Solutions - Zion Tech Group
        </title>
        <meta
          name="description"
          content="Automate repetitive business processes with our advanced RPA solutions. Increase efficiency, reduce errors, and free up your team for higher-value work."
        />
        <meta
          name="keywords"
          content="robotic process automation, RPA solutions, business process automation, workflow automation, digital transformation"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/robotic-process-automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Robotic Process Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate repetitive business processes with our advanced RPA
              solutions. Increase efficiency, reduce errors, and free up your
              team for higher-value work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Process Automation
              </h3>
              <p className="text-gray-300">
                Automate repetitive tasks across multiple systems and
                applications seamlessly.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Data Processing
              </h3>
              <p className="text-gray-300">
                Automate data entry, validation, and processing tasks with high
                accuracy.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Email Automation
              </h3>
              <p className="text-gray-300">
                Automate email processing, responses, and follow-up workflows.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Document Processing
              </h3>
              <p className="text-gray-300">
                Automate document creation, formatting, and distribution
                processes.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Financial Automation
              </h3>
              <p className="text-gray-300">
                Automate invoice processing, payment reconciliation, and
                financial reporting.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Analytics & Reporting
              </h3>
              <p className="text-gray-300">
                Generate automated reports and analytics from multiple data
                sources.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Automate Your Processes?
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

export default RoboticProcessAutomationPage;
