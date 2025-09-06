<<<<<<< HEAD
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
=======
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'
<<<<<<< HEAD
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
=======

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return context as CarouselContextProps;
}
const Carousel = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
<<<<<<< HEAD
      orientation = &quot;horizontal&quot;
<<<<<<< HEAD
      opts
      setApi
      plugins
      className
      children
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      orientation = "horizontal",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      opts,
      setApi,
      plugins,
      className,
      children,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
<<<<<<< HEAD
        ...(opts |{})
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;}
=======
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
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
<<<<<<< HEAD
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
=======
      };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      },;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
onSelect(api)
      api.on(&quot;reInit&quot; onSelect)
      api.on(&quot;select&quot; onSelect)

      return () => {
        api?.off(&quot;select&quot; onSelect)
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      return () => {
        api?.off("select", onSelect)
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
            orientation |(opts && opts.axis === &quot;y&quot; ? &quot;vertical&quot; : &quot;horizontal&quot;)
          scrollPrev
          scrollNext
          canScrollPrev
=======
            orientation || (opts && opts.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD
<<<<<<< HEAD
className={cn(&quot;relative&quot;, className)}
=======
className={cn(&quot;relative&quot; className)}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
=======
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
      </CarouselContext.Provider>;
    );
  }
)
<<<<<<< HEAD
Carousel.displayName = &quot;Carousel&quot;
=======
Carousel.displayName = "Carousel"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
          &quot;flex&quot;
          orientation === &quot;horizontal&quot;
            ? &quot;-ml-4 snap-x snap-mandatory&quot;
            : &quot;-mt-4 flex-col snap-y snap-mandatory&quot;
=======
          "flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          className
        )}
        {...props}
      />
    </div>
  )
})
<<<<<<< HEAD
CarouselContent.displayName = &quot;CarouselContent&quot;
=======
CarouselContent.displayName = "CarouselContent"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
<<<<<<< HEAD
        &quot;min-w-0 shrink-0 grow-0 basis-full snap-start&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
=======
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
CarouselItem.displayName = &quot;CarouselItem&quot;
=======
CarouselItem.displayName = "CarouselItem"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
=======
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
<<<<<<< HEAD
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;
=======
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
const CarouselNext = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
=======
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
<<<<<<< HEAD
        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;
=======
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
<<<<<<< HEAD
  CarouselPrevious,;
  CarouselNext};
=======
  CarouselPrevious,
  CarouselNext}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
