"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

const FiveGSolutionsPage: React.FC = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      <Helmet>
        <title>5G Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions and implementation services by Zion Tech Group" />
        <meta property="og:title" content="5G Solutions | Zion Tech Group" />
        <meta property="og:description" content="Advanced 5G solutions and implementation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge 5G technology solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">

            <h3 className="text-xl font-semibold text-white mb-4">5G Network Implementation</h3>
            <p className="text-gray-300">Complete 5G network setup and optimization</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">

            <h3 className="text-xl font-semibold text-white mb-4">IoT Integration</h3>
            <p className="text-gray-300">Connect and manage IoT devices with 5G</p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">

            <h3 className="text-xl font-semibold text-white mb-4">Edge Computing</h3>
            <p className="text-gray-300">Deploy edge computing solutions with 5G</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FiveGSolutionsPage;