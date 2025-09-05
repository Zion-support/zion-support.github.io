<<<<<<< HEAD
import { useState } from "react",;
import { DynamicListingPage } from "@/components/DynamicListingPage",;
import { ProductListing } from "@/types/listings",;
import { NEW_PRODUCTS } from "@/data/newProductsData",;
;
const CATEGORY_FILTERS = Array.from(;
  new Set(NEW_PRODUCTS.map(p => p.category));
).map(c => ({ label:c, value:c })),;
;
export default function NewProductsPage() {;
  const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]),;
;
  return (;
    <DynamicListingPage;
      title="New Products";
      description="Explore our latest products priced for today's market.";
      categorySlug="new-products";
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min:0, max:5000 }}
      detailBasePath="/product";
    />;
  ),;
=======
import { useState } from "react",
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
import { NEW_PRODUCTS } from "@/data/newProductsData",const CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c })),

export default function NewProductsPage() {
  const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]),

const _CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({_label: c, _value: c}));

export default function NewProductsPage() {_const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]);

  return (
    <DynamicListingPage
      title=&quot;New Products&quot;
      description=&quot;Explore our latest products priced for today's market.&quot;
      categorySlug=&quot;new-products&quot;
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
      detailBasePath=&quot;/product&quot;    />
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
