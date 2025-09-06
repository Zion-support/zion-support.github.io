<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { Quote } from 'lucide-react'
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
import React from 'react'
import { Quote } from 'lucide-react'
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import {

  Carousel
  CarouselContent
  CarouselItem
  CarouselNext
  CarouselPrevious
} from '@/components/ui/carousel'
const testimonials = [
  {
    quote:
      "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing."
    author: 'Sarah Johnson'
    title: 'VP of Talent Acquisition'
    company: 'TechGlobal Inc.'
    image: '/placeholder.svg'
  }
  {
    quote:
      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.'
    author: 'Michael Chen'
    title: 'Director of HR'
    company: 'InnovateCorp'
    image: '/placeholder.svg'
  }
  {
    quote:
      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.'
    author: 'Elena Rodriguez'
    title: 'CTO'
    company: 'FutureTech Systems'
    image: '/placeholder.svg'
  }
]
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
        </div>
<<<<<<< HEAD
        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous."
    author: "Elena Rodriguez"
    title: "CTO"
    company: "FutureTech Systems"
    image: "/placeholder.svg"}]

=======
=======
import {

  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
  CarouselPrevious} from "@/components/ui/carousel";

>>>>>>> main
        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
export function EnterpriseTestimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process
          </p>
        </div>
        <Carousel className='w-full'>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>
                <div className='bg-card rounded-xl p-8 border border-border h-full'>
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />
                  <blockquote className='text-xl mb-6 italic'>
            {testimonials.map((testimonial, index,) => (
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>
                      <img
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======

>>>>>>> main
            <CarouselNext />
          </div>
        </Carousel>
      </div>;
    </section>;
  );
};
}
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> main

                      />
                    </div>
                    <div>
                      <p className='font-bold'>{testimonial.author}</p>
                      <p className='text-sm text-muted-foreground'>                        {testimonial.title}, {testimonial.company}

import React from "react",
import { Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious} from "@/components/ui/carousel",

<<<<<<< HEAD
=======

>>>>>>> main
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
<<<<<<< HEAD
    image: "/placeholder.svg"}],
=======

    image: "/placeholder.svg"}];
>>>>>>> main

export function EnterpriseTestimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how enterprise teams are transforming their hiring process
          </p>
        </div>

<<<<<<< HEAD
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
=======

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (

>>>>>>> main
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
<<<<<<< HEAD
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-muted">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
import React from "react",;
=======


import React from 'react';
>>>>>>> main
import { Quote } from 'lucide-react';
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
<<<<<<< HEAD
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
=======
  CarouselPrevious,;
} from '@/components/ui/carousel';

const testimonials = [;
  {;
    quote:;
      "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",;
    author: 'Sarah Johnson',;
    title: 'VP of Talent Acquisition',;
    company: 'TechGlobal Inc.',;
    image: '/placeholder && placeholder.svg',;
  },;
  {;
    quote:;
      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.',;
    author: 'Michael Chen',;
    title: 'Director of HR',;
    company: 'InnovateCorp',;
    image: '/placeholder && placeholder.svg',;
  },;
  {;
    quote:;
      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.',;
    author: 'Elena Rodriguez',;
    title: 'CTO',;
    company: 'FutureTech Systems',;
    image: '/placeholder && placeholder.svg',;
  },;
];

export function EnterpriseTestimonials() {;
  return (
    <section id='testimonials' className='py-20 px-4 md:px-6'>;
      <div className='container mx-auto max-w-6xl'>;
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>;
            Trusted by Leading Companies;
          </h2>;
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;

        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",;
    author: "Elena Rodriguez",;
    title: "CTO",;
    company: "FutureTech Systems",;
    image: "/placeholder && placeholder.svg"}],;
