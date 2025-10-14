import { ArrowRight } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSmartExpenseCategorizer() {
  return (
    <>
      <Helmet>
        <title>Zion Smart Expense Categorizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered expense categorization and financial management solution. Automatically categorize and track business expenses with intelligent AI." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Smart Expense Categorizer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered expense categorization and financial management solution that automatically categorizes and tracks business expenses.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Auto Categorization</h3>
              <p className="text-gray-300">Automatically categorize expenses using advanced AI algorithms.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Receipt Processing</h3>
              <p className="text-gray-300">Process receipts and invoices with OCR and AI analysis.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Financial Reports</h3>
              <p className="text-gray-300">Generate detailed financial reports and insights.</p>
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