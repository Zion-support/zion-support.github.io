import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>Zion Tech Group - Innovative Technology Solutions</title>
        <meta name="description" content="Leading provider of cutting-edge technology solutions and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We provide innovative technology solutions that drive business growth and digital transformation. 
            Our comprehensive services range from cloud computing to AI integration.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Services</h2>
              <p className="text-gray-600 mb-4">
                Explore our comprehensive range of technology services designed to meet your business needs.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
              <p className="text-gray-600 mb-4">
                Discover our mission, values, and the team behind our innovative solutions.
              </p>
              <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Get in touch with our experts to discuss your technology needs.
              </p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <Link 
              href="/services" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}