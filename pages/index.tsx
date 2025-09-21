import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bolt.new Zion App</title>
        <meta name="description" content="Bolt.new Zion App - Next.js Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Bolt.new Zion App</h1>
          <p className="text-xl text-gray-300">Welcome to the Next.js application</p>
        </div>
      </main>
    </>
  )
}