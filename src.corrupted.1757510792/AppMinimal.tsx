import React from "react";
import { SEO } from "@/components/SEO";

export default function AppMinimal(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AppMinimal - Zion Tech Group"
        description="Professional AppMinimal services by Zion Tech Group"
      />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AppMinimal</h1>
        <p className="text-gray-700 text-lg">
          Professional AppMinimal services to help your business grow.
        </p>
      </div>
    </div>
  );
}
