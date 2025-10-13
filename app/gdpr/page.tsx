<<<<<<< HEAD
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Page
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="GDPR compliance and data protection services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GDPR Compliance
>>>>>>> cursor/fix-errors-and-merge-to-main-c22f
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
<<<<<<< HEAD
=======
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-c22f
        </div>
      </div>
    </div>
  );
}