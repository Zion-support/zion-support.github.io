
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
=======
import React, {_useRef} from "react";

// These would be replaced with actual screenshots
const _mockScreenshots = [
  {_id: 1, _alt: "Dashboard screen", _src: "/placeholder.svg"},
  {_id: 2, _alt: "Talent matching screen", _src: "/placeholder.svg"},
  {_id: 3, _alt: "Resume builder screen", _src: "/placeholder.svg"},
  {_id: 4, _alt: "Messaging screen", _src: "/placeholder.svg"},
  {_id: 5, _alt: "Profile screen", _src: "/placeholder.svg"}];

export const AppScreenshots: React.FC = () => {_const _scrollContainerRef = useRef<HTMLDivElement>(null);

  const _scroll = (_direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const _scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount, _behavior: "smooth"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return (
    <section className=&quot;py-16 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>App Screenshots</h2>
          <p className=&quot;text-lg text-gray-300 max-w-2xl mx-auto&quot;>
=======
  return (_<section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Take a visual tour through the Zion app's intuitive interface.
          </p>
        </div>
        
        <div className=&quot;relative&quot;>
          <Button 
<<<<<<< HEAD
            variant=&quot;ghost&quot; 
            size=&quot;icon&quot; 
            className=&quot;absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white&quot; 
            onClick={() => scroll(&quot;left&quot;)}
=======
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
            onClick={_() => scroll("left")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <ChevronLeft className=&quot;h-6 w-6&quot; />
          </Button>
          
          <div 
<<<<<<< HEAD
            ref={scrollContainerRef}
            className=&quot;flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory&quot;
            style={{ scrollbarWidth: &quot;none&quot;, msOverflowStyle: &quot;none&quot; }}
=======
            ref={_scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={_{ scrollbarWidth: "none", _msOverflowStyle: "none"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            {_mockScreenshots.map(_(screenshot) => (
              <div 
                key={screenshot.id} 
                className=&quot;flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30&quot;
              >
                <img 
<<<<<<< HEAD
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className=&quot;w-full h-full object-cover&quot;
=======
                  src={_screenshot.src} 
                  alt={_screenshot.alt}
                  className="w-full h-full object-cover"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                />
              </div>
            ))}
          </div>
          
          <Button 
<<<<<<< HEAD
            variant=&quot;ghost&quot; 
            size=&quot;icon&quot; 
            className=&quot;absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white&quot; 
            onClick={() => scroll(&quot;right&quot;)}
=======
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
            onClick={_() => scroll("right")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <ChevronRight className=&quot;h-6 w-6&quot; />
          </Button>
        </div>
      </div>
    </section>
  )
},
