

import React from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'Outstanding IT services and support. They helped us migrate to the cloud seamlessly.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'SecureNet Ltd.',
      content: 'Their cybersecurity solutions are top-notch. We feel completely protected.',
      rating: 5
    }
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
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
    <section className='py-20 bg-zion-blue-dark'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h3 className='text-3xl font-bold text-white mb-3'>
            What Our Users Say
          </h3>
          <p className='text-zion-slate-light text-lg max-w-2xl mx-auto'>
            Discover how Zion is transforming the tech and AI marketplace
            ecosystem
          </p>
        </div>


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
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/data/case-studies";
const testimonials = CASE_STUDIES;

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
  CarouselPrevious
} from '@/components / ui / carousel';
import { Card, CardContent, CardFooter } from '@/components / ui / card';
import { Avatar } from '@/components / ui / avatar';
import { Button } from '@/components / ui / button';
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

            opts={{
              align: 'start'
              loop: true
            }}


            className='w - full';
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


                            width={80}
                            height={80}

                            loading="lazy"
                          />
                          <Image;


                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}

                            loading="lazy"
                          />

                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                        </div>
                      </div>




                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <Image
                            src={testimonial && testimonial.companyLogo}
                            alt={`${testimonial && testimonial.company} logo`}
                            width={32}
                            height={32}


                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>




                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>


            <div className="flex justify-center mt-8 gap-2">


              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
          </Carousel>
        </div>



      </div>
    </section>


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
                        </div>;
                      </div>;
                      <div className='flex - 1'>;
                        <div className='flex items - center gap - 3 mb - 4'>                          <Image;
                      <div className="flex - 1">;
                        <div className="flex items - center gap - 3 mb - 4">;
                          />;
                        </Avatar>;
                        <div className="text - center md:text - left">;
                          <p className="font - bold text - zion - cyan">{testimonial.author}</p>;
                          <p className="text - zion - slate - light text - sm">{testimonial.role}</p>;
                        </div>;
                      </div>;
                      <div className="flex - 1">;
                        <div className="flex items - center gap - 3 mb - 4">;
                          <Image;
                            src={testimonial.company_logo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className='h - 8 w - auto';
                            loading='lazy';
                          <span className='text - white font - semibold'>;
                            {testimonial.company}
                          </span>;
                        </div>;
                        <Quote className='h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3' />;
                        <p className='text - white text - lg mb - 6'>;
                          "{testimonial.quote}";
                        </p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className='p - 6 pt - 0'>;
                      <Button;
                        variant='link';
                        className='text - zion - cyan p - 0';
                        as_child;
                      >;
                        <Link href={`/case - studies/${testimonial.slug}`}>;
                          Read Case Study →;
                        </Link>                      </Button>;
                    <CardFooter className="p - 6 pt - 0">;
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;
                        <Link href={`/case - studies/${testimonial.slug}`}>Read Case Study →</Link>;
                          />;
                          <span className="text - white font - semibold">{testimonial.company}</span>;
                        </div>;
                        <Quote className="h - 10 w - 10 text - zion - cyan opacity - 30 mb - 3" />;
                        <p className="text - white text - lg mb - 6">"{testimonial.quote}"</p>;
                      </div>;
                    </CardContent>;
                    <CardFooter className="p - 6 pt - 0">;
                      <Button variant="link" className="text - zion - cyan p - 0" as_child>;
                        <Link href={`/case - studies/${testimonial.slug}`}>Read Case Study →</Link>;
                      </Button>;
                    </CardFooter>;
                  </Card>;
                </CarouselItem>))}
            </CarouselContent>;
            <div className='flex justify - center mt - 8 gap - 2'>;
              <CarouselPrevious className='relative static left - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple' />;
              <CarouselNext className='relative static right - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple' />            </div>            <div className="flex justify - center mt - 8 gap - 2">;
              <CarouselPrevious className="relative static left - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover: bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple" />;
              <CarouselNext className="relative static right - 0 translate - y-0 bg - zion - blue - dark border - zion - purple / 30 text - zion - cyan hover:bg - zion - blue - light hover:text - zion - cyan hover:border - zion - purple" />;

            </div>;
          </Carousel>;
        </div>;
      </div>;


  );
}
    </section>);
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
