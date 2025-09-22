<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import * as React from "react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import * as React from "react"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import useEmblaCarousel from "embla-carousel-react"
=======

import * as React from "react""
import useEmblaCarousel from "embla-carousel-react""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { ArrowLeft, ArrowRight } from "lucide-react"
"
import { cn } from "@/lib/utils""
import { Button } from "@/components/ui/button"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
  orientation?: "horizontal" | "vertical"
orientation?: "horizontal" | "vertical"
  orientation?: "horizontal" | "vertical"  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}
type CarouselContextProps = {}
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
<<<<<<< HEAD
  }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  orientation: "horizontal" | "vertical"
=======
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
"
  orientation: "horizontal" | "vertical""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
import { Button } from "@/components/ui/button";
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {;
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;"
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
  canScrollNext: boolean;"
  orientation: "horizontal" | "vertical";"
} & Omit<CarouselProps "orientation">;
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
function useCarousel(): CarouselContextProps {;
  const context = React.useContext(CarouselContext) as CarouselContextProps | null;
  if (!context) {;"
    throw new Error("useCarousel must be used within a <Carousel />");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

}
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
;
  }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
;
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
;
  }
;
  }
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  }
;
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }
;

  }
;
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  }
;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;
>(
  (
<<<<<<< HEAD
<<<<<<< HEAD
    {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    {

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      ...props
=======

      ...props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
    ref;
  ) => {}
    const [carouselRef, api] = useEmblaCarousel(
      {}
        ...opts,"
        axis: orientation === "horizontal" ? "x" : "y"},

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      plugins
=======
    {      plugins
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    {      plugins
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      plugins;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {

        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},

...opts
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},
      plugins
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const onSelect = React.useCallback((api: CarouselApi) => {}
      if (!api) {}
        return;
      }
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])
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

<<<<<<< HEAD
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;
},;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

import * as React from "react"""
import useEmblaCarousel from "embla-carousel-react"""
import { ArrowLeft, ArrowRight } from "lucide-react"""
import { cn } from "@/lib/utils"""
import { Button } from "@/components/ui/button""
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
</typeof>
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
</typeof>"
} & Omit<CarouselProps "orientation">"

const CarouselContext = React.createContext<CarouselContextProps | null>(null)
"
    throw new Error("useCarousel must be used within a <Carousel />")"

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
} & Omit<CarouselProps "orientation">;"

const CarouselContext = React.createContext<CarouselContextProps | null>(null);
    throw new Error("useCarousel must be used within a <Carousel />");"

const Carousel = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;

      (event: React.KeyboardEvent<HTMLDivElement>) => {

pr-12325
</HTMLDivElement>

type CarouselApi = ReturnType < typeof useEmblaCarousel>[1];
type UseCarouselParameters = Parameters < typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: &quot;horizontal & quot; | &quot;vertical & quot;}
  set_api?: (api: CarouselApi) => void;}
}
type CarouselContextProps = {
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];
  api: ReturnType < typeof useEmblaCarousel>[1];
  scroll_prev: () => void;
  scroll_next: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
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
  return context as CarouselContextProps;
}
  canScrollNext: boolean;  }
  return context as CarouselContextProps;
}
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];,
  api: ReturnType < typeof useEmblaCarousel>[1];

  scroll_prev: () => void;,
  scroll_next: () => void;
  canScrollPrev: boolean;,
  canScrollNext: boolean;
  }

  return context as CarouselContextProps;
pr-12325
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
    },)
    ref) => {
    const [carousel_ref, api] = useEmblaCarousel (
      {
        ...opts,
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},
    },)
    ref) => {
    const [carousel_ref, api] = useEmblaCarousel (
        ...opts,
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},)
pr-12325
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},)

      plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState (false);
    const [canScrollNext, setCanScrollNext] = React.useState (false);
    const on_select = React.useCallback ((api: CarouselApi) => {
      // Check condition
if ( {) {
  $2
      // Check condition;

if ( {) {
  $2;
}
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      return () => {"
=======
=======
onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      return () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        api?.off("select", onSelect)
      }
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {}
      // Check condition;
if ( {) {}
  $2;
}
        return;
      }
      // Check condition;
if ( {) {
  $2;
        return;

      return () => {"
        api?.off("select", onSelect)"

      }
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {
      // Check condition;
pr-12325

if ( {) {
  $2;

}
        return;
      }
on_select (api);
      api.on (&quot;re_init & quot;, on_select);
      api.on (&quot;select & quot;, on_select);
      return () => {}
api?.off (&quot;select & quot;, on_select);
      }
    return (
      <CarouselContext.Provider;
<<<<<<< HEAD
<<<<<<< HEAD
        value={{
<<<<<<< HEAD
=======
        value={{

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          carousel_ref,
          api: api,
          opts,
          orientation:;
            orientation || (opts?.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,

"
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,

<<<<<<< HEAD
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            orientation |(opts?.axis === &quot;y&quot; ? &quot;vertical&quot; : &quot;horizontal&quot;)
          scrollPrev
          scrollNext
          canScrollPrev
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          canScrollNext}}
=======
        value={{          canScrollNext}}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        value={{          canScrollNext}}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          canScrollNext}}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
          canScrollNext}}
        value={{          canScrollNext}}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          {...props}
        >;
          {children}
className={cn("relative", className)}
          role="region";
          aria-roledescription="carousel";
          {...props}
        >;          {children}
        </div>;
      </CarouselContext.Provider>);
  }

)

Carousel.displayName = "Carousel"
=======
"
          className={cn("relative", className)}"
          role="region""
          aria-roledescription="carousel"

Carousel.displayName = "Carousel"

</div>;
      </CarouselContext.Provider>);
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          {...props}
        >;
          {children}        </div>;
      </CarouselContext.Provider>);
  }
