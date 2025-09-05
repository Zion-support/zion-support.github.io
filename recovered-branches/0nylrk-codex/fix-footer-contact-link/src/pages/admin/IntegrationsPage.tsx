
<<<<<<< HEAD
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
export default function IntegrationsPage() {;
  return (;
    <ProtectedRoute adminOnly={true}>;
      <SEO;
        title="Integrations - Zion AI Marketplace";
        description="Connect your Zion account with CRMs and Applicant Tracking Systems.";
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  ),;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
