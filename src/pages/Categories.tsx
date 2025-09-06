      logErrorToProduction('Categories API error:', { data: response.statusText }),
      return CATEGORIES as CategoryType[];
    fallbackData: initialCategories}),
  const categories = data || [];
  const isLoading = !data && !error;

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
