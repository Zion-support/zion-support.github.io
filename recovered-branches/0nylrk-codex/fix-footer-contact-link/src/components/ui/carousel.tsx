

import * as React from "react"""
import useEmblaCarousel from "embla-carousel-react"""
import { ArrowLeft, ArrowRight } from "lucide-react"""
import { cn } from "@/lib/utils"""
import { Button } from "@/components/ui/button""
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
</typeof>
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
</typeof>
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
</typeof>
  api: ReturnType<typeof useEmblaCarousel>[1]
</typeof>"
} & Omit<CarouselProps "orientation">"
</CarouselProps>
const CarouselContext = React.createContext<CarouselContextProps | null>(null)
</CarouselContextProps>"
    throw new Error("useCarousel must be used within a <Carousel />")"
</Carousel>
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1];
</typeof>
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
</typeof>
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
</typeof>
  api: ReturnType<typeof useEmblaCarousel>[1];
</typeof>"
} & Omit<CarouselProps "orientation">;"
</CarouselProps>
const CarouselContext = React.createContext<CarouselContextProps | null>(null);
</CarouselContextProps>"
    throw new Error("useCarousel must be used within a <Carousel />");"
</Carousel>
const Carousel = React.forwardRef<
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement> & CarouselProps;
</HTMLDivElement>
      (event: React.KeyboardEvent<HTMLDivElement>) => {
</HTMLDivElement>
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
  carousel_ref: ReturnType < typeof useEmblaCarousel>[0];,
  api: ReturnType < typeof useEmblaCarousel>[1];
  scroll_prev: () => void;,
  scroll_next: () => void;
  canScrollPrev: boolean;,
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
    },)
    ref) => {
    const [carousel_ref, api] = useEmblaCarousel (
      {
        ...opts,
        axis: orientation === &quot;horizontal & quot; ? &quot;x & quot; : &quot;y & quot;},)
      plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState (false);
    const [canScrollNext, setCanScrollNext] = React.useState (false);
    const on_select = React.useCallback ((api: CarouselApi) => {
      // Check condition;
if ( {) {
  $2;
}
        return;
      }




      return () => {"
        api?.off("select", onSelect)"
      }
      set_api (api);
    }, [api, set_api]);
    React.useEffect (() => {
      // Check condition;
if ( {) {
  $2;
}
        return;
      }
on_select (api);
      api.on (&quot;re_init & quot;, on_select);
      api.on (&quot;select & quot;, on_select);
      return () => {
        api?.off (&quot;select & quot;, on_select);
      }
    return (
      <CarouselContext.Provider;
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

)
"
Carousel.displayName = "Carousel""
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
  HTMLDivElement;
  React.HTMLAttributes<HTMLDivElement>
</HTMLDivElement>
    <div ref={carousel_ref} className=&quot;overflow - hidden & quot;>;
</div>
      <div;
        ref={ref}

        className={cn(
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
>(({ class_name, ...props }, ref) => {
  const { orientation } = use_carousel ();
  return (
    <div;
      ref={ref}
"
      role="group"""
      aria-roledescription="slide""
      className={cn(
"
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
</typeof>
const CarouselPrevious = React.forward_ref<;
  HTMLButtonElement,
  React.ComponentProps < typeof Button>;
>(({ class_name, variant = &quot;outline & quot;, size = &quot;icon & quot;, ...props }, ref) => {
  const { orientation, scroll_prev, canScrollPrev } = use_carousel ();
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
  React.ComponentProps<typeof Button>
</div>
    <Button;
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
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
    <Button;
      ref={ref}
      variant={variant}
      size={size}

      className={cn(
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
</Button>
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
</ArrowRight>
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);
    </Button>"
      <ArrowRight className="h-4 w-4" />"
</ArrowRight>"
      <span className="sr-only">Next slide</span>"
      <ArrowRight className=&quot;h - 4 w - 4&quot; />;
</ArrowRight>
      <span className=&quot;sr - only & quot;>Next slide</span>;
    </Button>);"
      <ArrowRight className="h-4 w-4" />"
</ArrowRight>"
      <span className="sr-only">Next slide</span>"
    </Button>"