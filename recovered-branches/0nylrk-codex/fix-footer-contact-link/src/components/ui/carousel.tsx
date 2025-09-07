<<<<<<< HEAD
import useEmblaCarousel from "embla-carousel-react""
import { ArrowLeft, ArrowRight } from "lucide-react""
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
<<<<<<< HEAD

import useEmblaCarousel from "embla-carousel-react"

import { ArrowLeft, ArrowRight } from "lucide-react"
"
import { cn } from "@/lib/utils""
import { Button } from "@/components/ui/button"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
=======

<<<<<<< HEAD
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import useEmblaCarousel from "embla-carousel-react"

import { ArrowLeft, ArrowRight } from "lucide-react"
"
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
throw new Error("useCarousel must be used within a <Carousel />");"
=======
type CarouselContextProps = {}
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]

<<<<<<< HEAD
=======
=======
  opts?: CarouselOptions
  plugins?: CarouselPlugin
<<<<<<< HEAD
  orientation?: "horizontal" | "vertical"
=======
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
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
  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps, "orientation">
=======



<<<<<<< HEAD
  }

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  orientation: "horizontal" | "vertical"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
} & Omit<CarouselProps "orientation">

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {}
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {"
    throw new Error("useCarousel must be used within a <Carousel />")"
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  if (!context) {;
    }
    throw new Error("useCarousel must be used within a <Carousel />");"
=======
  if (!context) {;"
    throw new Error("useCarousel must be used within a <Carousel />");
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
;
>>>>>>> origin/resolved-merge-conflicts
  }
;

  }
;
;
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  }
;
<<<<<<< HEAD
  }
;
  }
;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement,
React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
<<<<<<< HEAD
  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps, "orientation">
=======
<<<<<<< HEAD
  orientation: horizontal" | "vertical
} & Omit<CarouselProps, orientation">
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD

      ...props

    }
    ref;
  ) => {}
    const [carouselRef, api] = useEmblaCarousel(
      {}
        ...opts,"
        axis: orientation === "horizontal" ? "x" : "y"},

      plugins

=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts

const CarouselContext = $2;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = $2;
      opts,
      setApi,
      plugins,
      className,
      children,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

      plugins

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
<<<<<<< HEAD
    {      plugins
        ...opts,
        axis: orientation = $2;
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},

...opts
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},


<<<<<<< HEAD
        ...opts
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      plugins
    )
<<<<<<< HEAD
}
const [canScrollPrev, setCanScrollPrev] = React.useState(false);
const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback(("api": CarouselApi) => {
      }
      if (!api) {
}
return;
=======
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
<<<<<<< HEAD
    const onSelect = React.useCallback((api: CarouselApi) => {}
      if (!api) {}
        return;
=======
<<<<<<< HEAD
    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
=======
    const onSelect = React.useCallback((api: CarouselApi) => {}
      if (!api) {}
        return;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const scrollPrev = React.useCallback(() => {}
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {}
      api?.scrollNext()
    }, [api])
    const handleKeyDown = React.useCallback(

=======
<<<<<<< HEAD
>>>>>>> origin/resolved-merge-conflicts
    const scrollPrev = React.useCallback(() => {
      }
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {
      }
      api?.scrollNext()
    }, [api])
<<<<<<< HEAD
const handleKeyDown = React.useCallback(;
      ("event": React.KeyboardEvent<HTMLDivElement>) => {          event.preventDefault()
          }
=======
=======
    const scrollPrev = React.useCallback(() => {}
      api?.scrollPrev()
    }, [api])
    const scrollNext = React.useCallback(() => {}
      api?.scrollNext()
    }, [api])
    const handleKeyDown = React.useCallback(
<<<<<<< HEAD

=======
      (event: React.KeyboardEvent<HTMLDivElement>) => {
<<<<<<< HEAD
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
=======
        if (event.key === &quot;ArrowLeft&quot;) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === &quot;ArrowRight&quot;) {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          event.preventDefault()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          scrollNext()
        }

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;
<<<<<<< HEAD
=======
<<<<<<< HEAD

      },;

      [scrollPrev, scrollNext];
    );
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

      }
