import React from "react"
import { Link } from "react-router-dom"
export const AIServicesShowcase = () => {;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto px-6">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
            AI-Powered <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</[^>]*>
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Transform your business with cutting-edge artificial intelligence and machine learning solutions;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
            <div className="text-4xl mb-4">🤖</[^>]*>
            <h3 className="text-xl font-semibold text-white mb-3">AI Analytics</[^>]*>
            <p className="text-gray-300 mb-4">Advanced analytics powered by machine learning algorithms</[^>]*>
            <Link to="/services/ai-analytics" className="text-cyan-400 hover:text-cyan-300">;
              Learn More →;
            </[^>]*>
          </[^>]*>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
            <div className="text-4xl mb-4">🔍</[^>]*>
            <h3 className="text-xl font-semibold text-white mb-3">Predictive Insights</[^>]*>
            <p className="text-gray-300 mb-4">Forecast trends and make data-driven decisions</[^>]*>
            <Link to="/services/predictive-analytics" className="text-cyan-400 hover:text-cyan-300">;
              Learn More →;
            </[^>]*>
          </[^>]*>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">;
            <div className="text-4xl mb-4">⚡</[^>]*>
            <h3 className="text-xl font-semibold text-white mb-3">Automation</[^>]*>
            <p className="text-gray-300 mb-4">Streamline operations with intelligent automation</[^>]*>
            <Link to="/services/automation" className="text-cyan-400 hover:text-cyan-300">;
              Learn More →;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default AIServicesShowcase;