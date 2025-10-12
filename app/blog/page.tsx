import React from 'react';
'use client';

const BlogPage: React.FC = () => {
return (
    <>
      <Helmet></Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Blog services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="blog, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Blog;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional blog services by Zion Tech Group.;
            </p>
          </div>

          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="text-2xlfont-boldtext-whitemb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensi v e blog solutions.;
              Contact us to learn more about our services.;
            </p>
            <button className="w-5h-5ml-2">Contact Us
            </button>
          </div>
      </div>
    </>
  );
};

export default BlogPage;