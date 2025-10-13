import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Software Development - Coming Soon | Zion Tech Group</title>
        <meta name="description" content="Custom software development services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Software Development</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';


export default function SoftwareDevelopmentZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Professional software development services for modern applications." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Software Development
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional software development services for modern applications.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
      </div>
    </div>
  );
};

export default SoftwareDevelopmentPage;