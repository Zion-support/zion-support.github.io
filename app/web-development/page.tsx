'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const WebDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including React, Next.js, and modern web applications." />
        <meta name="keywords" content="web development, React, Next.js, modern web applications, frontend development" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional web development services including React, Next.js, and modern web applications.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopmentPage;