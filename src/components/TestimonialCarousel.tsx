import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion Tech transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and their support team is exceptional.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "CEO",
      content: "The cybersecurity solutions provided by Zion Tech are top-notch. We've had zero security incidents since implementing their systems.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "DataFlow Inc",
      role: "Data Director",
      content: "Their cloud migration services were seamless. We saved 40% on infrastructure costs while improving performance significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Kim",
      company: "FutureTech",
      role: "VP Engineering",
      content: "Zion Tech's digital transformation approach helped us modernize our legacy systems without any downtime. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < currentTestimonial.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
            "{currentTestimonial.content}"
          </blockquote>
        </div>
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


        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? 'bg-blue-600'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
