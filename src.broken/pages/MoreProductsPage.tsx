
const _CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({_label: c, _value: c}));

export default function MoreProductsPage() {_const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]);

  return (
    <DynamicListingPage
      title="More Products"
      description="Browse additional offerings priced for the average market."
      categorySlug="more-products"
      listings={listings}
      categoryFilters={_CATEGORY_FILTERS}
      initialPrice={_{ min: 0, _max: 2000}}
    />
  );
}

