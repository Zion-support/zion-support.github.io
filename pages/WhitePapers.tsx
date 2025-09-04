import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function WhitePapers() {
  const whitePapers = [
    {
      title: "The Future of AI in Business: A Comprehensive Guide",
      description: "Explore how artificial intelligence is transforming business operations and what it means for your organization.",
      date: "January 2025",
      category: "AI & Machine Learning"
    },
    {
      title: "Digital Transformation: A Step-by-Step Implementation Guide",
      description: "Discover the key steps and strategies for successfully implementing digital transformation in your organization.",
      date: "November 2024",
      category: "Digital Transformation"
    },
    {
      title: "Cloud Migration Strategies: From Planning to Execution",
      description: "Comprehensive guide to migrating your infrastructure to the cloud with minimal disruption and maximum benefits.",
      date: "October 2024",
      category: "Cloud Computing"
    }
  ];

  return (
    <>
      <Head>
        <title>White Papers — Zion Tech Group</title>
        <meta name="description" content="In-depth research and insights on the latest technology trends and best practices." />
      </Head>

      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              White Papers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth research and insights on the latest technology trends and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {paper.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                <p className="text-gray-600 mb-4">{paper.description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  <p>Published: {paper.date}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Download
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}