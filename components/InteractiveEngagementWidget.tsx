<<<<<<< HEAD
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EngagementData {
  visitors: number;
  timeOnSite: number;
  bounceRate: number;
  conversionRate: number;
}

export default function InteractiveEngagementWidget() {
  const [isVisiblesetIsVisible] = useState(false);
  const [engagementDatasetEngagementData] = useState<EngagementData>({
    visitors: 0,
    timeOnSite: 0,
    bounceRate: 0,
    conversionRate: 0
  });
  const [currentTestimonialsetCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO",
      content: "Zion Tech 'Group', 's AI solutions increased our efficiency by 400% and ROI by 2,500% in just 6 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "InnovateLabs",
      role: "CTO",
      content: "The breakthrough technologies they implemented transformed our entire operation. Absolutely revolutionary!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FutureTech Solutions",
      role: "VP of Operations",
      content: "We achieved 10,000% ROI using their AI 2025 breakthrough solutions. Game-changing results!",
      rating: 5
    }
  ];

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setEngagementData((prev: EngagementData) => ({
        visitors: prev.visitors + Math.floor(Math.random() * 3) + 1,
        timeOnSite: Math.max(0prev.timeOnSite + (Math.random() - 0.5) * 10),
        bounceRate: Math.max(0Math.min(100prev.bounceRate + (Math.random() - 0.5) * 2)),
        conversionRate: Math.max(0Math.min(100prev.conversionRate + (Math.random() - 0.5) * 1))
      }));
    }2000);

    // Rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev: number) => (prev + 1) % testimonials.length);
    }5000);

    return () => {
      clearInterval(interval);
      clearInterval(testimonialInterval);
    };
  }[testimonials.length]);

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }3000);

    return () => clearTimeout(timer);
  }[]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 left-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-sm z-40"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-gray-800">Live Engagement</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 text-xs"
        >
          ✕
        </button>
      </div>

      {/* Real-time metrics */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center">
          <div className="text-lg font-bold text-blue-600">{engagementData.visitors.toLocaleString()}</div>
          <div className="text-xs text-gray-500">Active Visitors</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-600">{engagementData.timeOnSite.toFixed(1)}m</div>
          <div className="text-xs text-gray-500">Avg. Time</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-orange-600">{engagementData.bounceRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-500">Bounce Rate</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-purple-600">{engagementData.conversionRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-500">Conversion</div>
        </div>
      </div>

      {/* Rotating testimonials */}
      <div className="border-t pt-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0x: 20 }}
            animate={{ opacity: 1x: 0 }}
            exit={{ opacity: 0x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs text-gray-600 mb-2">
              "{testimonials[currentTestimonial].content}"
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs font-semibold text-gray-800">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonials[currentTestimonial].role}{testimonials[currentTestimonial].company}
                </div>
              </div>
              <div className="flex">
                {[...Array(testimonials[currentTestimonial].rating)].map((_i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Call to action */}
      <div className="mt-3 pt-3 border-t">
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs py-2 px-3 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          Join {engagementData.visitors.toLocaleString()}+ Successful Clients
        </button>
      </div>
    </motion.div>
  );
}
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
