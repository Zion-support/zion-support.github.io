




import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar} from "@/components/ui/avatar";
import {Quote} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components / ui / carousel';
import { Card, CardContent } from '@/components / ui / card';
import { Avatar } from '@/components / ui / avatar';
import { Quote } from './lucide-react';
const testimonials = [;
  {
    quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!"
    author: "Sarah Chen"
    role: "CTO, DataMind Solutions";
    avatar: "https://i.pravatar.cc / 150?img = 32",
    company: "DataMind"},
  {
    quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24 / 7 support is unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "IT Director, GlobalTech";
    avatar: "https://i.pravatar.cc / 150?img = 12",
    company: "GlobalTech"},
  {
    quote: "As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game - changer.";
    author: "Aanya Patel",
    role: "Independent AI Consultant",
    avatar: "https://i.pravatar.cc / 150?img = 28",
    company: "AI Systems"},
  {
    quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure."
    author: "Thomas Klein"
    role: "Operations Manager, EcoTech Systems";


const testimonials = [
  {
    quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!",
    author: "Sarah Chen",
    role: "CTO, DataMind Solutions",
    avatar: "https://i.pravatar.cc/150?img=32",
    company: "DataMind"},
  {
    quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "IT Director, GlobalTech",
    avatar: "https://i.pravatar.cc/150?img=12",
    company: "GlobalTech"},
  {
    quote: "As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.",
    author: "Aanya Patel",
    role: "Independent AI Consultant",
    avatar: "https://i.pravatar.cc/150?img=28",
    company: "AI Systems"},
  {
    quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.",
    author: "Thomas Klein",
    role: "Operations Manager, EcoTech Systems",
    avatar: "https://i.pravatar.cc/150?img=67",
    company: "EcoTech"}],

import {;
  Carousel,;
  CarouselContent,;
  CarouselItem,;
  CarouselNext,;
  CarouselPrevious} from "@/components/ui/carousel",;
import { Card, CardContent } from "@/components/ui/card",;
import { Avatar } from "@/components/ui/avatar",;
import { Quote } from "lucide-react",;
;
const testimonials = [;
  {;
    quote:"Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!",;
    author:"Sarah Chen",;
    role:"CTO, DataMind Solutions",;
    avatar:"https://i.pravatar.cc/150?img=32",;
    company:"DataMind"},;
  {;
    quote:"The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.",;
    author:"Michael Rodriguez",;
    role:"IT Director, GlobalTech",;
    avatar:"https://i.pravatar.cc/150?img=12",;
    company:"GlobalTech"},;
  {;
    quote:"As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.",;
    author:"Aanya Patel",;
    role:"Independent AI Consultant",;
    avatar:"https://i.pravatar.cc/150?img=28",;
    company:"AI Systems"},;
  {;
    quote:"Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.",;
    author:"Thomas Klein",;
    role:"Operations Manager, EcoTech Systems",;
    avatar:"https://i.pravatar.cc/150?img=67",;
    company:"EcoTech"}],;
;
export function TestimonialCarousel() {;
  return (;

export function TestimonialCarousel() {;
  return (    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>;
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
            Discover how Zion is transforming the tech and AI marketplace ecosystem;
          </p>;
        </div>;
        <div className="max-w-5xl mx-auto px-8">;          <Carousel
    avatar: "https://i.pravatar.cc / 150?img = 67",
    company: "EcoTech"}],
export /**
 * TestimonialCarousel - Function description
 */
function TestimonialCarousel() {
  return (
    <section className="py - 20 bg - zion - blue - dark">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="text - center mb - 12">;
          <h3 className="text - 3xl font - bold text - white mb - 3">What Our Users Say</h3>;
          <p className="text - zion - slate - light text - lg max - w-2xl mx - auto">;
            Discover how Zion is transforming the tech and AI marketplace ecosystem;
          </p>;
        </div>;
        <div className="max - w-5xl mx - auto px - 8">;
          <Carousel;
              loop: true}}

};

}
};

};

            </CarouselContent>;
            <div className="flex justify-center mt-8 gap-2">;
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover: bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />;
;
    </section>;
  );}
 const testimonials = [ {
  quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!";
author: "Sarah Chen";
role: "CTO, DataMind Solutions";
avatar: "https://i.pravatar.cc/150?img=32";
company: "DataMind" 
};
{
  quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.";
author: "Michael Rodriguez";
role: "IT Director, GlobalTech";
avatar: "https://i.pravatar.cc/150?img=12";
company: "GlobalTech" 
};
{
  quote: "As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.";
author: "Aanya Patel";
role: "Independent AI Consultant";
avatar: "https://i.pravatar.cc/150?img=28";
company: "AI Systems" 
};
{
  export function TestimonialCarousel () {
  return (<section className="py-20 bg-zion-blue-dark" > <div className="container mx-auto px-4 sm:px-6 lg:px-8" > <div className="text-center mb-12" > <h3 className="text-3xl font-bold text-white mb-3" >What Our Users Say</h3> <p className="text-zion-slate-light text-lg max-w-2xl mx-auto" > max-w-5xl mx-auto px-8" > <Carousel opts= {
  {
  </div> </CardContent> </Card> </CarouselItem>) ) 
}</CarouselContent> </div> </Carousel> </div> </div> </section>) 
}
    </section>;
  );
}
;
;
}



;
