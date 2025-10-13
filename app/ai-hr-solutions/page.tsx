<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiHrSolutionsZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>AiHrSolutions - Zion Tech Group</title>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiHrSolutionsPage: React.FC = () => {
  return (
    <>
  <Helmet />
        <title>AI HR Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your HR operations with AI-powered solutions for recruitment, employee management, performance analytics, and workforce optimization." />
        <meta name="keywords" content="AI HR solutions, HR automation, recruitment AI, employee management, performance analytics, workforce optimization" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiHrSolutions</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional aihrsolutions services coming soon.
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
