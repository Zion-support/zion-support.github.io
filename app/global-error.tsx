import React from "react";
import { Helmet } from "react-helmet-async";
import { Home, ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>Global Error - Zion Tech Group</title>
        <meta name="description" content="A global error occurred. Please refresh the page." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">Global Error</h1>
          <p className="text-xl text-gray-300 mb-8">
            A global error occurred. Please refresh the page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg inline-flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}