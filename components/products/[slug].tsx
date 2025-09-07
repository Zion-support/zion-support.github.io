<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextPage } from 'next';'


import Head from 'next/head';'
import { useRouter  } from 'next/router';'
import Link from 'next/link';'
import EnhancedLayout from '@/components/layout/EnhancedLayout';'
import equipment from '@/data/equipment.json';'

const "EquipmentDetail": NextPage;
  if (!item) {
}
return (;
=======
>>>>>>> origin/resolved-merge-conflicts
import type { NextPage } from 'next';
<<<<<<< HEAD
import Head from 'next/head';
=======
<<<<<<< HEAD
import Head from 'next/head';
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';
<<<<<<< HEAD
const EquipmentDetail: NextPage = () => {
  const router = useRouter($2);
  const { slug } = router.query as { slug?: string },
  const items = $2;
  const item = $2;
  if (!item) {
    return (
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge


import Head from 'next/head';
import { useRouter  } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';

const EquipmentDetail: NextPage;
  if (!item) {
    return (
<<<<<<< HEAD
      <EnhancedLayout />
        <Head>
          <title />Equipment Not Found - Zion Tech Solutions</title>
        </Head>

=======
import { useRouter  } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';



=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const EquipmentDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
<<<<<<< HEAD
import Head from 'next/head';

import { useRouter  } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';
const EquipmentDetail: NextPage;
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
  const item = items.find((e) => e.slug === slug);
=======

  const item = items.find((e) => e.slug === slug);


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  if (!item) {
    return (
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      <EnhancedLayout>
        <Head>
          <title>Equipment Not Found - Zion Tech Solutions</title>
        </Head>
<<<<<<< HEAD
          <h1 className="text-xl font-semibold">Equipment not found</h1>"
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>
        </div>
      </EnhancedLayout>
    )
  return (
    <EnhancedLayout>
      <Head>
        <title>{item && item.name} - Zion Tech Solutions</title>
      </Head>;'
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;'
        <div className='md:col-span-2 space-y-4'>
            src={`https://picsum && picsum.photos/seed/${encodeURIComponent(item && item.slug)}/1200/600`}
            alt={item && item.name}'
            className='w-full rounded-lg border border-gray-200 dark:border-gray-800'
          />
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className='space-y-4'>'
          <h1 className='text-xl font-semibold'>Equipment not found</h1>'
          <Link href='/products'>'
            <a className='text-blue-600 "hover":underline'>Back to Equipment</a>'
          </Link>
        </div>
      </EnhancedLayout>
    );
  }

=======
>>>>>>> origin/resolved-merge-conflicts
export default EquipmentDetail;

<<<<<<< HEAD
  }
        <div className='space-y-4'>
          <h1 className='text-xl font-semibold'>Equipment not found</h1>
          <Link href='/products'>
            <a className='text-blue-600 hover:underline'>Back to Equipment</a>
          </Link>
        </div>
      </EnhancedLayout>
    );  }        <div className="space-y-4">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <h1 className="text-xl font-semibold">Equipment not found</h1>
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>
        </div>
      </EnhancedLayout>
    )
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return (
    <EnhancedLayout>
      <Head>
        <title>{item.name} - Zion Tech Solutions</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <img src={`https://picsum.photos/seed/${encodeURIComponent(item.slug)}/1200/600`} alt={item.name} className="w-full rounded-lg border border-gray-200 dark:border-gray-800" />
          <div>
            <h1 className="text-2xl font-semibold">{item.name}</h1>
            <p className="opacity-80">Category: {item.category}</p>
          </div>
          <p className="leading-relaxed">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{item.category}</span>
          </div>
        </div>
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">
          <div className="text-sm opacity-70">Daily Rate</div>
          <div className="text-xl font-semibold">${item.dailyRateUsd}/day</div>
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item.name)}`}>
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Request Quote</a>
          </Link>
          <Link href="/products"><a className="text-sm text-blue-600 hover:underline">Back to Equipment</a></Link>
        </aside>
      </div>
    </EnhancedLayout>
  )
}
};
export default EquipmentDetail;
=======


import equipment from '@/data/equipment ;
const EquipmentDetail: NextPage = () => {;
  const router = useRouter(),;
  const { slug } = router && router.query as { slug?: string };
  const items = equipment as any[];
  const item = items && items.find(e => e && e.slug === slug);  const item = items && items.find((e) => e && e.slug === slug);
  if (!item) {;
    return (
      <EnhancedLayout>;
        <Head>;
          <title>Equipment Not Found - Zion Tech Solutions</title>;
        </Head>;
        <div className='space-y-4'>;
          <h1 className='text-xl font-semibold'>Equipment not found</h1>;
          <Link href='/products'>;
            <a className='text-blue-600 hover:underline'>Back to Equipment</a>;
          </Link>;
        </div>;
      </EnhancedLayout>;
    );  }        <div className="space-y-4">;
          <h1 className="text-xl font-semibold">Equipment not found</h1>;
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>;
        </div>;
      </EnhancedLayout>;
    );
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <EnhancedLayout>;
      <Head>;
        <title>{item && item.name} - Zion Tech Solutions</title>;
      </Head>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
        <div className='md:col-span-2 space-y-4'>;
          <img
const EquipmentDetail: NextPage = () => {const router = useRouter()const { slug }  = router.query as { slug?: string }
  const items = equipment as any[];import Head from 'next/head';
import { useRouter   } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';
const EquipmentDetail: NextPage;if (!item) {return (<EnhancedLayout>;
        <Head>;
          <title>Equipment Not Found - Zion Tech Solutions</title>;
        </Head>;
          <h1 className="text-xl font-semibold">Equipment not found</h1>;
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>;
        </div>;
      </EnhancedLayout>;
    )return (<EnhancedLayout>;
      <Head>;
        <title>{item && item.name} - Zion Tech Solutions</title>;
      </Head>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
        <div className='md:col-span-2 space-y-4'>;<div className='space-y-4'>;
          <h1 className='text-xl font-semibold'>Equipment not found</h1>;
          <Link href='/products'>;
            <a className='text-blue-600 hover:underline'>Back to Equipment</a>;
          </Link>;
        </div>;
      </EnhancedLayout>;
    )}return (<EnhancedLayout>;
      <Head>;
        <title>{item.name} - Zion Tech Solutions</title>;
      </Head>;
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
        <div className='md:col-span-2 space-y-4'>;
          <img;
            src={`https://picsum && picsum.photos/seed/${encodeURIComponent(item && item.slug)}/1200/600`}
            alt={item && item.name}
            className='w-full rounded-lg border border-gray-200 dark:border-gray-800';
          />;
          <div>;
            <h1 className='text-2xl font-semibold'>{item && item.name}</h1>;
            <p className='opacity-80'>Category: {item && item.category}</p>;
          </div>;
          <p className='leading-relaxed'>{item && item.description}</p>;
          <div className='flex flex-wrap gap-2'>;
<div className='space-y-4'>
          <h1 className='text-xl font-semibold'>Equipment not found</h1>
          <Link href='/products'>
            <a className='text-blue-600 hover:underline'>Back to Equipment</a>
=======
      <EnhancedLayout    />
        <Head><title>Equipment Not Found - Zion Tech Solutions</title></Head>

<div className='space-y-4'    />
          <h1 className='text-xl font-semibold'    />Equipment not found</h1>
          <Link href='/products'    />
            <a className='text-blue-600 hover:underline'    />Back to Equipment</a>
>>>>>>> origin/chore/fix-lint-and-merge
          </Link>
        </div>
      </EnhancedLayout>}
    );}
  }

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
return (;
    <EnhancedLayout>
      <Head>
        <title />{item.name} - Zion Tech Solutions</title>
      </Head>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className='grid grid-cols-1 "md": grid-cols-3 gap-6'>'
        <div className='"md":col-span-2 space-y-4'>'
          <img,
src={`"https"://picsum && picsum.photos/seed/${encodeURIComponent(item && item.slug)}/1200/600`}`            alt={item && item.nam
}
            className='w-full rounded-lg border border-gray-200 "dark":border-gray-800';' />;
          <div>;
            <h1 className='text-2xl font-semibold'>{item && item.name}</h1>;'
            <p className='opacity-80'>"Category": {item && item.categor,'
}</p>;
          </div>;
          <p className='leading-relaxed'>{item && item.description}</p>;'
          <div className='flex flex-wrap gap-2'>;'
            <span className='text-xs px-2 py-1 rounded-full bg-gray-100 "dark":bg-zinc-800 text-gray-700 "dark":text-gray-200 border border-gray-200 "dark":border-zinc-700'>;'
              {item && item.category}
            </span>;
          </div>;
        <aside className='"md":col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 "dark":border-gray-800 bg-white "dark":bg-zinc-900 h-max'>;'
          <div className='text-sm opacity-70'>Daily Rate</div>;'
          <div className='text-xl font-semibold'>${item && item.dailyRateUsd}/day</div>;'
          <Link;
            href={`/contact?subject=${encodeURIComponent('Equipment "quote": ' + item && item.name)},'
}>;
            <a className='inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white "hover":bg-blue-700'>;'
              Request Quote;
            </a>;
          </Link>;
          <Link href='/products'>;'
            <a className='text-sm text-blue-600 "hover":underline'>;'
