import type { NextPage } from 'next'
import Head from 'next/head'
// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string, never>,
// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string never>,

const ServicePage: NextPage<Props> = () => {_return (
    <>
      <Head>
        <title>Instagram Content Scheduler | Services</title>
        <meta name="description" content="Auto-generate posts from blog feeds and schedule with analytics." />
      </Head>
<<<<<<< HEAD

=======
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <main>
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <a href="/services">Back to Services</a>
      </main>
    </div>
  )
},

<<<<<<< HEAD
export default ServicePage
=======
export default ServicePage;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
