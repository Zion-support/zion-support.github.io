import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>BlogPage - Zion Tech Group</title>
        <meta name="description" content="Professional blogpage services by Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              BlogPage
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional blogpage services by Zion Tech Group.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-6">Stay Updated</h2>"
              <p className="text-gray-300 mb-6">"
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"


                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">"
                  Subscribe;
                </button>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
=======
)
    </React.Fragment>)
>>>>>>> cursor/fix-errors-and-merge-to-main-c3d6
  );
}