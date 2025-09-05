import type {_NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import equipment from '@/data/equipment.json';

const EquipmentDetail: NextPage = () => {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};
  const _items = equipment as any[];
  const _item = items.find(_(e) => e.slug === slug);

  if (!item) {_return (
      <EnhancedLayout>
        <Head>
          <title>Equipment Not Found - Zion Tech Solutions</title>
        </Head>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Equipment not found</h1>
          <Link href="/products"><a className="text-blue-600 hover:underline">Back to Equipment</a></Link>
        </div>
      </EnhancedLayout>
    );}

  return (
    <EnhancedLayout>
      <Head>
        <title>{_item.name} - Zion Tech Solutions</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <img src={_`https://picsum.photos/seed/${encodeURIComponent(item.slug)}/1200/600`} alt={_item.name} className="w-full rounded-lg border border-gray-200 dark:border-gray-800" />
          <div>
            <h1 className="text-2xl font-semibold">{_item.name}</h1>
            <p className="opacity-80">Category: {_item.category}</p>
          </div>
          <p className="leading-relaxed">{_item.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{_item.category}</span>
          </div>
        </div>
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">
          <div className="text-sm opacity-70">Daily Rate</div>
          <div className="text-xl font-semibold">${_item.dailyRateUsd}/day</div>
          <Link href={_`/contact?subject=${encodeURIComponent('Equipment quote: ' + item.name)}`}>
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Request Quote</a>
          </Link>
          <Link href="/products"><a className="text-sm text-blue-600 hover:underline">Back to Equipment</a></Link>
        </aside>
      </div>
    </EnhancedLayout>
  );
};

export default EquipmentDetail;
