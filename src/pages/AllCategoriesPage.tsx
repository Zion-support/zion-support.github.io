import { CategoryCard } from '@/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading';
import ErrorBoundary from '@/components/GlobalErrorBoundary';
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

// Reusing the categories array from CategoriesSection.tsx
// Ideally, this would come from a shared data source or API
const categories = [
  {
    title: 'AI & Machine Learning',
    description: 'Cutting-edge artificial intelligence solutions',
    icon: Lightbulb,
    href: '/services/ai-services',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'IT Infrastructure',
    description: 'Robust and scalable technology infrastructure',
    icon: HardDrive,
    href: '/services/it-services',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Micro SaaS',
    description: 'Specialized software solutions for specific needs',
    icon: Briefcase,
    href: '/services/micro-saas',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Team & Collaboration',
    description: 'Tools and platforms for better teamwork',
    icon: Users,
    href: '/services/team-solutions',
    color: 'from-orange-500 to-red-500'
  }
];

export default function AllCategoriesPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <GradientHeading
            title="All Categories"
            subtitle="Explore our comprehensive range of technology solutions"
            className="text-center mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
                color={category.color}
              />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-gray-300 text-lg mb-6">
              Don't see what you're looking for? We're constantly adding new solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}