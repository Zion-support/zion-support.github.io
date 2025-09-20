import React, { useState } from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/hooks/useAuth";

export default function TenantOnboarding() {
  const { user } = useAuth();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Tenant Onboarding</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>Tenant onboarding content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}