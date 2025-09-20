<<<<<<< HEAD
import React from "react";
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
=======
import React from 'react';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

// Categories data
const categories = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions and machine learning models',
    icon: <Lightbulb className="h-8 w-8" />,
    href: '/categories/ai-development'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and deployment',
    icon: <HardDrive className="h-8 w-8" />,
    href: '/categories/cloud-services'
  },
  {
    id: 'business-solutions',
    title: 'Business Solutions',
    description: 'Enterprise-grade business automation tools',
    icon: <Briefcase className="h-8 w-8" />,
    href: '/categories/business-solutions'
  },
  {
    id: 'talent-services',
    title: 'Talent Services',
    description: 'AI-powered talent matching and recruitment',
    icon: <Users className="h-8 w-8" />,
    href: '/categories/talent-services'
>>>>>>> pr-22690
  }
];

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
<<<<<<< HEAD
      <div className='container mx-auto px-4 py-8'>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">All Categories</h1>
          <p className="text-xl text-blue-200">Explore our comprehensive range of services and solutions</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-200">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{category.description}</p>
              <span className="text-sm text-blue-600">{category.count} items</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
=======
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
            level='h1'
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find
            exactly what you're looking for to enhance your business or personal
            projects.
          </p>
        </div>
        <ErrorBoundary>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}
>>>>>>> pr-22690
