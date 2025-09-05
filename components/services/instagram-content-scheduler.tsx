<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
=======
import type {_NextPage} from 'next';
import Head from 'next/head';

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string never>,

const ServicePage: NextPage<Props> = () => {_return (
    <>
      <Head>
        <title>Instagram Content Scheduler | Services</title>
        <meta name=&quot;description&quot; content=&quot;Auto-generate posts from blog feeds and schedule with analytics.&quot; />
      </Head>
      
      <main>
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <a href=&quot;/services&quot;>Back to Services</a>
      </main>
    </div>
<<<<<<< HEAD
  )
},
=======
  );};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default ServicePage,
