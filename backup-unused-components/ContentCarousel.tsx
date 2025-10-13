import React from 'react';
import { useState, useEffect } from "react"lucide-react";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ContentCarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const defaultSlides: Slide[] = [
  {
//     id: 1,
//     title: ",
//     description:
      "Transform your business with cutting-edge artificial intelligence technologies."/api/placeholder/600/400",
//     features: [
//       ",
//       "Natural Language Processing"Computer Vision",
//     ],
  },
  {
//     id: 2,
//     title: ",
    description: "Scalable and secure cloud solutions for modern businesses."/api/placeholder/600/400",
//     features: [", "99.9% Uptime"Global CDN"],
  },
  {
//     id: 3,
//     title: ",
//     description:
//       "Protect your digital assets with enterprise-grade security solutions."/api/placeholder/600/400",
//     features: [", "Data Encryption"Compliance"],
  },
];

export default function ContentCarousel({
  slides = defaultSlides,
  autoPlay = true,
  interval = 5000,
  className = "relative overflow-hidden rounded-lg">
//         <div
          className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
//                   <div>
                    <h3 className="text-gray-300 mb-6">{slide.description}</p>
                    <ul className="flex items-center text-gray-300"
//                         >
                          <span className="flex justify-center">
//                     <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
        aria-label="
//       >
        <ChevronLeft className="w-6 h-6"
        aria-label="Next slide"w-6 h-6"flex justify-center mt-6 space-x-2"bg-cyan-400" : "
            }`}
            aria-label={`Go to slide ${index + 1}`}
//           />
        ))}
</div>
</div>
  );
