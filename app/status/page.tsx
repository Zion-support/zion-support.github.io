'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
const StatusPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Check the current status of our services and systems." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">System Status</h1>
            <p className="text-xl text-gray-600">All systems are operational</p>
          </div>
        </div>
      </div>
    </>
  );
};


export default StatusPage;