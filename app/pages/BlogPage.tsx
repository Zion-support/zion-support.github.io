import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Latest insights and updates from Zion Tech Group" />
        <meta name="keywords" content="blog, tech insights, AI, IT solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>
        <div className="container mx-autopx-4py-16"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl font-boldtext-whitemb-8">Blog</h1>
            <div className="text-gray-400"></div>
              <p>Blog posts coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPage;