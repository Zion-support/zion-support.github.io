<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import * as React from "react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
<<<<<<< HEAD
type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
=======
type CarouselProps = {};
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
"
  orientation?: "horizontal" | "vertical"

  setApi?: (api: CarouselApi) => void;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
type CarouselContextProps = {}
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
<<<<<<< HEAD
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
<<<<<<< HEAD
<<<<<<< HEAD
  }

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
  }

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


  }
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
;
  }
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
;
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  }
;
  }
;
  }
;
  }
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
<<<<<<< HEAD
<<<<<<< HEAD
    {
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
      orientation = &quot;horizontal&quot;
      opts
      setApi
      plugins
      className
      children
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    {}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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


<<<<<<< HEAD
<<<<<<< HEAD
=======
        ...opts
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"},
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {


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
<<<<<<< HEAD
<<<<<<< HEAD
      (event: React.KeyboardEvent<HTMLDivElement>) => {          event.preventDefault()
=======
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === &quot;ArrowLeft&quot;) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === &quot;ArrowRight&quot;) {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          scrollNext()
        }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react & quot;
<<<<<<< HEAD
=======
      (event: React.KeyboardEvent<HTMLDivElement>) => {}
"
        if (event.key === "ArrowLeft") {}
          event.preventDefault()
          scrollPrev()"
        } else if (event.key === "ArrowRight") {}
          event.preventDefault()
          scrollNext()
        }


      },;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      },;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      [scrollPrev, scrollNext];
    );
    React.useEffect(() => {;
      if (!api || !setApi) {;
        return;
      }

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
  }
  return context as CarouselContextProps;
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


      return () => {"
=======

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
<<<<<<< HEAD
<<<<<<< HEAD
        value={{
<<<<<<< HEAD

=======

    }, [api, on_select]);
    return (
      <CarouselContext.Provider;
        value={{
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
        value={{}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
"
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,

<<<<<<< HEAD


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
=======
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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



<<<<<<< HEAD
        </div>;
      </CarouselContext.Provider>);
  }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD

className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className={cn (&quot;relative & quot;, class_name)}
          role=&quot;region & quot;
          aria - roledescription=&quot;carousel & quot;          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          {...props}
        >;
          {children}        </div>;
      </CarouselContext.Provider>);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

)

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const CarouselContent = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { carouselRef, orientation } = useCarousel()
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
          {...props}
        >;
          {children}
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
      <div;
        ref={ref}
<<<<<<< HEAD

        className={cn(

          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
<<<<<<< HEAD

=======
);
          &quot;flex&quot;
          orientation === &quot;horizontal&quot; ? &quot;-ml-4&quot; : &quot;-mt-4 flex-col&quot;
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          className
=======



          className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


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
<<<<<<< HEAD
=======
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
CarouselContent.displayName = "CarouselContent"



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const CarouselItem = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {}
  const { orientation } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
const CarouselItem = React.forward_ref<;
  HTMLDivElement,
  React.HTMLAttributes < HTMLDivElement>;
>(({ class_name, ...props }, ref) => {}
  const { orientation } = use_carousel ();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      ref={ref}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      ref={ref}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

      role="group"
      aria-roledescription="slide"
      className={cn(

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",


<<<<<<< HEAD
<<<<<<< HEAD
=======
  return (
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
=======
      ref={ref}        className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
=======
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement;
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {}
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
const CarouselPrevious = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {}
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
<<<<<<< HEAD
    <div;
      ref={ref}
  return (
=======


    <div;
      ref={ref}
  return (

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <Button;
      ref={ref}
      variant={variant}
      size={size}
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
      className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
        &quot;absolute  h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

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
      className={cn(

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",


        className
      )}
      className={cn(;
        "absolute  h-8 w-8 rounded-full",;
        orientation === "horizontal";
          ? "-left-12 top-1/2 -translate-y-1/2";
          :"-top-12 left-1/2 -translate-x-1/2 rotate-90",;
        className;
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
<<<<<<< HEAD



    >"
      <ArrowLeft className="h-4 w-4" />"
=======


    >
      <ArrowLeft className="h-4 w-4" />
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      <span className="sr-only">Previous slide</span>



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
<<<<<<< HEAD

      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
=======
      disabled={!canScrollPrev}
=======
=======      disabled={!canScrollPrev}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======      disabled={!canScrollPrev}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      on_click={scroll_prev}
      {...props}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
<<<<<<< HEAD
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
<<<<<<< HEAD



>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    >"
      <ArrowLeft className="h-4 w-4" />"
      <span className="sr-only">Previous slide</span>

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </Button>
  )
})"
CarouselPrevious.displayName = "CarouselPrevious"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
>
      <ArrowRight className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Next slide</span>
=======
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
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
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
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_next, canScrollNext } = use_carousel ();
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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  )
})
CarouselPrevious.displayName = "CarouselPrevious"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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

<<<<<<< HEAD
>;
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
});
CarouselNext.display_name = &quot;CarouselNext & quot;
;      disabled={!canScrollNext}
      on_click={scroll_next}
      {...props}
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
    >
      <ArrowRight className="h-4 w-4" />
<<<<<<< HEAD
<<<<<<< HEAD
      <span className="sr-only">Next slide</span>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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



<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </Button>
  )
=======
      <span className="sr-only">Next slide</span>  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      <span className="sr-only">Next slide</span>  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    </Button>
  )
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD

;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  CarouselNext};
;


  CarouselNext}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  CarouselNext}  CarouselNext}
;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  CarouselNext}  CarouselNext}
;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


  CarouselNext}
;

;
  CarouselNext}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
