<<<<<<< HEAD
import React, { useState } from "react";
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {IntegrationsHub} from "@/components/integrations/IntegrationsHub";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
<<<<<<< HEAD


export default function IntegrationsPage() {
=======
export default function IntegrationsPage() {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export default function IntegrationsPage() {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (

    <ProtectedRoute adminOnly={true}>;
      <SEO"
        title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
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
  )




}
=======

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SEO } from "@/components/SEO",

import { ProtectedRoute } from "@/components/ProtectedRoute",

export default function IntegrationsPage() {
  return (

    <ProtectedRoute adminOnly={true}>;
<<<<<<< HEAD
      <SEO,
title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems.""
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;"
import { SEO } from "@/components/SEO",;"
=======
<<<<<<< HEAD
      <SEO"
        title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."

      />
      <Header />"

      <main className="min-h-screen bg-background">
        <IntegrationsHub />
      </main>
      <Footer />
    </ProtectedRoute>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;
import { SEO } from "@/components/SEO",;
<<<<<<< HEAD

=======
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/chore/fix-lint-and-merge
export default function IntegrationsPage() {;
  return (;
    <ProtectedRoute adminOnly={true}>;
      <SEO;
        title="Integrations - Zion AI Marketplace";
        description="Connect your Zion account with CRMs and Applicant Tracking Systems.";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
}
  ),;}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
      <main className="min - h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
<<<<<<< HEAD
    </ProtectedRoute>);  ),;}
 export default function IntegrationsPage () {
  return (true 
}> <SEO title="Integrations - Zion AI Marketplace" description="Connect your Zion account with CRMs and Applicant Tracking Systems." /> <Header /> <main className="min-h-screen bg-background" > <IntegrationsHub /> </main> <Footer /> </ProtectedRoute>) 
});
}
;
}
;
=======
    </ProtectedRoute>);



}
<<<<<<< HEAD
  ),;}
 export default function IntegrationsPage () {
  return (true 
}> <SEO title="Integrations - Zion AI Marketplace" description="Connect your Zion account with CRMs and Applicant Tracking Systems." /> <Header /> <main className="min-h-screen bg-background" > <IntegrationsHub /> </main> <Footer /> </ProtectedRoute>) 
}
  );
}
;
}
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
