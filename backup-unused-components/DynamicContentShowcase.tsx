import React from 'react';
import React, { useState, useEffect } from "react"lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

interface DynamicContentShowcaseProps {
  items?: ContentItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const DynamicContentShowcase: React.FC<DynamicContentShowcaseProps> = ({
  items = [
    {
//       id: ",
//       title: "AI-Powered Solutions"Transform your business with cutting-edge artificial intelligence technology.",
//       image: ",
//       category: "AI Solutions"2",
//       title: ",
//       description:
//         "Seamlessly migrate your infrastructure to the cloud with our expert services."/api/placeholder/400/300",
//       category: ",
    },
    {
//       id: "3"Data Analytics",
//       description:
//         ",
//       image: "/api/placeholder/400/300"Data Services",
    },
//   ],
  autoPlay = true,
  interval = 5000,
  className = "relative overflow-hidden rounded-lg bg-gray-900">
        <div className="w-full flex-shrink-0">
            <div className="space-y-6">
//                 <div>
                  <span className="text-3 xl font-bold text-white mb-4">
                    {currentItem.title}
</h2>
                  <p className="flex space-x-4">
                  <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
//                     Get Started
</button>
</div>
</div>

              <div className="w-full h-64 object-cover rounded-lg"
//                 />
                {currentItem.featured && (
                  <div className="flex items-center justify-between mt-6">
        <div className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
//           >
            <ChevronLeft className="p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
//           >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            )}
</button>
//           <button
            onClick={goToNext}
            className="w-5 h-5" />
</button>
</div>

        {/* Dots indicator */}
        <div className="bg-cyan-500" : "
              }`}
//             />
          ))}
</div>
</div>
</div>
  );
