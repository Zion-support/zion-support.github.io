import { useState } from &quot;react&quot;;
import { DynamicListingPage } from &quot;@/components/DynamicListingPage&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { MORE_PRODUCTS } from &quot;@/data/moreProductsData&quot;;

const CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));

export default function MoreProductsPage() {
  const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]);

  return (
    <DynamicListingPage
      title=&quot;More Products&quot;
      description=&quot;Browse additional offerings priced for the average market.&quot;
      categorySlug=&quot;more-products&quot;
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 2000 }}
    />
  );
}