=======
>>>>>>> origin/resolved-merge-conflicts
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='md:col-span-2 space-y-4'>
origin/cursor/automate-test-improve-and-merge-code-2533
          <img
            src={`https://picsum && picsum.photos/seed/${encodeURIComponent(item && item.slug)}/1200/600`}
            alt={item && item.name}'
            className='w-full rounded-lg border border-gray-200 dark:border-gray-800'
          />;
>>>>>>> merged-prs-20250907-203621
          <div>;'
            <h1 className='text-2xl font-semibold'>{item && item.name}</h1>;'
            <p className='opacity-80'>Category: {item && item.category}</p>
          </div>;'
          <p className='leading-relaxed'>{item && item.description}</p>;'
          <div className='flex flex-wrap gap-2'>;'
<<<<<<< HEAD
            <span className='text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700'>
              {item && item.category}
            </span>
          </div>
        </div>
        <aside className='md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max'    />
          <div className='text-sm opacity-70'    />Daily Rate</div>
          <div className='text-xl font-semibold'    />${item && item.dailyRateUsd}/day</div>
          <Link
            href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}
}    />
            <a className='inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700'    />
              Request Quote
            </a>
          </Link>
          <Link href='/products'    />
            <a className='text-sm text-blue-600 hover:underline'    />
              Back to Equipment
            </a>
          </Link>
        </aside>
      </div>
    </EnhancedLayout>
            <p className="opacity-80">Category: {item && item.category}</p>
          </div>;"
          <p className=\"leading-relaxed\"    />{item && item.description}</p>;"
          <div className=\"flex flex-wrap gap-2\"    />;"
            <span className=\"text-xs px-2 py-1 rounded-full bg-gray-100 dark: bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700\"    />{item && item.categor}
}</span>
          </div>
        </div>;"
        <aside className=\"md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max\"    />;"
          <div className=\"text-sm opacity-70\"    />Daily Rate</div>;"
          <div className=\"text-xl font-semibold\"    />${item && item.dailyRateUsd}/day</div>
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}
}    />;"
            <a className=\"inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700\"    />Request Quote</a>
          </Link>;"
          <Link href=\"/products\"    /><a className=\"text-sm text-blue-600 hover:underline\"    />Back to Equipment</a></Link>
