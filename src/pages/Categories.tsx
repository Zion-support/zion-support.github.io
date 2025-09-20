import React from 'react';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import { Folder } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description: "Advanced AI solutions and machine learning services",
    icon: "🧠",
    serviceCount: 25
  },
  {
    id: 2,
    name: "Technology",
    slug: "technology",
    description: "Cutting-edge technology solutions and innovations",
    icon: "💻",
    serviceCount: 18
  },
  {
    id: 3,
    name: "Business Solutions",
    slug: "business-solutions",
    description: "Comprehensive business transformation services",
    icon: "🏢",
    serviceCount: 32
  }
];

export default function Categories() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading
            level="h1"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Service Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of AI and technology services organized by category.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-center text-sm text-blue-400">
                  <Folder className="w-4 h-4 mr-1" />
                  {category.serviceCount} services
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}