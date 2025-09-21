import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - AI-Powered Technology Solutions</title>
        <meta name="description" content="Leading provider of AI-powered technology solutions, automation services, and innovative digital transformation for modern businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading provider of AI-powered technology solutions, automation services, and innovative digital transformation for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Explore Services
              </Link>
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Solutions</h3>
              <p className="text-gray-600">
                Harness the power of artificial intelligence to transform your business operations and drive innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automation Services</h3>
              <p className="text-gray-600">
                Streamline your workflows with our comprehensive automation solutions designed for efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600">
                Modernize your business with cutting-edge technology solutions tailored to your needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-6">
              Let's discuss how our AI-powered solutions can help you achieve your goals.
            </p>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block">
              Start Your Journey
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}