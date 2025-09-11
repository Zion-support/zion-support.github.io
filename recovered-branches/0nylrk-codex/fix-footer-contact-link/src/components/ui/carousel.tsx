<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
<<<<<<< HEAD
<<<<<<< HEAD
  orientation?: "horizontal" | "vertical"
=======
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  }
;
<<<<<<< HEAD
<<<<<<< HEAD
  }
;
  }
;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      orientation = &quot;horizontal&quot;
      opts
      setApi
      plugins
      className
      children
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        ...opts
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        if (event.key === &quot;ArrowLeft&quot;) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === &quot;ArrowRight&quot;) {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          event.preventDefault()
          scrollNext()
        }

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;
<<<<<<< HEAD

=======
          event.preventDefault()
          scrollNext()
        }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      },;
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }
<<<<<<< HEAD
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD

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
    return (
      <CarouselContext.Provider
        value={{
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          carouselRef
          api: api
          opts
          orientation:
            orientation |(opts?.axis === &quot;y&quot; ? &quot;vertical&quot; : &quot;horizontal&quot;)
          scrollPrev
          scrollNext
          canScrollPrev
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"


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



=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
className={cn(&quot;relative&quot;, className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {...props}
        >;
          {children}
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      </CarouselContext.Provider>;
    );
  }
)
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = "Carousel"

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </CarouselContext.Provider>);
  }

)
<<<<<<< HEAD

Carousel.displayName = "Carousel"



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = "Carousel"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
<<<<<<< HEAD
);
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          &quot;flex&quot;
          orientation === &quot;horizontal&quot; ? &quot;-ml-4&quot; : &quot;-mt-4 flex-col&quot;
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
<<<<<<< HEAD
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
  return (
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
      <div;
        ref={ref}

        className={cn(

          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className
        )}
        {...props}
      />
    </div>
  )
})
<<<<<<< HEAD


CarouselContent.displayName = "CarouselContent"



<<<<<<< HEAD
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
  return (
    <div;
      ref={ref}
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",


<<<<<<< HEAD
  return (
    <div
      ref={ref}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <div;
      ref={ref}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      role="group"
      aria-roledescription="slide"
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD


CarouselItem.displayName = "CarouselItem"



=======
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"

<<<<<<< HEAD
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      className={cn(
        &quot;absolute  h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;
<<<<<<< HEAD
=======
      className={cn(

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(;
        "absolute  h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-left-12 top-1/2 -translate-y-1/2";
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}
=======


        className
      )}
=======
      className={cn (
        &quot;absolute  h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;-left - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}



<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>



<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
<<<<<<< HEAD
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



=======
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  return (
    >;
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
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

      className={cn(
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
<<<<<<< HEAD
      className={cn(;
        "absolute h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-right-12 top-1/2 -translate-y-1/2";
          :"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}
      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}


    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        className
      )}
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
      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}
=======
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;
;
=======


=======
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  CarouselNext}

;

<<<<<<< HEAD
  CarouselNext}
    >;
      <ArrowRight className="h-4 w-4" />;
      <span className="sr-only">Next slide</span>;
    </Button>;
  );
});
CarouselNext.displayName = "CarouselNext";
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  CarouselNext};
  CarouselNext}

;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
