
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
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


const MobileLaunchPage: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
const MobileLaunchPage: React.FC = () => {;
  return (
    <AppLayout>;
const MobileLaunchPage: React.FC = () => {
  return (
    <AppLayout>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <SEO
        title="Get the Zion App - AI Marketplace in Your Pocket"
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go."
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app"
        canonical="/mobile-launch"
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />;
      <MobileLaunchHero />;
      <MobileFeatureShowcase />;
      <QrCodeDownload />;
      <CommunityTrust />;
      <AppTestimonials />;
      <MobileEmailCapture />;
      <AppStoreBanner />;
    </AppLayout>;
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
<<<<<<< HEAD
        canonical="/mobile-launch";
=======
        canonical="/mobile - launch";
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      />;
      <MobileLaunchHero />;
      <MobileFeatureShowcase />;
      <QrCodeDownload />;
      <CommunityTrust />;
      <AppTestimonials />;
      <MobileEmailCapture />;
      <AppStoreBanner />;
    </AppLayout>);
}
;

},


export default MobileLaunchPage;
;
<<<<<<< HEAD

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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