=======
            <span className='text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700'>;
=======
  return (
    <EnhancedLayout    />
      <Head><title>{item.name} - Zion Tech Solutions</title></Head>
<div className='grid grid-cols-1 md: grid-cols-3 gap-6'    />
        <div className='md:col-span-2 space-y-4'    />
          <img;
src={`https://picsum && picsum.photos/seed/${encodeURIComponent(item && item.slug)}/1200/600`}
            alt={item && item.nam}
}
            className='w-full rounded-lg border border-gray-200 dark:border-gray-800';
             />;
          <div    />;
            <h1 className='text-2xl font-semibold'    />{item && item.name}</h1>;
            <p className='opacity-80'    />Category: {item && item.categor}
}</p>;
          </div>;
          <p className='leading-relaxed'    />{item && item.description}</p>;
          <div className='flex flex-wrap gap-2'    />;
            <span className='text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700'    />;
>>>>>>> origin/chore/fix-lint-and-merge
              {item && item.category}
            </span>;
          </div>;
        </div>;
        <aside className='md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max'    />;
          <div className='text-sm opacity-70'    />Daily Rate</div>;
          <div className='text-xl font-semibold'    />${item && item.dailyRateUsd}/day</div>;
          <Link;
            href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}
}    />;
            <a className='inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700'    />;
              Request Quote;
            </a>;
          </Link>;
