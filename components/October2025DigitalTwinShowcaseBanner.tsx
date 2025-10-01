import React from 'react';

export default function October2025DigitalTwinShowcaseBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-sm border-y border-blue-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 mb-4">
              <span className="text-blue-400 font-bold text-base tracking-wider uppercase">
                🏭 FEATURED: DIGITAL TWIN TRANSFORMATION SUITE
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Complete Digital Twin Transformation Package
            </h3>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Everything you need to implement AI-powered digital twins: comprehensive guide, 
              proven case study, and professional services - all published October 2025.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Blog Post */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📖</div>
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase">Technical Guide</div>
                  <div className="text-sm text-gray-400">12 min read</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                AI-Powered Digital Twins
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                Complete implementation framework with IoT architecture, AI models, and optimization strategies.
              </p>
              <ul className="text-xs text-gray-400 mb-4 space-y-1">
                <li>• Real-time synchronization</li>
                <li>• Predictive AI models</li>
                <li>• Simulation & testing</li>
                <li>• ROI analysis</li>
              </ul>
              <a
                href="/blog/ai-2025-oct-digital-twins-enterprise-transformation"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300"
              >
                Read Guide →
              </a>
            </div>

            {/* Case Study */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💰</div>
                <div>
                  <div className="text-xs text-indigo-400 font-semibold uppercase">Success Story</div>
                  <div className="text-sm text-gray-400">Fortune 100</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                $1.2B Manufacturing Success
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                How a global leader achieved breakthrough results with 250-facility digital twin deployment.
              </p>
              <ul className="text-xs text-gray-400 mb-4 space-y-1">
                <li>• $1.2B annual savings</li>
                <li>• 45% downtime reduction</li>
                <li>• 87% quality improvement</li>
                <li>• 2,082% ROI</li>
              </ul>
              <a
                href="/case-studies/ai-2025-oct-manufacturing-digital-twin-1-2-billion-success"
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300"
              >
                View Case Study →
              </a>
            </div>

            {/* Service */}
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <div className="text-xs text-purple-400 font-semibold uppercase">Professional Services</div>
                  <div className="text-sm text-gray-400">Expert-Led</div>
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                Transformation Services
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                End-to-end digital twin implementation with strategy, deployment, and optimization.
              </p>
              <ul className="text-xs text-gray-400 mb-4 space-y-1">
                <li>• Strategy & assessment</li>
                <li>• Pilot implementation</li>
                <li>• Enterprise deployment</li>
                <li>• Continuous optimization</li>
              </ul>
              <a
                href="/services/digital-twin-transformation-services"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300"
              >
                Explore Services →
              </a>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">
              <span className="font-semibold text-blue-400">JUST PUBLISHED:</span> Complete digital twin 
              transformation suite with proven methodologies, real success metrics, and professional implementation support.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-400 hover:via-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
            >
              Schedule Free Consultation →
            </a>
            <p className="text-xs text-gray-500 mt-2">
              Speak with our digital twin experts • ROI analysis included • No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
