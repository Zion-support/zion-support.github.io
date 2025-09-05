
<<<<<<< HEAD
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
=======
import React from &quot;react&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { MobileLaunchHero } from &quot;@/components/mobile-app/MobileLaunchHero&quot;;
import { MobileFeatureShowcase } from &quot;@/components/mobile-app/MobileFeatureShowcase&quot;;
import { AppTestimonials } from &quot;@/components/mobile-app/AppTestimonials&quot;;
import { MobileEmailCapture } from &quot;@/components/mobile-app/MobileEmailCapture&quot;;
import { AppStoreBanner } from &quot;@/components/mobile-app/AppStoreBanner&quot;;
import { QrCodeDownload } from &quot;@/components/mobile-app/QrCodeDownload&quot;;
import { CommunityTrust } from &quot;@/components/mobile-app/CommunityTrust&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const MobileLaunchPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO 
        title=&quot;Get the Zion App - AI Marketplace in Your Pocket&quot;
        description=&quot;Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go.&quot;
        keywords=&quot;Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app&quot;
        canonical=&quot;/mobile-launch&quot;
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
