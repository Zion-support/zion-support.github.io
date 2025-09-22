import type { NextPage } from 'next';
:pages_backup/talent/index.tsx

:pages_backup/talent/index.tsx
import Head from 'next / head';
import {useMemo, useState} from 'react';
import Pagination from '../../components / ui / Pagination';
import {TrustBadge, MicroTestimonial} from '../../components / ui / Badges';

interface Talent {'
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {;

interface Talent {}
'
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {;
:pages_backup/talent/index.tsx
interface Talent {
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';
interface Talent {;
import Head from 'next/head';
import { useMemo, useState  } from 'react';
import Pagination from '../../components/ui/Pagination';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {


interface Talent {
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {;
  id: string;
  name: string;
  title: string;'
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
:pages_backup/talent/index.tsx

  testimonial?: { quote: string, author: string }
}

const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1);
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
badges: (i % 3 === 0
    ? ['Verified']
    : i % 3 === 1
      ? ['Pro']
      : ['Top Rated']) as Talent['badges']
  testimonial:
    i % 5 === 0
origin/cursor/automate-test-improve-and-merge-code-2533
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined
}));
const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  testimonial?: { quote: string; author: string };
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

:pages_backup/talent/index.tsx
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

const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1),
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),
const TalentDirectory: NextPage = () => {

  return (
  testimonial?: { quote: string, author: string }
}

const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({
  id: String(i + 1);
  name: `Talent ${i + 1}`,
  title: 'Full-Stack Developer',
badges: (i % 3 === 0
    ? ['Verified']
    : i % 3 === 1
      ? ['Pro']
      : ['Top Rated']) as Talent['badges']
  testimonial:
    i % 5 === 0
origin/cursor/automate-test-improve-and-merge-code-2533
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
import { useMemo, useState } from 'react';
import Pagination from '../../components/ui/Pagination';
  testimonial?: { quote: string; author: string };
'
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
interface Talent {;
  id: string;
  name: string;
  title: string;'
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>,;
  testimonial?: { quote: string, author: string   } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
const mockTalent: Talent[] = Array.from({ length: 47 }).map((_, i) => ({}
  id: String(i + 1),
  name: `Talent ${i + 1}`,'
  title: 'Full-Stack Developer','
  badges: (i % 3 === 0 ? ['Verified'] : i % 3 === 1 ? ['Pro'] : ['Top Rated']) as Talent['badges'],'
  testimonial: i % 5 === 0 ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' } : undefined})),
const TalentDirectory: NextPage = () => {}
  const [page, setPage] = useState(1),
  const pageSize = 10,
  const total = mockTalent.length,
:pages_backup/talent/index.tsx
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),
  return (
  const pageItems = useMemo(() => {}
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),

  testimonial?: { quote: string; author: string }
const mock_talent: Talent[] = Array.from ({ length: 47 }).map ((_, i) => ({}
  id: String (i + 1),`
  name: `Talent ${i + 1}`,'
  title: 'Full - Stack Developer',
  badges: (i % 3 === 0;'
    ? ['Verified'];
    : i % 3 === 1;'
      ? ['Pro'];'
      : ['Top Rated']) as Talent['badges'],
  testimonial:;
    i % 5 === 0;
'
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined;
  testimonial?: { quote: string; author: string };
const mockTalent: Talent[] = Array && Array.from({ length: 47 }).map((_, i) => ({;
  id: String(i + 1),;`
  name: `Talent ${i + 1}`,;'
  title: 'Full-Stack Developer',;
  badges: (i % 3 === 0;'
    ? ['Verified'];
    : i % 3 === 1;'
      ? ['Pro'];'
      : ['Top Rated']) as Talent['badges'],;
  testimonial:;
    i % 5 === 0;'
      ? { quote: 'Delivered beyond expectations!', author: 'Happy Client' }
      : undefined,;

}));
const TalentDirectory: NextPage = () => {;

  const [page, setPage] = useState(1);
  const pageSize = 10;

  return (
:pages_backup/talent/index.tsx
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),
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
  return (


        page={page}
        page_size={page_size}
        total={total}



"
return (
    <div className="space-y-6 pb-16">
      <Head>
        <title>Talent - Zion</title>
      </Head>
:pages_backup/talent/index.tsx

"
      <h1 className="text-2xl font-semibold">Explore Talent</h1>
"
      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
:pages_backup/talent/index.tsx
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

              </div>
            </div>
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
:pages_backup/talent/index.tsx
    const start = (page - 1) * pageSize;
return mockTalent.slice(start, start + pageSize);
  }, [page]);
  return (
    <div className='space-y-6 pb-16'>
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

"
      <h1 className="text-2xl font-semibold">Explore Talent</h1>
"
      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
:pages_backup/talent/index.tsx
        {pageItems.map((t) => (
          <article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="flex gap-1">

        {pageItems.map((t) => ("
          <article key={t.id} className="border rounded-md p-4 space-y-2">"
            <div className="flex items-center justify-between">"
              <h3 className="font-semibold">{t.name}</h3>"
              <div className="flex gap-1">

                {t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />

                ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

              </div>
            </div>"
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
    </div>
  )

};

export default TalentDirectory;

        on_change={set_page}
      />;
    </div>);
}

export default TalentDirectory;

}

:pages_backup/talent/index.tsx
{t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
            </div>
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
:pages_backup/talent/index.tsx
    </div>
  );
}
export default TalentDirectory;
origin/cursor/automate-test-improve-and-merge-code-2533
origin/cursor/automate-test-improve-and-merge-code-2533
    </div>
  )

};

export default TalentDirectory;
<Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />

export default TalentDirectory;
        on_change={set_page}
      />;
    </div>);
}
:pages_backup/talent/index.tsx
;
export default TalentDirectory;
;

:pages_backup/talent/index.tsx
}


                {t.badges.map((b) => (
                  <TrustBadge key={b} type={b} />
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
  );
}
export default TalentDirectory;

export default TalentDirectory;

}

              <MicroTestimonial quote={t.testimonial.quote} author={t.testimonial.author} />
            )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </article>;
        ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </div>;
      <Pagination page={page} pageSize={pageSize} total={total} onChange={setPage} />;
    </div>;
  );
},;
export default TalentDirectory;
:pages_backup/talent/index.tsx

:pages_backup/talent/index.tsx


'"`

