<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import { useRouter } from 'next/router',
import EnhancedLayout from '@/components/layout/EnhancedLayout',
const AutomationDetail: NextPage = () => {
  const router = useRouter(),
  const { slug } = router.query as { slug?: string },

  let title = 'Automation Report',
  let data: any = null,

  try {
    if (slug === 'marketplace-insights') {
       
      data = require('@/data/reports/marketplace-insights.json'),
      title = 'Marketplace Insights'
    } else if (slug === 'content-health') {
       
      data = require('@/data/reports/content-health.json'),
      title = 'Content Health'
    }
  } catch (e) {
    data = null
  }
=======
import type {_NextPage} from 'next';
import Head from 'next/head';
import EnhancedLayout from '@/components/layout/EnhancedLayout';

const AutomationDetail: NextPage = () => {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};

  let _title = 'Automation Report';
  let data: unknown = null;

  try {_if (slug === 'marketplace-insights') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      data = require('@/data/reports/marketplace-insights.json');
      title = 'Marketplace Insights';} else if (slug === 'content-health') {_// eslint-disable-next-line @typescript-eslint/no-var-requires
      data = require('@/data/reports/content-health.json');
      title = 'Content Health';}
  } catch (e) {_data = null;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <EnhancedLayout>
      <Head>
        <title>{_title} - Zion Tech Solutions</title>
      </Head>
<<<<<<< HEAD
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>{title}</h1>
      {!data ? (
        <div className=&quot;opacity-70&quot;>No report found.</div>
      ) : (
        <pre className=&quot;text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto&quot;>{JSON.stringify(data, null, 2)}</pre>
=======
      <h1 className="text-xl font-semibold mb-4">{_title}</h1>
      {_!data ? (
        <div className="opacity-70">No report found.</div>
      ) : (
        <pre className="text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto">{JSON.stringify(data, _null, _2)}</pre>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    </EnhancedLayout>
  )
},

export default AutomationDetail,