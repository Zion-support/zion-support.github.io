import * as React from &quot;react&quot;
import useEmblaCarousel from &quot;embla-carousel-react&quot;
import { ArrowLeft, ArrowRight } from "lucide-react";
import {cn} from &quot;@/lib/utils&quot;
import {Button} from &quot;@/components/ui/button&quot;
type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
