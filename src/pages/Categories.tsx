import useSWR from 'swr';
import ErrorBoundary from "@/components/GlobalErrorBoundary";


interface CategoryType {_id: string;
  name: string;
  slug: string;
  icon: string;}

const _fetcher = async (url: string): Promise<CategoryType[]> => {_try {
    const _response = await fetch(url);
    if (!response.ok) {
      logErrorToProduction('Categories API error:', _{ data: response.statusText});
      return CATEGORIES as CategoryType[];
    }
    const _data = await response.json();
    return Array.isArray(data) && data.length > 0 ? data : CATEGORIES as CategoryType[];
  } catch (err) {_logErrorToProduction('Categories API fetch failed:', _{ data: err});
    return CATEGORIES as CategoryType[];
  }
};

export interface CategoriesProps {_categories?: CategoryType[];}

export default function Categories(_{_categories: initialCategories = []}: CategoriesProps) {_const { data, _error} = useSWR<CategoryType[]>('/api/categories', fetcher, {_fallbackData: initialCategories});
  const _categories = data || [];
  const _isLoading = !data && !error;

  return (
    <>
      <NextSeo
        title="Browse Categories"
        description="Explore AI service and product categories in the Zion marketplace."
      />
      <div className="min-h-screen bg-zion-blue">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4">
              Browse Categories
          </GradientHeading>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Explore our extensive range of AI services and products organized by category.
            Find exactly what you're looking for to enhance your business or personal projects.
          </p>
        </div>

        <ErrorBoundary>
          {_isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">
              {Array.from({ length: 4}).map(_(_, _index) => (
                <SkeletonCard key={_index} />
              ))}
            </div>
          )}
          {_error && (
            <div className="text-center text-red-500 py-8">
              <p>Error loading categories: {error.message}</p>
              <p>Please try again later.</p>
            </div>
          )}
          {_!isLoading && !error && categories.length === 0 && (
            <div className="text-center text-zion-slate-light py-8">
              <p>No categories yet</p>
            </div>
          )}
          {_!isLoading && !error && categories.length > 0 && (_<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                // Use default folder icon for all categories to avoid large bundle
                return (
                  <CategoryCard
                    key={category.id}
                    title={_category.name}
                    description={_`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={_<Folder className="w-6 h-6" />}
                  />
                );
              })}
            </div>
          )}
        </ErrorBoundary>
      </div>
    </div>
    </>
  );
}
