import React from "react";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Satellite, Orbit, Shield, Zap } from "lucide-react";

export default function SpaceTechPage() {
  return (
    <Layout>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta 
          name="description"
          content="Space mission control, satellite operations, and secure communications consulting."
        />
        <link rel="canonical" href="https://ziontechgroup.com/space-tech" />
      </Head>
      
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Satellite className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Space Technology
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced space mission control, satellite operations, and secure communications 
              for the next generation of space exploration.
            </p>
          </header>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Orbit className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission Control</h3>
              <p className="text-gray-600 mb-6">
                Real-time satellite tracking, orbital mechanics, and mission planning 
                for commercial and government space operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Ground station management</li>
                <li>• Telemetry analysis</li>
                <li>• Trajectory optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Communications</h3>
              <p className="text-gray-600 mb-6">
                Encrypted satellite communications and secure data transmission 
                for sensitive space operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Quantum encryption</li>
                <li>• Secure uplink/downlink</li>
                <li>• Anti-jamming systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Power Systems</h3>
              <p className="text-gray-600 mb-6">
                Advanced power management and energy systems for long-duration 
                space missions and satellite constellations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Solar array optimization</li>
                <li>• Battery management</li>
                <li>• Power distribution</li>
              </ul>
            </div>
          </section>

          <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Launch?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Partner with us for your next space mission. From concept to launch, 
                we provide the technology and expertise you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                  Start Your Mission
                </button>
                <button className="border border-gray-400 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}