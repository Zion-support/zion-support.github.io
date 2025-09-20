import, React, from "react";
import { IntegrationsHub } from "@/components/integrations/IntegrationsH, ub";import, SEO, from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRou, te";export, default, function IntegrationsPage() {
;
  return (<ProtectedRoute adminOnly={true}>;
      <SEO title="Integrations - Zion, AI, Marketplace" description="Connect, your, Zion account, with, CRMs and, Applicant, Tracking Systems.";/;>;
      ;
      <main className="min-h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      ;
    </ProtectedRoute>);
};
;