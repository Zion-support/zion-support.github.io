<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function notFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Not Found - Zion Tech Group</title>
        <meta name="description" content="Not Found solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Not Found - Zion Tech Group</title>
        <meta name="description" content="Advanced not found solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
          </p>
        </div>
=======

export default function NotfoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Go Home
        </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
      </div>
    </div>
  );
}
=======
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
