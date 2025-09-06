<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileAppHero.tsx

<<<<<<< HEAD

import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Phone } from "lucide-react",

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Phone } from "lucide-react",
import { Button } from "@/components/ui/button";
import { AppStoreButtons } from "./AppStoreButtons";

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreButtons } from "./AppStoreButtons";

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const MobileAppHero: React.FC = () => {
  // These would come from environment variables or a config
  const appStoreUrl = "#"; // Replace with actual App Store URL when available
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-zion-cyan">Zion</span> in Your Pocket
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. The power of
              Zion's AI matching, now available on your mobile device.
            </p>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <div className="mb-8">
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <Link to="/open-app">
              <Button
                variant="outline"
                size="lg"
                className="flex gap-2 border-white text-white hover:bg-white/10"
              >
                Open App
                <ArrowRight size={20} />
              </Button>
            </Link>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======

          


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-auto">
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl"></div>
              <Phone className="w-full h-auto text-white" />
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileAppHero.tsx
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Phone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {AppStoreButtons} from "./AppStoreButtons";
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, Phone } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;

export const MobileAppHero: React.FC = () => {;
  // These would come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
  return (
=======

import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, Phone } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
;
export const MobileAppHero:React.FC = () => {;
  // These would come from environment variables or a config;
  const appStoreUrl = "#", // Replace with actual App Store URL when available;
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <section className="relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">;
              <span className="text-zion-cyan">Zion</span> in Your Pocket;
            </h1>;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. The power of Zion's AI matching, now available on your mobile device.;
            </p>;
<<<<<<< HEAD
            <div className="mb-8">;
              <AppStoreButtons
=======
            ;
            <div className="mb-8">;
              <AppStoreButtons ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
<<<<<<< HEAD
=======
            ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            <Link to="/open-app">;
              <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                Open App;
                <ArrowRight size={20} />;
              </Button>;
            </Link>;
          </div>;
<<<<<<< HEAD
=======
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <div className="flex-1 flex justify-center">;
            <div className="relative w-64 h-auto">;
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl"></div>;
              <Phone className="w-full h-auto text-white" />;
              {/* This would be replaced with an actual phone mockup image in production */}
<<<<<<< HEAD
import React from './react';
import { Link  } from './react-router-dom';
import { ArrowRight, Phone  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { AppStoreButtons  } from './AppStoreButtons';
export const MobileAppHero: React.FC = () => {
  // These would come from environment variables or a config;
  const appStoreUrl = "#"; // Replace with actual App Store URL when available;
  const googlePlayUrl = "#"; // Replace with actual Google Play URL when available;
  return (
    <section className="relative bg - gradient - to - r from - zion - blue - dark to - zion - purple py - 16 md:py - 24">;
      <div className="container mx - auto px - 4 lg:px - 8">;
        <div className="flex flex - col md:flex - row items - center gap - 8 md:gap - 16">;
          <div className="flex - 1 text - white">;
            <h1 className="text - 4xl md:text - 5xl lg:text - 6xl font - bold mb - 6">;
              <span className="text - zion - cyan">Zion</span> in Your Pocket;
            </h1>;
            <p className="text - lg md:text - xl opacity - 90 mb - 8">;
              Find top AI talent or global IT jobs on the go. The power of;
              Zion's AI matching, now available on your mobile device.;
            </p>;
            <div className="mb - 8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <Link to="/open - app">;
              <Button;
                variant="outline";
                size="lg";
                className="flex gap - 2 border - white text - white hover:bg - white / 10";
              >;
                Open App;
                <ArrowRight size={20} />;
              </Button>;
            </Link>;
          </div>;
          <div className="flex - 1 flex justify - center">;
            <div className="relative w - 64 h - auto">;
              <div className="absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl"></div>;
              <Phone className="w - full h - auto text - white" />;
              {/* This would be replaced with an actual phone mockup image in production */}
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            </div>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileAppHero.tsx
    </section>;

  );
};
=======

    </section>);
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

========
    </section>);
}
;
=======
    </section>;
  ),;
},; relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24"> <div className=" container mx-auto px-4 lg:px-8"> <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-16"> <div className=" flex-1 text-white"> <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> <span className=" text-zion-cyan">Zion</span> in Your Pocket </h1> </p> <div className=" mb-8"> <AppStoreButtons appStoreUrl= {
  appStoreUrl 
}googlePlayUrl= {
  googlePlayUrl 
}/> </div> <Link to=" /open-app"> <Button variant=" outline"size=" lg"className=" flex gap-2 border-white text-white hover:bg-white/10" > Open App <ArrowRight size= {
  20 
}/> </Button> </Link> </div> </div> </div> </div> </div> </section>) 
};
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/MobileAppHero.tsx
=======
{/* This would be replaced with an actual phone mockup image in production */}
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

  );
};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
