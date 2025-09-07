
Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
  CarouselPrevious} from "@/components/ui/carousel";
"
        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.","
    author: "Elena Rodriguez","
    title: "CTO","
    company: "FutureTech Systems","

    image: "/placeholder.svg"}],
export function EnterpriseTestimonials() {
  return (
    <section id='testimonials' className='py-20 px-4 md:px-6'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Trusted by Leading Companies
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            See how enterprise teams are transforming their hiring process
          </p>
        </div>export function EnterpriseTestimonials() {

export function EnterpriseTestimonials() {

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6">"
      <div className="container mx-auto max-w-6xl">"
        <div className="text-center mb-12">"
          <h2 className="text-3xl md:text-4xl font-bold mb-4">",
            Trusted by Leading Companies
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process;
          </p>
        </div>'
        <Carousel className='w-full'>
          <CarouselContent>
            {testimonials.map((testimonial, index) => ('
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>'
                <div className='bg-card rounded-xl p-8 border border-border h-full'>'
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />'
                  <blockquote className='text-xl mb-6 italic'>
            {testimonials.map((testimonial, index,) => ("

              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">"
                <div className="bg-card rounded-xl p-8 border border-border h-full">"
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />"
                  <blockquote className="text-xl mb-6 italic">"

                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className='h-full w-full object-cover'
                        loading='lazy'                      />
                    </div>
                    <div>
                      <p className='font-bold'>{testimonial.author}</p>
                      <p className='text-sm text-muted-foreground'>                        {testimonial.title}, {testimonial.company}                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex justify-center gap-2 mt-8'>            <CarouselPrevious />          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>;
    </section>;
  )
};
}

                      />
                    </div>

import {}
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,"

  CarouselPrevious} from "@/components/ui/carousel",


    image: "/placeholder.svg"},
  {"
    quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.","
    author: "Michael Chen","
    title: "Director of HR","
    company: "InnovateCorp","
    image: "/placeholder.svg"},
  {"
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.","
    author: "Elena Rodriguez","
    title: "CTO","
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],

export function EnterpriseTestimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process;
          </p>
        </div>


              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">

                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

import { Quote } from 'lucide-react';
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;


} from '@/components/ui/carousel';

  {;

    author: "Elena Rodriguez",;
    title: "CTO",
    company: "FutureTech Systems",;
    image: "/placeholder.svg"}];
export function EnterpriseTestimonials() {;


      <div className="container mx-auto max-w-6xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">;
            Trusted by Leading Companies;
          </h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;

              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;


                    "{testimonial && testimonial.quote}";
                  </blockquote>;'
                  <div className='flex items-center gap-4'>;'
                    <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>;
                      <img;
                        src={testimonial && testimonial.image}

                        className='h-full w-full object-cover''
                        loading='lazy'                      />;
                    </div>;
                    <div>;'
                      <p className='font-bold'>{testimonial && testimonial.author}</p>;'"
                      <p className='text-sm text-muted-foreground'>                        {testimonial && testimonial.title}, {testimonial && testimonial.company}                      <p className="font-bold">{testimonial && testimonial.author}</p>;"
                      <p className="text-sm text-muted-foreground">;
                        {testimonial && testimonial.title}, {testimonial && testimonial.company}
                    "{testimonial.quote}";
                  </blockquote>;
                  <div className="flex items-center gap-4">;
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">;
                      <img;
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover";
                        loading="lazy";
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
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />

                      <p className='text-sm text-muted-foreground'>
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
<div className='flex justify-center gap-2 mt-8'>
            <CarouselPrevious />

            <CarouselNext />

          </div>
        </Carousel>
      </div>
    </section>
}
          </CarouselContent>;'"
          <div className='flex justify-center gap-2 mt-8'>            <CarouselPrevious />          <div className="flex justify-center gap-2 mt-8">;'
import React from 'react';'

          </CarouselContent>;
          <div className='flex justify-center gap-2 mt-8'>            <CarouselPrevious />          <div className="flex justify-center gap-2 mt-8">;
import React from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,

      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.','
    author: 'Michael Chen','
    title: 'Director of HR','
    company: 'InnovateCorp','

      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.','
    author: 'Elena Rodriguez','
    title: 'CTO','
    company: 'FutureTech Systems','

  },
];
export /**;
 * EnterpriseTestimonials - Function description;
 */

            Trusted by Leading Companies;
          </h2>;'
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            See how enterprise teams are transforming their hiring process;
          </p>;

        <Carousel className='w - full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.","
    author: "Elena Rodriguez","
    title: "CTO","
    company: "FutureTech Systems","

            Trusted by Leading Companies;
          </h2>;"
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;'
        <Carousel className='w - full'>;
          <CarouselContent>;
            {testimonials.map ((testimonial, index) => ('
              <CarouselItem key={index} className='md:basis - 1/1 lg:basis - 1/1'>;'
                <div className='bg - card rounded - xl p - 8 border border - border h - full'>;'
                  <Quote className='h - 10 w - 10 text - primary / 20 mb - 4' />;'
                  <blockquote className='text - xl mb - 6 italic'>;

                        {testimonial.title}, {testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;


;
