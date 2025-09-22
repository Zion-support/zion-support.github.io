import type { NextPage } from 'next
import Head from 'next/head
// Using an explicit empty object type for props to satisfy lint rules;
type Props = Record<string, never>,
</string>
type Props = Record<string never>,

const ServicePage: NextPage<Props> = () => {_return (

    <>
      <Head>

        <title>Instagram Content Scheduler | Services</title>
<<<<<<< HEAD
        <meta name="description" content="Auto-generate posts from blog feeds and schedule with analytics." />
      </Head>
<<<<<<< HEAD

=======
=======
        <meta name="description" content="Auto-generate posts from blog feeds and schedule with analytics." />"
</meta>
      
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <main>
</main>
        <h1>InstagramContentScheduler</h1>
<<<<<<< HEAD
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
=======
        <p>Service details coming soon...</p>"
        <a href="/services">Back to Services</a>"
    </div>)"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
