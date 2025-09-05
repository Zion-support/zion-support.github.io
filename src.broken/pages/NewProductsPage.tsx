import { useState } from &quot;react&quot;;
import { DynamicListingPage } from &quot;@/components/DynamicListingPage&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { NEW_PRODUCTS } from &quot;@/data/newProductsData&quot;;

const CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));

export default function NewProductsPage() {
  const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]);

  return (
    <DynamicListingPage
      title=&quot;New Products&quot;
      description=&quot;Explore our latest products priced for today's market.&quot;
      categorySlug=&quot;new-products&quot;
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
      detailBasePath=&quot;/product&quot;
    />
  );
}
