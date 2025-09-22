import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <main>
        <Head>
          <title>Zion Tech Group</title>
          <meta name="description" content="Advanced IT Solutions & AI Services" />
        </Head>
        <h1>Welcome to Zion Tech Group</h1>
        <p>Advanced IT Solutions & AI Services</p>
        <Link href="/services">View Our Services</Link>
      </main>
    </div>
  )
}
