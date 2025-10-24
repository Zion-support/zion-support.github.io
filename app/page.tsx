"use client";
import React from "react";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react';
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Advanced AI and IT solutions for modern businesses
        </p>
        <div className="space-x-4">
          <a 
            href="/about" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
          <a 
            href="/contact" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}