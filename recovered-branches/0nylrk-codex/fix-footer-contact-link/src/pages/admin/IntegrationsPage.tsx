
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
<<<<<<< HEAD
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
=======
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function IntegrationsPage() {
  return (
    <ProtectedRoute adminOnly={true}>
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
  )
<<<<<<< HEAD
}
=======
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;
import { SEO } from "@/components/SEO",;
import { ProtectedRoute } from "@/components/ProtectedRoute";
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
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
