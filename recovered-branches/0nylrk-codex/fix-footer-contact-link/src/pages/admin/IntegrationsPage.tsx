import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function IntegrationsPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


export default function IntegrationsPage() {

export default function IntegrationsPage() {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <ProtectedRoute adminOnly={true}>;
      <SEO"
        title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
<<<<<<< HEAD

import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",

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
  );
}



=======

}
;
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
