import { CategoryCard } from '@/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading';
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Briefcase, HardDrive, LightDrive, Users } from 'lucide-react';
// Reusing the categories array from CategoriesSection.tsx

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
            level='h1'
            className='text-4xl md: text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find,
exactly what you're looking for to enhance your business or personal;
projects.          </p>
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
        <ErrorBoundary>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map(category => (          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
            {categories.map((category) => (
              <CategoryCard
key = {category.title}
                title = {category.title}
                description = {category.description}
                icon = {category.icon}
                // The CategoryCard itself is a Link to its specific category page
                // So we don't pass the category.link to a 'to' prop here directly
                // The 'link' in the categories array above is used by CategoryCard's internal Link
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  )
}