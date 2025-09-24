import { CategoryCard } from '../components/CategoryCard';
import { GradientHeading } from '../components/GradientHeading';
// import ErrorBoundary from "../components/GlobalErrorBoundary";
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

// Categories data
const categories = [
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Comprehensive IT solutions for your business',
    icon: '💻',
    count: 12
  },
  {
    id: 'data-storage',
    name: 'Data Storage',
    description: 'Secure and scalable data storage solutions',
    icon: '💾',
    count: 8
  },
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Artificial intelligence and machine learning services',
    icon: '🤖',
    count: 15
  },
  {
    id: 'team-management',
    name: 'Team Management',
    description: 'Tools and services for team collaboration',
    icon: '👥',
    count: 6
  }
];

export default function AllCategoriesPage() {
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <GradientHeading
          title="All Categories"
          subtitle="Explore our comprehensive range of services"
          className="text-center mb-12"
        />
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}