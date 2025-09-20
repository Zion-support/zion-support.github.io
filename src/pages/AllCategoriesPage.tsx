<<<<<<< HEAD
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
// Reusing the categories array from CategoriesSection.tsx
// Ideally this would come from a shared data source or API

const categories = [
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    description: 'Artificial intelligence and machine learning solutions',
    icon: <Briefcase className="h-8 w-8" />,
    count: 25
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    description: 'Cloud computing and infrastructure services',
    icon: <HardDrive className="h-8 w-8" />,
    count: 18
  },
  {
    id: 'innovation',
    name: 'Innovation',
    description: 'Cutting-edge technology innovations',
    icon: <Lightbulb className="h-8 w-8" />,
    count: 32
  },
  {
    id: 'talent',
    name: 'Talent',
    description: 'Human resources and talent management',
    icon: <Users className="h-8 w-8" />,
    count: 15
  }
];

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-8'>
        <GradientHeading
          title="All Categories"
          subtitle="Explore our comprehensive range of services and solutions"
          className="text-center mb-12"
        />
        
        <ErrorBoundary>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                className="hover:scale-105 transition-transform duration-200"
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
=======
import React from 'react';
import { SEO } from "@/components/SEO";

export default function AllCategoriesPage() {
  return (
    <>
      <SEO 
        title="AllCategoriesPage - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">AllCategoriesPage</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a1cb
  );
}
