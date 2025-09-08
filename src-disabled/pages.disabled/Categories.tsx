<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/pages/Categories.tsx
:src/pages/Categories.tsx
import useSWR from 'swr',
import { CategoryCard } from "@/components/CategoryCard",
import { GradientHeading } from "@/components/GradientHeading";
import { SkeletonCard  } from '@/components/ui';
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Folder } from 'lucide-react'
import { CATEGORIES  } from '@/data/categories';
import { NextSeo  } from '@/components/NextSeo';
import {logErrorToProduction} from '@/utils/productionLogger';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
:src/pages/Categories.tsx
import useSWR from 'swr,
import { CategoryCard } from "@/components/CategoryCard,
import { GradientHeading } from @/components/GradientHeading";
import { SkeletonCard  } from @/components/ui';
import ErrorBoundary from "@/components/GlobalErrorBoundary;
import { Folder } from 'lucide-react
import { CATEGORIES  } from @/data/categories';
import { NextSeo  } from '@/components/NextSeo;
import {logErrorToProduction} from @/utils/productionLogger';
import useSWR from 'swr;
import { CategoryCard } from @/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading;
import { SkeletonCard } from @/components/ui';
import ErrorBoundary from '@/components/GlobalErrorBoundary;
import { Folder } from lucide-react';
import { CATEGORIES } from '@/data/categories;
import { NextSeo } from @/components/NextSeo';
import { logErrorToProduction } from '@/utils/productionLogger;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import useSWR from 'swr';
import { CategoryCard } from '@/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading';
import { SkeletonCard } from '@/components/ui';
import ErrorBoundary from '@/components/GlobalErrorBoundary';
import { Folder } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { NextSeo } from '@/components/NextSeo';
import { logErrorToProduction } from '@/utils/productionLogger';
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

origin/cursor/automate-test-improve-and-merge-code-2533
interface CategoryType {
  id: string;
  name: string;
  slug: string;
  icon: string

  );

};';
return (<> <NextSeo title="Browse Categories" description="Explore AI service and product categories in the Zion marketplace." /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="text-center mb-12" > <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4" > Browse Categories </GradientHeading> <p className="text-zion-slate-light text-lg max-w-3xl mx-auto" > Explore our extensive range of AI services and products organized by category. Find exactly what you're looking for to enhance your business or personal projects. </p> </div> <ErrorBoundary> <p>Error loading categories: {;
  error.message ;
}</p> <p>Please try again later.</p> </div>) ;
}{;
  categories.map ( (category) => {;
  //Use default folder icon for all categories to avoid large bundle 
}/>) ;
});
}</div>) ;
}</ErrorBoundary> </div> </div> </>) ;
}'"
}

<<<<<<< HEAD
import React from "react"
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";"});"})

