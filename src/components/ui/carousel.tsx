import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {
  axis?: 'x' | 'y'
  [key: string]: any
}
type CarouselPlugin = any
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean

  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps "orientation">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {
  const context = React.useContext(CarouselContext) as CarouselContextProps | null

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type CarouselOptions = {;
  axis?: 'x' | 'y';
  [key: string]: any;
}
type CarouselPlugin = any;
type CarouselProps = {;
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}
;
type CarouselContextProps = {;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
} & Omit<CarouselProps "orientation">;
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
function useCarousel(): CarouselContextProps {;
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {;
    throw new Error("useCarousel must be used within a <Carousel />");

  }
;
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {

      orientation = "horizontal",
      orientation = "horizontal",      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

          {...props}
        >;
          {children}
        </div>;
      </CarouselContext.Provider>;
    );
  }
)const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
);
Carousel.display_name = &quot;Carousel & quot;
;
const CarouselContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { carousel_ref, orientation } = use_carousel ();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}

        className={cn(

          className
        )}
        {...props}
      />
    </div>
  )
})    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>

    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
  const { orientation, scrollNext, canScrollNext } = useCarousel()  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(

        className
      )}
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;right - 1 sm:right - 2 md:-right - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;bottom - 1 sm:bottom - 2 md:-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
