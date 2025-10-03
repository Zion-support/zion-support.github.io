import React from "react";
import { Helmet } from "react-helmet-async";

const Careers: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group to build enterprise-grade AI, micro SaaS, and IT solutions." /></Helmet>
      
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Careers</h1>
            <p className="text-gray-700 mb-6">
              Join Zion Tech Group to build enterprise-grade AI, micro SaaS, and IT solutions. 
              We're always looking for talented engineers, designers, and product leaders.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Competitive salary and equity packages</li>
              <li>Flexible work arrangements</li>
              <li>Professional development opportunities</li>
              <li>Cutting-edge technology stack</li>
              <li>Collaborative team environment</li>
            </ul>
            <div className="mt-8">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Open Positions
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
';

export default Careers;