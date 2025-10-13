import { ArrowRight, Settings, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ManagedServicesPage() {
  return (
    <>
      <Helmet>
        <title>Managed Services - Zion Tech Group | IT Managed Services</title>
        <meta name="description" content="Comprehensive managed IT services including monitoring, maintenance, and support to keep your systems running smoothly." />
        <meta name="keywords" content="managed services, IT management, system monitoring, IT maintenance" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Managed Services</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional managed services coming soon.
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