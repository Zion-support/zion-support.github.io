import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group</title>
        <meta
          name="description"
          content="Meet the talented team behind Zion Tech Group's innovative solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-lg text-gray-300 mb-8">
            Meet the talented professionals who make Zion Tech Group's innovative solutions possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/careers"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}