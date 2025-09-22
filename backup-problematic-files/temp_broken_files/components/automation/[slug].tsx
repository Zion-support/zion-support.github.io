<<<<<<< HEAD

import type { NextPage } from 'next',
import Head from 'next / head',
import { use_router } from 'next / router',
import EnhancedLayout from '@/components / layout / EnhancedLayout',
const AutomationDetail: NextPage = () => {
  const router = use_router (),
  const { slug } = router.query as { slug?: string },
  let title = 'Automation Report',
  let data: any = null,
  try {
    // Check condition
if ( {) {
  $2
}
      data = require ('@/data / reports / marketplace - insights.json'),
      title = 'Marketplace Insights';
    } else // Check condition
if ( {) {
  $2
}
      data = require ('@/data / reports / content - health.json'),
      title = 'Content Health';
    }
  } catch (e) {
    data = null;

  }

=======

  return (


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    <EnhancedLayout>

      <Head>

        <title>{_title} - Zion Tech Solutions</title>
      
      <h1 className=&quot;text-xl font-semibold mb-4&quot;>{title}</h1>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {!data ? (
<<<<<<< HEAD
        <div className=&quot;opacity-70&quot;>No report found.</div>
      ) : (
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      {!data ? (

        <pre className=&quot;text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto&quot;>{JSON.stringify(data, null, 2)}</pre>      )}
    </EnhancedLayout>
  )
},

export default AutomationDetail,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        <pre className=&quot;text-xs whitespace-pre-wrap break-words rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 overflow-x-auto&quot;>{JSON.stringify(data, null, 2)}</pre>      )}
    
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
