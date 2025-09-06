import type { NextPage } from 'next';
import Head from 'next/head';
import { useMemo, useState  } from 'react';
import Pagination from '../../components/ui/Pagination';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
interface Talent {
  id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
<<<<<<< HEAD
<<<<<<< HEAD
  testimonial?: { quote: string, author: string }
}
=======
  testimonial?: { quote: string; author: string };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1);
  name: `Talent ${i + 1}`,
<<<<<<< HEAD
  title: 'Full-Stack Developer';
  badges: (i % 3;
=======
  testimonial?: { quote: string; author: string }
const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1)
  name: `Talent ${i + 1}`
  title: 'Full-Stack Developer'
=======
  title: 'Full-Stack Developer',
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  badges: (i % 3 === 0
    ? ['Verified']
    : i % 3 === 1
      ? ['Pro']
      : ['Top Rated']) as Talent['badges']
  testimonial:
    i % 5 === 0
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined
}));
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const total = mockTalent.length;
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return mockTalent.slice(start, start + pageSize);
  }, [page]);
  return (
<<<<<<< HEAD
    <div className='space-y-6 pb-16'>      <Head>
        <title>Talent - Zion</title>
      </Head>
=======
    <div className='space-y-6 pb-16'>
      <Head>
        <title>Talent - Zion</title>
      </Head>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <h1 className='text-2xl font-semibold'>Explore Talent</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pageItems.map(t => (
          <article key={t.id} className='border rounded-md p-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <h3 className='font-semibold'>{t.name}</h3>
              <div className='flex gap-1'>
<<<<<<< HEAD
                {t.badges.map(b => (                  <TrustBadge key={b} type={b} />
=======
                {t.badges.map(b => (
                  <TrustBadge key={b} type={b} />
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                ))}
              </div>
            </div>
            <div className='text-sm opacity-80'>{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial
                quote={t.testimonial.quote}
                author={t.testimonial.author}
<<<<<<< HEAD
              />            )}
          </article>
        ))}
      </div>
=======
              />
            )}
          </article>
        ))}
      </div>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
    </div>
  );
<<<<<<< HEAD
}
export default TalentDirectory;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
};
}

export default TalentDirectory;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
