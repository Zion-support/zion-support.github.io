import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <Layout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for revolutionary AI and technology solutions."
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for revolutionary AI and technology solutions.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              Pricing page is under construction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}