=======
const fetcher = null;
  return (
    <>
      <NextSeo
        title="Browse Categories"
        description="Explore AI service and product categories in the Zion marketplace."
      />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products organized by category.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {error && (
            <div className="text-center text-red-500 py-8">
              <p>Error loading categories: {error.message}</p>
              <p>Please try again later.</p>
            </div>
          )}
          {!isLoading && !error && categories.length === 0 && (
            <div className="text-center text-zion-slate-light py-8">
              <p>No categories yet</p>
            </div>
          )}
          {!isLoading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                // Use default folder icon for all categories to avoid large bundle
                return (
                  <CategoryCard
                    key={category.id}
                    title={category.name}
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<Folder className="w-6 h-6" />}
                  />
                )
              })}
            </div>
          )}
        </ErrorBoundary>
      </div>
    </>
  )

      logErrorToProduction('Categories API error:', { data: response.statusText })
      return CATEGORIES as CategoryType[]
    fallbackData: initialCategories})
  const categories = data |[]
  const isLoading = !data && !error

}
import React from "react";
<<<<<<< HEAD
import React from "react"
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";"});"})
=======
import React from react
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";});})
=======
import React from "react"
import { Brain, Cloud, Shield, Code, Database, Network } from "lucide-react";"});"})
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
origin/cursor/automate-test-improve-and-merge-code-2533
}
const Categories: React.FC: = () => {,"
  const categories = []
  return ("
    <div: className = "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">",","
      <div: className="max-w-6xl mx-auto px-4 sm: px-6: lg:px-8: py-16">",";"
        <div: className="text - center mb-12">","
          <h1: className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>","
          <p: className = "text-xl text-gray-600">Explore our comprehensive range of technology services</p>","
        </div>"
        <div: className="grid grid-cols-1 md: grid-cols-2: lg:grid-cols-3: gap-6">"," {categories.map((category, index) => ("
            <div: key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md: transition-shadow">",";"
              <div: className="flex items-center mb-4">","
                <category.icon: className = "h-8 w-8 text-blue-600 mr-3" />",","
                <h2: className="text - xl font-semibold text-gray-900">{category.name}</h2>","
              <p: className = "text-gray-600 mb-4">"," {category.count} services: available in this category
"
const Categories: React.FC = () => {"
  const categories = []
  return ("
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">;"
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,"
        <div className="text-center mb-12">,"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>,"
          <p className = "text-xl text-gray-600">Explore our comprehensive range of technology services</p>
        </div>,"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {categories.map((category, index) => (;"
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow">,"
              <div className = "flex items-center mb-4">,"
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />,"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>;"
              <p className="text-gray-600 mb-4"> {category.count} services available in this category
import { Brain, Cloud, Shield, Code, Database, Network } from 'lucide-react';
const Categories: React.FC = () => {
  const categories = [
    { name: 'AI Services', icon: Brain, count: 25 }, { name: 'Cloud Solutions', icon: Cloud, count: 15 },
    { name: 'Cybersecurity', icon: Shield, count: 12 }, { name: 'Development', icon: Code, count: 18 },
    { name: 'Data Analytics', icon: Database, count: 10 }, { name: 'Infrastructure', icon: Network, count: 8 }
  ]
  return(
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
      <div className='max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Service Categories</h1>
          <p className='text-xl text-gray-600'>Explore our comprehensive range of technology services</p>
        </div>""
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <div key={index} className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow'>
              <div className='flex items-center mb-4'>
                <category.icon className='h-8 w-8 text-blue-600 mr-3' />
                <h2 className='text-xl font-semibold text-gray-900'>{category.name}</h2>
              </div>""
              <p className='text-gray-600 mb-4'>
                {category.count} services available in this category
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
              </p>
              <a>
                href = {"/services ? category=${category.name.toLowerCase().replace(" ", "-")}"}">
                className="text-blue-600 hover : text-blue-700 font-medium">
                View Services →
              </a>
          ))}"lucide-react";&apos;&apos
const Categories: React.FC = () => {}
  const;const categories = [
    { name: &apos,AI Services&apos, icon: Brain, count: 25 } { name: &apos,Cloud Solutions&apos, icon: Cloud, count: 15 } { name: &apos,Cybersecurity&apos, icon: Shield, count: 12 } { name: &apos,Development&apos, icon: Code, count: 18 } { name: &apos,Data Analytics&apos, icon: Database, count: 10 } { name: &apos,Infrastructure&apos, icon: Network, count: 8 }
  return(&apos;"
    <div className="&apos;min-h-screen" bg-gradient-to-br from-slate-50 to-blue-50&apos;>&apos,"
      <div className="&apos;max-w-6xl" mx-auto px-4 sm: px-6 lg:px-8 py-16&apos,>&apos,"
        <div className="&apos;text-center" mb-12&apos;>&apos,"
          <h1 className="&apos;text-4xl" font-bold text-gray-900 mb-4&apos;>Service Categories&apos,</h1>"
          <p className="&apos;text-xl" text-gray-600&apos;>Explore our comprehensive range of technology services&apos,</p>"
        <div className = "&apos,grid" grid-cols-1 md:grid-cols-2 l,g: grid-cols-3 gap-6&apos,>
          {categories.map((category, index) => (&apos}"
            <div key="{index}" className="&apos;bg-white" rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow&apos,>&apos,"
              <div className="&apos;flex" items-center mb-4&apos;>&apos,"
                <category.icon className="&apos;h-8" w-8 text-blue-600 mr-3&apos; />&apos,"
                <h2 className="&apos,text-xl" font-semibold text-gray-900&apos,>{category.name}&apos </h2>"
              <p className="&apos;text-gray-600" mb-4&apos;>
                {category.count} services available in this category&apos
  const categories = ["
    { nam,"
    e: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 },"
  const categories = ["
    { name: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 },"
    { name: "Cybersecurity", icon: Shield, count: 12 } { name: "Development", icon: Code, count: 18 }
    { name: "Data Analytics", icon: Database, count: 10 } { name: "Infrastructure", icon: Network, count: 8 }"
  return("
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">"
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16">"
        <div className="text-center mb-12">"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>"
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>"
        </div>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
          {categories.map((category, index) => ("
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow">"
              <div className="flex items-center mb-4">"
                <category .icon className="h-8 w-8 text-blue-600 mr-3" /">"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>"
              <p className="text-gray-600 mb-4">
                {category.count} services available in this category
              </p>"
              <a"
                href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"}
  const categories = ["
    { name: "AI Services", icon: Brain, count: 25 } { name: "Cloud Solutions", icon: Cloud, count: 15 } { name: "Cybersecurity", icon: Shield, count: 12 } { name: "Development", icon: Code, count: 18 } { name: "Data Analytics", icon: Database, count: 10 } { name: "Infrastructure", icon: Network, count: 8 }"
  return("
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50>"
      <div className="max-w-6xl mx-auto px-4 sm: px-6 lg:px-8 py-16>"
        <div className="text-center mb-12>"
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h1>"
          <p className="text-xl text-gray-600">Explore our comprehensive range of technology services</p>"
        <div className="grid grid-cols-1 m>
    d:grid-cols-2 l,"
    g: grid-cols-3 gap-6">"
          {categories.map((category, index) => ("
            <div key="{index}" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover: shadow-md transition-shadow>"
              <div className="flex items-center mb-4>"
                <category.icon className="h-8 w-8 text-blue-600 mr-3" />"
                <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
              <a"
                href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"}"">
              <a href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"} className="text-blue-600 hover: text-blue-700 font-medium">"
              <a href={"/services?category=${category.name.toLowerCase().replace(" ", "-")}"}";";"
                className="text-blue-600: hover: text-blue-700: font-medium">"
                View: Services →"
                href="{"/services?category=${category.name.toLowerCase().replace(&apos," &apos, &apos;-&apos)}"}"
                className="&apos;text-blue-600" hover: text-blue-700 font-medium&apos,>
                View Services →&apos,&apos
              <a
                href = {"/services?category=${category.name.toLowerCase().replace(" ,-")}"}
                className="text-blue-600 hover: text-blue-700 font-medium">
                View Services →
              </a>
    <,</div>"
  )}""
export default Categories""
"
  )}
<<<<<<< HEAD
:src_backup/pages/Categories.tsx
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

export: default Categories
export default Categories," ]
export default Categories"")))))))))
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
:src_backup/pages/Categories.tsx
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
:src/pages/Categories.tsx
import useSWR from 'swr',;
import { CategoryCard } from "@/components/CategoryCard",;
import { GradientHeading } from "@/components/GradientHeading",;
import { SkeletonCard } from '@/components/ui',;
import ErrorBoundary from "@/components/GlobalErrorBoundary",;
import { Folder } from 'lucide-react';
import { CATEGORIES } from '@/data/categories',;
import { NextSeo } from '@/components/NextSeo',;
import {logErrorToProduction} from '@/utils/productionLogger',;
interface CategoryType {;
  id: string,;
  name: string,;
  slug: string,;
  icon: string;
}
;
const fetcher = async (url: string): Promise<CategoryType[]> => {;
  try {;
    const response = await fetch(url),;
    if (!response.ok) {;
      logErrorToProduction('Categories API error:', { data: response.statusText }),;
      return CATEGORIES as CategoryType[];
    }
    const data = await response.json(),;
    return Array.isArray(data) && data.length > 0 ? data : CATEGORIES as CategoryType[];
  } catch (err) {;
    logErrorToProduction('Categories API fetch failed:', { data: err }),;
    return CATEGORIES as CategoryType[];
  }
},;
export interface CategoriesProps {;
  categories?: CategoryType[];
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  return (
    <>
      <NextSeo
        title="Browse Categories"
        description="Explore AI service and product categories in the Zion marketplace."
      />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products organized by category.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>;
          )}
          {error && (
            <div className="text-center text-red-500 py-8">
              <p>Error loading categories: {error.message}</p>
              <p>Please try again later.</p>
            </div>
          )}
          {!isLoading && !error && categories.length === 0 && (
            <div className="text-center text-zion-slate-light py-8">
              <p>No categories yet</p>
            </div>
          )}
          {!isLoading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                // Use default folder icon for all categories to avoid large bundle
                return (
                  <CategoryCard
                    key={category.id}
                    title={category.name}
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<Folder className="w-6 h-6" />}
                  />
                )
              })}
            </div>;
          )}
        </ErrorBoundary>;
      </div>;
    </>;
  );
}
;
origin/cursor/automate-test-improve-and-merge-code-2533
export default Categories"`"
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
origin/cursor/automate-test-improve-and-merge-code-2533
export default Categories"`"
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/cursor/delete-old-data-records-6bba
