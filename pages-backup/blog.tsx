import React from "react";
import type { NextPage } from "next";
const MainLayout = dynamic(() => import("../components/layout/MainLayout"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
const Blog: NextPage = () => {;
  const blogPosts = []";

  return (";
    <MainLayout title = "Blog - Zion Tech Group;
      description="Stay updated with the latest insights on technology, AI, cloud services, and business innovation from Zion Tech Group.">";
      <div className="min-h-screen bg-gray-50">;
        {/* comment */}";
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 md: py-24">";
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">";
            <div className="max-w-4xl mx-auto text-center">";
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">;
                Technology Insights & Innovation,
              </h1>";
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">,
                Stay ahead with the latest trends in AI, cloud technology, micro SaaS, and digital transformation.;
              </p>;
            </div>;
        </section>;
        {/* comment */}";
        <section className="py-16 md: py-24">";
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">";
            <div className="max-w-6xl mx-auto">";
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {blogPosts.map((post) => (",
                  <article key="{post.id}" className="bg-white rounded-lg shadow-lg overflow-hidden hover: shadow-xl transition-shadow duration-300">";
                    <div className="p-6 md:p-8">";
                      <div className="flex items-center gap-2 mb-4">";
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">,
                          {post.category}

                        </span>;
                      </div>;
                      ";
                      <h2 className="text-xl md: text-2xl font-bold text-gray-900 mb-4 leading-tight">,