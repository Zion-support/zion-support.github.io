

}
import React, { useRef } from "react"

import { ChevronLeft, ChevronRight } from 'lucide-react'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Button } from "@/components/ui/button";
// These would be replaced with actual screenshots

const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" }
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" }
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" }
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" }
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }]
export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: "left" | "right",) => {
<<<<<<< HEAD
=======
=======
import { Button } from "@/components/ui/button"
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useRef } from "react",
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// These would be replaced with actual screenshots
const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
<<<<<<< HEAD
=======
<<<<<<< HEAD
export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: "left" | "right",) => {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null),

  const scroll = (direction: "left" | "right") => {
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount
        behavior: "smooth"})
};
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
// These would be replaced with actual screenshots;
const mockScreenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder && placeholder.svg" },;
  { id: 2, alt: "Talent matching screen", src: "/placeholder && placeholder.svg" },;
  { id: 3, alt: "Resume builder screen", src: "/placeholder && placeholder.svg" },;
  { id: 4, alt: "Messaging screen", src: "/placeholder && placeholder.svg" },;
  { id: 5, alt: "Profile screen", src: "/placeholder && placeholder.svg" }],;
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right",) => {;
    if (scrollContainerRef && scrollContainerRef.current) {;
      const scrollAmount = 300,;
      scrollContainerRef && scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});
    }
  }
<<<<<<< HEAD
  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
=======
=======
    }

  },

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (

    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;

        <div className="relative">;

=======

        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick = {(,) => scroll("left"),}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <div
            ref = {scrollContainerRef,}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockScreenshots.map((screenshot,) => (
              <div
                key = {screenshot.id,}
<<<<<<< HEAD
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img
                  src = {screenshot && screenshot.src,}
                  alt = {screenshot && screenshot.alt,}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />;
              </div>;
            ))}
          </div>
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockScreenshots.map((screenshot) => (
              <div 
                key={screenshot.id} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick = {() => scroll("right"),}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
  );
};
'"};
};
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}
'"}
}

<<<<<<< HEAD

;
}
import React, { useRef } from './react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button  } from '@/components / ui / button';
// These would be replaced with actual screenshots;
const mock_screenshots = [;
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef < HTMLDivElement>(null);
  const scroll = (direction: "left" | "right", ) =>: any {
    // Check condition
if ( {) {
  $2
}
      const scroll_amount = 300,
      scrollContainerRef.current.scroll_by ({
        left: direction === "left" ? -scroll_amount : scroll_amount,
        behavior: "smooth"});
    }
  }
  return (
    <section className="py - 16 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">App Screenshots</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
},
import React, { useRef } from "react",;
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      const scrollAmount = 300,;
      scrollContainerRef.current.scrollBy({;
        left: direction === "left" ? -scrollAmount : scrollAmount,;
        behavior: "smooth"});
    }
  };
  return (;
    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;
        <div className="relative">;
          <Button;
            variant="ghost";
            size="icon";
<<<<<<< HEAD
            className="absolute left - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text - white";
            on_click = {(, ) => scroll ("left"), }
            aria - label="Scroll left";
          >;
            <ChevronLeft className="h - 6 w - 6" />;
          </Button>;
          <div;
            ref = {scrollContainerRef, }
            className="flex overflow - x-auto gap - 4 py - 8 px - 4 scrollbar - hide snap - x snap - mandatory";
            style={{ scrollbar_width: "none", msOverflowStyle: "none" }}
          >;
            {mock_screenshots.map ((screenshot, ) => (
              <div;
                key = {screenshot.id, }
                className="flex - shrink - 0 w - 60 h-[500px] snap - center rounded - xl overflow - hidden border - 2 border - zion - purple / 30";
              >;
                <img;
                  src = {screenshot.src, }
                  alt = {screenshot.alt, }
                  className="w - full h - full object - cover";
                  loading="lazy";
                />;
              </div>))}
=======
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
            onClick={() => scroll("left")}
            aria-label="Scroll left";
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;
          <div;
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory";
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >;
            {mockScreenshots.map((screenshot) => (;
              <div;
                key={screenshot.id} ;
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30";
              >;
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover";
                  loading="lazy";
                />;
              </div>;
            ))}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </div>;
          <Button;
            variant="ghost";
            size="icon";
<<<<<<< HEAD
            className="absolute right - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text - white";
            on_click = {() => scroll ("right"), }
            aria - label="Scroll right";
          >;
            <ChevronRight className="h - 6 w - 6" />;
          </Button>;
        </div>;
      </div>;
    </section>);
}
'"},
}
=======
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
            onClick={() => scroll("right")}
            aria-label="Scroll right";
          >;
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;
  );
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
