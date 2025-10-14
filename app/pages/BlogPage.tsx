"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

const BlogPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>BlogPage - Zion Tech Group</title>
        <meta name="description" content="BlogPage - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">BlogPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPage;
