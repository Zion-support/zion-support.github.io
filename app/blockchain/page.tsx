import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";

const PageZionTechGroup = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Page</div>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          </p>
          Contact Us
          <title>5G Data Analytics - Zion Tech Group</title>
          <h1 className="text-4 xl font-boldtext-whitemb-6">Blockchain</h1>
          <p className="text-lgtext-gray-300mb-8">
            Professional blockchain services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
      </div>
    </>
  );
}
