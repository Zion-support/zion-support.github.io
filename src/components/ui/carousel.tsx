<<<<<<< HEAD
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'

=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      orientation = "horizontal",
      orientation = "horizontal",      opts,
=======

      orientation = "horizontal",

      opts,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
<<<<<<< HEAD
      {

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},


=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      plugins
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
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
<<<<<<< HEAD
      },;
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
=======

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;

      };

<<<<<<< HEAD
      },;

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
;
<<<<<<< HEAD
type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type CarouselOptions = {
  axis?: 'x' | 'y';
  [key: string]: any;
}
type CarouselPlugin = any;
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: &quot;horizontal & quot; | &quot;vertical & quot;
  set_api?: (api: CarouselApi) => void;
}
type CarouselContextProps = {
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];
  api: ReturnType < typeof useEmblaCarousel>[1];
  scroll_prev: () => void;
  scroll_next: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  }
  return context as CarouselContextProps;
}
const Carousel = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & CarouselProps;
>(
  (
    {
      orientation = &quot;horizontal & quot;,
      opts,
      set_api,
      plugins,
      class_name,
      children,
      ...props;
    },
    ref) => {
    const [carousel_ref, api] = useEmblaCarousel (
      {
        ...(opts || {}),
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},
      plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState (false);
    const [canScrollNext, setCanScrollNext] = React.useState (false);
    const on_select = React.useCallback ((api: CarouselApi) => {
      // Check condition
if ( {) {
  $2
}
        return;
      }


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}

<<<<<<< HEAD

className={cn(&quot;relative&quot; className)}

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          role=&quot;region&quot;
=======
      {          role=&quot;region&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          aria-roledescription=&quot;carousel&quot;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          {...props}
        >;
          {children}
        </div>;
      </CarouselContext.Provider>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD
)
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
Carousel.displayName = "Carousel"



=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const CarouselContent = React.forwardRef<
  HTMLDivElement,
=======
)const CarouselContent = React.forwardRef<
  HTMLDivElement
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}

        className={cn(
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          "flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          className
        )}
        {...props}
      />
    </div>
  )
<<<<<<< HEAD
})

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
CarouselContent.displayName = "CarouselContent"



=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
<<<<<<< HEAD
      role="group"
      aria-roledescription="slide"
      className={cn(
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
CarouselItem.displayName = "CarouselItem"


const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {


  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    >
=======
})    >
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>

    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
<<<<<<< HEAD
=======
  HTMLButtonElement
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
<<<<<<< HEAD

>(({ className, variant = "outline", size = "icon", ...props }, ref) => {

  const { orientation, scrollNext, canScrollNext } = useCarousel()
>;
      <ArrowLeft className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Previous slide</span>;
    </Button>);
});
CarouselPrevious.display_name = &quot;CarouselPrevious & quot;
;
const CarouselNext = React.forward_ref<;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return (
=======
  const { orientation, scrollNext, canScrollNext } = useCarousel()  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <Button
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
<<<<<<< HEAD
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>    </Button>
=======

    </Button>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  CarouselPrevious,
  CarouselNext}
;
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
