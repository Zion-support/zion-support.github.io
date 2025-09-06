

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
  )
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
