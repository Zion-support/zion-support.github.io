
const _CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({_label: c, _value: c}));

export default function NewProductsPage() {_const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]);

  return (
    <DynamicListingPage
      title="New Products"
      description="Explore our latest products priced for today's market."
      categorySlug="new-products"
      listings={listings}
      categoryFilters={_CATEGORY_FILTERS}
      initialPrice={_{ min: 0, _max: 5000}}
      detailBasePath="/product"
    />
  );
}
