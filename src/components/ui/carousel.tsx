<<<<<<< HEAD
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



      orientation = "horizontal",
=======
=======
      orientation = "horizontal",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
        ...(opts || {}),
        axis: orientation === "horizontal" ? "x" : "y"},
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import * as React from &quot;react & quot;
import useEmblaCarousel from &quot;embla - carousel - react & quot;
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from &quot;@/lib / utils & quot;
import { Button } from &quot;@/components / ui / button & quot;

      };
<<<<<<< HEAD

      },;
=======
=======
      },;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
onSelect(api)
      api.on(&quot;reInit&quot; onSelect)
      api.on(&quot;select&quot; onSelect)

<<<<<<< HEAD
      return () => {
        api?.off(&quot;select&quot; onSelect)
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

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
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
<<<<<<< HEAD
<<<<<<< HEAD
className={cn(&quot;relative&quot;, className)}
className={cn(&quot;relative&quot; className)}
=======


className={cn(&quot;relative&quot; className)}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
=======
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
Carousel.displayName = "Carousel"

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
          "flex",
          orientation === "horizontal"
            ? "-ml-4 snap-x snap-mandatory"
            : "-mt-4 flex-col snap-y snap-mandatory",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
          className
        )}
        {...props}
      />
    </div>
  )
})
<<<<<<< HEAD
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
        "min-w-0 shrink-0 grow-0 basis-full snap-start",
        orientation === "horizontal" ? "pl-4" : "pt-4",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot; size = &quot;icon&quot; ...props }, ref) => {
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
=======
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "left-1 sm:left-2 md:-left-12 top-1/2 -translate-y-1/2"
          : "top-1 sm:top-2 md:-top-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
=======
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "right-1 sm:right-2 md:-right-12 top-1/2 -translate-y-1/2"
          : "bottom-1 sm:bottom-2 md:-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
=======
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
  CarouselPrevious,
  CarouselNext}
;
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
