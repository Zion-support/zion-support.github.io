import { CategoryCard } from "@/components/CategoryCard";
import { GradientHeading } from "@/components/GradientHeading";
import ErrorBoundary from "@/components/GlobalErrorBoundary", // Import ErrorBoundary
              <CategoryCard

}

                // The CategoryCard itself is a Link to its specific category page;
                // So we don't pass the category.link to a 'to' prop here directly;
                // The 'link' in the categories array above is used by CategoryCard's internal Link;

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
            {categories.map (category => (          <div className="grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 4 gap - 6">;
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
;
