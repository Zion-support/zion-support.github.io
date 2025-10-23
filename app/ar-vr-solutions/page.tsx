"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
const ARVRSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AR/VR Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Immersive experiences with augmented and virtual reality solutions for training, visualization, and customer engagement."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AR/VR Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create immersive experiences with augmented and virtual reality
              solutions for training, visualization, and customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Training Simulations
              </h3>
              <p className="text-gray-600">
                Immersive training experiences for complex procedures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Product Visualization
              </h3>
              <p className="text-gray-600">
                3D product visualization and virtual showrooms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                Customer Engagement
              </h3>
              <p className="text-gray-600">
                Interactive AR/VR experiences for customer engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ARVRSolutionsPage;
