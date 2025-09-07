<<<<<<< HEAD


import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Smartphone } from "lucide-react",
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
export const MobileLaunchHero: React.FC;

=======
import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight, Smartphone} from "lucide-react";
import {Button} from "@/components/ui/button";
import {AppStoreButtons} from "./AppStoreButtons";
import {Card, CardContent} from "@/components/ui/card";
import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, Smartphone } from "lucide-react",;
import { Button } from "@/components/ui/button",import React from "react",;
import { Link } from "react-router-dom",;
import { ArrowRight, Smartphone } from "lucide-react",;
import { Button } from "@/components/ui/button",;
import { AppStoreButtons } from "./AppStoreButtons",;
import { Card, CardContent } from "@/components/ui/card",;

export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;

  return (    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;

            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;

            <div className="mb-8">;
              <AppStoreButtons                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;
                <CardContent className="p-0">;
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;
                    {/* In production, replace with actual app screenshot */}
                  </div>;
                </CardContent>;
              </Card>;
            </div>;
          </div>;
        </div>;
      </div>;  )
};

import React from "react";""
import {Link} from "react-router-dom";""
import {ArrowRight, Smartphone} from "lucide-react";""
import {Button} from "@/components/ui/button";""
import {AppStoreButtons} from "./AppStoreButtons";""
import {Card, CardContent} from "@/components/ui/card";"
export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production;"
  const appStoreUrl = "#"; // Replace with actual App Store URL;""
  const googlePlayUrl = "#"; // Replace with actual Google Play URL;"
  return ("
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">"
</section>"
      <div className="container mx-auto px-4 lg:px-8">"
</div>"
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">"
          <div className="flex-1 text-white">"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">"
</h1>"
              The Power of <span className="text-zion-cyan">Zion</span>"
              <br />
</br>
            </h1>
"
            <p className="text-lg md:text-xl opacity-90 mb-8">"
</p>
            <div className="mb-8">"
</div>
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}

                googlePlayUrl={googlePlayUrl}
              />

</AppStoreButtons>
            </div>

"
            <div className="flex flex-wrap gap-4">"
              <Link to="/open-app">"

                <Button;"
                  variant="outline"""
                  size="lg"""
                  className="flex gap-2 border-white text-white hover:bg-white/10""
                >

                  <ArrowRight size={20} />

                
              
</Button>

                  <ArrowRight size={20} />
</ArrowRight>
                </Button>
              </Link>

"
              <Link to="#features">"

                  variant="ghost"""
                  className="text-white hover:bg-white/10""

                
              
                >
</Button>

                </Button>
              </Link>
            </div>
          </div>

"
          <div className="flex-1 flex justify-center md:justify-end">"
            <div className="relative">"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>""
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">"
                <CardContent className="p-0">"
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">"
                    <Smartphone className="w-40 h-40 text-white opacity-40" />"

                
              
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;"
      <div className="container mx-auto px-4 lg:px-8">;"
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;"
          <div className="flex-1 text-white">;"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;"
              The Power of <span className="text-zion-cyan">Zion</span><br />;"
              In Your Pocket;
            </h1>;"
            <p className="text-lg md:text-xl opacity-90 mb-8">;"
            </p>;"
            <div className="mb-8">;"
              />;

            </div>;"
            <div className="flex flex-wrap gap-4">;"
              <Link to="/open-app">;"
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;"

                  <ArrowRight size={20} />;

                ;
              ;"
              <Link to="#features">;"
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;"

            </div>;
          <div className="flex-1 flex justify-center md:justify-end">;"
            <div className="relative">;"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;""
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;"
                <CardContent className="p-0">;"
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;"
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;"

                
              
    </section>)"
pr-12325
</Smartphone>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>)"
>>>>>>> origin/main
