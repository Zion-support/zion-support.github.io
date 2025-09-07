<<<<<<< HEAD

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// These would be replaced with actual screenshots



<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useRef } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

=======
// These would be replaced with actual screenshots

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useRef } from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {Button} from "@/components/ui/button";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useRef } from "react",



import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { ChevronLeft, ChevronRight } from "lucide-react",
import { Button } from "@/components/ui/button",
// These would be replaced with actual screenshots

const mockScreenshots = [
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" }
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" }
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" }
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" }
=======
// These would be replaced with actual screenshots;
import React, { useRef } from "react",";
import { ChevronLeft, ChevronRight } from "lucide-react";"
import { Button } from "@/components/ui/button";"
import { ChevronLeft, ChevronRight } from "lucide-react","
import { Button } from "@/components/ui/button",;
// These would be replaced with actual screenshots;
const mockScreenshots = ["
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" }"
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" }"
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" }"
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" }"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }]
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
export const AppScreenshots: React.FC = () => {};
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount
<<<<<<< HEAD
=======
"
  const scroll = (direction: "left" | "right") => {}
    if (scrollContainerRef.current) {}
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({"
        left: direction === "left" ? -scrollAmount : scrollAmount"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        behavior: "smooth"})

<<<<<<< HEAD
=======
        behavior: "smooth"})

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
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
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
  return (
=======
=======
    }
  }
  },

  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  }
    }

  },


  return (


<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div
          <div 
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <div 


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory"
=======
          <div;
            ref={scrollContainerRef}"
            className="flex overflow-x-auto gap-4 py-8 px-4 scrollbar-hide snap-x snap-mandatory""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


"
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white"
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



          <Button "
            variant="ghost" "
            size="icon" "
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            onClick={() => scroll("right")}
          >"
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
},
=======
  )},
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )},
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  )


},
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useRef } from "react",;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { ChevronLeft, ChevronRight } from "lucide-react",;
=======
},"
import React, { useRef } from "react",;"
import { ChevronLeft, ChevronRight } from "lucide-react",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Button } from "@/components/ui/button",;
<<<<<<< HEAD
// These would be replaced with actual screenshots;
const mockScreenshots = [;"
  { id: 1, alt: "Dashboard screen", src: "/placeholder.svg" },;"
  { id: 2, alt: "Talent matching screen", src: "/placeholder.svg" },;"
  { id: 3, alt: "Resume builder screen", src: "/placeholder.svg" },;"
  { id: 4, alt: "Messaging screen", src: "/placeholder.svg" },;"
  { id: 5, alt: "Profile screen", src: "/placeholder.svg" }],;
export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement>(null),;"
  const scroll = (direction: "left" | "right") => {;
    if (scrollContainerRef.current) {;
      const scrollAmount = 300,;
      scrollContainerRef.current.scrollBy({;"
        left: direction === "left" ? -scrollAmount : scrollAmount,;"
        behavior: "smooth"});
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (;


"
    <section className="py-16 bg-zion-blue-dark">;"
      <div className="container mx-auto px-4">;"
        <div className="text-center mb-12">;"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;"
=======
  return (;

    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;

<<<<<<< HEAD

"
            onClick={() => scroll("left")}
          >;"
            <ChevronLeft className="h-6 w-6" />;
          </Button>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <div className="relative">;
          <Button
            variant="ghost" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
            onClick={() => scroll("left")}
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    }
  }
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  className="w-full h-full object-cover"
=======
  return (;                  className="w-full h-full object-cover"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  return (;                  className="w-full h-full object-cover"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    }
  }
  return (
                  className="w-full h-full object-cover"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                />;
              </div>;
            ))}

<<<<<<< HEAD
          </div>;

          <Button
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 
=======


          <Button"
            variant="ghost" "
            size="icon" "
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-zion-blue-dark/70 text-white" 


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            onClick={() => scroll("right")}
          >;"
            <ChevronRight className="h-6 w-6" />;
          </Button>;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD

};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
=======
  )
};
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );

};
import React, { useRef } from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { ChevronLeft, ChevronRight } from './lucide-react';
=======
  );
'
import React, { useRef } from './react';'
import { ChevronLeft, ChevronRight } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <section className="py - 16 bg - zion - blue-dark">;
      <div className="container mx - auto px-4">;
        <div className="text - center mb-12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb-4">App Screenshots</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx-auto">;
=======
  return ("
    <section className="py - 16 bg - zion - blue - dark">;"
      <div className="container mx - auto px - 4">;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">App Screenshots</h2>;"
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    <section className="py - 16 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">App Screenshots</h2>;
          <p className="text - lg text - gray - 300 max - w-2xl mx - auto">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;"
        <div className="relative">;
<<<<<<< HEAD
          <Button;
            variant="ghost";
            size="icon";
            className="absolute left - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text - white";
            on_click={() => scroll ("left")}
          >;
            <ChevronLeft className="h - 6 w - 6" />;
          </Button>;
          <div;
            ref={scrollContainerRef}
<<<<<<< HEAD
            className="flex overflow - x-auto gap - 4 py - 8 px - 4 scrollbar - hide snap - x snap-mandatory";
=======
          <Button;"
            variant="ghost";"
            size="icon";"
            className="absolute left - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text - white";"
            on_click={() => scroll ("left")}
          >;"
            <ChevronLeft className="h - 6 w - 6" />;
          </Button>;
          <div;
            ref={scrollContainerRef}"
            className="flex overflow - x-auto gap - 4 py - 8 px - 4 scrollbar - hide snap - x snap - mandatory";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            className="flex overflow - x-auto gap - 4 py - 8 px - 4 scrollbar - hide snap - x snap - mandatory";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            style={{ scrollbar_width: "none", msOverflowStyle: "none" }}
          >;
            {mock_screenshots.map ((screenshot) => (
              <div;
<<<<<<< HEAD
                key={screenshot.id}
                className="flex - shrink - 0 w - 60 h-[500px] snap - center rounded - xl overflow - hidden border - 2 border - zion - purple / 30";
              >;
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w - full h - full object - cover";
                />;
              </div>))}
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="absolute right - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text - white";
            on_click={() => scroll ("right")}
          >;
<<<<<<< HEAD
            <ChevronRight className="h - 6 w-6" />;
=======
                key={screenshot.id}"
                className="flex - shrink - 0 w - 60 h-[500px] snap - center rounded - xl overflow - hidden border - 2 border - zion - purple / 30";
              >;
                <img;
                  src={screenshot.src}
                  alt={screenshot.alt}"
                  className="w - full h - full object - cover";
                />;
              </div>))}
          </div>;
          <Button;"
            variant="ghost";"
            size="icon";"
            className="absolute right - 0 top - 1/2 -translate - y-1 / 2 z - 10 bg - zion - blue - dark / 70 text - white";"
            on_click={() => scroll ("right")}
          >;"
            <ChevronRight className="h - 6 w - 6" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
            <ChevronRight className="h - 6 w - 6" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </Button>;
        </div>;
      </div>;
    </section>);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;



};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
// These would be replaced with actual screenshots

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
