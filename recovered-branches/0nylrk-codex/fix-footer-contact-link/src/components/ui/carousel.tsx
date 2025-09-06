

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"



type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
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
  }
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps "orientation">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {
  const context = React.useContext(CarouselContext) as CarouselContextProps | null

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {


      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,


      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {


        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},


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
        if (event.key === &quot;ArrowLeft&quot;) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === &quot;ArrowRight&quot;) {
          event.preventDefault()
          scrollNext()
        }

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;
=======

      },;
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }

;
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;
;
type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters < typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
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
        ...opts,
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
onSelect(api)
      api.on(&quot;reInit&quot;, onSelect)
      api.on(&quot;select&quot;, onSelect)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4



      return () => {
        api?.off("select", onSelect)
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      }
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {
      // Check condition
if ( {) {
  $2
}
        return;
      }
on_select (api);
      api.on (&quot;re_init & quot;, on_select);
      api.on (&quot;select & quot;, on_select);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      return () => {
        api?.off (&quot;select & quot;, on_select);
      }

    }, [api, on_select]);

    return (
      <CarouselContext.Provider;
        value={{

          carousel_ref,
          api: api,
          opts,
          orientation:;
            orientation || (opts?.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,

=======

            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}


          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {...props}
        >;
          {children}
        </div>;
      </CarouselContext.Provider>);
  }

)

Carousel.displayName = "Carousel"



const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
=======
);
Carousel.display_name = &quot;Carousel & quot;
;
const CarouselContent = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { carousel_ref, orientation } = use_carousel ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
      <div;
        ref={ref}

        className={cn(

          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",


          className
        )}
        {...props}
      />
    </div>
  )
})


CarouselContent.displayName = "CarouselContent"



const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
=======
        className={cn (
          &quot;flex & quot;,
          orientation === &quot;horizontal & quot; ? &quot;-ml - 4&quot; : &quot;-mt - 4 flex - col & quot;,
          class_name)}
        {...props}
      />;
    </div>);
});
CarouselContent.display_name = &quot;CarouselContent & quot;
;
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { orientation } = use_carousel ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div;
      ref={ref}

      role="group"
      aria-roledescription="slide"
      className={cn(

        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",


        className
      )}
      {...props}
    />
  )
})


CarouselItem.displayName = "CarouselItem"



const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
=======
      role=&quot;group & quot;
      aria - roledescription=&quot;slide & quot;
      className={cn (
        &quot;min - w-0 shrink - 0 grow - 0 basis - full & quot;,
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}

      className={cn(

        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",


        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
<<<<<<< HEAD
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
<<<<<<< HEAD
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}

      className={cn(

        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",


        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
<<<<<<< HEAD
>
      <ArrowRight className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Next slide</span>
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,


  CarouselNext}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
