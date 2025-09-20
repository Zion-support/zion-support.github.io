import { CategoryCard } from '@/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading';
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

// Reusing the categories array from CategoriesSection.tsx
const categories = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions and ML expertise',
    icon: <Lightbulb className="h-6 w-6" />,
    link: '/services/ai-ml'
  },
  {
    title: 'Cloud Computing',
    description: 'Scalable cloud infrastructure and services',
    icon: <HardDrive className="h-6 w-6" />,
    link: '/services/cloud-computing'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions and consulting',
    icon: <Briefcase className="h-6 w-6" />,
    link: '/services/cybersecurity'
  },
  {
    title: 'DevOps & Automation',
    description: 'Streamlined development and deployment',
    icon: <Users className="h-6 w-6" />,
    link: '/services/devops'
  }
];

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading>All Categories</GradientHeading>
          <p className='text-zion-cyan mt-4 max-w-2xl mx-auto'>
            Explore our comprehensive range of technology services and solutions.
          </p>
        </div>
        
        <ErrorBoundary>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                // The CategoryCard itself is a Link to its specific category page
                // So we don't pass the category.link to a 'to' prop here directly
                // The 'link' in the categories array above is used by CategoryCard's internal Link
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}