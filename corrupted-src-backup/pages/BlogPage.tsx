import React from "react";
import { Helmet } from "react-helmet-async";
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta
          name="description"
          content="Latest insights and breakthroughs in AI technology from Zion Tech Group."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest insights and breakthroughs in AI technology from Zion Tech
              Group.
            </p>
          </div>

          <LatestArticlesShowcase />
        </div>

        <LatestArticlesShowcase />
      </div>
    </div>
  );
};

export default BlogPage;
