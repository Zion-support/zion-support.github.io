import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client'
export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Professional 404 services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8">;
            404;
          </h1>;
          <p className="text-xl text-gray-600 mb-8">;
            Professional 404 solutions tailored to your business needs.;
          </p>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">;
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-blue-900 mb-2">;
                Expert Solutions;
              </h3>;
              <p className="text-blue-700">;
                Our team of experts delivers cutting-edge 404 solutions.;
              </p>;
            </div>;
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-green-900 mb-2">;
                Custom Implementation;
              </h3>;
              <p className="text-green-700">;
                Tailored 404 implementations for your specific requirements.;
              </p>;
            </div>;
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">;
              <h3 className="text-lg font-semibold text-purple-900 mb-2">;
                24/7 Support;
              </h3>;
              <p className="text-purple-700">;
                Round-the-clock support for all your 404 needs.;
              </p>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>
  );
}