<<<<<<< HEAD

=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    <section className="py-16 bg-zion-blue-dark">;
      <div className="container mx-auto px-4">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Screenshots</h2>;
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">;
            Take a visual tour through the Zion app's intuitive interface.;
          </p>;
        </div>;
<<<<<<< HEAD

            onClick={() => scroll("left")}
          >;
            <ChevronLeft className="h-6 w-6" />;
          </Button>;

=======
 export const AppScreenshots: React.FC = () => {;
  const scrollContainerRef = useRef<HTMLDivElement> (null);
const scroll = (direction: "left", "right") => {;
  if (scrollContainerRef.current) {;
  const scrollAmount = 300;
scrollContainerRef.current.scrollBy ({;
  ;
}"};";"Take a visual tour through the Zion app's intuitive interface. </p> </div> <div className="relative" > <Button > <ChevronLeft className="h-6 w-6" /> </Button> <div > {;
  mockScreenshots.map ( (screenshot) => (<div key= {;"  screenshot.id ";"}className="flex-shrink-0 w-60 h-[500px] snap-center rounded-xl overflow-hidden border-2 border-zion-purple/30" > <img /> </div>) ) ";"}</div> <Button > <ChevronRight className="h-6 w-6" /> </Button> </div> </div> </section>) ;
};"'"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
