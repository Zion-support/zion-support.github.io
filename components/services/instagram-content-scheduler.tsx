<<<<<<< HEAD
<<<<<<< HEAD
 //Using an explicit empty object type for props to satisfy lint rules type Props = Record<string never>;
const ServicePage: NextPage<Props> = () => {
  return (<> <Head> <title>Instagram Content Scheduler | Services</title> <meta name="description" content="Auto-generate posts from blog feeds and schedule with analytics." /> </Head> <main> <h1>InstagramContentScheduler</h1> <p>Service details coming soon...</p> <a href="/services" >Back to Services</a> </main> </div> export default ServicePage;
=======
import type { NextPage } from 'next';
import Head from 'next/head';
// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string, never>;

const ServicePage: NextPage<Props> = () => {
=======
import type { NextPage } from 'next';
import Head from 'next/head';
// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string, never>;

const ServicePage: NextPage<Props> = () => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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
  )
};

export default ServicePage;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
