<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {AppStoreButtons} from "./AppStoreButtons";
import {Card, CardContent} from "@/components/ui/card";
<<<<<<< HEAD
=======
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Smartphone } from "lucide-react",
import { Button } from "@/components/ui/button",



import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";

import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
import { AppStoreButtons } from "./AppStoreButtons",
import { Card, CardContent } from "@/components/ui/card",
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#"; // Replace with actual App Store URL
  const googlePlayUrl = "#"; // Replace with actual Google Play URL
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">

              The Power of <span className="text-zion-cyan">Zion</span>
              <br />
              In Your Pocket;
            </h1>
<<<<<<< HEAD
"
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI-powered matches instantly with our;
=======
<<<<<<< HEAD
<p className="text-lg md:text-xl opacity-90 mb-8">
=======
            <p className="text-lg md:text-xl opacity-90 mb-8">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              Find top AI talent or global IT jobs on the go. Track projects
              message candidates, and get AI-powered matches instantly with our
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              mobile app.
            </p>
"
            <div className="mb-8">
              <AppStoreButtons;

                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="flex flex-wrap gap-4">
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
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Link to="#features">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  See Features
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </Button>
              </Link>
            </div>
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>

<<<<<<< HEAD
              


              
=======

              


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    {/* In production, replace with actual app screenshot */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
<<<<<<< HEAD

=======
  );
}

=======
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",;

import { Link } from "react-router-dom",;
import { ArrowRight, Smartphone } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;

import { Card, CardContent } from "@/components/ui/card",;

export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;"
  const appStoreUrl = "#", // Replace with actual App Store URL;"
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
<<<<<<< HEAD
  return (

import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, Smartphone } from "lucide-react",;
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
=======

<<<<<<< HEAD
=======
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;

              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
<<<<<<< HEAD
            ;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;
            ;
            <div className="mb-8">;
              <AppStoreButtons ;
=======

<<<<<<< HEAD
=======
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;

            <div className="mb-8">;
              <AppStoreButtons
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
<<<<<<< HEAD
            ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="flex flex-wrap gap-4">;
              <Link to="/open-app">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
<<<<<<< HEAD
              ;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Link to="#features">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
<<<<<<< HEAD
          ;
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className="flex-1 flex justify-center md:justify-end">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            <div className="relative">;
              {/* Phone mockup with glow effect */}"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
<<<<<<< HEAD
              ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;

                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
import React from './react';
import { Link  } from './react-router-dom';
import { ArrowRight, Smartphone  } from './lucide-react';
import { Button  } from '@/components / ui / button';
import { AppStoreButtons  } from './AppStoreButtons';
import { Card, CardContent  } from '@/components / ui / card';
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#"; // Replace with actual App Store URL;
  const googlePlayUrl = "#"; // Replace with actual Google Play URL;
  return (
    <section className="relative bg - gradient - to - r from - zion - blue - dark via - zion - blue to - zion - purple / 40 py - 16 md:py - 24">;
      <div className="container mx - auto px - 4 lg:px - 8">;
        <div className="flex flex - col md:flex - row items - center gap - 8 md:gap - 16">;
          <div className="flex - 1 text - white">;
            <h1 className="text - 4xl md:text - 5xl lg:text - 6xl font - bold mb - 4 leading - tight">;
              The Power of <span className="text - zion - cyan">Zion</span>;
              <br />;
              In Your Pocket;
            </h1>;
            <p className="text - lg md:text - xl opacity - 90 mb - 8">;
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI - powered matches instantly with our;
              mobile app.;
            </p>;
            <div className="mb - 8">;
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="flex flex - wrap gap - 4">;
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
              <Link to="#features">;
                <Button;
                  variant="ghost";
                  size="lg";
                  className="text - white hover:bg - white / 10";
                >;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          <div className="flex - 1 flex justify - center md:justify - end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset - 0 bg - zion - cyan / 20 rounded - 3xl blur - xl transform translate - y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded - 3xl overflow - hidden border - 2 border - white / 30 bg - zion - blue - dark shadow - 2xl transform rotate - 3">;
                <CardContent className="p - 0">;
                  <div className="w - full h - full bg - gradient - to - br from - zion - blue - dark to - zion - purple / 60 flex items - center justify - center">;
                    <Smartphone className="w - 40 h - 40 text - white opacity - 40" />;
                    {/* In production, replace with actual app screenshot */}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;

<<<<<<< HEAD
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

};
"
=======
    </section>);
}
;
<<<<<<< HEAD

    </section>);
}
;
    </section>;
  ),;
},; relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24"> <div className=" container mx-auto px-4 lg:px-8"> <div className=" flex flex-col md:flex-row items-center gap-8 md:gap-16"> <div className=" flex-1 text-white"> <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"> The Power of <span className=" text-zion-cyan">Zion</span><br /> In Your Pocket </h1> </p> <div className=" mb-8"> <AppStoreButtons appStoreUrl= {
  appStoreUrl 
}googlePlayUrl= {
  googlePlayUrl 
}/> </div> <div className=" flex flex-wrap gap-4"> <Link to=" /open-app"> <Button variant=" outline"size=" lg"className=" flex gap-2 border-white text-white hover:bg-white/10"> Open App <ArrowRight size= {
  20 
}/> </Button> </Link> <Link to=" #features"> <Button variant=" ghost"size=" lg"className=" text-white hover:bg-white/10" > See Features </Button> </Link> </div> </div> </div> </CardContent> </Card> </div> </div> </div> </div> </section>) 
};
{/* In production, replace with actual app screenshot */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

  );
};
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  );
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
