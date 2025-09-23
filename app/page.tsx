import Link from 'next/link'

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Zion Tech Group
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          AI, cloud, and micro SaaS solutions to accelerate your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-black text-white px-6 py-3 rounded-md font-semibold"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="border px-6 py-3 rounded-md font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}
