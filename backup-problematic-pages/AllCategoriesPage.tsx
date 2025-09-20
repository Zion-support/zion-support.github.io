import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
<<<<<<< HEAD:backup-problematic-pages/AllCategoriesPage.tsx
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
import Header from "@/components/Header";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
// Reusing the categories array from CategoriesSection.tsx
// Ideally this would come from a shared data source or API;

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
<<<<<<< HEAD:backup-problematic-pages/AllCategoriesPage.tsx
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
level='h1'
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find,
exactly what you're looking for to enhance your business or personal,
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
            {categories.map((category) => (<CategoryCard
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
  );
}