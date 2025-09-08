import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MARKETPLACE_LISTINGS } from '@/data/marketplaceData';
import type { ProductListing } from '@/types/listings';

interface ListingProps {
  listing: ProductListing | null;
}

const MarketplaceListing: React.FC<ListingProps> = ({ listing }) => {
  if (!listing) {
    return <div>Listing removed</div>;
  }
  return (
    <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
      <h1>{listing.title}</h1>
      <p>{listing.description}</p>
    </main>
  );

export default Slug;