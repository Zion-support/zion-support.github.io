import React from "react";
import { Helmet } from "react-helmet-async";

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered forecasting, inventory optimization, 
              and real-time monitoring. Reduce costs by up to 40% and improve efficiency.
            </p>
            <FuturisticButton className="text-lg px-8 py-4">
              Get Started
            </FuturisticButton>
          </div>
        </div>
      </FuturisticBackground>
import { Helmet } from "react-helmet-async";
;
const HomePage = () => {"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>Home - Zion Tech Group</title>""
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet>""
      <div className="container mx-auto px-4 py-16"></div>""
        <div className="text-center"></div>""
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>""
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
