import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>AI & Technology Blog | Zion Tech Group</title>
        <meta name="description" content="Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, enterprise technology, automation insights, digital transformation" />
        <meta property="og:title" content="AI & Technology Blog | Zion Tech Group" />
        <meta property="og:description" content="Latest insights on AI, enterprise automation, and digital transformation from Zion Tech Group experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>
      
      <div className='min-h-screen bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-8'>
          <header className='text-center mb-12'>
            <h1 className='text-4xl font-bold mb-4'>AI & Technology Blog</h1>
            <p className='text-xl text-gray-300'>
              Latest insights on AI, enterprise automation, and digital
              transformation
            </p>
          </header>

          <div className='max-w-4xl mx-auto'>
            <div className='bg-gray-800 rounded-lg p-8 text-center'>
              <h2 className='text-2xl font-semibold mb-4'>Coming Soon</h2>
              <p className='text-gray-300 mb-6'>
                We&apos;re working on bringing you the latest insights and
                breakthroughs in AI and enterprise technology.
              </p>
              <Link
                to='/'
                className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors'
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}