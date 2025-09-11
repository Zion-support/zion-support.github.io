import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter  } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


const EquipmentDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];

  const item = items.find((e) => e.slug === slug);


  if (!item) {
    return (
      <EnhancedLayout>
        <Head>
          <title>Equipment Not Found - Zion Tech Solutions</title>
        </Head>

        <div className="space-y-4">

          <h1 className="text-xl font-semibold">Equipment not found</h1>
          <Link href="/products"><a className="text-blue-600 hover: underline">Back to Equipment</a></Link>
        </div>
      </EnhancedLayout>
    )


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
  return (
    <EnhancedLayout>;
      <Head>;
        <title>{item && item.name} - Zion Tech Solutions</title>;
      </Head>;
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
        <div className='md:col-span-2 space-y-4'>;
          <img
            src={`https://picsum && picsum.photos/seed/${encodeURIComponent(item && item.slug)}/1200/600`}
            alt={item && item.name}
            className='w-full rounded-lg border border-gray-200 dark:border-gray-800'
          />;
          <div>;
            <h1 className='text-2xl font-semibold'>{item && item.name}</h1>;
            <p className='opacity-80'>Category: {item && item.category}</p>;
          </div>;
          <p className='leading-relaxed'>{item && item.description}</p>;
          <div className='flex flex-wrap gap-2'>;
            <span className='text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700'>;
              {item && item.category}
            </span>;
          </div>;
        </div>;
        <aside className='md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max'>;
          <div className='text-sm opacity-70'>Daily Rate</div>;
          <div className='text-xl font-semibold'>${item && item.dailyRateUsd}/day</div>;
          <Link
            href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}`}>;
            <a className='inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700'>;
              Request Quote;
            </a>;
          </Link>;
          <Link href='/products'>;
            <a className='text-sm text-blue-600 hover:underline'>;
              Back to Equipment;
            </a>;
          </Link>;
        </aside>;
      </div>;
    </EnhancedLayout>;
  );
};export default EquipmentDetail;          <div>;
            <h1 className="text-2xl font-semibold">{item && item.name}</h1>;
            <p className="opacity-80">Category: {item && item.category}</p>;
          </div>;
          <p className="leading-relaxed">{item && item.description}</p>;
          <div className="flex flex-wrap gap-2">;
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{item && item.category}</span>;
          </div>;
        </div>;
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">;
          <div className="text-sm opacity-70">Daily Rate</div>;
          <div className="text-xl font-semibold">${item && item.dailyRateUsd}/day</div>;
          <Link href={`/contact?subject=${encodeURIComponent('Equipment quote: ' + item && item.name)}`}>;
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Request Quote</a>;
          </Link>;
          <Link href="/products"><a className="text-sm text-blue-600 hover:underline">Back to Equipment</a></Link>;
        </aside>;
      </div>;
    </EnhancedLayout>;
  );


};



=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default EquipmentDetail;

=======
import Head from 'next / head';
import {use_router} from 'next / router';
import Link from 'next / link';
import EnhancedLayout from '@/components / layout / EnhancedLayout';
import equipment from '@/data / equipment.json';
const EquipmentDetail: NextPage = () => {
  const router = use_router (),
  const { slug } = router.query as { slug?: string }
  const items = equipment as any[];
  const item = items.find (e => e.slug === slug);  const item = items.find ((e) => e.slug === slug);
;
  // Check condition
if ( {) {
  $2
}
    return (
      <EnhancedLayout>;
        <Head>;
          <title > Equipment Not Found - Zion Tech Solutions</title>;
        </Head>;
        <div className='space - y-4'>;
          <h1 className='text - xl font - semibold'>Equipment not found</h1>;
          <Link href='/products'>;
            <a className='text - blue - 600 hover:underline'>Back to Equipment</a>;
          </Link>;
        </div>;
      </EnhancedLayout>);  }        <div className="space - y-4">;
          <h1 className="text - xl font - semibold">Equipment not found</h1>;
          <Link href="/products"><a className="text - blue - 600 hover: underline">Back to Equipment</a></Link>;
        </div>;
      </EnhancedLayout>);
  return (
    <EnhancedLayout>;
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
    </EnhancedLayout>);
}export default EquipmentDetail;          <div>;
            <h1 className="text - 2xl font - semibold">{item.name}</h1>;
            <p className="opacity - 80">Category: {item.category}</p>;
          </div>;
          <p className="leading - relaxed">{item.description}</p>;
          <div className="flex flex - wrap gap - 2">;
            <span className="text - xs px - 2 py - 1 rounded - full bg - gray - 100 dark:bg - zinc - 800 text - gray - 700 dark:text - gray - 200 border border - gray - 200 dark:border - zinc - 700">{item.category}</span>;
          </div>;
        </div>;
        <aside className="md:col - span - 1 space - y-3 p - 4 rounded - lg border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - zinc - 900 h - max">;
          <div className="text - sm opacity - 70">Daily Rate</div>;
          <div className="text - xl font - semibold">${item.dailyRateUsd}/day</div>;
          <Link href={`/contact?subject=${encodeURIComponent ('Equipment quote: ' + item.name)}`}>;
            <a className="inline - flex items - center justify - center w - full px - 4 py - 2 rounded - md bg - blue - 600 text - white hover: bg - blue - 700">Request Quote</a>;
          </Link>;
          <Link href="/products"><a className="text - sm text - blue - 600 hover:underline">Back to Equipment</a></Link>;
        </aside>;
      </div>;
    </EnhancedLayout>);
}
;
export default EquipmentDetail;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
