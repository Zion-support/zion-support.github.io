import type { NextPage } from 'next',
import Head from 'next/head',
import { useMemo, useState } from 'react',
import Pagination from '../../components/ui/Pagination',
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges',

interface Talent {
  id: string,
  name: string,
  title: string,
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>,
  testimonial?: { quote: string, author: string }
}

const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1),
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),

const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1),
  const pageSize = 10,
  const total = mockTalent.length,

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),

  return (
    <div className=&quot;space-y-6 pb-16&quot;>
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
            <div className=&quot;text-sm opacity-80&quot;>{t.title}</div>
            {t.testimonial && (
              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
            )}
          </article>
        ))}
      </div>

      <Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />
    </div>
  )
},

export default TalentDirectory,