import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group" />
      </Head>
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Zion Tech Group</h1>
      </main>
    </div>
  );
}

