<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function app() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>App - Zion Tech Group</title>
        <meta name="description" content="App solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">App</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for modern businesses.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
          </p>
=======
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced AI and IT Solutions for Modern Businesses
        </p>
        <div className="mt-8">
          <a 
            href="/services" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Our Services
          </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
        </div>
      </div>
    </div>
  );
}