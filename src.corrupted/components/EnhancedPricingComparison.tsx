import React from "react"
import { Link } from "react-router-dom"
export const EnhancedPricingComparison = () => {;
  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">;
      <div className="max-w-7xl mx-auto px-6">;
        <div className="text-center mb-16">;
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">;
            Enhanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pricing</[^>]*>
          </[^>]*>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
            Competitive pricing for our comprehensive technology solutions;
          </[^>]*>
        </[^>]*>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">;
            <h3 className="text-2xl font-bold text-white mb-4">Starter</[^>]*>
            <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></[^>]*>
            <ul className="space-y-3 mb-8">;
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Basic AI Analytics;
              </[^>]*>
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Cloud Storage (10GB);
              </[^>]*>
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Email Support;
              </[^>]*>
            </[^>]*>
            <Link to="/pricing" className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">;
              Get Started;
            </[^>]*>
          </[^>]*>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/50 relative">;
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-semibold">;
              Most Popular;
            </[^>]*>
            <h3 className="text-2xl font-bold text-white mb-4">Professional</[^>]*>
            <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></[^>]*>
            <ul className="space-y-3 mb-8">;
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Advanced AI Analytics;
              </[^>]*>
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Cloud Storage (100GB);
              </[^>]*>
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Priority Support;
              </[^>]*>
            </[^>]*>
            <Link to="/pricing" className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">;
              Get Started;
            </[^>]*>
          </[^>]*>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">;
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</[^>]*>
            <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-400">/month</span></[^>]*>
            <ul className="space-y-3 mb-8">;
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Full AI Suite;
              </[^>]*>
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                Unlimited Storage;
              </[^>]*>
              <li className="flex items-center text-gray-300">;
                <span className="text-green-400 mr-2">✓</[^>]*>
                24/7 Support;
              </[^>]*>
            </[^>]*>
            <Link to="/pricing" className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">;
              Contact Sales;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default EnhancedPricingComparison;