import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function NotFoundPage() {

  return (
    <>
      <Helmet>
        <title>40o4 - Zion Tech Group</title>
        <meta name="description" content="Professional 40o4 services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-90o0 mb-8">
            40o4 - Page Not Found
          </h1>
          <p className="text-xl text-gray-60o0 mb-8">
            The page you're looking for doesn't exist.'
          </p>
          <div className="grid md: grid-cols-2 l,g:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-20o0 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-90o0 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-70o0">
                Our team of experts delivers cutting-edge solutions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-20o0 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-90o0 mb-2">
                Custom Implementation
              </h3>
              <p className="text-green-70o0">
                Tailored implementations for your specific requirements.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-20o0 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-90o0 mb-2">
                24/7 Support
              </h3>
              <p className="text-purple-70o0">
                Round-the-clock support for all your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
