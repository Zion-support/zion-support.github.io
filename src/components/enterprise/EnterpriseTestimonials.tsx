
import React from "react";
import {_Carousel, _CarouselContent, _CarouselItem, _CarouselNext, _CarouselPrevious} from "@/components/ui/carousel";

const _testimonials = [
  {_quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.", _author: "Sarah Johnson", _title: "VP of Talent Acquisition", _company: "TechGlobal Inc.", _image: "/placeholder.svg"},
  {_quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.", _author: "Michael Chen", _title: "Director of HR", _company: "InnovateCorp", _image: "/placeholder.svg"},
  {_quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.", _author: "Elena Rodriguez", _title: "CTO", _company: "FutureTech Systems", _image: "/placeholder.svg"}];

export function EnterpriseTestimonials() {_return (_<section id="testimonials" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, _index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{_testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <img
                        src={_testimonial.image}
                        alt={_testimonial.author}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{_testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {_testimonial.title}, {_testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
