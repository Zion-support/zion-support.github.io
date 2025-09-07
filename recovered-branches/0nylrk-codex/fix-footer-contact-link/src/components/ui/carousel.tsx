import useEmblaCarousel from "embla-carousel-react""
import { ArrowLeft, ArrowRight } from "lucide-react""
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;


import useEmblaCarousel from "embla-carousel-react"

import { ArrowLeft, ArrowRight } from "lucide-react"
"
import { cn } from "@/lib/utils""
import { Button } from "@/components/ui/button""

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
type CarouselProps = {
  }
  opts?: CarouselOptions,
plugins?: CarouselPlugin,
orientation?: "horizontal" | "vertical"  orientation?: "horizontal" | "vertical""
  setApi?: ("api": CarouselApi) => void
}
type CarouselContextProps = {
  }
  "carouselRef": ReturnType<typeof useEmblaCarousel>[0]
  "api": ReturnType<typeof useEmblaCarousel>[1]
  "scrollPrev": () => void;
    "scrollNext": () => void,
"canScrollPrev": boolean,
"canScrollNext": boolean,
"orientation": "horizontal" | "vertical""
} & Omit<CarouselProps "orientation">"
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
function useCarousel(): CarouselContextProps {
}
const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {
}

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
import { Button } from "@/components/ui/button";"
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
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
  if (!context) {;
    }
    throw new Error("useCarousel must be used within a <Carousel />");"
  }
;
  }
;
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
  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps, "orientation">


      plugins

      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
    {      plugins
        ...opts,
        axis: orientation = $2;
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},

...opts
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},

      plugins
    )
}
const [canScrollPrev, setCanScrollPrev] = React.useState(false);
const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback(("api": CarouselApi) => {
      }
      if (!api) {
}
return;
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])
    const scrollPrev = React.useCallback(() => {
      }
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {
      }
      api?.scrollNext()
    }, [api])
const handleKeyDown = React.useCallback(;
      ("event": React.KeyboardEvent<HTMLDivElement>) => {          event.preventDefault()
          }
          event.preventDefault()
          scrollNext()
        }

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;


      },;

      [scrollPrev, scrollNext];
    );

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
  }
  "carousel_ref": ReturnType < typeof useEmblaCarousel>[0];
  "api": ReturnType < typeof useEmblaCarousel>[1];
  "scroll_prev": () => void;
  "scroll_next": () => void;
  "canScrollPrev": boolean;
  "canScrollNext": boolean;  }
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
      return () => {
        }
        api?.off (&quot;select & quot;, on_select);

      }
return (;
      <CarouselContext.Provider;
        value={          canScrollNext}


    const handleKeyDown = $2;
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {if (!api |!setApi) {;
        return;
      }
      setApi(api);
    }, [api, setApi]);

          canScrollNext}}

      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { carouselRef, orientation } = useCarousel()


          {...props}
        >;
          {children}
        </div>;

      </CarouselContext.Provider>;
    );
  }
)
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = "Carousel"

className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn("relative", className)}"
          role="region""
          aria-roledescription="carousel""
          {...props}
        >;
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
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


Carousel.displayName = "Carousel"



const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
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
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
</div>

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

CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"

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
;
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  }
  const { orientation } = use_carousel ();

        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",

    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",

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
Carousel.displayName = "Carousel";
;
const CarouselContent = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
  const { carouselRef, orientation } = useCarousel();
;
  return (;
    <div ref={carouselRef} className="overflow-hidden">;
      <div;
        ref={ref}
        className={cn(;
          "flex",;
          orientation === "horizontal" ? "-ml-4" :"-mt-4 flex-col",;
          className;
        )}
        {...props}
      />;
    </div>;
  );
});
CarouselContent.displayName = "CarouselContent";
;
const CarouselItem = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement>;
>(({ className, ...props }, ref) => {;
  const { orientation } = useCarousel();
;
  return (;
    <div;
      ref={ref}
      role="group";
      aria-roledescription="slide";
      className={cn(;
        "min-w-0 shrink-0 grow-0 basis-full",;
        orientation === "horizontal" ? "pl-4" :"pt-4",;
        className;
      )}
      {...props}
    />;
  );
});
CarouselItem.displayName = "CarouselItem";
;
const CarouselPrevious = React.forwardRef<;
  HTMLButtonElement,;
  React.ComponentProps<typeof Button>;
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {;
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
;
  return (;
    <Button;
      ref={ref}
      variant={variant}
      size={size}

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button

  HTMLButtonElement;

  React.ComponentProps<typeof Button>
</div>
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
className={cn (
        &quot;absolute  h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;-left - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}

      className={cn(;
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
      className={cn(;"
        "absolute  h-8 w-8 rounded-full",;""
        orientation === "horizontal";""
          ? "-left-12 top-1/2 -translate-y-1/2";""
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;"
        className;)

      )}


      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}


    >
      <ArrowLeft className="h-4 w-4" />

      <span className="sr-only">Previous slide</span>

        className
      )}      className={cn(;
        "absolute  h-8 w-8 rounded-full",;"
        }
        orientation === "horizontal";"
          ? "-left-12 top-1/2 -translate-y-1/2";"
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;"
        className;
      )}
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
      on_click={scroll_prev}
      {...props}
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
    >
      <ArrowLeft className="h-4 w-4" />"
      <span className="sr-only">Previous slide</span>"
  )
})
CarouselPrevious.displayName = "CarouselPrevious""
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
    </Button>
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
    </Button />
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
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

