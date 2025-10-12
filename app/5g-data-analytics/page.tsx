import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGDataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
export default function Page() {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group" />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-boldtext-white mb-6">5G Data Analytics</h1>
        <p className="text-lgtext-gray-300mb-8">Professional 5G data analytics services coming soon.</p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
      </div>
    </div>
  );
}
