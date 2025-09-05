<<<<<<< HEAD
import useSWR from 'swr',;
import { CategoryCard } from "@/components/CategoryCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { SkeletonCard } from '@/components/ui',;
import ErrorBoundary from "@/components/GlobalErrorBoundary",;
import { Folder } from 'lucide-react';
import { CATEGORIES } from '@/data/categories',;
import { NextSeo } from '@/components/NextSeo',;
import {logErrorToProduction} from '@/utils/productionLogger',;
;
;
interface CategoryType {;
  id:string,;
  name:string,;
  slug:string,;
  icon:string;
}
;
const fetcher = async (url:string):Promise<CategoryType[]> => {;
  try {;
    const response = await fetch(url),;
    if (!response.ok) {;
      logErrorToProduction('Categories API error:', { data:response.statusText }),;
      return CATEGORIES as CategoryType[],;
    }
    const data = await response.json(),;
    return Array.isArray(data) && data.length > 0 ? data :CATEGORIES as CategoryType[],;
  } catch (err) {;
    logErrorToProduction('Categories API fetch failed:', { data:err }),;
    return CATEGORIES as CategoryType[],;
  }
},;
;
export interface CategoriesProps {;
  categories?:CategoryType[],;
}
;
export default function Categories({ categories:initialCategories = [] } CategoriesProps) {;
  const { data, error } = useSWR<CategoryType[]>('/api/categories', fetcher, {;
    fallbackData:initialCategories}),;
  const categories = data || [],;
  const isLoading = !data && !error,;
;
  return (;
    <>;
      <NextSeo;
        title="Browse Categories";
        description="Explore AI service and product categories in the Zion marketplace.";
      />;
      <div className="min-h-screen bg-zion-blue">;
        <div className="container mx-auto px-4 py-12">;
          <div className="text-center mb-12">;
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">;
              Browse Categories;
          </GradientHeading>;
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">;
            Explore our extensive range of AI services and products organized by category.;
            Find exactly what you're looking for to enhance your business or personal projects.;
          </p>;
        </div>;
;
        <ErrorBoundary>;
          {isLoading && (;
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">;
              {Array.from({ length:4 }).map((_, index) => (;
                <SkeletonCard key={index} />;
=======
import useSWR from 'swr',
import { CategoryCard } from "@/components/CategoryCard",
import { GradientHeading } from "@/components/GradientHeading",
import { SkeletonCard } from '@/components/ui',
import ErrorBoundary from "@/components/GlobalErrorBoundary",import { Folder } from 'lucide-react'
import { CATEGORIES } from '@/data/categories',
import { NextSeo } from '@/components/NextSeo',
import {logErrorToProduction} from '@/utils/productionLogger',
interface CategoryType {
  id: string,
  name: string,
  slug: string,
  icon: string
}

const fetcher = async (url: string): Promise<CategoryType[]> => {
  try {
    const response = await fetch(url),
    if (!response.ok) {
      logErrorToProduction('Categories API error:', { data: response.statusText }),
      return CATEGORIES as CategoryType[]
    }
    const data = await response.json(),
    return Array.isArray(data) && data.length > 0 ? data : CATEGORIES as CategoryType[]
  } catch (err) {
    logErrorToProduction('Categories API fetch failed:', { data: err }),
    return CATEGORIES as CategoryType[]
import ErrorBoundary from "@/components/GlobalErrorBoundary";

interface CategoryType {_id: string;
  name: string;
  slug: string;
  icon: string;}

const _fetcher = async (url: string): Promise<CategoryType[]> => {_try {
    const _response = await fetch(url);
    if (!response.ok) {
      logErrorToProduction('Categories API error:', _{ data: response.statusText});
      return CATEGORIES as CategoryType[];
    }
    const _data = await response.json();
    return Array.isArray(data) && data.length > 0 ? data : CATEGORIES as CategoryType[];
  } catch (err) {_logErrorToProduction('Categories API fetch failed:', _{ data: err});
    return CATEGORIES as CategoryType[];
  }
},

export interface CategoriesProps {
  categories?: CategoryType[]
}

export default function Categories({ categories: initialCategories = [] }: CategoriesProps) {
  const { data, error } = useSWR<CategoryType[]>('/api/categories', fetcher, {
    fallbackData: initialCategories}),
  const categories = data || [],
  const isLoading = !data && !error,
  return (
    <>
      <NextSeo
        title=&quot;Browse Categories&quot;
        description=&quot;Explore AI service and product categories in the Zion marketplace.&quot;
      />
      <div className=&quot;min-h-screen bg-zion-blue&quot;>
        <div className=&quot;container mx-auto px-4 py-12&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <GradientHeading level=&quot;h1&quot; className=&quot;text-4xl md:text-5xl font-bold mb-4&quot;>
              Browse Categories
          </GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;>
            Explore our extensive range of AI services and products organized by category.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          {isLoading && (
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6&quot; data-testid=&quot;skeleton-loader&quot;>
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          )}
<<<<<<< HEAD
          {error && (;
            <div className="text-center text-red-500 py-8">;
              <p>Error loading categories:{error.message}</p>;
              <p>Please try again later.</p>;
            </div>;
          )}
          {!isLoading && !error && categories.length === 0 && (;
            <div className="text-center text-zion-slate-light py-8">;
              <p>No categories yet</p>;
            </div>;
          )}
          {!isLoading && !error && categories.length > 0 && (;
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">;
              {categories.map((category) => {;
                // Use default folder icon for all categories to avoid large bundle;
                return (;
                  <CategoryCard;
                    key={category.id}
                    title={category.name}
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<Folder className="w-6 h-6" />}
                  />;
                ),;
=======
          {error && (
            <div className=&quot;text-center text-red-500 py-8&quot;>              <p>Error loading categories: {error.message}</p>
              <p>Please try again later.</p>
            </div>
          )}
          {!isLoading && !error && categories.length === 0 && (
            <div className=&quot;text-center text-zion-slate-light py-8&quot;>
              <p>No categories yet</p>
            </div>
          )}
          {!isLoading && !error && categories.length > 0 && (
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6&quot;>              {categories.map((category) => {
                // Use default folder icon for all categories to avoid large bundle
                return (
                  <CategoryCard
                    key={category.id}
                    title={category.name}
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<Folder className=&quot;w-6 h-6&quot; />}                  />
                )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              })}
            </div>;
          )}
<<<<<<< HEAD
        </ErrorBoundary>;
      </div>;
    </div>;
    </>;
  ),;
=======
        </ErrorBoundary>
      </div>
    </div>
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