const CarouselNext = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {}
  const { orientation, scrollNext, canScrollNext } = useCarousel()

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
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {}
  const { orientation, scroll_next, canScrollNext } = use_carousel ();
  return (

      <ArrowLeft className="h-4 w-4" />;
      <span className="sr-only">Previous slide</span>;
    </Button>;
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
;
const CarouselNext = React.forwardRef<;
  HTMLButtonElement,;
  React.ComponentProps<typeof Button>;
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {;
  const { orientation, scrollNext, canScrollNext } = useCarousel();
;
  return (;
    <Button;
      ref={ref}
      variant={variant}
      size={size}

      className={cn(

const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",

        className
      )}
className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;-right - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
      className={cn(;
        "absolute h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-right-12 top-1/2 -translate-y-1/2";
          :"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}


      className={cn(;"
        "absolute h-8 w-8 rounded-full",;"
        orientation === "horizontal";"
          ? "-right-12 top-1/2 -translate-y-1/2";"
          :"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}


      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}

    </Button>
  )
})
CarouselNext.displayName = &quot;CarouselNext&quot;
export {};
  type CarouselApi;
  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselPrevious;
  CarouselNext}

>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}
    </Button>
  )
})
CarouselNext.displayName = &quot;CarouselNext&quot;
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

export {
  }
  type CarouselApi,
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,

  CarouselNext}  CarouselNext}
;

  CarouselNext};
;


  CarouselNext}

;


  CarouselNext}
;
export {;
  type CarouselApi,;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselPrevious,;
  CarouselNext} type CarouselApi = ReturnType<typeof useEmblaCarousel>[1] type UseCarouselParameters = Parameters<typeof useEmblaCarousel> type CarouselOptions = UseCarouselParameters[0] type CarouselPlugin = UseCarouselParameters[1] type CarouselProps = {
  opts?: CarouselOptions plugins?: CarouselPlugin type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0] api: ReturnType<typeof useEmblaCarousel>[1] scrollPrev: () => void scrollNext: () => void canScrollPrev: boolean canScrollNext: boolean const context = React.useContext (CarouselContext) as CarouselContextProps | null if (!context) {
  return context as CarouselContextProps 
}const Carousel = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> & CarouselProps plugins) const [canScrollPrev, setCanScrollPrev] = React.useState (false) const [canScrollNext, setCanScrollNext] = React.useState (false) const onSelect = React.useCallback ( (api: CarouselApi) => {
  if (!api) {
  return 
}setCanScrollPrev (api.canScrollPrev () ) setCanScrollNext (api.canScrollNext () ) 
}, []) const scrollPrev = React.useCallback ( () => {
  api?.scrollPrev () 
}, [api]) const scrollNext = React.useCallback ( () => {
  api?.scrollNext () 
}, [api]) 
};
[scrollPrev, scrollNext]) React.useEffect ( () => {
  if (!api || !setApi) {
  return 
}setApi (api) 
}, [api, setApi]) React.useEffect ( () => {
  if (!api) {
  return 
}onSelect (api) api.on ("reInit", onSelect) api.on ("select", onSelect) 
}, [api, onSelect]) return (<CarouselContext.Provider > {
  children 
}</div> </CarouselContext.Provider>) 
}) Carousel.displayName = "Carousel" const CarouselContent = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => {
  const {
  carouselRef, orientation 
}= useCarousel () return () 
}{
  ...props 
}/> </div>) 
}) CarouselContent.displayName = "CarouselContent" const CarouselItem = React.forwardRef< HTMLDivElement;
React.HTMLAttributes<HTMLDivElement> > ( ({
  className, ...props 
}, ref) => {
  const {
  orientation 
}= useCarousel () return (<div) 
}{
  ...props 
}/>) 
}) CarouselItem.displayName = "CarouselItem" const CarouselPrevious = React.forwardRef< HTMLButtonElement;
React.ComponentProps<typeof Button>) 
}disabled= {
  !canScrollPrev 
}onClick= {
  scrollPrev 
}{
  ...props 
}> <ArrowLeft className="h-4 w-4" /> <span className="sr-only" >Previous slide</span> </Button>) 
}) CarouselPrevious.displayName = "CarouselPrevious" const CarouselNext = React.forwardRef< HTMLButtonElement;
React.ComponentProps<typeof Button>) 
}disabled= {
  !canScrollNext 
}onClick= {
  scrollNext 
}{
  ...props 
}> <ArrowRight className="h-4 w-4" /> <span className="sr-only" >Next slide</span> </Button>) 
}) CarouselNext.displayName = "CarouselNext" export {
  type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext 
}
  CarouselNext};
  CarouselNext}
;


;
  CarouselNext}