>>>>>>> origin/resolved-merge-conflicts
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      }
      if (!api || !setApi) {;
        }
        return;
      }
<<<<<<< HEAD
=======
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {if (!api) {;
        return;
      }
onSelect(api)
      api.on(&quot;reInit&quot;, onSelect)
      api.on(&quot;select&quot;, onSelect)
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      },;

      [scrollPrev, scrollNext];
    );
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD

        return;
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
;
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
;
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
;
type CarouselProps = {;
  opts?:CarouselOptions;
  plugins?:CarouselPlugin;
  orientation?:"horizontal" | "vertical";
  setApi?:(api:CarouselApi) => void;
}
;
type CarouselContextProps = {;
  carouselRef:ReturnType<typeof useEmblaCarousel>[0];
  api:ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev:() => void;
  scrollNext:() => void;
  canScrollPrev:boolean;
  canScrollNext:boolean;
  orientation:"horizontal" | "vertical";
} & Omit<CarouselProps "orientation">;
;
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
;
function useCarousel():CarouselContextProps {;
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
;
  if (!context) {;
    throw new Error("useCarousel must be used within a <Carousel />");
  }
;
  return context as CarouselContextProps;
}

    }, [api, on_select]);
    return (
      <CarouselContext.Provider;
        value={{
=======
>>>>>>> origin/resolved-merge-conflicts

;
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
<<<<<<< HEAD
      return () => {
        }
        api?.off (&quot;select & quot;, on_select);
=======
      return () => {}
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>>>>>>> origin/resolved-merge-conflicts
      }
return (;
      <CarouselContext.Provider;
        value={          canScrollNext}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
    React.useEffect(() => {if (!api) {;
=======
    React.useEffect(() => {if (!api) {
        return;
      }
onSelect(api)
      api.on(&quot;reInit&quot;, onSelect)
      api.on(&quot;select&quot;, onSelect)

      onSelect(api)
      api.on(reInit", onSelect)
      api.on("select, onSelect)

      return () => {
        api?.off(select", onSelect)
      }
    }, [api, onSelect])

    return($2);
          scrollPrev,
          scrollNext,
          canScrollPrev,
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          carousel_ref,
          api: api,
          opts,
          orientation:;
            orientation || (opts?.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,

<<<<<<< HEAD
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,

;
const Carousel = React.forwardRef<;
  HTMLDivElement,;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;
>(;
  (;
    {;
      orientation = "horizontal",;
      opts,;
      setApi,;
      plugins,;
      className,;
      children,;
      ...props;
    },;
    ref;
  ) => {;
    const [carouselRef, api] = useEmblaCarousel(;
      {;
        ...opts,;
        axis:orientation === "horizontal" ? "x" :"y"},;
      plugins;
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
;
    const onSelect = React.useCallback((api:CarouselApi) => {;
      if (!api) {;
        return;
      }
;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);
;
    const scrollPrev = React.useCallback(() => {;
      api?.scrollPrev();
    }, [api]);
;
    const scrollNext = React.useCallback(() => {;
      api?.scrollNext();
    }, [api]);
;
    const handleKeyDown = React.useCallback(;
      (event:React.KeyboardEvent<HTMLDivElement>) => {;
        if (event.key === "ArrowLeft") {;
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {;
          event.preventDefault();
          scrollNext();
        }
      },;
      [scrollPrev, scrollNext];
    );
;
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
;
      setApi(api);
    }, [api, setApi]);
;
;
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {;
      if (!api) {;
>>>>>>> origin/resolved-merge-conflicts
        return;
      }
onSelect(api)
      api.on(&quot;reInit&quot;, onSelect)
      api.on(&quot;select&quot;, onSelect)

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return($2);
          scrollPrev,
          scrollNext,
          canScrollPrev,
<<<<<<< HEAD
          canScrollNext}
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          canScrollNext}}

>>>>>>> origin/resolved-merge-conflicts
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
          className={cn("relative", className)}
          role = $2;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
  return (
    <div ref = $2;
          orientation = $2;
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = $2;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { carouselRef, orientation } = useCarousel()

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          className={cn("relative", className)}
          role="region";
          aria-roledescription="carousel";
          {...props}
        >;          {children}
        </div>;
      </CarouselContext.Provider>);
  }

Carousel.displayName = "Carousel"



className={cn(&quot;relative&quot;, className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
          {...props}
        >;
          {children}
        </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </CarouselContext.Provider>;
    );
  }
)
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = "Carousel"
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn("relative", className)}"
          role="region""
          aria-roledescription="carousel""
          {...props}
        >;
<<<<<<< HEAD
=======
</div>
        </div>;
      </CarouselContext.Provider>);
  }
<<<<<<< HEAD
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
=======
=======

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </CarouselContext.Provider>);
  }

<<<<<<< HEAD
)

<<<<<<< HEAD
=======
const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
</HTMLDivElement>
>>>>>>> origin/chore/fix-lint-and-merge
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
=======
Carousel.displayName = "Carousel"



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
<<<<<<< HEAD

=======
<<<<<<< HEAD
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
);
          &quot;flex&quot;
          orientation === &quot;horizontal&quot; ? &quot;-ml-4&quot; : &quot;-mt-4 flex-col&quot;
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> origin/resolved-merge-conflicts
          {children}        </div>;
      </CarouselContext.Provider>);
  }

)
Carousel.displayName = "Carousel""
return (;
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
</div>

>>>>>>> origin/resolved-merge-conflicts
      <div;
        ref={ref}

        className={cn(
<<<<<<< HEAD
          "flex","
          }
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col","
const CarouselItem = React.forwardRef<
  HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
}
const { orientation } = useCarousel();
=======
<<<<<<< HEAD
=======
          className

        )}
        {...props}
      />
    </div>
  )
})
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          className

        )}
        {...props}
      />
    </div>
  )
})
>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const CarouselItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { orientation } = useCarousel()
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
return (;
    <div;
      ref={ref}        className
CarouselContent.displayName = $2;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

  return (
    <div;

      role="group"
      aria-roledescription="slide"
      className={cn(

=======
  return (
    <div;
      ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  return (
    <div;

      role="group"
      aria-roledescription="slide"
      className={cn(

        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",

    <div
<<<<<<< HEAD
      ref = $2;
        orientation = $2;
=======
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
<<<<<<< HEAD

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        className
      )}
      {...props} />
  )
})
<<<<<<< HEAD
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
}
const { orientation, scrollPrev, canScrollPrev } = useCarousel();
=======
<<<<<<< HEAD

const CarouselPrevious = React.forwardRef<
<<<<<<< HEAD
=======
<<<<<<< HEAD
CarouselItem.displayName = $2;
=======

const CarouselPrevious = React.forwardRef<
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        className;
=======
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {}
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

<<<<<<< HEAD
=======
=======
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
return (;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (

>>>>>>> origin/resolved-merge-conflicts
    <div;
      ref={ref}
return (;
    <Button;
      ref={ref}
      variant={variant}
      size={size}
const CarouselPrevious = React.forwardRef<
<<<<<<< HEAD
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
=======
  HTMLButtonElement;
  React.ComponentProps<typeof Button>"
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {}
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
<<<<<<< HEAD
  return (
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
=======
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  HTMLButtonElement;

  React.ComponentProps<typeof Button>
</div>
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
      className={cn(

=======
=======
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        &quot;absolute  h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      className={cn(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      className={cn(;
        "absolute  h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-left-12 top-1/2 -translate-y-1/2";
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        className
>>>>>>> origin/chore/fix-lint-and-merge
      )}
className={cn (
        &quot;absolute  h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;-left - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    >
      <ArrowLeft className="h-4 w-4" />

      <span className="sr-only">Previous slide</span>

>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
      on_click={scroll_prev}
      {...props}
=======

<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
;      disabled={!canScrollNext}
=======
;

<<<<<<< HEAD
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    </Button>
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
    </Button />
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
<<<<<<< HEAD
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======

      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
>
      <ArrowRight className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Next slide</span>

      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
      <ArrowLeft className=\"h-4 w-4\" />
      <span className=\"sr-only\" />Previous slide</span>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"
CarouselPrevious.displayName = \"CarouselPrevious\"

    >
</Button>"
      <ArrowLeft className="h-4 w-4" />"
</ArrowLeft>"
      <span className="sr-only">Previous slide</span>"
    </Button>"
      <ArrowLeft className="h-4 w-4" />"
</ArrowLeft>"
      <span className="sr-only">Previous slide</span>""
      <ArrowLeft className="h-4 w-4" />"
</ArrowLeft>"
      <span className="sr-only">Previous slide</span>"
    </Button>
const CarouselNext = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
>;
</typeof>
      <ArrowLeft className=&quot;h - 4 w - 4&quot; />;
</ArrowLeft>
      <span className=&quot;sr - only & quot;>Previous slide</span>;
    </Button>);
const CarouselNext = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_next, canScrollNext } = use_carousel ();
  return (
>;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const CarouselNext = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {}
  const { orientation, scrollNext, canScrollNext } = useCarousel()
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD

=======
    >;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD

      className={cn(

=======
<<<<<<< HEAD
"
        "absolute h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "-right-12 top-1/2 -translate-y-1/2""
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;
<<<<<<< HEAD
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
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className={cn(;
        "absolute h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-right-12 top-1/2 -translate-y-1/2";
          :"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}

"
        "absolute h-8 w-8 rounded-full",""
        orientation === "horizontal"""
          ? "-right-12 top-1/2 -translate-y-1/2"""
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90","
        className;)
      )}
      className={cn(;"
        "absolute h-8 w-8 rounded-full",;""
        orientation === "horizontal";""
          ? "-right-12 top-1/2 -translate-y-1/2";""
          :"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",;"
        className;)
      )}

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

    <Button;
      ref={ref}
      variant={variant}
      size={size}
"
        "absolute h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "-right-12 top-1/2 -translate-y-1/2""
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",

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


    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      className={cn(;"
        "absolute h-8 w-8 rounded-full",;"
        orientation === "horizontal";"
          ? "-right-12 top-1/2 -translate-y-1/2";"
          :"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
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
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
=======
=======
      className={cn (
        &quot;absolute h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;-right - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;-bottom - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
CarouselNext.display_name = &quot;CarouselNext & quot;      disabled={!canScrollNext}
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
      <ArrowRight className="h-4 w-4" />"
      <span className="sr-only">Next slide</span>  )"
=======
=======
CarouselNext.display_name = &quot;CarouselNext & quot;
;
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
<<<<<<< HEAD

})
CarouselNext.displayName = "CarouselNext"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </Button>
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
})
CarouselNext.displayName = "CarouselNext""
export {
  }
  type CarouselApi,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  CarouselNext};
;
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  CarouselNext}  CarouselNext}
;

  CarouselNext};
;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  CarouselNext}

;

<<<<<<< HEAD
  CarouselNext}
=======
<<<<<<< HEAD
  CarouselNext}
=======
<<<<<<< HEAD
  CarouselNext}
    >;
      <ArrowRight className="h-4 w-4" />;
      <span className="sr-only">Next slide</span>;
    </Button>;
  );
});
CarouselNext.displayName = "CarouselNext";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

;
  CarouselNext}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
