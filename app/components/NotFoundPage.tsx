"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
      <Helmet>
        <title>NotFoundPage | Zion Tech Group</title>
        <meta name="description" content="Professional NotFoundPage services by Zion Tech Group." />
      </Helmet>

      <section className="py-20 px-4" loading="lazy">
        <div className="container mx-auto max-w-6xl" loading="lazy">
          <div className="text-center mb-16" loading="lazy">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" loading="lazy">NotFoundPage</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" loading="lazy">Professional NotFoundPage services tailored to your business needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
};



