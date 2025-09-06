logErrorToProduction('Categories API error:', { data: response.statusText }),
      return CATEGORIES as CategoryType[];
    fallbackData: initialCategories}),
  const categories = data || [];
  const isLoading = !data && !error;

}