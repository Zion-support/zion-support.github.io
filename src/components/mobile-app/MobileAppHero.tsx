
import React from &quot;react&quot;;
import Link from &quot;next/link&quot;;
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { AppStoreButtons } from &quot;./AppStoreButtons&quot;;

export const MobileAppHero: React.FC = () => {
  // These would come from environment variables or a config
  const appStoreUrl = &quot;#&quot;; // Replace with actual App Store URL when available
  const googlePlayUrl = &quot;#&quot;; // Replace with actual Google Play URL when available

  return (
    <section className=&quot;relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24&quot;>
      <div className=&quot;container mx-auto px-4 lg:px-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-center gap-8 md:gap-16&quot;>
          <div className=&quot;flex-1 text-white&quot;>
            <h1 className=&quot;text-4xl md:text-5xl lg:text-6xl font-bold mb-6&quot;>
              <span className=&quot;text-zion-cyan&quot;>Zion</span> in Your Pocket
            </h1>
            <p className=&quot;text-lg md:text-xl opacity-90 mb-8&quot;>
              Find top AI talent or global IT jobs on the go. The power of Zion's AI matching, now available on your mobile device.
            </p>
            
            <div className=&quot;mb-8&quot;>
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
            
            <Link href=&quot;/open-app&quot;>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;flex gap-2 border-white text-white hover:bg-white/10&quot;>
                Open App
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
          
          <div className=&quot;flex-1 flex justify-center&quot;>
            <div className=&quot;relative w-64 h-auto&quot;>
              <div className=&quot;absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl&quot;></div>
              <Phone className=&quot;w-full h-auto text-white&quot; />
              {/* This would be replaced with an actual phone mockup image in production */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
