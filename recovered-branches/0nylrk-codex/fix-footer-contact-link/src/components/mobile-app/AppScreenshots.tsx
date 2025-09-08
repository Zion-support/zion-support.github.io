

// These would be replaced with actual screenshots

import React, { useRef } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";

import React, { useRef } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";

import React, { useRef } from "react",

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }]
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

export const AppScreenshots: React.FC = () => {};
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null),




  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount

        behavior: "smooth"})


import React, { useRef } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder && placeholder.svg" },;
  { id: 2, alt: "Talent matching screen", src: "/placeholder && placeholder.svg" },;
  { id: 3, alt: "Resume builder screen", src: "/placeholder && placeholder.svg" },;
  { id: 4, alt: "Messaging screen", src: "/placeholder && placeholder.svg" },;
  { id: 5, alt: "Profile screen", src: "/placeholder && placeholder.svg" }],;

export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {;
    if (scrollContainerRef && scrollContainerRef.current) {;

      const scrollAmount = 300,;
      scrollContainerRef && scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});

    }



  }
    }

  },



  return (


          <div 



            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"

            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockScreenshots.map((screenshot) => (

              <div;
                key={screenshot.id}"
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}

                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>



          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 



            onClick={() => scroll("right")}
          >"
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>



          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;



            onClick={() => scroll("right")}
          >;"
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;

  );

import React, { useRef } from './react';

import { ChevronLeft, ChevronRight } from './lucide-react';

import { Button } from '@/components / ui / button';
// These would be replaced with actual screenshots;
const mock_screenshots = [;"
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },"
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },"
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },"
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },"
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
export const AppScreenshots: React.FC = () => {};
  const scrollContainerRef = useRef < HTMLDivElement>(null);
;"
  const scroll = (direction: "left" | "right") =>: any {}
    // Check condition;
if ( {) {}
  $2;
}
      const scroll_amount = 300,
      scrollContainerRef.current.scroll_by ({"
        left: direction === "left" ? -scroll_amount : scroll_amount,"
        behavior: "smooth"});
    }
  }
;

            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;"
        <div className="relative">;

            style={{ scrollbar_width: "none", msOverflowStyle: "none" }}
          >;
            {mock_screenshots.map ((screenshot) => (
              <div;

          </Button>;
        </div>;
      </div>;
    </section>);
}

;



