
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",export default function IntegrationsPage() {
  return (
import React, {_useState} from "react";

export default function IntegrationsPage() {_return (
    <ProtectedRoute adminOnly={true}>
      <SEO
        title=&quot;Integrations - Zion AI Marketplace&quot;
        description=&quot;Connect your Zion account with CRMs and Applicant Tracking Systems.&quot;
      />
      <Header />
      <main className=&quot;min-h-screen bg-background&quot;>
        <IntegrationsHub />
      </main>
      <Footer />
    </ProtectedRoute>
  )
}
