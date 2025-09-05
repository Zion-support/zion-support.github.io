
<<<<<<< HEAD
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
<<<<<<< HEAD
  CarouselPrevious} from "@/components/ui/carousel",
import { Card, CardContent } from "@/components/ui/card",
import { Avatar } from "@/components/ui/avatar",
import { Quote } from "lucide-react",
=======
  CarouselPrevious} from &quot;@/components/ui/carousel&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Avatar } from &quot;@/components/ui/avatar&quot;;
import { Quote } from &quot;lucide-react&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const testimonials = [
  {
    quote: &quot;Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!&quot;,
    author: &quot;Sarah Chen&quot;,
    role: &quot;CTO, DataMind Solutions&quot;,
    avatar: &quot;https://i.pravatar.cc/150?img=32&quot;,
    company: &quot;DataMind&quot;},
  {
    quote: &quot;The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.&quot;,
    author: &quot;Michael Rodriguez&quot;,
    role: &quot;IT Director, GlobalTech&quot;,
    avatar: &quot;https://i.pravatar.cc/150?img=12&quot;,
    company: &quot;GlobalTech&quot;},
  {
    quote: &quot;As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.&quot;,
    author: &quot;Aanya Patel&quot;,
    role: &quot;Independent AI Consultant&quot;,
    avatar: &quot;https://i.pravatar.cc/150?img=28&quot;,
    company: &quot;AI Systems&quot;},
  {
<<<<<<< HEAD
    quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.",
    author: "Thomas Klein",
    role: "Operations Manager, EcoTech Systems",
    avatar: "https://i.pravatar.cc/150?img=67",
    company: "EcoTech"}],
=======
    quote: &quot;Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.&quot;,
    author: &quot;Thomas Klein&quot;,
    role: &quot;Operations Manager, EcoTech Systems&quot;,
    avatar: &quot;https://i.pravatar.cc/150?img=67&quot;,
    company: &quot;EcoTech&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export function TestimonialCarousel() {
  return (
    <section className=&quot;py-20 bg-zion-blue-dark&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <h3 className=&quot;text-3xl font-bold text-white mb-3&quot;>What Our Users Say</h3>
          <p className=&quot;text-zion-slate-light text-lg max-w-2xl mx-auto&quot;>
=======
import {_Carousel, _CarouselContent, _CarouselItem, _CarouselNext, _CarouselPrevious} from "@/components/ui/carousel";

const _testimonials = [
  {_quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!", _author: "Sarah Chen", _role: "CTO, _DataMind Solutions", _avatar: "https://i.pravatar.cc/150?img=32", _company: "DataMind"},
  {_quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.", _author: "Michael Rodriguez", _role: "IT Director, _GlobalTech", _avatar: "https://i.pravatar.cc/150?img=12", _company: "GlobalTech"},
  {_quote: "As an AI developer, _Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.", _author: "Aanya Patel", _role: "Independent AI Consultant", _avatar: "https://i.pravatar.cc/150?img=28", _company: "AI Systems"},
  {_quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.", _author: "Thomas Klein", _role: "Operations Manager, _EcoTech Systems", _avatar: "https://i.pravatar.cc/150?img=67", _company: "EcoTech"}];

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
                  <Card className=&quot;bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300&quot;>
                    <CardContent className=&quot;p-8 flex flex-col md:flex-row gap-6&quot;>
                      <div className=&quot;flex-shrink-0 flex flex-col items-center&quot;>
                        <Avatar className=&quot;h-20 w-20 border-2 border-zion-cyan mb-3&quot;>
                          <img src={testimonial.avatar} alt={testimonial.author} />
                        </Avatar>
                        <div className=&quot;text-center md:text-left&quot;>
                          <p className=&quot;font-bold text-zion-cyan&quot;>{testimonial.author}</p>
                          <p className=&quot;text-zion-slate-light text-sm&quot;>{testimonial.role}</p>
                        </div>
                      </div>
                      <div className=&quot;flex-1&quot;>
                        <Quote className=&quot;h-10 w-10 text-zion-cyan opacity-30 mb-3&quot; />
                        <p className=&quot;text-white text-lg mb-6&quot;>&quot;{testimonial.quote}&quot;</p>
=======
              align: "start", _loop: true}}
            className="w-full"
          >
            <CarouselContent>
              {_testimonials.map((testimonial, _index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
                          <img src={_testimonial.avatar} alt={_testimonial.author} />
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{_testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{_testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{_testimonial.quote}"</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </CardContent>
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
