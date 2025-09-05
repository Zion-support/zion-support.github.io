
import React from &quot;react&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { MobileAppHero } from &quot;@/components/mobile-app/MobileAppHero&quot;;
import { AppFeatures } from &quot;@/components/mobile-app/AppFeatures&quot;;
import { AppScreenshots } from &quot;@/components/mobile-app/AppScreenshots&quot;;
import { AppTestimonials } from &quot;@/components/mobile-app/AppTestimonials&quot;;
import { AppStoreBanner } from &quot;@/components/mobile-app/AppStoreBanner&quot;;
import { DownloadSection } from &quot;@/components/mobile-app/DownloadSection&quot;;

const MobileAppPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO 
        title=&quot;Zion AI Marketplace App&quot;
        description=&quot;Hire top AI talent or find global IT jobs on the go. Download the Zion app now.&quot;
        keywords=&quot;AI freelancer app, hire tech, find IT jobs, tech marketplace app, mobile AI jobs&quot;
      />
      
      <MobileAppHero />
      
      <AppFeatures />
      
      <AppScreenshots />
      
      <AppTestimonials />
      
      <DownloadSection />
      
      <AppStoreBanner />
    </AppLayout>
  );
};

export default MobileAppPage;
