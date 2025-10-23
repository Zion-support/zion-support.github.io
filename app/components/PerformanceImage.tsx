"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

const PerformanceImagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>PerformanceImage | Zion Tech Group</title>
        <meta name="description" content="Professional PerformanceImage services by Zion Tech Group." />
      </Helmet>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">PerformanceImage</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Professional PerformanceImage services tailored to your business needs.</p>p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceImagePage;
