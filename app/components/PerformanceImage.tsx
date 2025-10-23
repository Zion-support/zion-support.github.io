"use client";
import React from "react";
import Head from "next/head";

const PerformanceImagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>PerformanceImage | Zion Tech Group</title>
        </Head>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1>PerformanceImage
            </h1>
            <p>Professional PerformanceImage services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceImagePage;