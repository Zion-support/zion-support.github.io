import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Pagination from '../../components/ui/Pagination';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
interface Talent {
  id: string,
  name: string,
  title: string,
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>,
  testimonial?: { quote: string, author: string}
}

const mockTalent: Talent[] = Array.from({ length: 47}).map((_, i) => ({
  id: String($2);
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
  badges: (i % 3 = $2;
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),

const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState($2);
  const pageSize = $2;
  const total = $2;
  const pageItems = $2;
    return mockTalent.slice(start, start + pageSize)
  }, [page]),

  return (
    <div className = $2;
export default TalentDirectory,