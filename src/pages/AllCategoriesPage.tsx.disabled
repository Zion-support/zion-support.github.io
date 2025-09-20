import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
// Reusing the categories array from CategoriesSection.tsx
// Ideally this would come from a shared data source or API;

const categories = [
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'Custom AI solutions and machine learning services',
    icon: Lightbulb,
    href: '/services/ai-development'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Business intelligence and data visualization',
    icon: HardDrive,
    href: '/services/data-analytics'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Solutions',
    description: 'Decentralized applications and smart contracts',
    icon: Briefcase,
    href: '/services/blockchain'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration',
    icon: Users,
    href: '/services/cloud-services'
  }
];

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