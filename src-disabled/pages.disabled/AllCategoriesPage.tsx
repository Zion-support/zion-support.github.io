<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx

import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
// Reusing the categories array from CategoriesSection.tsx
// Ideally, this would come from a shared data source or API


export default function AllCategoriesPage() {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary", // Import ErrorBoundary
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'



<<<<<<< HEAD
import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary", // Import ErrorBoundary
import { CategoryCard } from '@/components/CategoryCard'
import { GradientHeading } from '@/components/GradientHeading'
import ErrorBoundary from '@/components/GlobalErrorBoundary'
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// Reusing the categories array from CategoriesSection.tsx
// Ideally, this would come from a shared data source or API

const categories = [
  {
<<<<<<< HEAD
import { CategoryCard } from "@/components/CategoryCard",
import { GradientHeading } from "@/components/GradientHeading",
import ErrorBoundary from "@/components/GlobalErrorBoundary", // Import ErrorBoundary
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import { CategoryCard } from '@/components/CategoryCard';
import { GradientHeading } from '@/components/GradientHeading';
import ErrorBoundary from '@/components/GlobalErrorBoundary';
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';

// Reusing the categories array from CategoriesSection && CategoriesSection.tsx;
// Ideally, this would come from a shared data source or API;
const categories = [;
  {;
    title: 'Services',;
    description: 'On-demand IT support, consulting, development, and more',;
    icon: <Briefcase className='w-10 h-10' />,;
    link: '/services', // Link for the card itself;
  },;
  {;
    title: 'Talents',;
    description: 'Connect with AI experts, developers, and tech specialists',;
    icon: <Users className='w-10 h-10' />,;
    link: '/talent', // Link for the card itself;
    color: undefined, // Let CategoryCard use default color;
  },;
  {;
    title: 'Equipment',;
    description: 'Rent or buy specialized hardware, servers, and devices',;
    icon: <HardDrive className='w-10 h-10' />,;
    link: '/equipment', // Link for the card itself;
    color: undefined, // Let CategoryCard use default color;
  },;
  {;
    title: 'Innovation',;
    description: 'Discover cutting-edge solutions and tech breakthroughs',;
    icon: <Lightbulb className='w-10 h-10' />,;
    link: '/innovation',;
    color: undefined, // Let CategoryCard use default color;
  },;
];

export default function AllCategoriesPage() {;
<<<<<<< HEAD
    title: 'Services'
    description: 'On-demand IT support, consulting, development, and more'
    icon: <Briefcase className='w-10 h-10' />
    link: '/services', // Link for the card itself
  }
  {
    title: 'Talents'
    description: 'Connect with AI experts, developers, and tech specialists'
    icon: <Users className='w-10 h-10' />
    link: '/talent', // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  }
  {
    title: 'Equipment'
    description: 'Rent or buy specialized hardware, servers, and devices'
    icon: <HardDrive className='w-10 h-10' />
    link: '/equipment', // Link for the card itself
    color: undefined, // Let CategoryCard use default color
  }
  {
    title: 'Innovation'
    description: 'Discover cutting-edge solutions and tech breakthroughs'
    icon: <Lightbulb className='w-10 h-10' />
    link: '/innovation'
    color: undefined, // Let CategoryCard use default color
  }
]

export default function AllCategoriesPage() {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
  return (
    <div className='min-h-screen bg-zion-blue'>
      <div className='container mx-auto px-4 py-12'>
        <div className='text-center mb-12'>
          <GradientHeading
            level='h1'
<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
              <CategoryCard
                key={category && category.id}
                title={category && category.title}
                description={category && category.description}
                icon={category && category.icon}
                href={category && category.href}
              />;
            ))}

          </div>;
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find
            exactly what you're looking for to enhance your business or personal
            projects.          </p>
        </div>
        <ErrorBoundary>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map(category => (
=======

<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
=======

            Explore our extensive range of AI services and products. Find;
            exactly what you're looking for to enhance your business or personal;
            projects.          </p>;
        </div>;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
              />
            ))}
<<<<<<< HEAD
          </div>
        <ErrorBoundary>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map(category => (          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <CategoryCard
import { CategoryCard } from "@/components/CategoryCard",
import { GradientHeading } from "@/components/GradientHeading",
import ErrorBoundary from "@/components/GlobalErrorBoundary", // Import ErrorBoundary
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react'
=======

          </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </p>
        </div>

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
        <ErrorBoundary>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map((category) => (
              <CategoryCard
import { CategoryCard } from '@/components/CategoryCard',;
import { GradientHeading } from '@/components/GradientHeading',;
import ErrorBoundary from '@/components/GlobalErrorBoundary', // Import ErrorBoundary;
import { Briefcase, HardDrive, Lightbulb, Users } from 'lucide-react';
// Reusing the categories array from CategoriesSection.tsx;
// Ideally, this would come from a shared data source or API;
const categories = [;
  {;
    title: 'Services',;
    description: 'On-demand IT support, consulting, development, and more',;
    icon: <Briefcase className='w-10 h-10' />,;
    link: '/services', // Link for the card itself;
    color: undefined, // Let CategoryCard use default color;
  },;
  {;
    title: 'Talents',;
    description: 'Connect with AI experts, developers, and tech specialists',;
    icon: <Users className='w-10 h-10' />,;
    link: '/talent', // Link for the card itself;
    color: undefined, // Let CategoryCard use default color;
  },;
  {;
    title: 'Equipment',;
    description: 'Rent or buy specialized hardware, servers, and devices',;
    icon: <HardDrive className='w-10 h-10' />,;
    link: '/equipment', // Link for the card itself;
    color: undefined, // Let CategoryCard use default color;
  },;
  {;
    title: 'Innovation',;
    description: 'Discover cutting-edge solutions and tech breakthroughs',;
    icon: <Lightbulb className='w-10 h-10' />,;
    link: '/innovation',;
    color: undefined, // Let CategoryCard use default color;
  }];
export default function AllCategoriesPage() {;
  return (;
    <div className="min-h-screen bg-zion-blue">;
      <div className="container mx-auto px-4 py-12">;
        <div className="text-center mb-12">;
<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
          <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">;",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
          <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">;
            All Categories;
          </GradientHeading>;
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>;
            Explore our extensive range of AI services and products.;
            Find exactly what you're looking for to enhance your business or personal projects.;
          </p>;
        </div>;
        <ErrorBoundary>;
<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;
            {categories.map((category) => (;
              <CategoryCard;
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            All Categories
          </GradientHeading>
          <p className='text-zion-slate-light text-lg max-w-3xl mx-auto'>
            Explore our extensive range of AI services and products. Find
            exactly what you're looking for to enhance your business or personal
            projects.
          </p>
        </div>
        <ErrorBoundary>
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {categories.map(category => (
              <CategoryCard
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">;
            {categories.map((category) => (;
              <CategoryCard;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
}

=======
<<<<<<< HEAD
                title={category.title}
                description={category.description}
                icon={category.icon}
                // The CategoryCard itself is a Link to its specific category page;
                // So we don't pass the category.link to a 'to' prop here directly;
                // The 'link' in the categories array above is used by CategoryCard's internal Link;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
                // The CategoryCard itself is a Link to its specific category page;
                // So we don't pass the category.link to a 'to' prop here directly;
                // The 'link' in the categories array above is used by CategoryCard's internal Link;
              />;
            ))}
<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
=======

            {categories.map((category,) => (
              <CategoryCard
                key = {category.title,}
                title = {category.title,}
                description = {category.description,}
                icon = {category.icon,}
                // The CategoryCard itself is a Link to its specific category page
                // So we don't pass the category.link to a 'to' prop here directly
                // The 'link' in the categories array above is used by CategoryCard's internal Link
              />
            ))}
          </div>
        </ErrorBoundary>
      </div>;
    </div>;
  );
};
}
}
=======

}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                // The CategoryCard itself is a Link to its specific category page;
                // So we don't pass the category.link to a 'to' prop here directly;
                // The 'link' in the categories array above is used by CategoryCard's internal Link;
              />;
            ))}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
          </div>;
        </ErrorBoundary>;
      </div>;
    </div>;
  );
}
        <ErrorBoundary>;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
            {categories.map (category => (
              <CategoryCard;
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                href={category.href}
              />))}
          </div>;
        <ErrorBoundary>;
          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
            {categories.map (category => (          <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 6'>;
            {categories.map ((category) => (
              <CategoryCard;
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
            {categories.map ((category, ) => (
              <CategoryCard;
                key = {category.title, }
                title = {category.title, }
                description = {category.description, }
                icon = {category.icon, }
                // The CategoryCard itself is a Link to its specific category page;
                // So we don't pass the category.link to a 'to' prop here directly;
                // The 'link' in the categories array above is used by CategoryCard's internal Link;
              />))}
          </div>;
        </ErrorBoundary>;
      </div>;
    </div>);
}
<<<<<<< HEAD:src-disabled/pages.disabled/AllCategoriesPage.tsx
;
}))]
;
          </div>
        </ErrorBoundary>
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:src/pages/AllCategoriesPage.tsx
