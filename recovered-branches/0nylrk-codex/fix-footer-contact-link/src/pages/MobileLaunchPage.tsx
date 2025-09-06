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
import {SEO} from "@/components/SEO";
import {AppLayout} from "@/layout/AppLayout";
import {MobileLaunchHero} from "@/components/mobile-app/MobileLaunchHero";
import {MobileFeatureShowcase} from "@/components/mobile-app/MobileFeatureShowcase";
import {AppTestimonials} from "@/components/mobile-app/AppTestimonials";
import {MobileEmailCapture} from "@/components/mobile-app/MobileEmailCapture";
import {AppStoreBanner} from "@/components/mobile-app/AppStoreBanner";
import {QrCodeDownload} from "@/components/mobile-app/QrCodeDownload";
import {CommunityTrust} from "@/components/mobile-app/CommunityTrust";
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const MobileLaunchPage: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
=======
const MobileLaunchPage: React.FC = () => {;
  return (
    <AppLayout>;
=======
import React from "react";
import { SEO } from "@/components/SEO";
import { AppLayout } from "@/layout/AppLayout";
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero";
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase";
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload";
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
const MobileLaunchPage: React.FC = () => {
=======


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
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust",const MobileLaunchPage: React.FC = () => {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react";"
import { SEO } from "@/components/SEO";"
import { AppLayout } from "@/layout/AppLayout";"
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero";"
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase";"
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";"
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture";"
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";"
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload";"
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust";
const MobileLaunchPage: React.FC = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import React from "react";
import { SEO } from "@/components/SEO";
import { AppLayout } from "@/layout/AppLayout";
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero";
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase";
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload";
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust";
const MobileLaunchPage: React.FC = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <AppLayout>
      <SEO"
        title="Get the Zion App - AI Marketplace in Your Pocket""
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.""
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app""
        canonical="/mobile-launch"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      />

      <MobileLaunchHero />

      <MobileFeatureShowcase />

      <QrCodeDownload />

      <CommunityTrust />

      <AppTestimonials />

      <MobileEmailCapture />

      <AppStoreBanner />
    </AppLayout>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default MobileLaunchPage;

<<<<<<< HEAD
<<<<<<< HEAD
},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default MobileLaunchPage;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default MobileLaunchPage,
=======
  );
};


export default MobileLaunchPage;

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
    <AppLayout>;
      <SEO;
        title="Get the Zion App - AI Marketplace in Your Pocket";
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.";
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app";
      />;
      <MobileLaunchHero />;
      <MobileFeatureShowcase />;
      <QrCodeDownload />;
      <CommunityTrust />;
      <AppTestimonials />;
      <MobileEmailCapture />;
      <AppStoreBanner />;

},


export default MobileLaunchPage;
;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
const MobileLaunchPage: React.FC = () => {;
<<<<<<< HEAD
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;

      <MobileLaunchHero />;

      <MobileFeatureShowcase />;

      <QrCodeDownload />;

      <CommunityTrust />;

      <AppTestimonials />;

      <MobileEmailCapture />;

      <AppStoreBanner />;
    </AppLayout>;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
};

export default MobileLaunchPage;




import React from './react';'
import { SEO } from '@/components / SEO';'
import { AppLayout } from '@/layout / AppLayout';'
import { MobileLaunchHero } from '@/components / mobile - app / MobileLaunchHero';'
import { MobileFeatureShowcase } from '@/components / mobile - app / MobileFeatureShowcase';'
import { AppTestimonials } from '@/components / mobile - app / AppTestimonials';'
import { MobileEmailCapture } from '@/components / mobile - app / MobileEmailCapture';'
import { AppStoreBanner } from '@/components / mobile - app / AppStoreBanner';'
import { QrCodeDownload } from '@/components / mobile - app / QrCodeDownload';'
import { CommunityTrust } from '@/components / mobile - app / CommunityTrust';
const MobileLaunchPage: React.FC = () => {}
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <AppLayout>;
      <SEO;"
        title="Get the Zion App - AI Marketplace in Your Pocket";"
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.";"
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app";
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

export default MobileLaunchPage;
export default MobileLaunchPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default MobileLaunchPage;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

},


export default MobileLaunchPage;

<<<<<<< HEAD
=======
export default MobileLaunchPage;

export default MobileLaunchPage,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
const MobileLaunchPage:React.FC = () => {;
  return (;
    <AppLayout>;
      <SEO ;
        title="Get the Zion App - AI Marketplace in Your Pocket";
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.";
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app";
        canonical="/mobile-launch";
      />;
      ;
      <MobileLaunchHero />;
      ;
      <MobileFeatureShowcase />;
      ;
      <QrCodeDownload />;
      ;
      <CommunityTrust />;
      ;
      <AppTestimonials />;
      ;
      <MobileEmailCapture />;
      ;
      <AppStoreBanner />;
    </AppLayout>;
  ),;
},;
;
export default MobileLaunchPage,; const MobileLaunchPage: React.FC = () => {
  return (<AppLayout> <SEO title="Get the Zion App - AI Marketplace in Your Pocket" description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go." keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app" canonical="/mobile-launch" 
    </AppLayout>;
  );
},;
export default MobileLaunchPage;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const MobileLaunchPage: React.FC = () => {;
  return (;export default MobileLaunchPage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (;export default MobileLaunchPage;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