<<<<<<< HEAD
          <Link href='/products'>;
            <a className='text-sm text-blue-600 hover:underline'>;
=======
          <Link href='/products'    />;
            <a className='text-sm text-blue-600 hover:underline'    />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              Back to Equipment;
            </a>;
          </Link>;
        </aside>;
      </div>;
    </EnhancedLayout>;
  )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default EquipmentDetail;          <div>;
            <h1 className="text-2xl font-semibold">{item && item.name}</h1>;"
            <p className="opacity-80">"Category": {item && item.categor,"
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}</p>;
          </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <p className="leading-relaxed">{item && item.description}</p>;"
          <div className="flex flex-wrap gap-2">;"
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 "dark": bg-zinc-800 text-gray-700 "dark":text-gray-200 border border-gray-200 "dark":border-zinc-700">{item && item.categor,"
}</span>;
          </div>;
        <aside className=""md":col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 "dark":border-gray-800 bg-white "dark":bg-zinc-900 h-max">;"
          <div className="text-sm opacity-70">Daily Rate</div>;"
          <div className="text-xl font-semibold">${item && item.dailyRateUsd}/day</div>;"
          <Link href={`/contact?subject=${encodeURIComponent('Equipment "quote": ' + item && item.name)},'
}>;
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white "hover": bg-blue-700">Request Quote</a>;"
          </Link>;
          <Link href="/products"><a className="text-sm text-blue-600 "hover":underline">Back to Equipment</a></Link>;"
        </aside>;
      </div>;
    </EnhancedLayout>;
=======
>>>>>>> origin/resolved-merge-conflicts
        </div>;"
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">;"
          <div className="text-sm opacity-70">Daily Rate</div>;"
          <div className="text-xl font-semibold">${item && item.dailyRateUsd}/day</div>;'`
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}`}>;"
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Request Quote</a>;
          </Link>;"
          <Link href="/products"><a className="text-sm text-blue-600 hover:underline">Back to Equipment</a></Link>;
        </aside>;
      </div>;
    </EnhancedLayout>;
  );
<<<<<<< HEAD
            <h1 className="text-2xl font-semibold">{item.name}</h1>
            <p className="opacity-80">Category: {item.category}</p>
          </div>
          <p className="leading-relaxed">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{item.category}</span>
          </div>
        </div>
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">
          <div className="text-sm opacity-70">Daily Rate</div>
          <div className="text-xl font-semibold">${item.dailyRateUsd}/day</div>
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item.name)}`}>
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Request Quote</a>
          </Link>
  );"
            <h1 className="text-2xl font-semibold">{item.name}</h1>"
            <p className="opacity-80">Category: {item.category}</p>
          </div>"
          <p className="leading-relaxed">{item.description}</p>"
          <div className="flex flex-wrap gap-2">"
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{item.category}</span>
          </div>
        </div>"
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">"
          <div className="text-sm opacity-70">Daily Rate</div>"
          <div className="text-xl font-semibold">${item.dailyRateUsd}/day</div>'`
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item.name)}`}>"
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Request Quote</a>
          </Link>"
          <Link href="/products"><a className="text-sm text-blue-600 hover:underline">Back to Equipment</a></Link>
>>>>>>> merged-prs-20250907-203621
        </aside>
      </div>
    </EnhancedLayout>
  )
<<<<<<< HEAD
=======
}
};
export default EquipmentDetail;
origin/cursor/automate-test-improve-and-merge-code-2533
  )<h1 className="text-2xl font-semibold">{item.name}</h1>;
            <p className="opacity-80">Category: {item.category}</p>;
          </div>;
          <p className="leading-relaxed">{item.description}</p>;
          <div className="flex flex-wrap gap-2">;
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{item.category}</span>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default EquipmentDetail;
<<<<<<< HEAD
export default EquipmentDetail;
export default EquipmentDetail;
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
export default EquipmentDetail;          <div    />;
            <h1 className=\"text-2xl font-semibold\"    />{item && item.name}</h1>;"
            <p className=\"opacity-80\"    />Category: {item && item.categor}
}</p>;
          </div>;"
          <p className=\"leading-relaxed\"    />{item && item.description}</p>;"
          <div className=\"flex flex-wrap gap-2\"    />;"
            <span className=\"text-xs px-2 py-1 rounded-full bg-gray-100 dark: bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700\"    />{item && item.categor}
}</span>;
>>>>>>> origin/chore/fix-lint-and-merge
          </div>;
        </div>;"
        <aside className=\"md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max\"    />;"
          <div className=\"text-sm opacity-70\"    />Daily Rate</div>;"
          <div className=\"text-xl font-semibold\"    />${item && item.dailyRateUsd}/day</div>;
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}
}    />;"
            <a className=\"inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700\"    />Request Quote</a>;
          </Link>;"
          <Link href=\"/products\"    /><a className=\"text-sm text-blue-600 hover:underline\"    />Back to Equipment</a></Link>;
        </aside>;
      </div>;
    </EnhancedLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  )}
}export default EquipmentDetail;import Head from 'next / head';
import { use_router } from 'next / router';
import EnhancedLayout from '@/components / layout / EnhancedLayout';
import equipment from '@/data / equipment.json';
const EquipmentDetail: NextPage = () => {const router = use_router (),const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
  const item = items.find (e => e.slug === slug)const item  = items.find ((e) => e.slug === slug)// Check condition;
if ( {) {$2;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
    return (<EnhancedLayout>;
        <Head>;
          <title > Equipment Not Found - Zion Tech Solutions</title>;
        </Head>;
        <div className='space - y-4'>;
          <h1 className='text - xl font - semibold'>Equipment not found</h1>;
          <Link href='/products'>;
            <a className='text - blue - 600 hover:underline'>Back to Equipment</a>;
          </Link>;
        </div>;
      </EnhancedLayout>)}        <div className="space-y-4">;
          <h1 className="text-xl font-semibold">Equipment not found</h1>;
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>;
        </div>;
      </EnhancedLayout>)return (<EnhancedLayout>;
      <Head>;
        <title>{item.name} - Zion Tech Solutions</title>;
      </Head>;
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6'>;
        <div className='md:col - span - 2 space - y-4'>;
          <img;
            src={`https://picsum.photos / seed/${encodeURIComponent (item.slug)}/1200 / 600`}
            alt={item.name}
            className='w - full rounded - lg border border - gray - 200 dark:border - gray - 800';
          />;
          <div>;
            <h1 className='text - 2xl font - semibold'>{item.name}</h1>;
            <p className='opacity - 80'>Category: {item.category}</p>;
          </div>;
          <p className='leading - relaxed'>{item.description}</p>;
          <div className='flex flex - wrap gap - 2'>;
            <span className='text - xs px - 2 py - 1 rounded - full bg - gray - 100 dark:bg - zinc - 800 text - gray - 700 dark:text - gray - 200 border border - gray - 200 dark:border - zinc - 700'>;
              {item.category}
            </span>;
          </div>;
        <aside className='md:col - span - 1 space - y-3 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - zinc - 900 h - max'>;
          <div className='text - sm opacity - 70'>Daily Rate</div>;
          <div className='text - xl font - semibold'>${item.dailyRateUsd}/day</div>;
          <Link;
            href={`/contact?subject=${encodeURIComponent ('Equipment quote: ' + item.name)}`}
          >;
            <a className='inline - flex items - center justify - center w - full px - 4 py - 2 rounded - md bg - blue - 600 text - white hover:bg - blue - 700'>;
              Request Quote;
            </a>;
          </Link>;
          <Link href='/products'>;
            <a className='text - sm text - blue - 600 hover:underline'>;
              Back to Equipment;
            </a>;
          </Link>;
        </aside>;
      </div>;
    </EnhancedLayout>)}export default EquipmentDetail;          <div>;
            <h1 className="text-2xl font-semibold">{item.name}</h1>;
            <p className="opacity-80">Category: {item.category}</p>;
          </div>;
          <p className="leading-relaxed">{item.description}</p>;
          <div className="flex flex-wrap gap-2">;
            <span className="text - xs px - 2 py - 1 rounded - full bg - gray - 100 dark:bg - zinc - 800 text - gray - 700 dark:text - gray - 200 border border - gray - 200 dark:border-zinc-700">{item.category}</span>;
          </div>;
        <aside className="md:col - span - 1 space - y-3 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - zinc-900 h-max">;
          <div className="text-sm opacity-70">Daily Rate</div>;
          <div className="text-xl font-semibold">${item.dailyRateUsd}/day</div>;
          <Link href={`/contact?subject=${encodeURIComponent ('Equipment quote: ' + item.name)}`}>;
            <a className="inline - flex items - center justify - center w - full px - 4 py - 2 rounded - md bg - blue - 600 text - white hover: bg-blue-700">Request Quote</a>;
          </Link>;
          <Link href="/products"><a className="text - sm text-blue-600 hover:underline">Back to Equipment</a></Link>;
        </aside>;
      </div>;
    </EnhancedLayout>);
