<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Folder } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { SEO } from "@/components/SEO";
import { logErrorToProduction } from "@/utils/productionLogger";

interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  count: number;
}

export default function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setCategories(CATEGORIES);
      setLoading(false);
    } catch (err) {
      logErrorToProduction('Error fetching categories:', err);
      setError('Failed to load categories');
      setLoading(false);
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Categories</h1>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Categories - Zion AI Marketplace"
        description="Browse our comprehensive categories of AI services and solutions"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <GradientHeading
                level="h1"
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Categories
              </GradientHeading>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of AI services and solutions organized by category
              </p>
            </div>

            <ErrorBoundary>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {loading ? (
                  <div className="col-span-full text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading categories...</p>
                  </div>
                ) : (
                  categories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      title={category.name}
                      description={category.description}
                      icon={<Folder className="h-8 w-8" />}
                      href={`/category/${category.slug}`}
                    />
                  ))
                )}
              </div>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
=======
import React from 'react';

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Categories</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
  );
}