import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAICustomerChurnPredictor() {
  return (
    <>
      <Helmet>
        <title>Zion AI Customer Churn Predictor - Zion Tech Group</title>
        <meta name="description" content="AI-powered customer churn prediction and prevention solution. Identify at-risk customers and take proactive retention actions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion AI Customer Churn Predictor
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered customer churn prediction and prevention solution that identifies at-risk customers and enables proactive retention actions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Churn Prediction</h3>
              <p className="text-gray-300">Predict customer churn with high accuracy using ML algorithms.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Risk Scoring</h3>
              <p className="text-gray-300">Score customers based on churn risk probability.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Retention Actions</h3>
              <p className="text-gray-300">Automated recommendations for customer retention strategies.</p>
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