



import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";""
import {Card, CardContent} from "@/components/ui/card";""
import {Avatar} from "@/components/ui/avatar";""
import {Quote} from "lucide-react";""
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components / ui / carousel';''
import { Card, CardContent } from '@/components / ui / card';''
import { Avatar } from '@/components / ui / avatar';''
import { Quote } from './lucide-react';'
const testimonials = [;

  {'
    quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!"","
  author: "Sarah Chen"""
    role: "CTO, DataMind Solutions";""
    avatar: "https://i.pravatar.cc / 150?img = 32",""
    company: "DataMind"},"
  {"
    quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24 / 7 support is unmatched in the industry.",""
    author: "Michael Rodriguez",""
    role: "IT Director, GlobalTech";""
    avatar: "https://i.pravatar.cc / 150?img = 12",""
    company: "GlobalTech"},"
  {"
    quote: "As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game - changer.";""
    author: "Aanya Patel",""
    role: "Independent AI Consultant",""
    avatar: "https://i.pravatar.cc / 150?img = 28",""
    company: "AI Systems"},"
  {"
    quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure."","
  author: "Thomas Klein"""
    role: "Operations Manager, EcoTech Systems";"
import {
  // TODO: Implement
}
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,"
  CarouselPrevious} from "@/components/ui/carousel",""
import { Card, CardContent } from "@/components/ui/card",""
import { Avatar } from "@/components/ui/avatar",""
import { Quote } from "lucide-react","
const testimonials = [
  {"
    quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!",""
    author: "Sarah Chen",""
    role: "CTO, DataMind Solutions",""
    avatar: "https://i.pravatar.cc/150?img=32",""
    company: "DataMind"},"
  {"
    quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.",""
    author: "Michael Rodriguez",""
    role: "IT Director, GlobalTech",""
    avatar: "https://i.pravatar.cc/150?img=12",""
    company: "GlobalTech"},"
  {"
    quote: "As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.",""
    author: "Aanya Patel",""
    role: "Independent AI Consultant",""
    avatar: "https://i.pravatar.cc/150?img=28",""
    company: "AI Systems"},"
  {"
    quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.",""
    author: "Thomas Klein",""
    role: "Operations Manager, EcoTech Systems",""
    avatar: "https://i.pravatar.cc/150?img=67","]"
    company: "EcoTech"}],"
export function TestimonialCarousel() {
  return ("
    <section className="py-20 bg-zion-blue-dark">"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="text-center mb-12">"
</div>"
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>""
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">"
</p>
          </p>
        </div>"
        <div className="max-w-5xl mx-auto px-8">"
</div>"
    <section className="py-20 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="text-center mb-12">;"
</div>"
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>;""
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="max-w-5xl mx-auto px-8">;"
</div>
          <Carousel;"
    avatar: "https://i.pravatar.cc / 150?img = 67",""
    company: "EcoTech"}],"
export /**
 * TestimonialCarousel - Function description;
 */)
function TestimonialCarousel() {
  return ("
    <section className="py - 20 bg - zion - blue - dark">;"
</Carousel>"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="text - center mb - 12">;"
</div>"
          <h3 className="text - 3xl font - bold text - white mb - 3">What Our Users Say</h3>;""
          <p className="text - zion - slate - light text - lg max - w-2xl mx - auto">;"
</p>
          </p>;
        </div>;"
        <div className="max - w-5xl mx - auto px - 8">;"
</div>
          <Carousel;
            opts={{"
              align: "start"",
  loop: true}}

              loop: true}}"
            className="w-full""
          >
</Carousel>
            <CarouselContent>
</CarouselContent>"
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">"
</CarouselItem>"
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">"
</Card>"
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6">"
</CardContent>"
                      <div className="flex-shrink-0 flex flex-col items-center">"
</div>"
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">"
</Avatar>
                          <img src={testimonial.avatar} alt={testimonial.author} />
</img>
                        </Avatar>"
                        <div className="text-center md:text-left">"
</div>"
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>""
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>"
                        </div>
                      </div>"
                      <div className="flex-1">"
</div>"
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />"
</Quote>"
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>"
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
            </CarouselContent>"
            <div className="flex justify-center mt-8 gap-2">"
</div>"
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />"
</CarouselPrevious>"
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />"
</CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>"
    <section className="py-20 bg-zion-blue-dark">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="text-center mb-12">;"
</div>"
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>;""
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;"
</p>
          </p>;
        </div>;"
        <div className="max-w-5xl mx-auto px-8">;"
</div>
          <Carousel;
            opts={{;"
              align: "start";",
  loop: true}}"
            className="w-full";"
          >;
</Carousel>
            <CarouselContent>;
</CarouselContent>"
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;"
</CarouselItem>"
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">;"
</Card>"
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6">;"
</CardContent>"
                      <div className="flex-shrink-0 flex flex-col items-center">;"
</div>"
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">;"
</Avatar>
                          <img src={testimonial && testimonial.avatar} alt={testimonial && testimonial.author} />;
</img>
                        </Avatar>;"
                        <div className="text-center md:text-left">;"
</div>"
                          <p className="font-bold text-zion-cyan">{testimonial && testimonial.author}</p>;""
                          <p className="text-zion-slate-light text-sm">{testimonial && testimonial.role}</p>;"
                        </div>;
                      </div>;"
                      <div className="flex-1">;"
</div>"
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />;"
</Quote>"
                        <p className="text-white text-lg mb-6">"{testimonial && testimonial.quote}"</p>;"
                      </div>;
                    </CardContent>;
                  </Card>;
                </CarouselItem>;
            </CarouselContent>;"
            <div className="flex justify-center mt-8 gap-2">;"
</div>"
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;"
</CarouselPrevious>"
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;"
</CarouselNext>"
        <div className="max-w-5xl mx-auto px-8">;"
</div>
          <Carousel;
            opts={{;"
              align:"start",;"
              loop:true}}"
            className="w-full";"
          >;
</Carousel>
            <CarouselContent>;
</CarouselContent>"
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">;"
</CarouselItem>"
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">;"
</Card>"
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6">;"
</CardContent>"
                      <div className="flex-shrink-0 flex flex-col items-center">;"
</div>"
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">;"
</Avatar>
                          <img src={testimonial.avatar} alt={testimonial.author} />;
</img>
                        </Avatar>;"
                        <div className="text-center md:text-left">;"
</div>"
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>;""
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>;"
                        </div>;
                      </div>;"
                      <div className="flex-1">;"
</div>"
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />;"
</Quote>"
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>;"
                      </div>;
                    </CardContent>;
                  </Card>;
                </CarouselItem>;
            </CarouselContent>;"
            <div className="flex justify-center mt-8 gap-2">;"
</div>"
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;"
</CarouselPrevious>"
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;"
</CarouselNext>
            </div>;
          </Carousel>;
        </div>;
      </div>;)
    </section>);"