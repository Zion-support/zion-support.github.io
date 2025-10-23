<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
export default function PagePage() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const NetworkInfrastructurePage: React.FC = () => {
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta
          name="description"
          content="Advanced page solutions by Zion Tech Group"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page solutions by Zion Tech Group
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-300">
              This page is under development. Please check back later for
              updates.
            </p>
          </div>
=======
        <title>Network Infrastructure - Zion Tech Group</title>
        <meta
          name="description"
          content="Design and implement robust network infrastructure solutions for your business."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Network Infrastructure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Robust network infrastructure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Network Design
              </h3>
              <p className="text-gray-600">
                Design secure, scalable network architectures tailored to your
                business needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Network Security
              </h3>
              <p className="text-gray-600">
                Implement comprehensive security measures to protect your
                network infrastructure.
              </p>
            </div>
          </div>
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default NetworkInfrastructurePage;
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
