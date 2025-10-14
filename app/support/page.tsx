<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group support page." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>
          <p className="text-xl text-gray-600">
            Welcome to our support page.
          </p>
=======
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help</title>
        <meta name="description" content="Get support for your Zion Tech Group services. Find help, documentation, and contact our support team." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Support</h1>
          <p className="text-gray-300">Coming soon...</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
        </div>
      </div>
    </>
  );
<<<<<<< HEAD
};

export default SupportPage;
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e238
