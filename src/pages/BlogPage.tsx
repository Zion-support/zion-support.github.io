import React from "react";
import {
  Helmet,
} from "react-helmet-async";
import LatestArticlesShowcase from "../components/LatestArticlesShowcase";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Blog - Zion Website</title>
        <meta name="description" content="Read our latest articles on AI, technology, and business innovation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI and technology.
          </p>
        </div>

        <LatestArticlesShowcase />
      </div>
    </div>
  );
};

export default BlogPage;
