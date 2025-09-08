

import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"


import useEmblaCarousel from "embla-carousel-react"

import { ArrowLeft, ArrowRight } from "lucide-react"
"
import { cn } from "@/lib/utils""
<<<<<<< HEAD
import { Button } from "@/components/ui/button"

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"  orientation?: "horizontal" | "vertical"
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

function useCarousel(): CarouselContextProps {}
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {"
    throw new Error("useCarousel must be used within a <Carousel />")"
import * as React from "react";"
import useEmblaCarousel from "embla-carousel-react";"
import { ArrowLeft, ArrowRight } from "lucide-react";"
import { cn } from "@/lib/utils";"
<<<<<<< HEAD
import { Button } from "@/components/ui/button";

=======
import { Button } from "@/components/ui/button";"
>>>>>>> origin/cursor/delete-old-data-records-6bba
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
type CarouselProps = {;
  }
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";"
  setApi?: ("api": CarouselApi) => void;
}
;
type CarouselContextProps = {;
  }
  "carouselRef": ReturnType<typeof useEmblaCarousel>[0];
  "api": ReturnType<typeof useEmblaCarousel>[1];
  "scrollPrev": () => void;
  "scrollNext": () => void;
  "canScrollPrev": boolean;
  "canScrollNext": boolean;
  "orientation": "horizontal" | "vertical";"
} & Omit<CarouselProps "orientation">;"
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
function useCarousel(): CarouselContextProps {;
  }
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
<<<<<<< HEAD
  if (!context) {;"
    throw new Error("useCarousel must be used within a <Carousel />");
  }
;

  }
;
;
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {      plugins
    )
<<<<<<< HEAD
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {}
      if (!api) {}
        return;

=======
}
const [canScrollPrev, setCanScrollPrev] = React.useState(false);
const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback(("api": CarouselApi) => {
      }
      if (!api) {
}
return;
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])
<<<<<<< HEAD

    const scrollPrev = React.useCallback(() => {}
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {}
      api?.scrollNext()
    }, [api])
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {          event.preventDefault()
          scrollNext()
        }

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;
      [scrollPrev, scrollNext];
    );

<<<<<<< HEAD

=======
        return;
      }

import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;
;
type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters < typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
  }
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: &quot;horizontal & quot; | &quot;vertical & quot;
  set_api?: ("api": CarouselApi) => void;
}
type CarouselContextProps = {
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];
  api: ReturnType < typeof useEmblaCarousel>[1];
  scroll_prev: () => void;
  scroll_next: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;  }
  return context as CarouselContextProps;
}
const Carousel = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement> & CarouselProps;
>(
  (
    {
      }
      orientation = &quot;horizontal & quot;,
      opts,
      set_api,
      plugins,
      class_name,
      children,
      ...props;
    },
    ref) => {
}
const [carousel_ref, api] = useEmblaCarousel (;
      {
        ...opts
        }
        "axis": orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},
      plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState (false);
    const [canScrollNext, setCanScrollNext] = React.useState (false);
    const on_select = React.useCallback (("api": CarouselApi) => {
      // Check condition
}
if ( {) {
  $2
}
        return;
      }

      return () => {
        }
        api?.off("select", onSelect)"
>>>>>>> origin/cursor/delete-old-data-records-6bba
      }
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {
      // Check condition
}
if ( {) {
  $2
}
        return;
      }
on_select (api);
      api.on (&quot;re_init & quot;, on_select);
      api.on (&quot;select & quot;, on_select);
<<<<<<< HEAD
      return () => {}

=======
      return () => {
        }
        api?.off (&quot;select & quot;, on_select);
>>>>>>> origin/cursor/delete-old-data-records-6bba

      }
return (;
      <CarouselContext.Provider;
        value={{          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

          {...props}
        >;
          {children}        </div>;
      </CarouselContext.Provider>);
  }

)

Carousel.displayName = "Carousel"

  return (
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
"
Carousel.displayName = "Carousel""

className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn(\"relative\", className)}
          role=\"region\"
          aria-roledescription=\"carousel\"
          {...props}
         />;
          {children}        </div>;
      </CarouselContext.Provider>);
  }

<<<<<<< HEAD

=======
)


Carousel.displayName = "Carousel"



>>>>>>> origin/cursor/delete-old-data-records-6bba
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
</HTMLDivElement>

=======
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
"
Carousel.displayName = "Carousel""

className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn(\"relative\", className)}
          role=\"region\"
          aria-roledescription=\"carousel\"
          {...props}
         />;
          {children}        </div>;
      </CarouselContext.Provider>);
  }

)
Carousel.displayName = "Carousel""
return (;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
</div>

      <div;
        ref={ref}

        className={cn(


          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
const CarouselItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { orientation } = useCarousel()
        className={cn (
          &quot;flex & quot;
          }
          orientation === &quot;horizontal & quot; ? &quot;-ml - 4&quot; : &quot;-mt - 4 flex - col & quot;,
          class_name)}
        {...props}
      />;
    </div>);
});
CarouselContent.display_name = &quot;CarouselContent & quot;
<<<<<<< HEAD

;
"
          "flex",""
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col","
          className;)
        )}
        {...props}
      />
</div>
    </div>
const CarouselItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
</HTMLDivElement>

    </div>);

=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  }
  const { orientation } = use_carousel ();

<<<<<<< HEAD
  return (
    <div;
      ref={ref}        className
      )}
      {...props}
    />
  )
})


const CarouselPrevious = React.forwardRef<

=======
  return (
    <div;

      role="group"
      aria-roledescription="slide"
      className={cn(

        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",

    <div

  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {}
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
      role=&quot;group & quot;
      aria - roledescription=&quot;slide & quot;
      className={cn (
        &quot;min - w-0 shrink - 0 grow - 0 basis - full & quot;
        }
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
  }
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();


  return (

    <div;
      ref={ref}
return (;
    <Button;
      ref={ref}
      variant={variant}
      size={size}
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {"
}
const { orientation, scrollPrev, canScrollPrev } = useCarousel();
return (;
    <Button,
ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full","
        }
        orientation === "horizontal""
          ? "-left-12 top-1/2 -translate-y-1/2""
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90","
  return (
    <div;
      ref={ref}
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
>>>>>>> origin/cursor/delete-old-data-records-6bba
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",

        className
      )}      className={cn(;
        "absolute  h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-left-12 top-1/2 -translate-y-1/2";
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
"
        "absolute  h-8 w-8 rounded-full",""
        orientation === "horizontal"""
          ? "-left-12 top-1/2 -translate-y-1/2"""
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90","
        className;)
      )}
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}

=======      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"
      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}

>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;
;      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}
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
      <span className="sr-only">Next slide</span>  )
})
CarouselNext.displayName = "CarouselNext"

export {
  }
  type CarouselApi,
Carousel
  CarouselContent,
CarouselItem
  CarouselPrevious,
CarouselNext}
    >


    </Button>
  )
})
CarouselNext.displayName = "CarouselNext""
})
CarouselNext.displayName = "CarouselNext"

>>>>>>> origin/cursor/delete-old-data-records-6bba
export {
  }
  type CarouselApi,
<<<<<<< HEAD


=======
      ref = $2;
        orientation = $2;
        className
      )}
      disabled = $2;
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      ref = $2;
        orientation = $2;
        className
      )}
      disabled = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext}  CarouselNext}
;

