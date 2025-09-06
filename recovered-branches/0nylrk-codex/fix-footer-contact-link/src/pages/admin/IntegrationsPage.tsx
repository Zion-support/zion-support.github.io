import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function IntegrationsPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <ProtectedRoute adminOnly={true}>;
      <SEO
        title="Integrations - Zion AI Marketplace"
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
      />
      <Header />
      <main className="min-h-screen bg-background">
        <IntegrationsHub />
      </main>
      <Footer />
    </ProtectedRoute>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
