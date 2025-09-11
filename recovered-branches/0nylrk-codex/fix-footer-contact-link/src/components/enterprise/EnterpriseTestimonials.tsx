
<<<<<<< HEAD



import React from "react";
import { Quote } from "lucide-react";


import React from "react",;
import { Quote } from "lucide-react",;
=======
import React from "react";
import { Quote } from "lucide-react";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { Quote } from "lucide-react";
import {
import React from "react";
import { Quote } from "lucide-react";
import {
=======
=======
  CarouselPrevious,;
} from "@/components/ui/carousel";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const testimonials = [;
  {;
    quote:;
      "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;
    author: "Sarah Johnson",;
    title: "VP of Talent Acquisition",;
    company: "TechGlobal Inc.",;
    image: "/placeholder && placeholder.svg",;
  },;
  {;
    quote:;
      "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",;
    author: "Michael Chen",;
    title: "Director of HR",;
    company: "InnovateCorp",;
    image: "/placeholder && placeholder.svg",;
  },;
  {;
    quote:;
      "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",;
    author: "Elena Rodriguez",;
    title: "CTO",;
    company: "FutureTech Systems",;
    image: "/placeholder && placeholder.svg",;
  },;

];
=======

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,;
} from "@/components/ui/carousel";
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Carousel
  CarouselContent
  CarouselItem
  CarouselNext
  CarouselPrevious
} from "@/components/ui/carousel";
const testimonials = [
  {
    quote:
      "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing."
    author: "Sarah Johnson"
    title: "VP of Talent Acquisition"
    company: "TechGlobal Inc."
    image: "/placeholder.svg"
  }
  {
    quote:
      "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options."
    author: "Michael Chen"
    title: "Director of HR"
    company: "InnovateCorp"
    image: "/placeholder.svg"
  }
  {
    quote:
      "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous."
    author: "Elena Rodriguez"
    title: "CTO"
    company: "FutureTech Systems"
    image: "/placeholder.svg"
  }
];
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { Quote } from "lucide-react",
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious} from "@/components/ui/carousel",

const testimonials = [
  {
    quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",
    author: "Sarah Johnson",
    title: "VP of Talent Acquisition",
    company: "TechGlobal Inc.",
    image: "/placeholder.svg"},
  {
    quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",
    author: "Michael Chen",
    title: "Director of HR",
    company: "InnovateCorp",
    image: "/placeholder.svg"},
  {
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],

<<<<<<< HEAD
<<<<<<< HEAD
export function EnterpriseTestimonials() {
  return (
    <section className="py-20 px-4 md:px-6">
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
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export function EnterpriseTestimonials() {;
  return (

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">

<<<<<<< HEAD
<<<<<<< HEAD
                        {testimonial.title}, {testimonial.company}
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
    </section>;
  );
}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",;
import { Quote } from "lucide-react",;
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious} from "@/components/ui/carousel",;
const testimonials = [;
  {;
    quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;
    author: "Sarah Johnson",;
    title: "VP of Talent Acquisition",;
    company: "TechGlobal Inc.",;
    image: "/placeholder.svg"},;
  {;
    quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",;
    author: "Michael Chen",;
    title: "Director of HR",;
    company: "InnovateCorp",;
    image: "/placeholder.svg"},;
  {;
    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",;
    author: "Elena Rodriguez",;
    title: "CTO",;
    company: "FutureTech Systems",;
    image: "/placeholder.svg"}];
export function EnterpriseTestimonials() {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
];
export function EnterpriseTestimonials() {;
  return (
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
;
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials && testimonials.map((testimonial, index) => (;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    "{testimonial && testimonial.quote}";
                  </blockquote>;
                  <div className="flex items-center gap-4">;
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                      <img
                        src={testimonial && testimonial.image}
                        alt={testimonial && testimonial.author}
                        className="h-full w-full object-cover"
                      />;
                    </div>;
                    <div>;
                      <p className="font-bold">{testimonial && testimonial.author}</p>;
                      <p className="text-sm text-muted-foreground">;
                        {testimonial && testimonial.title}, {testimonial && testimonial.company}
import React from './react';
import { Quote  } from './lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components / ui / carousel';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <img;



}
<<<<<<< HEAD
;
const testimonials = [;
  {
    quote:;
      "Implementing Zion's Enterprise solution has reduced our time - to - hire by 40% and significantly improved the quality of candidates we're seeing.",
    author: "Sarah Johnson",
    title: "VP of Talent Acquisition",
    company: "TechGlobal Inc.",
    image: "/placeholder.svg",
  },
  {
    quote:;
      "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",
    author: "Michael Chen",
    title: "Director of HR",
    company: "InnovateCorp",
    image: "/placeholder.svg",
  },
  {
    quote:;
      "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg",
  },
];
;
export /**
 * EnterpriseTestimonials - Function description
 */
function EnterpriseTestimonials() {
  return (
    <section className="py - 20 px - 4 md:px - 6">;
      <div className="container mx - auto max - w-6xl">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;
            Trusted by Leading Companies;
          </h2>;
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;
        <Carousel className="w - full">;
          <CarouselContent>;
            {testimonials.map ((testimonial, index) => (
              <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;
                <div className="bg - card rounded - xl p - 8 border border - border h - full">;
                  <Quote className="h - 10 w - 10 text - primary / 20 mb - 4" />;
                  <blockquote className="text - xl mb - 6 italic">;
                    "{testimonial.quote}";
                  </blockquote>;
                  <div className="flex items - center gap - 4">;
                    <div className="h - 12 w - 12 rounded - full overflow - hidden bg - muted">;
                      <img;
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h - full w - full object - cover";
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
<<<<<<< HEAD
    </section>;
  ),;}
 import {
  Carousel;
CarouselContent;
CarouselItem;
CarouselNext;
const testimonials = [ {
  quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.";
author: "Sarah Johnson";
title: "VP of Talent Acquisition";
company: "TechGlobal Inc.";
image: "/placeholder.svg" 
};
{
  quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.";
author: "Michael Chen";
title: "Director of HR";
company: "InnovateCorp";
image: "/placeholder.svg" 
};
{
  export function EnterpriseTestimonials () {
  return (<section className="py-20 px-4 md:px-6" > <div className="container mx-auto max-w-6xl" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" > text-xl text-muted-foreground max-w-2xl mx-auto"> See how enterprise teams are transforming their hiring process </p> </div> <Carousel className=" w-full"> <CarouselContent> </blockquote> <div className=" flex items-center gap-4"> <div className=" h-12 w-12 rounded-full overflow-hidden bg-muted"> <img </p> </div> </div> </div> </CarouselItem>) ) 
}</CarouselContent> <div className=" flex justify-center gap-2 mt-8" > <CarouselPrevious /> <CarouselNext /> </div> </Carousel> </div> </section>) 
}
}
;
}
;
=======

    </section>);

}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
