"use client";

import React from "react";
import Footer from "../components/Footer";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Page Title</h1>
        <p className="text-xl text-gray-300">Content coming soon...</p>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
