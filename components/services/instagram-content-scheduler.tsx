import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

<<<<<<< HEAD
// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string, never>;

const ServicePage: NextPage<Props> = () => {
=======
const InstagramContentScheduler: NextPage = () => {
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  return (
    <div>
      <Head>
        <title>InstagramContentScheduler - Zion Tech Solutions</title>
        <meta name="description" content="InstagramContentScheduler service" />
      </Head>
      
      <main>
        <h1>InstagramContentScheduler</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default InstagramContentScheduler;