<<<<<<< HEAD

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



// These would be replaced with actual screenshots



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
  },

  return (
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
          <div
          <div 
=======


          <div 


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {mockScreenshots.map((screenshot) => (
              <div
                key={screenshot.id}
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}

=======
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
<<<<<<< HEAD
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
}

=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;

        <div className="relative">;
          <Button
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
            onClick={() => scroll("left")}
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    }
  }
  return (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                  className="w-full h-full object-cover"
                />;
              </div>;
            ))}
<<<<<<< HEAD

          </div>;

          <Button
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
            onClick={() => scroll("right")}
          >;
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
