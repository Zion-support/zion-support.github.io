import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Technology Solutions</title>
        <meta name="description" content="Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-8">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Leading technology solutions provider specializing in web development, 
              mobile applications, AI integration, and cloud services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
                Learn More
            </div>
    </>
  );
}