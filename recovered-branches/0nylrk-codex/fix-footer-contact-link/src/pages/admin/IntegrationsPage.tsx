<<<<<<< HEAD
import React, { useState } from "react";

export default function IntegrationsPage() {
  return (

    <ProtectedRoute adminOnly={true}>;
      <SEO"
        title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."

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
=======
<<<<<<< HEAD
=======
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
>>>>>>> merged-prs-20250907-203621
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
<<<<<<< HEAD
=======
import { SEO } from "@/components/SEO",
import { ProtectedRoute } from "@/components/ProtectedRoute",
>>>>>>> merged-prs-20250907-203621
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
}
;
=======




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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;
import { SEO } from "@/components/SEO",;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
  ),;}

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
}
;
}
;
=======
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
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
