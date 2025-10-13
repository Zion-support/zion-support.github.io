import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function technologyConsulting() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Technology Consulting - Zion Tech Group</title>
        <meta name="description" content="Technology Consulting solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Technology Consulting</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function TechnologyConsultingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Technology Consulting - Zion Tech Group</title>
        <meta name="description" content="Advanced technology consulting solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Technology Consulting
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}