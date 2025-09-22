import type { NextPage } from 'next';
:pages_backup/talent/index.tsx
<<<<<<< HEAD

:pages_backup/talent/index.tsx
import Head from 'next / head';
import {useMemo, useState} from 'react';
import Pagination from '../../components / ui / Pagination';
import {TrustBadge, MicroTestimonial} from '../../components / ui / Badges';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Head from 'next/head';
import { useMemo, useState  } from 'react';
import Pagination from '../../components/ui/Pagination';
import { TrustBadge, MicroTestimonial } from '../../components/ui/Badges';
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
interface Talent {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

interface Talent {
<<<<<<< HEAD
import {TrustBadge, MicroTestimonial} from '../../components/ui/Badges';

interface Talent {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string;
  name: string;
  title: string;'
  badges: Array<'Verified' | 'Pro' | 'Top Rated'>;
:pages_backup/talent/index.tsx
<<<<<<< HEAD

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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======

:pages_backup/talent/index.tsx
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}));
const TalentDirectory: NextPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
<<<<<<< HEAD
  const total = mockTalent.length;
  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return mockTalent.slice(start, start + pageSize);
  }, [page]);
import { useMemo, useState } from 'react';
import Pagination from '../../components/ui/Pagination';
  testimonial?: { quote: string; author: string };
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD:pages/talent/index.tsx
<<<<<<< HEAD
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),
<<<<<<< HEAD
  return (
=======
  const pageItems = useMemo(() => {}
    const start = (page - 1) * pageSize,
    return mockTalent.slice(start, start + pageSize)
  }, [page]),

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx

        page={page}
        page_size={page_size}
        total={total}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:pages_backup/talent/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx
=======
return (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/talent/index.tsx
    <div className="space-y-6 pb-16">
      <Head>
        <title>Talent - Zion</title>
      </Head>
:pages_backup/talent/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx

"
      <h1 className="text-2xl font-semibold">Explore Talent</h1>
"
      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
:pages_backup/talent/index.tsx
<<<<<<< HEAD
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/talent/index.tsx
    const start = (page - 1) * pageSize;
return mockTalent.slice(start, start + pageSize);
  }, [page]);
  return (
    <div className='space-y-6 pb-16'>
      <Head>
        <title>Talent - Zion</title>
      </Head>

<h1 className='text-2xl font-semibold'>Explore Talent</h1>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

"
      <h1 className="text-2xl font-semibold">Explore Talent</h1>
"
      <div className="grid sm: grid-cols-2 lg:grid-cols-3 gap-4">
:pages_backup/talent/index.tsx
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {pageItems.map((t) => (
          <article key={t.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{t.name}</h3>
              <div className="flex gap-1">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

        {pageItems.map((t) => ("
          <article key={t.id} className="border rounded-md p-4 space-y-2">"
            <div className="flex items-center justify-between">"
              <h3 className="font-semibold">{t.name}</h3>"
              <div className="flex gap-1">

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              </div>
            </div>
            <div className="text-sm opacity-80">{t.title}</div>
            {t.testimonial && (
<<<<<<< HEAD
        page={page}
        pageSize={pageSize}
        total={total}
        onChange={setPage}
      />
:pages_backup/talent/index.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/talent/index.tsx
<<<<<<< HEAD
    </div>
  );
}
export default TalentDirectory;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/talent/index.tsx
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
;
export default TalentDirectory;
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/talent/index.tsx

:pages_backup/talent/index.tsx
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx
=======

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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/talent/index.tsx
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
<<<<<<< HEAD
<<<<<<< HEAD

:pages_backup/talent/index.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/index.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/talent/index.tsx
