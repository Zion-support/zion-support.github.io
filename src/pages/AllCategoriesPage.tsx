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
            All Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
  );
}
