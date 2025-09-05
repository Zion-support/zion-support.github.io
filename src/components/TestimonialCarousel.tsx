
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
const testimonials = CASE_STUDIES,

export function TestimonialCarousel() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
const _testimonials = CASE_STUDIES;

export function TestimonialCarousel() {
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h3 className=&quot;text-3xl font-bold text-white mb-3&quot;>What Our Users Say</h3>
          <p className=&quot;text-zion-slate-light text-lg max-w-2xl mx-auto&quot;>
          </p>
        </div>
        
        <div className=&quot;max-w-5xl mx-auto px-8&quot;>
          <Carousel
            opts={{
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
                          <p className=&quot;text-zion-slate-light text-sm&quot;>{testimonial.role}</p>                        </div>
                      </div>
                      <div className=&quot;flex-1&quot;>
                        <div className=&quot;flex items-center gap-3 mb-4&quot;>
                          <Image
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
                        <Link href={`/case-studies/${testimonial.slug}`}>Read Case Study →</Link>                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
