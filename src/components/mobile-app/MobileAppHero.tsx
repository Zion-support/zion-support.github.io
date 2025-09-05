
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import Link from "next/link",
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons",
export const MobileAppHero: React.FC = () => {
  // These would come from environment variables or a config
  const appStoreUrl = "#", // Replace with actual App Store URL when available
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available
=======
import React from &quot;react&quot;;
import Link from &quot;next/link&quot;;
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { AppStoreButtons } from &quot;./AppStoreButtons&quot;;

export const MobileAppHero: React.FC = () => {
  // These would come from environment variables or a config
  const appStoreUrl = &quot;#&quot;; // Replace with actual App Store URL when available
  const googlePlayUrl = &quot;#&quot;; // Replace with actual Google Play URL when available
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
import Link from "next/link";

export const MobileAppHero: React.FC = () => {_// These would come from environment variables or a config
  const _appStoreUrl = "#"; // Replace with actual App Store window.URL when available
  const _googlePlayUrl = "#"; // Replace with actual Google Play window.URL when available
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <section className=&quot;relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24&quot;>
      <div className=&quot;container mx-auto px-4 lg:px-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-center gap-8 md:gap-16&quot;>
          <div className=&quot;flex-1 text-white&quot;>
            <h1 className=&quot;text-4xl md:text-5xl lg:text-6xl font-bold mb-6&quot;>
              <span className=&quot;text-zion-cyan&quot;>Zion</span> in Your Pocket
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-lg md:text-xl opacity-90 mb-8&quot;>
              Find top AI talent or global IT jobs on the go. The power of Zion's AI matching, now available on your mobile device.
=======
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. The power of Zion's AI matching, _now available on your mobile device.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
            
            <div className=&quot;mb-8&quot;>
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={_googlePlayUrl}
              />
            </div>
            
            <Link href=&quot;/open-app&quot;>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;flex gap-2 border-white text-white hover:bg-white/10&quot;>
                Open App
                <ArrowRight size={_20} />
              </Button>
            </Link>
          </div>
          
<<<<<<< HEAD
          <div className=&quot;flex-1 flex justify-center&quot;>
            <div className=&quot;relative w-64 h-auto&quot;>
              <div className=&quot;absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl&quot;></div>
              <Phone className=&quot;w-full h-auto text-white&quot; />
              {/* This would be replaced with an actual phone mockup image in production */}
=======
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-auto">
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl"></div>
              <Phone className="w-full h-auto text-white" />
              {_/* This would be replaced with an actual phone mockup image in production */}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},
