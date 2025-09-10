
export default function Page(props: any) {
,
  {
    id: 4,"
    name: "James Thompson","
    position: "CEO","
    company: "FinTech Innovations","
    avatar: "/images/testimonials/james-thompson.jpg",
    rating: 5,"
    content: "The AI financial analytics platform has given us unprecedented insights into market trends.Our investment decisions are now data-driven and we've outperformed the market by 25%.","
    industry: "Finance","
    results: ["25% market outperformance", "Real-time analytics", "Risk reduction"],
    verified: tru e
  },
  {
    id: 5,"
    name: "Lisa Park","
    position: "Head of Marketing","
    company: "E-commerce Dynamics","
    avatar: "/images/testimonials/lisa-park.jpg",
    rating: 5,"
    content: "Zion's AI marketing automation tools have revolutionized our customer acquisition.We've seen a 150% increase in conversion rates and 80% reduction in marketing costs.","
    industry: "E-commerce","
    results: ["150% conversion increase", "80% cost reduction", "Personalized campaigns"],
    verified: tru e
  }"
    company: "Healthcare Innovations",;"
import React, { useState } from 'react';
export const TestimonialsSection: React.FC = () => {;
import { _motion, AnimatePresence  } from 'framer-motion';

import { motion } from 'framer-motion';
const testimonials = [];
;
export default function Page(props: any) {;
,;
  {;
    id: 4,";
    name: "James Thompson",";
    position: "CEO",";
    company: "FinTech Innovations",";
    avatar: "/images/testimonials/james-thompson.jpg",;
    rating: 5,";
    content: "The AI financial analytics platform has given us unprecedented insights into market trends.Our investment decisions are now data-driven and we've outperformed the market by 25%.",";
    industry: "Finance",";
    results: ["25% market outperformance", "Real-time analytics", "Risk reduction"],;
    verified: tru e;
  },;
  {;
    id: 5,";
    name: "Lisa Park",";
    position: "Head of Marketing",";
    company: "E-commerce Dynamics",";
    avatar: "/images/testimonials/lisa-park.jpg",;
    rating: 5,";
    content: "Zion's AI marketing automation tools have revolutionized our customer acquisition.We've seen a 150% increase in conversion rates and 80% reduction in marketing costs.",";
    industry: "E-commerce",";
    results: ["150% conversion increase", "80% cost reduction", "Personalized campaigns"],;
    verified: tru e;
  }";
    company: "Healthcare Innovations",;";
export const TestimonialsSection: React.FC = props {
  const [currentTestimonial, setCurrentTestimonial] = useState<typeof 0>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<typeof true>(true);
  const [currentTestimonial, setCurrentTestimonial] = useState<any>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<any>(true) }}};
;
  // Auto - play functionality;
  React.useEffect(() => {;
  // "TODO": "Add dependencies if needed;
  return () => {;
    // Cleanup function;
  "};  // Auto - play functionality
  React.useEffect(() => {
  // TODO: Add dependencies if needed
  return () => {
    // Cleanup function
  };
}, []);, []);
    if(!isAutoPlaying) return}, 5000) ;
    return () => clearInterval(interval) }, [isAutoPlaying, currentTestimonial]) ;
;
  return (";
    <section className="py-20 bg-zion-blue-dark">";
      <div className="container mx-auto px-4">";
        <div className="text-center mb-16">"          <h2 className="text-3xl "md": "tex t-4xl font-bold text-white mb-4">;
            What Our Users Say;
          </h2>";
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">;
            Join thousands of satisfied professionals who trust Zion for their technology needs;
          </p>;
        </div>";
        <div className="grid grid-cols-1 "md": gri d-cols-3 gap-8 max-w-6xl mx-auto">;
          {testimonials.map((testimonial", index) => (;
            <div;
              key={index}";
              className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 "hover": "borde r-zion-purple/50 transition-all duration-300 "hover": transform "hover":scale-105 group";
              {/* Quote icon */"}";
              <div className="mb-4">";
                <Quote className="w-8 h-8 text-zion-cyan opacity-60"   />              </div>;
              {/* Rating */}";
              <div className="flex items-center mb-4"> {[...Array(testimonial.rating)].map((_, i) => (;";  return ("
    <section className="py-20 bg-zion-blue-dark">"
      <div className="container mx-auto px-4">"
        <div className="text-center mb-16">"          <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-4">
            What Our Users Say
          </h2>"
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Join thousands of satisfied professionals who trust Zion for their technology needs
          </p>
        </div>"
        <div className="grid grid-cols-1 md: gri d-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}"
              className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 hover: borde r-zion-purple/50 transition-all duration-300 hover: transform hover:scale-105 group"
              {/* Quote icon */}"
              <div className="mb-4">"
                <Quote className="w-8 h-8 text-zion-cyan opacity-60"   />              </div>
              {/* Rating */}"
              <div className="flex items-center mb-4"> {[...Array(testimonial.rating)].map((_, i) => (;"
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"   />                ))}
              </div>
              {/* Content */}"
              <p className="text-zion-slate-light mb-6 leading-relaxed">"
                "{testimonial.content}"
              </p>
              {/* Author */}"
              <div className="flex items-center">"
                <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>"
                  <div className="text-white font-semibold">{testimonial.name}</div>"
                  <div className="text-zion-slate-light text-sm">{testimonial.role}</div>"
                  <div className="text-zion-cyan text-sm">{testimonial.comp}</div>
                </div>
              </div>
            </div>) ) }
        </div>
        {/* Trust indicators */}"
        <div className="text-center mt-16">"
          <div className="inline-flex items-center space-x-6 bg-zion-blue/50 backdrop-blur-sm border border-zion-cyan/20 rounded-full px-8 py-4">"
            <div className="flex items-center space-x-2">"
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>"
              <span className="text-zion-cyan text-sm font-medium">Verified Reviews</span>
            </div>"
            <div className="w-px h-4 bg-zion-cyan/30"></div>"
            <div className="flex items-center space-x-2">"
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>"
              <span className="text-zion-cyan text-sm font-medium">Real Users</span>
            </div>"
            <div className="w-px h-4 bg-zion-cyan/30"></div>"
            <div className="flex items-center space-x-2">"
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>"
              <span className="text-zion-cyan text-sm font-medium">Recent Feedback</span>
            </div>