<<<<<<< HEAD
<<<<<<< HEAD

)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { carouselRef, orientation } = useCarousel()
<<<<<<< HEAD
=======

)

Carousel.displayName = "Carousel"

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;
=======
className={cn(&quot;relative&quot;, className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
          aria - roledescription=&quot;carousel & quot;          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

          {...props}
        >;
          {children}        </div>;

        value={{

          carousel_ref,
          api: api,
          opts,
          orientation:;)
            orientation || (opts?.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,
"
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),"
          scrollPrev,
          scrollNext,
          canScrollPrev,

          canScrollNext}}
      >;
</CarouselContext>
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}

"
          className={cn("relative", className)}""
          role="region"""
          aria-roledescription="carousel""
          {...props}
        >;
</div>
        </div>;
      </CarouselContext.Provider>);
  }
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
</HTMLDivElement>
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
</div>

      <div;
        ref={ref}
className={cn(

          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
<<<<<<< HEAD
<<<<<<< HEAD
          className
=======

          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

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
          className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        )}
        {...props}
      />
    </div>
  )
})

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
CarouselContent.displayName = "CarouselContent"

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
CarouselContent.displayName = "CarouselContent"

CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const CarouselItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { orientation } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {}
  const { orientation } = use_carousel ();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div;
<<<<<<< HEAD
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      role="group"
      aria-roledescription="slide"
      className={cn(

<<<<<<< HEAD
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",

<<<<<<< HEAD
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
=======
      ref={ref}        className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
        "min-w-0 shrink-0 grow-0 basis-full","
        orientation === "horizontal" ? "pl-4" : "pt-4",

        className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
        className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
        className
      ref={ref}        className
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      )}
      {...props}
    />
  )
})

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {}
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
    return (
      <CarouselContext.Provider;
        value={{

          carousel_ref,
          api: api,
          orientation:;)
            orientation || (opts?.axis === &quot;y & quot; ? &quot;vertical & quot; : &quot;horizontal & quot),
          scroll_prev,
          scroll_next,
          canScrollPrev,
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),"
          scrollPrev,
          scrollNext,

          canScrollNext}}
      >;

        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}

          className={cn("relative", className)}""
          role="region"""
          aria-roledescription="carousel""
          {...props}
</div>
        </div>;
      </CarouselContext.Provider>);

)
Carousel.displayName = "Carousel""
className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;
          {children}
const CarouselContent = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>

    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;

        className={cn(
          "flex",""
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col","
          className;)
        )}
      />
const CarouselItem = React.forwardRef<

    </div>);
const CarouselItem = React.forward_ref<;
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {
  const { orientation } = use_carousel ();

      ref={ref}
"
      role="group"""
      aria-roledescription="slide""
        "min-w-0 shrink-0 grow-0 basis-full",""
        orientation === "horizontal" ? "pl-4" : "pt-4","
        className;)

      )}
      {...props}
    />
</div>
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement;

  React.ComponentProps<typeof Button>
pr-12325
</typeof>

const CarouselPrevious = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {}
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<div;
      ref={ref}
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>"
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {}
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button;
      ref={ref}
      variant={variant}
      size={size}
className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
"
        "absolute  h-8 w-8 rounded-full","
        orientation === "horizontal""
          ? "-left-12 top-1/2 -translate-y-1/2""
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",

      className={cn(;"
        "absolute  h-8 w-8 rounded-full",;"
        orientation === "horizontal";"
          ? "-left-12 top-1/2 -translate-y-1/2";"
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
      )}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}

<<<<<<< HEAD
<<<<<<< HEAD

    >"
      <ArrowLeft className="h-4 w-4" />"
    >
      <ArrowLeft className="h-4 w-4" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <span className="sr-only">Previous slide</span>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
=======
=======      disabled={!canScrollPrev}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      on_click={scroll_prev}
      {...props}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </Button>
  )
})"
CarouselPrevious.displayName = "CarouselPrevious"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  )
})
CarouselPrevious.displayName = "CarouselPrevious"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
export {};
  type CarouselApi;
  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselPrevious;
  CarouselNext}
>
      <ArrowRight className="h-4 w-4" />
<<<<<<< HEAD
      <span className="sr-only">Next slide</span>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </Button>
  )
=======
    </Button>
  )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
    </Button>
  )
      <span className="sr-only">Next slide</span>  )
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
})
CarouselNext.displayName = "CarouselNext"

export {
=======
    >"
      <ArrowRight className="h-4 w-4" />"
      <span className="sr-only">Next slide</span>

    </Button>
  )
})"
CarouselNext.displayName = "CarouselNext"

export {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  CarouselNext};
;

  CarouselNext}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
CarouselNext}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
