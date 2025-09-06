<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
=======


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MobileAppHero} from "@/components/mobile-app/MobileAppHero";
import {AppFeatures} from "@/components/mobile-app/AppFeatures";
import {AppScreenshots} from "@/components/mobile-app/AppScreenshots";
import {AppTestimonials} from "@/components/mobile-app/AppTestimonials";
import {AppStoreBanner} from "@/components/mobile-app/AppStoreBanner";
import {DownloadSection} from "@/components/mobile-app/DownloadSection";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",
import { AppFeatures } from "@/components/mobile-app/AppFeatures",
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",
import { DownloadSection } from "@/components/mobile-app/DownloadSection",
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const MobileAppPage: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <AppLayout>;

========
const MobileAppPage: React.FC = () => {;
  return (
    <AppLayout>;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const MobileAppPage: React.FC = () => {
  return (
    <AppLayout>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <SEO
        title="Zion AI Marketplace App"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now."
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs"
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      />
      <MobileAppHero />
      <AppFeatures />
      <AppScreenshots />
      <AppTestimonials />
      <DownloadSection />
      <AppStoreBanner />
    </AppLayout>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default MobileAppPage;

},

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default MobileAppPage,
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",;
import { AppFeatures } from "@/components/mobile-app/AppFeatures",;
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",;
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;
import { DownloadSection } from "@/components/mobile-app/DownloadSection",;
const MobileAppPage: React.FC = () => {;
  return (;
<<<<<<< HEAD
=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
      />;
      <MobileAppHero />;
      <AppFeatures />;
      <AppScreenshots />;
      <AppTestimonials />;
      <DownloadSection />;
      <AppStoreBanner />;
    </AppLayout>;
  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
export default MobileAppPage;
import React from './react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { MobileAppHero } from '@/components / mobile - app / MobileAppHero';
import { AppFeatures } from '@/components / mobile - app / AppFeatures';
import { AppScreenshots } from '@/components / mobile - app / AppScreenshots';
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';
import { DownloadSection } from '@/components / mobile - app / DownloadSection';
const MobileAppPage: React.FC = () => {
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <AppLayout>;
      <SEO;
=======

import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",;
import { AppFeatures } from "@/components/mobile-app/AppFeatures",;
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",;
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;
import { DownloadSection } from "@/components/mobile-app/DownloadSection",;
;
const MobileAppPage:React.FC = () => {;
  return (;
    <AppLayout>;
      <SEO ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    <AppLayout>;
      <SEO;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        title="Zion AI Marketplace App";
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.";
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs";
      />;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <MobileAppHero />;
      <AppFeatures />;
      <AppScreenshots />;
      <AppTestimonials />;
      <DownloadSection />;
      <AppStoreBanner />;
<<<<<<< HEAD
<<<<<<< HEAD
    </AppLayout>;
  );
},;

export default MobileAppPage;

=======
    </AppLayout>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default MobileAppPage;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
      ;
      <MobileAppHero />;
      ;
      <AppFeatures />;
      ;
      <AppScreenshots />;
      ;
      <AppTestimonials />;
      ;
      <DownloadSection />;
      ;
      <AppStoreBanner />;
    </AppLayout>;
  ),;
},;
;
export default MobileAppPage,; const MobileAppPage: React.FC = () => {
  return (<AppLayout> <SEO title="Zion AI Marketplace App" description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now." keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs" 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/MobileAppPage.tsx
=======
    </AppLayout>;
  );
},;
export default MobileAppPage;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
