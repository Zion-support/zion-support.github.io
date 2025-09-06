=======
import {  Carousel,
  Carousel,

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Quote } from 'lucide-react'
import Link from "next/link",
import Image from "next/image",
import { CASE_STUDIES } from "@/data/case-studies",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const testimonials = CASE_STUDIES,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

import {  Carousel,  Carousel
  CarouselContent
  CarouselItem
  CarouselNext
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Quote } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { CASE_STUDIES } from '@/data/case-studies'
const testimonials = CASE_STUDIES
  CarouselPrevious} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CASE_STUDIES } from "@/data/case-studies"
const testimonials = CASE_STUDIES
export function TestimonialCarousel() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover how Zion is transforming the tech and AI marketplace ecosystem
          </p>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


import {  Carousel,  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious,;
} from '@/components/ui/carousel';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CASE_STUDIES } from '@/data/case-studies';
const testimonials = CASE_STUDIES;
  CarouselPrevious} from "@/components/ui/carousel",;
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Quote } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
const testimonials = CASE_STUDIES,;

export function TestimonialCarousel() {;
  return (
    <section className='py-20 bg-zion-blue-dark'>;
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>;
        <div className='text-center mb-12'>;
          <h3 className='text-3xl font-bold text-white mb-3'>;
            What Our Users Say;
          </h3>;
          <p className='text-zion-slate-light text-lg max-w-2xl mx-auto'>;
import {  Carousel,  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components / ui / carousel';
import { Card, CardContent, CardFooter } from '@/components / ui / card';
import { Avatar } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
import { Quote } from 'lucide-react';
import Link from 'next / link';
import Image from 'next / image';
import { CASE_STUDIES } from '@/data / case - studies';
const testimonials = CASE_STUDIES;
  CarouselPrevious} from "@/components / ui / carousel",
import { Card, CardContent, CardFooter  } from '@/components / ui / card';
import { Avatar  } from '@/components / ui / avatar';
import { Button  } from '@/components / ui / button';
import Link from './next / link';
import Image from './next / image';
import { CASE_STUDIES  } from '@/data / case - studies';
const testimonials = CASE_STUDIES,
export /**
 * TestimonialCarousel - Function description
 */
function TestimonialCarousel() {
  return (
    <section className='py - 20 bg - zion - blue - dark'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='text - center mb - 12'>;
          <h3 className='text - 3xl font - bold text - white mb - 3'>;
            What Our Users Say;
          </h3>;
          <p className='text - zion - slate - light text - lg max - w-2xl mx - auto'>;
            Discover how Zion is transforming the tech and AI marketplace;
            ecosystem;
          </p>;
        </div>;

        <div className='max - w-5xl mx - auto px - 8'>;
          <Carousel;

<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className='max-w-5xl mx-auto px-8'>
<<<<<<< HEAD
          <Carousel
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
            opts={{
              align: 'start'
              loop: true
            }}

<<<<<<< HEAD
<<<<<<< HEAD

            className='w - full';
=======
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>
                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>
                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>
                      <div className='flex-shrink-0 flex flex-col items-center'>
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>                          <Image              {testimonials.map((testimonial, index) => (
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        
        <div className="max-w-5xl mx-auto px-8">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          <Carousel
            opts={{
=======
=======
        
        <div className="max-w-5xl mx-auto px-8">
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          <Carousel
            opts={{
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              align: "start",
              loop: true}}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>
                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>
                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>
                      <div className='flex-shrink-0 flex flex-col items-center'>
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>                          <Image              {testimonials.map((testimonial, index) => (
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
<<<<<<< HEAD
<<<<<<< HEAD
=======
                          <Image
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious} from "@/components/ui/carousel",;
import { Card, CardContent, CardFooter } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { Quote } from 'lucide-react';
import Link from "next/link",;
import Image from "next/image",;
import { CASE_STUDIES } from "@/data/case-studies",;
const testimonials = CASE_STUDIES,;
export function TestimonialCarousel() {;
  return (;
    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>;
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
            Discover how Zion is transforming the tech and AI marketplace ecosystem;
          </p>;
        </div>;
        <div className="max-w-5xl mx-auto px-8">;
          <Carousel;
            opts={{;
              align: "start";
              loop: true}}
            className="w-full";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

            className='w - full';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          >;
            <CarouselContent>;
              {testimonials.map ((testimonial, index) => (
                <CarouselItem key={index} className='md:basis - 1/1 lg:basis - 1/1'>;
                  <Card className='bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 40 transition - all duration - 300 flex flex - col'>;
                    <CardContent className='p - 8 flex flex - col md:flex - row gap - 6 flex - 1'>;
                      <div className='flex - shrink - 0 flex flex - col items - center'>;
                        <Avatar className='h - 20 w - 20 border - 2 border - zion - cyan mb - 3'>                          <Image              {testimonials.map ((testimonial, index) => (
                <CarouselItem key={index} className="md:basis - 1/1 lg:basis - 1/1">;
                  <Card className="bg - zion - blue - light border border - zion - purple / 20 hover:border - zion - purple / 40 transition - all duration - 300 flex flex - col">;
                    <CardContent className="p - 8 flex flex - col md:flex - row gap - 6 flex - 1">;
                      <div className="flex - shrink - 0 flex flex - col items - center">;
                        <Avatar className="h - 20 w - 20 border - 2 border - zion - cyan mb - 3">;
                            src={testimonial.avatar}
                            alt={testimonial.author}
            className='w-full'>;
            <CarouselContent>;
              {testimonials && testimonials.map((testimonial, index) => (;
                <CarouselItem key={index} className='md:basis-1/1 lg:basis-1/1'>;
                  <Card className='bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col'>;
                    <CardContent className='p-8 flex flex-col md:flex-row gap-6 flex-1'>;
                      <div className='flex-shrink-0 flex flex-col items-center'>;
                        <Avatar className='h-20 w-20 border-2 border-zion-cyan mb-3'>                          <Image              {testimonials && testimonials.map((testimonial, index) => (;
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">;
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">;
                      <div className="flex-shrink-0 flex flex-col items-center">;
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">;
<<<<<<< HEAD


                            width={80}
                            height={80}

                            loading="lazy"
                          />
                          <Image;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
<<<<<<< HEAD
                            loading='lazy'
                            loading="lazy"
                          />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                        </div>
                      </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
<<<<<<< HEAD
<<<<<<< HEAD
                            className='h-8 w-auto'
                            loading='lazy'
                          <span className='text-white font-semibold'>
                            {testimonial.company}
                          </span>
                            className="h-8 w-auto"
                            loading="lazy"
                          />
                          <span className="text-white font-semibold">{testimonial.company}</span>
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
<<<<<<< HEAD
<<<<<<< HEAD
                    <CardFooter className='p-6 pt-0'>
                      <Button
                        variant='link'
                        className='text-zion-cyan p-0'
                        asChild
                      >
                        <Link href={`/case-studies/${testimonial.slug}`}>
                          Read Case Study →
                        </Link>                      </Button>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
                          />
                          <span className="text-white font-semibold">{testimonial.company}</span>
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee




=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
<<<<<<< HEAD
            <div className='flex justify-center mt-8 gap-2'>
              <CarouselPrevious className='relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />
              <CarouselNext className='relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />            </div>            <div className="flex justify-center mt-8 gap-2">
            <div className="flex justify-center mt-8 gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
          </Carousel>
        </div>
<<<<<<< HEAD
      </div>;
    </section>;
  );
};
      </div>
    </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


            </CarouselContent>;
            <div className='flex justify-center mt-8 gap-2'>;
              <CarouselPrevious className='relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />;
              <CarouselNext className='relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple' />            </div>            <div className="flex justify-center mt-8 gap-2">;
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;

                            loading='lazy';
                        </Avatar>;
                        <div className='text - center md:text - left'>;
                          <p className='font - bold text - zion - cyan'>;
                            {testimonial.author}
                          </p>;
                          <p className='text - zion - slate - light text - sm'>;
                            {testimonial.role}
                          </p>;
<<<<<<< HEAD
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                            className="h-8 w-auto";
                            loading="lazy";
                          />;
                          <span className="text-white font-semibold">{testimonial.company}</span>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                        </div>;
                      </div>;
                      <div className='flex - 1'>;
                        <div className='flex items - center gap - 3 mb - 4'>                          <Image;
                      <div className="flex - 1">;
                        <div className="flex items - center gap - 3 mb - 4">;
=======
                            className="h-8 w-auto";
                            loading="lazy";
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
                          />;
                          <span className="text-white font-semibold">{testimonial.company}</span>;
                        </div>;
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />;
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className="p-6 pt-0">;
                      <Button variant="link" className="text-zion-cyan p-0" asChild>;
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>;
                      </Button>;
                    </CardFooter>;
                  </Card>;
                </CarouselItem>;
              ))}
            </CarouselContent>;
            <div className="flex justify-center mt-8 gap-2">;
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
            </div>;
          </Carousel>;
        </div>;
      </div>;
    </section>;
  );
}
;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
