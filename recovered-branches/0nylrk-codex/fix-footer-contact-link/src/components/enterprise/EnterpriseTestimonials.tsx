


import React from "react";
import { Quote } from "lucide-react";


return (                      <img;
                        src={testimonial && testimonial.image}
                        alt={testimonial && testimonial.author}
                        className="h-full w-full object-cover""
import {;
  }

                      <img

  return (
)
export function EnterpriseTestimonials() {
  return ("
    <section className="py-20 px-4 md:px-6">"
</section>"
      <div className="container mx-auto max-w-6xl">"
</div>"
        <div className="text-center mb-12">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">"
</h2>
          </h2>"
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">"
</p>
        <Carousel className="w-full">"

          <CarouselContent>

                      />
</img>
                    <div>



import { Quote } from "lucide-react",;
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;"
  CarouselPrevious} from "@/components/ui/carousel",;
const testimonials = [;
  {;'"
    quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;"
    author: "Sarah Johnson",;"
    title: "VP of Talent Acquisition","
    company: "TechGlobal Inc.",;"
    image: "/placeholder.svg"},;
  {;"
    quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",;"
    author: "Michael Chen",;"
    title: "Director of HR","
    company: "InnovateCorp",;"
    image: "/placeholder.svg"},;
  {;"
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",;"
    author: "Elena Rodriguez",;"
    title: "CTO","
    company: "FutureTech Systems",;"
    image: "/placeholder.svg"}];

export function EnterpriseTestimonials() {;
  return (;

import { Quote  } from './lucide-react';
import {}

  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,';
} from '@/components / ui / carousel';

                      <img;



}
;

const testimonials = [;

  {
      "Implementing Zion's Enterprise solution has reduced our time - to - hire by 40% and significantly improved the quality of candidates we're seeing.",""
    image: "/placeholder.svg","
  },
      "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",""
      "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",""
    company: "FutureTech Systems",""
  },]
export /**
 * EnterpriseTestimonials - Function description;
 */)
function EnterpriseTestimonials() {
    <section className="py - 20 px - 4 md:px - 6">;"
</img>"
      <div className="container mx - auto max - w-6xl">;"
        <div className="text - center mb - 12">;"
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;"
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;"
        <Carousel className="w - full">;"

              <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;"
                <div className="bg - card rounded - xl p - 8 border border - border h - full">;"
                  <Quote className="h - 10 w - 10 text - primary / 20 mb - 4" />;"
                  <blockquote className="text - xl mb - 6 italic">;"
                  <div className="flex items - center gap - 4">;"
                    <div className="h - 12 w - 12 rounded - full overflow - hidden bg - muted">;"
                        src={testimonial.image}
                        alt={testimonial.author}"
                        className="h - full w - full object - cover";"
                      />;
                    </div>;
                    <div>;
                      <p className="font - bold">{testimonial.author}</p>;
                      <p className="text - sm text - muted - foreground">;

                    "{testimonial.quote}";
                  </blockquote>;
                  <div className="flex items-center gap-4">;
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">;
                      <img;
              </CarouselItem>;
            ))}
          </CarouselContent>;
          <div className="flex justify-center gap-2 mt-8">;
            <CarouselPrevious />;
            <CarouselNext />;
          </div>;
        </Carousel>;
      </div>;


