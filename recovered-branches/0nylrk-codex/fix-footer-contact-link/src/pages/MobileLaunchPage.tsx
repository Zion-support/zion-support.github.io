
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

>>>>>>> main
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const MobileLaunchPage: React.FC = () => {
  return (
    <AppLayout>
=======



const MobileLaunchPage: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <AppLayout>;

>>>>>>> main
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
<<<<<<< HEAD
}
export default MobileLaunchPage;

=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> main
    <AppLayout>;
      <SEO;
        title="Get the Zion App - AI Marketplace in Your Pocket";
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.";
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app";
<<<<<<< HEAD
        canonical="/mobile-launch";
=======
        canonical="/mobile - launch";
>>>>>>> main
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default MobileLaunchPage;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
    </AppLayout>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default MobileLaunchPage;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
