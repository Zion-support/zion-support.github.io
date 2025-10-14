import React from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>AboutPage - Zion Tech Group</title>
        <meta name="description" content="AboutPage - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">AboutPage</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
=======

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">About Us</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-300 mb-8 text-center">
            Zion Tech Group is a leading technology company specializing in AI and IT solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation and growth.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in AI-powered technology solutions that transform industries.
              </p>
            </div>
          </div>
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default AboutPage;
=======
}
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
