
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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



<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import React from "react";
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import {MobileLaunchHero} from "@/components/mobile-app/MobileLaunchHero";
import {MobileFeatureShowcase} from "@/components/mobile-app/MobileFeatureShowcase";
import {AppTestimonials} from "@/components/mobile-app/AppTestimonials";
import {MobileEmailCapture} from "@/components/mobile-app/MobileEmailCapture";
import {AppStoreBanner} from "@/components/mobile-app/AppStoreBanner";
import {QrCodeDownload} from "@/components/mobile-app/QrCodeDownload";
import {CommunityTrust} from "@/components/mobile-app/CommunityTrust";
import React from "react",
import { SEO } from "@/components/SEO",
import { AppLayout } from "@/layout/AppLayout",
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero",
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase",
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture",
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload",
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust",



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const MobileLaunchPage: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <AppLayout>;

      <SEO
        title="Get the Zion App - AI Marketplace in Your Pocket"
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go."
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app"
        canonical="/mobile-launch"
      />
      <MobileLaunchHero />
      <MobileFeatureShowcase />
      <QrCodeDownload />
      <CommunityTrust />
      <AppTestimonials />
      <MobileEmailCapture />
      <AppStoreBanner />
    </AppLayout>
  )
}
export default MobileLaunchPage;

<<<<<<< HEAD

},


export default MobileLaunchPage,
import React from "react",;
import { SEO } from "@/components/SEO",;
import { AppLayout } from "@/layout/AppLayout",;
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero",;
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase",;
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",;
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture",;
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",;
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload",;
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust",;
const MobileLaunchPage: React.FC = () => {;
  return (;

=======
=======
import React from './react';
import { SEO } from '@/components / SEO';
import { AppLayout } from '@/layout / AppLayout';
import { MobileLaunchHero } from '@/components / mobile - app / MobileLaunchHero';
import { MobileFeatureShowcase } from '@/components / mobile - app / MobileFeatureShowcase';
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';
import { MobileEmailCapture } from '@/components / mobile - app / MobileEmailCapture';
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';
import { QrCodeDownload } from '@/components / mobile - app / QrCodeDownload';
import { CommunityTrust } from '@/components / mobile - app / CommunityTrust';
const MobileLaunchPage: React.FC = () => {
  return (
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    <AppLayout>;
      <SEO;
        title="Get the Zion App - AI Marketplace in Your Pocket";
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.";
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app";
        canonical="/mobile - launch";
      />;
      <MobileLaunchHero />;
      <MobileFeatureShowcase />;
      <QrCodeDownload />;
      <CommunityTrust />;
      <AppTestimonials />;
      <MobileEmailCapture />;
      <AppStoreBanner />;
<<<<<<< HEAD

    </AppLayout>;
  );
},;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
    </AppLayout>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default MobileLaunchPage;
