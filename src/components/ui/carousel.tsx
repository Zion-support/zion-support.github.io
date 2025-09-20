import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
import {Button} from &quot;@/components/ui/button&quot;
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
type CarouselOptions = {axis?: 'x' | 'y'
orientation?: &quot;horizontal&quot; | &quot;vertical&quot;
React.HTMLAttributes<HTMLDivElement> & CarouselProps;
>(;
  (;
    {orientation = &quot;horizontal&quot;
    const onSelect = React.useCallback((api: CarouselApi) => {if (!api) {
    }, [api]);
    const handleKeyDown = React.useCallback(;
      (event: React.KeyboardEvent<HTMLDivElement>) => {;
        if (event.key === &quot;ArrowLeft&quot;) {
>(({ className, ...props }, ref) => {;
  const { carouselRef, orientation } = useCarousel();
  return (;
    <div ref={carouselRef} className=&quot;overflow-hidden&quot;>
      <div
  return (;
    <div;
ref={ref};
      role=&quot;group&quot;
      aria-roledescription=&quot;slide&quot;
CarouselItem.displayName = &quot;CarouselItem&quot;
const CarouselPrevious = React.forwardRef<;
  HTMLButtonElement,;
React.ComponentProps<typeof Button>;
>(({ className variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {
CarouselPrevious.displayName = &quot;CarouselPrevious&quot;
const CarouselNext = React.forwardRef<;
  HTMLButtonElement,;
React.ComponentProps<typeof Button>;
>(({ className variant = &quot;outline&quot;, size = &quot;icon&quot;, ...props }, ref) => {