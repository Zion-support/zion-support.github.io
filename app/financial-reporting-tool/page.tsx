import { ArrowRight, BarChart3, DollarSign, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function FinancialReportingToolPage() {
  return (
    <>
      <Helmet>
        <title>Financial Reporting Tool - Zion Tech Group | Financial Analytics Solution</title>
        <meta name="description" content="Advanced financial reporting tool for comprehensive financial analysis, reporting, and business intelligence." />
        <meta name="keywords" content="financial reporting, financial analytics, business intelligence, financial dashboard" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Financial Reporting Tool</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional financial reporting solution coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}