<<<<<<< HEAD


type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
=======
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;

>>>>>>> type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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

=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

  }
;

=======
>>>>>>>   }
;
>>>>>>>   return context as CarouselContextProps;
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return context as CarouselContextProps;
>>>>>>> }
const Carousel = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
<<<<<<< HEAD

      orientation = "horizontal",

      opts,
=======
      opts
      setApi
      plugins
      className
      children
      orientation = "horizontal",
>>>>>>>       opts,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      setApi,
      plugins,
      className,
      children,
<<<<<<< HEAD

=======
>>>>>>>       ...props
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      ...props
>>>>>>>     }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
<<<<<<< HEAD

=======
        ...(opts |{})
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

      },;

      [scrollPrev, scrollNext];
=======
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
      },;
>>>>>>>       [scrollPrev, scrollNext];
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
;
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
<<<<<<< HEAD
=======
onSelect(api)
      api.on(&quot;reInit&quot; onSelect)
      api.on(&quot;select&quot; onSelect)

      return () => {
        api?.off(&quot;select&quot; onSelect)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee


<<<<<<< HEAD
      return () => {
        api?.off("select", onSelect)

      }
=======
>>>>>>>       return () => {
        api?.off("select", onSelect)
>>>>>>>       }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }, [api, onSelect])
ursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>>     return (
      <CarouselContext.Provider;
        value={{
          carouselRef
          api: api
          opts
          orientation:
<<<<<<< HEAD

          canScrollNext}}
=======
            orientation |(opts && opts.axis === &quot;y&quot; ? &quot;vertical&quot; : &quot;horizontal&quot;)
          scrollPrev
          scrollNext
          canScrollPrev
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           canScrollNext}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD

          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;

          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

=======
className={cn(&quot;relative&quot;, className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
>>>>>>>           {...props}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {...props}
>>>>>>>         >;
          {children}
        </div>;
      </CarouselContext.Provider>);
  }
<<<<<<< HEAD
)

=======

)
Carousel.displayName = &quot;Carousel&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
<<<<<<< HEAD

=======
          &quot;flex&quot;
          orientation === &quot;horizontal&quot;
            ? &quot;-ml-4 snap-x snap-mandatory&quot;
            : &quot;-mt-4 flex-col snap-y snap-mandatory&quot;
>>>>>>>           className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          className
>>>>>>>         )}
        {...props}
      />
    </div>
  )
})
<<<<<<< HEAD

=======
CarouselContent.displayName = &quot;CarouselContent&quot;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
        className={cn (
          &quot;flex & quot;,
          orientation === &quot;horizontal & quot;
            ? &quot;-ml - 4 snap - x snap - mandatory & quot;
            : &quot;-mt - 4 flex - col snap - y snap - mandatory & quot;,
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
<<<<<<< HEAD

=======
        &quot;min-w-0 shrink-0 grow-0 basis-full snap-start&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
>>>>>>>         className
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        className
>>>>>>>       )}
      {...props}
    />
  )
})
<<<<<<< HEAD

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>

=======
CarouselItem.displayName = &quot;CarouselItem&quot;
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}

      className={cn(
<<<<<<< HEAD

        className
=======
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;
>>>>>>>         className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
<<<<<<< HEAD

    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
=======
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
>>>>>>>     </Button>
ursor/fix-website-loading-errors-and-merge-6662
        className
      )}
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;left - 1 sm:left - 2 md:-left - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;top - 1 sm:top - 2 md:-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}



    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </Button>
>>>>>>>   )
})
CarouselPrevious.displayName = "CarouselPrevious"

<<<<<<< HEAD
const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>

  const { orientation, scrollNext, canScrollNext } = useCarousel()
=======
onst CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>   const { orientation, scrollNext, canScrollNext } = useCarousel()
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}

      className={cn(
<<<<<<< HEAD

        className
=======
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;
>>>>>>>         className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
<<<<<<< HEAD

    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
=======
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
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
>>>>>>>     </Button>
ursor/fix-website-loading-errors-and-merge-6662
        className
      )}
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;right - 1 sm:right - 2 md:-right - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;bottom - 1 sm:bottom - 2 md:-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    </Button>
>>>>>>>   )
})
CarouselNext.displayName = "CarouselNext"

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
<<<<<<< HEAD

=======
  CarouselPrevious,;
  CarouselNext};
>>>>>>> 
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
