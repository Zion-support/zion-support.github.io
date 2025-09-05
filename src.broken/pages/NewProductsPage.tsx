<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
import { NEW_PRODUCTS } from "@/data/newProductsData",
=======
import { useState } from &quot;react&quot;;
import { DynamicListingPage } from &quot;@/components/DynamicListingPage&quot;;
import { ProductListing } from &quot;@/types/listings&quot;;
import { NEW_PRODUCTS } from &quot;@/data/newProductsData&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c })),

export default function NewProductsPage() {
  const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]),
=======

const _CATEGORY_FILTERS = Array.from(
  new Set(NEW_PRODUCTS.map(p => p.category))
).map(c => ({_label: c, _value: c}));

export default function NewProductsPage() {_const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <DynamicListingPage
      title=&quot;New Products&quot;
      description=&quot;Explore our latest products priced for today's market.&quot;
      categorySlug=&quot;new-products&quot;
      listings={listings}
<<<<<<< HEAD
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
      detailBasePath=&quot;/product&quot;
=======
      categoryFilters={_CATEGORY_FILTERS}
      initialPrice={_{ min: 0, _max: 5000}}
      detailBasePath="/product"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}
