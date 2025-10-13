import { ArrowRight } from 'lucide-react';
export default function MobileApplications5GPage() {
  return (
    <>
      <Helmet>
        <title>5G Mobile Applications - Zion Tech Group</title>
        <meta
          name="description"
          content="Professional 5G mobile application development services"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            5G Mobile Applications
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional 5G mobile application development services by Zion Tech
            Group. Transform your business with our expert solutions.
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
