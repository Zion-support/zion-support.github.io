import { ArrowRight, Server, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function DataCenterSolutionsPage() {
  return (
    <>
      <Helmet>
        <title>Data Center Solutions - Zion Tech Group | Data Center Services</title>
        <meta name="description" content="Comprehensive data center solutions including design, implementation, and management services for enterprise infrastructure." />
        <meta name="keywords" content="data center, infrastructure, server management, data center design" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Data Center Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional data center solutions coming soon.
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