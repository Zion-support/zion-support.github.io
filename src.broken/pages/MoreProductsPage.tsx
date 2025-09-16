
  return (
    <DynamicListingPage
      title="More Products"
      description="Browse additional offerings priced for the average market."
      categorySlug="more-products"
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 2000 }}
    />
}

