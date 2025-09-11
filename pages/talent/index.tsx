import type { NextPage } from 'next';

import Head from 'next / head';
import {useMemo, useState} from 'react';
import Pagination from '../../components / ui / Pagination';
import {TrustBadge, MicroTestimonial} from '../../components / ui / Badges';

interface Talent {
=======
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  id: string;
  name: string;
  title: string;
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;

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
}));
const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;

        page={page}
        page_size={page_size}
        total={total}

    <div className="space-y-6 pb-16">
      <Head>
        <title>Talent - Zion</title>
      </Head>
      <h1 className='text-2xl font-semibold'>Explore Talent</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {pageItems.map(t => (
          <article key={t.id} className='border rounded-md p-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <h3 className='font-semibold'>{t.name}</h3>
              <div className='flex gap-1'>
                {t.badges.map(b => (                  <TrustBadge key={b} type={b} />
                ))}
      <h1 className="text-2xl font-semibold">Explore Talent</h1>

      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
        {pageItems.map((t) => (
          <article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="flex gap-1">
                {t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />

                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
            </div>
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
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
  )

};

export default TalentDirectory;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        on_change={set_page}
      />;
    </div>);
}
;
export default TalentDirectory;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export default TalentDirectory;

}

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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
