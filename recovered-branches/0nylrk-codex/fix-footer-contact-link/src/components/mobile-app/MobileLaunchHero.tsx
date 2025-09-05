
<<<<<<< HEAD
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
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;
      <div className="container mx-auto px-4 lg:px-8">;
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;
          <div className="flex-1 text-white">;
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;
              The Power of <span className="text-zion-cyan">Zion</span><br />;
              In Your Pocket;
            </h1>;
            ;
            <p className="text-lg md:text-xl opacity-90 mb-8">;
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.;
            </p>;
            ;
            <div className="mb-8">;
              <AppStoreButtons ;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
            </div>;
            ;
            <div className="flex flex-wrap gap-4">;
              <Link to="/open-app">;
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;
                  Open App;
                  <ArrowRight size={20} />;
                </Button>;
              </Link>;
              ;
              <Link to="#features">;
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;
                  See Features;
                </Button>;
              </Link>;
            </div>;
          </div>;
          ;
          <div className="flex-1 flex justify-center md:justify-end">;
            <div className="relative">;
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;
              ;
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
      </div>;
    </section>;
  ),;
},;
=======
import React from "react",
import { Link } from "react-router-dom",
import { ArrowRight, Smartphone } from "lucide-react",
import { Button } from "@/components/ui/button",
import { AppStoreButtons } from "./AppStoreButtons",
import { Card, CardContent } from "@/components/ui/card",

export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#", // Replace with actual App Store URL
  const googlePlayUrl = "#", // Replace with actual Google Play URLimport React from "react";

export const MobileLaunchHero: React.FC = () => {_// App store links - these would come from environment variables in production
  const _appStoreUrl = "#"; // Replace with actual App Store window.URL
  const _googlePlayUrl = "#"; // Replace with actual Google Play window.URL

  return (
    <section className=&quot;relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24&quot;>
      <div className=&quot;container mx-auto px-4 lg:px-8&quot;>
        <div className=&quot;flex flex-col md:flex-row items-center gap-8 md:gap-16&quot;>
          <div className=&quot;flex-1 text-white&quot;>
            <h1 className=&quot;text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight&quot;>
              The Power of <span className=&quot;text-zion-cyan&quot;>Zion</span><br />
              In Your Pocket
            </h1>
            
            <p className=&quot;text-lg md:text-xl opacity-90 mb-8&quot;>
              Find top AI talent or global IT jobs on the go. Track projects, message candidates, and get AI-powered matches instantly with our mobile app.            </p>
            
            <div className=&quot;mb-8&quot;>
              <AppStoreButtons 
                appStoreUrl={appStoreUrl}
                googlePlayUrl={_googlePlayUrl}
              />
            </div>
            
            <div className=&quot;flex flex-wrap gap-4&quot;>
              <Link to=&quot;/open-app&quot;>
                <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;flex gap-2 border-white text-white hover:bg-white/10&quot;>
                  Open App
                  <ArrowRight size={_20} />
                </Button>
              </Link>
              
              <Link to=&quot;#features&quot;>
                <Button variant=&quot;ghost&quot; size=&quot;lg&quot; className=&quot;text-white hover:bg-white/10&quot;>
                  See Features
                </Button>
              </Link>
            </div>
          </div>
          
          <div className=&quot;flex-1 flex justify-center md:justify-end&quot;>
            <div className=&quot;relative&quot;>
              {/* Phone mockup with glow effect */}
              <div className=&quot;absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2&quot;></div>
              
              <Card className=&quot;relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3&quot;>
                <CardContent className=&quot;p-0&quot;>
                  <div className=&quot;w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center&quot;>
                    <Smartphone className=&quot;w-40 h-40 text-white opacity-40&quot; />
                    {/* In production, replace with actual app screenshot */}                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
