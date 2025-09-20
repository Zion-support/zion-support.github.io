import React from 'react';
import useSWR from 'swr';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import { SkeletonCard } from "@/components/ui";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Folder } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { NextSeo } from "@/components/NextSeo";
import { logErrorToProduction } from '@/utils/productionLogger';

interface CategoryType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  slug: string;
}

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  } catch (error) {
    logErrorToProduction('Error fetching categories', error);
    return CATEGORIES; // Fallback to static data
  }
};

export default function Categories() {
  const { data: categories, error, isLoading } = useSWR<CategoryType[]>('/api/categories', fetcher);

  if (error) {
    return (
      <div className="min-h-screen bg-zion-blue flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Error Loading Categories</h1>
          <p>Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <NextSeo 
        title="Categories - Zion AI Marketplace" 
        description="Browse our comprehensive categories of AI services and products"
      />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading className="text-4xl md:text-5xl font-bold mb-4">
              Categories
            </GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of AI services and products organized by category
            </p>
          </div>

          <ErrorBoundary>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <SkeletonCard key={index} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categories?.map((category) => (
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
            )}
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}