export function EnterpriseTestimonials() {;
  return (
>>>>>>> main
    <section id="testimonials" className="py-20 px-4 md:px-6">;
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
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
=======

        <Carousel className='w-full'>;
          <CarouselContent>;
            {testimonials && testimonials.map((testimonial, index) => (;
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;
                <div className='bg-card rounded-xl p-8 border border-border h-full'>;
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />;
                  <blockquote className='text-xl mb-6 italic'>;
            {testimonials && testimonials.map((testimonial, index,) => (;
>>>>>>> main
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                    "{testimonial && testimonial.quote}";
                  </blockquote>;
                  <div className='flex items-center gap-4'>;
                    <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>;
                      <img
                        src={testimonial && testimonial.image}
                        alt={testimonial && testimonial.author}
                        className='h-full w-full object-cover'
                        loading='lazy'                      />;
                    </div>;
                    <div>;
                      <p className='font-bold'>{testimonial && testimonial.author}</p>;
                      <p className='text-sm text-muted-foreground'>                        {testimonial && testimonial.title}, {testimonial && testimonial.company}                      <p className="font-bold">{testimonial && testimonial.author}</p>;
                      <p className="text-sm text-muted-foreground">;
                        {testimonial && testimonial.title}, {testimonial && testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </CarouselItem>;
            ))}


>>>>>>> main
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
<<<<<<< HEAD
  )
<<<<<<< HEAD
}
=======
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

          </CarouselContent>;
          <div className='flex justify-center gap-2 mt-8'>            <CarouselPrevious />          <div className="flex justify-center gap-2 mt-8">;
import React from 'react';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components / ui / carousel';
const testimonials = [;
  {
    quote:;
      "Implementing Zion's Enterprise solution has reduced our time - to - hire by 40% and significantly improved the quality of candidates we're seeing.",
    author: 'Sarah Johnson',
    title: 'VP of Talent Acquisition',
    company: 'TechGlobal Inc.',
    image: '/placeholder.svg',
  },
  {
    quote:;
      'The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.',
    author: 'Michael Chen',
    title: 'Director of HR',
    company: 'InnovateCorp',
    image: '/placeholder.svg',
  },
  {
    quote:;
      'The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.',
    author: 'Elena Rodriguez',
    title: 'CTO',
    company: 'FutureTech Systems',
    image: '/placeholder.svg',
  },
];
export /**
 * EnterpriseTestimonials - Function description
 */
function EnterpriseTestimonials() {
  return (
    <section id='testimonials' className='py - 20 px - 4 md:px - 6'>;
      <div className='container mx - auto max - w-6xl'>;
        <div className='text - center mb - 12'>;
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;
            Trusted by Leading Companies;
          </h2>;
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;
        <Carousel className='w - full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],
export /**
 * EnterpriseTestimonials - Function description
 */
function EnterpriseTestimonials() {
  return (
    <section id="testimonials" className="py - 20 px - 4 md:px - 6">;
      <div className="container mx - auto max - w-6xl">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">;
            Trusted by Leading Companies;
          </h2>;
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
            See how enterprise teams are transforming their hiring process;
          </p>;
        </div>;
        <Carousel className='w - full'>;
          <CarouselContent>;
            {testimonials.map ((testimonial, index) => (
              <CarouselItem key={index} className='md:basis - 1/1 lg:basis - 1/1'>;
                <div className='bg - card rounded - xl p - 8 border border - border h - full'>;
                  <Quote className='h - 10 w - 10 text - primary / 20 mb - 4' />;
                  <blockquote className='text - xl mb - 6 italic'>;
            {testimonials.map ((testimonial, index, ) => (
              <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;
                <div className="bg - card rounded - xl p - 8 border border - border h - full">;
                  <Quote className="h - 10 w - 10 text - primary / 20 mb - 4" />;
                  <blockquote className="text - xl mb - 6 italic">;
                    "{testimonial.quote}";
                  </blockquote>;
                  <div className='flex items - center gap - 4'>;
                    <div className='h - 12 w - 12 rounded - full overflow - hidden bg - muted'>;
                      <img;
                        src={testimonial.image}
                        alt={testimonial.author}
                        className='h - full w - full object - cover';
                        loading='lazy'                      />;
                    </div>;
                    <div>;
                      <p className='font - bold'>{testimonial.author}</p>;
                      <p className='text - sm text - muted - foreground'>                        {testimonial.title}, {testimonial.company}                      <p className="font - bold">{testimonial.author}</p>;
                      <p className="text - sm text - muted - foreground">;
                        {testimonial.title}, {testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </CarouselItem>))}
          </CarouselContent>;
          <div className='flex justify - center gap - 2 mt - 8'>            <CarouselPrevious />          <div className="flex justify - center gap - 2 mt - 8">;

            <CarouselPrevious />;
            <CarouselNext />;
          </div>;
        </Carousel>;
      </div>;


  );
}
    </section>);
}

}
;
>>>>>>> main
