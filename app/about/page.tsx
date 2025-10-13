<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

export default function about() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="About solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
=======
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading provider of advanced AI and IT solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide cutting-edge AI and IT solutions that transform businesses and drive innovation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the global leader in AI-powered business solutions and digital transformation.
            </p>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
        </div>
      </div>
    </div>
  );
}
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
