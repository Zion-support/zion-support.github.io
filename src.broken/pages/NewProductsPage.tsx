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
  )
=======
import { useState } from "react",;
import { DynamicListingPage } from "@/components/DynamicListingPage",;
import { ProductListing } from "@/types/listings",;
import { NEW_PRODUCTS } from "@/data/newProductsData",;
const CATEGORY_FILTERS = Array.from(;
  new Set(NEW_PRODUCTS.map(p => p.category));
).map(c => ({ label: c, value: c })),;
export default function NewProductsPage() {;
  const [listings] = useState<ProductListing[]>([...NEW_PRODUCTS]);
  return (;
    <DynamicListingPage;
      title="New Products";
      description="Explore our latest products priced for today's market.";
      categorySlug="new-products";
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 5000 }}
      detailBasePath="/product";
    />;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;