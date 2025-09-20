import React from 'react';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { CATEGORIES } from "@/data/categories";

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
            level='h1'
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                count={category.count}
                slug={category.slug}
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}