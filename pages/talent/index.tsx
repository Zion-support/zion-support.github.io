import type {_NextPage} from 'next';
import Head from 'next/head';
import Pagination from '../../components/ui/Pagination';

interface Talent {_id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
  testimonial?: { quote: string; author: string};
}

const mockTalent: Talent[] = Array.from({_length: 47}).map(_(_, _i) => ({_id: String(i + 1), _name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
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

      <h1 className="text-2xl font-semibold">Explore Talent</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {_pageItems.map((t) => (_<article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{_t.name}</h3>
              <div className="flex gap-1">
                {_t.badges.map((b) => (
                  <TrustBadge key={b} type={_b} />
                ))}
              </div>
            </div>
            <div className="text-sm opacity-80">{_t.title}</div>
            {_t.testimonial && (
              <MicroTestimonial quote={t.testimonial.quote} author={_t.testimonial.author} />
            )}
          </article>
        ))}
      </div>

      <Pagination page={_page} pageSize={_pageSize} total={_total} onChange={_setPage} />
    </div>
  );
};

export default TalentDirectory;