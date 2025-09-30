import React from 'react';

export default function LatestInsights(): React.JSX.Element React.JSX.Element {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with our latest thoughts on AI, technology, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">September 30, 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Privacy-Preserving Agents 2026
            </h3>
            <p className="text-gray-600 mb-4">
              On-device tools and scoped telemetry for enhanced privacy in AI systems.
            </p>
            <Link 
              to="/blog/privacy-preserving-agents-2026" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">September 30, 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Golden Paths ROI 2026
            </h3>
            <p className="text-gray-600 mb-4">
              Platform engineering that pays - maximizing return on investment.
            </p>
            <Link 
              to="/blog/golden-paths-roi-2026" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">September 30, 2025</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reliable RAG Ops 2026
            </h3>
            <p className="text-gray-600 mb-4">
              Freshness windows and KPI-tied quality budgets for reliable operations.
            </p>
            <Link 
              to="/blog/reliable-rag-ops-2026" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}