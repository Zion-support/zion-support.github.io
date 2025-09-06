
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx
=======
import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, Smartphone } from "lucide-react",;
=======
import React from "react",;
import Link from "next/link",;
import { ArrowRight, Smartphone } from 'lucide-react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
import React from "react",;
import Link from "next/link",;
import { ArrowRight, Smartphone } from 'lucide-react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
import { Card, CardContent } from "@/components/ui/card",;
;
export const MobileLaunchHero:React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx

=======
            ;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;
            ;
            <div className="mb-8">;
              <AppStoreButtons ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx

            <div className="flex flex-wrap gap-4">;
              <Link to="/open-app">;
=======
            ;
            <div className="flex flex-wrap gap-4">;
              <Link href="/open-app">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
            ;
            <div className="flex flex-wrap gap-4">;
              <Link href="/open-app">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx

              <Link to="#features">;
=======
              ;
              <Link href="#features">;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
              ;
              <Link href="#features">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx

=======
          ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
          ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx

=======
              ;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
              ;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileLaunchHero.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;
    </section>;
  ),;
},; relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24"> <div className=" container mx-auto px-4 lg:px-8"> <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-16"> <div className=" flex-1 text-white"> <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"> The Power of <span className=" text-zion-cyan">Zion</span><br /> In Your Pocket </h1> </p> <div className=" mb-8"> <AppStoreButtons appStoreUrl= {;
  appStoreUrl ;
:temp_broken_files/mobile-app/MobileLaunchHero.tsx
<<<<<<< HEAD
}googlePlayUrl= {;"  googlePlayUrl ";"}/> </div> <div className=" flex flex-wrap gap-4"> <Link href=" /open-app"> <Button variant=" outline"size=" lg"className=" flex gap-2 border-white text-white hover:bg-white/10"> Open App <ArrowRight size= {;"  20 ";"}/> </Button> </Link> <Link href=" #features"> <Button variant=" ghost"size=" lg"className=" text-white hover:bg-white/10" > See Features </Button> </Link> </div> </div> </div> </CardContent> </Card> </div> </div> </div> </div> </section>) ;
=======
}googlePlayUrl= {;"  googlePlayUrl ";"}/> </div> <div className=" flex flex-wrap gap-4"> <Link href=" /open-app"> <Button variant=" outline"size=" lg"className=" flex gap-2 border-white text-white hover:bg-white/10"> Open App <ArrowRight size= {;"  20 ";"}/> </Button> </Link> <Link href=" #features"> <Button variant=" ghost"size=" lg"className=" text-white hover:bg-white/10" > See Features </Button> </Link> </div> </div> </div> </CardContent> </Card> </div> </div> </div> </div> </section>) 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};""
}googlePlayUrl= {;
  googlePlayUrl ";
}/> </div> <div className=" flex flex-wrap gap-4"> <Link href=" /open-app"> <Button variant=" outline"size=" lg"className=" flex gap-2 border-white text-white hover:bg-white/10"> Open App <ArrowRight size= {;
  20 ";
<<<<<<< HEAD
}/> </Button> </Link> <Link href=" #features"> <Button variant=" ghost"size=" lg"className=" text-white hover:bg-white/10" > See Features </Button> </Link> </div> </div> </div> </CardContent> </Card> </div> </div> </div> </div> </section>) ;
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/mobile-app/MobileLaunchHero.tsx
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/mobile-app/MobileLaunchHero.tsx
=======
}/> </Button> </Link> <Link href=" #features"> <Button variant=" ghost"size=" lg"className=" text-white hover:bg-white/10" > See Features </Button> </Link> </div> </div> </div> </CardContent> </Card> </div> </div> </div> </div> </section>) 
};
"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/mobile-app/MobileLaunchHero.tsx
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
