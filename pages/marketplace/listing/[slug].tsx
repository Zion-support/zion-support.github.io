import React from 'react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import NextHead from '@/components/NextHead';
import ProductReviews from '@/components/ProductReviews';
import type { Prisma } from '@prisma/client'; // Prisma Product type

// Alias the Prisma generated Product model type.
type ProductModel = Prisma.Product;
// Define ProductWithReviewStats here or import from a shared types file
// This should match the type returned by `/api/products/[id]/details`
export type ProductWithReviewStats = ProductModel & {
  averageRating: number | null;
  reviewCount: number;
  // Adding fields to match the enriched type from the API / product card expectations
  title?: string; // Usually mapped from product.name
  category?: string;
  images?: { url: string; alt?: string }[];
  price?: number | null;
  currency?: string;
  tags?: string[];
};

interface RatingStarsProps {
  value: number;
  count?: number;
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
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = MARKETPLACE_LISTINGS.map(l => ({ params: { slug: l.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ListingProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const listing = MARKETPLACE_LISTINGS.find(l => l.id === slug) || null;
  if (!listing) {
    return {
      redirect: {
        destination: '/marketplace',
        permanent: false,
      },
    };
  }
  return { props: { listing } };
};

export default MarketplaceListing;
