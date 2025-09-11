import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Head>
        <title>Zion Tech Group — AI, IT & Micro SaaS</title>
        <meta name="description" content="AI services, IT solutions, and micro SaaS products. Contact us for a tailored consultation." />
        <link rel="canonical" href="https://ziontechgroup.com/" />
      </Head>
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Zion Tech Group</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">AI services, IT solutions, and micro SaaS that drive measurable ROI.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/services" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Explore Services</Link>
          <Link href="/contact" className="border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-white">Contact Us</Link>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <a href="tel:+13024640950" className="mr-4 hover:underline">+1 302 464 0950</a>
          <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
        </div>
      </section>
    </div>
  )
}