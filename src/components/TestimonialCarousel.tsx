
<<<<<<< HEAD
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
<<<<<<< HEAD
  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent, CardFooter } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { Quote } from 'lucide-react'
import Link from "next/link",
import Image from "next/image",
import { CASE_STUDIES } from "@/data/case-studies",
const testimonials = CASE_STUDIES,

export function TestimonialCarousel() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
=======
  CarouselPrevious} from &quot;@/components/ui/carousel&quot;;
import { Card, CardContent, CardFooter } from &quot;@/components/ui/card&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Quote } from 'lucide-react'
import Link from &quot;next/link&quot;;
import Image from &quot;next/image&quot;;
import { CASE_STUDIES } from &quot;@/data/case-studies&quot;;
=======
import {_Carousel, _CarouselContent, _CarouselItem, _CarouselNext, _CarouselPrevious} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _testimonials = CASE_STUDIES;

<<<<<<< HEAD
export function TestimonialCarousel() {
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h3 className=&quot;text-3xl font-bold text-white mb-3&quot;>What Our Users Say</h3>
          <p className=&quot;text-zion-slate-light text-lg max-w-2xl mx-auto&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
export function TestimonialCarousel() {_return (_<section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            Discover how Zion is transforming the tech and AI marketplace ecosystem
          </p>
        </div>
        
        <div className=&quot;max-w-5xl mx-auto px-8&quot;>
          <Carousel
            opts={{
<<<<<<< HEAD
              align: &quot;start&quot;,
              loop: true}}
            className=&quot;w-full&quot;
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className=&quot;md:basis-1/1 lg:basis-1/1&quot;>
                  <Card className=&quot;bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col&quot;>
                    <CardContent className=&quot;p-8 flex flex-col md:flex-row gap-6 flex-1&quot;>
                      <div className=&quot;flex-shrink-0 flex flex-col items-center&quot;>
                        <Avatar className=&quot;h-20 w-20 border-2 border-zion-cyan mb-3&quot;>
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
                            loading=&quot;lazy&quot;
                          />
                        </Avatar>
                        <div className=&quot;text-center md:text-left&quot;>
                          <p className=&quot;font-bold text-zion-cyan&quot;>{testimonial.author}</p>
                          <p className=&quot;text-zion-slate-light text-sm&quot;>{testimonial.role}</p>
=======
              align: "start", _loop: true}}
            className="w-full"
          >
            <CarouselContent>
              {_testimonials.map((testimonial, _index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
                          <Image
                            src={_testimonial.avatar}
                            alt={_testimonial.author}
                            width={_80}
                            height={_80}
                            loading="lazy"
                          />
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{_testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{_testimonial.role}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </div>
                      </div>
                      <div className=&quot;flex-1&quot;>
                        <div className=&quot;flex items-center gap-3 mb-4&quot;>
                          <Image
<<<<<<< HEAD
                            src={testimonial.companyLogo}
                            alt={`${testimonial.company} logo`}
                            width={32}
                            height={32}
                            className=&quot;h-8 w-auto&quot;
                            loading=&quot;lazy&quot;
                          />
                          <span className=&quot;text-white font-semibold&quot;>{testimonial.company}</span>
                        </div>
                        <Quote className=&quot;h-10 w-10 text-zion-cyan opacity-30 mb-3&quot; />
                        <p className=&quot;text-white text-lg mb-6&quot;>&quot;{testimonial.quote}&quot;</p>
                      </div>
                    </CardContent>
                    <CardFooter className=&quot;p-6 pt-0&quot;>
                      <Button variant=&quot;link&quot; className=&quot;text-zion-cyan p-0&quot; asChild>
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
=======
                            src={_testimonial.companyLogo}
                            alt={_`${testimonial.company} logo`}
                            width={_32}
                            height={_32}
                            className="h-8 w-auto"
                            loading="lazy"
                          />
                          <span className="text-white font-semibold">{_testimonial.company}</span>
                        </div>
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{_testimonial.quote}"</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button variant="link" className="text-zion-cyan p-0" asChild>
                        <Link href={_`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
<<<<<<< HEAD
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
=======
            <div className=&quot;flex justify-center mt-8 gap-2&quot;>
              <CarouselPrevious className=&quot;relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple&quot; />
              <CarouselNext className=&quot;relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
