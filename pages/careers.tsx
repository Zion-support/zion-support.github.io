
import Head from 'next/head'
import Link from 'next/link'

export default function Careers() {
  return (
    <>

      <Head>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help build the future of AI, Micro SaaS, and IT solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Careers</h1>
        <p className="text-gray-600 mb-8">We are always looking for talented people. If you are passionate about technology and solving meaningful problems, we would love to hear from you.</p>
        <div className="space-x-4">
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">Contact Us</Link>
          <a href="mailto:careers@ziontechgroup.com" className="inline-block border border-gray-300 px-6 py-3 rounded-lg">careers@ziontechgroup.com</a>
        </div>
      </main>
    </>
  )
}


