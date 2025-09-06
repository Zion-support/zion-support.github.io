
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

>>>>>>> main
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {IntegrationsHub} from "@/components/integrations/IntegrationsHub";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export default function IntegrationsPage() {;

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function IntegrationsPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <ProtectedRoute adminOnly={true}>;
      <SEO
        title="Integrations - Zion AI Marketplace"
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."

=======


>>>>>>> main
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
<<<<<<< HEAD
=======

>>>>>>> main
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { IntegrationsHub } from '@/components / integrations / IntegrationsHub';
import { SEO } from '@/components / SEO';
import { ProtectedRoute } from '@/components / ProtectedRoute';
export default /**
 * IntegrationsPage - Function description
 */
function IntegrationsPage() {
  return (
    <ProtectedRoute admin_only={true}>;
      <SEO;
        title="Integrations - Zion AI Marketplace";
        description="Connect your Zion account with CRMs and Applicant Tracking Systems.";
      />;
      <Header />;
      <main className="min - h-screen bg - background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
    </ProtectedRoute>);
=======



}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
