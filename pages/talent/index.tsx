import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Pagination from '../../components/ui/Pagination';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';

interface Talent {
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
  testimonial?: { quote: string; author: string };
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  id: string,
  name: string,
  title: string,
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>,
  testimonial?: { quote: string, author: string }
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1),
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
<<<<<<< HEAD
<<<<<<< HEAD
  badges: (i % 3 === 0
    ? ['Verified']
    : i % 3 === 1
      ? ['Pro']
      : ['Top Rated']) as Talent['badges'],
  testimonial:
    i % 5 === 0
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined,
}));

=======
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const total = mockTalent.length;

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
<<<<<<< HEAD
<<<<<<< HEAD
    return mockTalent.slice(start, start + pageSize);
  }, [page]);

  return (
    <div className='space-y-6 pb-16'>
=======
    return mockTalent.slice(start, start + pageSize)
  }, [page]);

  return (
    <div className="space-y-6 pb-16">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return mockTalent.slice(start, start + pageSize)
  }, [page]);

  return (
    <div className="space-y-6 pb-16">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <Head>
        <title>Talent - Zion</title>
      </Head>

<<<<<<< HEAD
<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Explore Talent</h1>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pageItems.map(t => (
          <article key={t.id} className='border rounded-md p-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <h3 className='font-semibold'>{t.name}</h3>
              <div className='flex gap-1'>
                {t.badges.map(b => (
=======
      <h1 className="text-2xl font-semibold">Explore Talent</h1>

=======
      <h1 className="text-2xl font-semibold">Explore Talent</h1>

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
        {pageItems.map((t) => (
          <article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="flex gap-1">
                {t.badges.map((b) => (
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <TrustBadge key={b} type={b} />
                ))}
              </div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='text-sm opacity-80'>{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial
                quote={t.testimonial.quote}
                author={t.testimonial.author}
              />
=======
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
            )}
          </article>
        ))}
      </div>

<<<<<<< HEAD
<<<<<<< HEAD
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
=======
      <Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    </div>
  )
};

<<<<<<< HEAD
export default TalentDirectory;
=======
      <Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />
    </div>
  )
};

export default TalentDirectory;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default TalentDirectory;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
