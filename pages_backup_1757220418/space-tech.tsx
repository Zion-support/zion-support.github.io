import React from "react";
import Head from "next/head";

export default function SpaceTechPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Space Technology | Zion Tech Group</title>
        <meta name="description" content="Space mission control and satellite operations" />
      </Head>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Space Technology
          </h1>
          <p className="text-xl text-gray-600">
            Space technology page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
}
