import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function SolutionsPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional solutions services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional solutions services designed to help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="border border-purple-600 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}