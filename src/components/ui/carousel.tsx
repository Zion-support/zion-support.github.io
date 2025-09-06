
<<<<<<< HEAD

<<<<<<< HEAD
=======
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {
  axis?: 'x' | 'y'
  [key: string]: any
}
type CarouselPlugin = any
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
  setApi?: (api: CarouselApi) => void
}
type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
<<<<<<< HEAD
<<<<<<< HEAD



=======
  }
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps "orientation">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {
  const context = React.useContext(CarouselContext) as CarouselContextProps | null

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
<<<<<<< HEAD
=======
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
;
  return context as CarouselContextProps;
const Carousel = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {


<<<<<<< HEAD
      orientation = "horizontal",

      opts,
      orientation = &quot;horizontal&quot;
      orientation = &quot;horizontal&quot;
      opts
      setApi
      plugins
      className
      children
      orientation = "horizontal",
=======

      orientation = "horizontal",
      orientation = "horizontal",
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
<<<<<<< HEAD
        ...(opts |{})
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...(opts |{})
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      plugins
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === &quot;ArrowLeft&quot;) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === &quot;ArrowRight&quot;) {
          event.preventDefault()
          scrollNext()
        }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;

      };
<<<<<<< HEAD

      },;

      [scrollPrev, scrollNext];
      }
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {if (!api |!setApi) {;
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {if (!api) {;
        return;
      }
onSelect(api)
      api.on(&quot;reInit&quot;, onSelect)
      api.on(&quot;select&quot;, onSelect)
      };
      },;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
;
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {;
      if (!api) {;
        return;
      }
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])
    return (
      <CarouselContext.Provider
        value={{
          carouselRef
          api: api
          opts
          orientation:
          canScrollNext}}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD
<<<<<<< HEAD


className={cn(&quot;relative&quot; className)}

=======
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

className={cn(&quot;relative&quot;, className)}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
<<<<<<< HEAD
<<<<<<< HEAD



          {...props}
        >;
=======
ursor/fix-website-loading-errors-and-merge-6662
className={cn(&quot;relative&quot;, className)}
className={cn(&quot;relative&quot; className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


          {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          {children}
        </div>;
      </CarouselContext.Provider>);
  }
<<<<<<< HEAD
<<<<<<< HEAD

)

Carousel.displayName = "Carousel"



=======
)

)
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = "Carousel"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
=======
);
Carousel.display_name = &quot;Carousel & quot;
;
const CarouselContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { carousel_ref, orientation } = use_carousel ();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
      <div;
        ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD

        className={cn(

=======
        className={cn(
          &quot;flex&quot;
          orientation === &quot;horizontal&quot;
            ? &quot;-ml-4 snap-x snap-mandatory&quot;
            : &quot;-mt-4 flex-col snap-y snap-mandatory&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          "flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",

=======
        className={cn(

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

          className
<<<<<<< HEAD
        )}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        {...props}
      />
    </div>
  )
})
<<<<<<< HEAD
<<<<<<< HEAD


CarouselContent.displayName = "CarouselContent"



=======
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
  return (
    <div;
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD

      role="group"
      aria-roledescription="slide"
      className={cn(

=======
      role="group"
      aria-roledescription="slide"
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full snap-start&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
ursor/fix-website-loading-errors-and-merge-6662
        &quot;min-w-0 shrink-0 grow-0 basis-full snap-start&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


        className
<<<<<<< HEAD
      )}
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD


CarouselItem.displayName = "CarouselItem"


const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>

=======
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {


  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
      role=&quot;group & quot;
      aria - roledescription=&quot;slide & quot;
      className={cn (
        &quot;min - w-0 shrink - 0 grow - 0 basis - full snap - start & quot;,
        orientation === &quot;horizontal & quot; ? &quot;pl - 4&quot; : &quot;pt - 4&quot;,
        class_name)}
      {...props}
    />);
});
CarouselItem.display_name = &quot;CarouselItem & quot;
;
const CarouselPrevious = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();
<<<<<<< HEAD
=======
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      className={cn(


<<<<<<< HEAD
=======
      className={cn(
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        className
      )}
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;left - 1 sm:left - 2 md:-left - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;top - 1 sm:top - 2 md:-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
<<<<<<< HEAD
=======
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
<<<<<<< HEAD
=======
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>



<<<<<<< HEAD
=======
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </Button>
})
<<<<<<< HEAD
CarouselPrevious.displayName = "CarouselPrevious"

=======
const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>

onst CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
ursor/fix-website-loading-errors-and-merge-6662
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {

  const { orientation, scrollNext, canScrollNext } = useCarousel()
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>;
      <ArrowLeft className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Previous slide</span>;
    </Button>);
});
CarouselPrevious.display_name = &quot;CarouselPrevious & quot;
;
const CarouselNext = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_next, canScrollNext } = use_carousel ();
<<<<<<< HEAD
=======
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
=======
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
  const { orientation, scrollNext, canScrollNext } = useCarousel()
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
<<<<<<< HEAD

      className={cn(

=======
      className={cn(
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD

=======
=======
      className={cn(


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
<<<<<<< HEAD
>
      <ArrowRight className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Next slide</span>
>
      <ArrowRight className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = &quot;CarouselNext&quot;
export {
  type CarouselApi
  Carousel
  CarouselContent
  CarouselItem
  CarouselPrevious
  CarouselNext}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

        className
      )}
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;right - 1 sm:right - 2 md:-right - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;bottom - 1 sm:bottom - 2 md:-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}

>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;
;


    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>



    </Button>
<<<<<<< HEAD
  )
})
CarouselNext.displayName = "CarouselNext"

=======
})
CarouselNext.displayName = "CarouselNext"

    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
=======
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
<<<<<<< HEAD
<<<<<<< HEAD


=======
  CarouselPrevious,;
  CarouselNext};
ursor/fix-website-loading-errors-and-merge-6662
  CarouselPrevious,;
  CarouselNext};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  CarouselPrevious,
  CarouselNext}
;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
