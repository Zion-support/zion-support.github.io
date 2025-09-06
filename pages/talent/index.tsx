import type { NextPage } from 'next';
<<<<<<< HEAD
import Head from 'next / head';
import {useMemo, useState} from 'react';
import Pagination from '../../components / ui / Pagination';
import {TrustBadge, MicroTestimonial} from '../../components / ui / Badges';
interface Talent {
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';
interface Talent {;
=======
import Head from 'next/head';
<<<<<<< HEAD
import { useMemo, useState  } from 'react';
import Pagination from '../../components/ui/Pagination';
<<<<<<< HEAD
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
=======
<<<<<<< HEAD
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface Talent {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
<<<<<<< HEAD
  testimonial?: { quote: string; author: string }
const mock_talent: Talent[] = Array.from ({ length: 47 }).map ((_, i) => ({
  id: String (i + 1),
  name: `Talent ${i + 1}`,
  title: 'Full - Stack Developer',
  badges: (i % 3 === 0;
    ? ['Verified'];
    : i % 3 === 1;
      ? ['Pro'];
      : ['Top Rated']) as Talent['badges'],
  testimonial:;
    i % 5 === 0;
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined
  testimonial?: { quote: string; author: string };
const mockTalent: Talent[] = Array && Array.from({ length: 47 }).map((_, i) => ({;
  id: String(i + 1),;
  name: `Talent ${i + 1}`,;
  title: 'Full-Stack Developer',;
  badges: (i % 3 === 0;
    ? ['Verified'];
    : i % 3 === 1;
      ? ['Pro'];
      : ['Top Rated']) as Talent['badges'],;
  testimonial:;
    i % 5 === 0;
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined,;
}));
const TalentDirectory: NextPage = () => {;
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const total = mockTalent && mockTalent.length;
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
interface Talent {
  id: string,
  name: string,
  title: string,
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>,
  testimonial?: { quote: string, author: string }
}
=======
<<<<<<< HEAD

  testimonial?: { quote: string; author: string }
const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1)
  name: `Talent ${i + 1}`
  title: 'Full-Stack Developer'
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
const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const total = mockTalent.length;
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return mockTalent.slice(start, start + pageSize);
  }, [page]);
=======
import { useMemo, useState } from 'react';
import Pagination from '../../components/ui/Pagination';
=======
  testimonial?: { quote: string; author: string };
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
interface Talent {;
  id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>,;
  testimonial?: { quote: string, author: string   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1),
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),
const TalentDirectory: NextPage = () => {
<<<<<<< HEAD
  const [page, set_page] = useState (1);
  const page_size = 10;
  const total = mock_talent.length;
;
  const page_items = useMemo (() => {
    const start = (page - 1) * page_size;
    return mock_talent.slice (start, start + page_size);
  }, [page]);
;
  return (
    <div className='space - y-6 pb - 16'>      <Head>;
        <title > Talent - Zion</title>;
      </Head>;
      <h1 className='text - 2xl font - semibold'>Explore Talent</h1>;
      <div className='grid sm:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
        {page_items.map (t => (
          <article key={t.id} className='border rounded - md p - 4 space - y-2'>;
            <div className='flex items - center justify - between'>;
              <h3 className='font - semibold'>{t.name}</h3>;
              <div className='flex gap - 1'>;
                {t.badges.map (boolean => (                  <TrustBadge key={b} type={b} />))}
              </div>;
            </div>;
            <div className='text - sm opacity - 80'>{t.title}</div>;
            {t.testimonial && (
              <MicroTestimonial;
                quote={t.testimonial.quote}
                author={t.testimonial.author}
              />            )}
          </article>))}
      </div>;
      <Pagination;
        page={page}
        page_size={page_size}
        total={total}
=======
  const [page, setPage] = useState(1),
  const pageSize = 10,
  const total = mockTalent.length,
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="space-y-6 pb-16">
      <Head>
        <title>Talent - Zion</title>
      </Head>
<<<<<<< HEAD
      <h1 className="text-2xl font-semibold">Explore Talent</h1>
      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
=======
<<<<<<< HEAD
      <h1 className='text-2xl font-semibold'>Explore Talent</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pageItems.map(t => (
          <article key={t.id} className='border rounded-md p-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <h3 className='font-semibold'>{t.name}</h3>
              <div className='flex gap-1'>
                {t.badges.map(b => (                  <TrustBadge key={b} type={b} />
                ))}
=======
      <h1 className="text-2xl font-semibold">Explore Talent</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {pageItems.map((t) => (
          <article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="flex gap-1">
<<<<<<< HEAD
}

const mockTalent: Talent[] = Array.from({_length: 47}).map(_(_, _i) => ({_id: String(i + 1), _name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),

const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1),
  const pageSize = 10
  const total = mockTalent.length

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize
    return mockTalent.slice(start, start + pageSize)
  }, [page]),

  return (
    <div className=&quot;space-y-6 pb-16&quot;>
  testimonial: i % 5 === 0 ? {_quote: 'Delivered beyond expectations!', _author: 'Happy Client'} : undefined}));

const TalentDirectory: NextPage = () => {_const [page, _setPage] = useState(1);
  const _pageSize = 10;
  const _total = mockTalent.length;

  const _pageItems = useMemo__(() => {
    const _start = (page - 1) * pageSize;
    return mockTalent.slice(start, _start + pageSize);}, [page]);

  return (_<div className="space-y-6 pb-16">

      <Head>
        <title>Talent - Zion</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold&quot;>Explore Talent</h1>

      <div className=&quot;grid sm:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
        {pageItems.map((t) => (
          <article key={t.id} className=&quot;border rounded-md p-4 space-y-2&quot;>
            <div className=&quot;flex items-center justify-between&quot;>
              <h3 className=&quot;font-semibold&quot;>{t.name}</h3>
              <div className=&quot;flex gap-1&quot;>

                {t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />
                ))}
              </div>
            </div>
<div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
            )}
          </article>
        ))}
      </div>
<Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />
    </div>
  )
};
export default TalentDirectory;
        on_change={set_page}
      />;
    </div>);
}
;
export default TalentDirectory;
;
=======
                {t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
            </div>
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
<<<<<<< HEAD
              <MicroTestimonial
                quote={t.testimonial.quote}
                author={t.testimonial.author}
              />            )}
          </article>
        ))}
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
    </div>
  );
}
export default TalentDirectory;

<<<<<<< HEAD
=======
export default TalentDirectory;

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </article>;
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
      <Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />;
    </div>;
  );
},;
export default TalentDirectory;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
