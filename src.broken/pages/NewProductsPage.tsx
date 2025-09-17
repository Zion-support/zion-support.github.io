
  return (
    <DynamicListingPage
      title="New Products"
      description="Explore our latest products priced for today's market."
      categorySlug="new-products"
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
      detailBasePath="/product"
    />
}
