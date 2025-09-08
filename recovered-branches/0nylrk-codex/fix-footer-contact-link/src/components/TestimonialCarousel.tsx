












export function TestimonialCarousel() {;
  return (

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
    <section className="py-20 bg-zion-blue-dark">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="text-center mb-12">;
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>;

          <Carousel









