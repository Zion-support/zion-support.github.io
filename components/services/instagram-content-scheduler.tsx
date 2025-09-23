import type { NextPage } from 'next';
import Head from 'next/head';

// Using an explicit empty object type for props to satisfy lint rules
<<<<<<< HEAD
type Props = Record<stringnever>;
=======
type Props = Record<string, never>;
>>>>>>> origin/auto/autonomy-17186719616

const ServicePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Instagram Content Scheduler | Services</title>
        <meta name="description" content="Auto-generate posts from blog feeds and schedule with analytics." />
      </Head>
      
      <main>
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <a href="/services">Back to Services</a>
      </main>
    </div>
  );
};

export default ServicePage;
