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

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


const MobileAppPage: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
=======
const MobileAppPage: React.FC = () => {;
  return (
    <AppLayout>;
const MobileAppPage: React.FC = () => {
  return (
    <AppLayout>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <SEO
        title="Zion AI Marketplace App"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now."
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs"
<<<<<<< HEAD

=======
      />
      <MobileAppHero />
      <AppFeatures />
      <AppScreenshots />
      <AppTestimonials />
      <DownloadSection />
      <AppStoreBanner />
    </AppLayout>
  )
}
export default MobileAppPage;

},

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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default MobileAppPage;

=======
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
<<<<<<< HEAD
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
    <AppLayout>;
      <SEO;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        title="Zion AI Marketplace App";
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.";
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs";
      />;
      <MobileAppHero />;
      <AppFeatures />;
      <AppScreenshots />;
      <AppTestimonials />;
      <DownloadSection />;
      <AppStoreBanner />;
    </AppLayout>);
}
;

},


export default MobileAppPage;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
    </AppLayout>;
  );
},;
export default MobileAppPage;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
