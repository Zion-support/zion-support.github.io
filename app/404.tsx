import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16"></div>
        <div className="text-center"></div>
          <h1 className="text-4xl font-bold text-gray-900 mb-8"></h1>
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8"></p>
            Professional 404 solutions tailored to your business needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"></div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6"></div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2"></h3>
                Expert Solutions
              </h3>
              <p className="text-blue-700"></p>
                Our team of experts delivers cutting-edge 404 solutions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6"></div>
              <h3 className="text-lg font-semibold text-green-900 mb-2"></h3>
                Custom Implementation
              </h3>
              <p className="text-green-700"></p>
                Tailored 404 solutions designed for your specific needs.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6"></div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2"></h3>
                Advanced Technology
              </h3>
              <p className="text-purple-700"></p>
                State-of-the-art 404 technology for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}