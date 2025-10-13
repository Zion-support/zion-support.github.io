import React, { Helmet } from 'react-helmet-async';
export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learning tutorials by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">"
        <div className="text-center">"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tutorials;
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Learn from our comprehensive tutorials and guides.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>"
              <p className="text-gray-600">
                Beginner-friendly tutorials to get you started with our platform.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Topics</h3>"
              <p className="text-gray-600">
                Deep dive into advanced features and capabilities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">"
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>"
              <p className="text-gray-600">
                Learn industry best practices and optimization techniques.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
  );
}
