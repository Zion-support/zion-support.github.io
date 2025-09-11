<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import {useEffect, useMemo, useState} from 'react';
import Head from 'next/head';


=======
import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head',
import {useEffect, useMemo, useState} from 'react';
import Head from 'next/head';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';


  const storageKey = 'zion_favorites';
  const [favorites, setFavorites] = useState<string[]>([]);



  return (
    <div>
      <Head>
        <title>Favorites — Zion AI Marketplace</title>
      </Head>


      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">

<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useMemo, useState  } from 'react';
import Head from 'next/head',
import {useEffect, useMemo, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';
function useFavorites() {

  const storageKey = 'zion_favorites';
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setFavorites(JSON.parse(raw));    } catch {}
  }, []);
  const remove = (slug: string) =>: any set_favorites ((prev) => prev.filter ((s) => s !== slug)),
  return { favorites, remove }
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">Favorites</li>
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const remove = (slug: string) => setFavorites((prev) => prev && prev.filter((s) => s !== slug)),;
  return { favorites, remove };
}
export default function FavoritesPage() {;
  const { favorites, remove } = useFavorites();
  const profiles = useMemo(;
    () => TALENT_PROFILES && TALENT_PROFILES.filter(t => favorites && favorites.includes(t && t.slug)),;
    [favorites];
  );  const profiles = useMemo(() => TALENT_PROFILES && TALENT_PROFILES.filter((t) => favorites && favorites.includes(t && t.slug)), [favorites]);
  return (
    <div>;
      <Head>;
        <title>Favorites — Zion AI Marketplace</title>;
      </Head>;
      <div className='mb-6 text-sm text-gray-500 dark:text-gray-400'>;
        <nav aria-label='Breadcrumb'>;
          <ol className='flex items-center gap-2'>;
            <li>;
              <Link href='/'>;
                <a className='hover:underline'>Home</a>;
              </Link>;
            </li>;
            <li aria-hidden='true'>/</li>;
            <li
              className='text-gray-900 dark:text-gray-100'
              aria-current='page'>;
              Favorites;
            </li>          </ol>;
        </nav>;
      </div>;
      <h1 className='text-2xl font-semibold mb-4'>Saved Talent</h1>      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">;
        <nav aria-label="Breadcrumb">;
          <ol className="flex items-center gap-2">;
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>;
            <li aria-hidden="true">/</li>;
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">Favorites</li>;
        </nav>;
      </div>;
      <h1 className='text-2xl font-semibold mb-4'>Saved Talent</h1>;
      {profiles && profiles.length === 0 ? (;
        <div className='rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center'>;
          <div className='text-gray-600 dark:text-gray-300'>;
            You haven't saved any talent yet.;
          </div>;
          <div className='mt-4'>;
            <Link href='/talent'>;
              <a className='px-4 py-2 rounded-md bg-indigo-600 text-white'>;
export default /**
 * FavoritesPage - Function description
 */
function FavoritesPage() {
  const { favorites, remove } = use_favorites ();
  const profiles = useMemo (
    () => TALENT_PROFILES.filter (t => favorites.includes (t.slug)),
    [favorites]);  const profiles = useMemo (() => TALENT_PROFILES.filter ((t) => favorites.includes (t.slug)), [favorites]);
;
  return (
    <div>;
      <Head>;
        <title > Favorites — Zion AI Marketplace</title>;
      </Head>;
      <div className='mb - 6 text - sm text - gray - 500 dark:text - gray - 400'>;
        <nav aria - label='Breadcrumb'>;
          <ol className='flex items - center gap - 2'>;
            <li>;
              <Link href='/'>;
                <a className='hover:underline'>Home</a>;
              </Link>;
            </li>;
            <li aria - hidden='true'>/</li>;
            <li;
              className='text - gray - 900 dark:text - gray - 100';
              aria - current='page';
            >;
              Favorites;
            </li>          </ol>;
        </nav>;
      </div>;
      <h1 className='text - 2xl font - semibold mb - 4'>Saved Talent</h1>      <div className="mb - 6 text - sm text - gray - 500 dark:text - gray - 400">;
        <nav aria - label="Breadcrumb">;
          <ol className="flex items - center gap - 2">;
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>;
            <li aria - hidden="true">/</li>;
            <li className="text - gray - 900 dark:text - gray - 100" aria - current="page">Favorites</li>;
        </nav>;
      </div>;
      <h1 className='text - 2xl font - semibold mb - 4'>Saved Talent</h1>;
      {profiles.length === 0 ? (
        <div className='rounded - xl border border - gray - 200 dark:border - gray - 800 p - 8 text - center'>;
          <div className='text - gray - 600 dark:text - gray - 300'>;
            You haven't saved any talent yet.;
          </div>;
          <div className='mt - 4'>;
            <Link href='/talent'>;
              <a className='px - 4 py - 2 rounded - md bg - indigo - 600 text - white'>;
                Browse Talent;
              </a>;
            </Link>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>) : (
        <div className='grid grid - cols - 1 sm:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
          {profiles.map (t => (
            <div;
              key={t.slug}
<<<<<<< HEAD
              className='rounded - xl border border - gray - 200 dark:border - gray - 800 p - 5 bg - white / 70 dark:bg - black / 40';
            >;
              <div className='flex items - center justify - between'>;
                <div>;
                  <div className='font - medium'>{t.name}</div>;
                  <div className='text - sm text - gray - 600 dark:text - gray - 300'>;
                    {t.title}
                  </div>;
                </div>;
                <button;
                  on_click={() => remove (t.slug)}
                  className='text - xs text - pink - 600 border border - pink - 600 rounded px - 2 py - 1';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                >;
                  Remove;
                </button>;
              </div>;

<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


          </ol>
        </nav>
      </div>


    </div>;
  );
}

<<<<<<< HEAD
          </ol>
        </nav>
      </div>
      <h1 className="text-2xl font-semibold mb-4">Saved Talent</h1>
      {profiles.length === 0 ? (
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <div className="text-gray-600 dark:text-gray-300">You haven't saved any talent yet.</div>
          <div className="mt-4">
            <Link href="/talent"><a className="px-4 py-2 rounded-md bg-indigo-600 text-white">Browse Talent</a></Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((t) => (
            <div key={t.slug} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t.title}</div>
                </div>
                <button onClick={() => remove(t.slug)} className="text-xs text-pink-600 border border-pink-600 rounded px-2 py-1">Remove</button>
              </div>
              <div className="mt-3 text-xs text-gray-500">{t.location}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {t.skills.slice(0, 4).map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="font-medium">${t.hourlyRateUsd}/hr</div>
                <div className="flex items-center gap-3">
                  <Link href={`/talent/${t.slug}`}><a className="px-3 py-1.5 rounded-md bg-indigo-600 text-white">View Profile</a></Link>
                  <Link href={`/talent/${t.slug}?hire=1`}><a className="px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600">Request to Hire</a></Link>
export default function FavoritesPage() {

export default function FavoritesPage() {;
  const { favorites, remove } = useFavorites();
  const profiles = useMemo(
    () => TALENT_PROFILES.filter(t => favorites.includes(t.slug))
    [favorites]
  );  const profiles = useMemo(() => TALENT_PROFILES.filter((t) => favorites.includes(t.slug)), [favorites]);

  return (
    <div>
      <Head>
        <title>Favorites — Zion AI Marketplace</title>
      </Head>
      <div className='mb-6 text-sm text-gray-500 dark:text-gray-400'>
        <nav aria-label='Breadcrumb'>
          <ol className='flex items-center gap-2'>
            <li>
              <Link href='/'>
                <a className='hover:underline'>Home</a>
              </Link>
            </li>
            <li aria-hidden='true'>/</li>
            <li
              className='text-gray-900 dark:text-gray-100'
              aria-current='page'
            >
              Favorites
            </li>          </ol>
        </nav>
      </div>
      <h1 className='text-2xl font-semibold mb-4'>Saved Talent</h1>      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">Favorites</li>
        </nav>
      </div>
      <h1 className='text-2xl font-semibold mb-4'>Saved Talent</h1>
      {profiles.length === 0 ? (
        <div className='rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center'>
          <div className='text-gray-600 dark:text-gray-300'>
            You haven't saved any talent yet.
          </div>
          <div className='mt-4'>
            <Link href='/talent'>
              <a className='px-4 py-2 rounded-md bg-indigo-600 text-white'>
                Browse Talent
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {profiles.map(t => (
            <div
              key={t.slug}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <div className='font-medium'>{t.name}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-300'>
                    {t.title}
                  </div>
                </div>
                <button
                  onClick={() => remove(t.slug)}
                  className='text-xs text-pink-600 border border-pink-600 rounded px-2 py-1'
                >
                  Remove
                </button>
              </div>
              <div className='mt-3 text-xs text-gray-500'>{t.location}</div>
              <div className='mt-3 flex flex-wrap gap-2'>
                {t.skills.slice(0, 4).map(s => (
                  <span
                    key={s}
                    className='text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800'
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className='mt-4 flex items-center justify-between text-sm'>
                <div className='font-medium'>${t.hourlyRateUsd}/hr</div>
                <div className='flex items-center gap-3'>
                  <Link href={`/talent/${t.slug}`}>
                    <a className='px-3 py-1.5 rounded-md bg-indigo-600 text-white'>
                      View Profile
                    </a>
                  </Link>
                  <Link href={`/talent/${t.slug}?hire=1`}>
                    <a className='px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600'>
                      Request to Hire
                    </a>
                  </Link>                </div>              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="font-medium">${t.hourlyRateUsd}/hr</div>
                <div className="flex items-center gap-3">
                  <Link href={`/talent/${t.slug}`}><a className="px-3 py-1.5 rounded-md bg-indigo-600 text-white">View Profile</a></Link>
                  <Link href={`/talent/${t.slug}?hire=1`}><a className="px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600">Request to Hire</a></Link>
              </div>
            </div>
          ))}
<<<<<<< HEAD
</div>;
      )}
    </div>;
  );
}
=======
        </div>
      )}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>
);
}

          </ol>
        </nav>
      </div>
<<<<<<< HEAD
=======
=======
    </div>
<<<<<<< HEAD
  );
}
              <div className='mt - 3 text - xs text - gray - 500'>{t.location}</div>;
              <div className='mt - 3 flex flex - wrap gap - 2'>;
                {t.skills.slice (0, 4).map (string => (
                  <span;
                    key={s}
                    className='text - xs px - 2 py - 1 rounded bg - gray - 100 dark:bg - gray - 900 border border - gray - 200 dark:border - gray - 800';
                  >;
                    {s}
                  </span>))}
              </div>;
              <div className='mt - 4 flex items - center justify - between text - sm'>;
                <div className='font - medium'>${t.hourlyRateUsd}/hr</div>;
                <div className='flex items - center gap - 3'>;
                  <Link href={`/talent/${t.slug}`}>;
                    <a className='px - 3 py - 1.5 rounded - md bg - indigo - 600 text - white'>;
                      View Profile;
                    </a>;
                  </Link>;
                  <Link href={`/talent/${t.slug}?hire = 1`}>;
                    <a className='px - 3 py - 1.5 rounded - md border border - indigo - 600 text - indigo - 600'>;
                      Request to Hire;
                    </a>;
                  </Link>                </div>              <div className="mt - 4 flex items - center justify - between text - sm">;
                <div className="font - medium">${t.hourlyRateUsd}/hr</div>;
                <div className="flex items - center gap - 3">;
                  <Link href={`/talent/${t.slug}`}><a className="px - 3 py - 1.5 rounded - md bg - indigo - 600 text - white">View Profile</a></Link>;
                  <Link href={`/talent/${t.slug}?hire = 1`}><a className="px - 3 py - 1.5 rounded - md border border - indigo - 600 text - indigo - 600">Request to Hire</a></Link>;
              </div>;
            </div>))}
        </div>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


    </div>;
  );
}

=======
    </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
