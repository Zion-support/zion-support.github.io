
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MobileAppHero } from "@/components/mobile-app/MobileAppHero",
import { AppFeatures } from "@/components/mobile-app/AppFeatures",
import { AppScreenshots } from "@/components/mobile-app/AppScreenshots",
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials",
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner",
import { DownloadSection } from "@/components/mobile-app/DownloadSection",const MobileAppPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO 
        title=&quot;Zion AI Marketplace App&quot;
        description=&quot;Hire top AI talent or find global IT jobs on the go. Download the Zion app now.&quot;
        keywords=&quot;AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs&quot;
import React from "react";

const MobileAppPage: React.FC = () => {_return (
    <AppLayout>
      <SEO 
        title="Zion AI Marketplace App"
        description="Hire top AI talent or find global IT jobs on the go. Download the Zion app now."
        keywords="AI freelancer app, _hire tech, _find IT jobs, _tech marketplace app, _mobile AI jobs"
      />
      
      <MobileAppHero />
      
      <AppFeatures />
      
      <AppScreenshots />
      
      <AppTestimonials />
      
      <DownloadSection />
      
      <AppStoreBanner />
    </AppLayout>
  )
},
export default MobileAppPage,
