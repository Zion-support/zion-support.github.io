import React from "react";
import SEOHead from "../components/SEOHead";

const AnalyticsDashboardPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Analytics Dashboard - Zion Tech Group"
        description="Comprehensive business intelligence and analytics platform with real-time insights and reporting."
        keywords="analytics, dashboard, business intelligence, reporting, data visualization, insights"
        canonicalUrl="https://ziontechgroup.com/analytics-dashboard"
      />

      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Analytics Dashboard Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business intelligence and analytics platform with
              real-time insights and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Real-time Dashboards
                    </h3>
                    <p className="text-gray-400">
                      Live data visualization with customizable dashboards and
                      widgets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Predictive Analytics
                    </h3>
                    <p className="text-gray-400">
                      AI-powered forecasting and trend analysis for better
                      decision making.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Custom Reports
                    </h3>
                    <p className="text-gray-400">
                      Generate detailed reports with automated scheduling and
                      distribution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Data Integration
                    </h3>
                    <p className="text-gray-400">
                      Connect to multiple data sources including databases,
                      APIs, and cloud services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white">Pricing</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  $349/mo
                </div>
                <div className="text-gray-400 line-through">$499/mo</div>
                <div className="text-sm text-purple-400">
                  Limited Time Offer
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Unlimited Dashboards</span>
                  <span className="text-purple-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Real-time Data</span>
                  <span className="text-purple-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Predictive Analytics</span>
                  <span className="text-purple-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Custom Reports</span>
                  <span className="text-purple-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">API Access</span>
                  <span className="text-purple-400">✓</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsDashboardPage;
