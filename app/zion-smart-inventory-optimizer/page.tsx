import { ArrowRight } from "lucide-react";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSmartInventoryOptimizer() {
  return (
    <>
      <Helmet>
        <title>Zion Smart Inventory Optimizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered inventory optimization solution for businesses. Reduce costs, minimize waste, and maximize efficiency with our smart inventory management system." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Smart Inventory Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered inventory optimization solution that reduces costs, minimizes waste, and maximizes efficiency for your business.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">Advanced AI algorithms predict demand patterns and optimize stock levels.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Cost Reduction</h3>
              <p className="text-gray-300">Reduce inventory costs by up to 30% through intelligent optimization.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
              <p className="text-gray-300">Monitor inventory levels and get alerts for optimal restocking.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}