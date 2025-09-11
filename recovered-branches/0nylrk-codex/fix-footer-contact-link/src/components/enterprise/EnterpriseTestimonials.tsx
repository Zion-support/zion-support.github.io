

import React from "react";
import { Quote } from "lucide-react";


import React from "react",;
import { Quote } from "lucide-react",;
=======
import React from "react";
import { Quote } from "lucide-react";
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
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
=======import React from "react",
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

export function EnterpriseTestimonials() {;
  return (

=======
==============

=======import React from "react",;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials && testimonials.map((testimonial, index) => (;


}
    </section>);

}=======;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
