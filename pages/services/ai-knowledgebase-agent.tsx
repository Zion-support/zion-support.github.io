import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const AiKnowledgebaseAgent: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AiKnowledgebaseAgent - Zion Tech Solutions</title>
        <meta name="description" content="AiKnowledgebaseAgent service" />
      </Head>
      
      <main>
        <h1>AiKnowledgebaseAgent</h1>
        <p>Service details coming soon...</p>
        <Link href="/services">Back to Services</Link>
      </main>
    </div>
  );
};

export default AiKnowledgebaseAgent;