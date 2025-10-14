import React from "react";
import { Helmet } from "react-helmet-async";

const BlogPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Professional blog services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
            <p className="text-gray-300 text-lg mb-8">Professional blog services by Zion Tech Group.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

};

export default BlogPage;