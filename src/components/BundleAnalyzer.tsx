import React from "react";

const BundleAnalyzer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Bundle Analyzer</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-white mb-6">Bundle Analysis</h3>

            <div className="chart-placeholder h-64 flex items-center justify-center bg-gray-800 rounded-lg">
              <span className="text-gray-400">Bundle Chart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleAnalyzer;