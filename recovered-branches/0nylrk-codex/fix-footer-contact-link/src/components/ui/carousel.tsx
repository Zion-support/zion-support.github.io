=======


  }
;

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
=======          carouselRef
          api: api
          opts
          orientation:
            orientation |(opts?.axis === &quot;y&quot; ? &quot;vertical&quot; : &quot;horizontal&quot;)
          scrollPrev
          scrollNext
          canScrollPrev=======            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"


Carousel.displayName = "Carousel"



=======className={cn(&quot;relative&quot;, className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"          {...props}
        >;
          {children}
        </div>;
=======
=======      </CarouselContext.Provider>);
  }

)

=======
Carousel.displayName = &quot;Carousel&quot;
Carousel.displayName = "Carousel"

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const CarouselContent = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()
        className={cn(

          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"



==============
CarouselContent.displayName = &quot;CarouselContent&quot;
CarouselContent.displayName = "CarouselContent"
const CarouselItem = React.forwardRef<
  HTMLDivElement
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      role="group"
      aria-roledescription="slide"
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full&quot;
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",

CarouselItem.displayName = "CarouselItem"



=======
CarouselItem.displayName = &quot;CarouselItem&quot;
CarouselItem.displayName = "CarouselItem"
const CarouselPrevious = React.forwardRef<
  HTMLButtonElement
  React.ComponentProps<typeof Button>
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
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
      className={cn(
        &quot;absolute  h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;=======        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",

        className
      )}
=======
      className={cn (
        &quot;absolute  h - 8 w - 8 rounded - full & quot;,
        orientation === &quot;horizontal & quot;
          ? &quot;-left - 12 top - 1/2 -translate - y-1 / 2&quot;
          : &quot;-top - 12 left - 1/2 -translate - x-1 / 2 rotate - 90 & quot;,
        class_name)}>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      disabled={!canScrollPrev}
      on_click={scroll_prev}
      {...props}






=======
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>


    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

      className={cn(        &quot;absolute h-8 w-8 rounded-full&quot;
        orientation === &quot;horizontal&quot;
          ? &quot;-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;=======        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",

    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>

=======

        className
      )}
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
=======
  CarouselNext}

;

;