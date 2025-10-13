import { ArrowRight, BarChart3, Globe, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function WebsiteAnalyticsToolPage() {
  return (
    <>
      <Helmet>
        <title>Website Analytics Tool - Zion Tech Group | Web Analytics Solution</title>
        <meta name="description" content="Advanced website analytics tool for tracking visitor behavior, performance metrics, and business insights." />
        <meta name="keywords" content="website analytics, web analytics, visitor tracking, performance metrics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Website Analytics Tool</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional web analytics solution coming soon.
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