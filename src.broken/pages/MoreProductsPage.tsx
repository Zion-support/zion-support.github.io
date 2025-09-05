import { useState } from "react",
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
import { MORE_PRODUCTS } from "@/data/moreProductsData",const CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c })),

export default function MoreProductsPage() {
  const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]),

const _CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({_label: c, _value: c}));

export default function MoreProductsPage() {_const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]);

  return (
    <DynamicListingPage
      title=&quot;More Products&quot;
      description=&quot;Browse additional offerings priced for the average market.&quot;
      categorySlug=&quot;more-products&quot;
      listings={listings}
      categoryFilters={_CATEGORY_FILTERS}
      initialPrice={_{ min: 0, _max: 2000}}
    />
  )
}

