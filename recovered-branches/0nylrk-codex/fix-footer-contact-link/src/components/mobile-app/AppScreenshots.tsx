<<<<<<< HEAD
import React, { useRef } from "react","
import { ChevronLeft, ChevronRight } from "lucide-react";"
import { Button } from "@/components/ui/button";"
import { ChevronLeft, ChevronRight } from "lucide-react","
import { Button } from "@/components/ui/button","
// These would be replaced with actual screenshots,
const mockScreenshots = [;
  { "id": 1, "alt": "Dashboard screen", "src": "/placeholder.svg" }"
  { "id": 2, "alt": "Talent matching screen", "src": "/placeholder.svg" }"
  { "id": 3, "alt": "Resume builder screen", "src": "/placeholder.svg" }"
  { "id": 4, "alt": "Messaging screen", "src": "/placeholder.svg" }"
  { "id": 5, "alt": "Profile screen", "src": "/placeholder.svg" }]"
export const "AppScreenshots": React.FC = () => {;
  }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useRef } from "react",
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// These would be replaced with actual screenshots
const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
  const scrollContainerRef = useRef<HTMLDivElement>(null);
export const "AppScreenshots": React.FC = () => {
  }
  const scrollContainerRef = useRef<HTMLDivElement>(null),;
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory""
            style={ "scrollbarWidth": "none", "msOverflowStyle": "none" }"
          >
            {mockScreenshots.map((screenshot) => (
              <div
}
key={screenshot.id}
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30""
              >
                <img,
src={screenshot.src}
                  alt={screenshot.alt}
          <Button,
variant="ghost";"
            size="icon" "
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" "
            onClick={() => scroll("right")}"
          >
            <ChevronRight className="h-6 w-6" />"
          </Button>
        </div>
      </div>
    </section>
  )},
import React, { useRef } from "react";"
import { ChevronLeft, ChevronRight } from "lucide-react";"
import { Button } from "@/components/ui/button",;"
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { "id": 1, "alt": "Dashboard screen", "src": "/placeholder.svg" },;"
  { "id": 2, "alt": "Talent matching screen", "src": "/placeholder.svg" },;"
  { "id": 3, "alt": "Resume builder screen", "src": "/placeholder.svg" },;"
  { "id": 4, "alt": "Messaging screen", "src": "/placeholder.svg" },;"
  { "id": 5, "alt": "Profile screen", "src": "/placeholder.svg" }],;"
export const "AppScreenshots": React.FC = () => {;
  }
  const scroll = ("direction": "left" | "right") => {;"
    }
    if (scrollContainerRef.current) {;
      }
<<<<<<< HEAD
=======
=======
export const AppScreenshots: React.FC = () => {};
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

import React, { useRef } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import React, { useRef } from "react",
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react",
import { Button } from "@/components/ui/button",
// These would be replaced with actual screenshots
>>>>>>> merged-prs-20250907-203621

const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" }
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" }
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" }
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" }
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }]
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null),

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount

        behavior: "smooth"})
<<<<<<< HEAD

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
>>>>>>> origin/chore/fix-lint-and-merge
      const scrollAmount = 300,;
      scrollContainerRef && scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});

    }
=======
<<<<<<< HEAD
    }
  }
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
<<<<<<< HEAD

=======
=======

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
>>>>>>> origin/chore/fix-lint-and-merge
      const scrollAmount = 300,;
      scrollContainerRef && scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});

    }
<<<<<<< HEAD

    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
    }

  },

