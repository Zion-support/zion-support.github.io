<<<<<<< HEAD
import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from &quot;lucide-react&quot;

import { cn } from &quot;@/lib/utils&quot;
import { Button } from &quot;@/components/ui/button&quot;
=======
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {_opts?: CarouselOptions
  plugins?: CarouselPlugin
<<<<<<< HEAD
  orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
  setApi?: (api: CarouselApi) => void
}
=======
  orientation?: "horizontal" | "vertical"
  setApi?: (_api: CarouselApi) => void}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type CarouselContextProps = {_carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
<<<<<<< HEAD
<<<<<<< HEAD
  orientation: "horizontal" | "vertical"
} & Omit<CarouselProps "orientation">
=======
  orientation: &quot;horizontal&quot; | &quot;vertical&quot;
} & Omit<CarouselProps, &quot;orientation&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  orientation: "horizontal" | "vertical"} & Omit<CarouselProps, "orientation">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {_const _context = React.useContext(CarouselContext) as CarouselContextProps | null

  if (!context) {
<<<<<<< HEAD
    throw new Error(&quot;useCarousel must be used within a <Carousel />&quot;)
  }
=======
    throw new Error("useCarousel must be used within a <Carousel />")}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return context as CarouselContextProps
}

const _Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
<<<<<<< HEAD
>(
  (
    {
      orientation = &quot;horizontal&quot;,
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === &quot;horizontal&quot; ? &quot;x&quot; : &quot;y&quot;},
=======
>(_(
    {_orientation = "horizontal", _opts, _setApi, _plugins, _className, _children, _...props}, _ref) => {_const [carouselRef, _api] = useEmblaCarousel(
      {
        ...opts, _axis: orientation === "horizontal" ? "x" : "y"},
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const _onSelect = React.useCallback(_(api: CarouselApi) => {_if (!api) {
        return}

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const _scrollPrev = React.useCallback__(() => {_api?.scrollPrev()}, [api])

    const _scrollNext = React.useCallback__(() => {_api?.scrollNext()}, [api])

<<<<<<< HEAD
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === &quot;ArrowLeft&quot;) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === &quot;ArrowRight&quot;) {
          event.preventDefault()
          scrollNext()
        }
=======
    const _handleKeyDown = React.useCallback(_(event: React.KeyboardEvent<HTMLDivElement>) => {_if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()} else if (event.key === "ArrowRight") {_event.preventDefault()
          scrollNext()}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect__(() => {_if (!api || !setApi) {
        return}

      setApi(api)
    }, [api, setApi])

    React.useEffect__(() => {_if (!api) {
        return}

      onSelect(api)
      api.on(&quot;reInit&quot;, onSelect)
      api.on(&quot;select&quot;, onSelect)

<<<<<<< HEAD
      return () => {
        api?.off(&quot;select&quot;, onSelect)
      }
=======
      return () => {_api?.off("select", _onSelect)}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
<<<<<<< HEAD
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === &quot;y&quot; ? &quot;vertical&quot; : &quot;horizontal&quot;),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext}}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn(&quot;relative&quot;, className)}
          role=&quot;region&quot;
          aria-roledescription=&quot;carousel&quot;
          {...props}
=======
        value={_{
          carouselRef, _api: api, _opts, _orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"), _scrollPrev, _scrollNext, _canScrollPrev, _canScrollNext}}
      >
        <div
          ref={_ref}
          onKeyDownCapture={_handleKeyDown}
          className={_cn("relative", _className)}
          role="region"
          aria-roledescription="carousel"
          {_...props}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = &quot;Carousel&quot;

const _CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => {_const { carouselRef, _orientation} = useCarousel()

  return (
<<<<<<< HEAD
    <div ref={carouselRef} className=&quot;overflow-hidden&quot;>
      <div
        ref={ref}
        className={cn(
          &quot;flex&quot;,
          orientation === &quot;horizontal&quot; ? &quot;-ml-4&quot; : &quot;-mt-4 flex-col&quot;,
          className
=======
    <div ref={_carouselRef} className="overflow-hidden">
      <div
        ref={_ref}
        className={_cn(
          "flex", _orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        )}
        {_...props}
      />
    </div>
  )
})
CarouselContent.displayName = &quot;CarouselContent&quot;

const _CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => {_const { orientation} = useCarousel()

  return (
    <div
<<<<<<< HEAD
      ref={ref}
      role=&quot;group&quot;
      aria-roledescription=&quot;slide&quot;
      className={cn(
        &quot;min-w-0 shrink-0 grow-0 basis-full&quot;,
        orientation === &quot;horizontal&quot; ? &quot;pl-4&quot; : &quot;pt-4&quot;,
        className
=======
      ref={_ref}
      role="group"
      aria-roledescription="slide"
      className={_cn(
        "min-w-0 shrink-0 grow-0 basis-full", _orientation === "horizontal" ? "pl-4" : "pt-4", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      {_...props}
    />
  )
})
CarouselItem.displayName = &quot;CarouselItem&quot;

const _CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        &quot;absolute  h-8 w-8 rounded-full&quot;,
        orientation === &quot;horizontal&quot;
          ? &quot;-left-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-top-12 left-1/2 -translate-x-1/2 rotate-90&quot;,
        className
=======
>(_({_className, _variant = "outline", _size = "icon", _...props}, _ref) => {_const { orientation, _scrollPrev, _canScrollPrev} = useCarousel()

  return (
    <Button
      ref={_ref}
      variant={_variant}
      size={_size}
      className={_cn(
        "absolute  h-8 w-8 rounded-full", _orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      disabled={_!canScrollPrev}
      onClick={_scrollPrev}
      {_...props}
    >
      <ArrowLeft className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;

const _CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
<<<<<<< HEAD
>(({ className, variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        &quot;absolute h-8 w-8 rounded-full&quot;,
        orientation === &quot;horizontal&quot;
          ? &quot;-right-12 top-1/2 -translate-y-1/2&quot;
          : &quot;-bottom-12 left-1/2 -translate-x-1/2 rotate-90&quot;,
        className
=======
>(_({_className, _variant = "outline", _size = "icon", _...props}, _ref) => {_const { orientation, _scrollNext, _canScrollNext} = useCarousel()

  return (
    <Button
      ref={_ref}
      variant={_variant}
      size={_size}
      className={_cn(
        "absolute h-8 w-8 rounded-full", _orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", _className
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
      disabled={_!canScrollNext}
      onClick={_scrollNext}
      {_...props}
    >
      <ArrowRight className=&quot;h-4 w-4&quot; />
      <span className=&quot;sr-only&quot;>Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = &quot;CarouselNext&quot;

export {_type CarouselApi, _Carousel, _CarouselContent, _CarouselItem, _CarouselPrevious, _CarouselNext}
