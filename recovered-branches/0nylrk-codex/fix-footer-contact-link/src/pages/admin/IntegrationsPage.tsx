
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
=======
import React, { useState } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { IntegrationsHub } from &quot;@/components/integrations/IntegrationsHub&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function IntegrationsPage() {
  return (
=======
import React, {_useState} from "react";

export default function IntegrationsPage() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