<<<<<<< HEAD
  return (

=======
<<<<<<< HEAD
  return (

=======

  return (


          <div 


<<<<<<< HEAD
          <div
          <div 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"

            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockScreenshots.map((screenshot) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
              <div 
                key = $2;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              <div;
                key={screenshot.id}"
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}
<<<<<<< HEAD

"

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
"

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            onClick={() => scroll("right")}
          >"
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
},

import React, { useRef } from "react",;

import { ChevronLeft, ChevronRight } from "lucide-react",;

import { Button } from "@/components/ui/button",;

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},
import React, { useRef } from "react",;
import { ChevronLeft, ChevronRight } from "lucide-react",;
import { Button } from "@/components/ui/button",;
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },;
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },;
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },;
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },;
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],;
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null),;
  const scroll = (direction: "left" | "right") => {;
    if (scrollContainerRef.current) {;
>>>>>>> origin/resolved-merge-conflicts
      const scrollAmount = 300,;
      scrollContainerRef.current.scrollBy({;
        }
        "left": direction === "left" ? -scrollAmount : scrollAmount,;"
        "behavior": "smooth"});"
    }
  };
<<<<<<< HEAD
return (;                  className="w-full h-full object-cover";"
=======
  return (;
<<<<<<< HEAD
    }
  }
  return (

import React, { useRef } from "react",;
import { ChevronLeft, ChevronRight } from "lucide-react",;
import { Button } from "@/components/ui/button",;
;
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { id:1, alt:"Dashboard screen", src:"/placeholder.svg" },;
  { id:2, alt:"Talent matching screen", src:"/placeholder.svg" },;
  { id:3, alt:"Resume builder screen", src:"/placeholder.svg" },;
  { id:4, alt:"Messaging screen", src:"/placeholder.svg" },;
  { id:5, alt:"Profile screen", src:"/placeholder.svg" }],;
;
export const AppScreenshots:React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null),;
;
  const scroll = (direction:"left" | "right") => {;
    if (scrollContainerRef.current) {;
      const scrollAmount = 300,;
      scrollContainerRef.current.scrollBy({;
        left:direction === "left" ? -scrollAmount :scrollAmount,;
        behavior:"smooth"}),;
    }
  },;
;
  return (;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;
<<<<<<< HEAD

=======
<<<<<<< HEAD
        ;
        <div className="relative">;
          <Button ;
            variant="ghost" ;
            size="icon" ;
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" ;
        <div className="relative">;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
=======

<<<<<<< HEAD
=======
        <div className="relative">;
          <Button
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => scroll("left")}
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;
<<<<<<< HEAD
          </div>;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>;
            {mockScreenshots && mockScreenshots.map((screenshot) => (;
              <div
                key={screenshot && screenshot.id} 
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30">;
                <img
                  src={screenshot && screenshot.src} 
                  alt={screenshot && screenshot.alt}

                  className="w-full h-full object-cover"

>>>>>>> origin/resolved-merge-conflicts
                />;
              </div>;
            ))}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
          </div>;
          <Button,
variant="ghost";"
            size="icon" "
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" "
            onClick={() => scroll("right")}"
          >;
<<<<<<< HEAD
            <ChevronRight className="h-6 w-6" />;"
=======
            {mockScreenshots.map((screenshot) => (;
              <div;
                key={screenshot.id} ;
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30";
              >;
                <img;
                  src={screenshot.src} ;
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            onClick={() => scroll("right")}
          >;"
            <ChevronRight className="h-6 w-6" />;
>>>>>>> origin/resolved-merge-conflicts
          </Button>;
        </div>;
      </div>;
    </section>;
  )
};
<<<<<<< HEAD
import { ChevronLeft, ChevronRight } from './lucide-react';'
import { Button } from '@/components / ui / button';'
=======

=======
<<<<<<< HEAD

};

=======
  );
<<<<<<< HEAD
=======

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useRef } from './react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { ChevronLeft, ChevronRight } from './lucide-react';

import { Button } from '@/components / ui / button';
>>>>>>> origin/resolved-merge-conflicts
// These would be replaced with actual screenshots;
const mock_screenshots = [;
  { "id": 1, "alt": "Dashboard screen", "src": "/placeholder.svg" },"
  { "id": 2, "alt": "Talent matching screen", "src": "/placeholder.svg" },"
  { "id": 3, "alt": "Resume builder screen", "src": "/placeholder.svg" },"
  { "id": 4, "alt": "Messaging screen", "src": "/placeholder.svg" },"
  { "id": 5, "alt": "Profile screen", "src": "/placeholder.svg" }],"
