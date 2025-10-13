import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function DataAnalyticsBiZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>DataAnalyticsBi - Zion Tech Group</title>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async'
const DataAnalyticsBiPage: React.FC = () => {
  return (
    <>
  <Helmet />
        <title>Data Analytics & BI - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics and business intelligence solutions including data visualization, reporting, and insights for data-driven decision making." />
        <meta name="keywords" content="data analytics, business intelligence, data visualization, reporting, insights, data-driven decisions" /> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            DataAnalyticsBi
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional dataanalyticsbi services coming soon.
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
  )
}
export default DataAnalyticsBiPage origin/cursor/analyze-improve-and-deploy-application-1247
