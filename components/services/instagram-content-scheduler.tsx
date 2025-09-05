<<<<<<< HEAD
import type { NextPage } from 'next',;
import Head from 'next/head',;
;
// Using an explicit empty object type for props to satisfy lint rules;
type Props = Record<string never>,;
;
const ServicePage:NextPage<Props> = () => {;
  return (;
    <>;
      <Head>;
        <title>Instagram Content Scheduler | Services</title>;
        <meta name="description" content="Auto-generate posts from blog feeds and schedule with analytics." />;
      </Head>;
      ;
      <main>;
        <h1>InstagramContentScheduler</h1>;
        <p>Service details coming soon...</p>;
        <a href="/services">Back to Services</a>;
      </main>;
    </div>;
  );
},;
;
export default ServicePage,;
=======
import type { NextPage } from 'next',
import Head from 'next/head',// Using an explicit empty object type for props to satisfy lint rules
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
  )
},
export default ServicePage,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
