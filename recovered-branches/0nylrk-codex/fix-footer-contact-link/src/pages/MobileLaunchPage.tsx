
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
  return (
    <AppLayout>
      <SEO 
        title="Get the Zion App - AI Marketplace in Your Pocket"
        description="Download the Zion mobile app for iOS and Android. Hire AI talentfind tech jobsand manage projects on the go."
        keywords="Zion mobile appAI talent apptech job approject management appiOS appAndroid app"
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
  );
};

export default MobileLaunchPage;
