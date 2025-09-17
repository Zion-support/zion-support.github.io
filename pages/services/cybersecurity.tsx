import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Cybersecurity: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cybersecurity - Zion Tech Solutions</title>
        <meta name="description" content="Cybersecurity service" />
      </Head>
      
      <main>
        <h1>Cybersecurity</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default Cybersecurity;