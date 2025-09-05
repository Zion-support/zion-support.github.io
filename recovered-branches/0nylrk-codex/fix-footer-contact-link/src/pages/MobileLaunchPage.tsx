
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
  return (
    <AppLayout>
      <SEO 
        title=&quot;Get the Zion App - AI Marketplace in Your Pocket&quot;
        description=&quot;Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.&quot;
        keywords=&quot;Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app&quot;
        canonical=&quot;/mobile-launch&quot;
import React from "react";

const MobileLaunchPage: React.FC = () => {_return (
    <AppLayout>
      <SEO 
        title="Get the Zion App - AI Marketplace in Your Pocket"
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, _find tech jobs, _and manage projects on the go."
        keywords="Zion mobile app, _AI talent app, _tech job app, _project management app, _iOS app, _Android app"
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
},
export default MobileLaunchPage,
