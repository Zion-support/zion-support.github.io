import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
const AutomationDetail: NextPage = () => {
  const router = useRouter($2);
  const { slug } = router.query as { slug?: string },

  let title = $2;
  let data: any = $2;
  try {
    if (slug === 'marketplace-insights') {
       
      data = require($2);
      title = 'Marketplace Insights'
    } else if (slug === 'content-health') {
       
      data = require($2);
      title = 'Content Health'
    }
  } catch (e) {
    data = null
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>{title} - Zion Tech Solutions</title>
      </Head>
      <h1 className='text-xl font-semibold mb-4'>{title}</h1>
      {!data ? (
        <div className='opacity-70'>No report found.</div>
      ) : (
        <pre className='text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto'>{JSON.stringify(data, null, 2)}</pre>
      )}
    </EnhancedLayout>
  )
},

<<<<<<< HEAD

export default AutomationDetail,

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default AutomationDetail,
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
export default AutomationDetail,
=======
export default AutomationDetail,
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
>>>>>>> origin/cursor/delete-old-data-records-6bba
