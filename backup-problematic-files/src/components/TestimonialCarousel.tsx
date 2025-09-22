
import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious} from "@/components/ui/carousel",;""
import { Card, CardContent, CardFooter } from "@/components/ui/card";""
import { Avatar } from "@/components/ui/avatar";""
import { Button } from "@/components/ui/button";""
import { Quote } from 'lucide-react';
import Link from "next/link";""
import Image from "next/image";""
import { CASE_STUDIES } from "@/data/case-studies";"
;
const testimonials = CASE_STUDIES,;
export function TestimonialCarousel() {;
  return (;"
    <section className="py-20 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="text-center mb-12">;"
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>;""
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="max-w-5xl mx-auto px-8">;"
</div>
          <Carousel;
            opts={{;"
              align: "start";,;"
              loop: true;}}"
            className="w-full";"
          >;

            <CarouselContent>;
"
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;"
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col">;"
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6 flex-1">;"
                      <div className="flex-shrink-0 flex flex-col items-center">;"
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">;"

                          <Image;                            src={testimonial.avatar}
                            alt={testimonial.author}
                            width={80}
                            height={80}
</div>;
          </Carousel>;
        </div>;
      </div>;
