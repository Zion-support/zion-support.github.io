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
</div>"
          <div className="flex-1 text-white">"
</div>"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">"
</h1>"
              The Power of <span className="text-zion-cyan">Zion</span>"
              <br />
</br>
            </h1>
"
            <p className="text-lg md:text-xl opacity-90 mb-8">"
</p>
            </p>
"
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
</div>"
              <Link to="/open-app">"
</Link>
                <Button;"
                  variant="outline"""
                  size="lg"""
                  className="flex gap-2 border-white text-white hover:bg-white/10""
                >
</Button>
                  <ArrowRight size={20} />
</ArrowRight>
                </Button>
              </Link>
"
              <Link to="#features">"
</Link>
                <Button;"
                  variant="ghost"""
                  size="lg"""
                  className="text-white hover:bg-white/10""
                >
</Button>
                </Button>
              </Link>
            </div>
          </div>
"
          <div className="flex-1 flex justify-center md:justify-end">"
</div>"
            <div className="relative">"
</div>"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>""
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">"
</Card>"
                <CardContent className="p-0">"
</CardContent>"
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">"
</div>"
                    <Smartphone className="w-40 h-40 text-white opacity-40" />"
</Smartphone>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>"
    <section className="relative bg-gradient-to-r from-zion-blue-dark via-zion-blue to-zion-purple/40 py-16 md:py-24">;"
</section>"
      <div className="container mx-auto px-4 lg:px-8">;"
</div>"
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">;"
</div>"
          <div className="flex-1 text-white">;"
</div>"
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">;"
</h1>"
              The Power of <span className="text-zion-cyan">Zion</span><br />;"
              In Your Pocket;
            </h1>;"
            <p className="text-lg md:text-xl opacity-90 mb-8">;"
</p>
            </p>;"
            <div className="mb-8">;"
</div>
              <AppStoreButtons;
                appStoreUrl={appStoreUrl}
                googlePlayUrl={googlePlayUrl}
              />;
</AppStoreButtons>
            </div>;"
            <div className="flex flex-wrap gap-4">;"
</div>"
              <Link to="/open-app">;"
</Link>"
                <Button variant="outline" size="lg" className="flex gap-2 border-white text-white hover:bg-white/10">;"
</Button>
                  <ArrowRight size={20} />;
</ArrowRight>
                </Button>;
              </Link>;"
              <Link to="#features">;"
</Link>"
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">;"
</Button>
                </Button>;
              </Link>;
            </div>;
          </div>;"
          <div className="flex-1 flex justify-center md:justify-end">;"
</div>"
            <div className="relative">;"
</div>"
              <div className="absolute inset-0 bg-zion-cyan/20 rounded-3xl blur-xl transform translate-y-2"></div>;""
              <Card className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-2 border-white/30 bg-zion-blue-dark shadow-2xl transform rotate-3">;"
</Card>"
                <CardContent className="p-0">;"
</CardContent>"
                  <div className="w-full h-full bg-gradient-to-br from-zion-blue-dark to-zion-purple/60 flex items-center justify-center">;"
</div>"
                    <Smartphone className="w-40 h-40 text-white opacity-40" />;"
</Smartphone>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>)"