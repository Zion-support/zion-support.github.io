import React from "react";
import { Helmet } from "react-helmet-async";

const AIMedicalAssistantPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Medical Assistant - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced AI-powered medical assistant for healthcare professionals. Streamline patient care, medical documentation, and clinical decision support with cutting-edge AI technology."
        />
        <meta
          name="keywords"
          content="AI medical assistant, healthcare AI, medical documentation, clinical decision support, medical automation"
        />
        <link
          rel="canonical"
          href="https://ziontechgroup.com/ai-medical-assistant"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              AI Medical Assistant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enhance patient care with our advanced AI-powered medical
              assistant. Streamline clinical workflows, improve diagnosis
              accuracy, and optimize healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Clinical Decision Support
              </h3>
              <p className="text-gray-300">
                Get AI-powered clinical insights and recommendations to support
                medical decision-making.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Medical Documentation
              </h3>
              <p className="text-gray-300">
                Automatically generate and organize patient records, notes, and
                medical reports.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Diagnostic Assistance
              </h3>
              <p className="text-gray-300">
                Analyze symptoms, medical images, and lab results to assist with
                accurate diagnoses.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Drug Interaction Checker
              </h3>
              <p className="text-gray-300">
                Identify potential drug interactions and contraindications for
                safer prescribing.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Patient Monitoring
              </h3>
              <p className="text-gray-300">
                Track patient vitals and health metrics with intelligent
                monitoring and alerts.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Medical Research
              </h3>
              <p className="text-gray-300">
                Access latest medical research and clinical guidelines with
                AI-powered search.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Enhance Healthcare Delivery?
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

export default AIMedicalAssistantPage;
