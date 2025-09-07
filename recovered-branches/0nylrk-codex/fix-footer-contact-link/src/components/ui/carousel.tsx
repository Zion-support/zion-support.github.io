import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;
import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
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
  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps, "orientation">

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
      ...props
    }
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation = $2;
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
    React.useEffect(() => {if (!api) {;
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
          canScrollNext}}
      >;
        <div;
          ref={ref}
          onKeyDownCapture={handleKeyDown}
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
  return (
    <div
      ref = $2;
        orientation = $2;
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = $2;
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  return (
    <Button
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
  CarouselNext};
;