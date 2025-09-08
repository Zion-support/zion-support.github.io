<<<<<<< HEAD


      <Head>

        <title>{_title} - Zion Tech Solutions</title>

      </Head>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>{title}</h1>
      {!data ? (


        <pre className=&quot;text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto&quot;>{JSON.stringify(data, null, 2)}</pre>      )}
    </EnhancedLayout>
  )
},

export default AutomationDetail,






=======
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
const AutomationDetail: NextPage = () => {const router = useRouter();
  const { slug } = router.query as { slug?: string }
  let title = 'Automation Report';
  let data: any = null;
  try {if (slug === 'marketplace-insights') {;
      data = require('@/data/reports/marketplace-insights.json');
      title = 'Marketplace Insights';
    } else if (slug === 'content-health') {data = require('@/data/reports/content-health.json');
      title = 'Content Health';
    }
  } catch (e) {data = null;
  }
return (
    <EnhancedLayout>
      <Head>
        <title>{_title} - Zion Tech Solutions</title>
      </Head>
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>{title}</h1>
      {!data ? (
        <div className=&quot;opacity-70&quot;>No report found.</div>
      ) : (
        <pre className=&quot;text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto&quot;>{JSON.stringify(data, null, 2)}</pre>
      )}
    </EnhancedLayout>;
  );
}
export default AutomationDetail;
>>>>>>> origin/cursor/delete-old-data-records-6bba
