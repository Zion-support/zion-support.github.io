import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function October2025AIObservabilitySpotlightBanner() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-950 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            👁️ BREAKTHROUGH TECHNOLOGY - OCTOBER 2, 2025
          </div>
          <h3 className="text-5xl font-bold mb-4">
            Next-Gen AI Observability Platform
          </h3>
          <p className="text-2xl text-blue-200 mb-2">
            Intelligent Monitoring That Predicts, Prevents & Resolves Issues Automatically
          </p>
          <p className="text-xl text-blue-300">
            $3.7B Enterprise Value • 96% Faster Resolution • 87% Alert Reduction
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$3.7B</div>
              <div className="text-sm text-gray-300">Total Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">8 min</div>
              <div className="text-sm text-gray-300">MTTR (from 3.5 hours)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-sm text-gray-300">Anomaly Detection Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">87%</div>
              <div className="text-sm text-gray-300">Alert Volume Reduction</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-6 rounded-xl border border-cyan-500/50">
            <h4 className="text-2xl font-bold mb-4">🎯 Core Capabilities</h4>
            <ul className="space-y-2">
              <li>✅ Intelligent anomaly detection with 98% accuracy</li>
              <li>✅ Automated root cause analysis in seconds</li>
              <li>✅ Predictive analytics for capacity & failures</li>
              <li>✅ Smart alerting with 95% noise reduction</li>
              <li>✅ AI-powered dashboards that adapt automatically</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/50">
            <h4 className="text-2xl font-bold mb-4">💰 Business Impact</h4>
            <ul className="space-y-2">
              <li>💎 $840M infrastructure cost optimization</li>
              <li>💎 $1.2B prevented revenue loss from outages</li>
              <li>💎 $470M reduced operations overhead</li>
              <li>💎 92% issues predicted before user impact</li>
              <li>💎 99.98% availability improvement</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/blog/ai-2025-october-2-next-gen-ai-observability-platform"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-xl font-bold text-xl hover:from-cyan-600 hover:to-blue-600 transition-all shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105"
          >
            🚀 Read Complete Platform Guide + Enterprise Success Story
          </Link>
        </div>
      </div>
    </div>
  );
}
=======

interface October2025AIObservabilitySpotlightBannerProps {
  className?: string;
  children?: React.ReactNode;
}

const October2025AIObservabilitySpotlightBanner: React.FC<October2025AIObservabilitySpotlightBannerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`october2025aiobservabilityspotlightbanner-component ${className}`}>
      {children || (
        <div className="p-4 text-center text-gray-600">
          <h3 className="text-lg font-semibold mb-2">October2025AIObservabilitySpotlightBanner</h3>
          <p>Component placeholder - implementation needed</p>
        </div>
      )}
    </div>
  );
};

export default October2025AIObservabilitySpotlightBanner;
>>>>>>> cursor/fix-errors-and-merge-to-main-8d57
