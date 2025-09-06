
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> main
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

>>>>>>> main
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const MobileAppPage: React.FC = () => {
  return (
    <AppLayout>
=======



const MobileAppPage: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <AppLayout>;

>>>>>>> main
      <SEO
        title="Zion AI Marketplace App"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now."
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
<<<<<<< HEAD
}
export default MobileAppPage;

=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> main
    <AppLayout>;
      <SEO;
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
    </AppLayout>;
  );
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default MobileAppPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    </AppLayout>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default MobileAppPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
