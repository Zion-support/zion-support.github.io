

import React from "react",;""
import { Link } from "react-router-dom",;""
import { ArrowRight, Phone } from "lucide-react",;""
import { Button } from "@/components/ui/button",;""
import { AppStoreButtons } from "./AppStoreButtons",;"
;
export const MobileAppHero:React.FC = () => {;
  // These would come from environment variables or a config;"
  const appStoreUrl = "#", // Replace with actual App Store URL when available;""
  const googlePlayUrl = "#", // Replace with actual Google Play URL when available;"
;
  return (;"
    <section className="relative bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16 md:py-24">;"
</section>"
      <div className="container mx-auto px-4 lg:px-8">;"
</div>"
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;"
</div>"
          <div className="flex-1 text-white">;"
</div>"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">;"
</h1>"
              <span className="text-zion-cyan">Zion</span> in Your Pocket;"
            </h1>;"
            <p className="text-lg md:text-xl opacity-90 mb-8">;"
</p>
            </p>;"
            <div className="mb-8">;"
</div>
              <AppStoreButtons ;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
</AppStoreButtons>
            </div>;"
            <Link to="/open-app">;"
</Link>"
              <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;"
</Button>

                <ArrowRight size={20} />;
</ArrowRight>
              </Button>;
            </Link>;

          </div>;"
          <div className="flex-1 flex justify-center">;"
</div>"
            <div className="relative w-64 h-auto">;"
</div>"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl"></div>;""
              <Phone className="w-full h-auto text-white" />;"
</Phone>

            </div>;
          </div>;
        </div>;
      </div>;

    </section>;)"

