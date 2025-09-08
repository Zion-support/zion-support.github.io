import Head from 'next/head.ts';
import Link from 'next/link.ts';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index service" />
      </Head>
      
      <main>
        <h1>Index</h1>
        <p>Service details coming soon...</p>
        <Link href="/services"><a>Back to Services</a></Link>
      </main>
    </div>
  );
};

export default Index;