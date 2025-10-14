import React from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>HomePage - Zion Tech Group</title>
        <meta name="description" content="HomePage - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">HomePage</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
=======
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, 
            automation, and digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default HomePage;
=======
}
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