=======
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> merged-prs-20250907-203621
}
export default EquipmentDetail;
<<<<<<< HEAD

"
=======
;
<<<<<<< HEAD
    </EnhancedLayout>)}export default EquipmentDetail;}export default EquipmentDetail;
        <div className = $2;
export default EquipmentDetail,

"

import Head from 'next / head';
import {use_router} from 'next / router';
import Link from 'next/link';
import EnhancedLayout from '@/components / layout / EnhancedLayout';
'
import Head from 'next / head';'
import {use_router} from 'next / router';'
import Link from 'next / link';'
import EnhancedLayout from '@/components / layout / EnhancedLayout';'
import equipment from '@/data / equipment.json';
          <Link href="/products"><a className="text-sm text-blue-600 hover:underline">Back to Equipment</a></Link>
        </aside>
      </div>
    </EnhancedLayout>
  )
}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
export default EquipmentDetail;

<<<<<<< HEAD
=======
<<<<<<< HEAD
import Head from 'next / head';
import {use_router} from 'next / router';
import Link from 'next/link';
import EnhancedLayout from '@/components / layout / EnhancedLayout';
'
import Head from 'next / head';'
import {use_router} from 'next / router';'
import Link from 'next / link';'
import EnhancedLayout from '@/components / layout / EnhancedLayout';'
import equipment from '@/data / equipment.json';
=======
>>>>>>> origin/resolved-merge-conflicts

