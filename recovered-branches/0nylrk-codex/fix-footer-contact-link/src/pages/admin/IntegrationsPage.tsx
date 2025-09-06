<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {IntegrationsHub} from "@/components/integrations/IntegrationsHub";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
export default function IntegrationsPage() {;

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react";
<<<<<<< HEAD
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export default function IntegrationsPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {IntegrationsHub} from "@/components/integrations/IntegrationsHub";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default function IntegrationsPage() {
  return (
=======
import React, { useState } from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub";"
import { SEO } from "@/components/SEO";"
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function IntegrationsPage() {}
export default function IntegrationsPage() {}
  return (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <ProtectedRoute adminOnly={true}>;
      <SEO"
        title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======


=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { SEO } from "@/components/SEO",
=======
"
import React, { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",";
import { SEO } from "@/components/SEO";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { SEO } from "@/components/SEO","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ProtectedRoute } from "@/components/ProtectedRoute",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function IntegrationsPage() {
  return (
=======
export default function IntegrationsPage() {};
  return (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <ProtectedRoute adminOnly={true}>;
      <SEO"
        title="Integrations - Zion AI Marketplace""
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
      />
      <Header />"
      <main className="min-h-screen bg-background">
        <IntegrationsHub />
      </main>
      <Footer />
    </ProtectedRoute>
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;
import { SEO } from "@/components/SEO",;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { ProtectedRoute } from "@/components/ProtectedRoute";
export default function IntegrationsPage() {;
  return (;
    <ProtectedRoute adminOnly={true}>;
      <SEO;
        title="Integrations - Zion AI Marketplace";
        description="Connect your Zion account with CRMs and Applicant Tracking Systems.";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  );

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
    </ProtectedRoute>);  ),;}
 export default function IntegrationsPage () {
  return (true 
}> <SEO title="Integrations - Zion AI Marketplace" description="Connect your Zion account with CRMs and Applicant Tracking Systems." /> <Header /> <main className="min-h-screen bg-background" > <IntegrationsHub /> </main> <Footer /> </ProtectedRoute>) 
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
}
;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
}



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
