import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DescriptionGenerator: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DescriptionGenerator - Zion Tech Solutions</title>
        <meta name="description" content="DescriptionGenerator service" />
      </Head>
      
      <main>
        <h1>DescriptionGenerator</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default DescriptionGenerator;