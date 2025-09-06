      logErrorToProduction('Categories API error:', { data: response.statusText }),
      return CATEGORIES as CategoryType[];
    fallbackData: initialCategories}),
  const categories = data || [];
  const isLoading = !data && !error;

<<<<<<< HEAD
=======
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
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-testid="skeleton-loader">
              {Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}
          {error && (
            <div className="text-center text-red-500 py-8">
              <p>Error loading categories: {error.message}</p>
              <p>Please try again later.</p>
            </div>
          )}
          {!isLoading && !error && categories.length === 0 && (
            <div className="text-center text-zion-slate-light py-8">
              <p>No categories yet</p>
            </div>
          )}
          {!isLoading && !error && categories.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => {
                // Use default folder icon for all categories to avoid large bundle
                return (
                  <CategoryCard
                    key={category.id}
                    title={category.name}
                    description={`Explore ${category.name.toLowerCase()} in our marketplace`}
                    icon={<Folder className="w-6 h-6" />}
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
<<<<<<< HEAD

};';
return (<> <NextSeo title="Browse Categories" description="Explore AI service and product categories in the Zion marketplace." /> <div className="min-h-screen bg-zion-blue" > <div className="container mx-auto px-4 py-12" > <div className="text-center mb-12" > <GradientHeading level="h1" className="text-4xl md:text-5xl font-bold mb-4" > Browse Categories </GradientHeading> <p className="text-zion-slate-light text-lg max-w-3xl mx-auto" > Explore our extensive range of AI services and products organized by category. Find exactly what you're looking for to enhance your business or personal projects. </p> </div> <ErrorBoundary> <p>Error loading categories: {;
  error.message ;
}</p> <p>Please try again later.</p> </div>) ;
}{;
  categories.map ( (category) => {;
  //Use default folder icon for all categories to avoid large bundle 
}/>) ;
}) ;
}</div>) ;
}</ErrorBoundary> </div> </div> </>) ;
}'"
=======

<<<<<<< HEAD

    fallbackData: initialCategories}),

  const categories = data || [],
  const isLoading = !data && !error;

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
