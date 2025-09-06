<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const MobileAppPage: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
=======
const MobileAppPage: React.FC = () => {;
  return (
    <AppLayout>;
=======
import React from "react";
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero";
import { AppFeatures } from "@/components/mobile-app/AppFeatures";
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots";
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import { DownloadSection } from "@/components/mobile-app/DownloadSection";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
const MobileAppPage: React.FC = () => {
=======


import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MobileAppHero} from "@/components/mobile-app/MobileAppHero";
import {AppFeatures} from "@/components/mobile-app/AppFeatures";
import {AppScreenshots} from "@/components/mobile-app/AppScreenshots";
import {AppTestimonials} from "@/components/mobile-app/AppTestimonials";
import {AppStoreBanner} from "@/components/mobile-app/AppStoreBanner";
import {DownloadSection} from "@/components/mobile-app/DownloadSection";
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",
import { AppFeatures } from "@/components/mobile-app/AppFeatures",
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",
import { DownloadSection } from "@/components/mobile-app/DownloadSection",const MobileAppPage: React.FC = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";"
import { AppLayout } from "@/layout/AppLayout";"
import { SEO } from "@/components/SEO";"
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero";"
import { AppFeatures } from "@/components/mobile-app/AppFeatures";"
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots";"
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";"
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";"
import { DownloadSection } from "@/components/mobile-app/DownloadSection";
const MobileAppPage: React.FC = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react";
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero";
import { AppFeatures } from "@/components/mobile-app/AppFeatures";
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots";
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import { DownloadSection } from "@/components/mobile-app/DownloadSection";
const MobileAppPage: React.FC = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <AppLayout>
      <SEO"
        title="Zion AI Marketplace App""
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.""
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      />

      <MobileAppHero />

      <AppFeatures />

      <AppScreenshots />

      <AppTestimonials />

      <DownloadSection />

      <AppStoreBanner />
    </AppLayout>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default MobileAppPage;

<<<<<<< HEAD
<<<<<<< HEAD
},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default MobileAppPage;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;

      <MobileAppHero />;

      <AppFeatures />;

      <AppScreenshots />;

      <AppTestimonials />;

      <DownloadSection />;

      <AppStoreBanner />;
    </AppLayout>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
};

export default MobileAppPage;




import React from './react';'
import { AppLayout } from '@/layout / AppLayout';'
import { SEO } from '@/components / SEO';'
import { MobileAppHero } from '@/components / mobile - app / MobileAppHero';'
import { AppFeatures } from '@/components / mobile - app / AppFeatures';'
import { AppScreenshots } from '@/components / mobile - app / AppScreenshots';'
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';'
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';'
import { DownloadSection } from '@/components / mobile - app / DownloadSection';
const MobileAppPage: React.FC = () => {}
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <AppLayout>;
      <SEO;

<<<<<<< HEAD
=======
export default MobileAppPage;

export default MobileAppPage,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",;
import { AppFeatures } from "@/components/mobile-app/AppFeatures",;
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",;
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;
import { DownloadSection } from "@/components/mobile-app/DownloadSection",;
<<<<<<< HEAD
;
const MobileAppPage:React.FC = () => {;
  return (;
    <AppLayout>;
      <SEO ;
    <AppLayout>;
      <SEO;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        title="Zion AI Marketplace App";
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.";
=======

"
        title="Zion AI Marketplace App";"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  );
};


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
    <AppLayout>;
      <SEO;
        title="Zion AI Marketplace App";
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs";
      />;
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
export default MobileAppPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default MobileAppPage;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

},


export default MobileAppPage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    </AppLayout>;
  );
},;
export default MobileAppPage;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const MobileAppPage: React.FC = () => {;
  return (;export default MobileAppPage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (;export default MobileAppPage;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
