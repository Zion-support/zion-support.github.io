import React from "react";
import { Helmet } from "react-helmet-async";

export default function Blog(): React.JSX.Element {
  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | Latest AI & IT Insights</title>
        <meta
          name="description"
          content="Stay updated with the latest insights, trends, and innovations in AI and IT solutions from Zion Tech Group experts."
        />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta
          property="og:description"
          content="Latest AI & IT insights and innovations"
        />
      </Helmet>

      <main className="container mx-auto px-4 py-16" data-testid="blog-page">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI
            and IT solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                December 15, 2024
              </div>
              <h3 className="text-xl font-semibold mb-3">
                The Future of AI in Business
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how artificial intelligence is transforming modern
                business operations and what to expect in 2025.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">
                December 10, 2024
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Cybersecurity Best Practices
              </h3>
              <p className="text-gray-600 mb-4">
                Essential cybersecurity strategies to protect your business in
                an increasingly digital world.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </a>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600"></div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">December 5, 2024</div>
              <h3 className="text-xl font-semibold mb-3">
                Cloud Migration Strategies
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to successfully migrating your
                infrastructure to the cloud.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