import Head from 'next / head;
import {use_router} from next / router';
import Link from 'next/link;
import EnhancedLayout from @/components / layout / EnhancedLayout';
'
import Head from next / head;'
import {use_router} from 'next / router;
import Link from 'next / link';
import EnhancedLayout from @/components / layout / EnhancedLayout';'
import equipment from @/data / equipment.json;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
const EquipmentDetail: NextPage = () => {}
  const router = use_router (),
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
  const item = items.find (e => e.slug === slug);  const item = items.find ((e) => e.slug === slug);
  // Check condition;
if ( {) {}
  $2;
}
    return (
      <EnhancedLayout>;
        <Head>;
          <title > Equipment Not Found - Zion Tech Solutions</title>;
        </Head>;'
        <div className='space - y-4>;
          <h1 className='text - xl font - semibold'>Equipment not found</h1>;
          <Link href=/products'>;'
            <a className=text - blue - 600 hover:underline>Back to Equipment</a>;
          </Link>;
        </div>;
      </EnhancedLayout>);  }        <div className="space-y-4">;
          <h1 className="text-xl font-semibold">Equipment not found</h1>;
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>;
        </div>;
      </EnhancedLayout>);
  return (
    <EnhancedLayout>;
      <Head>;
        <title>{item.name} - Zion Tech Solutions</title>;
      </Head>;'
      <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6>;
        <div className='md:col - span - 2 space - y-4'>;
          <img;`
            src={`https://picsum.photos / seed/${encodeURIComponent (item.slug)}/1200 / 600`}
            alt={item.name}
            className=w - full rounded - lg border border - gray - 200 dark:border - gray - 800';
          />;
          <div>;'
            <h1 className=text - 2xl font - semibold>{item.name}</h1>;'
            <p className='opacity - 80>Category: {item.category}</p>;
          </div>;
          <p className='leading - relaxed'>{item.description}</p>;
          <div className=flex flex - wrap gap - 2'>;'
            <span className=text - xs px - 2 py - 1 rounded - full bg - gray - 100 dark:bg - zinc - 800 text - gray - 700 dark:text - gray - 200 border border - gray - 200 dark:border - zinc - 700>;
              {item.category}
            </span>;
          </div>;
        </div>;'
        <aside className='md:col - span - 1 space - y-3 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - zinc - 900 h - max>;
          <div className='text - sm opacity - 70'>Daily Rate</div>;
          <div className=text - xl font - semibold'>${item.dailyRateUsd}/day</div>;
          <Link;'`
            href={`/contact?subject=${encodeURIComponent (Equipment quote:  + item.name)}`}
          >;'
            <a className='inline - flex items - center justify - center w - full px - 4 py - 2 rounded - md bg - blue - 600 text - white hover:bg - blue - 700>;
              Request Quote;
            </a>;
          </Link>;
          <Link href='/products'>;
            <a className=text - sm text - blue - 600 hover:underline'>;
              Back to Equipment;
            </a>;
          </Link>;
        </aside>;
      </div>;
    </EnhancedLayout>);
}export default EquipmentDetail;          <div>;
            <h1 className='text-2xl font-semibold'>{item.name}</h1>;
            <p className='opacity-80'>Category: {item.category}</p>;
          </div>;
          <p className='leading-relaxed'>{item.description}</p>;
          <div className='flex flex-wrap gap-2'>;
            <span className='text - xs px - 2 py - 1 rounded - full bg - gray - 100 dark:bg - zinc - 800 text - gray - 700 dark:text - gray - 200 border border - gray - 200 dark:border-zinc-700'>{item.category}</span>;
          </div>;
