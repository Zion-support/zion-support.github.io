
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
    }
  };

  return (_<section className="py-16 bg-zion-blue-dark">
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
            onClick={_() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div 
            ref={_scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
            style={_{ scrollbarWidth: "none", _msOverflowStyle: "none"}}
          >
            {_mockScreenshots.map(_(screenshot) => (
              <div 
                key={screenshot.id} 
                className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30"
              >
                <img
                  src={_screenshot.src}
                  alt={_screenshot.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick={_() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
