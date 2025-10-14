<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Main - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Main</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Professional main services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Main Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Service 1</h2>
            <p className="text-gray-600">Description of service 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Service 2</h2>
            <p className="text-gray-600">Description of service 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Service 3</h2>
            <p className="text-gray-600">Description of service 3</p>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MainPage;
=======
export default Main;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