export const "AppScreenshots": React.FC = () => {
  }
  const scrollContainerRef = useRef < HTMLDivElement>(null);
;
  const scroll = ("direction": "left" | "right") =>: any {"
    // Check condition
}
if ( {) {
  $2
}
const scroll_amount = 300,;
      scrollContainerRef.current.scroll_by ({
        }
        "left": direction === "left" ? -scroll_amount : scroll_amount,"
        "behavior": "smooth"});"
    }
  }
;
return (;
    <section className="py - 16 bg - zion - blue-dark">;"
      <div className="container mx - auto px-4">;"
        <div className="text - center mb-12">;"
          <h2 className="text - 3xl "md":text - 4xl font - bold mb-4">App Screenshots</h2>;"
          <p className="text - lg text - gray - 300 max - w-2xl mx-auto">;"
            Take a visual tour through the Zion app's intuitive interface.;'
          </p>;
        </div>;
        <div className="relative">;"
          <Button;
            variant="ghost";"
            size="icon";"
            className="absolute left - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text-white";"
            on_click={() => scroll ("left")}"
          >;
            <ChevronLeft className="h - 6 w-6" />;"
          </Button>;
          <div;
            ref={scrollContainerRef}
            className="flex overflow - x-auto gap - 4 py - 8 px - 4 scrollbar - hide snap - x snap-mandatory";"
            style={ "scrollbar_width": "none", "msOverflowStyle": "none" }"
          >;
            {mock_screenshots.map ((screenshot) => (
              <div;
                }
                key={screenshot.id}
                className="flex - shrink - 0 w - 60 h-[500px] snap - center rounded - xl overflow - hidden border - 2 border - zion-purple / 30";"
              >;
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w - full h - full object-cover";" />;
              </div>))}
          </div>;
          <Button;
            variant="ghost";"
            size="icon";"
            className="absolute right - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text-white";"
            on_click={() => scroll ("right")}"
          >;
            <ChevronRight className="h - 6 w-6" />;"
          </Button>;
        </div>;
      </div>;
    </section>);
}

};
<<<<<<< HEAD

export const AppScreenshots: React.FC = $2;
  const scroll = $2;
      scrollContainerRef.current.scrollBy({
        left: direction = $2;
        behavior: "smooth"})
    }
  },

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={ scrollbarWidth: "none", msOverflowStyle: "none" }
          >
            {mockScreenshots.map((screenshot) => (
              <div 
                key = $2;
=======
=======
<<<<<<< HEAD

};
=======
;
<<<<<<< HEAD
          ;
          <div ;
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory";
            style={{ scrollbarWidth:"none", msOverflowStyle:"none" }}
          >;
            {mockScreenshots.map((screenshot) => (;
              <div ;
                key={screenshot.id} ;
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30";
              >;
                <img ;
                  src={screenshot.src} ;
                  alt={screenshot.alt}
                  className="w-full h-full object-cover";
                />;
              </div>;
            ))}
          </div>;
          ;
          <Button ;
            variant="ghost" ;
            size="icon" ;
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" ;
            onClick={() => scroll("right")}
          >;
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;
  ),;
},; export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement> (null);
const scroll = (direction: "left" | "right") => {
  if (scrollContainerRef.current) {
  const scrollAmount = 300;
scrollContainerRef.current.scrollBy ({
  
}
};
Take a visual tour through the Zion app's intuitive interface. </p> </div> <div className="relative" > <Button > <ChevronLeft className="h-6 w-6" /> </Button> <div > {
  mockScreenshots.map ( (screenshot) => (<div key= {
  screenshot.id 
}className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30" > <img /> </div>) ) 
}</div> <Button > <ChevronRight className="h-6 w-6" /> </Button> </div> </div> </section>) 
};
};
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
