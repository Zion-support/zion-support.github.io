<<<<<<< HEAD
import { useState } from "react";
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { MORE_PRODUCTS } from "@/data/moreProductsData";

const CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));

export default function MoreProductsPage() {
  const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]);
=======
import { useState } from "react",
import { DynamicListingPage } from "@/components/DynamicListingPage",
import { ProductListing } from "@/types/listings",
import { MORE_PRODUCTS } from "@/data/moreProductsData",

const CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c })),

export default function MoreProductsPage() {
  const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]),
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  return (
    <DynamicListingPage
      title="More Products"
      description="Browse additional offerings priced for the average market."
      categorySlug="more-products"
      listings={listings}
      categoryFilters={CATEGORY_FILTERS}
      initialPrice={{ min: 0, max: 2000 }}
    />
<<<<<<< HEAD
  );
=======
  ),
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
}

