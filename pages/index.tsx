import Head from 'next/head';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Zion Tech Solutions - AI-Powered Business Solutions</title>
        <meta name="description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zion Tech Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">AI-Powered Business Solutions</p>
          <div className="space-x-4">
            <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View Dashboard
            </Link>
            <Link href="/services" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}