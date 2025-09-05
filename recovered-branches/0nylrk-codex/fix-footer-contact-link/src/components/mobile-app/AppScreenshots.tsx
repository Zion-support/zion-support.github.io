
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

export const AppScreenshots: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: &quot;left&quot; | &quot;right&quot;) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === &quot;left&quot; ? -scrollAmount : scrollAmount,
        behavior: &quot;smooth&quot;});
    }
  };

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
  );
};
