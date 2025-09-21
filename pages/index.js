import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Zion Tech Group - Innovative Technology Solutions</title>
        <meta name="description" content="Leading provider of innovative technology solutions and services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Leading provider of innovative technology solutions and services for modern businesses.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <Link href="/services">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Services</h3>
                <p className="text-gray-600">Explore our comprehensive technology solutions</p>
              </a>
            </Link>
            
            <Link href="/about">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About Us</h3>
                <p className="text-gray-600">Learn about our mission and expertise</p>
              </a>
            </Link>
            
            <Link href="/contact">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact</h3>
                <p className="text-gray-600">Get in touch with our team</p>
              </a>
            </Link>
            
            <Link href="/services-advertising">
              <a className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow block">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advertising</h3>
                <p className="text-gray-600">Discover our advertising solutions</p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}