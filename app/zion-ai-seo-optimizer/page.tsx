import { ArrowRight } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAiSeoOptimizerZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>ZionAiSeoOptimizer - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ZionAiSeoOptimizer
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional zionaiseooptimizer services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <div className="w-6 h-6 bg-blue-500 rounded" />
          </Link>
        </div>
      </div>
    </>
  );
}
