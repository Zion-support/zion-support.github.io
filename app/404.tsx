import React from "react";
import { Helmet } from "react-helmet-async";
export default function NotFoundPage() {

  return (
    <>
      <Helmet>
        <title>44 - Zion Tech Group</title>
        <meta name="description" content="Professional 44 services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-90 mb-8">
            44 - Page Not Found
          </h1>
          <p className="text-xl text-gray-60 mb-8">
            The page you"re looking for doesn"t exist.'
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 border border-blue-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-90 mb-2">
                Expert Solutions
              </h3>
              <p className="text-blue-70">
                Our team of experts delivers cutting-edge solutions.
              </p>
            </div>
            <div className="bg-green-50 border border-green-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-90 mb-2">
                Custom Implementation
              </h3>
              <p className="text-green-70">
                Tailored implementations for your specific requirements.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-90 mb-2">
                24/7 Support
              </h3>
              <p className="text-purple-70">
                Round-the-clock support for all your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
