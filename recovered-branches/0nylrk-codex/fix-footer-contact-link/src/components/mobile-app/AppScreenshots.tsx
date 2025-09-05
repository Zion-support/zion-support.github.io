
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useRef } from "react",
import { ChevronLeft, ChevronRight } from "lucide-react",
import { Button } from "@/components/ui/button",
// These would be replaced with actual screenshots
const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],
=======
import React, { useRef } from &quot;react&quot;;
import { ChevronLeft, ChevronRight } from &quot;lucide-react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;

// These would be replaced with actual screenshots
const mockScreenshots = [
  { id: 1, alt: &quot;Dashboard screen&quot;, src: &quot;/placeholder.svg&quot; },
  { id: 2, alt: &quot;Talent matching screen&quot;, src: &quot;/placeholder.svg&quot; },
  { id: 3, alt: &quot;Resume builder screen&quot;, src: &quot;/placeholder.svg&quot; },
  { id: 4, alt: &quot;Messaging screen&quot;, src: &quot;/placeholder.svg&quot; },
  { id: 5, alt: &quot;Profile screen&quot;, src: &quot;/placeholder.svg&quot; }];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null),

  const scroll = (direction: &quot;left&quot; | &quot;right&quot;) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300,
      scrollContainerRef.current.scrollBy({
<<<<<<< HEAD
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"})
=======
        left: direction === &quot;left&quot; ? -scrollAmount : scrollAmount,
        behavior: &quot;smooth&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },

  return (
    <section className=&quot;py-16 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>App Screenshots</h2>
          <p className=&quot;text-lg text-gray-300 max-w-2xl mx-auto&quot;>
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
        
        <div className=&quot;relative&quot;>
          <Button 
            variant=&quot;ghost&quot; 
            size=&quot;icon&quot; 
            className=&quot;absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white&quot; 
            onClick={() => scroll(&quot;left&quot;)}
          >
            <ChevronLeft className=&quot;h-6 w-6&quot; />
          </Button>
          
          <div 
            ref={scrollContainerRef}
            className=&quot;flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory&quot;
            style={{ scrollbarWidth: &quot;none&quot;, msOverflowStyle: &quot;none&quot; }}
          >
            {mockScreenshots.map((screenshot) => (
              <div 
                key={screenshot.id} 
                className=&quot;flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30&quot;
              >
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className=&quot;w-full h-full object-cover&quot;
                />
              </div>
            ))}
          </div>
          
          <Button 
            variant=&quot;ghost&quot; 
            size=&quot;icon&quot; 
            className=&quot;absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white&quot; 
            onClick={() => scroll(&quot;right&quot;)}
          >
            <ChevronRight className=&quot;h-6 w-6&quot; />
          </Button>
        </div>
      </div>
    </section>
  )
},
=======
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
          <Button;
            variant="ghost";
            size="icon";
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
            onClick={() => scroll("left")}
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
                  src={screenshot.src} ;
                  alt={screenshot.alt}
                  className="w-full h-full object-cover";
                />;
              </div>;
            ))}
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white";
            onClick={() => scroll("right")}
          >;
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;
  );
};
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
