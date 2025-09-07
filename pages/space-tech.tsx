import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Satellite, CheckCircle, Globe2 } from "@heroicons/react/24/outline";

const features = [
  "Mission Control Systems",
  "Satellite Operations",
  "Secure Communications",
  "Earth Observation",
  "Space Data Analytics",
  "Mission Planning"
];

export default function SpaceTech() {
  return (
    <Layout>
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta
          name="description"
          content="Space mission control, satellite operations, and secure communications consulting."
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Space Technology Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced space technology consulting and mission control systems.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Space Technology page is under construction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}