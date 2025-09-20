import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
<<<<<<< HEAD
import ErrorBoundary from "@/components/GlobalErrorBoundary";
import Header from "@/components/Header";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
=======
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
// Ideally this would come from a shared data source or API;
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5

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
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading
            level="h1"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            All Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products. Find
            exactly what you're looking for to enhance your business or personal
            projects.
          </p>
        </div>
        <ErrorBoundary>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                icon={category.icon}
                href={`/category/${category.id}`}
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
