import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"


type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {_opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (_api: CarouselApi) => void}

type CarouselContextProps = {_carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: "horizontal" | "vertical"} & Omit<CarouselProps, "orientation">

const _CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel(): CarouselContextProps {_const _context = React.useContext(CarouselContext) as CarouselContextProps | null

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")}

  return context as CarouselContextProps
}

const _Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(_(
    {_orientation = "horizontal", _opts, _setApi, _plugins, _className, _children, _...props}, _ref) => {_const [carouselRef, _api] = useEmblaCarousel(
      {
        ...opts, _axis: orientation === "horizontal" ? "x" : "y"},
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

    const _handleKeyDown = React.useCallback(_(event: React.KeyboardEvent<HTMLDivElement>) => {_if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()} else if (event.key === "ArrowRight") {_event.preventDefault()
          scrollNext()}
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
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {_api?.off("select", _onSelect)}
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
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
        >
          {_children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const _CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => {_const { carouselRef, _orientation} = useCarousel()

  return (
    <div ref={_carouselRef} className="overflow-hidden">
      <div
        ref={_ref}
        className={_cn(
          "flex", _orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", _className
        )}
        {_...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const _CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(_({_className, _...props}, _ref) => {_const { orientation} = useCarousel()

  return (
    <div
      ref={_ref}
      role="group"
      aria-roledescription="slide"
      className={_cn(
        "min-w-0 shrink-0 grow-0 basis-full", _orientation === "horizontal" ? "pl-4" : "pt-4", _className
      )}
      {_...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const _CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
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
      )}
      disabled={_!canScrollPrev}
      onClick={_scrollPrev}
      {_...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const _CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
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
      )}
      disabled={_!canScrollNext}
      onClick={_scrollNext}
      {_...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {_type CarouselApi, _Carousel, _CarouselContent, _CarouselItem, _CarouselPrevious, _CarouselNext}
