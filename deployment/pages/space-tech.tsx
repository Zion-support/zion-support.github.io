import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function SpaceTech() {
  return (
    <Layout 
      title="Space Technology - Zion Tech Group" 
      description="Advancing space technology and exploration solutions"
    >
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-white mb-16">
            <h1 className="text-6xl font-bold mb-8">
              Space Technology
            </h1>
            <p className="text-2xl mb-12 opacity-90">
              Pioneering the future of space exploration and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Satellite Technology</h3>
              <p className="opacity-90">
                Advanced satellite systems for communication, navigation, and Earth observation.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Space Exploration</h3>
              <p className="opacity-90">
                Cutting-edge technology for deep space missions and planetary exploration.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Space Manufacturing</h3>
              <p className="opacity-90">
                In-space manufacturing and assembly technologies for space infrastructure.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Space Tourism</h3>
              <p className="opacity-90">
                Commercial space travel and tourism solutions for the next generation.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Space Mining</h3>
              <p className="opacity-90">
                Resource extraction and utilization technologies for space-based materials.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">Space Habitats</h3>
              <p className="opacity-90">
                Sustainable living solutions for long-term space missions and colonization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}