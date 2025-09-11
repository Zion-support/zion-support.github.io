

import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";

import { AppStoreButtons } from "./AppStoreButtons";
import { Card, CardContent } from "@/components/ui/card";
import { AppStoreButtons } from "./AppStoreButtons",
import { Card, CardContent } from "@/components/ui/card",
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



=======export const MobileLaunchHero: React.FC = () => {
  // App store links - these would come from environment variables in production
  const appStoreUrl = "#"; // Replace with actual App Store URL
  const googlePlayUrl = "#"; // Replace with actual Google Play URL
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              The Power of <span className="text-zion-cyan">Zion</span>
              <br />
              In Your Pocket
            </h1>
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <Link to="#features">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  See Features
                </Button>
              </Link>
            </div>
          </div>
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Phone mockup with glow effect */}
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>

              
=======

=======              


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

=======
==============


=======
export const MobileLaunchHero: React.FC = () => {;
  // App store links - these would come from environment variables in production;
  const appStoreUrl = "#", // Replace with actual App Store URL;
  const googlePlayUrl = "#", // Replace with actual Google Play URL;
<<<<<<< HEAD
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

  return (=======

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
              <AppStoreButtons
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
=======
    </section>;  );
};
