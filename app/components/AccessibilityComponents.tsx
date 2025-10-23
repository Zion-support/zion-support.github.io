<<<<<<< HEAD
"use client";
import React from "react";
=======
import { Helmet } from "react-helmet-async";
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630

const AccessibilityComponents: React.FC = () => {
  return (
<<<<<<< HEAD
    <div>
      <h1>AccessibilityComponents</h1>
    </div>
=======
    <>
      <Helmet>
        <title>Components - Zion Tech Group</title>
        <meta
          name="description"
          content="Components services and solutions from Zion Tech Group."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Components</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional Components services and solutions for your business
              needs.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  );
};

export default AccessibilityComponents;
