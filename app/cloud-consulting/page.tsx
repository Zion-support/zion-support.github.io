import { ArrowRight, Cloud, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudConsultingPage() {
  return (
    <>
      <Helmet>
        <title>Cloud Consulting - Zion Tech Group | Cloud Strategy & Migration</title>
        <meta name="description" content="Expert cloud consulting services for cloud strategy, migration, and optimization. Transform your business with cloud solutions." />
        <meta name="keywords" content="cloud consulting, cloud migration, cloud strategy, AWS, Azure, Google Cloud" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Consulting</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional cloud consulting services coming soon.
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