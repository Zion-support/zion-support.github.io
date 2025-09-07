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

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const MobileAppPage: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
const MobileAppPage: React.FC = () => {

  return (
    <AppLayout>
      <SEO"
        title="Zion AI Marketplace App""
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now.""
=======
<<<<<<< HEAD
const MobileAppPage: React.FC = () => {;
  return (
    <AppLayout>;
const MobileAppPage: React.FC = () => {
  return (
    <AppLayout>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <SEO
        title="Zion AI Marketplace App"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now."
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs"
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />

      <MobileAppHero />

      <AppFeatures />

      <AppScreenshots />

      <AppTestimonials />

      <DownloadSection />

      <AppStoreBanner />
    </AppLayout>

export default MobileAppPage;

export default MobileAppPage,
<<<<<<< HEAD
import { AppLayout } from "@/layout/AppLayout";"
import { SEO } from "@/components/SEO",;"
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",;"
import { AppFeatures } from "@/components/mobile-app/AppFeatures",;"
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",;"
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;"
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;"
import { DownloadSection } from "@/components/mobile-app/DownloadSection",;"
const "MobileAppPage": React.FC = () => {;
  }
  return (;export default MobileAppPage;
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
const MobileAppPage: React.FC = () => {;

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

export default MobileAppPage;

import React from './react';'
import { AppLayout } from '@/layout / AppLayout';'
import { SEO } from '@/components / SEO';'
import { MobileAppHero } from '@/components / mobile - app / MobileAppHero';'
import { AppFeatures } from '@/components / mobile - app / AppFeatures';'
import { AppScreenshots } from '@/components / mobile - app / AppScreenshots';'
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';'
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';'
=======
export default MobileAppPage;
import React from './react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { MobileAppHero } from '@/components / mobile - app / MobileAppHero';
import { AppFeatures } from '@/components / mobile - app / AppFeatures';
import { AppScreenshots } from '@/components / mobile - app / AppScreenshots';
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { DownloadSection } from '@/components / mobile - app / DownloadSection';
const MobileAppPage: React.FC = () => {}
  return (
<<<<<<< HEAD

=======
<<<<<<< HEAD
    <AppLayout>;
      <SEO;

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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <AppLayout>;
      <SEO;

import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",;
import { AppFeatures } from "@/components/mobile-app/AppFeatures",;
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",;
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;
import { DownloadSection } from "@/components/mobile-app/DownloadSection",;

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
<<<<<<< HEAD

},

=======
    </AppLayout>);
}
;

},


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default MobileAppPage;

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default MobileAppPage,; const MobileAppPage: React.FC = () => {
  return (<AppLayout> <SEO title="Zion AI Marketplace App" description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now." keywords="AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs" 
    </AppLayout>;
  );
},;
export default MobileAppPage;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
