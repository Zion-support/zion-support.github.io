"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
const ItSupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Support Services - Zion Tech Group</title>

      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              IT Support Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get reliable IT support services with 24/7 monitoring,
              troubleshooting, and technical assistance for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
              <p className="text-gray-600">
                Round-the-clock system monitoring and proactive issue detection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Help Desk Support</h3>
              <p className="text-gray-600">
                Expert technical support for all your IT needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Remote Assistance</h3>
              <p className="text-gray-600">
                Quick remote troubleshooting and problem resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItSupportPage;
