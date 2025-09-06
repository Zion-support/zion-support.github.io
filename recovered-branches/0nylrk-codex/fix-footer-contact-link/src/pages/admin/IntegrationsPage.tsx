<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {IntegrationsHub} from "@/components/integrations/IntegrationsHub";
import {SEO} from "@/components/SEO";
import {ProtectedRoute} from "@/components/ProtectedRoute";
<<<<<<< HEAD
export default function IntegrationsPage() {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function IntegrationsPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
  return (
    <ProtectedRoute adminOnly={true}>;
      <SEO
        title="Integrations - Zion AI Marketplace"
        description="Connect your Zion account with CRMs and Applicant Tracking Systems."
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      <Header />
      <main className="min-h-screen bg-background">
        <IntegrationsHub />
      </main>
      <Footer />
    </ProtectedRoute>
  )
<<<<<<< HEAD

=======

=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { IntegrationsHub } from "@/components/integrations/IntegrationsHub",;
import { SEO } from "@/components/SEO",;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
import { ProtectedRoute } from "@/components/ProtectedRoute";
========
import { ProtectedRoute } from "@/components/ProtectedRoute",;
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
=======
import { ProtectedRoute } from "@/components/ProtectedRoute";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function IntegrationsPage() {;
  return (;
    <ProtectedRoute adminOnly={true}>;
      <SEO;
        title="Integrations - Zion AI Marketplace";
        description="Connect your Zion account with CRMs and Applicant Tracking Systems.";
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx

========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />;
      <Header />;
      <main className="min-h-screen bg-background">;
        <IntegrationsHub />;
      </main>;
      <Footer />;
    </ProtectedRoute>;
<<<<<<< HEAD
<<<<<<< HEAD
  );

<<<<<<< HEAD
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
  ),;}
 export default function IntegrationsPage () {
  return (true 
}> <SEO title="Integrations - Zion AI Marketplace" description="Connect your Zion account with CRMs and Applicant Tracking Systems." /> <Header /> <main className="min-h-screen bg-background" > <IntegrationsHub /> </main> <Footer /> </ProtectedRoute>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/IntegrationsPage.tsx
=======
  );
<<<<<<< HEAD
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
