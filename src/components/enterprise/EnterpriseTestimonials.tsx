<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Quote } from 'lucide-react'
import React from 'react'
import { Quote } from 'lucide-react'

import React from "react";
import { Quote } from 'lucide-react'
import React from 'react'
import { Quote } from 'lucide-react'
import {

  Carousel
  CarouselContent
  CarouselItem
  CarouselNext
  CarouselPrevious
} from '@/components/ui/carousel'
const testimonials = [
>>>>>>> origin/clean-error-fixing-automation
    {
        quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.",
        author: "Sarah Johnson",
        title: "VP of Talent Acquisition",
        company: "TechGlobal Inc.",
        image: "/placeholder.svg",
    },
    {
        quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.",
        author: "Michael Chen",
        title: "Director of HR",
        company: "InnovateCorp",
        image: "/placeholder.svg",
    },
    {
        quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
        author: "Elena Rodriguez",
        title: "CTO",
        company: "FutureTech Systems",
        image: "/placeholder.svg",
    },
];
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
        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous."
    author: "Elena Rodriguez"
    title: "CTO"
    company: "FutureTech Systems"
    image: "/placeholder.svg"}]
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {


        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
    company: "FutureTech Systems",
    image: "/placeholder.svg"}],
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {

  Carousel;
  CarouselContent;
  CarouselItem;
  CarouselNext;
  CarouselPrevious} from "@/components/ui/carousel";

        <Carousel className='w-full'>    quote: "The dedicated talent pool makes finding specialized AI engineers much faster than our previous solutions. The ROI has been tremendous.",
    author: "Elena Rodriguez",
    title: "CTO",
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

            <CarouselNext />
          </div>
        </Carousel>
      </div>;
    </section>;
  );
};
}


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

    image: "/placeholder.svg"}];

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (

              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
<<<<<<< HEAD
                  <div className='flex items-center gap-4'>
                    <div className='h-12 w-12 rounded-full overflow-hidden bg-muted'>
                      <img
<<<<<<< HEAD
                        src={testimonial.image}
                        alt={testimonial.author}
                        className='h-full w-full object-cover'
                        loading='lazy'                      />
                    </div>
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious />
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <CarouselNext />
          </div>
        </Carousel>
      </div>;
    </section>;
  );
};
}


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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
=======

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <blockquote className="text-xl mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
<<<<<<< HEAD
import React from 'react';

import React from "react",;
=======


import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Quote } from 'lucide-react';
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
<<<<<<< HEAD
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
;
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
              <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                <div className="bg-card rounded-xl p-8 border border-border h-full">;
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />;
                  <blockquote className="text-xl mb-6 italic">;
                        {testimonial && testimonial.title}, {testimonial && testimonial.company}
                      </p>;
                    </div>;
                  </div>;
                </div>;
              </CarouselItem>;
            ))}
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        <Carousel className="w-full">;
          <CarouselContent>;
            {testimonials.map((testimonial, index) => (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        <Carousel className='w-full'>;
          <CarouselContent>;
            {testimonials && testimonials.map((testimonial, index) => (;
              <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;
                <div className='bg-card rounded-xl p-8 border border-border h-full'>;
                  <Quote className='h-10 w-10 text-primary/20 mb-4' />;
                  <blockquote className='text-xl mb-6 italic'>;
            {testimonials && testimonials.map((testimonial, index,) => (;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          </CarouselContent>;
          <div className="flex justify-center gap-2 mt-8">;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            <CarouselPrevious />;
            <CarouselNext />;
          </div>;
        </Carousel>;
      </div>;
<<<<<<< HEAD
    </section>;
  ),;}
 import { ;
  {;
  {;
  Quote ;
 } from "lucide-react";
import {;
  Carousel;
CarouselContent;
CarouselItem;
CarouselNext;
const testimonials = [ {';
  quote: "Implementing Zion's Enterprise solution has reduced our time-to-hire by 40% and significantly improved the quality of candidates we're seeing.";";
author: "Sarah Johnson";";
title: "VP of Talent Acquisition";";
company: "TechGlobal Inc.";";
image: "/placeholder.svg" ;
};
{";
  quote: "The admin tools give us incredible visibility into our hiring process across multiple departments. Our team loves the custom branding options.";";
author: "Michael Chen";";
title: "Director of HR";";
company: "InnovateCorp";";
image: "/placeholder.svg" ;
};
{;
  export function EnterpriseTestimonials () {";
  return (<section id="testimonials" className="py-20 px-4 md:px-6" > <div className="container mx-auto max-w-6xl" > <div className="text-center mb-12" > <h2 className="text-3xl md:text-4xl font-bold mb-4" > text-xl text-muted-foreground max-w-2xl mx-auto"> See how enterprise teams are transforming their hiring process </p> </div> <Carousel className=" w-full"> <CarouselContent> </blockquote> <div className=" flex items-center gap-4"> <div className=" h-12 w-12 rounded-full overflow-hidden bg-muted"> <img </p> </div> </div> </div> </CarouselItem>) ) ";
}</CarouselContent> <div className=" flex justify-center gap-2 mt-8" > <CarouselPrevious /> <CarouselNext /> </div> </Carousel> </div> </section>) ;
}'"
  )
}
}
;
=======


  );
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </section>);
}

}
<<<<<<< HEAD
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
