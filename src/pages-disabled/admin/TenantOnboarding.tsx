import React, { useState } from "react",
import Header from "@/components/Header",
import { SEO } from "@/components/SEO",
export default function TenantOnboarding() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <Header />
      <SEO title="Tenant Onboarding" description="Onboard new tenants" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Tenant Onboarding
        </h1>
        <p className="text-zion-cyan text-center">
          Onboarding process coming soon...
        </p>
      </div>
    </div>
  );
}