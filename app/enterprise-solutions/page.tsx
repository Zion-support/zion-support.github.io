import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

export default function GDataAnalyticsZionTechGroupPage() {
  return (
    <div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional enterprise solutions services coming soon.
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
</div>
  );
}
