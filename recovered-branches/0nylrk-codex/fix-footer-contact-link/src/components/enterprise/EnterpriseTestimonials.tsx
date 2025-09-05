
<<<<<<< HEAD
import React from "react",;
import { Quote } from "lucide-react",;
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious} from "@/components/ui/carousel",;
;
const testimonials = [;
  {;
    quote:"Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;
    author:"Sarah Johnson",;
    title:"VP of Talent Acquisition",;
    company:"TechGlobal Inc.",;
    image:"/placeholder.svg"},;
  {;
    quote:"The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",;
    author:"Michael Chen",;
    title:"Director of HR",;
    company:"InnovateCorp",;
    image:"/placeholder.svg"},;
  {;
    quote:"The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",;
    author:"Elena Rodriguez",;
    title:"CTO",;
    company:"FutureTech Systems",;
    image:"/placeholder.svg"}],;
;
export function EnterpriseTestimonials() {;
  return (;
    <section className="py-20 px-4 md:px-6">;
      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Trusted by Leading Companies;
          </h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;
;
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;
                    "{testimonial.quote}";
                  </blockquote>;
                  <div className="flex items-center gap-4">;
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">;
                      <img;
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover";
                      />;
                    </div>;
                    <div>;
                      <p className="font-bold">{testimonial.author}</p>;
                      <p className="text-sm text-muted-foreground">;
                        {testimonial.title}, {testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </CarouselItem>;
            ))}
          </CarouselContent>;
          <div className="flex justify-center gap-2 mt-8">;
            <CarouselPrevious />;
            <CarouselNext />;
          </div>;
        </Carousel>;
      </div>;
    </section>;
  ),;
=======
import React from "react",
import { Quote } from "lucide-react",import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious} from "@/components/ui/carousel",
const testimonials = [
  {
    quote: &quot;Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.&quot;,
    author: &quot;Sarah Johnson&quot;,
    title: &quot;VP of Talent Acquisition&quot;,
    company: &quot;TechGlobal Inc.&quot;,
    image: &quot;/placeholder.svg&quot;},
  {
    quote: &quot;The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.&quot;,
    author: &quot;Michael Chen&quot;,
    title: &quot;Director of HR&quot;,
    company: &quot;InnovateCorp&quot;,
    image: &quot;/placeholder.svg&quot;},
  {
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],
export function EnterpriseTestimonials() {
  return (
    <section className=&quot;py-20 px-4 md:px-6&quot;>
      <div className=&quot;container mx-auto max-w-6xl&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
import React from "react";
import {_Carousel, _CarouselContent, _CarouselItem, _CarouselNext, _CarouselPrevious} from "@/components/ui/carousel";

const _testimonials = [
  {_quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.", _author: "Sarah Johnson", _title: "VP of Talent Acquisition", _company: "TechGlobal Inc.", _image: "/placeholder.svg"},
  {_quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.", _author: "Michael Chen", _title: "Director of HR", _company: "InnovateCorp", _image: "/placeholder.svg"},
  {_quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.", _author: "Elena Rodriguez", _title: "CTO", _company: "FutureTech Systems", _image: "/placeholder.svg"}];

export function EnterpriseTestimonials() {_return (_<section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className=&quot;text-xl text-muted-foreground max-w-2xl mx-auto&quot;>
            See how enterprise teams are transforming their hiring process
          </p>
        </div>

        <Carousel className=&quot;w-full&quot;>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className=&quot;md:basis-1/1 lg:basis-1/1&quot;>
                <div className=&quot;bg-card rounded-xl p-8 border border-border h-full&quot;>
                  <Quote className=&quot;h-10 w-10 text-primary/20 mb-4&quot; />
                  <blockquote className=&quot;text-xl mb-6 italic&quot;>
                    &quot;{testimonial.quote}&quot;                  </blockquote>
                  <div className=&quot;flex items-center gap-4&quot;>
                    <div className=&quot;h-12 w-12 rounded-full overflow-hidden bg-muted&quot;>
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className=&quot;h-full w-full object-cover&quot;
                      />
                    </div>
                    <div>
                      <p className=&quot;font-bold&quot;>{testimonial.author}</p>
                      <p className=&quot;text-sm text-muted-foreground&quot;>
                        {testimonial.title}, {testimonial.company}                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=&quot;flex justify-center gap-2 mt-8&quot;>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