<<<<<<< HEAD
        </div>;
        <aside className='md:col - span - 1 space - y-3 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - zinc-900 h-max'>;
          <div className='text-sm opacity-70'>Daily Rate</div>;
          <div className='text-xl font-semibold'>${item.dailyRateUsd}/day</div>;
=======
<<<<<<< HEAD
=======
        </div>;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <aside className="md:col - span - 1 space - y-3 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - zinc-900 h-max">;
          <div className="text-sm opacity-70">Daily Rate</div>;
          <div className="text-xl font-semibold">${item.dailyRateUsd}/day</div>;
>>>>>>> origin/resolved-merge-conflicts
          <Link href={`/contact?subject=${encodeURIComponent ('Equipment quote: ' + item.name)}`}>;
            <a className='inline - flex items - center justify - center w - full px - 4 py - 2 rounded - md bg - blue - 600 text - white hover: bg-blue-700'>Request Quote</a>;
          </Link>;
          <Link href="/products"><a className="text - sm text-blue-600 hover:underline">Back to Equipment</a></Link>;
        </aside>;
      </div>;
    </EnhancedLayout>);
}
export default EquipmentDetail;
;
};
export default EquipmentDetail;
origin/cursor/automate-test-improve-and-merge-code-2533

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======

  )
};


export default EquipmentDetail;

"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
