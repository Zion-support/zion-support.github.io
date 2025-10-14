import React from "react";
import { Helmet } from "react-helmet-async";

export default function CustomDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Professional custom development services by Zion Tech Group." />
      </Helmet>
        <meta name="keywords" content="custom development, software development, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Custom Development
          </h1>
          <p>Professional custom development services designed to help your business grow and succeed.</p>
          </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p>Our team of experts provides cutting-edge solutions tailored to your specific needs.</p>
            </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p>Round-the-clock support to ensure your systems run smoothly at all times.</p>
            </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p>Track record of delivering successful projects and exceeding client expectations.</p>
            </div>
  );
}