import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, our mission, and our commitment to providing innovative technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Zion Tech Group</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            We are a leading technology solutions provider specializing in AI, IT infrastructure, and innovative software development.
          </p>
          <div className="text-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}