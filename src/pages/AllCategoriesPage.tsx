<<<<<<< HEAD
<<<<<<< HEAD
import { CategoryCard } from "@/components/CategoryCard",
import { GradientHeading } from "@/components/GradientHeading",
import ErrorBoundary from "@/components/GlobalErrorBoundary", // Import ErrorBoundary
=======
import { CategoryCard } from &quot;@/components/CategoryCard&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import ErrorBoundary from &quot;@/components/GlobalErrorBoundary&quot;; // Import ErrorBoundary
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'

// Reusing the categories array from CategoriesSection.tsx
// Ideally, this would come from a shared data source or API
const categories = [
  {
    title: &quot;Services&quot;,
    description: &quot;On-demand IT support, consulting, development, and more&quot;,
    icon: <Briefcase className=&quot;w-10 h-10&quot; />,
    link: &quot;/services&quot;, // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  },
  {
    title: &quot;Talents&quot;,
    description: &quot;Connect with AI experts, developers, and tech specialists&quot;,
    icon: <Users className=&quot;w-10 h-10&quot; />,
    link: &quot;/talent&quot;, // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  },
  {
    title: &quot;Equipment&quot;,
    description: &quot;Rent or buy specialized hardware, servers, and devices&quot;,
    icon: <HardDrive className=&quot;w-10 h-10&quot; />,
    link: &quot;/equipment&quot;, // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  },
  {
    title: &quot;Innovation&quot;,
    description: &quot;Discover cutting-edge solutions and tech breakthroughs&quot;,
    icon: <Lightbulb className=&quot;w-10 h-10&quot; />,
    link: &quot;/innovation&quot;,
    color: undefined, // Let CategoryCard use default color
  }],

export default function AllCategoriesPage() {
  return (
    <div className=&quot;min-h-screen bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4 py-12&quot;>
        <div className=&quot;text-center mb-12&quot;>
          <GradientHeading level=&quot;h1&quot; className=&quot;text-4xl md:text-5xl font-bold mb-4&quot;>
=======
import ErrorBoundary from "@/components/GlobalErrorBoundary"; // Import ErrorBoundary

// Reusing the categories array from CategoriesSection.tsx
// Ideally, this would come from a shared data source or API
const _categories = [
  {_title: "Services", _description: "On-demand IT support, _consulting, _development, _and more", _icon: <Briefcase className="w-10 h-10" />, _link: "/services", _// Link for the card itself
    color: undefined, _// Let CategoryCard use default color},
  {_title: "Talents", _description: "Connect with AI experts, _developers, _and tech specialists", _icon: <Users className="w-10 h-10" />, _link: "/talent", _// Link for the card itself
    color: undefined, _// Let CategoryCard use default color},
  {_title: "Equipment", _description: "Rent or buy specialized hardware, _servers, _and devices", _icon: <HardDrive className="w-10 h-10" />, _link: "/equipment", _// Link for the card itself
    color: undefined, _// Let CategoryCard use default color},
  {_title: "Innovation", _description: "Discover cutting-edge solutions and tech breakthroughs", _icon: <Lightbulb className="w-10 h-10" />, _link: "/innovation", _color: undefined, _// Let CategoryCard use default color}];

export default function AllCategoriesPage() {_return (_<div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            All Categories
          </GradientHeading>
          <p className=&quot;text-zion-slate-light text-lg max-w-3xl mx-auto&quot;>
            Explore our extensive range of AI services and products.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={_category.title}
                description={_category.description}
                icon={_category.icon}
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
