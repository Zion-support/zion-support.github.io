import React from "react";
import { Helmet } from "react-helmet-async";

const SolutionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional solutions services by Zion Tech Group. Leading provider of AI and IT solutions." />
        <meta name="keywords" content="solutions, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900">
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional solutions services designed to help your business grow and succeed.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Solutions Services</h2>
              <p className="text-lg text-gray-300 mb-6">
                We provide comprehensive solutions tailored to your specific needs and requirements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SolutionsPage;
