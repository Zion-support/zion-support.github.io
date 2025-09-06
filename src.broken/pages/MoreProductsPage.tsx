import { useState } from 'react';
import { DynamicListingPage } from '@/components/DynamicListingPage';
import { ProductListing } from '@/types/listings';
import { MORE_PRODUCTS } from '@/data/moreProductsData';

const CATEGORY_FILTERS = Array.from(
  new Set(MORE_PRODUCTS.map(p => p.category))
).map(c => ({ label: c, value: c }));

export default function MoreProductsPage() {
  const [listings] = useState<ProductListing[]>([...MORE_PRODUCTS]);

  
    />
  );
