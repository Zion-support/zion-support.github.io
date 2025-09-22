<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {AppStoreButtons} from "./AppStoreButtons";
import {Card, CardContent} from "@/components/ui/card";
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Smartphone } from "lucide-react",
import { Button } from "@/components/ui/button",
<<<<<<< HEAD

import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
<<<<<<< HEAD
import { AppStoreButtons } from "./AppStoreButtons",
import { Card, CardContent } from "@/components/ui/card",

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#"; // Replace with actual App Store URL
  const googlePlayUrl = "#"; // Replace with actual Google Play URL

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
"
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI-powered matches instantly with our;
              mobile app.
            </p>
"
            <div className="mb-8">
              <AppStoreButtons;
=======
              The Power of <span className="text-zion-cyan">Zion</span>
              <br />
              In Your Pocket
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-8">
              Find top AI talent or global IT jobs on the go. Track projects,
              message candidates, and get AI-powered matches instantly with our
              mobile app.
            </p>

            <div className="mb-8">
              <AppStoreButtons
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />
            </div>
"
            <div className="flex flex-wrap gap-4">"
              <Link to="/open-app">
                <Button"
                  variant="outline""
                  size="lg""
                  className="flex gap-2 border-white text-white hover:bg-white/10"
                >
                  Open App;
                  <ArrowRight size={20} />
                </Button>
              </Link>
"
              <Link to="#features">
                <Button"
                  variant="ghost""
                  size="lg""
                  className="text-white hover:bg-white/10"
                >
                  See Features;
                </Button>
              </Link>
            </div>
          </div>
"
          <div className="flex-1 flex justify-center md:justify-end">"
            <div className="relative">
              {/* Phone mockup with glow effect */}"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">
                <CardContent className="p-0">
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">
                    <Smartphone className="w-40 h-40 text-white opacity-40" />

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react",;
=======
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Smartphone } from "lucide-react",
import { Button } from "@/components/ui/button",import React from "react",;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Smartphone } from "lucide-react",
import { Button } from "@/components/ui/button",import React from "react",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React from "react",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Link } from "react-router-dom",;
import { ArrowRight, Smartphone } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
=======

"
import React from "react",;"
import { Link } from "react-router-dom",;"
import { ArrowRight, Smartphone } from "lucide-react",;"
import { Button } from "@/components/ui/button",;"
import { AppStoreButtons } from "./AppStoreButtons",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Card, CardContent } from "@/components/ui/card",;

export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;"
  const appStoreUrl = "#", // Replace with actual App Store URL;"
  const googlePlayUrl = "#", // Replace with actual Google Play URL;

return (    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;

<div className="mb-8">;
              <AppStoreButtons
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
<Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;

"
              <Link to="#features">;"
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;

"
          <div className="flex-1 flex justify-center md:justify-end">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <div className="relative">;
              {/* Phone mockup with glow effect */}"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
<<<<<<< HEAD
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
</div>;
<<<<<<< HEAD
<<<<<<< HEAD

    </section>);
}
;
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
=======
      </div>;  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};
"
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
